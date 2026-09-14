import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PodcastAtmosphere from "@/components/podcast/PodcastAtmosphere";
import studioBannerImg from "@/assets/akedah-podcast-studio.jpg";
import { WHATSAPP_URL } from "@/data/services";

const Podcast = () => {
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
    <div className="min-h-screen bg-[#1C0F0A] text-white selection:bg-[#C4550A] selection:text-white relative">
      <SEO
        title="Akedah Podcast | Assista ao Vivo e Calendário"
        description="Akedah Podcast: assista ao vivo, veja o calendário de entrevistas, confira as fotos dos episódios e acompanhe nas redes sociais."
        url="https://estudioakedah.com/podcast"
        schema={schema}
      />
      <Navbar isPodcastPage={true} />

      {/* Atmosfera Moderna: Fundo #1C0F0A, Gradiente Radial e Micro-ruído SVG Inline */}
      <PodcastAtmosphere />

      <main className="relative z-10 overflow-hidden">
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[92vh] md:min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-transparent pt-28 pb-16">
          {/* Background Image com Gradientes #1C0F0A */}
          <div className="absolute inset-0 z-0">
            <img 
              src={studioBannerImg} 
              alt="Akedah Podcast - Estúdio" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C0F0A] via-[#1C0F0A]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A] via-transparent to-[#1C0F0A]/50" />
          </div>

          {/* Conteúdo posicionado à esquerda */}
          <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex justify-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-left flex flex-col items-start"
            >
              <div className="flex items-center justify-start gap-4 mb-6">
                <span className="text-[#C4550A] text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-mono font-medium">
                  Canal Audiovisual • Estúdio Akedah
                </span>
              </div>

              <h1 className="font-podcast-display text-[52px] sm:text-[76px] md:text-[96px] font-extrabold leading-[0.9] tracking-tight mb-8">
                <span className="block text-white">Akedah</span>
                <span className="block text-[#C4550A]">Podcast</span>
              </h1>

              <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl text-left mb-10">
                O palco de autoridade executiva onde empresários e líderes do mercado debatem estratégia comercial, expansão de negócios e governança em alto nível.
              </p>

              {/* Hierarquia de Ação no Hero */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* CTA Primário com micro-brilho no hover e ícone Play SVG */}
                <a
                  href="#destaque"
                  className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C4550A] hover:bg-[#b04b08] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#C4550A]/25 hover:shadow-[#C4550A]/40 border-t border-t-white/30 overflow-hidden group transition-all duration-300"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="relative z-10">Assistir Episódio Mais Recente</span>
                </a>

                {/* CTA Secundário com outline sutil */}
                <a
                  href="#calendario"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:border-white/40 bg-transparent hover:bg-white/[0.04] text-white/85 hover:text-white font-mono text-xs font-medium uppercase tracking-wider transition-all duration-300"
                >
                  <span>Ver Grade de Convidados</span>
                  <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. SEÇÃO DE EPISÓDIO EM DESTAQUE (ÚLTIMO LANÇAMENTO) */}
        <section id="destaque" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.18em] mb-2 block">
                Em Destaque Nesta Semana
              </span>
              <h2 className="font-podcast-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Último Lançamento
              </h2>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>DISPONÍVEL AGORA EM 4K HDR</span>
            </div>
          </div>

          <div className="podcast-card rounded-[28px] overflow-hidden p-6 sm:p-8 md:p-10 border-t border-t-white/20 border-b border-b-white/5 border-x border-x-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Lado Esquerdo: Thumbnail 16:9 realística com botão de play pulsante */}
              <div className="lg:col-span-7 relative group">
                <div className="relative aspect-video rounded-[20px] overflow-hidden bg-black/60 border border-white/10 shadow-2xl">
                  <img
                    src={studioBannerImg}
                    alt="Episódio em Destaque - Akedah Podcast"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay gradiente suave */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                  {/* Botão de play pulsante */}
                  <a
                    href="#player"
                    className="absolute inset-0 flex items-center justify-center group/play cursor-pointer z-20"
                    aria-label="Assistir episódio em destaque"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-20 h-20 rounded-full bg-[#C4550A]/40 animate-ping pointer-events-none" />
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C4550A] text-white flex items-center justify-center shadow-xl shadow-[#C4550A]/40 group-hover/play:scale-110 group-hover/play:bg-[#d96112] transition-all duration-300 border-t border-t-white/30">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>

                  {/* Badges flutuantes na thumbnail */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="bg-black/75 backdrop-blur-md text-white text-[11px] font-mono font-medium px-3 py-1.5 rounded-full border border-white/10">
                      4K HDR
                    </span>
                    <span className="bg-[#C4550A]/90 backdrop-blur-md text-white text-[11px] font-mono font-medium px-3 py-1.5 rounded-full border border-white/20">
                      EP #14
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="bg-black/80 backdrop-blur-md text-white/90 text-xs font-mono px-3 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#C4550A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      1h 24min
                    </span>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Informações do Episódio */}
              <div className="lg:col-span-5 flex flex-col justify-center text-left">
                {/* Metadados: EP + Duração */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#C4550A] font-mono text-xs font-bold uppercase tracking-[0.18em] bg-[#C4550A]/10 px-3 py-1 rounded-md border border-[#C4550A]/30">
                    EPISÓDIO #14
                  </span>
                  <span className="text-white/40 text-xs font-mono">•</span>
                  <span className="text-white/60 font-mono text-xs tracking-wider">
                    1h 24min de conversa
                  </span>
                </div>

                {/* Título e Tema do Episódio */}
                <h3 className="font-podcast-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Como Construir Previsibilidade Comercial em Operações B2B de Alto Valor
                </h3>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  Uma conversa aprofundada sobre estruturação de funis consultivos, retenção de clientes corporativos e o papel da autoridade executiva na conversão de grandes contratos.
                </p>

                {/* Tags do Convidado (Cargo / Empresa) */}
                <div className="flex flex-wrap items-center gap-2.5 mb-8 pb-6 border-b border-white/[0.08]">
                  <span className="text-white/50 text-xs font-mono uppercase tracking-wider">Convidado:</span>
                  <span className="bg-white/[0.05] border border-white/10 text-white/90 text-xs font-mono px-3 py-1 rounded-full">
                    Daniel Silva
                  </span>
                  <span className="bg-white/[0.05] border border-white/10 text-white/60 text-xs font-mono px-3 py-1 rounded-full">
                    Fundador &amp; Estrategista
                  </span>
                  <span className="bg-white/[0.05] border border-white/10 text-[#C4550A] text-xs font-mono px-3 py-1 rounded-full">
                    Estúdio Akedah
                  </span>
                </div>

                {/* Links diretos para YouTube e Spotify */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.youtube.com/@EstudioAkedah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#C4550A] hover:bg-[#a84508] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#C4550A]/20 transition-all border-t border-t-white/25"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>Ver no YouTube</span>
                  </a>

                  <a
                    href="https://open.spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 hover:border-white/30 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <svg className="w-4 h-4 fill-current text-[#1DB954]" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span>Ouvir no Spotify</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PLAYER YOUTUBE */}
        <section id="player" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.18em] mb-4 block">
                Ao Vivo & Gravado
              </span>
              <h2 className="font-podcast-display text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Assista ao <span className="text-[#C4550A]">Akedah Podcast</span> direto do estúdio.
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                Toda entrevista fica disponível aqui logo após a gravação, direto do nosso canal oficial no YouTube com qualidade 4K.
              </p>
              <a
                href="https://www.youtube.com/@EstudioAkedah"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium px-8"
              >
                Inscrever-se no Canal
              </a>
            </div>
            <div className="lg:w-2/3 w-full aspect-video rounded-[24px] overflow-hidden shadow-2xl bg-black border-t border-t-white/20 border-b border-b-white/5 border-x border-x-white/10">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=PL_J8x7L_Lp0C_U7A0YyYV0QGZ4I8iN7x5" 
                title="Akedah Podcast"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* 4. CALENDÁRIO SECTION */}
        <section id="calendario" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-16">
            <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.18em] mb-4 block">
              Programação
            </span>
            <h2 className="font-podcast-display text-3xl md:text-5xl font-bold mb-6 text-white">
              Próximas <span className="text-[#C4550A]">entrevistas</span> confirmadas.
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
              Datas e horários das próximas gravações. Acompanhe ao vivo ou agende a sua participação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { data: "15/08", hora: "19h", convidado: "EM BREVE", tema: "ESTRATÉGIA DE CRESCIMENTO" },
              { data: "22/08", hora: "19h", convidado: "EM BREVE", tema: "MARKETING DIGITAL" },
              { data: "29/08", hora: "19h", convidado: "EM BREVE", tema: "GESTÃO E ESCALA" },
              { data: "05/09", hora: "19h", convidado: "EM BREVE", tema: "VENDAS B2B" }
            ].map((item, idx) => (
              <div key={idx} className="podcast-card rounded-[20px] p-8 flex flex-col justify-between hover:border-t-white/30 hover:border-b-white/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-podcast-display text-[#C4550A] font-bold text-3xl">{item.data}</span>
                  <span className="font-mono text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/5">{item.hora}</span>
                </div>
                <h3 className="font-podcast-display text-xl font-bold mb-2 text-white">{item.convidado}</h3>
                <p className="font-mono text-xs text-white/40 uppercase tracking-[0.18em]">{item.tema}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-sm text-white/40 font-mono tracking-wide">
            Datas sujeitas a alteração. A confirmação de cada episódio é publicada com antecedência no Instagram.
          </p>
        </section>

        {/* 5. REDES SOCIAIS SECTION */}
        <section id="redes" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-16">
            <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.18em] mb-4 block">
              Redes Sociais
            </span>
            <h2 className="font-podcast-display text-3xl md:text-5xl font-bold mb-6 text-white">
              Acompanhe o Podcast em <span className="text-[#C4550A]">todas as plataformas</span>.
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Cortes, bastidores e conteúdo exclusivo em cada rede. Clique no card e acompanhe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <a href="https://www.youtube.com/@EstudioAkedah" target="_blank" rel="noopener noreferrer" className="podcast-card rounded-[20px] overflow-hidden relative group h-80 flex flex-col justify-end p-6 hover:border-[#C4550A]/50">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="YouTube" />
              <div className="relative z-20">
                <span className="text-[#C4550A] font-mono text-xs font-medium uppercase tracking-[0.18em] mb-1 block">YouTube</span>
                <span className="font-podcast-display text-xl font-bold text-white">Canal de Episódios</span>
              </div>
            </a>

            <a href="https://www.instagram.com/estudioakedah" target="_blank" rel="noopener noreferrer" className="podcast-card rounded-[20px] overflow-hidden relative group h-80 flex flex-col justify-end p-6 hover:border-[#C4550A]/50">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Instagram" />
              <div className="relative z-20">
                <span className="text-[#C4550A] font-mono text-xs font-medium uppercase tracking-[0.18em] mb-1 block">Instagram</span>
                <span className="font-podcast-display text-xl font-bold text-white">Bastidores e Cortes</span>
              </div>
            </a>

            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="podcast-card rounded-[20px] overflow-hidden relative group h-80 flex flex-col justify-end p-6 hover:border-[#C4550A]/50">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Spotify" />
              <div className="relative z-20">
                <span className="text-[#C4550A] font-mono text-xs font-medium uppercase tracking-[0.18em] mb-1 block">Spotify</span>
                <span className="font-podcast-display text-xl font-bold text-white">Ouça Onde Estiver</span>
              </div>
            </a>

            <a href="https://www.tiktok.com/@estudioakedah" target="_blank" rel="noopener noreferrer" className="podcast-card rounded-[20px] overflow-hidden relative group h-80 flex flex-col justify-end p-6 hover:border-[#C4550A]/50">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="TikTok" />
              <div className="relative z-20">
                <span className="text-[#C4550A] font-mono text-xs font-medium uppercase tracking-[0.18em] mb-1 block">TikTok</span>
                <span className="font-podcast-display text-xl font-bold text-white">Dicas Rápidas</span>
              </div>
            </a>
          </div>
        </section>

        {/* 6. PATROCINADORES SECTION */}
        <section id="patrocinadores" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-16">
            <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.18em] mb-4 block">
              Marcas & Parcerias
            </span>
            <h2 className="font-podcast-display text-3xl md:text-5xl font-bold mb-6 text-white">
              Patrocinadores <span className="text-[#C4550A]">Oficiais</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
              Marcas e empresas visionárias que apoiam o ecossistema de conteúdo e estratégia do Akedah Podcast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="podcast-card rounded-[20px] p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[#C4550A] text-xs font-mono font-medium uppercase tracking-[0.18em] block mb-3">Cota Master</span>
                <h3 className="font-podcast-display text-2xl font-bold text-white mb-2">Exclusividade de Segmento</h3>
                <p className="text-white/50 text-sm leading-relaxed">Inserção de vinheta, menções no episódio e cortes verticais patrocinados.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#C4550A] text-xs font-mono font-bold uppercase tracking-[0.18em] hover:text-white flex items-center gap-2 mt-6">
                SEJA UM PATROCINADOR →
              </a>
            </div>

            <div className="podcast-card rounded-[20px] p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[#C4550A] text-xs font-mono font-medium uppercase tracking-[0.18em] block mb-3">Cota Naming Rights</span>
                <h3 className="font-podcast-display text-2xl font-bold text-white mb-2">Presença em Cenário</h3>
                <p className="text-white/50 text-sm leading-relaxed">Exibição de marca na mesa de gravação, canecas e telão de LED do estúdio.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#C4550A] text-xs font-mono font-bold uppercase tracking-[0.18em] hover:text-white flex items-center gap-2 mt-6">
                SEJA UM PATROCINADOR →
              </a>
            </div>

            <div className="podcast-card rounded-[20px] p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[#C4550A] text-xs font-mono font-medium uppercase tracking-[0.18em] block mb-3">Cota Episódio</span>
                <h3 className="font-podcast-display text-2xl font-bold text-white mb-2">Episódio Dedicado</h3>
                <p className="text-white/50 text-sm leading-relaxed">Gravação de episódio temático abordando os cases e soluções da sua marca.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#C4550A] text-xs font-mono font-bold uppercase tracking-[0.18em] hover:text-white flex items-center gap-2 mt-6">
                SEJA UM PATROCINADOR →
              </a>
            </div>
          </div>
        </section>

        {/* 7. CTA PARTICIPAR / CONTATO */}
        <section id="contato" className="py-28 px-6 border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto podcast-card rounded-[32px] p-10 md:p-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
            <div>
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.18em] mb-4 block">Seja um Convidado</span>
              <h2 className="font-podcast-display text-3xl md:text-6xl font-bold text-white leading-tight">
                Grave seu episódio no <br />
                <span className="text-[#C4550A]">Estúdio Akedah.</span>
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-premium px-12">
                Agendar Gravação
              </a>
              <p className="text-white/40 text-xs font-mono tracking-wide">Resposta rápida em horário comercial.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Podcast;
