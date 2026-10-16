import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import DanielSignaturePreloader from "@/components/daniel/DanielSignaturePreloader";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroDanielFe from "@/assets/daniel/daniel-hero-fe.png";
import heroDanielMusica from "@/assets/daniel/daniel-hero-musica.png";
import heroDanielEmpreendedor from "@/assets/daniel/daniel-hero-empreendedor.png";
import heroDanielYoutube from "@/assets/daniel/daniel-hero-youtube.jpg";
import imgAdvisorySummit from "@/assets/agenda/advisory-summit.jpg";
import imgConferenciaAnual from "@/assets/agenda/conferencia-anual.jpg";
import imgMentoriaImersiva from "@/assets/agenda/mentoria-imersiva.jpg";
import imgArenaBusiness from "@/assets/agenda/arena-business.jpg";
import imgFundamentos from "@/assets/daniel/daniel-hero-fe.png";
import imgMusica from "@/assets/daniel/daniel-hero-musica.png";
import imgNegocios from "@/assets/daniel/daniel-hero-empreendedor.png";
import logoEstudioAkedah from "@/assets/patrocinadores/logo-estudio-akedah.png";
import logoAkedahPodcast from "@/assets/patrocinadores/logo-akedah-podcast.png";
import logoFecar from "@/assets/patrocinadores/logo-fecar.png";
import logoTabernaculo from "@/assets/patrocinadores/logo-tabernaculo.png";
import logoHorizontalSimbolo from "@/assets/patrocinadores/logo-horizontal-simbolo.png";
import { WHATSAPP_URL, AKEDAH_EMAIL } from "@/data/services";

// Agenda Pública - 12 Cards divididos em 3 blocos de 4 (layout de cards com thumbnail e identidade visual unificada)
const agenda12Cards = [
  // Bloco 1 (Cards 1 a 4 - Proposta Oficial da Referência)
  [
    {
      dia: "08",
      mes: "DEZ",
      local: "SÃO PAULO - SP",
      titulo: "ADVISORY SUMMIT",
      descricao: "Estratégia e liderança para o próximo ciclo.",
      imagem: imgAdvisorySummit,
      link: WHATSAPP_URL,
    },
    {
      dia: "15",
      mes: "DEZ",
      local: "ONLINE",
      titulo: "CONFERÊNCIA ANUAL",
      descricao: "Negócios, pessoas e propósito.",
      imagem: imgConferenciaAnual,
      link: WHATSAPP_URL,
    },
    {
      dia: "18",
      mes: "JAN",
      local: "CURITIBA - PR",
      titulo: "MENTORIA IMERSIVA",
      descricao: "Estratégia na prática para líderes e equipes.",
      imagem: imgMentoriaImersiva,
      link: WHATSAPP_URL,
    },
    {
      dia: "26",
      mes: "JAN",
      local: "RIO DE JANEIRO - RJ",
      titulo: "ARENA BUSINESS",
      descricao: "Tendências, inovação e crescimento.",
      imagem: imgArenaBusiness,
      link: WHATSAPP_URL,
    },
  ],
  // Bloco 2 (Cards 5 a 8)
  [
    {
      dia: "18",
      mes: "FEV",
      local: "SÃO PAULO - SP",
      titulo: "CONVENÇÃO B2B",
      descricao: "Estratégia comercial e escala para conselhos consultivos.",
      imagem: imgAdvisorySummit,
      link: WHATSAPP_URL,
    },
    {
      dia: "25",
      mes: "FEV",
      local: "BARUERI - SP",
      titulo: "IMERSÃO C-LEVEL",
      descricao: "Governança corporativa e expansão patrimonial.",
      imagem: imgMentoriaImersiva,
      link: WHATSAPP_URL,
    },
    {
      dia: "12",
      mes: "MAR",
      local: "BELO HORIZONTE - MG",
      titulo: "FÓRUM LIDERANÇA",
      descricao: "Negócios éticos e tomada de decisão estratégica.",
      imagem: imgConferenciaAnual,
      link: WHATSAPP_URL,
    },
    {
      dia: "22",
      mes: "MAR",
      local: "FLORIANÓPOLIS - SC",
      titulo: "SUMMIT EXECUTIVO",
      descricao: "Playbooks de tração e consolidação no mercado corporativo.",
      imagem: imgArenaBusiness,
      link: WHATSAPP_URL,
    },
  ],
  // Bloco 3 (Cards 9 a 12)
  [
    {
      dia: "05",
      mes: "ABR",
      local: "BRASÍLIA - DF",
      titulo: "MASTERCLASS B2B",
      descricao: "Engenharia de valor para negociações corporativas complexas.",
      imagem: imgAdvisorySummit,
      link: WHATSAPP_URL,
    },
    {
      dia: "19",
      mes: "ABR",
      local: "CAMPINAS - SP",
      titulo: "CONGRESSO GESTÃO",
      descricao: "Margem operacional, inteligência financeira e expansão multicanal.",
      imagem: imgConferenciaAnual,
      link: WHATSAPP_URL,
    },
    {
      dia: "08",
      mes: "MAI",
      local: "GOIÂNIA - GO",
      titulo: "PAINEL GOVERNANÇA",
      descricao: "Liderança com visão de longo prazo, integridade e sucessão.",
      imagem: imgMentoriaImersiva,
      link: WHATSAPP_URL,
    },
    {
      dia: "24",
      mes: "MAI",
      local: "CURITIBA - PR",
      titulo: "ENCONTRO DE DIRETORES",
      descricao: "Cultura organizacional de alta performance e excelência em execução.",
      imagem: imgArenaBusiness,
      link: WHATSAPP_URL,
    },
  ],
];

// Redes Sociais do Daniel Silva (estilo cards executivos de distribuição)
const danielSocials = [
  {
    name: "YOUTUBE",
    subtitle: "Palestras e conteúdos",
    url: "https://www.youtube.com/@EstudioAkedah",
    icon: (
      <div className="w-10 h-10 flex items-center justify-center shrink-0">
        <div className="w-9 h-7 rounded-[7px] bg-[#FF0000] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
          <svg className="w-3.5 h-3.5 fill-white ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    name: "SPOTIFY",
    subtitle: "Músicas e mensagens",
    url: "https://open.spotify.com",
    icon: (
      <div className="w-10 h-10 flex items-center justify-center shrink-0">
        <svg className="w-9 h-9 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#1ED760" />
          <path fill="#07132B" d="M17.5 17.3c-.2.3-.6.4-.9.2-2.5-1.5-5.6-1.9-9.3-1a.7.7 0 1 1-.3-1.3c4-1 7.5-.6 10.3 1.1.3.2.4.6.2 1zm1.3-2.9c-.3.4-.7.5-1.1.3-2.9-1.8-7.3-2.3-10.7-1.3a.8.8 0 0 1-.5-1.6c3.9-1.2 8.7-.6 12 1.4.4.2.5.7.3 1.2zm.1-3.1c-3.5-2.1-9.2-2.3-12.5-1.3a1 1 0 1 1-.6-1.9c3.8-1.2 10.1-.9 14.2 1.5 1 .6 1.3 1.8.7 2.7-.6.9-1.8 1.2-1.8-1z" />
        </svg>
      </div>
    ),
  },
  {
    name: "INSTAGRAM",
    subtitle: "Bastidores e rotina",
    url: "https://www.instagram.com/estudioakedah",
    icon: (
      <div className="w-10 h-10 flex items-center justify-center shrink-0">
        <div className="w-9 h-9 rounded-[10px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center p-2 shadow-md transition-transform duration-300 group-hover:scale-105">
          <svg className="w-full h-full fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    name: "TIKTOK",
    subtitle: "Cortes e trechos",
    url: "https://www.tiktok.com/@estudioakedah",
    icon: (
      <div className="w-10 h-10 flex items-center justify-center shrink-0">
        <div className="w-9 h-9 rounded-full bg-black border border-white/15 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.48V8.82a8.28 8.28 0 0 0 4.84 1.57v-3.7z" />
          </svg>
        </div>
      </div>
    ),
  },
];

// 5 Logotipos coloridos oficiais para a linha animada de Patrocinadores (sem cards)
const patrocinadoresLogos = [
  {
    nome: "ESTÚDIO AKEDAH",
    image: logoEstudioAkedah,
    alt: "Estúdio Akedah",
    imgClass: "h-[30px] sm:h-[36px] w-auto max-w-[210px]",
  },
  {
    nome: "AKEDAH PODCAST",
    image: logoAkedahPodcast,
    alt: "Akedah Podcast",
    imgClass: "h-[44px] sm:h-[50px] w-auto max-w-[190px]",
  },
  {
    nome: "FE-CAR",
    image: logoFecar,
    alt: "FE-CAR",
    imgClass: "h-[36px] sm:h-[42px] w-auto max-w-[190px]",
  },
  {
    nome: "TABERNÁCULO DA TRINDADE",
    image: logoTabernaculo,
    alt: "Tabernáculo da Trindade",
    imgClass: "h-[38px] sm:h-[44px] w-auto max-w-[210px]",
  },
  {
    nome: "STUDIO",
    image: logoHorizontalSimbolo,
    alt: "Studio",
    imgClass: "h-[38px] sm:h-[44px] w-auto max-w-[190px]",
  },
];

// Componente que aplica animação de surgimento com desfoque alto associada ao scroll
const ScrollBlurItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center 50%"],
  });

  // Começa com desfoque alto (24px) e opacidade reduzida; ao atingir o centro da viewport fica totalmente nítido (0px e opacidade 1)
  const blurVal = useTransform(scrollYProgress, [0, 0.7, 1], [24, 4, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.15, 0.65, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [32, 0]);
  const filter = useTransform(blurVal, (v) => (v <= 0.2 ? "none" : `blur(${v.toFixed(1)}px)`));

  return (
    <motion.div
      ref={ref}
      style={{
        filter,
        opacity,
        y,
        willChange: "filter, opacity, transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Variantes para animação de slide direcional e desfoque nos cards da Agenda
const agendaVariants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? 80 : -80,
    opacity: 0,
    filter: "blur(14px)",
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
    filter: "blur(14px)",
    transition: {
      duration: 0.38,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// 4 Cards da Hero Section com rotação automática a cada 5s (estilo editorial de alto impacto)
const heroSlides = [
  {
    id: 1,
    badge: "FÉ • PROPÓSITO • LIDERANÇA",
    titleMain: "Daniel",
    titleSub: "Silva",
    descricao: "Liderança com visão de longo prazo, integridade e princípios sólidos de fé. Transformando vidas, famílias e trajetórias empresariais através de valores inegociáveis.",
    btnPrimary: { text: "Conferir Agendas", href: "#agenda" },
    btnSecondary: { text: "Falar no WhatsApp", href: WHATSAPP_URL, external: true },
    image: heroDanielFe,
    alt: "Daniel Silva - Fé e Liderança",
    imgPos: "object-[center_20%] md:object-[center_15%]",
  },
  {
    id: 2,
    badge: "ARTE • SENSIBILIDADE • ADORAÇÃO",
    titleMain: "Sensibilidade &",
    titleSub: "Música",
    descricao: "A música como instrumento de adoração, conexão autêntica e inspiração. Sensibilidade artística e excelência poética para elevar e transformar corações.",
    btnPrimary: { text: "Conhecer Música", href: "#musica" },
    btnSecondary: { text: "Falar no WhatsApp", href: WHATSAPP_URL, external: true },
    image: heroDanielMusica,
    alt: "Daniel Silva - Sensibilidade Artística e Música",
    imgPos: "object-[center_15%]",
  },
  {
    id: 3,
    badge: "ESTRATÉGIA • MERCADO • NEGÓCIOS",
    titleMain: "Empreendedor",
    titleSub: "& Estrategista",
    descricao: "Estruturação de operações comerciais de alta margem, governança corporativa para conselhos consultivos e processos de vendas previsíveis para empresas em tração.",
    btnPrimary: { text: "Conhecer Métodos", href: "#negocios" },
    btnSecondary: { text: "Falar no WhatsApp", href: WHATSAPP_URL, external: true },
    image: heroDanielEmpreendedor,
    alt: "Daniel Silva - Empreendedorismo & Negócios",
    imgPos: "object-[center_20%]",
  },
  {
    id: 4,
    badge: "CANAL OFICIAL • CONTEÚDO EXCLUSIVO",
    titleMain: "Canal no",
    titleSub: "YouTube",
    descricao: "Palestras completas, podcasts, reflexões práticas sobre fé, negócios e bastidores exclusivos em estúdio. Inscreva-se e acompanhe conteúdos que aceleram sua trajetória.",
    btnPrimary: { text: "Assistir no YouTube", href: "https://www.youtube.com/@EstudioAkedah", external: true },
    btnSecondary: { text: "Falar no WhatsApp", href: WHATSAPP_URL, external: true },
    image: heroDanielYoutube,
    alt: "Daniel Silva no YouTube - Estúdio Akedah",
    imgPos: "object-[center_20%]",
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

const DanielSilva = () => {
  const [heroSlide, setHeroSlide] = useState(0);
  const isHoveredHeroRef = useRef(false);
  const [[activeBlock, direction], setPage] = useState([0, 1]);
  const isHoveredCardRef = useRef(false);

  // Pré-carregamento imediato das 4 imagens da Hero para evitar atrasos ou pop-in
  useEffect(() => {
    const heroImgs = [heroDanielFe, heroDanielMusica, heroDanielEmpreendedor, heroDanielYoutube];
    heroImgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const paginate = (newDirection: number) => {
    setPage(([prev]) => {
      const next = (prev + newDirection + agenda12Cards.length) % agenda12Cards.length;
      return [next, newDirection];
    });
  };

  const goToBlock = (idx: number) => {
    setPage(([prev]) => [idx, idx >= prev ? 1 : -1]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Timer de rotação automática consistente (a cada 5 segundos) sem resetar por movimento do mouse
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHoveredCardRef.current) {
        setPage(([prev]) => [(prev + 1) % agenda12Cards.length, 1]);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Timer de rotação automática dos cards da Hero (a cada 5 segundos) com reset inteligente
  useEffect(() => {
    const heroTimer = setInterval(() => {
      if (!isHoveredHeroRef.current) {
        setHeroSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 5000);
    return () => clearInterval(heroTimer);
  }, [heroSlide]);

  // Habilitar visualização de prancheta com scroll-snap suave em tela cheia na página Daniel Silva
  useEffect(() => {
    document.documentElement.classList.add("snap-y", "snap-proximity", "scroll-smooth");
    return () => {
      document.documentElement.classList.remove("snap-y", "snap-proximity", "scroll-smooth");
    };
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Silva",
    jobTitle: "Estrategista de Negócios, Mentor Executivo e Palestrante",
    description: "Site oficial de Daniel Silva: posicionamento estratégico, governança comercial, mentorias, fé, música e palestras.",
    url: "https://estudioakedah.com/daniel-silva",
  };

  return (
    <div className="min-h-screen bg-[#07132B] text-white selection:bg-white selection:text-[#07132B] relative font-sans">
      {/* Preloader com animação de escrita da assinatura a cada recarregamento */}
      <DanielSignaturePreloader />

      <SEO
        title="Daniel Silva | Estratégia de Negócios, Mentorias & Posicionamento"
        description="Site oficial de Daniel Silva: palestras, agenda pública de eventos, empreendedorismo, fé, música e contato para contratações."
        url="https://estudioakedah.com/daniel-silva"
        schema={schema}
      />
      <Navbar isDanielSilvaPage={true} />

      <main className="relative z-10">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (CAROUSEL COM 4 CARDS E SLIDE AUTOMÁTICO A CADA 5S)       */}
        {/* ========================================================================= */}
        <section 
          id="hero"
          className="relative min-h-screen min-h-[100dvh] md:h-screen w-full flex items-center overflow-hidden bg-[#07132B] snap-start snap-always"
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
                  className={`absolute right-0 top-0 bottom-0 w-full sm:w-[85%] md:w-[70%] lg:w-[58%] xl:w-[55%] h-full flex items-center justify-end transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  style={{
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 10%, rgba(0,0,0,0.85) 30%, black 50%)",
                    maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 10%, rgba(0,0,0,0.85) 30%, black 50%)",
                  }}
                  aria-hidden={!isActive}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.alt} 
                    loading="eager"
                    decoding="async"
                    fetchPriority={idx === 0 ? "high" : "auto"}
                    className={`w-full h-full object-cover ${slide.imgPos} filter contrast-[1.08] brightness-[1.03] transition-transform duration-1000 ease-out ${
                      isActive ? "scale-100" : "scale-105"
                    }`}
                  />
                </div>
              );
            })}

            {/* Overlay sutil apenas em mobile pequeno para contraste do texto */}
            <div className="absolute inset-0 bg-[#07132B]/50 sm:bg-[#07132B]/20 md:bg-transparent z-10 pointer-events-none" />

            {/* Degradê Azul Marinho vindo do lado esquerdo para destacar o texto sem cobrir a foto */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] from-20% sm:from-28% md:from-35% via-[#07132B]/60 via-45% to-transparent to-58% z-10 pointer-events-none" />

            {/* Degradês verticais suaves para mesclagem superior e inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent via-65% to-[#07132B]/30 z-10 pointer-events-none" />

            {/* Glow azul sutil */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-3xl pointer-events-none z-10" />
          </div>

          {/* Layer 2: Conteúdo Editorial à esquerda com AnimatePresence focado exclusivamente no texto */}
          <div className="relative z-20 w-full px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-24 sm:pt-28 md:pt-20 pb-8 flex justify-start">
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

                  {/* Título Principal */}
                  <h1 className="font-display text-[34px] xs:text-[42px] sm:text-[62px] md:text-[80px] lg:text-[96px] font-[900] leading-[0.94] sm:leading-[0.88] tracking-[-0.04em] mb-4 sm:mb-6 md:mb-8">
                    <span className="block text-white">{heroSlides[heroSlide].titleMain}</span>
                    <span className="text-white/80 italic font-normal block">{heroSlides[heroSlide].titleSub}</span>
                  </h1>

                  {/* Descrição Editorial */}
                  <p className="text-white/70 text-xs sm:text-base md:text-lg leading-relaxed max-w-xl text-left mb-6 sm:mb-8 md:mb-10 font-normal">
                    {heroSlides[heroSlide].descricao}
                  </p>

                  {/* Botões de Ação do Hero */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto mb-6 sm:mb-8">
                    <a
                      href={heroSlides[heroSlide].btnPrimary.href}
                      target={heroSlides[heroSlide].btnPrimary.external ? "_blank" : undefined}
                      rel={heroSlides[heroSlide].btnPrimary.external ? "noopener noreferrer" : undefined}
                      className="bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-7 sm:px-10 py-3.5 sm:py-4 rounded-[14px] transition-all duration-300 shadow-xl text-center justify-center inline-flex items-center"
                    >
                      {heroSlides[heroSlide].btnPrimary.text}
                    </a>
                    <a 
                      href={heroSlides[heroSlide].btnSecondary.href}
                      target={heroSlides[heroSlide].btnSecondary.external ? "_blank" : undefined}
                      rel={heroSlides[heroSlide].btnSecondary.external ? "noopener noreferrer" : undefined}
                      className="bg-transparent text-white hover:bg-white hover:text-[#07132B] border border-white/30 font-bold text-xs uppercase tracking-[0.2em] px-7 sm:px-10 py-3.5 sm:py-4 rounded-[14px] transition-all duration-300 text-center justify-center inline-flex items-center"
                    >
                      {heroSlides[heroSlide].btnSecondary.text}
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Indicadores de Paginação do Carousel (4 Cards) fixos fora da troca de texto */}
              <div className="flex items-center gap-2.5">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setHeroSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      heroSlide === idx
                        ? "w-8 bg-white ring-1 ring-white/40"
                        : "w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Ver card ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. AGENDA PÚBLICA (PRANCHETA TELA CHEIA)                                   */}
        {/* ========================================================================= */}
        <section
          id="agenda"
          className="w-full min-h-screen min-h-[100dvh] md:h-screen flex flex-col justify-center bg-white text-[#07132B] relative overflow-hidden select-none snap-start snap-always border-b border-[#07132B]/10"
        >
          {/* Área Principal da Agenda */}
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 w-full flex flex-col justify-center pt-24 sm:pt-28 md:pt-28 lg:pt-16 pb-6 sm:py-10 lg:py-12">
            
            {/* Header da Seção: Alinhado à esquerda com Controles à direita */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-5 sm:mb-8 md:mb-10 w-full">
              <div className="flex flex-col items-start text-left max-w-2xl">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#07132B] text-white text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] mb-2.5 sm:mb-3 shadow-sm">
                  AGENDA
                </span>
                <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#07132B] tracking-tight uppercase leading-[1.04]">
                  PRÓXIMAS APRESENTAÇÕES.
                </h2>
                <p className="text-[#07132B]/75 text-xs sm:text-sm md:text-base font-sans mt-2 max-w-xl leading-relaxed">
                  Palestras, conferências, mentorias e experiências que unem conhecimento, prática e inspiração.
                </p>
              </div>

              {/* Controles do Topo Direito: Link Ver Toda a Agenda + Indicadores + Setas < > */}
              <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-6 w-full sm:w-auto self-start md:self-end">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-[13px] font-bold text-[#07132B] hover:text-[#B38338] uppercase tracking-[0.16em] flex items-center gap-1.5 transition-colors group"
                >
                  <span>VER TODA A AGENDA</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <div className="flex items-center gap-3">
                  {/* Indicadores de Paginação do Bloco */}
                  <div className="flex items-center gap-1.5 mr-1">
                    {agenda12Cards.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => goToBlock(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeBlock === idx
                            ? "w-6 bg-[#07132B]"
                            : "w-2 bg-[#07132B]/20 hover:bg-[#07132B]/40"
                        }`}
                        aria-label={`Ir para bloco ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Botões Circulares < e > */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => paginate(-1)}
                      aria-label="Ver agendas anteriores"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#07132B]/20 bg-white hover:bg-[#07132B] hover:text-white text-[#07132B] flex items-center justify-center transition-all shadow-sm active:scale-95 group"
                    >
                      <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={() => paginate(1)}
                      aria-label="Ver próximas agendas"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#07132B]/20 bg-white hover:bg-[#07132B] hover:text-white text-[#07132B] flex items-center justify-center transition-all shadow-sm active:scale-95 group"
                    >
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Container dos 4 Cards com Animação (No mobile/tablet: scroll horizontal elegante; no desktop: grid) */}
            <div className="relative min-h-[380px] sm:min-h-[420px] pt-2 sm:pt-3 pb-2 sm:pb-4 -mt-2 -mb-3 px-1 -mx-1 overflow-visible sm:overflow-hidden">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={activeBlock}
                  custom={direction}
                  variants={agendaVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full pt-1 pb-4 sm:pb-2 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none"
                >
                  {agenda12Cards[activeBlock].map((card, cardIdx) => (
                    <a
                      key={cardIdx}
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => { isHoveredCardRef.current = true; }}
                      onMouseLeave={() => { isHoveredCardRef.current = false; }}
                      className="group bg-[#07132B] border border-white/10 hover:border-[#E2BA7A]/60 rounded-[22px] overflow-hidden min-h-[350px] sm:min-h-[380px] lg:min-h-[400px] w-[82vw] sm:w-[44vw] lg:w-auto shrink-0 lg:shrink snap-center flex flex-col justify-between text-left transition-all duration-300 shadow-xl hover:-translate-y-1.5 hover:shadow-2xl relative"
                    >
                      {/* Topo do Card: Data à Esquerda + Imagem com blend suave à Direita */}
                      <div className="relative h-32 sm:h-36 overflow-hidden flex items-start justify-between p-5 sm:p-6 pb-0">
                        {/* Data e Local */}
                        <div className="relative z-10 flex flex-col justify-start pr-2">
                          <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#E2BA7A] leading-none tracking-tight group-hover:scale-105 origin-left transition-transform duration-300">
                            {card.dia}
                          </span>
                          <span className="font-display font-bold text-sm sm:text-base text-white tracking-wider uppercase block mt-1">
                            {card.mes}
                          </span>
                          <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-white/60 tracking-wider uppercase block mt-1.5 leading-tight">
                            {card.local}
                          </span>
                        </div>

                        {/* Imagem do Evento no Topo-Direito com máscara radial suave e sem recorte quadrado */}
                        <div 
                          className="absolute top-0 right-0 w-[60%] sm:w-[58%] h-full overflow-hidden pointer-events-none"
                          style={{
                            WebkitMaskImage: "radial-gradient(ellipse 110% 105% at 100% 0%, black 25%, rgba(0,0,0,0.65) 55%, transparent 92%)",
                            maskImage: "radial-gradient(ellipse 110% 105% at 100% 0%, black 25%, rgba(0,0,0,0.65) 55%, transparent 92%)",
                          }}
                        >
                          <img
                            src={card.imagem}
                            alt={card.titulo}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Gradientes de mesclagem tonal perfeitamente casados com o fundo */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-[#07132B]/50 to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-[#07132B]/30 to-transparent" />
                        </div>
                      </div>

                      {/* Corpo do Card: Título e Descrição */}
                      <div className="px-5 sm:px-6 pt-3 pb-2 flex-1 flex flex-col justify-start">
                        <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight group-hover:text-[#FAF6EB] transition-colors mb-2">
                          {card.titulo}
                        </h3>
                        <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed min-h-[38px]">
                          {card.descricao}
                        </p>
                      </div>

                      {/* Rodapé do Card: Botão Saiba Mais em formato Pílula */}
                      <div className="p-5 sm:p-6 pt-2">
                        <div className="w-full py-2.5 sm:py-3 px-4 rounded-full border border-white/20 bg-white/[0.04] group-hover:bg-[#E2BA7A] group-hover:border-[#E2BA7A] group-hover:text-[#07132B] text-white text-xs sm:text-[13px] font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-sm">
                          <span>SAIBA MAIS</span>
                          <span className="group-hover:translate-x-1 transition-transform font-bold">→</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dica de arraste no mobile e tablet */}
            <div className="flex lg:hidden items-center justify-between pt-1 px-1 text-[11px] font-mono text-[#07132B]/50 uppercase tracking-wider">
              <span>Deslize para ver os cards</span>
              <span>← →</span>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FUNDAMENTOS DE VIDA E LIDERANÇA (HERO-STYLE FULL-BLEED - IMAGEM ESQUERDA)*/}
        {/* ========================================================================= */}
        <section
          id="fe"
          className="relative min-h-screen min-h-[100dvh] md:h-screen w-full flex items-center overflow-hidden bg-[#07132B] snap-start snap-always border-t border-white/[0.08]"
        >
          <span id="fundamentos" className="sr-only" />

          {/* Imagem de fundo cobrindo o lado ESQUERDO com máscara feathered e opacidade total */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-full sm:w-[85%] md:w-[70%] lg:w-[58%] xl:w-[55%] h-full pointer-events-none"
            style={{
              WebkitMaskImage: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.15) 10%, rgba(0,0,0,0.85) 30%, black 50%)",
              maskImage: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.15) 10%, rgba(0,0,0,0.85) 30%, black 50%)",
            }}
          >
            <img
              src={imgFundamentos}
              alt="Daniel Silva - Fé, Propósito e Liderança"
              className="w-full h-full object-cover object-[center_20%] md:object-[center_15%] filter contrast-[1.08] brightness-[1.03]"
            />
          </div>

          {/* Overlay sutil apenas em mobile pequeno */}
          <div className="absolute inset-0 bg-[#07132B]/50 sm:bg-[#07132B]/20 md:bg-transparent z-10 pointer-events-none" />

          {/* Degradê: lado direito 100% azul marinho sólido onde fica o texto, esvanecendo suavemente antes de chegar ao Daniel */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#07132B] from-20% sm:from-28% md:from-35% via-[#07132B]/60 via-45% to-transparent to-58% z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent via-65% to-[#07132B]/30 z-10 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-3xl pointer-events-none z-10" />

          {/* Conteúdo Textual à Direita (100% sobre o fundo azul marinho) */}
          <div className="relative z-20 w-full min-h-screen min-h-[100dvh] md:h-screen flex items-center justify-end px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28">
            <div className="w-full lg:w-[54%] xl:w-[50%] flex flex-col items-start text-left py-20 sm:py-16">
              <h2 className="font-display text-[26px] xs:text-[30px] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[58px] font-[900] leading-[0.94] tracking-[-0.03em] uppercase mb-5 sm:mb-8">
                <span className="block text-white">Fé, Propósito &amp;</span>
                <span className="text-white/80 italic font-normal block lowercase sm:whitespace-nowrap">Valores Inegociáveis.</span>
              </h2>

              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-5 font-light">
                Acredito que resultados sustentáveis nascem de princípios sólidos. Minha atuação é guiada por fé, disciplina, integridade e um olhar genuíno para o desenvolvimento de pessoas.
              </p>

              <p className="text-white/55 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg font-normal">
                A integridade e o temor a Deus são os pilares que sustentam toda trajetória de liderança autêntica. O verdadeiro sucesso só se sustenta quando alinhado a princípios inegociáveis e compromisso moral irrestrito.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SENSIBILIDADE ARTÍSTICA & ADORAÇÃO (HERO-STYLE FULL-BLEED - IMAGEM DIREITA) */}
        {/* ========================================================================= */}
        <section
          id="musica"
          className="relative min-h-screen min-h-[100dvh] md:h-screen w-full flex items-center overflow-hidden bg-white snap-start snap-always border-t border-[#07132B]/10"
        >
          {/* Imagem de fundo cobrindo o lado DIREITO com máscara feathered nítida e opacidade total */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-full sm:w-[85%] md:w-[70%] lg:w-[58%] xl:w-[55%] h-full pointer-events-none"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 5%, rgba(0,0,0,0.95) 18%, black 25%)",
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 5%, rgba(0,0,0,0.95) 18%, black 25%)",
            }}
          >
            <img
              src={imgMusica}
              alt="Daniel Silva - Expressão Musical e Adoração"
              className="w-full h-full object-cover object-[center_15%] filter contrast-[1.06] brightness-[1.02]"
            />
          </div>

          {/* Overlay sutil apenas em mobile pequeno */}
          <div className="absolute inset-0 bg-white/40 sm:bg-transparent z-10 pointer-events-none" />

          {/* Degradê: lado esquerdo branco sólido onde fica o texto, esvanecendo bem antes de tocar no Daniel */}
          <div className="absolute inset-0 bg-gradient-to-r from-white from-15% sm:from-25% md:from-32% via-white/40 via-38% to-transparent to-46% z-10 pointer-events-none" />

          {/* Conteúdo Textual à Esquerda (100% sobre o fundo branco) */}
          <div className="relative z-20 w-full min-h-screen min-h-[100dvh] md:h-screen flex items-center justify-start px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28">
            <div className="w-full lg:w-[54%] xl:w-[50%] flex flex-col items-start text-left py-20 sm:py-16">
              <h2 className="font-display text-[26px] xs:text-[30px] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[58px] font-[900] leading-[0.94] tracking-[-0.03em] uppercase mb-5 sm:mb-8">
                <span className="block text-[#07132B]">A Música como</span>
                <span className="text-[#07132B]/75 italic font-normal block lowercase sm:whitespace-nowrap">Expressão e Adoração.</span>
              </h2>

              <p className="text-[#07132B]/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-5 font-light">
                A música sempre fez parte da minha história. É uma forma de expressar minha fé, de me conectar com pessoas e de levar mensagens que inspiram e transformam.
              </p>

              <p className="text-[#07132B]/60 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg font-normal">
                A harmonia musical traz precisão estética, sensibilidade poética e conexão espiritual autêntica em tudo o que realizo. A arte como instrumento vivo de elevação e edificação.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. ATUAÇÃO & NEGÓCIOS (HERO-STYLE FULL-BLEED - IMAGEM ESQUERDA)           */}
        {/* ========================================================================= */}
        <section
          id="empreendedorismo"
          className="relative min-h-screen min-h-[100dvh] md:h-screen w-full flex items-center overflow-hidden bg-[#07132B] snap-start snap-always border-t border-white/[0.08]"
        >
          <span id="negocios" className="sr-only" />

          {/* Imagem de fundo cobrindo o lado ESQUERDO com máscara feathered e opacidade total */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-full sm:w-[85%] md:w-[70%] lg:w-[58%] xl:w-[55%] h-full pointer-events-none"
            style={{
              WebkitMaskImage: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.15) 10%, rgba(0,0,0,0.85) 30%, black 50%)",
              maskImage: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.15) 10%, rgba(0,0,0,0.85) 30%, black 50%)",
            }}
          >
            <img
              src={imgNegocios}
              alt="Daniel Silva - Empreendedorismo & Estratégia Comercial"
              className="w-full h-full object-cover object-[center_20%] filter contrast-[1.08] brightness-[1.03]"
            />
          </div>

          {/* Overlay sutil apenas em mobile pequeno */}
          <div className="absolute inset-0 bg-[#07132B]/50 sm:bg-[#07132B]/20 md:bg-transparent z-10 pointer-events-none" />

          {/* Degradê: lado direito 100% azul marinho sólido onde fica o texto, esvanecendo suavemente antes de chegar ao Daniel */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#07132B] from-20% sm:from-28% md:from-35% via-[#07132B]/60 via-45% to-transparent to-58% z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent via-65% to-[#07132B]/30 z-10 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-3xl pointer-events-none z-10" />

          {/* Conteúdo Textual à Direita (100% sobre o fundo azul marinho) */}
          <div className="relative z-20 w-full min-h-screen min-h-[100dvh] md:h-screen flex items-center justify-end px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28">
            <div className="w-full lg:w-1/2 xl:w-[48%] flex flex-col items-start text-left py-20 sm:py-16">
              <h2 className="font-display text-[26px] xs:text-[30px] sm:text-[38px] md:text-[46px] lg:text-[50px] xl:text-[54px] font-[900] leading-[0.96] tracking-[-0.03em] uppercase mb-5 sm:mb-8 break-words">
                <span className="block text-white">Empreendedorismo &amp;</span>
                <span className="text-white/80 italic font-normal block lowercase">Estratégia Comercial.</span>
              </h2>

              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-5 font-light">
                Liderança e execução na prática. Contribuo para o desenvolvimento de negócios e pessoas por meio de palestras, consultorias e experiências que conectam estratégia, execução e propósito.
              </p>

              <p className="text-white/55 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg font-normal">
                Estruturação de operações comerciais de alta margem, governança corporativa para conselhos consultivos e processos de vendas previsíveis para empresas em tração.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. PATROCINADORES OFICIAIS (PRANCHETA TELA CHEIA COM LOOP & CTA)          */}
        {/* ========================================================================= */}
        <section 
          id="patrocinadores" 
          className="min-h-screen min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center py-8 sm:py-14 px-5 sm:px-10 lg:px-16 border-t border-white/10 relative overflow-hidden bg-[#07132B] snap-start snap-always"
        >
          {/* Glow sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-blue-600/10 blur-[140px] pointer-events-none" />

          <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
            {/* Header da Seção Centralizado e Destacado */}
            <div className="mb-4 sm:mb-8 max-w-3xl mx-auto">

              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
                Patrocinadores <span className="font-display italic font-normal text-white/80 lowercase">Oficiais</span>
              </h2>
              <p className="text-white/70 text-xs sm:text-base md:text-lg font-sans mt-2 max-w-2xl mx-auto leading-relaxed">
                Empresas e marcas visionárias que caminham junto ao ecossistema de alto valor, eventos corporativos e negócios de Daniel Silva.
              </p>
            </div>

            {/* Linha Animada Contínua de Logotipos (Marquee Infinito em Loop) */}
            <div className="relative w-full overflow-hidden py-4 sm:py-8 my-1 sm:my-2">
              {/* Gradientes de fade nas bordas para transição suave */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-44 bg-gradient-to-r from-[#07132B] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-44 bg-gradient-to-l from-[#07132B] to-transparent z-10 pointer-events-none" />

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 26,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex items-center gap-10 sm:gap-20 lg:gap-28 w-max"
              >
                {[...patrocinadoresLogos, ...patrocinadoresLogos, ...patrocinadoresLogos, ...patrocinadoresLogos].map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center shrink-0 cursor-default group"
                  >
                    <img
                      src={logo.image}
                      alt={logo.alt}
                      className={`${logo.imgClass} object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none select-none`}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* CTA DA SEÇÃO PATROCINADORES */}
            <div className="mt-4 sm:mt-8 p-6 sm:p-10 lg:p-12 bg-[#0B1B3D]/85 border border-white/10 rounded-[20px] sm:rounded-[26px] max-w-5xl w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 sm:gap-8 backdrop-blur-md shadow-2xl text-left">
              <div className="flex-1">

                <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                  Sua marca associada a projetos de alto impacto.
                </h3>
                <p className="text-white/65 text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2 leading-relaxed max-w-xl">
                  Conecte sua empresa a palestras magnas, convenções corporativas, turnês e produções audiovisuais voltadas a tomadores de decisão e público executivo qualificado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-white text-[#07132B] hover:bg-[#FAF6EB] hover:scale-105 active:scale-95 font-bold text-xs uppercase tracking-[0.2em] rounded-[14px] transition-all duration-300 shadow-xl text-center w-full sm:w-auto group"
                >
                  <span>Seja um Patrocinador</span>
                  <span className="text-[#07132B] group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href={`mailto:${AKEDAH_EMAIL}?subject=Proposta%20de%20Patroc%C3%ADnio%20-%20Daniel%20Silva`}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-[14px] transition-all duration-300 text-center w-full sm:w-auto"
                >
                  <span>Proposta Comercial</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. REDES SOCIAIS — [ DISTRIBUIÇÃO // CANAIS OFICIAIS ] (PRANCHETA TELA CHEIA) */}
        {/* ========================================================================= */}
        <section 
          id="redes" 
          className="min-h-screen min-h-[100dvh] md:h-screen w-full flex flex-col justify-between items-center pt-20 sm:pt-16 pb-6 sm:pb-8 px-5 sm:px-10 lg:px-16 border-t border-[#07132B]/10 relative overflow-hidden bg-white snap-start snap-always"
        >
          <span id="distribuicao" className="sr-only" />
          {/* Glow sutil */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.04] blur-[140px] pointer-events-none" />

          {/* Conteúdo Central */}
          <div className="max-w-7xl w-full mx-auto relative z-10 flex-1 flex flex-col justify-center my-auto">
            {/* Header da Seção Centralizado e Destacado */}
            <div className="text-center mb-5 sm:mb-8 md:mb-10 max-w-4xl mx-auto">
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] font-black text-[#07132B] tracking-tight uppercase text-center leading-[1.08]">
                <span className="block">Acompanhe Daniel Silva</span>
                <span className="block">em todos os lugares.</span>
              </h2>
            </div>

            {/* Grid dos Cards Individuais de Redes Sociais no estilo da referência */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 w-full max-w-6xl mx-auto">
              {danielSocials.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#07132B] hover:bg-[#0B1E45] border border-[#07132B] hover:border-[#2563EB] rounded-[14px] p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/25 group text-left shadow-lg"
                >
                  {p.icon}
                  <div className="flex flex-col justify-center min-w-0">
                    <h3 className="font-display font-black text-sm sm:text-[15px] text-white tracking-wide uppercase leading-tight group-hover:text-white transition-colors">
                      {p.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-white/70 font-normal leading-tight mt-1 truncate group-hover:text-white/90 transition-colors">
                      {p.subtitle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Base Inferior da Página (Exclusiva no rodapé da seção Redes) */}
          <div className="w-full max-w-7xl mx-auto pt-4 sm:pt-6 pr-0 sm:pr-20 border-t border-[#07132B]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#07132B]/50 relative z-10 text-center sm:text-left select-none">
            <span>© 2026 DANIEL SILVA — TODOS OS DIREITOS RESERVADOS.</span>
            <span>ESTRATEGISTA DE NEGÓCIOS &amp; MENTOR EXECUTIVO</span>
          </div>
        </section>
      </main>

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton href={WHATSAPP_URL} tooltip="Falar com a assessoria de Daniel Silva" />
    </div>
  );
};

export default DanielSilva;
