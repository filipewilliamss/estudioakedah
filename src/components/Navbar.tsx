import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import akedahLogo from "@/assets/akedah-logo.png";
import { DanielSignature } from "./daniel/DanielBrandSignature";

type NavItem = { label: string; hash?: string; to?: string };

const defaultNavLinks: NavItem[] = [
  { label: "Nossa história", to: "/sobre" },
  { label: "Método", hash: "processo" },
  { label: "Soluções", hash: "portfolio" },
  { label: "Podcast", to: "/podcast" },
  { label: "Contato", to: "/contato" },
];

const podcastNavLinks: NavItem[] = [
  { label: "[ 01 // NOSSA HISTÓRIA ]", to: "/podcast/sobre" },
  { label: "[ 02 // ÚLTIMO EPISÓDIO ]", hash: "destaque", to: "/podcast#destaque" },
  { label: "[ 03 // PROGRAMAÇÃO ]", hash: "calendario", to: "/podcast#calendario" },
  { label: "[ 04 // PLATAFORMAS ]", hash: "redes", to: "/podcast#redes" },
  { label: "[ 05 // CONTATO ]", hash: "contato", to: "/podcast#contato" },
];

const danielSilvaNavLinks: NavItem[] = [
  { label: "Sobre mim", to: "/daniel-silva/sobre" },
  { label: "Agenda", hash: "agenda", to: "/daniel-silva#agenda" },
  { label: "Empreendedorismo", hash: "empreendedorismo", to: "/daniel-silva#empreendedorismo" },
  { label: "Fé", hash: "fe", to: "/daniel-silva#fe" },
  { label: "Música", hash: "musica", to: "/daniel-silva#musica" },
  { label: "Patrocinadores", hash: "patrocinadores", to: "/daniel-silva#patrocinadores" },
  { label: "Contato", hash: "contato", to: "/daniel-silva#contato" },
];

const ecosystemProjects = [
  {
    id: "estudio",
    name: "Estúdio Akedah",
    description: "Produção Audiovisual & Estratégia Comercial",
    to: "/",
    badge: "Principal",
    color: "#C4550A",
    tag: "Audiovisual & Vendas",
  },
  {
    id: "podcast",
    name: "Akedah Podcast",
    description: "Canal de Conteúdo, Entrevistas & Negócios",
    to: "/podcast",
    badge: "Canal Oficial",
    color: "#C4550A",
    tag: "Podcast & Bastidores",
  },
  {
    id: "daniel",
    name: "Daniel Silva",
    description: "Posicionamento Estratégico, Mentoria & Autoridade",
    to: "/daniel-silva",
    badge: "Marca Pessoal",
    color: "#3B82F6",
    tag: "Mentoria & Advisory",
  },
];

interface NavbarProps {
  forceBlack?: boolean;
  isPodcastPage?: boolean;
  isDanielSilvaPage?: boolean;
}

const Navbar = ({ forceBlack = true, isPodcastPage = false, isDanielSilvaPage = false }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentDanielSilva = isDanielSilvaPage || location.pathname.startsWith("/daniel-silva");
  const isCurrentPodcast = isPodcastPage || location.pathname.startsWith("/podcast");
  const isHome = location.pathname === "/";
  const isPodcastHome = location.pathname === "/podcast";
  const isDanielSilvaHome = location.pathname === "/daniel-silva";

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      if (currentY <= 15) {
        setVisible(true);
      } else if (currentY > lastY && currentY > 100) {
        setVisible(false);
        setSwitcherOpen(false);
      } else if (currentY < lastY) {
        setVisible(true);
      }

      lastY = currentY > 0 ? currentY : 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fechar switcher ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSwitcherOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const bgClass = isCurrentPodcast
    ? (scrolled
        ? "bg-[#1C0F0A]/90 backdrop-blur-md border-b border-white/[0.08] py-3 md:py-4 shadow-lg"
        : "bg-[#1C0F0A]/85 backdrop-blur-md border-b border-white/[0.08] py-4 md:py-6"
      )
    : (scrolled
        ? (isCurrentDanielSilva 
            ? "bg-[#002867]/95 border-white/10 shadow-lg" 
            : (forceBlack ? "bg-black/70 border-white/[0.08]" : "bg-white/75 border-black/[0.05]")
          ) + " backdrop-blur-[20px] border-b py-3 md:py-4"
        : (isCurrentDanielSilva 
            ? "bg-[#002867]/90 backdrop-blur-[10px] border-b border-white/10 py-4 md:py-5" 
            : "bg-transparent py-6 md:py-8"
          )
      );

  const textClass = `link-magnetic ${forceBlack ? 'text-white/70' : 'text-black/70'} hover:text-white font-bold text-[11px] uppercase tracking-[0.28em] font-display transition-colors duration-300`;

  const navLinks = isCurrentDanielSilva 
    ? danielSilvaNavLinks 
    : (isCurrentPodcast ? podcastNavLinks : defaultNavLinks);

  const resolveTo = (link: NavItem) => {
    if (link.to) return link.to;
    if (isCurrentDanielSilva) return `/daniel-silva#${link.hash}`;
    if (isCurrentPodcast) return `/podcast#${link.hash}`;
    return `/#${link.hash}`;
  };

  const handleClick = (link: NavItem) => (e: React.MouseEvent) => {
    setMenuOpen(false);
    if (link.hash) {
      if (isCurrentDanielSilva && isDanielSilvaHome) {
        e.preventDefault();
        document.getElementById(link.hash)?.scrollIntoView({ behavior: "smooth" });
      } else if (isCurrentPodcast && isPodcastHome) {
        e.preventDefault();
        document.getElementById(link.hash)?.scrollIntoView({ behavior: "smooth" });
      } else if (!isCurrentDanielSilva && !isCurrentPodcast && isHome) {
        e.preventDefault();
        document.getElementById(link.hash)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const currentProjectId = isCurrentDanielSilva ? "daniel" : (isCurrentPodcast ? "podcast" : "estudio");
  const currentProject = ecosystemProjects.find(p => p.id === currentProjectId) || ecosystemProjects[0];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. NAVEGAÇÃO BRUTALISTA / EDITORIAL EXCLUSIVA PARA A ROTA DO PODCAST      */}
      {/* ========================================================================= */}
      {isCurrentPodcast ? (
        <motion.nav
          initial={{ y: 0, opacity: 1 }}
          animate={{ 
            y: visible || menuOpen ? 0 : -100, 
            opacity: visible || menuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[80] bg-[#0C0704]/90 backdrop-blur-md border-b border-white/10"
        >
          <div className="w-full flex items-stretch justify-between h-16 md:h-20">
            {/* Bloco 1: Logo Oficial com Divisor Ortogonal Direito */}
            <div className="flex items-center px-4 sm:px-6 xl:px-8 border-r border-white/10 flex-shrink-0">
              <Link 
                to="/podcast" 
                className="flex items-center gap-2 group" 
                aria-label="Akedah Podcast - Página Inicial"
              >
                <img
                  src="https://wqxuprmlsapiucjxleih.supabase.co/storage/v1/object/public/files/9708035d-187a-4a8c-bdf4-3f7fce313c0b-Ativo_7.png"
                  alt="Akedah Podcast"
                  className="h-[38px] sm:h-[46px] md:h-[50px] w-auto transition-transform duration-200 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Bloco 2 + 3 (Desktop): Navegação + Seletor Unidos em Grade Ortogonal Direita */}
            <div className="hidden lg:flex items-stretch divide-x divide-white/10 border-l border-white/10">
              {podcastNavLinks.map((link) => (
                <Link
                  key={link.label}
                  to={resolveTo(link)}
                  onClick={handleClick(link)}
                  className="h-full flex items-center px-2 xl:px-2.5 2xl:px-4 font-mono text-[9.5px] xl:text-[10px] 2xl:text-[11px] uppercase tracking-[0.05em] xl:tracking-[0.08em] 2xl:tracking-[0.14em] text-white/60 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Linha sólida inferior sutil em terracota no hover */}
                  <span className="absolute bottom-0 inset-x-0 h-[2px] bg-transparent group-hover:bg-[#C4550A] transition-colors duration-200" />
                </Link>
              ))}

              {/* Seletor Técnico de Projetos / Marcas (Desktop) */}
              <div className="flex items-center px-3 xl:px-4 2xl:px-6">
                <button
                  type="button"
                  onClick={() => setSwitcherOpen(!switcherOpen)}
                  title="Alternar entre sistemas do Ecossistema Akedah"
                  className="inline-flex items-center px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-none border border-white/20 hover:border-[#C4550A] bg-white/[0.03] hover:bg-white/[0.06] text-white transition-all duration-200 group cursor-pointer"
                  aria-expanded={switcherOpen}
                >
                  {/* Indicador de status tipo pixel/led quadrado */}
                  <span className="w-1.5 h-1.5 bg-[#C4550A] mr-2 flex-shrink-0 animate-pulse" />
                  {/* Rótulo em tipografia mono nítida */}
                  <span className="font-mono text-[10px] xl:text-[11px] 2xl:text-xs uppercase tracking-[0.08em] xl:tracking-[0.12em] 2xl:tracking-[0.16em] font-bold text-white/90 group-hover:text-white whitespace-nowrap">
                    <span className="hidden xl:inline">SISTEMA: AKEDAH PODCAST</span>
                    <span className="inline xl:hidden">SISTEMA: PODCAST</span>
                  </span>
                  {/* Seta/chevron minimalista com cantos retos */}
                  <svg 
                    className={`w-3.5 h-3.5 ml-2 text-white/60 group-hover:text-[#C4550A] transition-transform duration-200 ${switcherOpen ? "rotate-180" : ""}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Bloco 4: Controles Mobile (Seletor + Menu Hambúrguer Geométrico) */}
            <div className="flex lg:hidden items-stretch divide-x divide-white/10 border-l border-white/10">
              {/* Seletor Técnico Mobile */}
              <button
                type="button"
                onClick={() => setSwitcherOpen(!switcherOpen)}
                title="Alternar Projetos"
                className="px-3 sm:px-4 flex items-center gap-2 text-white font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] bg-white/[0.02] hover:bg-white/[0.06] transition-colors rounded-none"
              >
                <span className="w-1.5 h-1.5 bg-[#C4550A] flex-shrink-0" />
                <span className="font-bold whitespace-nowrap">SISTEMA: PODCAST</span>
                <svg 
                  className={`w-3 h-3 text-white/60 transition-transform duration-200 ${switcherOpen ? "rotate-180" : ""}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Botão Menu com Linhas Geométricas Secas (Sem bordas ovais) */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="px-4 flex items-center justify-center text-white/80 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] transition-colors rounded-none cursor-pointer"
                aria-label="Abrir Menu Principal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Mobile Dropdown (Cantos retos, borda inferior sólida de 1px) */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden border-t border-b border-white/10 bg-[#0C0704]/98 backdrop-blur-md divide-y divide-white/10 rounded-none overflow-hidden"
              >
                {podcastNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={resolveTo(link)}
                    onClick={handleClick(link)}
                    className="px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white hover:bg-white/[0.04] hover:text-[#C4550A] flex items-center justify-between transition-colors group"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#C4550A] group-hover:translate-x-1 transition-transform">↗</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      ) : (
        /* ========================================================================= */
        /* 2. NAVEGAÇÃO PADRÃO PARA OUTRAS ROTAS (HOME & DANIEL SILVA)               */
        /* ========================================================================= */
        <motion.nav
          initial={{ y: 0, opacity: 1 }}
          animate={{ 
            y: visible || menuOpen ? 0 : -100, 
            opacity: visible || menuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 left-0 right-0 z-[80] ${
            scrolled
              ? (isCurrentDanielSilva 
                  ? "bg-[#002867]/95 border-white/10 shadow-lg" 
                  : (forceBlack ? "bg-black/70 border-white/[0.08]" : "bg-white/75 border-black/[0.05]")
                ) + " backdrop-blur-[20px] border-b py-3 md:py-4"
              : (isCurrentDanielSilva 
                  ? "bg-[#002867]/90 backdrop-blur-[10px] border-b border-white/10 py-4 md:py-5" 
                  : "bg-transparent py-6 md:py-8"
                )
          }`}
        >
          <div className={`${isCurrentDanielSilva ? "w-full px-6 sm:px-10 md:px-14 lg:px-16" : "container-editorial"} flex items-center justify-between h-16 md:h-20`}>
            {/* Logo */}
            <Link 
              to={isCurrentDanielSilva ? "/daniel-silva" : "/"} 
              className="flex items-center gap-2 group flex-shrink-0" 
              aria-label="Página Inicial"
            >
              {isCurrentDanielSilva ? (
                <div className="flex items-center">
                  <img
                    src="/daniel-silva-assinatura-white.svg"
                    alt="Daniel Silva"
                    className="h-[28px] md:h-[36px] w-auto object-contain select-none"
                    loading="eager"
                  />
                </div>
              ) : (
                <img
                  src={akedahLogo}
                  alt="Akedah"
                  className="h-5 md:h-6 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </Link>

            {/* Desktop Links & Switcher */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {(isCurrentDanielSilva ? danielSilvaNavLinks : defaultNavLinks).map((link) => (
                <Link 
                  key={link.label} 
                  to={resolveTo(link)} 
                  className={`link-magnetic ${forceBlack ? 'text-white/70' : 'text-black/70'} hover:text-white font-bold text-[11px] uppercase tracking-[0.28em] font-display transition-colors duration-300`} 
                  onClick={handleClick(link)}
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => setSwitcherOpen(!switcherOpen)}
                title="Alternar entre Estúdio Akedah, Podcast e Daniel Silva"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-[12px] bg-white/[0.08] hover:bg-white/[0.18] border border-white/20 hover:border-white/40 text-white transition-all duration-300 group ml-3 active:scale-95"
                aria-expanded={switcherOpen}
              >
                <div className="flex flex-col gap-1 w-4">
                  <span className="h-[2px] w-full bg-white rounded-full transition-all" />
                  <span className="h-[2px] w-2/3 bg-[#C4550A] group-hover:w-full rounded-full transition-all" />
                  <span className="h-[2px] w-full bg-white rounded-full transition-all" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono">
                  {currentProject.name}
                </span>
                <svg 
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${switcherOpen ? "rotate-180" : ""}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Mobile Switcher & Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setSwitcherOpen(!switcherOpen)}
                title="Alternar Projetos"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white/10 border border-white/20 text-white text-[9px] font-mono uppercase tracking-wider active:scale-95"
              >
                <div className="flex flex-col gap-0.5 w-3">
                  <span className="h-[1.5px] w-full bg-white rounded-full" />
                  <span className="h-[1.5px] w-2/3 bg-[#C4550A] rounded-full" />
                  <span className="h-[1.5px] w-full bg-white rounded-full" />
                </div>
                <span>{currentProject.name.split(' ')[0]}</span>
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`${forceBlack ? 'text-white' : 'text-black'} hover:text-[#C4550A] transition-colors p-2`}
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`lg:hidden border-b ${
                isCurrentDanielSilva
                  ? "bg-[#002867]/98 backdrop-blur-md border-white/10"
                  : (forceBlack ? "bg-black/95 backdrop-blur-md border-white/10" : "bg-background/95 backdrop-blur-md border-border")
              }`}
            >
              <div className="container-editorial py-6 flex flex-col gap-4">
                {(isCurrentDanielSilva ? danielSilvaNavLinks : defaultNavLinks).map((link) => (
                  <Link
                    key={link.label}
                    to={resolveTo(link)}
                    onClick={handleClick(link)}
                    className="text-sm transition-colors uppercase tracking-wide text-white/70 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </motion.nav>
      )}

      {/* ========================================================================= */}
      {/* 3. MODAL DE SELEÇÃO TÉCNICA DE PROJETOS (CORTE SECO INSTANTÂNEO)         */}
      {/* ========================================================================= */}
      {switcherOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 duration-0">
          {/* Backdrop Instantâneo */}
          <div
            onClick={() => setSwitcherOpen(false)}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer duration-0"
          />

          {/* Modal Box com cantos secos e bordas de 1px */}
          <div className="relative z-10 w-full max-w-2xl bg-[#0C0704] border border-white/20 rounded-none p-6 sm:p-10 shadow-2xl overflow-hidden duration-0">
            {/* Header do Modal */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <div>
                <span className="text-[#C4550A] text-[10px] font-mono uppercase tracking-[0.3em] font-bold block mb-1">
                  // ECOSSISTEMA AKEDAH
                </span>
                <h2 className="font-barlow-condensed text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  SELECIONE O SISTEMA
                </h2>
              </div>
              <button
                onClick={() => setSwitcherOpen(false)}
                className="w-10 h-10 rounded-none border border-white/15 hover:border-[#C4550A] bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-none duration-0 cursor-pointer font-mono"
                aria-label="Fechar seletor"
              >
                ✕
              </button>
            </div>

            {/* Lista dos 3 Projetos com Corte Seco e Estado Ativo Instantâneo */}
            <div className="space-y-4">
              {ecosystemProjects.map((project) => {
                const isActive = project.id === currentProjectId;
                return (
                  <button
                    key={project.id}
                    onClick={() => {
                      setSwitcherOpen(false);
                      navigate(project.to);
                    }}
                    className={`w-full text-left p-5 sm:p-6 rounded-none border transition-none duration-0 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? "bg-white/[0.06] border-[#C4550A] shadow-lg shadow-[#C4550A]/10"
                        : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/30"
                    }`}
                  >
                    <div className="space-y-1.5 max-w-[80%]">
                      <div className="flex items-center gap-3">
                        <h3 className={`font-barlow-condensed text-2xl font-black uppercase tracking-tight transition-none duration-0 ${
                          isActive ? "text-[#C4550A]" : "text-white group-hover:text-[#C4550A]"
                        }`}>
                          {project.name}
                        </h3>
                        <span className={`text-[9px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-none font-bold transition-none duration-0 ${
                          isActive ? "bg-[#C4550A] text-white" : "bg-white/10 text-white/60"
                        }`}>
                          {project.badge}
                        </span>
                      </div>
                      <p className="text-[#8A827D] text-xs sm:text-sm line-clamp-1 font-sans">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-none duration-0">
                      {isActive ? (
                        <span className="text-[#C4550A] font-bold duration-0">
                          ATIVO ✓
                        </span>
                      ) : (
                        <span className="text-white/40 group-hover:text-white transition-none duration-0">
                          ACESSAR ↗
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-[#8A827D] text-xs font-mono tracking-wider uppercase">
                [ TRANSITAR ENTRE ESTRUTURAS DO ECOSSISTEMA ]
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
