import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import akedahLogo from "@/assets/akedah-logo.png";

type NavItem = { label: string; hash?: string; to?: string };

const defaultNavLinks: NavItem[] = [
  { label: "Nossa história", to: "/sobre" },
  { label: "Método", hash: "processo" },
  { label: "Soluções", hash: "portfolio" },
  { label: "Podcast", to: "/podcast" },
  { label: "Contato", to: "/contato" },
];

const podcastNavLinks: NavItem[] = [
  { label: "Nossa história", to: "/podcast/sobre" },
  { label: "Ao vivo", hash: "player", to: "/podcast#player" },
  { label: "Agenda", hash: "calendario", to: "/podcast#calendario" },
  { label: "Patrocinadores", hash: "patrocinadores", to: "/podcast#patrocinadores" },
  { label: "Contato", hash: "contato", to: "/podcast#contato" },
];

const danielSilvaNavLinks: NavItem[] = [
  { label: "Nossa história", to: "/daniel-silva/sobre" },
  { label: "Ao vivo", hash: "player", to: "/daniel-silva#player" },
  { label: "Agenda", hash: "calendario", to: "/daniel-silva#calendario" },
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

  const bgClass = scrolled
    ? (isCurrentDanielSilva 
        ? "bg-[#07132B]/90 border-white/10" 
        : isCurrentPodcast 
          ? "bg-[#2D1A11]/90 border-[#42362E]/20" 
          : (forceBlack ? "bg-black/70 border-white/[0.08]" : "bg-white/75 border-black/[0.05]")
      ) + " backdrop-blur-[20px] border-b py-4"
    : (isCurrentDanielSilva 
        ? "bg-[#07132B] py-6 md:py-8" 
        : isCurrentPodcast 
          ? "bg-[#2D1A11] py-6 md:py-8" 
          : "bg-transparent py-6 md:py-8"
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
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: visible || menuOpen ? 0 : -100, 
          opacity: visible || menuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[80] transition-colors duration-500 ${bgClass}`}
      >
        <div className={`${(isCurrentPodcast || isCurrentDanielSilva) ? "w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24" : "container-editorial"} flex items-center justify-between h-16 md:h-20`}>
          {/* Logo */}
          <Link 
            to={isCurrentDanielSilva ? "/daniel-silva" : (isCurrentPodcast ? "/podcast" : "/")} 
            className="flex items-center gap-2 group flex-shrink-0" 
            aria-label="Página Inicial"
          >
            {isCurrentDanielSilva ? (
              <div className="flex items-center gap-3">
                <span className="font-display font-[900] text-xl sm:text-2xl tracking-tighter text-white uppercase">
                  DANIEL<span className="text-white/60 font-light ml-1.5">SILVA</span>
                </span>
              </div>
            ) : (
              <img
                src={isCurrentPodcast ? "https://wqxuprmlsapiucjxleih.supabase.co/storage/v1/object/public/files/9708035d-187a-4a8c-bdf4-3f7fce313c0b-Ativo_7.png" : akedahLogo}
                alt="Akedah"
                className={`${isCurrentPodcast ? "h-[52.78px] md:h-[63.34px]" : "h-5 md:h-6"} w-auto transition-transform duration-300 group-hover:scale-105`}
              />
            )}
          </Link>

          {/* Desktop Links & Switcher */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} to={resolveTo(link)} className={textClass} onClick={handleClick(link)}>
                {link.label}
              </Link>
            ))}

            {/* Botão de 3 Linhas que abre o Seletor dos 3 Projetos */}
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
                ? "bg-[#07132B]/95 backdrop-blur-md border-white/10"
                : isCurrentPodcast 
                  ? "bg-[#2D1A11]/95 backdrop-blur-md border-white/10" 
                  : (forceBlack ? "bg-black/95 backdrop-blur-md border-white/10" : "bg-background/95 backdrop-blur-md border-border")
            }`}
          >
            <div className="container-editorial py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={resolveTo(link)}
                  onClick={handleClick(link)}
                  className={`text-sm transition-colors uppercase tracking-wide ${textClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* MODAL / SELETOR DOS 3 PROJETOS */}
      <AnimatePresence>
        {switcherOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSwitcherOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-2xl bg-[#111111] border border-white/15 rounded-[28px] p-6 sm:p-10 shadow-2xl overflow-hidden"
            >
              {/* Header do Modal */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <div>
                  <span className="text-[#C4550A] text-[10px] font-mono uppercase tracking-[0.3em] font-bold block mb-1">
                    Ecossistema Akedah
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Selecione o Projeto
                  </h2>
                </div>
                <button
                  onClick={() => setSwitcherOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Lista dos 3 Projetos */}
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
                      className={`w-full text-left p-5 sm:p-6 rounded-[20px] border transition-all duration-300 flex items-center justify-between group ${
                        isActive
                          ? "bg-white/[0.08] border-[#C4550A] shadow-lg shadow-[#C4550A]/10"
                          : "bg-white/[0.02] border-white/10 hover:bg-white/[0.06] hover:border-white/30"
                      }`}
                    >
                      <div className="space-y-1 max-w-[80%]">
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#C4550A] transition-colors">
                            {project.name}
                          </h3>
                          <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isActive ? "bg-[#C4550A] text-white font-bold" : "bg-white/10 text-white/60"
                          }`}>
                            {project.badge}
                          </span>
                        </div>
                        <p className="text-white/50 text-xs sm:text-sm line-clamp-1">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        {isActive ? (
                          <span className="text-[#C4550A] text-xs font-mono font-bold uppercase tracking-wider">
                            Ativo ✓
                          </span>
                        ) : (
                          <span className="text-white/40 group-hover:text-white text-xs font-mono uppercase tracking-wider transition-colors">
                            Acessar →
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-white/40 text-xs font-mono">
                  Alterne a qualquer momento entre as estruturas do ecossistema.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
