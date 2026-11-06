import { useEffect, useState, type ReactNode, type FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Instagram,
  Youtube,
  ArrowRight,
  Mail,
  ChevronDown,
} from "lucide-react";
import { AKEDAH_EMAIL, WHATSAPP_URL } from "@/data/services";
import { ReferenceContact, useReferenceDesktop } from "./ReferenceCanvas";
import "@fontsource/nunito-sans/latin-400.css";
import "@fontsource/nunito-sans/latin-700.css";
import "@fontsource/nunito-sans/latin-900.css";
import "./illustrated.css";

export const YOUTUBE = "https://www.youtube.com/@EstudioAkedah";
export const INSTAGRAM = "https://www.instagram.com/estudioakedah";
export function Art({
  name,
  box,
  className = "",
  label,
  eager = false,
}: {
  name: string;
  box: string;
  className?: string;
  label?: string;
  eager?: boolean;
}) {
  const [x, y, width, height] = box.split(" ").map(Number);
  return (
    <div
      className={`ak-art ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <img
        src={`/akedah/${name}.png`}
        alt={label || ""}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        width="1672"
        height="941"
        style={{
          width: `${(1672 / width) * 100}%`,
          height: `${(941 / height) * 100}%`,
          left: `${(-x / width) * 100}%`,
          top: `${(-y / height) * 100}%`,
        }}
      />
    </div>
  );
}
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      className="ak-logo"
      to="/podcast"
      aria-label="Akedah Podcast — início"
    >
      <img
        src={`/akedah/logo-${dark ? "brown" : "cream"}.png`}
        alt="Akedah Podcast"
        width="2048"
        height="725"
      />
    </Link>
  );
}
export function Action({
  href,
  children,
  outline = false,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  outline?: boolean;
  dark?: boolean;
}) {
  const cls = `ak-button${outline ? " ak-button-outline" : ""}${dark ? " ak-button-brown" : ""}`;
  return href.startsWith("/") ? (
    <Link className={cls} to={href}>
      {children}
    </Link>
  ) : (
    <a
      className={cls}
      href={href}
      {...(href.startsWith("https:")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
export function Wave({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={`ak-wave${flip ? " ak-wave-flip" : ""}`}
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="#ff912e"
        d="M0 50C160-60 350 160 650 55S1090 125 1440 5V110H0Z"
      />
      <path
        fill="#f6e8c9"
        d="M0 82C250-30 380 160 690 80S1110 135 1440 38V110H0Z"
      />
    </svg>
  );
}
export function Soundwave() {
  return (
    <div className="ak-soundwave" aria-hidden="true">
      {Array.from({ length: 41 }, (_, i) => (
        <i
          key={i}
          style={{
            height: `${8 + Math.abs(Math.sin(i * 1.8)) * (1 - Math.abs(i - 20) / 21) * 52}px`,
          }}
        />
      ))}
    </div>
  );
}
export function PodcastShell({ children, reference = false }: { children: ReactNode; reference?: boolean }) {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.body.classList.add("ak-podcast-body");
    return () => document.body.classList.remove("ak-podcast-body");
  }, []);
  useEffect(() => {
    setOpen(false);
    if (!hash) return;
    const timer = window.setTimeout(
      () => document.getElementById(hash.slice(1))?.scrollIntoView(),
      160,
    );
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <div className="ak-site">
      <a className="ak-skip" href="#ak-main">
        Pular para o conteúdo
      </a>
      {!reference && <header className="ak-header">
        <Logo />
        <button
          className="ak-menu-toggle"
          aria-expanded={open}
          aria-controls="ak-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="ak-navigation"
          className={`ak-nav ${open ? "is-open" : ""}`}
          aria-label="Navegação do podcast"
          onClick={() => setOpen(false)}
        >
          <Link to="/podcast#destaque">Ao vivo</Link>
          <Link to="/podcast#calendario">Agenda</Link>
          <Link to="/podcast/sobre">Nossa história</Link>
          <Link to="/podcast/patrocinadores">Patrocinadores</Link>
          <Link to="/podcast/contato">Contato</Link>
        </nav>
      </header>}
      <main id="ak-main">{children}</main>
      {reference ? <footer className="ak-footer ak-reference-footer">
        <nav aria-label="Outras páginas">
          <Link to="/podcast">Início</Link>
          <Link to="/podcast/sobre">Nossa história</Link>
          <Link to="/podcast/patrocinadores">Patrocinadores</Link>
          <Link to="/podcast/contato">Contato</Link>
          <Link to="/">Estúdio Akedah</Link>
          <Link to="/daniel-silva">Daniel Silva</Link>
        </nav>
      </footer> : <footer className="ak-footer">
        <Logo />
        <div>
          <strong>Boas conversas conectam.</strong>
          <nav aria-label="Outras páginas">
            <Link to="/podcast/sobre">Nossa história</Link>
            <Link to="/">Estúdio Akedah</Link>
            <Link to="/daniel-silva">Daniel Silva</Link>
            <Link to="/podcast/contato">Contato</Link>
          </nav>
        </div>
        <div className="ak-social">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Akedah"
          >
            <Instagram />
          </a>
          <a
            href={YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube do Akedah"
          >
            <Youtube />
          </a>
        </div>
      </footer>}
    </div>
  );
}
export function ContactSection({ page = false }: { page?: boolean }) {
  const referenceDesktop = useReferenceDesktop();
  return referenceDesktop ? <ReferenceContact page={page} /> : <ResponsiveContactSection page={page} />;
}
function ResponsiveContactSection({ page = false }: { page?: boolean }) {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "Contato pelo site");
    const body = `Nome: ${data.get("name")}\nE-mail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${AKEDAH_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  const Heading = page ? "h1" : "h2";
  return (
    <section id="contato" className="ak-contact ak-section">
      <div className="ak-contact-copy">
        <span className="ak-tag">Contato</span>
        <Heading>
          Vamos
          <br />
          conversar?
        </Heading>
        <p>
          Ideias, parcerias ou uma boa história.
          <br />O próximo papo pode começar com você.
        </p>
        <Art
          name="contact"
          box="0 355 900 440"
          label="Apresentadores do Akedah trocando ideias"
        />
      </div>
      <form className="ak-form" onSubmit={submit}>
        <label htmlFor="ak-name">Nome</label>
        <input
          id="ak-name"
          name="name"
          autoComplete="name"
          required
          maxLength={120}
        />
        <label htmlFor="ak-email">E-mail</label>
        <input
          id="ak-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
        />
        <label htmlFor="ak-subject">Assunto</label>
        <input id="ak-subject" name="subject" required maxLength={180} />
        <label htmlFor="ak-message">Mensagem</label>
        <textarea
          id="ak-message"
          name="message"
          rows={4}
          required
          maxLength={4000}
        />
        <button className="ak-button" type="submit">
          Enviar mensagem <ArrowRight />
        </button>
        <small>Abre seu aplicativo de e-mail para concluir o envio.</small>
        {prepared && (
          <p role="status" className="ak-form-status">
            Mensagem preparada. Conclua o envio no seu aplicativo de e-mail ou
            fale conosco pelo WhatsApp.
          </p>
        )}
        <a
          className="ak-text-link"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Prefere conversar pelo WhatsApp?
        </a>
      </form>
    </section>
  );
}
export function ScrollCue() {
  return (
    <a className="ak-scroll-cue" href="#destaque">
      A conversa começa aqui
      <ChevronDown />
    </a>
  );
}
