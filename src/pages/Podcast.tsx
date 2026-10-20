import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PodcastAtmosphere from "@/components/podcast/PodcastAtmosphere";
import IrisPreloader from "@/components/podcast/IrisPreloader";
import studioBannerImg from "@/assets/akedah-podcast-studio.jpg";
import founderPicture from "@/assets/akedah-founder.jpg";
import danielPicture from "@/assets/imagem-daniel.webp";
import heroPodcastWelcome from "@/assets/podcast/hero-podcast-welcome.jpg";
import heroPodcastPatrocinador from "@/assets/podcast/hero-podcast-patrocinador.jpg";
import heroPodcastAoVivo from "@/assets/podcast/hero-podcast-aovivo.jpg";
import heroPodcastDaniel from "@/assets/podcast/hero-podcast-daniel.jpg";
import { WHATSAPP_URL } from "@/data/services";

// 4 Cards da Hero Section com rotação automática a cada 5s (estilo editorial de alto impacto com paleta Akedah)
const heroSlides = [
  {
    id: 1,
    badge: "BEM-VINDO • AKEDAH PODCAST // EDIÇÃO 2026",
    titleMain: "A MESA DE QUEM",
    titleSub: "DECIDE O MERCADO",
    descricao:
      "Seja bem-vindo ao Akedah Podcast. O espaço definitivo onde grandes realizadores, líderes e estrategistas debatem os bastidores do mercado sem filtro.",
    btnPrimary: { text: "Explorar Episódios", href: "#destaque" },
    btnSecondary: { text: "Conhecer o Podcast", href: "/podcast/sobre" },
    image: heroPodcastWelcome,
    alt: "Akedah Podcast - Boas-vindas ao Estúdio",
    imgPos: "object-center md:object-[center_35%]",
  },
  {
    id: 2,
    badge: "PARCERIA • EXPOSIÇÃO // CONECTE SUA MARCA",
    titleMain: "SEJA NOSSO",
    titleSub: "PATROCINADOR",
    descricao:
      "Posicione sua empresa diante de líderes, empresários e tomadores de decisão qualificados. Conecte sua marca à maior audiência estratégica de negócios e visão executiva.",
    btnPrimary: { text: "Seja um Patrocinador", href: WHATSAPP_URL, external: true },
    btnSecondary: { text: "Falar no WhatsApp", href: WHATSAPP_URL, external: true },
    image: heroPodcastPatrocinador,
    alt: "Akedah Podcast - Parcerias e Patrocínio Estratégico",
    imgPos: "object-[center_30%] md:object-[center_25%]",
  },
  {
    id: 3,
    badge: "AO VIVO & GRAVADO // TRANSMISSÃO 4K HDR",
    titleMain: "PODCAST AO VIVO",
    titleSub: "& ÚLTIMO EPISÓDIO",
    descricao:
      "Acompanhe nossas transmissões ao vivo ou assista na íntegra ao episódio mais recente com análises aprofundadas, debates francos e insights práticos de alto impacto.",
    btnPrimary: { text: "Assistir Último Episódio", href: "#destaque" },
    btnSecondary: { text: "Canal no YouTube", href: "https://www.youtube.com/@EstudioAkedah", external: true },
    image: heroPodcastAoVivo,
    alt: "Akedah Podcast - Transmissão Ao Vivo e Último Episódio",
    imgPos: "object-center md:object-[center_40%]",
  },
  {
    id: 4,
    badge: "APRESENTADOR • HOST // VISÃO EXECUTIVA",
    titleMain: "DANIEL SILVA",
    titleSub: "APRESENTADOR & HOST",
    descricao:
      "Conduzido por Daniel Silva — estrategista de negócios, mentor executivo e palestrante, trazendo perguntas cirúrgicas, profundidade analítica e bagagem de mercado a cada encontro.",
    btnPrimary: { text: "Conhecer Daniel Silva", href: "/daniel-silva" },
    btnSecondary: { text: "Falar com Assessoria", href: WHATSAPP_URL, external: true },
    image: heroPodcastDaniel,
    alt: "Daniel Silva - Host e Apresentador do Akedah Podcast",
    imgPos: "object-[center_20%] md:object-[center_15%]",
  },
];

// Transição suave para o bloco de texto editorial da Hero (sem congelamento de GPU)
const heroContentVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Variantes para animação de slide direcional e desfoque nos cards da Agenda do Podcast
const agendaVariants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? 80 : -80,
    opacity: 0,
    filter: "blur(12px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (dir: number) => ({
    x: dir >= 0 ? -80 : 80,
    opacity: 0,
    filter: "blur(12px)",
    transition: {
      duration: 0.38,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// 3 Conjuntos de 4 Cards (total 12 cards) com dados genéricos e fotos de alta relevância para a Agenda
const agendaPodcastCards = [
  // Conjunto 1 (Cards 1 a 4)
  [
    {
      date: "15.AGO",
      time: "19:00",
      episode: "EP. 15",
      guestName: "DANIEL SILVA",
      role: "HOST & ESTRATEGISTA EXECUTIVO",
      topic: "Engenharia de Vendas, Governança & Retenção de Alto Ticket",
      image: founderPicture,
      link: WHATSAPP_URL,
    },
    {
      date: "22.AGO",
      time: "19:00",
      episode: "EP. 16",
      guestName: "CAMILA VASCONCELOS",
      role: "FUNDADORA & C-LEVEL TECH",
      topic: "Inteligência Artificial & Automação Operacional de Escala",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      link: WHATSAPP_URL,
    },
    {
      date: "29.AGO",
      time: "19:00",
      episode: "EP. 17",
      guestName: "RODRIGO ALBUQUERQUE",
      role: "GESTOR DE FUNDOS & M&A",
      topic: "Fusões, Aquisições & Métricas Reais de Valuation Corporativo",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      link: WHATSAPP_URL,
    },
    {
      date: "05.SET",
      time: "19:00",
      episode: "EP. 18",
      guestName: "MARIANA BITTENCOURT",
      role: "DIRETORA DE BRANDING & GROWTH",
      topic: "Posicionamento de Autoridade & Estratégia de Marca Premium",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      link: WHATSAPP_URL,
    },
  ],
  // Conjunto 2 (Cards 5 a 8)
  [
    {
      date: "12.SET",
      time: "19:00",
      episode: "EP. 19",
      guestName: "EDUARDO GUIMARÃES",
      role: "CEO & EMPREENDEDOR SERIAL",
      topic: "Playbooks Comerciais de 8 Dígitos e Construção de Máquina B2B",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      link: WHATSAPP_URL,
    },
    {
      date: "19.SET",
      time: "19:00",
      episode: "EP. 20",
      guestName: "BEATRIZ FONTANA",
      role: "ESPECIALISTA EM LIDERANÇA",
      topic: "Retenção de Talentos & Cultura de Alta Performance Executiva",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
      link: WHATSAPP_URL,
    },
    {
      date: "26.SET",
      time: "19:00",
      episode: "EP. 21",
      guestName: "LUCAS MENDONÇA",
      role: "CONSELHEIRO & ESTRATEGISTA",
      topic: "Governança Familiar, Proteção Patrimonial & Sucessão",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      link: WHATSAPP_URL,
    },
    {
      date: "03.OUT",
      time: "19:00",
      episode: "EP. 22",
      guestName: "JULIANA MEIRELLES",
      role: "HEAD DE FINANÇAS CORPORATIVAS",
      topic: "Fluxo de Caixa Blindado, Margem Líquida & Expansão Segura",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      link: WHATSAPP_URL,
    },
  ],
  // Conjunto 3 (Cards 9 a 12)
  [
    {
      date: "10.OUT",
      time: "19:00",
      episode: "EP. 23",
      guestName: "MARCELO FAGUNDES",
      role: "ESTRATEGISTA DE EXPANSÃO",
      topic: "Modelagem de Franquias, Canais de Distribuição & Escala Nacional",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      link: WHATSAPP_URL,
    },
    {
      date: "17.OUT",
      time: "19:00",
      episode: "EP. 24",
      guestName: "FERNANDA PRADO",
      role: "NEUROCIÊNCIA APLICADA A NEGÓCIOS",
      topic: "Tomada de Decisão Sob Pressão, Clareza Mental & Negociação",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      link: WHATSAPP_URL,
    },
    {
      date: "24.OUT",
      time: "19:00",
      episode: "EP. 25",
      guestName: "GUSTAVO ZANETTI",
      role: "DIRETOR DE OPERAÇÕES LOGÍSTICAS",
      topic: "Infraestrutura Crítica, Suprimentos & Redução de Desperdícios",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
      link: WHATSAPP_URL,
    },
    {
      date: "31.OUT",
      time: "19:00",
      episode: "EP. 26",
      guestName: "SOFIA BRANDÃO",
      role: "COMPLIANCE & DIREITO EMPRESARIAL",
      topic: "Segurança Contratual, Mitigação de Riscos & Acordos de Sócios",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      link: WHATSAPP_URL,
    },
  ],
];

const Podcast = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const isHoveredHeroRef = useRef(false);
  const [[activeBlock, direction], setPage] = useState([0, 1]);
  const isHoveredCardRef = useRef(false);

  const paginate = (newDirection: number) => {
    setPage(([prev]) => {
      const next = (prev + newDirection + agendaPodcastCards.length) % agendaPodcastCards.length;
      return [next, newDirection];
    });
  };

  const goToBlock = (idx: number) => {
    setPage(([prev]) => [idx, idx >= prev ? 1 : -1]);
  };

  // Timer de rotação automática dos cards da Agenda (a cada 5 segundos) com pausa no hover
  useEffect(() => {
    const agendaTimer = setInterval(() => {
      if (!isHoveredCardRef.current) {
        setPage(([prev]) => [(prev + 1) % agendaPodcastCards.length, 1]);
      }
    }, 5000);
    return () => clearInterval(agendaTimer);
  }, []);

  // Pré-carregamento imediato das 4 imagens da Hero para evitar atrasos ou pop-in
  useEffect(() => {
    const heroImgs = [heroPodcastWelcome, heroPodcastPatrocinador, heroPodcastAoVivo, heroPodcastDaniel];
    heroImgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Timer de rotação automática dos cards da Hero (a cada 5 segundos) com pausa no hover
  useEffect(() => {
    const heroTimer = setInterval(() => {
      if (!isHoveredHeroRef.current) {
        setHeroSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 5000);
    return () => clearInterval(heroTimer);
  }, [heroSlide]);

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Akedah Podcast",
    description: "A mesa de quem decide o mercado. Conversas sem roteiro com grandes realizadores sobre estratégia, escala e bastidores.",
    url: "https://estudioakedah.com/podcast",
    publisher: { "@type": "Organization", name: "Akedah" },
  };

  return (
    <div className="min-h-screen bg-[#0C0704] text-white selection:bg-[#C4550A] selection:text-white relative font-sans">
      {/* Tela de Carregamento Inicial com Revelação de Íris Circular */}
      <IrisPreloader />

      <SEO
        title="Akedah Podcast | A Mesa de Quem Decide o Mercado"
        description="Akedah Podcast: conversas sem roteiro com grandes realizadores sobre estratégia, escala e bastidores. Assista ao vivo e confira a programação."
        url="https://estudioakedah.com/podcast"
        schema={schema}
      />
      <Navbar isPodcastPage={true} />

      {/* Atmosfera Moderna: Fundo #0C0704, Spotlights Radiais e Micro-ruído SVG Inline */}
      <PodcastAtmosphere />

      <main className="relative z-10 overflow-hidden">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (CAROUSEL COM 4 CARDS E SLIDE AUTOMÁTICO A CADA 5S)       */}
        {/* ========================================================================= */}
        <section 
          id="hero"
          className="relative min-h-[100dvh] md:h-screen w-full flex flex-col justify-end md:justify-center md:items-center overflow-hidden bg-[#0C0704] border-b border-white/10"
          onMouseEnter={() => { isHoveredHeroRef.current = true; }}
          onMouseLeave={() => { isHoveredHeroRef.current = false; }}
        >
          {/* Layer 1: Background Images Stack persistente com Cross-fade suave entre os slides */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {heroSlides.map((slide, idx) => {
              const isActive = heroSlide === idx;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 md:inset-auto md:right-0 md:top-0 md:bottom-0 w-full sm:w-[85%] md:w-[75%] lg:w-[68%] xl:w-[65%] h-full flex items-start md:items-center justify-center md:justify-end mask-feather-mobile-bottom mask-feather-podcast transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  aria-hidden={!isActive}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.alt} 
                    loading="eager"
                    decoding="async"
                    fetchPriority={idx === 0 ? "high" : "auto"}
                    className={`w-full h-full object-cover ${slide.imgPos} filter contrast-[1.08] brightness-[0.98] transition-transform duration-1000 ease-out ${
                      isActive ? "scale-100" : "scale-105"
                    }`}
                  />
                </div>
              );
            })}

            {/* Overlay sutil em desktop */}
            <div className="hidden md:block absolute inset-0 bg-[#0C0704]/40 md:bg-transparent z-10 pointer-events-none" />

            {/* Degradê Dark Terracota: contínuo, ultra suave e sem linhas demarcadas */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0704] from-45% via-[#0C0704]/90 via-70% to-transparent md:bg-gradient-to-r md:from-[#0C0704] md:from-25% md:via-[#0C0704]/85 md:via-42% md:via-[#0C0704]/40 md:via-60% md:to-transparent md:to-78% z-10 pointer-events-none" />

            {/* Degradês verticais suaves exclusivos para desktop */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#0C0704] via-transparent via-65% to-[#0C0704]/40 z-10 pointer-events-none" />

            {/* Glow Terracota Quente sutil motivado */}
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.22)_0%,_rgba(217,119,6,0.06)_50%,_transparent_75%)] blur-3xl pointer-events-none z-10" />
          </div>

          {/* Layer 2: Conteúdo Editorial à esquerda com AnimatePresence */}
          <div className="relative z-20 w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-28 sm:pt-28 md:pt-20 pb-16 sm:pb-12 md:pb-8 flex justify-start">
            <div className="max-w-3xl text-left flex flex-col items-start w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroSlide}
                  variants={heroContentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex flex-col items-start"
                >
                  {/* Título Principal com Fontes do Akedah Podcast (Barlow Condensed) */}
                  <h1 className="font-barlow-condensed text-[38px] xs:text-[46px] sm:text-[64px] md:text-[80px] lg:text-[94px] font-black leading-[0.92] sm:leading-[0.88] tracking-[-0.03em] uppercase mb-4 sm:mb-6 text-left">
                    <span className="block text-white">{heroSlides[heroSlide].titleMain}</span>
                    <span className="text-[#C4550A] block">{heroSlides[heroSlide].titleSub}</span>
                  </h1>

                  {/* Descrição Editorial */}
                  <p className="text-white/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-left mb-6 sm:mb-8 md:mb-10 font-normal">
                    {heroSlides[heroSlide].descricao}
                  </p>

                  {/* Botões de Ação do Hero com Cantos Secos e Estilo do Podcast */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto mb-6 sm:mb-8">
                    <a
                      href={heroSlides[heroSlide].btnPrimary.href}
                      target={heroSlides[heroSlide].btnPrimary.external ? "_blank" : undefined}
                      rel={heroSlides[heroSlide].btnPrimary.external ? "noopener noreferrer" : undefined}
                      onClick={() => {
                        if (heroSlides[heroSlide].btnPrimary.href === "#destaque") {
                          setIsPlaying(true);
                        }
                      }}
                      className="bg-[#C4550A] text-white hover:bg-[#b04b08] border border-[#C4550A] font-mono font-bold text-[11px] sm:text-xs uppercase tracking-[0.18em] px-7 sm:px-9 py-3.5 sm:py-4 rounded-none transition-all duration-300 shadow-xl shadow-[#C4550A]/25 text-center justify-center inline-flex items-center gap-2 group"
                    >
                      <span>{heroSlides[heroSlide].btnPrimary.text}</span>
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-sm">
                        ↗
                      </span>
                    </a>
                    <a 
                      href={heroSlides[heroSlide].btnSecondary.href}
                      target={heroSlides[heroSlide].btnSecondary.external ? "_blank" : undefined}
                      rel={heroSlides[heroSlide].btnSecondary.external ? "noopener noreferrer" : undefined}
                      className="bg-transparent text-white hover:bg-white/10 hover:border-white/60 border border-white/25 font-mono font-bold text-[11px] sm:text-xs uppercase tracking-[0.18em] px-7 sm:px-9 py-3.5 sm:py-4 rounded-none transition-all duration-300 text-center justify-center inline-flex items-center gap-2"
                    >
                      <span>{heroSlides[heroSlide].btnSecondary.text}</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Indicadores de Paginação do Carousel (4 Cards) fixos fora da troca de texto */}
              <div className="flex items-center gap-2.5">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setHeroSlide(idx)}
                    className={`h-1.5 transition-all duration-300 ${
                      heroSlide === idx
                        ? "w-8 bg-[#C4550A] ring-1 ring-[#C4550A]/50"
                        : "w-2.5 bg-white/25 hover:bg-white/60"
                    }`}
                    aria-label={`Ver card ${idx + 1}: ${slide.titleMain}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. DESTAQUE DO EPISÓDIO — PLAYER EXPANDIDO (#destaque) */}
        <section id="destaque" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 w-full max-w-[1600px] mx-auto border-b border-white/10 relative scroll-mt-20 md:scroll-mt-24">
          {/* Spotlight motivado atrás do player */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(196,85,10,0.18)_0%,_transparent_70%)] blur-3xl pointer-events-none -z-10" />

          {/* Header da Seção */}
          <div className="mb-6 pb-4 border-b border-white/10 max-w-[min(100%,calc(80vh*16/9))] mx-auto">
            <h2 className="font-barlow-condensed text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              EM DESTAQUE // EP.14
            </h2>
          </div>

          {/* Player / Imagem - Estilo YouTube Moderno com Cantos Arredondados */}
          <div className="w-full max-w-[min(100%,calc(80vh*16/9))] mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden border border-white/15 bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(196,85,10,0.1)] ring-1 ring-white/10">
            <div className="relative aspect-video w-full max-h-[80vh] overflow-hidden bg-black group rounded-2xl sm:rounded-3xl lg:rounded-[28px]">
              {isPlaying ? (
                <iframe
                  className="w-full h-full rounded-2xl sm:rounded-3xl lg:rounded-[28px]"
                  src="https://www.youtube.com/embed/nAcTWvqdc-E?autoplay=1&rel=0&modestbranding=1&si=x7bCNKiC59BwS5eL"
                  title="Akedah Podcast Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src="https://img.youtube.com/vi/nAcTWvqdc-E/maxresdefault.jpg"
                    alt="Episódio em Destaque - Akedah Podcast"
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Badge de numeração em pill glassmorphism */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-black/80 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#C4550A] uppercase font-bold shadow-lg">
                    EP.14 // 4K HDR
                  </div>

                  {/* Botão de Play Estilo YouTube */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group/play cursor-pointer z-20"
                    aria-label="Assistir episódio em destaque"
                  >
                    <div className="w-18 h-12 sm:w-24 sm:h-16 bg-[#FF0000] text-white flex items-center justify-center rounded-[18px] sm:rounded-[24px] shadow-[0_10px_35px_rgba(255,0,0,0.45)] group-hover/play:scale-110 group-hover/play:bg-[#E60000] group-hover/play:shadow-[0_15px_45px_rgba(255,0,0,0.65)] transition-all duration-300">
                      <svg className="w-7 h-7 sm:w-9 sm:h-9 fill-white ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Botão de Inscreva-se Estilo YouTube Pill */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.youtube.com/@EstudioAkedah?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-[#FF0000] hover:bg-[#D90000] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-red-950/40 hover:scale-[1.03] active:scale-95 rounded-full"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>INSCREVER-SE NO CANAL</span>
            </a>
          </div>
        </section>

        {/* 3. SEÇÃO DE ESTREIAS // AGENDA (#calendario e #agenda) */}
        <section id="calendario" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10 relative scroll-mt-20 md:scroll-mt-24 select-none">
          <div id="agenda" className="absolute -top-20 md:-top-24" />

          {/* Header da Seção: Alinhado à esquerda com Controles à direita (sem linhas divisórias arbitrárias) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 w-full text-left">
            <div className="flex flex-col items-start max-w-2xl">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#C4550A]/15 border border-[#C4550A]/40 text-[#C4550A] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] mb-3 shadow-sm">
                PROGRAMAÇÃO // AGENDA
              </span>
              <h2 className="font-barlow-condensed text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-white tracking-tight uppercase leading-[1.04]">
                PRÓXIMAS ESTREIAS CONFIRMADAS.
              </h2>
            </div>

            {/* Controles do Topo Direito: Indicadores de Conjuntos + Botões Circulares < e > */}
            <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-5 w-full sm:w-auto self-start md:self-end">
              {/* Indicadores de Paginação dos 3 Conjuntos */}
              <div className="flex items-center gap-1.5">
                {agendaPodcastCards.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToBlock(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeBlock === idx
                        ? "w-7 bg-[#C4550A]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Ir para conjunto de convidados ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Botões Circulares < e > */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  aria-label="Ver convidados anteriores"
                  className="w-10 h-10 rounded-full border border-white/20 bg-black/40 hover:bg-[#C4550A] hover:border-[#C4550A] text-white flex items-center justify-center transition-all shadow-sm active:scale-95 group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => paginate(1)}
                  aria-label="Ver próximos convidados"
                  className="w-10 h-10 rounded-full border border-white/20 bg-black/40 hover:bg-[#C4550A] hover:border-[#C4550A] text-white flex items-center justify-center transition-all shadow-sm active:scale-95 group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Container dos 4 Cards com Transição Animada e Pausa no Hover */}
          <div
            className="relative min-h-[490px] sm:min-h-[520px] overflow-visible sm:overflow-hidden"
            onMouseEnter={() => { isHoveredCardRef.current = true; }}
            onMouseLeave={() => { isHoveredCardRef.current = false; }}
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={activeBlock}
                custom={direction}
                variants={agendaVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex lg:grid lg:grid-cols-4 gap-5 sm:gap-6 w-full pt-1 pb-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none"
              >
                {agendaPodcastCards[activeBlock].map((card, cardIdx) => (
                  <a
                    key={cardIdx}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#130B07] border border-white/10 hover:border-[#C4550A]/70 rounded-[24px] sm:rounded-[26px] overflow-hidden min-h-[480px] sm:min-h-[510px] w-[82vw] sm:w-[44vw] lg:w-auto shrink-0 lg:shrink snap-center flex flex-col justify-between text-left transition-all duration-500 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(196,85,10,0.22)] relative"
                  >
                    {/* Topo do Card: Imagem de Destaque Ampla do Convidado */}
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A0503]">
                      <img
                        src={card.image}
                        alt={`Foto de ${card.guestName} - Convidado do Akedah Podcast`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 contrast-[1.05]"
                      />

                      {/* Degradê sutil de transição para a base do card */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#130B07] via-[#130B07]/30 via-45% to-transparent pointer-events-none" />

                      {/* Badge Flutuante: Data & Horário */}
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-lg">
                        <span className="font-barlow-condensed font-black text-xs sm:text-sm text-[#C4550A] tracking-wider uppercase">
                          {card.date}
                        </span>
                        <span className="text-white/40 text-[10px]">•</span>
                        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white/90">
                          {card.time}
                        </span>
                      </div>

                      {/* Badge Flutuante: Episódio */}
                      <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold tracking-wider text-white/90">
                        {card.episode}
                      </div>
                    </div>

                    {/* Corpo do Card: Informações Editoriais */}
                    <div className="p-5 sm:p-6 pt-3 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Papel / Especialidade */}
                        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#C4550A] tracking-[0.2em] uppercase block mb-1.5">
                          {card.role}
                        </span>

                        {/* Nome do Convidado em Destaque */}
                        <h3 className="font-barlow-condensed font-black text-2xl sm:text-[26px] text-white uppercase tracking-tight leading-tight group-hover:text-[#FAF6EB] transition-colors mb-2">
                          {card.guestName}
                        </h3>

                        {/* Tema do Episódio */}
                        <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed line-clamp-2">
                          {card.topic}
                        </p>
                      </div>

                      {/* Botão de Ação Estilo Pílula */}
                      <div className="pt-5">
                        <div className="w-full py-2.5 sm:py-3 px-4 rounded-full border border-white/15 bg-white/[0.04] group-hover:bg-[#C4550A] group-hover:border-[#C4550A] group-hover:text-white text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-sm">
                          <span>SAIBA MAIS</span>
                          <span className="group-hover:translate-x-1 transition-transform font-bold text-sm">→</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dica de arraste no mobile */}
          <div className="flex lg:hidden items-center justify-between pt-2 px-1 text-[11px] font-mono text-white/40 uppercase tracking-wider">
            <span>Deslize para ver os convidados</span>
            <span>← →</span>
          </div>
        </section>

        {/* 4. PLATAFORMAS — RÉGUA MINIMALISTA 4 COLUNAS (#redes) */}
        <section id="redes" className="py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-b border-white/10 relative scroll-mt-20 md:scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4 text-left">
            <div>
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.25em] mb-2 block">
                [ DISTRIBUIÇÃO // CANAIS OFICIAIS ]
              </span>
              <h2 className="font-barlow-condensed text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                ACOMPANHE O AKEDAH PODCAST EM TODOS OS LUGARES.
              </h2>
            </div>
          </div>

          {/* Grid Minimalista Ortogonal com Cantos Secos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 bg-[#080503] divide-y sm:divide-y-0 sm:divide-x divide-white/10 rounded-none">
            {[
              {
                name: "YOUTUBE",
                format: "EPISÓDIOS COMPLETOS",
                url: "https://www.youtube.com/@EstudioAkedah",
                icon: (
                  <svg className="w-5 h-5 fill-current text-white/70 group-hover:text-[#FF0000] transition-colors duration-300" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
              },
              {
                name: "SPOTIFY",
                format: "ÁUDIO HI-FI",
                url: "https://open.spotify.com",
                icon: (
                  <svg className="w-5 h-5 fill-current text-white/70 group-hover:text-[#1ED760] transition-colors duration-300" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308a.747.747 0 0 1-1.028.248c-2.813-1.718-6.353-2.107-10.524-1.155a.75.75 0 0 1-.336-1.462c4.564-1.042 8.49-.602 11.64 1.341a.749.749 0 0 1 .248 1.028zm1.47-3.266a.936.936 0 0 1-1.287.308c-3.22-1.979-8.128-2.552-11.936-1.396a.937.937 0 0 1-.55-1.79c4.354-1.321 9.775-.683 13.465 1.591a.936.936 0 0 1 .308 1.287zm.126-3.41c-3.86-2.292-10.228-2.503-13.899-1.388a1.124 1.124 0 1 1-.652-2.152c4.225-1.282 11.26-1.033 15.717 1.613a1.124 1.124 0 1 1-1.166 1.927z" />
                  </svg>
                ),
              },
              {
                name: "INSTAGRAM",
                format: "BASTIDORES & REELS",
                url: "https://www.instagram.com/estudioakedah",
                icon: (
                  <div className="relative w-5 h-5">
                    <svg className="w-5 h-5 fill-current text-white/70 group-hover:opacity-0 transition-opacity duration-300" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <svg className="w-5 h-5 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="instaColorGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f09433" />
                          <stop offset="25%" stopColor="#e6683c" />
                          <stop offset="50%" stopColor="#dc2743" />
                          <stop offset="75%" stopColor="#cc2366" />
                          <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#instaColorGrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                ),
              },
              {
                name: "TIKTOK",
                format: "CORTES DIÁRIOS",
                url: "https://www.tiktok.com/@estudioakedah",
                icon: (
                  <svg className="w-5 h-5 fill-current text-white/70 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.48V8.82a8.28 8.28 0 0 0 4.84 1.57v-3.7z" />
                  </svg>
                ),
              },
            ].map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 flex flex-col justify-between hover:bg-white/[0.03] transition-colors group rounded-none"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    {p.icon}
                  </div>
                  <span className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs font-mono">
                    ↗
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="font-barlow-condensed text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#FAF6EB] transition-colors">
                    {p.name}
                  </h3>
                  <span className="font-mono text-[10px] tracking-wider text-[#8A827D] uppercase block mt-1">
                    {p.format}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 5. FECHAMENTO EDITORIAL DIRETAMENTE NO FUNDO (#contato) */}
        <section id="contato" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-12 max-w-5xl mx-auto relative scroll-mt-20 md:scroll-mt-24 text-center">
          {/* Spotlight Quente Motivada Centralizada */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.18)_0%,_rgba(217,119,6,0.08)_50%,_transparent_75%)] blur-3xl pointer-events-none -z-10" />

          <div className="flex flex-col items-center">
            {/* Tag Monolítica Superior */}
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#C4550A] mb-4 block font-semibold">
              // CONVITE EXCLUSIVO
            </span>

            {/* Título Monumental Gigante */}
            <h2 className="font-barlow-condensed text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tight leading-[0.88] max-w-4xl mb-4">
              QUER SER NOSSO <br />
              <span className="text-[#C4550A]">CONVIDADO?</span>
            </h2>

            {/* Linha de baixo em texto menor */}
            <p className="text-[#8A827D] text-base sm:text-lg md:text-xl font-normal max-w-xl mb-10 leading-relaxed">
              Entre em contato conosco
            </p>

            {/* Botão Único */}
            <div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#C4550A] hover:bg-[#b04b08] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-none shadow-2xl shadow-[#C4550A]/35 transition-all duration-300"
              >
                <span>FALE COM UM ESPECIALISTA</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm">↗</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer isPodcastPage={true} />
    </div>
  );
};

export default Podcast;
