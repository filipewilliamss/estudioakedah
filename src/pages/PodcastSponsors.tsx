import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Sparkles, Building2, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import PodcastAtmosphere from "@/components/podcast/PodcastAtmosphere";
import { WHATSAPP_URL } from "@/data/services";

// 5 Logotipos Oficiais
import logoConstrumar from "@/assets/construmar-logo.png";
import logoTeamluisa from "@/assets/teamluisa-logo.png";
import logoFecar from "@/assets/patrocinadores/logo-fecar.png";
import logoTabernaculo from "@/assets/patrocinadores/logo-tabernaculo.png";
import logoTemplo from "@/assets/templo-logo.png";

interface SponsorBoard {
  id: string;
  number: string;
  name: string;
  nameHighlight: string;
  category: string;
  tier: string;
  tagline: string;
  description: string;
  logo: string;
  logoAlt: string;
  logoClass: string;
  logoBgGlow: string;
  websiteUrl: string;
  actionText: string;
  orientation: "logo-right" | "logo-left"; // Intercalado
}

const sponsorsData: SponsorBoard[] = [
  {
    id: "construmar",
    number: "01",
    name: "CONSTRUMAR",
    nameHighlight: "Engenharia",
    category: "Engenharia Civil & Infraestrutura",
    tier: "COTA MASTER",
    tagline: "SOLUÇÕES CONSTRUTIVAS DE ALTA PRECISÃO & GRANDES OBRAS",
    description:
      "Referência no setor de construção civil e infraestrutura corporativa, a Construmar combina tecnologia de ponta, sustentabilidade e rigor técnico absoluto. Uma aliada de peso na realização de grandes empreendimentos imobiliários e estruturais em âmbito regional e nacional.",
    logo: logoConstrumar,
    logoAlt: "Logo Construmar Engenharia",
    logoClass: "max-h-[85px] sm:max-h-[115px] md:max-h-[135px]",
    logoBgGlow: "rgba(196,85,10,0.24)",
    websiteUrl: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Construmar%20atrav%C3%A9s%20do%20Akedah%20Podcast`,
    actionText: "CONHECER A CONSTRUMAR",
    orientation: "logo-right", // 1: Logo à Direita, Descrição à Esquerda
  },
  {
    id: "team-luisa",
    number: "02",
    name: "TEAM",
    nameHighlight: "Luísa",
    category: "Saúde, Longevidade & Performance",
    tier: "COTA MASTER",
    tagline: "CONDICIONAMENTO INTEGRAL, DISCIPLINA & ALTO RENDIMENTO",
    description:
      "Especializada no desenvolvimento físico e mental de alto rendimento, a Team Luísa assessora líderes, empresários e atletas de elite. Metodologias integradas de treino personalizado, periodização inteligente e hábitos sustentáveis para máxima clareza, foco e vigor executivo.",
    logo: logoTeamluisa,
    logoAlt: "Logo Team Luísa",
    logoClass: "max-h-[85px] sm:max-h-[110px] md:max-h-[130px]",
    logoBgGlow: "rgba(217,119,6,0.22)",
    websiteUrl: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Team%20Lu%C3%ADsa%20atrav%C3%A9s%20do%20Akedah%20Podcast`,
    actionText: "CONHECER TEAM LUÍSA",
    orientation: "logo-left", // 2: Logo à Esquerda, Descrição à Direita
  },
  {
    id: "fecar",
    number: "03",
    name: "FE-CAR",
    nameHighlight: "Multimarcas",
    category: "Automotivo & Mobilidade Premium",
    tier: "COTA OFICIAL",
    tagline: "TRADIÇÃO, PROCEDÊNCIA & SEGURANÇA EM NEGÓCIOS AUTOMOTIVOS",
    description:
      "Com sólida credibilidade no segmento automotivo de luxo e utilitários, a FE-CAR Multimarcas entrega curadoria rigorosa de procedência, pós-venda exemplar e assessoria completa em compras corporativas e veículos de alto padrão para quem valoriza confiança e elegância.",
    logo: logoFecar,
    logoAlt: "Logo FE-CAR Multimarcas",
    logoClass: "max-h-[90px] sm:max-h-[120px] md:max-h-[140px]",
    logoBgGlow: "rgba(196,85,10,0.26)",
    websiteUrl: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20FE-CAR%20Multimarcas%20atrav%C3%A9s%20do%20Akedah%20Podcast`,
    actionText: "CONHECER A FE-CAR",
    orientation: "logo-right", // 3: Logo à Direita, Descrição à Esquerda
  },
  {
    id: "tabernaculo",
    number: "04",
    name: "TABERNÁCULO",
    nameHighlight: "da Trindade",
    category: "Propósito, Fé & Desenvolvimento Comunitário",
    tier: "COTA INSTITUCIONAL",
    tagline: "PRINCÍPIOS SÓLIDOS, FORMAÇÃO DE VALORES & TRANSFORMAÇÃO",
    description:
      "Fundamentada em princípios inegociáveis de fé, retidão e acolhimento familiar, a instituição lidera projetos humanitários de grande alcance, formação ética e iniciativas de impacto social contínuo que constroem futuros com esperança e dignidade.",
    logo: logoTabernaculo,
    logoAlt: "Logo Tabernáculo da Trindade",
    logoClass: "max-h-[90px] sm:max-h-[125px] md:max-h-[145px]",
    logoBgGlow: "rgba(217,119,6,0.22)",
    websiteUrl: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Tabern%C3%A1culo%20da%20Trindade`,
    actionText: "CONHECER A INSTITUIÇÃO",
    orientation: "logo-left", // 4: Logo à Esquerda, Descrição à Direita
  },
  {
    id: "templo",
    number: "05",
    name: "TEMPLO",
    nameHighlight: "Design & Espaços",
    category: "Arquitetura Corporativa & Experiência de Marca",
    tier: "COTA ESTRATÉGICA",
    tagline: "ARQUITETURA SENSORIAL, CONCEITO & ESPAÇOS MEMORÁVEIS",
    description:
      "Ateliê pioneiro em arquitetura corporativa e cenografia imersiva. Concebe espaços comerciais que traduzem a sofisticação e a autoridade de marcas líderes, aliando ergonomia de última geração, iluminação cênica e presença visual inconfundível.",
    logo: logoTemplo,
    logoAlt: "Logo Templo Design",
    logoClass: "max-h-[85px] sm:max-h-[115px] md:max-h-[135px]",
    logoBgGlow: "rgba(196,85,10,0.24)",
    websiteUrl: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Templo%20Design%20atrav%C3%A9s%20do%20Akedah%20Podcast`,
    actionText: "CONHECER O TEMPLO",
    orientation: "logo-right", // 5: Logo à Direita, Descrição à Esquerda
  },
];

const PodcastSponsors = () => {
  const [activeBoard, setActiveBoard] = useState(0);

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

  return (
    <div className="min-h-screen bg-[#0C0704] text-white selection:bg-[#C4550A] selection:text-white relative font-sans overflow-x-hidden">
      <SEO
        title="Patrocinadores Oficiais | Akedah Podcast"
        description="Conheça as marcas e empresas líderes que apoiam o Akedah Podcast. Parcerias estratégicas, autoridade corporativa e cotas de patrocínio."
        url="https://estudioakedah.com/podcast/patrocinadores"
      />

      <Navbar isPodcastPage={true} />

      {/* Atmosfera Moderna de Fundo: Granulação sutil, gradientes quentes */}
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
              aria-label={`Ir para ${sponsor.name}`}
            >
              <span className="absolute right-7 py-1 px-3 rounded-md bg-[#180F0A] border border-white/15 text-xs font-bebas-neue tracking-widest uppercase text-white/90 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg">
                {sponsor.number} — {sponsor.name}
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
              className="relative min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0C0704] border-b border-white/10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-28 md:py-0 md:snap-start md:snap-always"
            >
              {/* Layer 1: Ambient Backdrop & Dynamic Warm Spotlight */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Glow Central/Lateral Motivada */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-[650px] md:w-[850px] h-[500px] md:h-[650px] blur-[120px] transition-all duration-700 ${
                    isLogoRight
                      ? "right-[-10%] md:right-[5%]"
                      : "left-[-10%] md:left-[5%]"
                  }`}
                  style={{
                    background: `radial-gradient(circle at center, ${sponsor.logoBgGlow} 0%, rgba(196,85,10,0.04) 50%, transparent 75%)`,
                  }}
                />

                {/* Marca d'água monumental com Darken Jellybean em baixa opacidade */}
                <div
                  aria-hidden="true"
                  className={`absolute top-1/2 -translate-y-1/2 font-darken-jellybean text-[120px] sm:text-[180px] md:text-[260px] lg:text-[340px] font-normal text-white/[0.015] select-none uppercase tracking-tighter leading-none whitespace-nowrap pointer-events-none ${
                    isLogoRight ? "left-6 md:left-12" : "right-6 md:right-12"
                  }`}
                >
                  {sponsor.number}
                </div>

                {/* Grade de iluminação sutil estilo Hero */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0704] via-transparent to-[#0C0704]/40" />
              </div>

              {/* Layer 2: Conteúdo da Prancheta Intercalada (Grid de 2 Colunas) */}
              <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-14 lg:gap-16 xl:gap-20">
                
                {/* Bloco de Texto (Descrição da Empresa) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full lg:w-1/2 flex flex-col items-start text-left ${
                    isLogoRight ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Badge da Prancheta e Cota com Bebas Neue */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="px-3.5 py-1 rounded-full bg-[#C4550A]/15 border border-[#C4550A]/35 text-[#C4550A] font-bebas-neue text-xs sm:text-sm uppercase tracking-[0.2em]">
                      {sponsor.tier}
                    </span>
                    <span className="text-white/40 text-xs font-bebas-neue tracking-widest">•</span>
                    <span className="text-[#8A827D] font-bebas-neue text-xs sm:text-sm uppercase tracking-[0.18em]">
                      {sponsor.category}
                    </span>
                    <span className="hidden sm:inline text-white/40 text-xs font-bebas-neue tracking-widest">•</span>
                    <span className="hidden sm:inline text-white/40 font-bebas-neue text-xs uppercase tracking-widest">
                      PRANCHETA {sponsor.number} / 05
                    </span>
                  </div>

                  {/* Título Monumental da Marca com Darken Jellybean e Variação em Podcast */}
                  <h2 className="font-darken-jellybean text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal text-white uppercase tracking-tight leading-[0.94] mb-3">
                    {sponsor.name} <br />
                    <span className="font-podcast text-[#C4550A] capitalize text-[1.12em] font-normal">
                      {sponsor.nameHighlight}
                    </span>
                  </h2>

                  {/* Tagline / Posicionamento */}
                  <p className="font-bebas-neue text-base sm:text-lg md:text-xl text-[#FAF6EB] uppercase tracking-wider mb-5">
                    {sponsor.tagline}
                  </p>

                  {/* Breve Descrição de Quem é a Empresa em Bebas Neue Regular */}
                  <p className="font-bebas-neue font-normal text-white/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-9 tracking-wide">
                    {sponsor.description}
                  </p>

                  {/* Botões com os Quatro Cantos Arredondados do Daniel Silva */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                    <a
                      href={sponsor.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C4550A] hover:bg-[#b04b08] text-white font-bebas-neue text-base sm:text-lg uppercase tracking-[0.16em] rounded-[12px] sm:rounded-[14px] shadow-xl shadow-[#C4550A]/25 transition-all duration-300 group text-center"
                    >
                      <span>{sponsor.actionText}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20ser%20um%20patrocinador%20do%20Akedah%20Podcast`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white/90 hover:text-white font-bebas-neue text-base uppercase tracking-[0.15em] rounded-[12px] sm:rounded-[14px] transition-all duration-300 text-center"
                    >
                      <Sparkles className="w-4 h-4 text-[#C4550A]" />
                      <span>SEJA PATROCINADOR</span>
                    </a>
                  </div>
                </motion.div>

                {/* Bloco Visual do Logotipo (Prancheta Monumental de Destaque) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full lg:w-1/2 flex items-center justify-center ${
                    isLogoRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative w-full max-w-[540px] aspect-[16/11] sm:aspect-[16/10] rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-[#180F0A]/90 via-[#130B07]/85 to-[#0E0805]/95 border border-white/10 hover:border-[#C4550A]/50 transition-all duration-700 flex flex-col items-center justify-center p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden group">
                    
                    {/* Spotlight Interno de Fundo no Card */}
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-125 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${sponsor.logoBgGlow} 0%, rgba(196,85,10,0.03) 60%, transparent 80%)`,
                      }}
                    />

                    {/* Tag Superior no Card do Logo */}
                    <div className="absolute top-4 sm:top-6 left-6 right-6 flex items-center justify-between text-xs font-bebas-neue uppercase tracking-[0.2em] text-white/40 pointer-events-none border-b border-white/[0.06] pb-3">
                      <span className="flex items-center gap-1.5 text-[#C4550A]">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>EMPRESA PARCEIRA</span>
                      </span>
                      <span>EDIÇÃO 2026</span>
                    </div>

                    {/* Logotipo Centralizado de Alto Impacto */}
                    <div className="relative z-10 flex items-center justify-center w-full h-full py-6">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.logoAlt}
                        className={`${sponsor.logoClass} w-auto max-w-[85%] object-contain filter brightness-[1.05] contrast-[1.05] group-hover:scale-105 transition-all duration-500`}
                        loading="lazy"
                      />
                    </div>

                    {/* Rodapé Interno do Card */}
                    <div className="absolute bottom-4 sm:bottom-6 left-6 right-6 flex items-center justify-between text-xs font-bebas-neue uppercase tracking-[0.16em] text-white/40 pointer-events-none border-t border-white/[0.06] pt-3">
                      <span>PATROCINADOR OFICIAL</span>
                      <span className="text-[#C4550A] group-hover:translate-x-1 transition-transform">
                        {sponsor.number} // 05 →
                      </span>
                    </div>

                    {/* Brilho Sutil de Borda no Hover */}
                    <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] border border-[#C4550A]/0 group-hover:border-[#C4550A]/40 transition-colors duration-500 pointer-events-none" />
                  </div>
                </motion.div>

              </div>

              {/* Indicador de Próximo Patrocinador / Scroll no Rodapé da Prancheta */}
              {nextSponsor ? (
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
                  <a
                    href={`#${nextSponsor.id}`}
                    className="group flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors duration-300"
                    aria-label={`Rolar para próxima prancheta: ${nextSponsor.name}`}
                  >
                    <span className="text-[11px] sm:text-xs font-bebas-neue uppercase tracking-[0.2em] group-hover:text-[#C4550A] transition-colors">
                      PRÓXIMO PATROCINADOR ({nextSponsor.number})
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#C4550A] animate-bounce" />
                  </a>
                </div>
              ) : (
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
                  <a
                    href="#cta-final"
                    className="group flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors duration-300"
                  >
                    <span className="text-[11px] sm:text-xs font-bebas-neue uppercase tracking-[0.2em] group-hover:text-[#C4550A] transition-colors">
                      SEJA UM PATROCINADOR OFICIAL
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#C4550A] animate-bounce" />
                  </a>
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
          className="relative min-h-[100dvh] md:h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0C0704] border-b border-white/10 px-6 sm:px-10 lg:px-16 text-center md:snap-start md:snap-always"
        >
          {/* Spotlight Quente Motivada */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.18)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <span className="px-4 py-1.5 rounded-full bg-[#C4550A]/15 border border-[#C4550A]/35 text-[#C4550A] font-bebas-neue text-xs sm:text-sm uppercase tracking-[0.22em] mb-6">
              CONEXÃO COM QUEM DECIDE
            </span>

            <h2 className="font-darken-jellybean text-4xl sm:text-6xl md:text-7xl font-normal text-white uppercase tracking-tight leading-[0.95] mb-5">
              SUA MARCA NA MAIOR <br />
              <span className="font-podcast text-[#C4550A] capitalize text-[1.12em] font-normal">
                Mesa de Negócios
              </span>
            </h2>

            <p className="font-bebas-neue font-normal text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 tracking-wide">
              Associe o nome da sua empresa a um conteúdo de altíssimo valor percebido, com transmissão 4K, cortes virais em redes sociais e distribuição direta para diretores, investidores e tomadores de decisão.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20receber%20a%20proposta%20comercial%20de%20patroc%C3%ADnio%20do%20Akedah%20Podcast`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#C4550A] hover:bg-[#b04b08] text-white font-bebas-neue text-base sm:text-lg uppercase tracking-[0.18em] rounded-[12px] sm:rounded-[14px] shadow-2xl shadow-[#C4550A]/35 transition-all duration-300 group"
              >
                <span>FALAR COM DIRETORIA COMERCIAL</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm">↗</span>
              </a>

              <a
                href="/podcast/contato"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 text-white font-bebas-neue text-base sm:text-lg uppercase tracking-[0.16em] rounded-[12px] sm:rounded-[14px] transition-all duration-300"
              >
                <span>VER TODOS OS CANAIS</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default PodcastSponsors;
