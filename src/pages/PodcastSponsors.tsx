import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Instagram, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import PodcastAtmosphere from "@/components/podcast/PodcastAtmosphere";
import { WHATSAPP_URL, AKEDAH_EMAIL } from "@/data/services";

// Os 5 Logotipos Oficiais de Patrocinadores
import logoEstudioAkedah from "@/assets/patrocinadores/logo-estudio-akedah.png";
import logoDunamis from "@/assets/patrocinadores/dunamis.svg";
import logoFecar from "@/assets/patrocinadores/logo-fecar.png";
import logoTabernaculo from "@/assets/patrocinadores/logo-tabernaculo.png";
import logoHorizontalSimbolo from "@/assets/patrocinadores/logo-horizontal-simbolo.png";

interface SponsorDetail {
  id: string;
  number: string;
  category: string;
  titleLine1: string; // Linha 1: PerfectCorporate Black
  titleLine2: string; // Linha 2: Fonte Podcast
  description: string;
  highlights: string[];
  logo: string;
  logoAlt: string;
  logoSizeClass: string;
  instagramUrl: string;
}

// 5 Patrocinadores Oficiais com dados detalhados para o Card 2 (Slider Horizontal)
const sponsorsData: SponsorDetail[] = [
  {
    id: "estudio-akedah",
    number: "01",
    category: "INFRAESTRUTURA & PRODUÇÃO 4K HDR",
    titleLine1: "ESTÚDIO AKEDAH",
    titleLine2: "Produção & Infraestrutura",
    description:
      "Estúdio de alta performance para gravações corporativas, podcasts em 4K HDR e produções audiovisuais cinematográficas. Infraestrutura técnica de ponta, isolamento acústico broadcast, ilhas dedicadas de edição rápida e curadoria estratégica para grandes marcas e líderes do mercado.",
    highlights: [
      "Transmissão e gravação multicâmera em 4K HDR Cinema",
      "Mesa de áudio com microfones Shure SM7B Broadcast",
      "Ilha dedicada para extração de cortes virais em tempo real",
    ],
    logo: logoEstudioAkedah,
    logoAlt: "Estúdio Akedah",
    logoSizeClass: "max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px]",
    instagramUrl: "https://www.instagram.com/estudioakedah",
  },
  {
    id: "dunamis",
    number: "02",
    category: "LIDERANÇA GLOBAL & TRANSFORMAÇÃO",
    titleLine1: "DUNAMIS",
    titleLine2: "Movimento & Transformação",
    description:
      "Movimento global de impacto cultural e liderança, focado em capacitar e despertar uma geração para estabelecer princípios inegociáveis, transformação social contínua e relevância no ecossistema de trabalho, negócios e sociedade.",
    highlights: [
      "Conferências e convenções de grande escala internacional",
      "Programas contínuos de desenvolvimento de liderança e mentoria",
      "Projetos educacionais e culturais com impacto contínuo",
    ],
    logo: logoDunamis,
    logoAlt: "Dunamis Movement",
    logoSizeClass: "max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[460px]",
    instagramUrl: "https://www.instagram.com/dunamismovement",
  },
  {
    id: "fecar",
    number: "03",
    category: "VEÍCULOS DE LUXO & CORPORATIVOS",
    titleLine1: "FE-CAR MULTIMARCAS",
    titleLine2: "Veículos & Procedência",
    description:
      "Com sólida credibilidade no segmento automotivo premium e corporativo, a FE-CAR Multimarcas entrega curadoria rigorosa de procedência, pós-venda exemplar e assessoria completa em frotas executivas e veículos de altíssimo padrão com garantia total.",
    highlights: [
      "Curadoria rigorosa de procedência com laudo pericial aprovado",
      "Assessoria VIP para compras corporativas e veículos executivos",
      "Atendimento exclusivo e suporte integral de pós-venda",
    ],
    logo: logoFecar,
    logoAlt: "FE-CAR Multimarcas",
    logoSizeClass: "max-w-[300px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px]",
    instagramUrl: "https://www.instagram.com/fecarmultimarcas",
  },
  {
    id: "tabernaculo",
    number: "04",
    category: "AÇÃO SOCIAL, FÉ & DESENVOLVIMENTO",
    titleLine1: "TABERNÁCULO",
    titleLine2: "Da Trindade",
    description:
      "Fundamentada em princípios inegociáveis de fé, integridade e acolhimento familiar, a instituição lidera projetos humanitários de grande alcance, formação de valores éticos e iniciativas comunitárias contínuas de transformação e suporte familiar.",
    highlights: [
      "Ações sociais e iniciativas humanitárias de suporte a famílias",
      "Formação de princípios éticos, caráter e integridade geracional",
      "Espaços de acolhimento, desenvolvimento comunitário e voluntariado",
    ],
    logo: logoTabernaculo,
    logoAlt: "Tabernáculo da Trindade",
    logoSizeClass: "max-w-[300px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px]",
    instagramUrl: "https://www.instagram.com/tabernaculodatrindade",
  },
  {
    id: "studio",
    number: "05",
    category: "ENGENHARIA DE ÁUDIO & SOUND DESIGN",
    titleLine1: "STUDIO AKEDAH",
    titleLine2: "Engenharia de Som",
    description:
      "Engenharia sonora avançada, produção musical, pós-produção acústica e identidade auditiva corporativa. Criação de trilhas originais, mixagem e masterização para produções de altíssimo padrão com equipamentos analógicos e digitais de padrão internacional.",
    highlights: [
      "Tratamento acústico de sala calibrado para máxima fidelidade sonora",
      "Mixagem e masterização de áudio para streaming e cinema 4K",
      "Criação de identidade sonora corporativa e sound design exclusivo",
    ],
    logo: logoHorizontalSimbolo,
    logoAlt: "Studio Akedah",
    logoSizeClass: "max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px]",
    instagramUrl: "https://www.instagram.com/estudioakedah",
  },
];

// As 3 Pranchetas da Página de Patrocinadores
const sponsorCards = [
  { id: "vitrine", number: "01", label: "Vitrine de Patrocinadores" },
  { id: "detalhes", number: "02", label: "Detalhes das Marcas" },
  { id: "seja-patrocinador", number: "03", label: "Seja Patrocinador" },
];

// Logos para o Carrossel Marquee Contínuo do Card 1 (Estilo Daniel Silva)
const marqueeLogos = [
  { img: logoEstudioAkedah, alt: "Estúdio Akedah", hClass: "h-11 sm:h-14 md:h-16" },
  { img: logoDunamis, alt: "Dunamis", hClass: "h-10 sm:h-12 md:h-14" },
  { img: logoFecar, alt: "FE-CAR Multimarcas", hClass: "h-11 sm:h-14 md:h-16" },
  { img: logoTabernaculo, alt: "Tabernáculo da Trindade", hClass: "h-11 sm:h-14 md:h-16" },
  { img: logoHorizontalSimbolo, alt: "Studio Akedah", hClass: "h-10 sm:h-12 md:h-14" },
];

// Variantes de transição horizontal para o Card 2
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 90 : -90,
    opacity: 0,
    filter: "blur(6px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -90 : 90,
    opacity: 0,
    filter: "blur(6px)",
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const PodcastSponsors = () => {
  const [activeBoard, setActiveBoard] = useState(0);
  const [[currentSponsor, slideDirection], setSlide] = useState([0, 1]);
  const isHoveredSlideRef = useRef(false);

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

  const paginateSponsor = (newDirection: number) => {
    setSlide(([prev]) => {
      const next = (prev + newDirection + sponsorsData.length) % sponsorsData.length;
      return [next, newDirection];
    });
  };

  const goToSponsor = (idx: number) => {
    setSlide(([prev]) => [idx, idx >= prev ? 1 : -1]);
  };

  // Habilitar visualização de prancheta com scroll-snap apenas em telas desktop (>= 768px)
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

  // Monitorar seção ativa no scroll para sincronizar o navegador lateral de 3 cards
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
      sponsorCards.forEach((card, idx) => {
        const el = document.getElementById(card.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveBoard(idx);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navegação suave por teclado: Cima/Baixo para as 3 seções, Esquerda/Direita para o slider do Card 2
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (activeBoard === 1) {
          e.preventDefault();
          paginateSponsor(1);
        }
      } else if (e.key === "ArrowLeft") {
        if (activeBoard === 1) {
          e.preventDefault();
          paginateSponsor(-1);
        }
      } else if (window.innerWidth >= 768) {
        if (e.key === "ArrowDown" || e.key === "PageDown") {
          const scrollMiddle = window.scrollY + window.innerHeight / 2;
          let currentIndex = 0;
          sponsorCards.forEach((card, idx) => {
            const el = document.getElementById(card.id);
            if (el && scrollMiddle >= el.offsetTop) {
              currentIndex = idx;
            }
          });
          if (currentIndex < sponsorCards.length - 1) {
            e.preventDefault();
            scrollToSection(sponsorCards[currentIndex + 1].id);
          }
        } else if (e.key === "ArrowUp" || e.key === "PageUp") {
          const scrollMiddle = window.scrollY + window.innerHeight / 2;
          let currentIndex = 0;
          sponsorCards.forEach((card, idx) => {
            const el = document.getElementById(card.id);
            if (el && scrollMiddle >= el.offsetTop) {
              currentIndex = idx;
            }
          });
          if (currentIndex > 0) {
            e.preventDefault();
            scrollToSection(sponsorCards[currentIndex - 1].id);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeBoard]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Patrocinadores Oficiais | Akedah Podcast",
    description: "Conheça os patrocinadores oficiais do Akedah Podcast e descubra oportunidades de conexão e exposição de alto impacto.",
    url: "https://estudioakedah.com/podcast/patrocinadores",
  };

  const sponsor = sponsorsData[currentSponsor];

  return (
    <div className="min-h-screen bg-[#1C0F0A] text-white selection:bg-[#C4550A] selection:text-white relative font-corporate">
      <SEO
        title="Patrocinadores Oficiais | Akedah Podcast"
        description="Conheça os patrocinadores oficiais do Akedah Podcast. Marcas líderes que tornam possível nossa infraestrutura e alcance."
        url="https://estudioakedah.com/podcast/patrocinadores"
        schema={schema}
      />
      <Navbar isPodcastPage={true} />

      {/* Atmosfera Moderna: Fundo #1C0F0A, Spotlights e Micro-ruído */}
      <PodcastAtmosphere />

      {/* Indicador Flutuante Lateral no Desktop: 3 Cards Exatos */}
      <aside 
        aria-label="Navegador das 3 Pranchetas de Patrocinadores"
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3.5 bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/10 shadow-2xl"
      >
        {sponsorCards.map((card, idx) => {
          const isActive = activeBoard === idx;
          return (
            <a
              key={card.id}
              href={`#${card.id}`}
              className="group relative flex items-center justify-end"
              aria-label={`Ir para ${card.label}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(card.id);
              }}
            >
              <span className="absolute right-7 py-1 px-3 rounded-md bg-[#180F0A] border border-white/15 text-xs font-corporate font-medium tracking-widest uppercase text-white/90 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg">
                {card.number} — {card.label}
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
      </aside>

      <main className="relative z-10">
        
        {/* ========================================================================= */}
        {/* CARD 1: VITRINE MARQUEE (IGUAL À SEÇÃO DE PATROCINADORES DO DANIEL SILVA) */}
        {/* ========================================================================= */}
        <section
          id="vitrine"
          className="relative min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#1C0F0A] border-b border-white/10 md:snap-start md:snap-always px-6 sm:px-10 lg:px-16 py-24 md:py-0"
        >
          {/* Spotlight quente centralizada */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.18)_0%,_rgba(217,119,6,0.05)_50%,_transparent_75%)] blur-3xl pointer-events-none z-0" />

          <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
            
            {/* Header da Seção com Título Estrito em 2 Linhas */}
            <div className="mb-8 sm:mb-10 max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[#C4550A] text-xs font-corporate font-semibold uppercase tracking-[0.22em] mb-3 block">
                MARCAS VISIONÁRIAS // PARCERIAS ESTRATÉGICAS
              </span>

              <h1 className="text-[26px] xs:text-[34px] sm:text-[44px] md:text-[54px] lg:text-[62px] leading-[1.05] tracking-tight uppercase mb-4 text-center">
                <span className="block font-corporate font-black text-white whitespace-nowrap">
                  PARCERIAS DE VALOR
                </span>
                <span className="block font-podcast text-[#C4550A] capitalize text-[1.32em] font-normal tracking-normal select-none -mt-1 sm:-mt-1.5 whitespace-nowrap">
                  Nossos Patrocinadores
                </span>
              </h1>

              <p className="font-corporate font-normal text-white/80 text-sm sm:text-base md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                Empresas, líderes e instituições que caminham lado a lado com o Akedah Podcast, viabilizando nossa infraestrutura cinematográfica 4K HDR e alcance executivo sem precedentes.
              </p>
            </div>

            {/* Linha Animada Contínua de Logotipos (Marquee Infinito em Loop igual ao site Daniel Silva) */}
            <div className="relative w-full overflow-hidden py-8 sm:py-10 my-2">
              {/* Degradês de Fade Laterais Suaves nas Bordas */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 md:w-48 bg-gradient-to-r from-[#1C0F0A] via-[#1C0F0A]/90 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 md:w-48 bg-gradient-to-l from-[#1C0F0A] via-[#1C0F0A]/90 to-transparent z-10 pointer-events-none" />

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex items-center gap-12 sm:gap-20 md:gap-28 w-max"
              >
                {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center shrink-0 cursor-pointer group"
                    onClick={() => scrollToSection("detalhes")}
                  >
                    <img
                      src={logo.img}
                      alt={logo.alt}
                      className={`${logo.hClass} w-auto object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-all duration-300 pointer-events-none select-none`}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bloco Editorial de Atalho no Rodapé do Card 1 */}
            <div className="mt-6 sm:mt-8 p-5 sm:p-7 md:p-8 bg-[#130B07]/90 border border-white/10 rounded-[20px] sm:rounded-[24px] max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 backdrop-blur-md shadow-2xl text-left">
              <div className="flex-1">
                <span className="text-xs font-corporate font-semibold uppercase tracking-[0.16em] text-[#C4550A] block mb-1">
                  EXPLORE CADA PATROCINADOR
                </span>
                <h3 className="font-corporate font-black text-base sm:text-xl text-white tracking-tight leading-snug">
                  Conheça em detalhes a atuação e impacto de cada marca parceira.
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => scrollToSection("detalhes")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C4550A] hover:bg-[#b04b08] text-white font-corporate font-black text-xs uppercase tracking-[0.16em] rounded-[12px] transition-all duration-300 shadow-xl shadow-[#C4550A]/25 cursor-pointer"
                >
                  <span>Ver em Detalhes</span>
                  <span className="text-sm">↓</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("seja-patrocinador")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.05] hover:bg-white/[0.12] border border-white/20 text-white font-corporate font-bold text-xs uppercase tracking-[0.16em] rounded-[12px] transition-all duration-300 cursor-pointer"
                >
                  <span>Seja Patrocinador</span>
                  <span className="text-sm">→</span>
                </button>
              </div>
            </div>

            {/* Indicador de Próxima Seção */}
            <div className="hidden md:flex absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex-col items-center pointer-events-auto">
              <button
                type="button"
                onClick={() => scrollToSection("detalhes")}
                className="group flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <span className="text-[10px] font-corporate font-bold uppercase tracking-[0.2em] group-hover:text-[#C4550A] transition-colors">
                  DETALHES DAS MARCAS (02)
                </span>
                <ChevronDown className="w-4 h-4 text-[#C4550A] animate-bounce" />
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* CARD 2: SLIDER HORIZONTAL DE PATROCINADORES COM LOGO MAIOR E DETALHES     */}
        {/* ========================================================================= */}
        <section
          id="detalhes"
          className="relative min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#1C0F0A] border-b border-white/10 md:snap-start md:snap-always px-4 sm:px-8 lg:px-14 xl:px-20 py-24 md:py-0"
          onMouseEnter={() => { isHoveredSlideRef.current = true; }}
          onMouseLeave={() => { isHoveredSlideRef.current = false; }}
        >
          {/* Spotlight quente dedicada */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(196,85,10,0.16)_0%,_rgba(217,119,6,0.04)_50%,_transparent_75%)] blur-3xl pointer-events-none z-0" />

          <div className="max-w-[1650px] w-full mx-auto relative z-10 flex flex-col justify-between h-full max-h-[850px] py-4">
            
            {/* Topo do Card 2: Barra de Seleção Rápida dos 5 Patrocinadores e Botões < > */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4 sm:mb-6">
              {/* Abas dos 5 Patrocinadores */}
              <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto w-full sm:w-auto scrollbar-none py-1">
                {sponsorsData.map((s, idx) => {
                  const isCurrent = currentSponsor === idx;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goToSponsor(idx)}
                      className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-corporate font-bold uppercase tracking-[0.14em] transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                        isCurrent
                          ? "bg-[#C4550A] text-white shadow-lg shadow-[#C4550A]/30 scale-[1.02]"
                          : "bg-white/[0.04] hover:bg-white/[0.1] text-white/70 hover:text-white border border-white/10"
                      }`}
                    >
                      <span className={isCurrent ? "text-white/80" : "text-[#C4550A]"}>{s.number}</span>
                      <span>{s.titleLine1}</span>
                    </button>
                  );
                })}
              </div>

              {/* Controles Laterais < e > + Contador */}
              <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                <span className="text-xs font-corporate font-semibold text-white/50 tracking-wider">
                  <span className="text-[#C4550A] font-bold">{sponsor.number}</span> / 05
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => paginateSponsor(-1)}
                    aria-label="Patrocinador anterior"
                    className="w-10 h-10 rounded-full border border-white/20 bg-black/40 hover:bg-[#C4550A] hover:border-[#C4550A] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => paginateSponsor(1)}
                    aria-label="Próximo patrocinador"
                    className="w-10 h-10 rounded-full border border-white/20 bg-black/40 hover:bg-[#C4550A] hover:border-[#C4550A] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Conteúdo Central em Slide Horizontal: Logo Maior à Esquerda + Informações Detalhadas à Direita */}
            <div className="relative flex-1 flex items-center min-h-[460px] sm:min-h-[500px]">
              <AnimatePresence mode="wait" custom={slideDirection}>
                <motion.div
                  key={currentSponsor}
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-18 items-center"
                >
                  
                  {/* LADO ESQUERDO: Logotipo Maior com Spotlight Concentrada */}
                  <div className="lg:col-span-6 w-full flex items-center justify-center relative py-6 sm:py-8 lg:py-12 bg-black/30 rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
                    {/* Spotlight do Logotipo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] md:w-[540px] h-[260px] sm:h-[340px] bg-[radial-gradient(ellipse_at_center,_rgba(196,85,10,0.28)_0%,_rgba(217,119,6,0.06)_50%,_transparent_75%)] blur-2xl pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-center w-full p-6 sm:p-10">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.logoAlt}
                        className={`${sponsor.logoSizeClass} w-auto max-h-[220px] sm:max-h-[280px] md:max-h-[320px] object-contain filter brightness-[1.08] contrast-[1.05] drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] group-hover:scale-105 group-hover:brightness-115 transition-all duration-500 pointer-events-none select-none`}
                      />
                    </div>

                    {/* Badge flutuante de número do patrocinador */}
                    <div className="absolute bottom-4 left-4 z-20 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-corporate font-semibold tracking-wider text-white/80">
                      PATROCINADOR OFICIAL • {sponsor.number}
                    </div>
                  </div>

                  {/* LADO DIREITO: Informações Mais Detalhadas sobre o Patrocinador */}
                  <div className="lg:col-span-6 w-full flex flex-col items-start text-left">
                    {/* Categoria / Tag */}
                    <span className="text-[#C4550A] text-xs font-corporate font-semibold uppercase tracking-[0.2em] mb-2.5 block">
                      {sponsor.category}
                    </span>

                    {/* Título Estrito em 2 Linhas: PerfectCorporate Black + Fonte Podcast */}
                    <h2 className="text-[24px] xs:text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[52px] leading-[1.05] tracking-tight uppercase mb-4 text-left">
                      <span className="block font-corporate font-black text-white whitespace-nowrap">
                        {sponsor.titleLine1}
                      </span>
                      <span className="block font-podcast text-[#C4550A] capitalize text-[1.32em] font-normal tracking-normal select-none -mt-1 sm:-mt-1.5 whitespace-nowrap">
                        {sponsor.titleLine2}
                      </span>
                    </h2>

                    {/* Descrição Detalhada em PerfectCorporate Regular */}
                    <p className="font-corporate font-normal text-white/85 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl text-left mb-6">
                      {sponsor.description}
                    </p>

                    {/* Destaques Estratégicos do Patrocinador */}
                    <div className="space-y-2.5 mb-7 w-full max-w-xl">
                      {sponsor.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-corporate font-normal">
                          <CheckCircle2 className="w-4 h-4 text-[#C4550A] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Botões de Ação: Instagram Oficial e Troca de Slide */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={sponsor.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#C4550A] text-white hover:bg-[#b04b08] border border-[#C4550A] font-corporate font-black text-xs sm:text-sm uppercase tracking-[0.16em] px-7 sm:px-9 py-3.5 sm:py-4 rounded-[12px] sm:rounded-[14px] transition-all duration-300 shadow-xl shadow-[#C4550A]/25 inline-flex items-center gap-2.5 group cursor-pointer"
                      >
                        <Instagram className="w-4 h-4 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                        <span>Acessar Perfil Oficial</span>
                        <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>

                      <button
                        type="button"
                        onClick={() => paginateSponsor(1)}
                        className="bg-transparent hover:bg-white/10 text-white/90 hover:text-white border border-white/20 font-corporate font-bold text-xs sm:text-sm uppercase tracking-[0.14em] px-5 sm:px-6 py-3.5 sm:py-4 rounded-[12px] sm:rounded-[14px] transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>Próximo Patrocinador</span>
                        <ChevronRight className="w-4 h-4 text-[#C4550A]" />
                      </button>
                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Rodapé do Card 2: Indicador de Próxima Seção */}
            <div className="hidden md:flex justify-center items-center pt-2">
              <button
                type="button"
                onClick={() => scrollToSection("seja-patrocinador")}
                className="group flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <span className="text-[10px] font-corporate font-bold uppercase tracking-[0.2em] group-hover:text-[#C4550A] transition-colors">
                  SEJA PATROCINADOR DO AKEDAH PODCAST (03)
                </span>
                <ChevronDown className="w-4 h-4 text-[#C4550A] animate-bounce" />
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* CARD 3: SEJA PATROCINADOR DO AKEDAH PODCAST (CONVITE & MÍDIA KIT)         */}
        {/* ========================================================================= */}
        <section
          id="seja-patrocinador"
          className="relative min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#1C0F0A] border-b border-white/10 px-6 sm:px-10 lg:px-16 text-center md:snap-start md:snap-always py-20 md:py-0"
        >
          {/* Spotlight Quente Motivada Centralizada */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.20)_0%,_rgba(217,119,6,0.06)_50%,_transparent_75%)] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            
            {/* Badge de Destaque */}
            <span className="text-[#C4550A] text-xs font-corporate font-semibold uppercase tracking-[0.22em] mb-4 block">
              POSICIONE SUA MARCA // AUDIÊNCIA EXECUTIVA C-LEVEL
            </span>

            {/* Título Estrito em 2 Linhas: PerfectCorporate Black + Fonte Podcast */}
            <h2 className="text-[26px] xs:text-[34px] sm:text-[46px] md:text-[56px] lg:text-[66px] tracking-tight leading-[1.05] mb-5 text-center">
              <span className="block font-corporate font-black text-white uppercase whitespace-nowrap">
                SUA MARCA NA MAIOR
              </span>
              <span className="block font-podcast text-[#C4550A] capitalize text-[1.32em] font-normal -mt-1 sm:-mt-1.5 whitespace-nowrap">
                Mesa de Negócios
              </span>
            </h2>

            <p className="font-corporate font-normal text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Associe a credibilidade da sua empresa a um conteúdo de altíssimo valor percebido, com transmissão 4K HDR, cortes em redes sociais de alta retenção e distribuição direta para diretores, investidores e tomadores de decisão qualificados.
            </p>

            {/* 4 Pilares de Vantagens do Patrocínio em Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-10 text-left">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C4550A]/50 transition-colors">
                <span className="text-xl sm:text-2xl text-[#C4550A] font-corporate font-black block mb-1">01</span>
                <h4 className="font-corporate font-black text-white text-xs sm:text-sm uppercase mb-1">Audiência C-Level</h4>
                <p className="text-white/60 text-xs font-corporate font-normal leading-relaxed">
                  Decisores, fundadores e investidores com alto ticket médio.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C4550A]/50 transition-colors">
                <span className="text-xl sm:text-2xl text-[#C4550A] font-corporate font-black block mb-1">02</span>
                <h4 className="font-corporate font-black text-white text-xs sm:text-sm uppercase mb-1">Transmissão 4K</h4>
                <p className="text-white/60 text-xs font-corporate font-normal leading-relaxed">
                  Padrão cinematográfico de vídeo com iluminação de ponta.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C4550A]/50 transition-colors">
                <span className="text-xl sm:text-2xl text-[#C4550A] font-corporate font-black block mb-1">03</span>
                <h4 className="font-corporate font-black text-white text-xs sm:text-sm uppercase mb-1">Cortes Verticais</h4>
                <p className="text-white/60 text-xs font-corporate font-normal leading-relaxed">
                  Distribuição dinâmica em Reels, TikTok, Shorts e LinkedIn.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C4550A]/50 transition-colors">
                <span className="text-xl sm:text-2xl text-[#C4550A] font-corporate font-black block mb-1">04</span>
                <h4 className="font-corporate font-black text-white text-xs sm:text-sm uppercase mb-1">Naming Rights</h4>
                <p className="text-white/60 text-xs font-corporate font-normal leading-relaxed">
                  Menções ao vivo, produto em mesa e vinhetas exclusivas.
                </p>
              </div>
            </div>

            {/* Botões de Ação de Conversão */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20ser%20um%20patrocinador%20oficial%20do%20Akedah%20Podcast`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C4550A] hover:bg-[#b04b08] text-white font-corporate font-black text-xs sm:text-sm uppercase tracking-[0.16em] px-9 py-4 rounded-[12px] sm:rounded-[14px] transition-all duration-300 shadow-xl shadow-[#C4550A]/35 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Falar com Assessoria de Patrocínios</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={`mailto:${AKEDAH_EMAIL}?subject=M%C3%ADdia%20Kit%20Oficial%20-%20Akedah%20Podcast`}
                className="bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/20 font-corporate font-bold text-xs sm:text-sm uppercase tracking-[0.16em] px-8 py-4 rounded-[12px] sm:rounded-[14px] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Solicitar Mídia Kit</span>
              </a>

              <a
                href="/podcast"
                className="text-white/60 hover:text-white font-corporate font-medium text-xs sm:text-sm uppercase tracking-[0.16em] px-6 py-4 transition-colors"
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
