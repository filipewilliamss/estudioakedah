import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import DanielSignaturePreloader from "@/components/daniel/DanielSignaturePreloader";
import WhatsAppButton from "@/components/WhatsAppButton";
import imagemDaniel from "@/assets/imagem-daniel.png";
import heroMan1 from "@/assets/hero-man-1.jpg";
import heroMan2 from "@/assets/hero-man-2.jpg";
import heroMan3 from "@/assets/hero-man-3.jpg";
import imgAdvisorySummit from "@/assets/agenda/advisory-summit.jpg";
import imgConferenciaAnual from "@/assets/agenda/conferencia-anual.jpg";
import imgMentoriaImersiva from "@/assets/agenda/mentoria-imersiva.jpg";
import imgArenaBusiness from "@/assets/agenda/arena-business.jpg";
import imgFundamentos from "@/assets/daniel/fundamentos-palestra.jpg";
import imgMusica from "@/assets/daniel/musica-violao.jpg";
import imgNegocios from "@/assets/daniel/negocios-atuacao.jpg";
import logoExsoil from "@/assets/patrocinadores/exsoil-white.png";
import logoGoose from "@/assets/patrocinadores/goose-white.png";
import logoQueenCrest from "@/assets/patrocinadores/queen_crest-white.png";
import logoTriuno from "@/assets/patrocinadores/triuno-white.png";
import logoKamchatka from "@/assets/patrocinadores/kamchatka-white.png";
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

// Redes Sociais do Daniel Silva (estilo distribuição editorial)
const danielSocials = [
  {
    name: "YOUTUBE",
    format: "PALESTRAS & CONTEÚDO",
    url: "https://www.youtube.com/@EstudioAkedah",
    icon: (
      <svg className="w-5 h-5 fill-current text-white/70 group-hover:text-[#FF0000] transition-colors duration-300" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "SPOTIFY",
    format: "PODCAST & MINISTRAÇÕES",
    url: "https://open.spotify.com",
    icon: (
      <svg className="w-5 h-5 fill-current text-white/70 group-hover:text-[#1ED760] transition-colors duration-300" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308a.747.747 0 0 1-1.028.248c-2.813-1.718-6.353-2.107-10.524-1.155a.75.75 0 0 1-.336-1.462c4.564-1.042 8.49-.602 11.64 1.341a.749.749 0 0 1 .248 1.028zm1.47-3.266a.936.936 0 0 1-1.287.308c-3.22-1.979-8.128-2.552-11.936-1.396a.937.937 0 0 1-.55-1.79c4.354-1.321 9.775-.683 13.465 1.591a.936.936 0 0 1 .308 1.287zm.126-3.41c-3.86-2.292-10.228-2.503-13.899-1.388a1.124 1.124 0 1 1-.652-2.152c4.225-1.282 11.26-1.033 15.717 1.613a1.124 1.124 0 1 1-1.166 1.927z" />
      </svg>
    ),
  },
  {
    name: "INSTAGRAM",
    format: "BASTIDORES & DIRETORIA",
    url: "https://www.instagram.com/estudioakedah",
    icon: (
      <div className="relative w-5 h-5">
        <svg className="w-5 h-5 fill-current text-white/70 group-hover:opacity-0 transition-opacity duration-300" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        <svg className="w-5 h-5 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="instaColorGradDaniel" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <path fill="url(#instaColorGradDaniel)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </div>
    ),
  },
  {
    name: "TIKTOK",
    format: "CORTES & INSIGHTS",
    url: "https://www.tiktok.com/@estudioakedah",
    icon: (
      <svg className="w-5 h-5 fill-current text-white/70 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.48V8.82a8.28 8.28 0 0 0 4.84 1.57v-3.7z" />
      </svg>
    ),
  },
  {
    name: "E-MAIL",
    format: "ASSESSORIA & NEGÓCIOS",
    url: `mailto:${AKEDAH_EMAIL}?subject=Contato%20Profissional%20-%20Daniel%20Silva`,
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current text-white/70 group-hover:text-[#E2BA7A] transition-colors duration-300" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

// 5 Logotipos em branco no fundo azul marinho para a linha animada de Patrocinadores (sem cards)
const patrocinadoresLogos = [
  {
    nome: "EXSOIL",
    image: logoExsoil,
    alt: "Logotipo Exsoil",
    imgClass: "h-[44px] sm:h-[48px] w-auto max-w-[160px]",
  },
  {
    nome: "GOOSE",
    image: logoGoose,
    alt: "Logotipo Goose",
    imgClass: "h-[34px] sm:h-[38px] w-auto max-w-[155px]",
  },
  {
    nome: "CROWN & LAUREL",
    image: logoQueenCrest,
    alt: "Logotipo Crown & Laurel",
    imgClass: "h-[50px] sm:h-[56px] w-auto max-w-[130px]",
  },
  {
    nome: "TRIUNO TECH STUDIO",
    image: logoTriuno,
    alt: "Logotipo Triuno Tech Studio",
    imgClass: "h-[38px] sm:h-[42px] w-auto max-w-[165px]",
  },
  {
    nome: "KAMCHATKA TRAVEL",
    image: logoKamchatka,
    alt: "Logotipo Kamchatka International Travel",
    imgClass: "h-[42px] sm:h-[46px] w-auto max-w-[170px]",
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
    badge: "ESTRATÉGIA DE NEGÓCIOS • POSICIONAMENTO",
    titleMain: "Daniel",
    titleSub: "Silva",
    descricao: "Construção de tração em marcas de alto valor e liderança executiva. Conectando princípios sólidos de fé, visão empreendedora e sensibilidade artística para transformar vidas e empresas.",
    btnPrimary: { text: "Conferir Agendas", href: "#agenda" },
    btnSecondary: { text: "Falar no WhatsApp", href: WHATSAPP_URL, external: true },
    image: imagemDaniel,
    alt: "Daniel Silva",
    imgPos: "object-[center_20%] md:object-[center_15%]",
  },
  {
    id: 2,
    badge: "GOVERNANÇA • ADVISORY C-LEVEL",
    titleMain: "Gestão",
    titleSub: "Executiva",
    descricao: "Mentoria intensiva para consolidação de conselhos consultivos, estruturação de canais comerciais previsíveis e liderança estratégica de alta performance.",
    btnPrimary: { text: "Conhecer Métodos", href: "#empreendedorismo" },
    btnSecondary: { text: "Falar no WhatsApp", href: WHATSAPP_URL, external: true },
    image: heroMan1,
    alt: "Gestão Executiva & Advisory",
    imgPos: "object-[center_20%]",
  },
  {
    id: 3,
    badge: "KEYNOTES • CONVENÇÕES CORPORATIVAS",
    titleMain: "Impacto &",
    titleSub: "Propósito",
    descricao: "Palestras transformadoras que unem visão de negócios, inteligência executiva e princípios práticos para inspirar convenções corporativas e acelerar equipes.",
    btnPrimary: { text: "Ver Programação", href: "#agenda" },
    btnSecondary: { text: "Falar no WhatsApp", href: WHATSAPP_URL, external: true },
    image: heroMan2,
    alt: "Impacto & Propósito",
    imgPos: "object-[center_15%]",
  },
  {
    id: 4,
    badge: "ESCALA B2B • TRAÇÃO DE RECEITA",
    titleMain: "Expansão de",
    titleSub: "Mercado",
    descricao: "Desenvolvimento de cultura comercial orientada a margem, playbooks de vendas complexas e posicionamento de marcas de alto valor no mercado nacional.",
    btnPrimary: { text: "Agendar Reunião", href: WHATSAPP_URL, external: true },
    btnSecondary: { text: "Falar no WhatsApp", href: WHATSAPP_URL, external: true },
    image: heroMan3,
    alt: "Expansão de Mercado",
    imgPos: "object-[center_20%]",
  },
];

// Animação de slide saindo para esquerda e novo entrando pela direita
const heroSlideVariants = {
  enter: {
    x: 100,
    opacity: 0,
    filter: "blur(14px)",
  },
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    x: -100,
    opacity: 0,
    filter: "blur(14px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const DanielSilva = () => {
  const [heroSlide, setHeroSlide] = useState(0);
  const isHoveredHeroRef = useRef(false);
  const [[activeBlock, direction], setPage] = useState([0, 1]);
  const isHoveredCardRef = useRef(false);

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

  // Timer de rotação automática dos cards da Hero (a cada 5 segundos)
  useEffect(() => {
    const heroTimer = setInterval(() => {
      if (!isHoveredHeroRef.current) {
        setHeroSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 5000);
    return () => clearInterval(heroTimer);
  }, []);

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
          <AnimatePresence mode="wait">
            <motion.div
              key={heroSlide}
              variants={heroSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative min-h-screen min-h-[100dvh] md:h-screen w-full flex items-center overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12"
            >
              {/* Fundo com Imagem à direita e Degradê Azul Marinho vindo da esquerda */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Imagem posicionada à direita */}
                <div className="absolute right-0 top-0 bottom-0 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 h-full flex items-center justify-end">
                  <img 
                    src={heroSlides[heroSlide].image} 
                    alt={heroSlides[heroSlide].alt} 
                    className={`w-full h-full object-cover ${heroSlides[heroSlide].imgPos} opacity-85 md:opacity-95 filter contrast-105`}
                  />
                </div>

                {/* Degradê Azul Marinho vindo do lado esquerdo para destacar o texto */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] from-25% sm:from-35% md:from-45% via-[#07132B]/90 md:via-[#07132B]/70 via-65% to-transparent" />

                {/* Degradês verticais para mesclagem superior e inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent via-65% to-[#07132B]/60" />

                {/* Glow azul sutil */}
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-3xl pointer-events-none" />
              </div>

              {/* Conteúdo do Card (Texto à esquerda) */}
              <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex justify-start">
                <div className="max-w-3xl text-left flex flex-col items-start">
                  {/* Badge Superior */}
                  <div className="flex items-center justify-start gap-4 mb-4 sm:mb-6">
                    <span className="text-white/80 border border-white/20 px-4 py-1.5 rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.35em] font-mono font-bold bg-[#0B1B3D]/50 backdrop-blur-sm">
                      {heroSlides[heroSlide].badge}
                    </span>
                  </div>

                  {/* Título Principal */}
                  <h1 className="font-display text-[52px] sm:text-[76px] md:text-[96px] font-[900] leading-[0.88] tracking-[-0.04em] mb-6 sm:mb-8">
                    <span className="block text-white">{heroSlides[heroSlide].titleMain}</span>
                    <span className="text-white/80 italic font-normal block">{heroSlides[heroSlide].titleSub}</span>
                  </h1>

                  {/* Descrição Editorial */}
                  <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-left mb-8 sm:mb-10 font-normal">
                    {heroSlides[heroSlide].descricao}
                  </p>

                  {/* Botões de Ação do Hero */}
                  <div className="flex flex-wrap gap-4 items-center mb-6 sm:mb-8">
                    <a
                      href={heroSlides[heroSlide].btnPrimary.href}
                      className="bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-8 sm:px-10 py-3.5 sm:py-4 rounded-[14px] transition-all duration-300 shadow-xl"
                    >
                      {heroSlides[heroSlide].btnPrimary.text}
                    </a>
                    <a 
                      href={heroSlides[heroSlide].btnSecondary.href}
                      target={heroSlides[heroSlide].btnSecondary.external ? "_blank" : undefined}
                      rel={heroSlides[heroSlide].btnSecondary.external ? "noopener noreferrer" : undefined}
                      className="bg-transparent text-white hover:bg-white hover:text-[#07132B] border border-white/30 font-bold text-xs uppercase tracking-[0.2em] px-8 sm:px-10 py-3.5 sm:py-4 rounded-[14px] transition-all duration-300"
                    >
                      {heroSlides[heroSlide].btnSecondary.text}
                    </a>
                  </div>

                  {/* Indicadores de Paginação do Carousel (4 Cards) */}
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
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ========================================================================= */}
        {/* 2. AGENDA PÚBLICA (PRANCHETA TELA CHEIA)                                   */}
        {/* ========================================================================= */}
        <section
          id="agenda"
          className="w-full min-h-screen min-h-[100dvh] md:h-screen flex flex-col justify-center bg-white text-[#07132B] relative overflow-hidden select-none snap-start snap-always border-b border-[#07132B]/10"
        >
          {/* Área Principal da Agenda */}
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col justify-center pt-24 pb-8 sm:py-10 lg:py-12">
            
            {/* Header da Seção: Alinhado à esquerda com Controles à direita (idêntico à referência) */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 w-full">
              <div className="flex flex-col items-start text-left max-w-2xl">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#07132B] text-white text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] mb-3 shadow-sm">
                  AGENDA
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#07132B] tracking-tight uppercase leading-[1.04]">
                  PRÓXIMAS APRESENTAÇÕES.
                </h2>
                <p className="text-[#07132B]/75 text-xs sm:text-sm md:text-base font-sans mt-2.5 max-w-xl leading-relaxed">
                  Palestras, conferências, mentorias e experiências que unem conhecimento, prática e inspiração.
                </p>
              </div>

              {/* Controles do Topo Direito: Link Ver Toda a Agenda + Indicadores + Setas < > */}
              <div className="flex items-center gap-4 sm:gap-6 self-start md:self-end">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-[13px] font-bold text-[#07132B] hover:text-[#B38338] uppercase tracking-[0.16em] flex items-center gap-1.5 transition-colors group"
                >
                  <span>VER TODA A AGENDA</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>

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

            {/* Container dos 4 Cards com Animação (Layout fiel à proposta) */}
            <div className="relative min-h-[380px] sm:min-h-[410px] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={activeBlock}
                  custom={direction}
                  variants={agendaVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full"
                >
                  {agenda12Cards[activeBlock].map((card, cardIdx) => (
                    <a
                      key={cardIdx}
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => { isHoveredCardRef.current = true; }}
                      onMouseLeave={() => { isHoveredCardRef.current = false; }}
                      className="group bg-[#07132B] hover:bg-[#0B1B3D] border border-white/10 hover:border-[#E2BA7A]/50 rounded-[22px] overflow-hidden min-h-[370px] sm:min-h-[400px] flex flex-col justify-between text-left transition-all duration-300 shadow-xl hover:-translate-y-1.5 hover:shadow-2xl relative"
                    >
                      {/* Topo do Card: Data à Esquerda + Imagem com blend à Direita */}
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

                        {/* Imagem do Evento no Topo-Direito com efeito de transição/blend */}
                        <div className="absolute top-0 right-0 w-[58%] h-full overflow-hidden pointer-events-none">
                          <img
                            src={card.imagem}
                            alt={card.titulo}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Gradientes para fusão impecável no fundo escuro */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-[#07132B]/40 to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-transparent" />
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

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FUNDAMENTOS DE VIDA E LIDERANÇA (PRANCHETA TELA CHEIA)                 */}
        {/* ========================================================================= */}
        <section 
          id="fundamentos" 
          className="min-h-screen min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-t border-white/[0.08] relative overflow-hidden bg-[#07132B] snap-start snap-always"
        >
          <span id="fe" className="sr-only" />
          {/* Glow sutil */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[130px] pointer-events-none" />

          <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Bloco de Texto e Informações à Esquerda */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#E2BA7A] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2BA7A]" />
                FUNDAMENTOS DA VIDA E LIDERANÇA
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight uppercase leading-[1.05] mb-5">
                Fé, Propósito &amp; <span className="font-display italic font-normal text-white/80 lowercase">Valores Inegociáveis.</span>
              </h2>

              <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 font-sans">
                Acredito que resultados sustentáveis nascem de princípios sólidos. Minha atuação é guiada por fé, disciplina, integridade e um olhar genuíno para o desenvolvimento de pessoas.
              </p>

              <p className="text-white/65 text-xs sm:text-sm lg:text-base leading-relaxed mb-8 font-sans">
                A integridade e o temor a Deus são os pilares que sustentam toda trajetória de liderança autêntica. O verdadeiro sucesso só se sustenta quando alinhado a princípios inegociáveis e compromisso moral irrestrito.
              </p>

              {/* Linha de Tags / Princípios (conforme proposta da referência) */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-6 border-t border-white/10 w-full">
                {["FÉ", "FAMÍLIA", "DISCIPLINA", "VISÃO DE FUTURO", "IMPACTO SOCIAL"].map((item) => (
                  <span
                    key={item}
                    className="px-4 sm:px-5 py-2 rounded-full bg-white/5 border border-white/15 text-white/90 hover:border-[#E2BA7A]/60 hover:text-[#E2BA7A] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 select-none shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Imagem Temática à Direita */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] sm:aspect-[3/4] rounded-[28px] overflow-hidden border border-white/15 shadow-2xl group">
                <img
                  src={imgFundamentos}
                  alt="Daniel Silva - Fundamentos de Vida e Liderança"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07132B]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#07132B]/80 backdrop-blur-md border border-white/10 text-left">
                  <span className="font-mono text-[10px] text-[#E2BA7A] uppercase tracking-widest block font-bold">PROPÓSITO &amp; PRINCÍPIOS</span>
                  <span className="font-display text-white text-base font-black uppercase tracking-tight block">Liderança com Fundamentos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SENSIBILIDADE ARTÍSTICA & ADORAÇÃO / A MÚSICA COMO (PRANCHETA TELA CHEIA) */}
        {/* ========================================================================= */}
        <section 
          id="musica" 
          className="min-h-screen min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-t border-white/[0.08] relative overflow-hidden bg-[#07132B] snap-start snap-always"
        >
          {/* Glow sutil */}
          <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[650px] h-[500px] bg-blue-600/10 blur-[130px] pointer-events-none" />

          <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Imagem Temática à Esquerda (conforme layout da referência) */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] sm:aspect-[3/4] rounded-[28px] overflow-hidden border border-white/15 shadow-2xl group">
                <img
                  src={imgMusica}
                  alt="Daniel Silva - Expressão Musical e Adoração"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07132B]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#07132B]/80 backdrop-blur-md border border-white/10 text-left">
                  <span className="font-mono text-[10px] text-[#E2BA7A] uppercase tracking-widest block font-bold">SENSIBILIDADE &amp; ARTE</span>
                  <span className="font-display text-white text-base font-black uppercase tracking-tight block">Música como Expressão e Louvor</span>
                </div>
              </div>
            </div>

            {/* Bloco de Texto e Informações à Direita */}
            <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#E2BA7A] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2BA7A]" />
                SENSIBILIDADE ARTÍSTICA E ADORAÇÃO
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight uppercase leading-[1.05] mb-5">
                A Música como <span className="font-display italic font-normal text-white/80 lowercase">Expressão e Adoração.</span>
              </h2>

              <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 font-sans">
                A música sempre fez parte da minha história. É uma forma de expressar minha fé, de me conectar com pessoas e de levar mensagens que inspiram e transformam.
              </p>

              <p className="text-white/65 text-xs sm:text-sm lg:text-base leading-relaxed mb-7 font-sans">
                A harmonia musical traz precisão estética, sensibilidade poética e conexão espiritual autêntica em tudo o que realizo. A arte como instrumento vivo de elevação e edificação.
              </p>

              {/* Botão de Ação Estilo Dourado (conforme referência) + Pilares */}
              <div className="pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F5D08A] to-[#D4A359] hover:from-[#F8D99D] hover:to-[#DEAF6A] text-[#07132B] font-mono font-bold text-xs sm:text-[13px] uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg hover:shadow-[0_10px_25px_rgba(226,186,122,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.216.353-.674.468-1.027.252-2.812-1.718-6.352-2.108-10.523-1.155-.403.092-.809-.16-.901-.564-.092-.403.16-.809.564-.901 4.568-1.044 8.487-.6 11.635 1.341.353.216.468.674.252 1.027zm1.468-3.264c-.272.443-.852.585-1.295.313-3.219-1.978-8.127-2.55-11.936-1.393-.499.151-1.026-.135-1.177-.633-.151-.498.135-1.026.633-1.177 4.356-1.321 9.771-.684 13.462 1.595.443.272.585.852.313 1.295zm.126-3.407C15.239 8.358 8.88 8.148 5.169 9.275c-.59.18-1.218-.153-1.397-.743-.18-.59.153-1.218.743-1.397 4.267-1.295 11.3-1.053 15.74 1.583.53.315.706 1.004.391 1.534-.315.53-1.004.706-1.534.391z" />
                  </svg>
                  <span>OUÇA NO SPOTIFY</span>
                  <span className="group-hover:translate-x-1 transition-transform font-bold">→</span>
                </a>

                {/* Pilares Musicais em Linha */}
                <div className="flex flex-wrap gap-2 text-white/50 font-mono text-[11px] uppercase tracking-wider">
                  <span>Harmonia</span> • 
                  <span>Gravação</span> • 
                  <span>Louvor</span> • 
                  <span>Composição</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. ATUAÇÃO & NEGÓCIOS (PRANCHETA TELA CHEIA)                               */}
        {/* ========================================================================= */}
        <section 
          id="negocios" 
          className="min-h-screen min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-t border-white/[0.08] relative overflow-hidden bg-[#07132B] snap-start snap-always"
        >
          <span id="empreendedorismo" className="sr-only" />
          {/* Glow sutil */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[500px] bg-blue-600/10 blur-[130px] pointer-events-none" />

          <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Bloco de Texto e Informações à Esquerda */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#E2BA7A] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2BA7A]" />
                ÁREAS DE ATUAÇÃO
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight uppercase leading-[1.05] mb-5">
                Empreendedorismo &amp; <span className="font-display italic font-normal text-white/80 lowercase">Estratégia Comercial.</span>
              </h2>

              <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 font-sans">
                Liderança e execução na prática. Contribuo para o desenvolvimento de negócios e pessoas por meio de palestras, consultorias e experiências que conectam estratégia, execução e propósito.
              </p>

              <p className="text-white/65 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 font-sans">
                Estruturação de operações comerciais de alta margem, governança corporativa para conselhos consultivos e processos de vendas previsíveis para empresas em tração.
              </p>

              {/* Pilares Estratégicos (da referência sem os cards quadrados) */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 w-full">
                {[
                  "Vendas Complexas",
                  "Autoridade em Vídeo",
                  "Processos Comerciais",
                  "Conselho Estratégico",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white/90 text-xs font-mono font-bold uppercase tracking-wider hover:border-[#E2BA7A]/50 hover:text-[#E2BA7A] transition-all select-none shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Botão de Ação Estilo Dourado (conforme referência) */}
              <div className="pt-6 border-t border-white/10 w-full">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F5D08A] to-[#D4A359] hover:from-[#F8D99D] hover:to-[#DEAF6A] text-[#07132B] font-mono font-bold text-xs sm:text-[13px] uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg hover:shadow-[0_10px_25px_rgba(226,186,122,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 group"
                >
                  <span>CONHEÇA MINHA METODOLOGIA</span>
                  <span className="group-hover:translate-x-1 transition-transform font-bold">→</span>
                </a>
              </div>
            </div>

            {/* Imagem Temática à Direita */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] sm:aspect-[3/4] rounded-[28px] overflow-hidden border border-white/15 shadow-2xl group">
                <img
                  src={imgNegocios}
                  alt="Daniel Silva - Empreendedorismo & Estratégia Comercial"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07132B]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#07132B]/80 backdrop-blur-md border border-white/10 text-left">
                  <span className="font-mono text-[10px] text-[#E2BA7A] uppercase tracking-widest block font-bold">GOVERNANÇA &amp; MERCADO</span>
                  <span className="font-display text-white text-base font-black uppercase tracking-tight block">Estratégia Comercial B2B</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. PATROCINADORES OFICIAIS (PRANCHETA TELA CHEIA COM LOOP & CTA)          */}
        {/* ========================================================================= */}
        <section 
          id="patrocinadores" 
          className="min-h-screen min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center py-10 sm:py-14 px-6 sm:px-10 lg:px-16 border-t border-white/10 relative overflow-hidden bg-[#07132B] snap-start snap-always"
        >
          {/* Glow sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-blue-600/10 blur-[140px] pointer-events-none" />

          <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
            {/* Header da Seção Centralizado e Destacado */}
            <div className="mb-6 sm:mb-8 max-w-3xl mx-auto">
              <span className="text-[#E2BA7A] text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.35em] mb-3 inline-block">
                MARCAS &amp; PARCERIAS // ECOSSISTEMA
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
                Patrocinadores <span className="font-display italic font-normal text-white/80 lowercase">Oficiais</span>
              </h2>
              <p className="text-white/70 text-sm sm:text-base md:text-lg font-sans mt-2.5 max-w-2xl mx-auto leading-relaxed">
                Empresas e marcas visionárias que caminham junto ao ecossistema de alto valor, eventos corporativos e negócios de Daniel Silva.
              </p>
            </div>

            {/* Linha Animada Contínua de Logotipos (Marquee Infinito em Loop) */}
            <div className="relative w-full overflow-hidden py-8 sm:py-10 my-2">
              {/* Gradientes de fade nas bordas para transição suave */}
              <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#07132B] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#07132B] to-transparent z-10 pointer-events-none" />

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 26,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex items-center gap-16 sm:gap-24 lg:gap-28 w-max"
              >
                {[...patrocinadoresLogos, ...patrocinadoresLogos, ...patrocinadoresLogos, ...patrocinadoresLogos].map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center shrink-0 cursor-default group"
                  >
                    <img
                      src={logo.image}
                      alt={logo.alt}
                      className={`${logo.imgClass} object-contain opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none select-none`}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* CTA DA SEÇÃO PATROCINADORES (+15% Tamanho para preencher a viewport) */}
            <div className="mt-6 sm:mt-8 p-7 sm:p-10 lg:p-12 bg-[#0B1B3D]/85 border border-white/10 rounded-[26px] max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md shadow-2xl text-left">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E2BA7A] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] mb-2.5 border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E2BA7A] animate-pulse" />
                  OPORTUNIDADE COMERCIAL // BRAND EQUITY
                </div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                  Sua marca associada a projetos de alto impacto.
                </h3>
                <p className="text-white/65 text-xs sm:text-sm md:text-base mt-2 leading-relaxed max-w-xl">
                  Conecte sua empresa a palestras magnas, convenções corporativas, turnês e produções audiovisuais voltadas a tomadores de decisão e público executivo qualificado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full md:w-auto">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#07132B] hover:bg-[#FAF6EB] hover:scale-105 active:scale-95 font-bold text-xs uppercase tracking-[0.22em] rounded-[14px] transition-all duration-300 shadow-xl text-center group"
                >
                  <span>Seja um Patrocinador</span>
                  <span className="text-[#07132B] group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href={`mailto:${AKEDAH_EMAIL}?subject=Proposta%20de%20Patroc%C3%ADnio%20-%20Daniel%20Silva`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 text-white font-bold text-xs uppercase tracking-[0.22em] rounded-[14px] transition-all duration-300 text-center"
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
          className="min-h-screen min-h-[100dvh] md:h-screen w-full flex flex-col justify-between items-center pt-14 sm:pt-16 pb-8 px-6 sm:px-10 lg:px-16 border-t border-white/10 relative overflow-hidden bg-[#07132B] snap-start snap-always"
        >
          <span id="distribuicao" className="sr-only" />
          {/* Glow sutil */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none" />

          {/* Conteúdo Central */}
          <div className="max-w-7xl w-full mx-auto relative z-10 flex-1 flex flex-col justify-center my-auto">
            {/* Header da Seção Centralizado e Destacado */}
            <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
              <span className="text-[#E2BA7A] text-xs sm:text-sm font-mono font-medium uppercase tracking-[0.35em] mb-3 block text-center">
                [ DISTRIBUIÇÃO // CANAIS OFICIAIS ]
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase text-center leading-[1.08]">
                Acompanhe Daniel Silva em todos os lugares.
              </h2>
            </div>

            {/* Grid Minimalista 5 Colunas (+15% Tamanho para preencher a viewport) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-white/10 bg-[#0B1B3D]/70 divide-y sm:divide-y-0 sm:divide-x divide-white/10 rounded-none shadow-2xl backdrop-blur-sm">
              {danielSocials.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 sm:p-7 lg:p-7 xl:p-8 min-h-[210px] sm:min-h-[230px] flex flex-col justify-between hover:bg-white/[0.04] transition-colors group rounded-none"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="scale-110 origin-left">
                      {p.icon}
                    </div>
                    <span className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm font-mono">
                      ↗
                    </span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-2xl sm:text-2xl lg:text-[25px] xl:text-3xl font-black text-white uppercase tracking-tight group-hover:text-[#FAF6EB] transition-colors">
                      {p.name}
                    </h3>
                    <span className="font-mono text-xs sm:text-[11px] xl:text-[13px] tracking-wider text-white/50 uppercase block mt-1.5 leading-snug">
                      {p.format}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Base Inferior da Página (Exclusiva no rodapé da seção Redes) */}
          <div className="w-full max-w-7xl mx-auto pt-6 sm:pt-8 pr-0 sm:pr-20 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white/40 relative z-10 text-center sm:text-left select-none">
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
