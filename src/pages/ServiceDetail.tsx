import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { getServiceBySlug, services, WHATSAPP_URL } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== service.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} — Akedah`,
    serviceType: service.name,
    description: service.heroSubtitle,
    provider: {
      "@type": "Organization",
      name: "Akedah",
      url: "https://akedah.com.br",
    },
    areaServed: "BR",
  };

  return (
    <div className="min-h-screen bg-[#070807]">
      <SEO
        title={`${service.name} | Akedah`}
        description={service.heroSubtitle}
        url={`https://akedah.com.br/servicos/${service.slug}`}
        schema={schema}
      />
      <Navbar />

      {/* Hero */}
      <header className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img
          src={service.image}
          alt={`${service.name} — Estúdio Akedah`}
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070807] via-[#070807]/70 to-[#070807]/30" />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

        <div className="container-editorial relative z-10 pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] text-white/30 tracking-[0.3em]">{service.number}</span>
              <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">
                {service.eyebrow}
              </span>
            </div>
            <h1
              className="font-display font-[900] text-white leading-[0.85] tracking-[-0.05em] max-w-5xl"
              style={{ fontSize: "clamp(44px, 8vw, 108px)" }}
            >
              {service.heroTitle}{" "}
              <span className="text-[#C4550A] italic font-normal">{service.heroHighlight}</span>
            </h1>
            <p className="mt-10 text-white/55 text-[17px] md:text-[20px] font-normal max-w-2xl leading-[1.6]">
              {service.heroSubtitle}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-premium px-12">
                Falar com um especialista
              </a>
              <Link to="/#servicos" className="btn-premium-outline px-12">
                Ver todos os serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stats */}
      <section className="border-y border-white/[0.06] bg-black/40">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {service.stats.map((stat) => (
            <div key={stat.label} className="py-12 md:py-16 md:px-10 first:md:pl-0">
              <p className="font-display text-[36px] md:text-[48px] font-[900] text-white leading-none tracking-tighter">
                {stat.value}
              </p>
              <p className="mt-4 text-[12px] uppercase tracking-[0.18em] text-[#C4550A]/70 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Problems / fit */}
      <Block eyebrow="O contexto" title={service.problemTitle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {service.problems.map((item, i) => (
            <div key={item.title} className="bg-[#070807] p-8 md:p-10">
              <span className="font-mono text-[10px] text-[#C4550A]/60 tracking-[0.3em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-[20px] md:text-[24px] font-bold text-white leading-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-white/50 text-[15px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* Process */}
      <Block eyebrow="O processo" title={service.processTitle}>
        <div className="relative border-l border-white/[0.08] pl-8 md:pl-14 space-y-14">
          {service.process.map((step, i) => (
            <div key={step.title} className="relative">
              <span className="absolute -left-[41px] md:-left-[59px] top-2 w-2.5 h-2.5 rounded-full bg-[#C4550A]" />
              <span className="font-mono text-[10px] text-white/25 tracking-[0.3em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-[26px] md:text-[38px] font-[900] text-white leading-tight tracking-tight">
                {step.title}
              </h3>
              <p className="mt-4 text-white/50 text-[16px] leading-relaxed max-w-2xl">{step.description}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* Deliverables */}
      <Block eyebrow="Entregáveis" title={service.deliverablesTitle}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.deliverables.map((item) => (
            <div
              key={item.title}
              className="border border-white/[0.08] p-8 hover:border-[#C4550A]/50 transition-colors duration-500"
            >
              <h3 className="font-display text-[17px] font-bold text-white leading-snug">{item.title}</h3>
              <p className="mt-4 text-white/45 text-[14px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* Fit */}
      <Block eyebrow="Perfil ideal" title={service.fitTitle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {service.fit.map((item) => (
            <div key={item.title} className="flex gap-5">
              <span className="mt-2 w-2 h-2 flex-shrink-0 bg-[#C4550A]" />
              <div>
                <h3 className="font-display text-[18px] font-bold text-white leading-snug">{item.title}</h3>
                <p className="mt-3 text-white/45 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* Testimonial */}
      <section className="py-28 md:py-40 border-t border-white/[0.06] bg-black/40">
        <div className="container-editorial max-w-4xl">
          <p className="font-display text-[22px] md:text-[34px] font-normal text-white leading-[1.4] tracking-tight">
            “{service.testimonial.quote}”
          </p>
          <div className="mt-10">
            <p className="font-display text-[13px] font-bold text-white uppercase tracking-[0.2em]">
              {service.testimonial.name}
            </p>
            <p className="text-[#C4550A]/70 text-[11px] uppercase tracking-[0.15em] mt-2">
              {service.testimonial.role}
            </p>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-24 md:py-32 border-t border-white/[0.06]">
        <div className="container-editorial">
          <p className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em] mb-10">Outros serviços</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/servicos/${s.slug}`}
                className="group border border-white/[0.08] p-8 hover:border-[#C4550A]/60 transition-colors duration-500"
              >
                <span className="font-mono text-[10px] text-white/25 tracking-[0.3em]">{s.number}</span>
                <h3 className="mt-5 font-display text-[24px] font-[900] text-white group-hover:text-[#C4550A] transition-colors duration-500 leading-tight">
                  {s.name}
                </h3>
                <p className="mt-4 text-white/45 text-[14px] leading-relaxed">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 border-t border-white/[0.06] text-center">
        <div className="container-editorial">
          <h2 className="font-display text-[40px] md:text-[76px] font-[900] text-white leading-[0.86] tracking-[-0.05em] max-w-4xl mx-auto">
            {service.ctaTitle}
          </h2>
          <p className="mt-10 text-white/50 text-[17px] max-w-2xl mx-auto leading-relaxed">{service.ctaText}</p>
          <div className="mt-14 flex justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-premium px-16">
              Conversar agora
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Block = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="py-24 md:py-36 border-t border-white/[0.06]">
    <div className="container-editorial">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mb-16 md:mb-24"
      >
        <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">{eyebrow}</span>
        <h2 className="mt-8 font-display text-[34px] md:text-[62px] font-[900] text-white leading-[0.9] tracking-[-0.04em] max-w-4xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </div>
  </section>
);

export default ServiceDetail;
