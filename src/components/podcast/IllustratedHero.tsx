import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Calendar, ChevronDown, Menu, X } from "lucide-react";
import heroConceptImg from "@/assets/illustrated/hero-akedah-concept.jpg";
import logoAkedahClean from "@/assets/illustrated/logo-akedah-clean.png";

interface IllustratedHeroProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export const IllustratedHero = ({ isPlaying, setIsPlaying }: IllustratedHeroProps) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll handler com suporte a Lenis
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(targetEl, { duration: 1 });
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleWatchLive = () => {
    setIsPlaying(true);
    scrollToSection("destaque");
  };

  // Detecta rolagem para exibir o cabeçalho flutuante quando o usuário passar do hero
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ========================================================================= */}
      {/* CABEÇALHO FLUTUANTE STICKY (visível após rolar o hero no desktop/mobile)   */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 flex justify-center pointer-events-none"
          >
            <div className="w-full max-w-5xl bg-[#281611]/92 backdrop-blur-xl border border-white/15 rounded-full px-5 sm:px-8 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center justify-between pointer-events-auto">
              {/* Logo à esquerda */}
              <Link to="/podcast" className="flex items-center gap-2 group">
                <img
                  src={logoAkedahClean}
                  alt="Akedah Podcast"
                  className="h-8 sm:h-9 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform"
                />
              </Link>

              {/* Menu Desktop */}
              <nav className="hidden sm:flex items-center gap-6 md:gap-8 font-corporate font-bold text-xs sm:text-sm tracking-wide">
                <button
                  type="button"
                  onClick={() => scrollToSection("destaque")}
                  className="text-[#FFF5EA] hover:text-[#F37021] transition-colors cursor-pointer"
                >
                  Ao vivo
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("calendario")}
                  className="text-[#FFF5EA] hover:text-[#F37021] transition-colors cursor-pointer"
                >
                  Agenda
                </button>
                <Link
                  to="/podcast/patrocinadores"
                  className="text-[#FFF5EA] hover:text-[#F37021] transition-colors"
                >
                  Patrocinadores
                </Link>
                <button
                  type="button"
                  onClick={() => scrollToSection("contato")}
                  className="text-[#FFF5EA] hover:text-[#F37021] transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </nav>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="sm:hidden p-1.5 text-[#FFF5EA] hover:text-[#F37021]"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* HERO SECTION PRINCIPAL (EXATAMENTE IGUAL À IMAGEM)                        */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative w-full min-h-[100dvh] bg-[#3F1D11] flex flex-col justify-center items-center overflow-hidden border-b border-white/10 md:snap-start md:snap-always"
      >
        {/* Glow suave no fundo para transição harmoniosa em telas ultrawide */}
        <div className="absolute inset-0 bg-[#3F1D11] -z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1C0F0A] to-transparent pointer-events-none z-10" />

        {/* ======================================================================= */}
        {/* VERSÃO DESKTOP / TABLET LANDSCAPE: RÉPLICA 1:1 EM 16:9 COM HOTSPOTS     */}
        {/* ======================================================================= */}
        <div className="hidden md:block w-full max-w-[1720px] mx-auto relative select-none">
          <div className="relative w-full aspect-[16/9] max-h-[96vh] rounded-none sm:rounded-2xl overflow-hidden shadow-2xl">
            {/* Imagem conceitual com arte 100% autêntica */}
            <img
              src={heroConceptImg}
              alt="Akedah Podcast - Boas conversas. Novas perspectivas."
              fetchPriority="high"
              className="w-full h-full object-cover object-center pointer-events-none select-none"
            />

            {/* ------------------------------------------------------------------- */}
            {/* HOTSPOT 1: LOGO NO CANTO SUPERIOR ESQUERDO                          */}
            {/* ------------------------------------------------------------------- */}
            <Link
              to="/podcast"
              className="absolute left-[3%] top-[3%] w-[24%] h-[16%] rounded-xl z-20 group flex items-center justify-start cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F37021]"
              aria-label="Akedah Podcast Página Inicial"
            >
              <span className="sr-only">Akedah Podcast</span>
              <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/[0.04] transition-colors" />
            </Link>

            {/* ------------------------------------------------------------------- */}
            {/* HOTSPOT 2: CABEÇALHO FUNCIONAL NO CANTO SUPERIOR DIREITO (PILL)     */}
            {/* ------------------------------------------------------------------- */}
            <nav
              aria-label="Menu principal do Podcast"
              className="absolute left-[45.5%] top-[4.2%] w-[52%] h-[13%] z-20 flex items-center justify-between px-3 sm:px-6"
            >
              {/* Item 1: Ao vivo */}
              <button
                type="button"
                onClick={() => scrollToSection("destaque")}
                className="relative group w-[22%] h-[80%] flex items-center justify-center rounded-full text-transparent hover:text-white transition-all cursor-pointer focus:outline-none"
                aria-label="Ir para transmissão Ao vivo"
              >
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/[0.12] border border-transparent group-hover:border-[#F37021]/50 shadow-sm transition-all" />
                <span className="opacity-0 group-hover:opacity-100 text-xs font-corporate font-bold text-white tracking-wider uppercase transition-opacity drop-shadow">
                  Assistir
                </span>
              </button>

              {/* Item 2: Agenda */}
              <button
                type="button"
                onClick={() => scrollToSection("calendario")}
                className="relative group w-[22%] h-[80%] flex items-center justify-center rounded-full text-transparent hover:text-white transition-all cursor-pointer focus:outline-none"
                aria-label="Ir para a Agenda e Programação"
              >
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/[0.12] border border-transparent group-hover:border-[#F37021]/50 shadow-sm transition-all" />
                <span className="opacity-0 group-hover:opacity-100 text-xs font-corporate font-bold text-white tracking-wider uppercase transition-opacity drop-shadow">
                  Ver Datas
                </span>
              </button>

              {/* Item 3: Patrocinadores */}
              <Link
                to="/podcast/patrocinadores"
                className="relative group w-[32%] h-[80%] flex items-center justify-center rounded-full text-transparent hover:text-white transition-all cursor-pointer focus:outline-none"
                aria-label="Ir para Patrocinadores do Podcast"
              >
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/[0.12] border border-transparent group-hover:border-[#F37021]/50 shadow-sm transition-all" />
                <span className="opacity-0 group-hover:opacity-100 text-xs font-corporate font-bold text-white tracking-wider uppercase transition-opacity drop-shadow">
                  Conhecer
                </span>
              </Link>

              {/* Item 4: Contato */}
              <button
                type="button"
                onClick={() => scrollToSection("contato")}
                className="relative group w-[24%] h-[80%] flex items-center justify-center rounded-full text-transparent hover:text-white transition-all cursor-pointer focus:outline-none"
                aria-label="Ir para seção de Contato e Inscrição"
              >
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/[0.12] border border-transparent group-hover:border-[#F37021]/50 shadow-sm transition-all" />
                <span className="opacity-0 group-hover:opacity-100 text-xs font-corporate font-bold text-white tracking-wider uppercase transition-opacity drop-shadow">
                  Falar
                </span>
              </button>
            </nav>

            {/* ------------------------------------------------------------------- */}
            {/* HOTSPOT 3: BOTÃO "ASSISTIR AO VIVO"                                 */}
            {/* ------------------------------------------------------------------- */}
            <button
              type="button"
              onClick={handleWatchLive}
              className="absolute left-[5.8%] top-[62.6%] w-[21%] h-[9%] rounded-full z-20 group cursor-pointer flex items-center justify-center focus:outline-none"
              aria-label="Assistir ao vivo agora"
            >
              {/* Efeito de brilho pulsante no hover */}
              <div className="absolute inset-0 rounded-full bg-[#F57627]/0 group-hover:bg-white/[0.18] group-hover:shadow-[0_0_25px_rgba(245,118,39,0.7)] group-hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ring-2 ring-transparent group-hover:ring-white/40" />
              <span className="sr-only">Assistir ao vivo</span>
            </button>

            {/* ------------------------------------------------------------------- */}
            {/* HOTSPOT 4: BOTÃO "VER AGENDA"                                       */}
            {/* ------------------------------------------------------------------- */}
            <button
              type="button"
              onClick={() => scrollToSection("calendario")}
              className="absolute left-[27.8%] top-[62.6%] w-[16.8%] h-[9%] rounded-full z-20 group cursor-pointer flex items-center justify-center focus:outline-none"
              aria-label="Ver agenda de episódios"
            >
              {/* Efeito de destaque no hover */}
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/[0.14] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ring-2 ring-transparent group-hover:ring-white/60" />
              <span className="sr-only">Ver agenda</span>
            </button>

            {/* ------------------------------------------------------------------- */}
            {/* HOTSPOT 5: "A CONVERSA COMEÇA AQUI" + CHEVRON                       */}
            {/* ------------------------------------------------------------------- */}
            <button
              type="button"
              onClick={() => scrollToSection("destaque")}
              className="absolute left-[38%] top-[89%] w-[24%] h-[10%] rounded-xl z-20 group cursor-pointer flex items-center justify-center focus:outline-none"
              aria-label="Rolar para o primeiro episódio"
            >
              <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/[0.08] transition-colors" />
              <span className="sr-only">A conversa começa aqui</span>
            </button>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* VERSÃO MOBILE: LAYOUT RESPONSIVO, ELEGANTE E TOTALMENTE OTIMIZADO        */}
        {/* ======================================================================= */}
        <div className="md:hidden w-full flex flex-col justify-between min-h-[100dvh] px-5 py-6 pt-8 z-20">
          {/* Topo Mobile: Logo + Menu Pill */}
          <div className="w-full flex items-center justify-between border-b border-white/10 pb-4">
            <Link to="/podcast" className="block">
              <img
                src={logoAkedahClean}
                alt="Akedah Podcast"
                className="h-10 w-auto object-contain brightness-110"
              />
            </Link>

            {/* Botão de Menu Capsule no Mobile */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="px-4 py-2 rounded-full bg-[#281611] border border-white/15 text-[#FFF5EA] text-xs font-corporate font-bold flex items-center gap-2 shadow-lg"
              >
                <span>MENU</span>
                {mobileMenuOpen ? <X className="w-4 h-4 text-[#F37021]" /> : <Menu className="w-4 h-4 text-[#F37021]" />}
              </button>

              {/* Dropdown Mobile */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 top-12 w-52 bg-[#281611]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl z-50 flex flex-col gap-2 font-corporate font-bold text-sm"
                  >
                    <button
                      type="button"
                      onClick={() => scrollToSection("destaque")}
                      className="text-left px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Ao vivo
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToSection("calendario")}
                      className="text-left px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Agenda
                    </button>
                    <Link
                      to="/podcast/patrocinadores"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-left px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Patrocinadores
                    </Link>
                    <button
                      type="button"
                      onClick={() => scrollToSection("contato")}
                      className="text-left px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Contato
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Imagem Ilustrada em Destaque no Mobile */}
          <div className="w-full my-6 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#281611]">
            <img
              src={heroConceptImg}
              alt="Akedah Podcast Ilustrado"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Chamada e Botões de Ação Mobile */}
          <div className="w-full flex flex-col items-center text-center">
            <h1 className="text-2xl xs:text-3xl font-corporate font-black text-white leading-tight mb-2">
              Boas conversas. <br />
              <span className="text-[#F37021]">Novas perspectivas.</span>
            </h1>
            <p className="text-sm font-corporate text-white/80 mb-6 max-w-sm">
              Histórias e ideias que conectam.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
              <button
                type="button"
                onClick={handleWatchLive}
                className="w-full py-3.5 px-6 rounded-full bg-[#F37021] hover:bg-[#E05C10] text-[#281611] font-corporate font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#F37021]/30 active:scale-95 transition-all"
              >
                <div className="w-5 h-5 rounded-full bg-[#281611] text-[#F37021] flex items-center justify-center text-xs">
                  ▶
                </div>
                <span>Assistir ao vivo</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("calendario")}
                className="w-full py-3.5 px-6 rounded-full bg-transparent border-2 border-white/70 hover:bg-white/10 text-white font-corporate font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Ver agenda</span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <button
              type="button"
              onClick={() => scrollToSection("destaque")}
              className="mt-6 flex flex-col items-center text-xs font-corporate font-medium text-white/60 hover:text-white transition-colors"
            >
              <span>A conversa começa aqui</span>
              <ChevronDown className="w-4 h-4 text-[#F37021] animate-bounce mt-1" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IllustratedHero;
