import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PodcastAtmosphere from "@/components/podcast/PodcastAtmosphere";
import IrisPreloader from "@/components/podcast/IrisPreloader";
import studioBannerImg from "@/assets/akedah-podcast-studio.jpg";
import founderPicture from "@/assets/akedah-founder.jpg";
import { WHATSAPP_URL } from "@/data/services";

const Podcast = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Akedah Podcast",
    description: "Assista ao vivo, veja o calendário de entrevistas, confira as fotos dos episódios e acompanhe nas redes sociais.",
    url: "https://estudioakedah.com/podcast",
    publisher: { "@type": "Organization", name: "Akedah" },
  };

  return (
    <div className="min-h-screen bg-[#0E0704] text-white selection:bg-[#C4550A] selection:text-white relative">
      {/* Tela de Carregamento Inicial com Revelação de Íris Circular */}
      <IrisPreloader />

      <SEO
        title="Akedah Podcast | Assista ao Vivo e Calendário"
        description="Akedah Podcast: assista ao vivo, veja o calendário de entrevistas, confira as fotos dos episódios e acompanhe nas redes sociais."
        url="https://estudioakedah.com/podcast"
        schema={schema}
      />
      <Navbar isPodcastPage={true} />

      {/* Atmosfera Moderna: Fundo #0E0704, Spotlights Radiais e Micro-ruído SVG Inline */}
      <PodcastAtmosphere />

      <main className="relative z-10 overflow-hidden">
        {/* 1. HERO SECTION CINEMATOGRÁFICO (ESTILO BRUTALISTA EDITORIAL) */}
        <section className="relative min-h-[92vh] md:min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-transparent pt-28 pb-20">
          {/* Iluminação Motivada: Spotlight Radial Quente atrás do Hero */}
          <div className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.18)_0%,_rgba(217,119,6,0.06)_45%,_transparent_70%)] blur-3xl pointer-events-none -z-10" />

          <div className="relative z-20 w-full px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Lado Esquerdo: Título Editorial Massivo & Ação */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7 text-left flex flex-col items-start"
              >
                <h1 className="font-podcast-display text-[30px] sm:text-[46px] md:text-[56px] lg:text-[62px] xl:text-[72px] font-black leading-[0.88] tracking-[-0.035em] uppercase mb-6 sm:mb-8">
                  <span className="block text-white">AUTORIDADE.</span>
                  <span className="block text-[#C4550A]">SEM FILTRO.</span>
                </h1>

                {/* Única linha de apoio cortante (11 palavras) */}
                <p className="text-white/80 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-lg mb-8 sm:mb-10">
                  Onde líderes de alto calibre debatem o jogo real dos negócios.
                </p>

                {/* Botão de Ação Único: Estilo carimbo de acesso minimalista com seta diagonal (↗) */}
                <a
                  href="#destaque"
                  onClick={() => setIsPlaying(true)}
                  className="group relative inline-flex items-center gap-4 px-7 sm:px-8 py-4 sm:py-4.5 bg-[#C4550A] hover:bg-[#b04b08] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl shadow-[#C4550A]/30 overflow-hidden"
                >
                  <span className="relative z-10">ASSISTIR ÚLTIMO EPISÓDIO</span>
                  <span className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </motion.div>

              {/* Lado Direito: Elemento Escultural com Anel Solar e Contraluz Dramática */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
              >
                {/* Halo / Anel Solar Terracota */}
                <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] lg:w-[390px] lg:h-[390px] rounded-full flex items-center justify-center">
                  {/* Anel Externo Fino */}
                  <div className="absolute inset-0 rounded-full border border-[#C4550A]/35 pointer-events-none" />
                  <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-[#C4550A]/15 pointer-events-none animate-[spin_60s_linear_infinite]" />

                  {/* Spotlight Radial Interno */}
                  <div className="absolute inset-4 rounded-full bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.35)_0%,_rgba(217,119,6,0.12)_45%,_transparent_75%)] blur-md pointer-events-none" />

                  {/* Retrato do Host em Contraluz Dramática */}
                  <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border border-white/15 shadow-2xl bg-black">
                    <img
                      src={founderPicture}
                      alt="Daniel Silva - Host do Akedah Podcast"
                      className="w-full h-full object-cover object-[center_18%] grayscale contrast-[1.28] brightness-95 scale-105"
                    />
                    {/* Gradiente Duotone de Fusão */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0704] via-[#0E0704]/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-[#C4550A]/20 mix-blend-color pointer-events-none" />
                  </div>

                  {/* Selo Monolítico Flutuante */}
                  <div className="absolute -bottom-2 sm:-bottom-3 right-2 sm:right-4 bg-[#0E0704] border border-white/15 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-white/85 shadow-2xl backdrop-blur-md">
                    [ OFICIAL // 4K HDR ]
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. SEÇÃO DE EPISÓDIO EM DESTAQUE (PLAYER INTERATIVO FACADE) */}
        <section id="destaque" className="py-20 px-6 max-w-7xl mx-auto relative">
          {/* Spotlight motivado atrás do player */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,_rgba(196,85,10,0.14)_0%,_transparent_70%)] blur-3xl pointer-events-none -z-10" />

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.2em] mb-2 block">
                ÚLTIMO LANÇAMENTO // DISPONÍVEL AGORA
              </span>
              <h2 className="font-podcast-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Em Destaque
              </h2>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>EPISÓDIO COMPLETO • 4K HDR</span>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden bg-black shadow-2xl border border-white/10 group">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nAcTWvqdc-E?autoplay=1&rel=0&modestbranding=1&si=x7bCNKiC59BwS5eL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={studioBannerImg}
                  alt="Episódio em Destaque - Akedah Podcast"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale contrast-110 brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Botão de play pulsante com ação direta de reprodução */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group/play cursor-pointer z-20"
                  aria-label="Assistir episódio em destaque"
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-24 h-24 rounded-full bg-[#C4550A]/40 animate-ping pointer-events-none" />
                    <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#C4550A] text-white flex items-center justify-center shadow-2xl shadow-[#C4550A]/50 group-hover/play:scale-110 group-hover/play:bg-[#d96112] transition-all duration-300 border border-white/30">
                      <svg className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Metadados cinematográficos na base do player */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 pointer-events-none text-left">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C4550A] mb-1.5 block font-semibold">
                    EP #14 • 1H 45M
                  </span>
                  <h3 className="font-podcast-display text-xl sm:text-3xl font-bold text-white tracking-tight">
                    Engenharia de Vendas Previsíveis e Retenção Corporativa
                  </h3>
                </div>
              </>
            )}
          </div>
        </section>

        {/* 3. PAINEL DE ESTREIAS — PÔSTERES DE FESTIVAL (#calendario) */}
        <section id="calendario" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.06] relative">
          {/* Spotlight motivado atrás da grade */}
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.12)_0%,_transparent_70%)] blur-3xl pointer-events-none -z-10" />

          <div className="mb-14 text-left max-w-2xl">
            <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.25em] mb-3 block">
              FESTIVAL DE ESTREIAS // PROGRAMAÇÃO
            </span>
            <h2 className="font-podcast-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Próximas <span className="text-[#C4550A]">estreias</span> confirmadas.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tag: "ESTREIA // 15.08 • 19H",
                guestName: "Daniel Silva",
                episodeTitle: "Engenharia de Vendas & Retenção",
                photo: founderPicture,
                isConfidential: false,
              },
              {
                tag: "ESTREIA // 22.08 • 19H",
                guestName: "Convidado Confidencial",
                episodeTitle: "Infraestrutura & Governança Tech",
                isConfidential: true,
              },
              {
                tag: "ESTREIA // 29.08 • 19H",
                guestName: "Convidado Confidencial",
                episodeTitle: "Fusões & M&A de Alto Valor",
                isConfidential: true,
              },
              {
                tag: "ESTREIA // 05.09 • 19H",
                guestName: "Convidado Confidencial",
                episodeTitle: "Playbooks Comerciais de 7 Dígitos",
                isConfidential: true,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-[3/4] overflow-hidden group border border-white/[0.08] hover:border-[#C4550A]/70 transition-all duration-500 bg-[#0E0704] flex flex-col justify-between"
              >
                {/* Linha superior de iluminação terracota no hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C4550A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none" />

                {/* Glow sutil de luz quente atrás do pôster no hover */}
                <div className="absolute -top-12 -inset-x-6 h-32 bg-[radial-gradient(ellipse_at_center,_rgba(196,85,10,0.25)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                {/* TRATAMENTO FOTOGRÁFICO DOMINANDO 100% DA ÁREA */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  {item.isConfidential ? (
                    <div className="relative w-full h-full bg-[#0A0402] overflow-hidden">
                      {/* Foto do estúdio em penumbra dramática com contraluz */}
                      <img
                        src={studioBannerImg}
                        alt="Estúdio Akedah em Penumbra"
                        className="w-full h-full object-cover grayscale contrast-[1.35] brightness-[0.34] group-hover:scale-105 group-hover:brightness-[0.42] transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0E0704] via-[#C4550A]/20 to-transparent mix-blend-screen pointer-events-none" />
                      <div className="absolute inset-0 bg-[#0E0704]/50 mix-blend-multiply pointer-events-none" />

                      {/* Tarja Tipográfica Centralizada: [ CONVIDADO SOB EMBARGO ] */}
                      <div className="absolute top-[38%] left-0 right-0 flex items-center justify-center pointer-events-none z-10 px-3">
                        <div className="px-3.5 py-1.5 border border-[#C4550A]/50 bg-[#0E0704]/95 backdrop-blur-md shadow-2xl flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C4550A] animate-pulse" />
                          <span className="font-mono text-[9px] sm:text-[9.5px] tracking-[0.22em] font-bold text-[#C4550A] uppercase whitespace-nowrap">
                            [ CONVIDADO SOB EMBARGO ]
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={item.photo}
                        alt={item.guestName}
                        className="w-full h-full object-cover object-top grayscale contrast-[1.3] brightness-90 group-hover:scale-105 group-hover:contrast-[1.35] transition-transform duration-700 ease-out"
                      />
                      <div
                        className="absolute inset-0 mix-blend-color opacity-30 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(196,85,10,0.6) 0%, rgba(14,7,4,0.8) 100%)",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Vinhetas de Contraste e Fusão na Base com Degradê Escuro */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0E0704]/85 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#0E0704] via-[#0E0704]/95 via-50% to-transparent pointer-events-none z-10" />

                {/* Topo: Tag Monolítica em font-mono e cantos secos */}
                <div className="relative z-20 p-4 sm:p-5 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-[9.5px] sm:text-[10px] tracking-[0.25em] text-[#C4550A] uppercase bg-black/90 px-3 py-1.5 border border-white/10 shadow-xl">
                    {item.tag}
                  </span>
                </div>

                {/* Base: Nome do Convidado + Título do Episódio */}
                <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end text-left">
                  <h3 className="font-podcast-display text-xl sm:text-2xl font-bold text-white mb-1 leading-tight tracking-tight group-hover:text-[#FAF6EB] transition-colors">
                    {item.guestName}
                  </h3>
                  <p className="font-podcast-display text-xs sm:text-[13px] font-semibold text-[#C4550A] tracking-tight uppercase line-clamp-2 leading-snug">
                    {item.episodeTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-xs font-mono text-white/40">
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

        {/* 4. PLATAFORMAS E DISTRIBUIÇÃO — ESTILO PASSES DE ACESSO VIP (#redes) */}
        <section id="redes" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.06] relative">
          {/* Spotlight motivado sutil */}
          <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.1)_0%,_transparent_70%)] blur-3xl pointer-events-none -z-10" />

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 text-left">
            <div className="max-w-2xl">
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.25em] mb-3 block">
                DISTRIBUIÇÃO GLOBAL // PASSES OFICIAIS
              </span>
              <h2 className="font-podcast-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Acesse em <span className="text-[#C4550A]">todas as redes</span>.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-white/40">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>PASSES VIP ATIVOS • 4 CANAIS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                passId: "PASS // 01",
                name: "YOUTUBE",
                url: "https://www.youtube.com/@EstudioAkedah",
                formatTag: "EPISÓDIOS COMPLETOS",
                hoverShadow: "group-hover:shadow-[0_0_36px_rgba(239,68,68,0.22)]",
                hoverBg: "group-hover:bg-red-500/[0.06]",
                tagColor: "text-red-400",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
              },
              {
                passId: "PASS // 02",
                name: "SPOTIFY",
                url: "https://open.spotify.com",
                formatTag: "ÁUDIO NA ÍNTEGRA",
                hoverShadow: "group-hover:shadow-[0_0_36px_rgba(16,185,129,0.22)]",
                hoverBg: "group-hover:bg-emerald-500/[0.06]",
                tagColor: "text-emerald-400",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308a.747.747 0 0 1-1.028.248c-2.813-1.718-6.353-2.107-10.524-1.155a.75.75 0 0 1-.336-1.462c4.564-1.042 8.49-.602 11.64 1.341a.749.749 0 0 1 .248 1.028zm1.47-3.266a.936.936 0 0 1-1.287.308c-3.22-1.979-8.128-2.552-11.936-1.396a.937.937 0 0 1-.55-1.79c4.354-1.321 9.775-.683 13.465 1.591a.936.936 0 0 1 .308 1.287zm.126-3.41c-3.86-2.292-10.228-2.503-13.899-1.388a1.124 1.124 0 1 1-.652-2.152c4.225-1.282 11.26-1.033 15.717 1.613a1.124 1.124 0 1 1-1.166 1.927z" />
                  </svg>
                ),
              },
              {
                passId: "PASS // 03",
                name: "INSTAGRAM",
                url: "https://www.instagram.com/estudioakedah",
                formatTag: "CORTES VERTICAIS",
                hoverShadow: "group-hover:shadow-[0_0_36px_rgba(236,72,153,0.22)]",
                hoverBg: "group-hover:bg-pink-500/[0.06]",
                tagColor: "text-pink-400",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
              },
              {
                passId: "PASS // 04",
                name: "TIKTOK",
                url: "https://www.tiktok.com/@estudioakedah",
                formatTag: "PÍLULAS & BASTIDORES",
                hoverShadow: "group-hover:shadow-[0_0_36px_rgba(6,182,212,0.22)]",
                hoverBg: "group-hover:bg-cyan-500/[0.06]",
                tagColor: "text-cyan-400",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.48V8.82a8.28 8.28 0 0 0 4.84 1.57v-3.7z" />
                  </svg>
                ),
              },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-white/[0.02] border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 overflow-hidden ${platform.hoverBg} ${platform.hoverShadow}`}
              >
                {/* Topo do Passe VIP: ID Monolítico + Seta Diagonal */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="font-mono text-[9.5px] tracking-[0.2em] text-white/40 group-hover:text-white/80 transition-colors">
                    {platform.passId}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>

                {/* Base do Passe VIP: Ícone Minimalista + Nome em Caixa Alta + Tag em 2 Palavras */}
                <div className="relative z-10 text-left">
                  <div className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors">
                    {platform.icon}
                  </div>
                  <span className={`text-[10px] font-mono font-medium uppercase tracking-[0.2em] block mb-1.5 ${platform.tagColor}`}>
                    {platform.formatTag}
                  </span>
                  <h3 className="font-podcast-display text-2xl font-black text-white tracking-tight group-hover:text-[#FAF6EB] transition-colors">
                    {platform.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 5. FECHAMENTO E CONVERSÃO — ONE PUNCH CLOSING */}
        <section id="contato" className="py-28 px-6 border-t border-white/[0.06] relative">
          {/* Spotlight Quente Motivada Centralizada */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.18)_0%,_rgba(217,119,6,0.06)_50%,_transparent_75%)] blur-3xl pointer-events-none -z-10" />

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Tag Monolítica Superior */}
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#C4550A] mb-4 block font-semibold">
              // ACESSO EXCLUSIVO
            </span>

            {/* Título Monumental Gigante */}
            <h2 className="font-podcast-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.88] max-w-4xl">
              QUER SENTAR <br />
              <span className="text-[#C4550A]">NA MESA?</span>
            </h2>

            {/* Subtítulo simples */}
            <p className="text-white/70 text-base sm:text-xl font-normal max-w-2xl mt-8 mb-12 leading-relaxed">
              Grave seu episódio no Estúdio Akedah ou associe sua marca aos líderes de mercado.
            </p>

            {/* Dois CTAs Lado a Lado com Pesos Contrastantes */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* CTA Primário: Sólido Terracota */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#C4550A] hover:bg-[#b04b08] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-2xl shadow-[#C4550A]/35 transition-all duration-300"
              >
                <span>Agendar Episódio</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>

              {/* CTA Secundário: Linha / Link Editorial com Seta Diagonal */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-5 border border-white/20 hover:border-white/50 bg-transparent text-white/80 hover:text-white font-mono text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              >
                <span>Media Kit</span>
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
