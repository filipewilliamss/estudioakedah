import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PodcastAtmosphere from "@/components/podcast/PodcastAtmosphere";
import IrisPreloader from "@/components/podcast/IrisPreloader";
import studioBannerImg from "@/assets/akedah-podcast-studio.jpg";
import founderPicture from "@/assets/akedah-founder.jpg";
import danielPicture from "@/assets/imagem-daniel.png";
import { WHATSAPP_URL } from "@/data/services";

const Podcast = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Akedah Podcast",
    description: "A mesa de quem decide o mercado. Conversas sem roteiro com grandes realizadores sobre estratégia, escala e bastidores.",
    url: "https://estudioakedah.com/podcast",
    publisher: { "@type": "Organization", name: "Akedah" },
  };

  return (
    <div className="min-h-screen bg-[#0C0704] text-white selection:bg-[#C4550A] selection:text-white relative font-sans">
      {/* Tela de Carregamento Inicial com Revelação de Íris Circular */}
      <IrisPreloader />

      <SEO
        title="Akedah Podcast | A Mesa de Quem Decide o Mercado"
        description="Akedah Podcast: conversas sem roteiro com grandes realizadores sobre estratégia, escala e bastidores. Assista ao vivo e confira a programação."
        url="https://estudioakedah.com/podcast"
        schema={schema}
      />
      <Navbar isPodcastPage={true} />

      {/* Atmosfera Moderna: Fundo #0C0704, Spotlights Radiais e Micro-ruído SVG Inline */}
      <PodcastAtmosphere />

      <main className="relative z-10 overflow-hidden">
        
        {/* 1. HERO SECTION CINEMATOGRÁFICO & BRUTALISTA (ESTILO WE DON'T DO AVERAGE) */}
        <section className="relative min-h-[90vh] md:min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-transparent pt-28 pb-16 border-b border-white/10">
          {/* Iluminação Motivada: Spotlight Radial Quente atrás do Hero */}
          <div className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.18)_0%,_rgba(217,119,6,0.08)_45%,_transparent_70%)] blur-3xl pointer-events-none -z-10" />

          <div className="relative z-20 w-full px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Lado Esquerdo: Título Editorial Massivo & Ação Ortogonal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7 text-left flex flex-col items-start"
              >
                {/* Tag Técnica Superior */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 bg-[#C4550A] rounded-none" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#8A827D] font-bold">
                    [ AKEDAH PODCAST // EDIÇÃO 2026 ]
                  </span>
                </div>

                {/* Título Massivo em Caixa Alta com Entrelinha Ultra-Fechada */}
                <h1 className="font-barlow-condensed text-[42px] sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[100px] font-black leading-[0.88] tracking-[-0.03em] uppercase mb-6 text-left">
                  <span className="block text-white">A MESA DE QUEM</span>
                  <span className="block text-[#C4550A]">DECIDE O MERCADO.</span>
                </h1>

                {/* Linha de Apoio Editorial Direta */}
                <p className="text-[#8A827D] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-lg mb-10 text-left">
                  Conversas sem roteiro com grandes realizadores sobre estratégia, escala e bastidores.
                </p>

                {/* CTA Primário: Bloco Sólido Retangular com Cantos Retos (rounded-none) e Seta Cortante */}
                <a
                  href="#destaque"
                  onClick={() => setIsPlaying(true)}
                  className="group inline-flex items-center justify-between gap-6 px-8 py-5 bg-[#C4550A] hover:bg-[#b04b08] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300 shadow-2xl shadow-[#C4550A]/25"
                >
                  <span>ASSISTIR EPISÓDIO MAIS RECENTE</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-sm">
                    ↗
                  </span>
                </a>
              </motion.div>

              {/* Lado Direito: Retrato Editorial Encaixado na Grade Ortogonal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
              >
                <div className="relative w-[300px] sm:w-[380px] lg:w-[410px] aspect-[4/5] rounded-none">
                  {/* Bloco Geométrico Terracota Ortogonal de Fundo */}
                  <div className="absolute top-0 right-0 w-[85%] h-[92%] bg-[#C4550A] rounded-none z-0 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
                    {/* Linhas ortogonais sutis */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="0" y1="0" x2="100" y2="100" stroke="#000" strokeWidth="0.8" />
                        <line x1="30" y1="0" x2="100" y2="70" stroke="#000" strokeWidth="0.8" />
                      </svg>
                    </div>
                    {/* Marca d'água monumental */}
                    <span className="absolute -bottom-8 -right-4 font-barlow-condensed font-black text-[200px] leading-none text-black/10 select-none pointer-events-none">
                      P
                    </span>
                  </div>

                  {/* Fotografia em Preto e Branco de Alto Contraste */}
                  <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
                    <img
                      src={danielPicture}
                      alt="Daniel Silva - Host do Akedah Podcast"
                      className="w-full h-[96%] object-cover object-top grayscale contrast-[1.3] brightness-95 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                    />
                    {/* Degradê escuro de fusão ortogonal na base */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0C0704] via-[#0C0704]/80 to-transparent z-20" />
                  </div>

                  {/* Selo Editorial com Cantos Retos */}
                  <div className="absolute -bottom-4 left-0 sm:-left-4 z-30 bg-[#0C0704] border border-white/20 px-4 py-2.5 font-mono text-[9.5px] sm:text-[10px] tracking-[0.2em] uppercase text-white/90 shadow-2xl rounded-none">
                    [ TRANSMISSÃO 4K HDR // EPISÓDIOS COMPLETOS ]
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 2. DESTAQUE DO EPISÓDIO — BLOCO EDITORIAL DIVIDIDO EM GRADE ORTOGONAL (#destaque) */}
        <section id="destaque" className="py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-b border-white/10 relative scroll-mt-20 md:scroll-mt-24">
          {/* Spotlight motivado atrás do player */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,_rgba(196,85,10,0.14)_0%,_transparent_70%)] blur-3xl pointer-events-none -z-10" />

          {/* Header da Seção */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
            <div>
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.25em] mb-2 block">
                [ ÚLTIMO LANÇAMENTO • 1H 24MIN ]
              </span>
              <h2 className="font-barlow-condensed text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                EM DESTAQUE // EP.14
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[#8A827D] text-xs font-mono">
              <span className="w-2 h-2 bg-emerald-500 rounded-none animate-pulse" />
              <span>DISPONÍVEL EM ÁUDIO E VÍDEO</span>
            </div>
          </div>

          {/* Bloco Editorial com Vídeo em Destaque Ampliado e Informações Abaixo */}
          <div className="border border-white/10 bg-[#080503] rounded-none overflow-hidden flex flex-col">
            
            {/* Player / Imagem - Full Width 16:9 Monumental */}
            <div className="relative aspect-video w-full overflow-hidden bg-black group rounded-none">
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/nAcTWvqdc-E?autoplay=1&rel=0&modestbranding=1&si=x7bCNKiC59BwS5eL"
                  title="Akedah Podcast Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src="https://img.youtube.com/vi/nAcTWvqdc-E/maxresdefault.jpg"
                    alt="Episódio em Destaque - Akedah Podcast"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Badge de numeração com cantos retos */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-black/90 border border-white/15 px-3.5 py-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#C4550A] uppercase font-bold">
                    EP.14 // 4K HDR
                  </div>

                  {/* Botão de Play Geométrico Minimalista */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group/play cursor-pointer z-20"
                    aria-label="Assistir episódio em destaque"
                  >
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#C4550A] text-white flex items-center justify-center rounded-none shadow-2xl shadow-[#C4550A]/40 group-hover/play:scale-105 group-hover/play:bg-[#b04b08] transition-all duration-300 border border-white/20">
                      <svg className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Dados e Impacto Abaixo do Vídeo */}
            <div className="p-6 sm:p-10 border-t border-white/10 bg-[#090503] flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left">
              <div className="max-w-3xl">
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-[#C4550A] uppercase font-bold block mb-3">
                  [ PAUTA PRINCIPAL ]
                </span>
                <h3 className="font-barlow-condensed text-3xl sm:text-4xl md:text-[44px] font-black uppercase text-white leading-[0.92] tracking-tight mb-3">
                  ENGENHARIA DE VENDAS PREVISÍVEIS
                </h3>
                <p className="font-mono text-xs sm:text-[13px] font-bold text-white/90 uppercase tracking-wider mb-4 pb-3 border-b border-white/10">
                  CONVIDADO: <span className="text-[#C4550A]">DANIEL SILVA — FUNDADOR &amp; ESTRATEGISTA</span>
                </p>
                <p className="text-[#8A827D] text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                  Uma análise profunda sobre como estruturar máquinas de vendas previsíveis, eliminar achismos e blindar a margem comercial em operações de alto valor.
                </p>
              </div>

              {/* Botões Retangulares Diretos para YouTube e Spotify com Cantos Secos */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <a
                  href="https://www.youtube.com/@EstudioAkedah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-6 py-4 bg-black/90 hover:bg-[#C4550A] border border-white/20 hover:border-[#C4550A] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-none transition-colors"
                >
                  <span>ASSISTIR NO YOUTUBE</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-6 py-4 bg-black/90 hover:bg-emerald-600 border border-white/20 hover:border-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-none transition-colors"
                >
                  <span>OUVIR NO SPOTIFY</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 3. SEÇÃO DE ESTREIAS — VITRINE DE CARTAZES EDITORIAIS (#calendario) */}
        <section id="calendario" className="py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-b border-white/10 relative scroll-mt-20 md:scroll-mt-24">
          {/* Header da Seção */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4 text-left">
            <div>
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.25em] mb-2 block">
                [ PROGRAMAÇÃO DE GRAVAÇÕES // EPISÓDIOS ]
              </span>
              <h2 className="font-barlow-condensed text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                PRÓXIMAS ESTREIAS CONFIRMADAS.
              </h2>
            </div>
            <div className="text-xs font-mono text-[#8A827D]">
              LANÇAMENTOS SEMANAIS // QUINTAS • 19:00
            </div>
          </div>

          {/* Grade Ortogonal Conectada de 4 Colunas com Bordas de 1px e Cantos Retos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 bg-[#080503] divide-y sm:divide-y-0 sm:divide-x divide-white/10 rounded-none">
            {[
              {
                date: "15.AGO // 19:00",
                guestName: "DANIEL SILVA",
                episodeTitle: "ENGENHARIA DE VENDAS & RETENÇÃO",
                photo: founderPicture,
                isConfidential: false,
              },
              {
                date: "22.AGO // 19:00",
                guestName: "CONVIDADO CONFIDENCIAL",
                episodeTitle: "INFRAESTRUTURA & GOVERNANÇA TECH",
                isConfidential: true,
              },
              {
                date: "29.AGO // 19:00",
                guestName: "CONVIDADO CONFIDENCIAL",
                episodeTitle: "FUSÕES & M&A DE ALTO VALOR",
                isConfidential: true,
              },
              {
                date: "05.SET // 19:00",
                guestName: "CONVIDADO CONFIDENCIAL",
                episodeTitle: "PLAYBOOKS COMERCIAIS DE 7 DÍGITOS",
                isConfidential: true,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-[3/4] overflow-hidden group bg-[#0C0704] flex flex-col justify-between rounded-none hover:bg-white/[0.02] transition-colors"
              >
                {/* TRATAMENTO FOTOGRÁFICO DOMINANDO O POSTER */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  {item.isConfidential ? (
                    <div className="relative w-full h-full bg-[#080503] overflow-hidden">
                      <img
                        src={studioBannerImg}
                        alt="Estúdio Akedah em Penumbra"
                        className="w-full h-full object-cover grayscale contrast-[1.35] brightness-[0.3] group-hover:scale-105 group-hover:brightness-[0.38] transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-[#0C0704]/60 mix-blend-multiply pointer-events-none" />

                      {/* Tarja Tipográfica Centralizada: CONFIDENCIAL // SOB EMBARGO */}
                      <div className="absolute top-[40%] left-0 right-0 flex items-center justify-center pointer-events-none z-10 px-3">
                        <div className="px-3.5 py-1.5 border border-[#C4550A]/50 bg-[#0C0704]/95 shadow-2xl flex items-center gap-2 rounded-none">
                          <span className="w-1.5 h-1.5 bg-[#C4550A] rounded-none animate-pulse" />
                          <span className="font-mono text-[9px] sm:text-[9.5px] tracking-[0.22em] font-bold text-[#C4550A] uppercase whitespace-nowrap">
                            CONFIDENCIAL // SOB EMBARGO
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={item.photo}
                        alt={item.guestName}
                        className="w-full h-full object-cover object-top grayscale contrast-[1.3] brightness-85 group-hover:scale-105 group-hover:contrast-[1.35] transition-transform duration-700 ease-out"
                      />
                    </div>
                  )}
                </div>

                {/* Vinheta ortogonal profunda na base */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0C0704]/90 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#0C0704] via-[#0C0704]/95 via-50% to-transparent pointer-events-none z-10" />

                {/* Base: Nome do Convidado em Caixa Alta + Data e Horário em Destaque */}
                <div className="relative z-20 p-6 flex flex-col justify-end text-left">
                  <h3 className="font-barlow-condensed text-2xl sm:text-3xl font-black text-white mb-1 uppercase tracking-tight group-hover:text-[#FAF6EB] transition-colors leading-none">
                    {item.guestName}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm font-bold text-[#C4550A] tracking-[0.2em] uppercase mt-1">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-[#8A827D]">
            <span>Datas e participantes sujeitos a confirmação nas transmissões oficiais.</span>
            <a
              href="https://www.instagram.com/estudioakedah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4550A] hover:text-white transition-colors underline decoration-[#C4550A]/40 underline-offset-4"
            >
              Acompanhar bastidores no Instagram →
            </a>
          </div>
        </section>

        {/* 4. PLATAFORMAS — RÉGUA MINIMALISTA 4 COLUNAS (#redes) */}
        <section id="redes" className="py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-b border-white/10 relative scroll-mt-20 md:scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4 text-left">
            <div>
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.25em] mb-2 block">
                [ DISTRIBUIÇÃO // CANAIS OFICIAIS ]
              </span>
              <h2 className="font-barlow-condensed text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                ACOMPANHE O AKEDAH PODCAST EM TODOS OS LUGARES.
              </h2>
            </div>
          </div>

          {/* Grid Minimalista Ortogonal com Cantos Secos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 bg-[#080503] divide-y sm:divide-y-0 sm:divide-x divide-white/10 rounded-none">
            {[
              {
                name: "YOUTUBE",
                format: "EPISÓDIOS COMPLETOS",
                url: "https://www.youtube.com/@EstudioAkedah",
                icon: (
                  <svg className="w-5 h-5 fill-current text-white/70 group-hover:text-[#FF0000] transition-colors duration-300" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
              },
              {
                name: "SPOTIFY",
                format: "ÁUDIO HI-FI",
                url: "https://open.spotify.com",
                icon: (
                  <svg className="w-5 h-5 fill-current text-white/70 group-hover:text-[#1ED760] transition-colors duration-300" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308a.747.747 0 0 1-1.028.248c-2.813-1.718-6.353-2.107-10.524-1.155a.75.75 0 0 1-.336-1.462c4.564-1.042 8.49-.602 11.64 1.341a.749.749 0 0 1 .248 1.028zm1.47-3.266a.936.936 0 0 1-1.287.308c-3.22-1.979-8.128-2.552-11.936-1.396a.937.937 0 0 1-.55-1.79c4.354-1.321 9.775-.683 13.465 1.591a.936.936 0 0 1 .308 1.287zm.126-3.41c-3.86-2.292-10.228-2.503-13.899-1.388a1.124 1.124 0 1 1-.652-2.152c4.225-1.282 11.26-1.033 15.717 1.613a1.124 1.124 0 1 1-1.166 1.927z" />
                  </svg>
                ),
              },
              {
                name: "INSTAGRAM",
                format: "BASTIDORES & REELS",
                url: "https://www.instagram.com/estudioakedah",
                icon: (
                  <div className="relative w-5 h-5">
                    <svg className="w-5 h-5 fill-current text-white/70 group-hover:opacity-0 transition-opacity duration-300" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <svg className="w-5 h-5 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="instaColorGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f09433" />
                          <stop offset="25%" stopColor="#e6683c" />
                          <stop offset="50%" stopColor="#dc2743" />
                          <stop offset="75%" stopColor="#cc2366" />
                          <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#instaColorGrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                ),
              },
              {
                name: "TIKTOK",
                format: "CORTES DIÁRIOS",
                url: "https://www.tiktok.com/@estudioakedah",
                icon: (
                  <svg className="w-5 h-5 fill-current text-white/70 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.48V8.82a8.28 8.28 0 0 0 4.84 1.57v-3.7z" />
                  </svg>
                ),
              },
            ].map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 flex flex-col justify-between hover:bg-white/[0.03] transition-colors group rounded-none"
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
                  <h3 className="font-barlow-condensed text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#FAF6EB] transition-colors">
                    {p.name}
                  </h3>
                  <span className="font-mono text-[10px] tracking-wider text-[#8A827D] uppercase block mt-1">
                    {p.format}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 5. FECHAMENTO MONUMENTAL EM BLOCO ÚNICO (#contato) */}
        <section id="contato" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto relative scroll-mt-20 md:scroll-mt-24">
          {/* Spotlight Quente Motivada Centralizada */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.18)_0%,_rgba(217,119,6,0.08)_50%,_transparent_75%)] blur-3xl pointer-events-none -z-10" />

          <div className="border border-white/10 bg-[#080503] p-10 sm:p-16 lg:p-20 text-center flex flex-col items-center rounded-none shadow-2xl relative overflow-hidden">
            {/* Tag Monolítica Superior */}
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#C4550A] mb-4 block font-semibold">
              // ACESSO EXCLUSIVO
            </span>

            {/* Título Monumental Gigante */}
            <h2 className="font-barlow-condensed text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tight leading-[0.85] max-w-4xl mb-6">
              QUER SENTAR <br />
              <span className="text-[#C4550A]">NA MESA?</span>
            </h2>

            {/* Subtítulo simples e direto */}
            <p className="text-[#8A827D] text-base sm:text-lg md:text-xl font-normal max-w-2xl mb-12 leading-relaxed">
              Grave seu episódio no Estúdio Akedah ou associe sua marca aos líderes de mercado.
            </p>

            {/* Ações com Cantos Retos e Contraste Extremo */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-5 w-full sm:w-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#C4550A] hover:bg-[#b04b08] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-none shadow-2xl shadow-[#C4550A]/35 transition-all duration-300"
              >
                <span>AGENDAR GRAVAÇÃO</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-white/20 hover:border-white/50 bg-transparent text-white/80 hover:text-white font-mono text-xs font-semibold uppercase tracking-[0.2em] rounded-none transition-all duration-300"
              >
                <span>MEDIA KIT</span>
                <span className="text-white/50">↗</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer isPodcastPage={true} />
    </div>
  );
};

export default Podcast;
