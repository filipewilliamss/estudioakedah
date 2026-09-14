import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PodcastAtmosphere from "@/components/podcast/PodcastAtmosphere";
import studioBannerImg from "@/assets/akedah-podcast-studio.jpg";
import founderPicture from "@/assets/akedah-founder.jpg";
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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

        {/* 4. PROGRAMAÇÃO & CONVIDADOS SECTION */}
        <section id="calendario" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left max-w-2xl">
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.18em] mb-3 block">
                Programação & Convidados
              </span>
              <h2 className="font-podcast-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Próximas <span className="text-[#C4550A]">entrevistas</span> confirmadas.
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mt-3">
                Líderes de mercado, tomadores de decisão e estrategistas no centro do debate executivo. Acompanhe as transmissões ao vivo.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-white/80 bg-white/[0.04] border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Gravações semanais às quintas • 19h
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                status: "Ao Vivo Esta Semana",
                statusType: "live" as const,
                data: "15/08",
                hora: "19h",
                guestName: "Daniel Silva",
                guestRole: "Fundador & Estrategista B2B",
                topic: "Engenharia de Vendas Previsíveis e Retenção Corporativa",
                photo: founderPicture,
                isConfidential: false,
              },
              {
                status: "Confirmado",
                statusType: "confirmed" as const,
                data: "22/08",
                hora: "19h",
                guestName: "Convidado Confidencial",
                guestRole: "VP de Operações • Tech Enterprise",
                topic: "Infraestrutura Escalável e Governança em Startups Unicórnio",
                isConfidential: true,
              },
              {
                status: "Confirmado",
                statusType: "confirmed" as const,
                data: "29/08",
                hora: "19h",
                guestName: "Convidado Confidencial",
                guestRole: "CEO & Conselheiro de Administração",
                topic: "M&A, Fusões Estratégicas e Posicionamento de Marca no Brasil",
                isConfidential: true,
              },
              {
                status: "Gravado",
                statusType: "recorded" as const,
                data: "05/09",
                hora: "19h",
                guestName: "Convidado Confidencial",
                guestRole: "Diretor Comercial • FinTech B2B",
                topic: "Playbooks de Vendas Consultivas e Fechamentos de 7 Dígitos",
                isConfidential: true,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="podcast-card rounded-[24px] p-6 sm:p-7 flex flex-col justify-between group hover:border-[#C4550A]/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Glow de destaque no episódio 'Ao Vivo' */}
                {item.statusType === "live" && (
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#C4550A]/15 rounded-full blur-2xl pointer-events-none" />
                )}

                {/* Top Header: Badge de Status + Chip de Data/Hora */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    {/* Status Badge */}
                    {item.statusType === "live" ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {item.status}
                      </span>
                    ) : item.statusType === "confirmed" ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#C4550A]/10 text-[#C4550A] border border-[#C4550A]/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C4550A]" />
                        {item.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {item.status}
                      </span>
                    )}

                    {/* Chip Data / Horário */}
                    <div className="flex items-center gap-1.5 text-xs font-mono text-white/70 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-full">
                      <span className="text-white font-bold">{item.data}</span>
                      <span className="text-white/30">•</span>
                      <span className="text-white/60">{item.hora}</span>
                    </div>
                  </div>

                  {/* Guest Section (Avatar/Silhueta + Nome + Cargo) */}
                  <div className="flex items-start gap-4 mb-6">
                    {item.isConfidential ? (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/[0.08] to-black/80 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#C4550A]/40 transition-colors flex-shrink-0 shadow-inner">
                        <div className="absolute inset-0 bg-radial-gradient from-white/[0.06] to-transparent pointer-events-none" />
                        <svg
                          className="w-7 h-7 text-white/25 group-hover:text-white/40 transition-colors mt-0.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-[8px] font-mono tracking-widest text-white/40 uppercase mt-0.5">
                          SIGILO
                        </span>
                      </div>
                    ) : (
                      <div className="relative flex-shrink-0">
                        <img
                          src={item.photo}
                          alt={item.guestName}
                          className="w-16 h-16 rounded-2xl object-cover border border-white/15 ring-2 ring-[#C4550A]/40 shadow-lg"
                        />
                        <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-[#1C0F0A]" title="Confirmado" />
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <h3 className={`font-podcast-display text-lg font-bold leading-snug ${item.isConfidential ? "text-white/85 tracking-normal italic" : "text-white"}`}>
                        {item.guestName}
                      </h3>
                      <p className="font-mono text-xs text-[#C4550A] tracking-wider mt-1.5 leading-tight">
                        {item.guestRole}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Topic / Pauta Section */}
                <div className="pt-4 border-t border-white/[0.08] mt-auto">
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/40 block mb-1.5">
                    Pauta do Episódio
                  </span>
                  <p className="font-podcast-display text-sm font-semibold text-white/80 group-hover:text-white transition-colors leading-relaxed line-clamp-2">
                    "{item.topic}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-xs font-mono text-white/40">
            <span>Datas e participantes sujeitos a alterações com aviso prévio nas redes oficiais.</span>
            <a
              href="https://www.instagram.com/estudioakedah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4550A] hover:text-white transition-colors underline decoration-[#C4550A]/40 underline-offset-4"
            >
              Acompanhar anúncios no Instagram →
            </a>
          </div>
        </section>

        {/* 5. PLATAFORMAS DE DISTRIBUIÇÃO SECTION */}
        <section id="redes" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="text-left max-w-2xl">
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.18em] mb-3 block">
                Canais de Distribuição
              </span>
              <h2 className="font-podcast-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Acompanhe o Podcast em <span className="text-[#C4550A]">todas as plataformas</span>.
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mt-3">
                Episódios completos em 4K HDR, áudio imersivo e pílulas diárias de inteligência comercial onde você estiver.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-white/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Multiplataforma • Novos cortes diariamente</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "YouTube",
                url: "https://www.youtube.com/@EstudioAkedah",
                formatTag: "Episódios na Íntegra em 4K",
                description: "Transmissões ao vivo semanais e episódios gravados em 4K HDR no estúdio.",
                actionLabel: "Acessar Canal Oficial",
                tagColor: "text-red-400",
                hoverBorder: "hover:border-red-500/40",
                hoverShadow: "hover:shadow-[0_8px_32px_rgba(239,68,68,0.14)]",
                ambientGlow: "bg-red-500/15",
                iconBg: "bg-red-500/10 text-red-500 group-hover:bg-red-500/20",
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
              },
              {
                name: "Spotify",
                url: "https://open.spotify.com",
                formatTag: "Áudio Imersivo no Carro",
                description: "Distribuição contínua em alta fidelidade para ouvir em viagens, trânsito ou rotina.",
                actionLabel: "Ouvir no Spotify",
                tagColor: "text-emerald-400",
                hoverBorder: "hover:border-emerald-500/40",
                hoverShadow: "hover:shadow-[0_8px_32px_rgba(16,185,129,0.14)]",
                ambientGlow: "bg-emerald-500/15",
                iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20",
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308a.747.747 0 0 1-1.028.248c-2.813-1.718-6.353-2.107-10.524-1.155a.75.75 0 0 1-.336-1.462c4.564-1.042 8.49-.602 11.64 1.341a.749.749 0 0 1 .248 1.028zm1.47-3.266a.936.936 0 0 1-1.287.308c-3.22-1.979-8.128-2.552-11.936-1.396a.937.937 0 0 1-.55-1.79c4.354-1.321 9.775-.683 13.465 1.591a.936.936 0 0 1 .308 1.287zm.126-3.41c-3.86-2.292-10.228-2.503-13.899-1.388a1.124 1.124 0 1 1-.652-2.152c4.225-1.282 11.26-1.033 15.717 1.613a1.124 1.124 0 1 1-1.166 1.927z" />
                  </svg>
                ),
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/estudioakedah",
                formatTag: "Bastidores & Cortes Oficiais",
                description: "Teasers cinematográficos, bastidores dos convidados e novidades da semana.",
                actionLabel: "Seguir no Instagram",
                tagColor: "text-pink-400",
                hoverBorder: "hover:border-pink-500/40",
                hoverShadow: "hover:shadow-[0_8px_32px_rgba(236,72,153,0.14)]",
                ambientGlow: "bg-pink-500/15",
                iconBg: "bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20",
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
              },
              {
                name: "TikTok",
                url: "https://www.tiktok.com/@estudioakedah",
                formatTag: "Pílulas Diárias de Insights",
                description: "Cortes verticais rápidos com as falas e insights mais contundentes de cada convidado.",
                actionLabel: "Assistir Pílulas",
                tagColor: "text-cyan-400",
                hoverBorder: "hover:border-cyan-400/40",
                hoverShadow: "hover:shadow-[0_8px_32px_rgba(6,182,212,0.14)]",
                ambientGlow: "bg-cyan-500/15",
                iconBg: "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20",
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.48V8.82a8.28 8.28 0 0 0 4.84 1.57v-3.7z" />
                  </svg>
                ),
              },
            ].map((platform, idx) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-[24px] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 overflow-hidden ${platform.hoverBorder} ${platform.hoverShadow}`}
              >
                {/* Glow sutil ambiente colorido no hover */}
                <div className={`absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${platform.ambientGlow}`} />

                <div>
                  {/* Top: Ícone Oficial + Link Arrow */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 transition-colors duration-300 ${platform.iconBg}`}>
                      {platform.icon}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>

                  {/* Formato / Métrica Tag */}
                  <span className={`text-[11px] font-mono font-semibold uppercase tracking-wider block mb-2 relative z-10 ${platform.tagColor}`}>
                    {platform.formatTag}
                  </span>

                  {/* Nome da Plataforma */}
                  <h3 className="font-podcast-display text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors relative z-10">
                    {platform.name}
                  </h3>

                  {/* Descrição do formato */}
                  <p className="text-white/50 text-sm leading-relaxed mb-6 relative z-10">
                    {platform.description}
                  </p>
                </div>

                {/* Rodapé do Card com CTA */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-medium text-white/50 group-hover:text-white transition-colors relative z-10">
                  <span>{platform.actionLabel}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* 6. CTA PARTICIPAR / CONTATO */}
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

        {/* 7. BANNER EDITORIAL DE MEDIA KIT (DISCRETO, ANTES DO RODAPÉ) */}
        <section id="mediakit" className="py-16 px-6 border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto podcast-card rounded-[28px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-[#C4550A]/30 transition-all relative overflow-hidden">
            {/* Glow sutil ambiente */}
            <div className="absolute top-0 right-0 w-96 h-48 bg-[#C4550A]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl text-center md:text-left relative z-10">
              <span className="text-[#C4550A] text-[11px] font-mono font-medium uppercase tracking-[0.18em] mb-3 block">
                Oportunidades de Parceria
              </span>
              <h3 className="font-podcast-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                Sua marca ao lado dos maiores nomes do mercado
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                O Akedah Podcast conecta líderes e tomadores de decisão. Solicite nosso Media Kit para cotas de patrocínio.
              </p>
            </div>

            <div className="flex-shrink-0 relative z-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-mono font-bold tracking-[0.16em] uppercase text-white bg-white/[0.06] hover:bg-[#C4550A] border border-white/15 hover:border-[#C4550A] transition-all duration-300 shadow-md group"
              >
                <span>Acessar Media Kit Comercial</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
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
