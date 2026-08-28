import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

interface NavbarProps {
  forceBlack?: boolean;
  isPodcastPage?: boolean;
}

const Navbar = ({ forceBlack = true, isPodcastPage = false }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isPodcastHome = location.pathname === "/podcast";

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      if (currentY <= 15) {
        setVisible(true);
      } else if (currentY > lastY && currentY > 100) {
        // Rolando para baixo -> esconde o cabeçalho
        setVisible(false);
      } else if (currentY < lastY) {
        // Rolando para cima -> exibe o cabeçalho
        setVisible(true);
      }

      lastY = currentY > 0 ? currentY : 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass = scrolled
    ? (isPodcastPage ? "bg-[#2D1A11]/85 border-[#42362E]/20" : (forceBlack ? "bg-black/70 border-white/[0.08]" : "bg-white/75 border-black/[0.05]")) + " backdrop-blur-[20px] border-b py-4"
    : (isPodcastPage ? "bg-[#2D1A11] py-6 md:py-8" : "bg-transparent py-6 md:py-8");

  const textClass = `link-magnetic ${forceBlack ? 'text-white/55' : 'text-black/55'} hover:text-[#C4550A] font-bold text-[11px] uppercase tracking-[0.28em] font-display transition-colors duration-500`;

  const navLinks = isPodcastPage ? podcastNavLinks : defaultNavLinks;

  const resolveTo = (link: NavItem) => {
    if (link.to) return link.to;
    if (isPodcastPage) return `/podcast#${link.hash}`;
    return `/#${link.hash}`;
  };

  const handleClick = (link: NavItem) => (e: React.MouseEvent) => {
    setMenuOpen(false);
    if (link.hash) {
      if (isPodcastPage && isPodcastHome) {
        e.preventDefault();
        document.getElementById(link.hash)?.scrollIntoView({ behavior: "smooth" });
      } else if (!isPodcastPage && isHome) {
        e.preventDefault();
        document.getElementById(link.hash)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: visible || menuOpen ? 0 : -100, 
        opacity: visible || menuOpen ? 1 : 0 
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[80] transition-colors duration-500 ${bgClass}`}
    >
      <div className={`${isPodcastPage ? "w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24" : "container-editorial"} flex items-center justify-between h-16 md:h-20`}>
        {/* Logo */}
        <Link 
          to={isPodcastPage ? "/podcast" : "/"} 
          className="flex items-center gap-2 group flex-shrink-0" 
          aria-label={isPodcastPage ? "Akedah Podcast — início" : "Akedah — início"}
        >
          <img
            src={isPodcastPage ? "https://wqxuprmlsapiucjxleih.supabase.co/storage/v1/object/public/files/9708035d-187a-4a8c-bdf4-3f7fce313c0b-Ativo_7.png" : akedahLogo}
            alt={isPodcastPage ? "Akedah Podcast" : "Akedah"}
            className={`${isPodcastPage ? "h-[52.78px] md:h-[63.34px]" : "h-5 md:h-6"} w-auto transition-transform duration-300 group-hover:scale-105`}
          />
        </Link>

        {/* Desktop Links & Switcher */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} to={resolveTo(link)} className={textClass} onClick={handleClick(link)}>
              {link.label}
            </Link>
          ))}

          {/* Botão de 3 Linhas para alternar entre Podcast e Estúdio Akedah */}
          {isPodcastPage ? (
            <Link
              to="/"
              title="Voltar para o site do Estúdio Akedah"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-[12px] bg-black/40 hover:bg-[#C4550A] border border-white/15 hover:border-[#C4550A] text-white transition-all duration-300 group ml-2"
            >
              <div className="flex flex-col gap-1 w-4">
                <span className="h-[2px] w-full bg-white group-hover:bg-white rounded-full transition-all" />
                <span className="h-[2px] w-3/4 bg-[#C4550A] group-hover:bg-white rounded-full transition-all" />
                <span className="h-[2px] w-full bg-white group-hover:bg-white rounded-full transition-all" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono">
                Estúdio Akedah
              </span>
            </Link>
          ) : (
            <Link
              to="/podcast"
              title="Ir para o Akedah Podcast"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-[12px] bg-white/[0.05] hover:bg-[#C4550A] border border-white/10 hover:border-[#C4550A] text-white transition-all duration-300 group ml-2"
            >
              <div className="flex flex-col gap-1 w-4">
                <span className="h-[2px] w-full bg-white group-hover:bg-white rounded-full transition-all" />
                <span className="h-[2px] w-3/4 bg-[#C4550A] group-hover:bg-white rounded-full transition-all" />
                <span className="h-[2px] w-full bg-white group-hover:bg-white rounded-full transition-all" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono">
                Podcast
              </span>
            </Link>
          )}
        </div>

        {/* Mobile Switcher & Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          {isPodcastPage ? (
            <Link
              to="/"
              title="Ir para o Estúdio Akedah"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-black/40 border border-white/15 text-white text-[9px] font-mono uppercase tracking-wider"
            >
              <div className="flex flex-col gap-0.5 w-3">
                <span className="h-[1.5px] w-full bg-white rounded-full" />
                <span className="h-[1.5px] w-2/3 bg-[#C4550A] rounded-full" />
                <span className="h-[1.5px] w-full bg-white rounded-full" />
              </div>
              <span>Estúdio</span>
            </Link>
          ) : (
            <Link
              to="/podcast"
              title="Ir para o Podcast"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white/10 border border-white/15 text-white text-[9px] font-mono uppercase tracking-wider"
            >
              <div className="flex flex-col gap-0.5 w-3">
                <span className="h-[1.5px] w-full bg-white rounded-full" />
                <span className="h-[1.5px] w-2/3 bg-[#C4550A] rounded-full" />
                <span className="h-[1.5px] w-full bg-white rounded-full" />
              </div>
              <span>Podcast</span>
            </Link>
          )}

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
          className={`lg:hidden border-b ${isPodcastPage ? "bg-[#2D1A11]/95 backdrop-blur-md border-white/10" : (forceBlack ? "bg-black/95 backdrop-blur-md border-white/10" : "bg-background/95 backdrop-blur-md border-border")}`}
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
  );
};

export default Navbar;
