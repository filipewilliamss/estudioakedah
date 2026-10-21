import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import PodcastAtmosphere from "@/components/podcast/PodcastAtmosphere";
import { WHATSAPP_URL } from "@/data/services";

// Imagens de fundo temáticas com estética de alto impacto
import imgConstrumar from "@/assets/construmar-pagina-2.webp";
import imgTeamluisa from "@/assets/teamluisa-pagina-2.webp";
import imgFecar from "@/assets/podcast/hero-podcast-patrocinador.jpg";
import imgTabernaculo from "@/assets/tabernaculo-pagina-2.webp";
import imgTemplo from "@/assets/akedah-podcast-studio.jpg";

// 5 Logotipos Oficiais
import logoConstrumar from "@/assets/construmar-logo.png";
import logoTeamluisa from "@/assets/teamluisa-logo.png";
import logoFecar from "@/assets/patrocinadores/logo-fecar.png";
import logoTabernaculo from "@/assets/patrocinadores/logo-tabernaculo.png";
import logoTemplo from "@/assets/templo-logo.png";

interface SponsorBoard {
  id: string;
  number: string;
  badge: string;
  titleMain: string;
  titleSub: string;
  description: string;
  bgImage: string;
  imgPos: string;
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
    badge: "COTA MASTER • PARCERIA OFICIAL // EDIÇÃO 2026",
    titleMain: "CONSTRUMAR",
    titleSub: "ENGENHARIA",
    description:
      "Referência no setor de construção civil e infraestrutura corporativa, a Construmar combina tecnologia de ponta, sustentabilidade e rigor técnico absoluto. Uma aliada de peso na realização de grandes empreendimentos imobiliários e corporativos.",
    bgImage: imgConstrumar,
    imgPos: "object-center md:object-[center_35%]",
    logo: logoConstrumar,
    logoAlt: "Logo Construmar Engenharia",
    logoClass: "max-h-[75px] sm:max-h-[95px] md:max-h-[110px]",
    logoBgGlow: "rgba(196,85,10,0.30)",
    websiteUrl: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20Construmar%20atrav%C3%A9s%20do%20Akedah%20Podcast`,
    actionText: "Conhecer a Construmar",
    orientation: "logo-right", // 1: Visual/Logo à Direita, Descrição à Esquerda
  },
  {
    id: "team-luisa",
    number: "02",
    badge: "COTA MASTER • ALTO RENDIMENTO // EDIÇÃO 2026",
    titleMain: "TEAM LUÍSA",
    titleSub: "SAÚDE & PERFORMANCE",
    description:
      "Especializada no desenvolvimento físico e mental de alto rendimento, a Team Luísa assessora líderes, empresários e atletas de elite. Metodologias integradas de treino personalizado, periodização inteligente e hábitos sustentáveis para máxima clareza, foco e vigor executivo.",
    bgImage: imgTeamluisa,
    imgPos: "object-center md:object-[center_30%]",
    logo: logoTeamluisa,
    logoAlt: "Logo Team Luísa",
    logoClass: "max-h-[75px] sm:max-h-[90px] md:max-h-[105px]",
    logoBgGlow: "rgba(217,119,6,0.28)",
    websiteUrl: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20Team%20Lu%C3%ADsa%20atrav%C3%A9s%20do%20Akedah%20Podcast`,
    actionText: "Conhecer Team Luísa",
    orientation: "logo-left", // 2: Visual/Logo à Esquerda, Descrição à Direita
  },
  {
    id: "fecar",
    number: "03",
    badge: "COTA OFICIAL • MOBILIDADE PREMIUM // EDIÇÃO 2026",
    titleMain: "FE-CAR",
    titleSub: "MULTIMARCAS",
    description:
      "Com sólida credibilidade no segmento automotivo de luxo e utilitários, a FE-CAR Multimarcas entrega curadoria rigorosa de procedência, pós-venda exemplar e assessoria completa em compras corporativas e veículos de alto padrão para quem valoriza confiança e elegância.",
    bgImage: imgFecar,
    imgPos: "object-center md:object-[center_40%]",
    logo: logoFecar,
    logoAlt: "Logo FE-CAR Multimarcas",
    logoClass: "max-h-[80px] sm:max-h-[100px] md:max-h-[115px]",
    logoBgGlow: "rgba(196,85,10,0.30)",
    websiteUrl: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20FE-CAR%20Multimarcas%20atrav%C3%A9s%20do%20Akedah%20Podcast`,
    actionText: "Conhecer a FE-CAR",
    orientation: "logo-right", // 3: Visual/Logo à Direita, Descrição à Esquerda
  },
  {
    id: "tabernaculo",
    number: "04",
    badge: "COTA INSTITUCIONAL • FÉ & PROPÓSITO // EDIÇÃO 2026",
    titleMain: "TABERNÁCULO",
    titleSub: "DA TRINDADE",
    description:
      "Fundamentada em princípios inegociáveis de fé, retidão e acolhimento familiar, a instituição lidera projetos humanitários de grande alcance, formação ética e iniciativas de impacto social contínuo que constroem futuros com esperança e dignidade.",
    bgImage: imgTabernaculo,
    imgPos: "object-center md:object-[center_25%]",
    logo: logoTabernaculo,
    logoAlt: "Logo Tabernáculo da Trindade",
    logoClass: "max-h-[80px] sm:max-h-[105px] md:max-h-[120px]",
    logoBgGlow: "rgba(217,119,6,0.28)",
    websiteUrl: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20Tabern%C3%A1culo%20da%20Trindade`,
    actionText: "Conhecer a Instituição",
    orientation: "logo-left", // 4: Visual/Logo à Esquerda, Descrição à Direita
  },
  {
    id: "templo",
    number: "05",
    badge: "COTA ESTRATÉGICA • CENOGRAFIA & ESPAÇOS // EDIÇÃO 2026",
    titleMain: "TEMPLO",
    titleSub: "DESIGN & ESPAÇOS",
    description:
      "Ateliê pioneiro em arquitetura corporativa e cenografia imersiva. Concebe espaços comerciais que traduzem a sofisticação e a autoridade de marcas líderes, aliando ergonomia de última geração, iluminação cênica e presença visual inconfundível.",
    bgImage: imgTemplo,
    imgPos: "object-center md:object-[center_35%]",
    logo: logoTemplo,
    logoAlt: "Logo Templo Design",
    logoClass: "max-h-[75px] sm:max-h-[95px] md:max-h-[110px]",
    logoBgGlow: "rgba(196,85,10,0.30)",
    websiteUrl: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20Templo%20Design%20atrav%C3%A9s%20do%20Akedah%20Podcast`,
    actionText: "Conhecer o Templo",
    orientation: "logo-right", // 5: Visual/Logo à Direita, Descrição à Esquerda
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
              className="relative min-h-[100dvh] md:h-screen w-full flex flex-col justify-end md:justify-center md:items-center overflow-hidden bg-[#1C0F0A] border-b border-white/10 md:snap-start md:snap-always"
            >
              {/* ========================================================================= */}
              {/* LAYER 1: PALCO VISUAL CINEMATOGRÁFICO ESTILO HERO DA PÁGINA INICIAL       */}
              {/* ========================================================================= */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {isLogoRight ? (
                  // Posicionamento do Visual à DIREITA
                  <>
                    <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:bottom-0 w-full sm:w-[85%] md:w-[75%] lg:w-[68%] xl:w-[65%] h-full flex items-start md:items-center justify-center md:justify-end mask-feather-mobile-bottom mask-feather-podcast">
                      <img
                        src={sponsor.bgImage}
                        alt={sponsor.titleMain}
                        className={`w-full h-full object-cover ${sponsor.imgPos} filter contrast-[1.08] brightness-[0.92]`}
                        loading="lazy"
                      />
                    </div>

                    {/* Degradê Dark Terracota: contínuo, ultra suave e sem linhas demarcadas */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A] from-45% via-[#1C0F0A]/90 via-70% to-transparent md:bg-gradient-to-r md:from-[#1C0F0A] md:from-25% md:via-[#1C0F0A]/85 md:via-42% md:via-[#1C0F0A]/40 md:via-60% md:to-transparent md:to-78% z-10 pointer-events-none" />
                    
                    {/* Glow Terracota Quente motivado */}
                    <div 
                      className="absolute top-1/4 right-1/4 w-[600px] h-[600px] blur-3xl pointer-events-none z-10"
                      style={{
                        background: `radial-gradient(circle at center, ${sponsor.logoBgGlow} 0%, rgba(217,119,6,0.06) 50%, transparent 75%)`
                      }}
                    />

                    {/* Palco de Destaque Flutuante para o Logotipo Oficial no Desktop */}
                    <div className="hidden md:flex absolute right-10 lg:right-20 xl:right-28 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                      <div className="relative p-8 lg:p-12 rounded-[28px] lg:rounded-[36px] bg-[#140C07]/75 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_50px_rgba(196,85,10,0.25)] flex items-center justify-center min-w-[280px] lg:min-w-[340px] max-w-[420px] group">
                        <div 
                          className="absolute inset-0 rounded-[28px] lg:rounded-[36px] pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center, ${sponsor.logoBgGlow} 0%, transparent 70%)`
                          }}
                        />
                        <img
                          src={sponsor.logo}
                          alt={sponsor.logoAlt}
                          className={`${sponsor.logoClass} w-auto max-w-[88%] object-contain filter brightness-[1.08] contrast-[1.05] relative z-10`}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  // Posicionamento do Visual à ESQUERDA (Intercalado)
                  <>
                    <div className="absolute inset-0 md:inset-auto md:left-0 md:top-0 md:bottom-0 w-full sm:w-[85%] md:w-[75%] lg:w-[68%] xl:w-[65%] h-full flex items-start md:items-center justify-center md:justify-start mask-feather-mobile-bottom mask-feather-podcast-left">
                      <img
                        src={sponsor.bgImage}
                        alt={sponsor.titleMain}
                        className={`w-full h-full object-cover ${sponsor.imgPos} filter contrast-[1.08] brightness-[0.92]`}
                        loading="lazy"
                      />
                    </div>

                    {/* Degradê Dark Terracota: contínuo vindo da direita */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A] from-45% via-[#1C0F0A]/90 via-70% to-transparent md:bg-gradient-to-l md:from-[#1C0F0A] md:from-25% md:via-[#1C0F0A]/85 md:via-42% md:via-[#1C0F0A]/40 md:via-60% md:to-transparent md:to-78% z-10 pointer-events-none" />

                    {/* Glow Terracota Quente motivado */}
                    <div 
                      className="absolute top-1/4 left-1/4 w-[600px] h-[600px] blur-3xl pointer-events-none z-10"
                      style={{
                        background: `radial-gradient(circle at center, ${sponsor.logoBgGlow} 0%, rgba(217,119,6,0.06) 50%, transparent 75%)`
                      }}
                    />

                    {/* Palco de Destaque Flutuante para o Logotipo Oficial no Desktop */}
                    <div className="hidden md:flex absolute left-10 lg:left-20 xl:left-28 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                      <div className="relative p-8 lg:p-12 rounded-[28px] lg:rounded-[36px] bg-[#140C07]/75 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_50px_rgba(196,85,10,0.25)] flex items-center justify-center min-w-[280px] lg:min-w-[340px] max-w-[420px] group">
                        <div 
                          className="absolute inset-0 rounded-[28px] lg:rounded-[36px] pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center, ${sponsor.logoBgGlow} 0%, transparent 70%)`
                          }}
                        />
                        <img
                          src={sponsor.logo}
                          alt={sponsor.logoAlt}
                          className={`${sponsor.logoClass} w-auto max-w-[88%] object-contain filter brightness-[1.08] contrast-[1.05] relative z-10`}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Overlay sutil em desktop */}
                <div className="hidden md:block absolute inset-0 bg-[#1C0F0A]/40 md:bg-transparent z-10 pointer-events-none" />

                {/* Degradês verticais suaves exclusivos para desktop */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#1C0F0A] via-transparent via-65% to-[#1C0F0A]/40 z-10 pointer-events-none" />
              </div>

              {/* ========================================================================= */}
              {/* LAYER 2: CONTEÚDO EDITORIAL DO CARD IGUAL AO HERO DA PÁGINA INICIAL        */}
              {/* ========================================================================= */}
              <div
                className={`relative z-20 w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-28 sm:pt-28 md:pt-20 pb-16 sm:pb-12 md:pb-8 flex ${
                  isLogoRight ? "justify-start" : "justify-start md:justify-end"
                }`}
              >
                <div className="max-w-3xl text-left flex flex-col items-start w-full">
                  {/* Logotipo visível no mobile no topo do bloco */}
                  <div className="md:hidden flex items-center justify-start mb-5">
                    <div className="p-3.5 rounded-[18px] bg-[#140C07]/85 backdrop-blur-md border border-white/15">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.logoAlt}
                        className={`${sponsor.logoClass} h-10 w-auto object-contain`}
                      />
                    </div>
                  </div>

                  {/* Badge do Card */}
                  <span className="px-3.5 py-1.5 rounded-full bg-[#C4550A]/15 border border-[#C4550A]/35 text-[#C4550A] font-bebas-neue text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 sm:mb-5 inline-block">
                    {sponsor.badge}
                  </span>

                  {/* Título Principal com Darken Jellybean */}
                  <h1 className="font-darken-jellybean text-[36px] xs:text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] font-normal leading-[1.0] sm:leading-[0.95] tracking-tight uppercase mb-4 sm:mb-6 text-left">
                    <span className="block text-white">{sponsor.titleMain}</span>
                    <span className="text-[#C4550A] block">{sponsor.titleSub}</span>
                  </h1>

                  {/* Descrição Editorial com Bebas Neue em versão Regular */}
                  <p className="font-bebas-neue font-normal text-white/80 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide max-w-xl text-left mb-6 sm:mb-8 md:mb-10">
                    {sponsor.description}
                  </p>

                  {/* Botões de Ação com Quatro Cantos Arredondados do Daniel Silva e Bebas Neue */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto mb-6 sm:mb-8">
                    <a
                      href={sponsor.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#C4550A] text-white hover:bg-[#b04b08] border border-[#C4550A] font-bebas-neue text-base sm:text-lg uppercase tracking-[0.14em] px-7 sm:px-9 py-3.5 sm:py-4 rounded-[12px] sm:rounded-[14px] transition-all duration-300 shadow-xl shadow-[#C4550A]/25 text-center justify-center inline-flex items-center gap-2 group"
                    >
                      <span>{sponsor.actionText}</span>
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-sm">
                        ↗
                      </span>
                    </a>
                    <a
                      href={`${WHATSAPP_URL}&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20patrocinar%20o%20Akedah%20Podcast`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent text-white hover:bg-white/10 hover:border-white/60 border border-white/25 font-bebas-neue text-base sm:text-lg uppercase tracking-[0.14em] px-7 sm:px-9 py-3.5 sm:py-4 rounded-[12px] sm:rounded-[14px] transition-all duration-300 text-center justify-center inline-flex items-center gap-2"
                    >
                      <span>Seja um Patrocinador</span>
                    </a>
                  </div>

                  {/* Indicadores de Paginação (5 Cards) idênticos aos da Hero Section */}
                  <div className="flex items-center gap-2.5">
                    {sponsorsData.map((s, sIdx) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => scrollToSection(s.id)}
                        className={`h-1.5 transition-all duration-300 ${
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
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
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
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
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
            <span className="px-4 py-1.5 rounded-full bg-[#C4550A]/15 border border-[#C4550A]/35 text-[#C4550A] font-bebas-neue text-xs sm:text-sm uppercase tracking-[0.22em] mb-6">
              CONEXÃO COM QUEM DECIDE
            </span>

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
