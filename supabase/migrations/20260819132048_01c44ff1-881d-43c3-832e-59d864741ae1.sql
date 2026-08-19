-- 1. client_credentials: drop duplicate restrictive policy
DROP POLICY IF EXISTS "Admins can manage client credentials" ON public.client_credentials;
DROP POLICY IF EXISTS "Admins can manage client credentials (permissive)" ON public.client_credentials;
CREATE POLICY "Admins can manage client credentials"
ON public.client_credentials FOR ALL TO authenticated
USING (auth_helpers.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (auth_helpers.has_role(auth.uid(), 'admin'::app_role));

-- 2. Lock down the SECURITY DEFINER login RPC (edge function uses service_role)
REVOKE ALL ON FUNCTION public.verify_client_credentials(text, text) FROM anon, authenticated, PUBLIC;

-- 3. Internal-only project data
CREATE TABLE public.project_internals (
  project_id uuid PRIMARY KEY REFERENCES public.projects(id) ON DELETE CASCADE,
  studio_observation text,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.project_internals TO authenticated;
GRANT ALL ON public.project_internals TO service_role;
ALTER TABLE public.project_internals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage project internals" ON public.project_internals FOR ALL TO authenticated
USING (auth_helpers.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (auth_helpers.has_role(auth.uid(), 'admin'::app_role));

CREATE TABLE public.project_partner_notes (
  project_id uuid PRIMARY KEY REFERENCES public.projects(id) ON DELETE CASCADE,
  partner_notes text,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.project_partner_notes TO authenticated;
GRANT ALL ON public.project_partner_notes TO service_role;
ALTER TABLE public.project_partner_notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage partner notes" ON public.project_partner_notes FOR ALL TO authenticated
USING (auth_helpers.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (auth_helpers.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Partners view notes of sold projects" ON public.project_partner_notes FOR SELECT TO authenticated
USING (auth_helpers.has_role(auth.uid(), 'partner'::app_role) AND auth_helpers.is_partner_project(auth.uid(), project_id));

CREATE TABLE public.project_stage_internals (
  stage_id uuid PRIMARY KEY REFERENCES public.project_stages(id) ON DELETE CASCADE,
  internal_tasks jsonb NOT NULL DEFAULT '[]'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.project_stage_internals TO authenticated;
GRANT ALL ON public.project_stage_internals TO service_role;
ALTER TABLE public.project_stage_internals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage stage internals" ON public.project_stage_internals FOR ALL TO authenticated
USING (auth_helpers.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (auth_helpers.has_role(auth.uid(), 'admin'::app_role));

INSERT INTO public.project_internals (project_id, studio_observation)
SELECT id, studio_observation FROM public.projects WHERE studio_observation IS NOT NULL;
INSERT INTO public.project_partner_notes (project_id, partner_notes)
SELECT id, partner_notes FROM public.projects WHERE partner_notes IS NOT NULL;
INSERT INTO public.project_stage_internals (stage_id, internal_tasks)
SELECT id, internal_tasks FROM public.project_stages WHERE internal_tasks IS NOT NULL;

ALTER TABLE public.projects DROP COLUMN studio_observation, DROP COLUMN partner_notes;
ALTER TABLE public.project_stages DROP COLUMN internal_tasks;

-- 4. Client-safe payment mirror + partner commission mirror (replace SECURITY DEFINER views)
CREATE TABLE public.client_payment_summaries (
  payment_id uuid PRIMARY KEY,
  project_id uuid NOT NULL,
  budget_total numeric NOT NULL DEFAULT 0,
  initial_payment numeric,
  initial_payment_date date,
  remaining_amount numeric,
  installments_total integer,
  installments_paid integer,
  next_payment_date date,
  sale_date date,
  payment_method text,
  payment_status text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.client_payment_summaries TO authenticated;
GRANT ALL ON public.client_payment_summaries TO service_role;
ALTER TABLE public.client_payment_summaries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins view payment summaries" ON public.client_payment_summaries FOR SELECT TO authenticated
USING (auth_helpers.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Clients view own payment summaries" ON public.client_payment_summaries FOR SELECT TO authenticated
USING (auth_helpers.is_project_client(auth.uid(), project_id));

CREATE TABLE public.partner_commissions (
  payment_id uuid PRIMARY KEY,
  project_id uuid NOT NULL,
  sale_date date,
  sales_rep text,
  commission_amount numeric NOT NULL DEFAULT 0,
  commission_paid_to_partner boolean NOT NULL DEFAULT false,
  commission_paid_date date,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.partner_commissions TO authenticated;
GRANT ALL ON public.partner_commissions TO service_role;
ALTER TABLE public.partner_commissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins view partner commissions" ON public.partner_commissions FOR SELECT TO authenticated
USING (auth_helpers.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Partners view own commissions" ON public.partner_commissions FOR SELECT TO authenticated
USING (auth_helpers.has_role(auth.uid(), 'partner'::app_role) AND sales_rep = auth_helpers.get_partner_name(auth.uid()));

CREATE TABLE public.client_display_names (
  profile_id uuid PRIMARY KEY,
  full_name text NOT NULL DEFAULT '',
  company text,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.client_display_names TO authenticated;
GRANT ALL ON public.client_display_names TO service_role;
ALTER TABLE public.client_display_names ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins view client display names" ON public.client_display_names FOR SELECT TO authenticated
USING (auth_helpers.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Partners view their clients display names" ON public.client_display_names FOR SELECT TO authenticated
USING (auth_helpers.has_role(auth.uid(), 'partner'::app_role) AND auth_helpers.is_partner_client_profile(auth.uid(), profile_id));

-- sync functions live in the non-exposed auth_helpers schema
CREATE OR REPLACE FUNCTION auth_helpers.sync_payment_mirrors()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF TG_OP = 'DELETE' THEN
    DELETE FROM public.client_payment_summaries WHERE payment_id = OLD.id;
    DELETE FROM public.partner_commissions WHERE payment_id = OLD.id;
    RETURN OLD;
  END IF;

  INSERT INTO public.client_payment_summaries AS c (
    payment_id, project_id, budget_total, initial_payment, initial_payment_date,
    remaining_amount, installments_total, installments_paid, next_payment_date,
    sale_date, payment_method, payment_status, created_at, updated_at
  ) VALUES (
    NEW.id, NEW.project_id, NEW.budget_total, NEW.initial_payment, NEW.initial_payment_date,
    NEW.remaining_amount, NEW.installments_total, NEW.installments_paid, NEW.next_payment_date,
    NEW.sale_date, NEW.payment_method, NEW.payment_status, NEW.created_at, now()
  )
  ON CONFLICT (payment_id) DO UPDATE SET
    project_id = EXCLUDED.project_id, budget_total = EXCLUDED.budget_total,
    initial_payment = EXCLUDED.initial_payment, initial_payment_date = EXCLUDED.initial_payment_date,
    remaining_amount = EXCLUDED.remaining_amount, installments_total = EXCLUDED.installments_total,
    installments_paid = EXCLUDED.installments_paid, next_payment_date = EXCLUDED.next_payment_date,
    sale_date = EXCLUDED.sale_date, payment_method = EXCLUDED.payment_method,
    payment_status = EXCLUDED.payment_status, updated_at = now();

  INSERT INTO public.partner_commissions AS pc (
    payment_id, project_id, sale_date, sales_rep, commission_amount,
    commission_paid_to_partner, commission_paid_date, updated_at
  ) VALUES (
    NEW.id, NEW.project_id, NEW.sale_date, NEW.sales_rep, NEW.commission_amount,
    NEW.commission_paid_to_partner, NEW.commission_paid_date, now()
  )
  ON CONFLICT (payment_id) DO UPDATE SET
    project_id = EXCLUDED.project_id, sale_date = EXCLUDED.sale_date,
    sales_rep = EXCLUDED.sales_rep, commission_amount = EXCLUDED.commission_amount,
    commission_paid_to_partner = EXCLUDED.commission_paid_to_partner,
    commission_paid_date = EXCLUDED.commission_paid_date, updated_at = now();

  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION auth_helpers.sync_client_display_name()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF TG_OP = 'DELETE' THEN
    DELETE FROM public.client_display_names WHERE profile_id = OLD.id;
    RETURN OLD;
  END IF;
  INSERT INTO public.client_display_names (profile_id, full_name, company, updated_at)
  VALUES (NEW.id, NEW.full_name, NEW.company, now())
  ON CONFLICT (profile_id) DO UPDATE SET
    full_name = EXCLUDED.full_name, company = EXCLUDED.company, updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER sync_payment_mirrors_trg
AFTER INSERT OR UPDATE OR DELETE ON public.payments
FOR EACH ROW EXECUTE FUNCTION auth_helpers.sync_payment_mirrors();

CREATE TRIGGER sync_client_display_name_trg
AFTER INSERT OR UPDATE OR DELETE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION auth_helpers.sync_client_display_name();

INSERT INTO public.client_payment_summaries (
  payment_id, project_id, budget_total, initial_payment, initial_payment_date,
  remaining_amount, installments_total, installments_paid, next_payment_date,
  sale_date, payment_method, payment_status, created_at, updated_at)
SELECT id, project_id, budget_total, initial_payment, initial_payment_date,
  remaining_amount, installments_total, installments_paid, next_payment_date,
  sale_date, payment_method, payment_status, created_at, now()
FROM public.payments;

INSERT INTO public.partner_commissions (
  payment_id, project_id, sale_date, sales_rep, commission_amount,
  commission_paid_to_partner, commission_paid_date, updated_at)
SELECT id, project_id, sale_date, sales_rep, commission_amount,
  commission_paid_to_partner, commission_paid_date, now()
FROM public.payments;

INSERT INTO public.client_display_names (profile_id, full_name, company, updated_at)
SELECT id, full_name, company, now() FROM public.profiles;

-- 5. Replace SECURITY DEFINER views with security_invoker views over the mirrors
DROP VIEW IF EXISTS public.client_payments_view;
DROP VIEW IF EXISTS public.partner_payments_view;
DROP VIEW IF EXISTS public.partner_client_names;

CREATE VIEW public.client_payments_view WITH (security_invoker = on) AS
SELECT payment_id AS id, project_id, budget_total, initial_payment, initial_payment_date,
  remaining_amount, installments_total, installments_paid, next_payment_date,
  sale_date, payment_method, payment_status, created_at, updated_at
FROM public.client_payment_summaries;

CREATE VIEW public.partner_payments_view WITH (security_invoker = on) AS
SELECT payment_id AS id, project_id, sale_date, sales_rep, commission_amount,
  commission_paid_to_partner, commission_paid_date
FROM public.partner_commissions;

CREATE VIEW public.partner_client_names WITH (security_invoker = on) AS
SELECT profile_id AS id, full_name, company
FROM public.client_display_names;

GRANT SELECT ON public.client_payments_view TO authenticated;
GRANT SELECT ON public.partner_payments_view TO authenticated;
GRANT SELECT ON public.partner_client_names TO authenticated;