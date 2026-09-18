import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imagemDaniel from "@/assets/imagem-daniel.png";
import { WHATSAPP_URL, AKEDAH_EMAIL } from "@/data/services";

// Agenda Pública - 12 Cards divididos em 3 blocos de 4 (design idêntico à referência, fundo branco)
const agenda12Cards = [
  // Bloco 1 (Cards 1 a 4)
  [
    {
      data: "18/09",
      horario: "19h30",
      titulo: "CONVENÇÃO B2B",
      categoria: "ESTRATÉGIA COMERCIAL",
      local: "São Paulo, SP • Palestra Magna",
      link: WHATSAPP_URL,
    },
    {
      data: "25/09",
      horario: "14h00",
      titulo: "IMERSÃO EXECUTIVA",
      categoria: "ESCALA & GOVERNANÇA",
      local: "Barueri, SP • Imersão C-Level",
      link: WHATSAPP_URL,
    },
    {
      data: "03/10",
      horario: "20h00",
      titulo: "FÓRUM LIDERANÇA",
      categoria: "NEGÓCIOS & PRINCÍPIOS",
      local: "Belo Horizonte, MG • Palestra",
      link: WHATSAPP_URL,
    },
    {
      data: "12/10",
      horario: "19h00",
      titulo: "NOITE DE LOUVOR",
      categoria: "PALAVRA & PROPÓSITO",
      local: "Curitiba, PR • Ministração",
      link: WHATSAPP_URL,
    },
  ],
  // Bloco 2 (Cards 5 a 8)
  [
    {
      data: "22/10",
      horario: "20h30",
      titulo: "PAINEL FÉ & IMPACTO",
      categoria: "ENCONTRO DE LÍDERES",
      local: "Rio de Janeiro, RJ • Painel Executivo",
      link: WHATSAPP_URL,
    },
    {
      data: "05/11",
      horario: "19h00",
      titulo: "SUMMIT C-LEVEL",
      categoria: "PLAYBOOKS & TRAÇÃO",
      local: "Florianópolis, SC • Keynote",
      link: WHATSAPP_URL,
    },
    {
      data: "14/11",
      horario: "15h00",
      titulo: "MASTERCLASS B2B",
      categoria: "VENDAS COMPLEXAS",
      local: "Brasília, DF • Masterclass",
      link: WHATSAPP_URL,
    },
    {
      data: "28/11",
      horario: "19h30",
      titulo: "CONGRESSO GESTÃO",
      categoria: "MARGEM & EXPANSÃO",
      local: "Campinas, SP • Congresso",
      link: WHATSAPP_URL,
    },
  ],
  // Bloco 3 (Cards 9 a 12)
  [
    {
      data: "08/12",
      horario: "20h00",
      titulo: "ADVISORY SUMMIT",
      categoria: "CONSELHO CONSULTIVO",
      local: "Porto Alegre, RS • Encontro Restrito",
      link: WHATSAPP_URL,
    },
    {
      data: "15/12",
      horario: "19h00",
      titulo: "CONFERÊNCIA ANUAL",
      categoria: "VISÃO DE FUTURO",
      local: "Goiânia, GO • Encerramento",
      link: WHATSAPP_URL,
    },
    {
      data: "18/01",
      horario: "14h30",
      titulo: "MENTORIA IMERSIVA",
      categoria: "TRAÇÃO COMERCIAL 2027",
      local: "São Paulo, SP • Workshop",
      link: WHATSAPP_URL,
    },
    {
      data: "26/01",
      horario: "20h00",
      titulo: "ARENA BUSINESS",
      categoria: "LIDERANÇA & MERCADO",
      local: "Recife, PE • Arena Executiva",
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
];

// 5 Logotipos fictícios de alta autoridade para a linha animada de Patrocinadores
const patrocinadoresLogos = [
  {
    nome: "NEXUS CAPITAL",
    segmento: "Investment & M&A",
    simbolo: (
      <svg className="w-5 h-5 text-[#E2BA7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    nome: "VORTEX VENTURES",
    segmento: "Enterprise Growth",
    simbolo: (
      <svg className="w-5 h-5 text-[#E2BA7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    nome: "AURA HOLDINGS",
    segmento: "Private Equity",
    simbolo: (
      <svg className="w-5 h-5 text-[#E2BA7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 22 22 22" />
        <line x1="7" y1="14" x2="17" y2="14" />
      </svg>
    ),
  },
  {
    nome: "LUMEN B2B",
    segmento: "Technology & Cloud",
    simbolo: (
      <svg className="w-5 h-5 text-[#E2BA7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    nome: "STRATA GROUP",
    segmento: "Corporate Advisory",
    simbolo: (
      <svg className="w-5 h-5 text-[#E2BA7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
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

const DanielSilva = () => {
  const [activeBlock, setActiveBlock] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % agenda12Cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

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
      <SEO
        title="Daniel Silva | Estratégia de Negócios, Mentorias & Posicionamento"
        description="Site oficial de Daniel Silva: palestras, agenda pública de eventos, empreendedorismo, fé, música e contato para contratações."
        url="https://estudioakedah.com/daniel-silva"
        schema={schema}
      />
      <Navbar isDanielSilvaPage={true} />

      <main className="relative z-10 overflow-hidden">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (MODELO IMAGEM 1)                                        */}
        {/* ========================================================================= */}
        <section className="relative min-h-[92vh] md:min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-transparent pt-28 pb-16">
          {/* Fundo com Imagem do Daniel Silva à direita e Degradê Azul Marinho vindo da esquerda */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Imagem do Daniel posicionada à direita */}
            <div className="absolute right-0 top-0 bottom-0 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 h-full flex items-center justify-end">
              <img 
                src={imagemDaniel} 
                alt="Daniel Silva" 
                className="w-full h-full object-cover object-[center_20%] md:object-cover md:object-[center_15%] opacity-85 md:opacity-95 filter contrast-105"
              />
            </div>

            {/* Degradê Azul Marinho vindo do lado esquerdo para destacar o texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] from-25% sm:from-35% md:from-45% via-[#07132B]/90 md:via-[#07132B]/70 via-65% to-transparent" />

            {/* Degradês verticais para mesclagem superior e inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent via-65% to-[#07132B]/60" />

            {/* Glow azul sutil */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-3xl pointer-events-none" />
          </div>

          <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex justify-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-left flex flex-col items-start"
            >
              {/* Badge Superior */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <span className="text-white/80 border border-white/20 px-4 py-1.5 rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.35em] font-mono font-bold bg-[#0B1B3D]/50 backdrop-blur-sm">
                  ESTRATÉGIA DE NEGÓCIOS • POSICIONAMENTO
                </span>
              </div>

              {/* Título Principal */}
              <h1 className="font-display text-[58px] sm:text-[80px] md:text-[104px] font-[900] leading-[0.88] tracking-[-0.04em] mb-8">
                <span className="block text-white">Daniel</span>
                <span className="text-white/80 italic font-normal block">Silva</span>
              </h1>

              {/* Descrição Editorial */}
              <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl text-left mb-10 font-normal">
                Construção de tração em marcas de alto valor e liderança executiva. Conectando princípios sólidos de fé, visão empreendedora e sensibilidade artística para transformar vidas e empresas.
              </p>

              {/* Botões de Ação do Hero */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#agenda"
                  className="bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-[14px] transition-all duration-300 shadow-xl"
                >
                  Conferir Agendas
                </a>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-white hover:bg-white hover:text-[#07132B] border border-white/30 font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-[14px] transition-all duration-300"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. AGENDA PÚBLICA — CARDS COM SLIDE & BLUR AUTOMÁTICO (FUNDO BRANCO)      */}
        {/* ========================================================================= */}
        <section
          id="agenda"
          className="w-full bg-white text-[#07132B] py-24 sm:py-28 relative overflow-hidden scroll-mt-20 border-t border-b border-[#07132B]/10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            
            {/* Header da Seção (Design Editorial com Fontes e Cores Oficiais: Branco, Azul Marinho e Dourado) */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#07132B]/10 gap-6 text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07132B] text-[#E2BA7A] text-[11px] font-mono font-bold uppercase tracking-[0.25em] mb-4 border border-[#E2BA7A]/20 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E2BA7A] animate-pulse" />
                  PROGRAMAÇÃO // 2026
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#07132B] tracking-tight uppercase leading-tight">
                  Próximas <span className="font-display italic font-normal text-[#07132B]/75">apresentações</span> confirmadas.
                </h2>
                <p className="text-[#07132B]/65 text-sm sm:text-base font-sans mt-3 max-w-2xl leading-relaxed">
                  Datas e horários das próximas palestras, imersões executivas e convenções. Acompanhe a agenda oficial ou agende sua data.
                </p>
              </div>

              {/* Indicadores de Paginação Interativos (Bloco 1, 2, 3) */}
              <div className="flex items-center gap-3 shrink-0">
                {agenda12Cards.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveBlock(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeBlock === idx
                        ? "w-8 bg-[#07132B] ring-2 ring-[#E2BA7A]/40"
                        : "w-2.5 bg-[#07132B]/20 hover:bg-[#07132B]/40"
                    }`}
                    aria-label={`Ir para bloco ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Container dos 4 Cards com Animação de Slide e Desfoque Simultâneo (mode="popLayout") */}
            <div className="relative min-h-[330px] sm:min-h-[300px] overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeBlock}
                  initial={{ x: 120, opacity: 0, filter: "blur(20px)" }}
                  animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ x: -120, opacity: 0, filter: "blur(20px)" }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
                >
                  {agenda12Cards[activeBlock].map((card, cardIdx) => (
                    <a
                      key={cardIdx}
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-[#07132B] hover:bg-[#0B1B3D] border border-white/10 hover:border-[#E2BA7A]/60 rounded-[22px] p-6 sm:p-7 flex flex-col justify-between text-left transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative"
                    >
                      {/* Topo do Card: Data Destaque em Dourado + Badge de Horário */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display font-black text-4xl sm:text-5xl text-[#E2BA7A] tracking-tight leading-none group-hover:scale-105 transition-transform duration-300">
                          {card.data}
                        </span>
                        <span className="font-mono text-xs font-bold text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/15 group-hover:border-[#E2BA7A]/40 transition-colors">
                          {card.horario}
                        </span>
                      </div>

                      {/* Corpo do Card: Título em Caixa Alta + Categoria Dourada */}
                      <div className="my-6">
                        <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight group-hover:text-[#E2BA7A] transition-colors mb-2">
                          {card.titulo}
                        </h3>
                        <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E2BA7A] block">
                          {card.categoria}
                        </span>
                        <p className="text-white/60 text-xs font-sans mt-2">
                          {card.local}
                        </p>
                      </div>

                      {/* Rodapé do Card: Chamada Direta com Dourado no Hover */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-white/70 group-hover:text-[#E2BA7A] transition-colors">
                        <span>GARANTIR VAGA</span>
                        <span className="group-hover:translate-x-1 transition-transform text-[#E2BA7A]">→</span>
                      </div>
                    </a>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Rodapé da Seção com Observação e Link */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#07132B]/10 text-xs font-mono text-[#07132B]/60">
              <span>Datas sujeitas a alteração. A confirmação de cada apresentação é realizada junto à assessoria executiva.</span>
              <a
                href="#contato"
                className="text-[#07132B] hover:text-[#0B1B3D] transition-colors font-bold flex items-center gap-1.5 group underline decoration-[#07132B]/30 hover:decoration-[#07132B] underline-offset-4"
              >
                <span>Solicitar data na sua cidade ou convenção</span>
                <span className="text-[#E2BA7A] group-hover:translate-x-1 transition-transform font-bold">→</span>
              </a>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. EMPREENDEDORISMO & ESTRATÉGIA COMERCIAL (MODELO IMAGEM 1)              */}
        {/* ========================================================================= */}
        <section id="empreendedorismo" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2 space-y-6 text-left">
              <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] block">
                Atuação &amp; Negócios
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Empreendedorismo &amp; <br />
                <span className="text-white/80 italic font-normal">Estratégia Comercial</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                Liderança e execução prática na construção de operações de alto valor. Desenvolvimento de processos de vendas previsíveis com foco em governança corporativa, margem comercial e autoridade no mercado.
              </p>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Atuação direta em conselhos consultivos, estruturação de playbooks de vendas complexas B2B e mentoria de alta performance para fundadores e executivos C-Level.
              </p>
              <div className="pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-[12px] transition-all duration-300 shadow-xl"
                >
                  Conhecer Metodologia →
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">B2B</span>
                <h4 className="text-white font-bold text-xl mb-2">Vendas Complexas</h4>
                <p className="text-white/50 text-sm leading-relaxed">Processos e cadências comerciais de alta conversão para negociações de grande porte.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Audiovisual</span>
                <h4 className="text-white font-bold text-xl mb-2">Autoridade em Vídeo</h4>
                <p className="text-white/50 text-sm leading-relaxed">Posicionamento estratégico através de produções audiovisuais cinematográficas.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Playbooks</span>
                <h4 className="text-white font-bold text-xl mb-2">Processos Comerciais</h4>
                <p className="text-white/50 text-sm leading-relaxed">Documentação e esteiras de vendas replicáveis para escalar operações.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Advisory</span>
                <h4 className="text-white font-bold text-xl mb-2">Conselho Estratégico</h4>
                <p className="text-white/50 text-sm leading-relaxed">Acompanhamento consultivo para diretores, fundadores e investidores.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. FÉ, PROPÓSITO & VALORES INEGOCIÁVEIS (MODELO IMAGEM 1)                  */}
        {/* ========================================================================= */}
        <section id="fe" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="bg-[#0B1B3D]/80 border border-white/10 rounded-[32px] p-8 sm:p-14 lg:p-16 text-left relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] block mb-4">
              Fundamentos de Vida e Liderança
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Fé, Propósito &amp; <br />
              <span className="text-white/80 italic font-normal">Valores Inegociáveis</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white/70 leading-relaxed text-base sm:text-lg mb-10">
              <p>
                A integridade e o temor a Deus são os pilares que sustentam toda trajetória de liderança autêntica. O verdadeiro sucesso empresarial só se sustenta quando alinhado a princípios éticos inegociáveis, generosidade ativa e compromisso moral irrestrito.
              </p>
              <p>
                Na vida pública e privada, princípios de honra, verdade e serviço ao próximo guiam cada decisão estratégica, gerando frutos duradouros tanto nos negócios quanto nas relações humanas.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
              {["Temor a Deus", "Família", "Integridade", "Visão de Futuro", "Mordomia Bíblica"].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono uppercase tracking-wider"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. A MÚSICA COMO EXPRESSÃO E ADORAÇÃO (MODELO IMAGEM 1)                    */}
        {/* ========================================================================= */}
        <section id="musica" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="lg:w-1/2 space-y-6 text-left">
              <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] block">
                Sensibilidade Artística &amp; Adoração
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                A Música como <br />
                <span className="text-white/80 italic font-normal">Expressão e Adoração</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                A paixão pela música sempre esteve presente na vida de Daniel Silva, trazendo sensibilidade harmônica, precisão estética e conexão emocional profunda em tudo o que realiza.
              </p>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Da composição à produção sonora no Estúdio Akedah, a música representa momentos de inspiração, louvor e entrega, unindo arte de alto nível e atmosfera inspiradora.
              </p>
              <div className="pt-4">
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-[12px] transition-all duration-300 shadow-xl"
                >
                  Ouvir no Spotify ↗
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Composição</span>
                <h4 className="text-white font-bold text-xl mb-2">Harmonia &amp; Letra</h4>
                <p className="text-white/50 text-sm leading-relaxed">Criações que conectam sensibilidade espiritual e poética.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Produção</span>
                <h4 className="text-white font-bold text-xl mb-2">Gravação em Estúdio</h4>
                <p className="text-white/50 text-sm leading-relaxed">Captação acústica e masterização com tecnologia de ponta.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Ministração</span>
                <h4 className="text-white font-bold text-xl mb-2">Louvor e Presença</h4>
                <p className="text-white/50 text-sm leading-relaxed">Momentos de adoração e elevação espiritual autêntica.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Estética</span>
                <h4 className="text-white font-bold text-xl mb-2">Sonoplastia &amp; Som</h4>
                <p className="text-white/50 text-sm leading-relaxed">Trilhas sonoras e ambientação acústica cinematográfica.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. PATROCINADORES OFICIAIS (MODELO IMAGEM 1)                               */}
        {/* ========================================================================= */}
        <section id="patrocinadores" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-16">
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              Marcas &amp; Parcerias
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
              Patrocinadores <span className="text-white/80 italic font-normal">Oficiais</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
              Empresas e marcas visionárias que caminham junto ao ecossistema de alto valor e negócios de Daniel Silva.
            </p>
          </div>

          {/* Linha Animada Contínua de Logotipos (Marquee Infinito) */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Gradientes de fade nas bordas para transição suave */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#07132B] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#07132B] to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-6 sm:gap-8 w-max"
            >
              {[...patrocinadoresLogos, ...patrocinadoresLogos, ...patrocinadoresLogos, ...patrocinadoresLogos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-8 py-5 rounded-[20px] bg-[#0B1B3D]/70 border border-white/10 hover:border-[#E2BA7A]/50 transition-all shrink-0 group cursor-default shadow-lg backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#E2BA7A]/10 transition-all">
                    {logo.simbolo}
                  </div>
                  <div className="text-left">
                    <span className="font-display font-black text-base sm:text-lg text-white tracking-wider block group-hover:text-[#E2BA7A] transition-colors leading-tight">
                      {logo.nome}
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 block mt-0.5">
                      {logo.segmento}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. REDES SOCIAIS — RÉGUA DE DISTRIBUIÇÃO OFICIAL (#redes)                 */}
        {/* ========================================================================= */}
        <section id="redes" className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/10 relative scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4 text-left">
            <div>
              <span className="text-[#E2BA7A] text-[11px] font-mono font-medium uppercase tracking-[0.25em] mb-2 block">
                [ DISTRIBUIÇÃO // CANAIS OFICIAIS ]
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                Acompanhe Daniel Silva em todos os lugares.
              </h2>
            </div>
          </div>

          {/* Grid Minimalista 4 Colunas com Cantos Retos e Cores Oficiais no Hover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 bg-[#0B1B3D]/70 divide-y sm:divide-y-0 sm:divide-x divide-white/10 rounded-none">
            {danielSocials.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 flex flex-col justify-between hover:bg-white/[0.04] transition-colors group rounded-none"
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
                  <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#FAF6EB] transition-colors">
                    {p.name}
                  </h3>
                  <span className="font-mono text-[10px] tracking-wider text-white/50 uppercase block mt-1">
                    {p.format}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. CTA DE FECHAMENTO — "CONVIDE DANIEL" (EXATAMENTE COMO NA IMAGEM 3)      */}
        {/* ========================================================================= */}
        <section id="contato" className="py-24 sm:py-32 px-6 sm:px-12 bg-[#F4F2EB] text-[#111111] relative scroll-mt-20">
          <div className="max-w-6xl mx-auto text-left">
            {/* Tag / Eyebrow */}
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#555555] mb-6 block">
              CONEXÃO OFICIAL &amp; ASSESSORIA
            </span>

            {/* Título Monumental Gigante */}
            <h2 className="font-black text-6xl sm:text-8xl md:text-9xl uppercase tracking-tight leading-[0.88] text-[#111111] mb-8 font-display">
              CONVIDE <br />
              DANIEL
            </h2>

            {/* Subtítulo explicativo */}
            <p className="text-[#333333] text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 font-normal">
              Palestras, convenções corporativas, mentorias executivas de negócios ou ministrações musicais. Fale diretamente com a equipe executiva.
            </p>

            {/* Botões da Imagem 3 */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#111111] hover:bg-[#222222] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-none border border-[#111111] transition-colors text-center shadow-lg"
              >
                WHATSAPP OFICIAL
              </a>
              <a
                href={`mailto:${AKEDAH_EMAIL}`}
                className="px-8 py-4 bg-transparent hover:bg-[#111111] hover:text-white text-[#111111] font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-none border border-[#111111] transition-colors text-center"
              >
                ENVIAR E-MAIL
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 8. RODAPÉ COM FUNDO AZUL MARINHO E LOGO DANIEL SILVA */}
      <Footer isDanielSilvaPage={true} />
    </div>
  );
};

export default DanielSilva;
