import { useState, useEffect } from "react";
import { ChevronDown, Instagram } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import PodcastAtmosphere from "@/components/podcast/PodcastAtmosphere";
import { WHATSAPP_URL } from "@/data/services";

// Os 5 Logotipos Oficiais de Patrocinadores (os mesmos do site Daniel Silva)
import logoEstudioAkedah from "@/assets/patrocinadores/logo-estudio-akedah.png";
import logoAkedahPodcast from "@/assets/patrocinadores/logo-akedah-podcast.png";
import logoFecar from "@/assets/patrocinadores/logo-fecar.png";
import logoTabernaculo from "@/assets/patrocinadores/logo-tabernaculo.png";
import logoHorizontalSimbolo from "@/assets/patrocinadores/logo-horizontal-simbolo.png";

interface SponsorBoard {
  id: string;
  number: string;
  titleMain: string;
  titleSub: string;
  description: string;
  logo: string;
  logoAlt: string;
  logoSizeClass: string;
  instagramUrl: string;
  orientation: "logo-right" | "logo-left"; // Intercalado
}

const sponsorsData: SponsorBoard[] = [
  {
    id: "estudio-akedah",
    number: "01",
    titleMain: "ESTÚDIO AKEDAH",
    titleSub: "PRODUÇÃO & INFRAESTRUTURA",
    description:
      "Estúdio de alta performance para gravações corporativas, podcasts em 4K HDR e produções audiovisuais cinematográficas. Infraestrutura técnica de ponta e curadoria estratégica para grandes marcas e líderes.",
    logo: logoEstudioAkedah,
    logoAlt: "Estúdio Akedah",
    logoSizeClass: "max-w-[280px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] xl:max-w-[540px]",
    instagramUrl: "https://www.instagram.com/estudioakedah",
    orientation: "logo-right", // 1: Texto à Esquerda, Logotipo à Direita
  },
  {
    id: "akedah-podcast",
    number: "02",
    titleMain: "AKEDAH PODCAST",
    titleSub: "A MESA DE QUEM DECIDE",
    description:
      "O canal definitivo onde empresários, diretores e grandes realizadores debatem estratégia, negócios e governança sem filtro. Autoridade e alcance qualificado diante dos tomadores de decisão do mercado corporativo.",
    logo: logoAkedahPodcast,
    logoAlt: "Akedah Podcast",
    logoSizeClass: "max-w-[240px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px]",
    instagramUrl: "https://www.instagram.com/podcastakedah",
    orientation: "logo-left", // 2: Logotipo à Esquerda, Texto à Direita
  },
  {
    id: "fecar",
    number: "03",
    titleMain: "FE-CAR",
    titleSub: "MULTIMARCAS",
    description:
      "Com sólida credibilidade no segmento automotivo de luxo e utilitários, a FE-CAR Multimarcas entrega curadoria rigorosa de procedência, pós-venda exemplar e assessoria completa em compras corporativas e veículos de alto padrão.",
    logo: logoFecar,
    logoAlt: "FE-CAR Multimarcas",
    logoSizeClass: "max-w-[260px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px]",
    instagramUrl: "https://www.instagram.com/fecarmultimarcas",
    orientation: "logo-right", // 3: Texto à Esquerda, Logotipo à Direita
  },
  {
    id: "tabernaculo",
    number: "04",
    titleMain: "TABERNÁCULO",
    titleSub: "DA TRINDADE",
    description:
      "Fundamentada em princípios inegociáveis de fé, integridade e acolhimento familiar, a instituição lidera projetos humanitários de grande alcance, formação de valores éticos e iniciativas contínuas de transformação social.",
    logo: logoTabernaculo,
    logoAlt: "Tabernáculo da Trindade",
    logoSizeClass: "max-w-[260px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px]",
    instagramUrl: "https://www.instagram.com/tabernaculodatrindade",
    orientation: "logo-left", // 4: Logotipo à Esquerda, Texto à Direita
  },
  {
    id: "studio",
    number: "05",
    titleMain: "STUDIO",
    titleSub: "ENGENHARIA DE SOM & MASTER",
    description:
      "Engenharia sonora avançada, produção musical, pós-produção acústica e identidade auditiva corporativa. Criação de trilhas originais, mixagem e masterização para produções de altíssimo padrão e impacto emocional.",
    logo: logoHorizontalSimbolo,
    logoAlt: "Studio",
    logoSizeClass: "max-w-[240px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px]",
    instagramUrl: "https://www.instagram.com/estudioakedah",
    orientation: "logo-right", // 5: Texto à Esquerda, Logotipo à Direita
  },
];

const PodcastSponsors = () => {
  const [activeBoard, setActiveBoard] = useState(0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(el, { duration: 1 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Habilitar visualização de prancheta com scroll-snap apenas em telas desktop (>= 768px) igual ao site Daniel Silva
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.documentElement.classList.add("snap-y", "snap-proximity", "scroll-smooth");
      } else {
        document.documentElement.classList.remove("snap-y", "snap-proximity");
        document.documentElement.classList.add("scroll-smooth");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      document.documentElement.classList.remove("snap-y", "snap-proximity", "scroll-smooth");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        setTimeout(() => {
          scrollToSection(targetId);
        }, 150);
        return;
      }
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sponsorsData.forEach((sponsor, idx) => {
        const el = document.getElementById(sponsor.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveBoard(idx);
          }
        }
      });
      const ctaEl = document.getElementById("cta-final");
      if (ctaEl) {
        const top = ctaEl.offsetTop;
        const height = ctaEl.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveBoard(sponsorsData.length);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navegação suave por teclado (Setas Cima/Baixo e PageUp/PageDown)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth < 768) return;
      const allIds = [...sponsorsData.map((s) => s.id), "cta-final"];
      const scrollMiddle = window.scrollY + window.innerHeight / 2;
      let currentIndex = 0;
      allIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el && scrollMiddle >= el.offsetTop) {
          currentIndex = idx;
        }
      });

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (currentIndex < allIds.length - 1) {
          e.preventDefault();
          scrollToSection(allIds[currentIndex + 1]);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (currentIndex > 0) {
          e.preventDefault();
          scrollToSection(allIds[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#1C0F0A] text-white selection:bg-[#C4550A] selection:text-white relative font-sans">
      <SEO
        title="Patrocinadores Oficiais | Akedah Podcast"
        description="Conheça as marcas e empresas líderes que apoiam o Akedah Podcast. Parcerias estratégicas, autoridade corporativa e cotas de patrocínio."
        url="https://estudioakedah.com/podcast/patrocinadores"
      />

      <Navbar isPodcastPage={true} />

      {/* Atmosfera Moderna de Fundo: Granulação sutil e gradientes quentes (#1C0F0A) */}
      <PodcastAtmosphere />

      {/* Indicador Flutuante Lateral no Desktop (Navegação Rápida entre as 5 Pranchetas + CTA) */}
      <aside 
        aria-label="Navegador de Patrocinadores"
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3.5 bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/10 shadow-2xl"
      >
        {sponsorsData.map((sponsor, idx) => {
          const isActive = activeBoard === idx;
          return (
            <a
              key={sponsor.id}
              href={`#${sponsor.id}`}
              className="group relative flex items-center justify-end"
              aria-label={`Ir para ${sponsor.titleMain}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sponsor.id);
              }}
            >
              <span className="absolute right-7 py-1 px-3 rounded-md bg-[#180F0A] border border-white/15 text-xs font-bebas-neue tracking-widest uppercase text-white/90 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg">
                {sponsor.number} — {sponsor.titleMain}
              </span>
              <span
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#C4550A] scale-125 shadow-[0_0_12px_rgba(196,85,10,0.8)]"
                    : "bg-white/20 group-hover:bg-white/60"
                }`}
              />
            </a>
          );
        })}

        {/* Marcador da Seção Final */}
        <a
          href="#cta-final"
          className="group relative flex items-center justify-end"
          aria-label="Ir para Seja Patrocinador"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("cta-final");
          }}
        >
          <span className="absolute right-7 py-1 px-3 rounded-md bg-[#180F0A] border border-white/15 text-xs font-bebas-neue tracking-widest uppercase text-[#C4550A] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg">
            ★ SEJA PATROCINADOR
          </span>
          <span
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeBoard === sponsorsData.length
                ? "bg-[#C4550A] scale-125 shadow-[0_0_12px_rgba(196,85,10,0.8)]"
                : "bg-white/20 group-hover:bg-[#C4550A]"
            }`}
          />
        </a>
      </aside>

      <main className="relative z-10">
        {sponsorsData.map((sponsor, idx) => {
          const isLogoRight = sponsor.orientation === "logo-right";
          const nextSponsor = sponsorsData[idx + 1];

          return (
            <section
              key={sponsor.id}
              id={sponsor.id}
              className="relative min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#1C0F0A] border-b border-white/10 md:snap-start md:snap-always px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-20 md:py-0"
            >
              {/* Glow quente atmosférico motivado */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.12)_0%,_rgba(217,119,6,0.03)_50%,_transparent_72%)] blur-3xl pointer-events-none z-0" />

              {/* Grid de 2 Colunas: Palco do Logotipo Intercalado com o Bloco Editorial */}
              <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-12 md:gap-12 lg:gap-16 relative z-10">
                
                {/* ========================================================================= */}
                {/* PALCO VISUAL: O LOGOTIPO OFICIAL NO LUGAR DA IMAGEM                       */}
                {/* ========================================================================= */}
                <div
                  className={`w-full md:w-1/2 flex items-center justify-center relative py-8 sm:py-10 md:py-14 ${
                    isLogoRight ? "order-1 md:order-2" : "order-1 md:order-1"
                  }`}
                >
                  {/* Spotlight radial concentrada exclusivamente no logotipo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] md:w-[480px] lg:w-[540px] h-[220px] sm:h-[300px] md:h-[340px] bg-[radial-gradient(ellipse_at_center,_rgba(196,85,10,0.24)_0%,_rgba(217,119,6,0.06)_50%,_transparent_75%)] blur-2xl pointer-events-none" />

                  {/* O Logotipo Oficial em alta escala e nitidez total */}
                  <div className="relative z-10 flex items-center justify-center w-full px-4 sm:px-8 py-6 sm:py-8 group">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.logoAlt}
                      className={`${sponsor.logoSizeClass} w-auto h-auto object-contain filter brightness-[1.08] contrast-[1.05] drop-shadow-[0_16px_36px_rgba(0,0,0,0.7)] group-hover:scale-105 group-hover:brightness-115 transition-all duration-500 pointer-events-none select-none`}
                    />
                  </div>
                </div>

                {/* ========================================================================= */}
                {/* CONTEÚDO EDITORIAL: TÍTULO, DESCRIÇÃO, BOTÃO DO INSTAGRAM E INDICADORES   */}
                {/* ========================================================================= */}
                <div
                  className={`w-full md:w-1/2 flex flex-col items-start text-left ${
                    isLogoRight ? "order-2 md:order-1" : "order-2 md:order-2"
                  }`}
                >
                  {/* Título Principal com Darken Jellybean (Sem caixa/badge por cima) */}
                  <h1 className="font-darken-jellybean text-[36px] xs:text-[44px] sm:text-[56px] md:text-[68px] lg:text-[78px] xl:text-[84px] font-normal leading-[1.0] sm:leading-[0.95] tracking-tight uppercase mb-4 sm:mb-5 text-left">
                    <span className="block text-white">{sponsor.titleMain}</span>
                    <span className="text-[#C4550A] block">{sponsor.titleSub}</span>
                  </h1>

                  {/* Descrição Editorial com Bebas Neue em versão Book */}
                  <p className="font-bebas-neue font-normal text-white/80 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide max-w-xl text-left mb-6 sm:mb-8 md:mb-10">
                    {sponsor.description}
                  </p>

                  {/* Botão Único de Ação: Redirecionamento Direto para o Instagram do Patrocinador */}
                  <div className="flex items-center w-full sm:w-auto mb-6 sm:mb-8">
                    <a
                      href={sponsor.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#C4550A] text-white hover:bg-[#b04b08] border border-[#C4550A] font-bebas-neue text-base sm:text-lg uppercase tracking-[0.14em] px-7 sm:px-9 py-3.5 sm:py-4 rounded-[12px] sm:rounded-[14px] transition-all duration-300 shadow-xl shadow-[#C4550A]/25 text-center justify-center inline-flex items-center gap-2.5 group cursor-pointer"
                    >
                      <Instagram className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                      <span>Instagram Oficial</span>
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-sm">
                        ↗
                      </span>
                    </a>
                  </div>

                  {/* Indicadores de Paginação (5 Cards) idênticos aos da Hero Section da Home */}
                  <div className="flex items-center gap-2.5">
                    {sponsorsData.map((s, sIdx) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => scrollToSection(s.id)}
                        className={`h-1.5 transition-all duration-300 cursor-pointer ${
                          idx === sIdx
                            ? "w-8 bg-[#C4550A] ring-1 ring-[#C4550A]/50"
                            : "w-2.5 bg-white/25 hover:bg-white/60"
                        }`}
                        aria-label={`Ver prancheta ${sIdx + 1}: ${s.titleMain}`}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Indicador de Próximo Patrocinador / Scroll no Rodapé da Prancheta */}
              {nextSponsor ? (
                <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
                  <button
                    type="button"
                    onClick={() => scrollToSection(nextSponsor.id)}
                    className="group flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors duration-300 cursor-pointer"
                    aria-label={`Rolar para próxima prancheta: ${nextSponsor.titleMain}`}
                  >
                    <span className="text-[11px] sm:text-xs font-bebas-neue uppercase tracking-[0.2em] group-hover:text-[#C4550A] transition-colors">
                      PRÓXIMO PATROCINADOR ({nextSponsor.number})
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#C4550A] animate-bounce" />
                  </button>
                </div>
              ) : (
                <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
                  <button
                    type="button"
                    onClick={() => scrollToSection("cta-final")}
                    className="group flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <span className="text-[11px] sm:text-xs font-bebas-neue uppercase tracking-[0.2em] group-hover:text-[#C4550A] transition-colors">
                      SEJA UM PATROCINADOR OFICIAL
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#C4550A] animate-bounce" />
                  </button>
                </div>
              )}
            </section>
          );
        })}

        {/* ========================================================================= */}
        {/* SEÇÃO FINAL: CONVITE DE PATROCÍNIO & MÍDIA KIT                           */}
        {/* ========================================================================= */}
        <section
          id="cta-final"
          className="relative min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#1C0F0A] border-b border-white/10 px-6 sm:px-10 lg:px-16 text-center md:snap-start md:snap-always"
        >
          {/* Spotlight Quente Motivada */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.18)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-darken-jellybean text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white uppercase tracking-tight leading-[0.95] mb-5">
              SUA MARCA NA MAIOR <br />
              <span className="font-podcast text-[#C4550A] capitalize text-[1.12em] font-normal">
                Mesa de Negócios
              </span>
            </h2>

            <p className="font-bebas-neue font-normal text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 tracking-wide">
              Associe o nome da sua empresa a um conteúdo de altíssimo valor percebido, com transmissão 4K, cortes virais em redes sociais e distribuição direta para diretores, investidores e tomadores de decisão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20ser%20um%20patrocinador%20do%20Akedah%20Podcast`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C4550A] hover:bg-[#b04b08] text-white font-bebas-neue text-base sm:text-lg uppercase tracking-[0.16em] px-8 py-4 rounded-[12px] sm:rounded-[14px] transition-all duration-300 shadow-xl shadow-[#C4550A]/30 flex items-center gap-2 group"
              >
                <span>Falar com Assessoria de Patrocínios</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm">↗</span>
              </a>
              <a
                href="/podcast"
                className="bg-transparent hover:bg-white/10 text-white/90 hover:text-white border border-white/20 font-bebas-neue text-base sm:text-lg uppercase tracking-[0.16em] px-8 py-4 rounded-[12px] sm:rounded-[14px] transition-all duration-300"
              >
                <span>Voltar ao Podcast</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PodcastSponsors;
