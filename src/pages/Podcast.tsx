import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_URL } from "@/data/services";
import studioImage from "@/assets/akedah-podcast-studio.jpg";

const schedule = [
  { day: "18", month: "Julho", episode: "Episódio 101", guest: "[Nome do convidado 1]", time: "19h00" },
  { day: "21", month: "Julho", episode: "Episódio 102", guest: "[Nome do convidado 2]", time: "19h00" },
  { day: "25", month: "Julho", episode: "Episódio 103", guest: "[Nome do convidado 3]", time: "19h00" },
  { day: "28", month: "Julho", episode: "Episódio 104", guest: "[Nome do convidado 4]", time: "19h00" },
];

const socials = [
  {
    name: "Instagram",
    headline: "Bastidores e stories do dia a dia do estúdio.",
    text: "Fotos das gravações, chamadas de novos episódios e conteúdo exclusivo.",
    cta: "Clique aqui e siga",
    href: "https://instagram.com/",
  },
  {
    name: "YouTube — Cortes",
    headline: "Os melhores trechos de cada entrevista.",
    text: "Cortes curtos das melhores falas do podcast, direto no canal secundário.",
    cta: "Clique aqui e assista",
    href: "https://youtube.com/",
  },
  {
    name: "TikTok",
    headline: "Momentos rápidos e virais do programa.",
    text: "Clipes verticais pensados para o formato do TikTok, publicados toda semana.",
    cta: "Clique aqui e siga",
    href: "https://tiktok.com/",
  },
];

const Podcast = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Akedah Podcast",
    description:
      "Entrevistas, bastidores e histórias reais sobre comercial e estratégia. Dois programas por semana, gravados no Estúdio Akedah.",
    url: "https://akedah.com.br/podcast",
    publisher: { "@type": "Organization", name: "Akedah" },
  };

  return (
    <div className="min-h-screen bg-[#070807]">
      <SEO
        title="Akedah Podcast | Entrevistas sobre comercial e estratégia"
        description="Tudo sobre o Akedah Podcast: calendário de entrevistas, canal ao vivo e bastidores do estúdio. Dois programas por semana."
        url="https://akedah.com.br/podcast"
        schema={schema}
      />
      <Navbar />

      {/* Hero */}
      <header className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img
          src={studioImage}
          alt="Estúdio de gravação do Akedah Podcast"
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070807] via-[#070807]/70 to-[#070807]/40" />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

        <div className="container-editorial relative z-10 pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C4550A] animate-pulse" />
              <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">
                2 programas por semana
              </span>
            </div>
            <h1
              className="font-display font-[900] text-white leading-[0.85] tracking-[-0.05em] max-w-4xl"
              style={{ fontSize: "clamp(44px, 8.5vw, 116px)" }}
            >
              Tudo sobre o <br />
              <span className="text-[#C4550A] italic font-normal">Akedah Podcast.</span>
            </h1>
            <p className="mt-10 text-white/55 text-[17px] md:text-[20px] max-w-2xl leading-[1.6]">
              Entrevistas, bastidores e histórias reais sobre comercial e estratégia. Escolha para onde ir:
              calendário, canal ao vivo ou os bastidores em fotos.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium px-12"
              >
                Assistir ao vivo
              </a>
              <a href="#calendario" className="btn-premium-outline px-12">
                Ver calendário
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Quick links */}
      <section className="border-y border-white/[0.06] bg-black/40">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {[
            {
              label: "Próximas entrevistas",
              text: "Clique aqui para o calendário de entrevistas.",
              cta: "Ver datas e horários",
              href: "#calendario",
            },
            {
              label: "Assista completo",
              text: "Vá direto para o nosso canal.",
              cta: "Abrir no YouTube",
              href: "https://youtube.com/",
            },
            {
              label: "Bastidores",
              text: "Veja as fotos da entrevista.",
              cta: "Ver galeria",
              href: "https://instagram.com/",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("#") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group py-12 md:py-16 md:px-10 first:md:pl-0 block"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C4550A]/70 font-bold">{item.label}</p>
              <p className="mt-5 font-display text-[22px] md:text-[26px] font-bold text-white leading-tight group-hover:text-[#C4550A] transition-colors duration-500">
                {item.text}
              </p>
              <span className="mt-6 inline-block text-[11px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white transition-colors">
                {item.cta} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Ao vivo */}
      <section className="py-24 md:py-36">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5">
            <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">Ao vivo</span>
            <h2 className="mt-8 font-display text-[36px] md:text-[62px] font-[900] text-white leading-[0.88] tracking-[-0.04em]">
              Assista ao Akedah Podcast <span className="text-[#C4550A] italic font-normal">sem sair da página.</span>
            </h2>
            <p className="mt-8 text-white/50 text-[16px] leading-relaxed max-w-md">
              Toda entrevista fica disponível aqui logo após a gravação, direto do nosso canal no YouTube.
            </p>
            <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-white/30">Novo episódio toda semana</p>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium px-12 mt-10"
            >
              Inscreva-se no canal
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-video border border-white/[0.08] overflow-hidden">
              <img
                src={studioImage}
                alt="Transmissão do Akedah Podcast"
                loading="lazy"
                width={1600}
                height={900}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-20 h-20 rounded-full bg-[#C4550A] flex items-center justify-center">
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="#fff" aria-hidden>
                    <path d="M0 0l22 13L0 26z" />
                  </svg>
                </span>
              </div>
              <span className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4550A] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Ao vivo</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Calendário */}
      <section id="calendario" className="py-24 md:py-36 border-t border-white/[0.06] bg-black/40">
        <div className="container-editorial">
          <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">Calendário</span>
          <h2 className="mt-8 font-display text-[36px] md:text-[62px] font-[900] text-white leading-[0.88] tracking-[-0.04em] max-w-3xl">
            Próximas entrevistas do Akedah Podcast.
          </h2>
          <p className="mt-8 text-white/50 text-[16px] max-w-xl leading-relaxed">
            Datas e horários confirmados. Marque na agenda e acompanhe ao vivo.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
            {schedule.map((item) => (
              <div key={item.episode} className="bg-[#070807] p-8 md:p-10 flex items-center gap-8">
                <div className="text-center flex-shrink-0">
                  <p className="font-display text-[42px] font-[900] text-[#C4550A] leading-none">{item.day}</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mt-2">{item.month}</p>
                </div>
                <div className="border-l border-white/[0.08] pl-8">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">{item.episode}</p>
                  <h3 className="mt-3 font-display text-[20px] md:text-[24px] font-bold text-white leading-tight">
                    {item.guest}
                  </h3>
                  <p className="mt-3 text-[13px] text-white/45">{item.time}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-white/30 text-[13px] max-w-2xl leading-relaxed">
            Datas sujeitas a alteração. A confirmação de cada episódio é publicada com antecedência no Instagram e no
            YouTube do Akedah Podcast.
          </p>
        </div>
      </section>

      {/* Redes sociais */}
      <section className="py-24 md:py-36 border-t border-white/[0.06]">
        <div className="container-editorial">
          <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">Redes sociais</span>
          <h2 className="mt-8 font-display text-[36px] md:text-[62px] font-[900] text-white leading-[0.88] tracking-[-0.04em] max-w-3xl">
            Acompanhe o Akedah Podcast em todos os lugares.
          </h2>
          <p className="mt-8 text-white/50 text-[16px] max-w-xl leading-relaxed">
            Cortes, bastidores e conteúdo exclusivo em cada rede. Clique no card e siga a gente.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/[0.08] p-8 hover:border-[#C4550A]/60 transition-colors duration-500"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#C4550A]/70 font-bold">{s.name}</p>
                <h3 className="mt-6 font-display text-[22px] font-bold text-white leading-snug group-hover:text-[#C4550A] transition-colors duration-500">
                  {s.headline}
                </h3>
                <p className="mt-4 text-white/45 text-[14px] leading-relaxed">{s.text}</p>
                <span className="mt-8 inline-block text-[11px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white transition-colors">
                  {s.cta} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 border-t border-white/[0.06] text-center">
        <div className="container-editorial">
          <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">
            Quer participar como convidado?
          </span>
          <h2 className="mt-10 font-display text-[40px] md:text-[80px] font-[900] text-white leading-[0.86] tracking-[-0.05em] max-w-4xl mx-auto">
            Fale com a gente e entre no <span className="text-[#C4550A] italic font-normal">Akedah Podcast.</span>
          </h2>
          <div className="mt-14 flex justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-premium px-16">
              Fale com um especialista
            </a>
          </div>
          <p className="mt-8 text-white/30 text-[12px] uppercase tracking-[0.2em]">Resposta em até 1 dia útil.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Podcast;
