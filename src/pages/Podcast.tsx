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

const Podcast = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const isHoveredHeroRef = useRef(false);

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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-4 border-b border-white/10 gap-4 max-w-[min(100%,calc(80vh*16/9))] mx-auto">
            <div>
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.25em] mb-2 block">
                [ ÚLTIMO LANÇAMENTO • 1H 24MIN ]
              </span>
              <h2 className="font-barlow-condensed text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                EM DESTAQUE // EP.14
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[#8A827D] text-xs font-mono">
              <span className="w-2 h-2 bg-emerald-500 rounded-none animate-pulse" />
              <span>DISPONÍVEL EM ÁUDIO E VÍDEO</span>
            </div>
          </div>

          {/* Player / Imagem - Captura Máxima da Viewport sem Cortar Topo ou Base */}
          <div className="w-full max-w-[min(100%,calc(80vh*16/9))] mx-auto border border-white/15 bg-black shadow-2xl overflow-hidden rounded-none">
            <div className="relative aspect-video w-full max-h-[80vh] overflow-hidden bg-black group rounded-none">
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
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

                  {/* Badge de numeração com cantos retos */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-black/90 border border-white/15 px-3.5 py-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#C4550A] uppercase font-bold">
                    EP.14 // 4K HDR
                  </div>

                  {/* Botão de Play Geométrico Minimalista */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group/play cursor-pointer z-20"
                    aria-label="Assistir episódio em destaque"
                  >
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#C4550A] text-white flex items-center justify-center rounded-none shadow-2xl shadow-[#C4550A]/40 group-hover/play:scale-105 group-hover/play:bg-[#b04b08] transition-all duration-300 border border-white/20">
                      <svg className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Botão de Inscreva-se Direto Abaixo do Player */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.youtube.com/@EstudioAkedah?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-[#FF0000] hover:bg-[#D90000] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-red-950/40 hover:scale-[1.02] rounded-none"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>INSCREVER-SE NO CANAL</span>
            </a>
          </div>
        </section>

        {/* 3. SEÇÃO DE ESTREIAS — VITRINE DE CARTAZES EDITORIAIS (#calendario) */}
        <section id="calendario" className="py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-b border-white/10 relative scroll-mt-20 md:scroll-mt-24">
          {/* Header da Seção */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4 text-left">
            <div>
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.25em] mb-2 block">
                [ PROGRAMAÇÃO DE GRAVAÇÕES // EPISÓDIOS ]
              </span>
              <h2 className="font-barlow-condensed text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                PRÓXIMAS ESTREIAS CONFIRMADAS.
              </h2>
            </div>
            <div className="text-xs font-mono text-[#8A827D]">
              LANÇAMENTOS SEMANAIS // QUINTAS • 19:00
            </div>
          </div>

          {/* Grade Ortogonal Conectada de 4 Colunas com Bordas de 1px e Cantos Retos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 bg-[#080503] divide-y sm:divide-y-0 sm:divide-x divide-white/10 rounded-none">
            {[
              {
                date: "15.AGO // 19:00",
                guestName: "DANIEL SILVA",
                episodeTitle: "ENGENHARIA DE VENDAS & RETENÇÃO",
                photo: founderPicture,
                isConfidential: false,
              },
              {
                date: "22.AGO // 19:00",
                guestName: "CONVIDADO CONFIDENCIAL",
                episodeTitle: "INFRAESTRUTURA & GOVERNANÇA TECH",
                isConfidential: true,
              },
              {
                date: "29.AGO // 19:00",
                guestName: "CONVIDADO CONFIDENCIAL",
                episodeTitle: "FUSÕES & M&A DE ALTO VALOR",
                isConfidential: true,
              },
              {
                date: "05.SET // 19:00",
                guestName: "CONVIDADO CONFIDENCIAL",
                episodeTitle: "PLAYBOOKS COMERCIAIS DE 7 DÍGITOS",
                isConfidential: true,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-[3/4] overflow-hidden group bg-[#0C0704] flex flex-col justify-between rounded-none hover:bg-white/[0.02] transition-colors"
              >
                {/* TRATAMENTO FOTOGRÁFICO DOMINANDO O POSTER */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  {item.isConfidential ? (
                    <div className="relative w-full h-full bg-[#080503] overflow-hidden">
                      <img
                        src={studioBannerImg}
                        alt="Estúdio Akedah em Penumbra"
                        className="w-full h-full object-cover grayscale contrast-[1.35] brightness-[0.3] group-hover:scale-105 group-hover:brightness-[0.38] transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-[#0C0704]/60 mix-blend-multiply pointer-events-none" />

                      {/* Tarja Tipográfica Centralizada: CONFIDENCIAL // SOB EMBARGO */}
                      <div className="absolute top-[40%] left-0 right-0 flex items-center justify-center pointer-events-none z-10 px-3">
                        <div className="px-3.5 py-1.5 border border-[#C4550A]/50 bg-[#0C0704]/95 shadow-2xl flex items-center gap-2 rounded-none">
                          <span className="w-1.5 h-1.5 bg-[#C4550A] rounded-none animate-pulse" />
                          <span className="font-mono text-[9px] sm:text-[9.5px] tracking-[0.22em] font-bold text-[#C4550A] uppercase whitespace-nowrap">
                            CONFIDENCIAL // SOB EMBARGO
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={item.photo}
                        alt={item.guestName}
                        className="w-full h-full object-cover object-top grayscale contrast-[1.3] brightness-85 group-hover:scale-105 group-hover:contrast-[1.35] transition-transform duration-700 ease-out"
                      />
                    </div>
                  )}
                </div>

                {/* Vinheta ortogonal profunda na base */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0C0704]/90 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#0C0704] via-[#0C0704]/95 via-50% to-transparent pointer-events-none z-10" />

                {/* Base: Nome do Convidado em Caixa Alta + Data e Horário em Destaque */}
                <div className="relative z-20 p-6 flex flex-col justify-end text-left">
                  <h3 className="font-barlow-condensed text-2xl sm:text-3xl font-black text-white mb-1 uppercase tracking-tight group-hover:text-[#FAF6EB] transition-colors leading-none">
                    {item.guestName}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm font-bold text-[#C4550A] tracking-[0.2em] uppercase mt-1">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-[#8A827D]">
            <span>Datas e participantes sujeitos a confirmação nas transmissões oficiais.</span>
            <a
              href="https://www.instagram.com/estudioakedah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4550A] hover:text-white transition-colors underline decoration-[#C4550A]/40 underline-offset-4"
            >
              Acompanhar bastidores no Instagram →
            </a>
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
