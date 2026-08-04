import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import akedahLogo from "@/assets/akedah-logo.png";

type NavItem = { label: string; hash?: string; to?: string };

const navLinks: NavItem[] = [
  { label: "Sobre", hash: "sobre" },
  { label: "Soluções", hash: "servicos" },
  { label: "Método", hash: "processo" },
  { label: "Serviços", hash: "portfolio" },
  { label: "Podcast", to: "/podcast" },
  { label: "Contato", hash: "contato" },
];

interface NavbarProps {
  forceBlack?: boolean;
}

const Navbar = ({ forceBlack = true }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass = scrolled
    ? (forceBlack ? "bg-black/90 border-white/[0.05]" : "bg-white/90 border-black/[0.05]") + " backdrop-blur-[20px] border-b py-4"
    : "bg-transparent py-6 md:py-8";

  const textClass = `link-magnetic ${forceBlack ? 'text-white/55' : 'text-black/55'} hover:text-[#C4550A] font-bold text-[11px] uppercase tracking-[0.28em] font-display transition-colors duration-500`;
  const areaClienteTextClass = "relative overflow-hidden text-[#C4550A] border border-[#C4550A]/40 hover:border-[#C4550A] hover:bg-[#C4550A] hover:text-white px-6 py-2.5 transition-all duration-500 text-[11px] font-bold uppercase tracking-[0.25em] font-display";

  const resolveTo = (link: NavItem) => (link.to ? link.to : `/#${link.hash}`);

  const handleClick = (link: NavItem) => (e: React.MouseEvent) => {
    setMenuOpen(false);
    if (link.hash && isHome) {
      e.preventDefault();
      document.getElementById(link.hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${bgClass}`}
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0" aria-label="Akedah — início">
          <img
            src={akedahLogo}
            alt="Akedah"
            className="h-5 md:h-6 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">

          {navLinks.map((link, idx) => (
            <Link key={link.label} to={resolveTo(link)} className={textClass} onClick={handleClick(link)}>
              <span className={`${forceBlack ? 'text-white/30' : 'text-black/30'} hidden xl:inline mr-2 font-mono text-[9px] tracking-normal`}>
                0{idx + 1}
              </span>

              {link.label}
            </Link>
          ))}

          <Link to="/area-do-cliente" className={`${areaClienteTextClass} rounded-none`}>
            Área do Cliente
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden ${forceBlack ? 'text-white' : 'text-black'} hover:text-[#C4550A] transition-colors`}
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

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`lg:hidden border-b ${forceBlack ? "bg-black/95 backdrop-blur-md border-white/10" : "bg-background/95 backdrop-blur-md border-border"}`}
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

            <Link
              to="/area-do-cliente"
              onClick={() => setMenuOpen(false)}
              className={`text-sm transition-colors uppercase tracking-wide font-medium ${areaClienteTextClass}`}
            >
              Área do Cliente
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
