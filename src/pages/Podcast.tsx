import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen bg-[#2D1A11] text-white selection:bg-[#C4550A] selection:text-white relative">
      <SEO
        title="Akedah Podcast | Assista ao Vivo e Calendário"
        description="Akedah Podcast: assista ao vivo, veja o calendário de entrevistas, confira as fotos dos episódios e acompanhe nas redes sociais."
        url="https://estudioakedah.com/podcast"
        schema={schema}
      />
      <Navbar isPodcastPage={true} />

      {/* Camada de Textura de Couro em Alto Relevo e Alta Visibilidade */}
      <div 
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 opacity-60 mix-blend-overlay"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/leather.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "260px 260px",
          filter: "contrast(320%) brightness(160%)",
        }}
      />
      {/* Camada de relevo e poros do couro */}
      <div 
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 opacity-35 mix-blend-color-dodge"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/leather.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "260px 260px",
          filter: "invert(1) contrast(350%) brightness(120%)",
        }}
      />

      <main className="relative z-10 overflow-hidden">
        {/* 1. HERO SECTION (Mesmo sistema de card em tela inteira da página Nossa História) */}
        <section className="relative min-h-[92vh] md:min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-transparent pt-28 pb-16">
          {/* Background Image com Gradientes Marrons */}
          <div className="absolute inset-0 z-0">
            <img 
              src={studioBannerImg} 
              alt="Akedah Podcast - Estúdio" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2D1A11] via-[#2D1A11]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D1A11] via-transparent to-[#2D1A11]/50" />
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
                <span className="text-[#C4550A] text-[11px] md:text-[12px] uppercase tracking-[0.5em] font-bold">
                  Canal Audiovisual
                </span>
              </div>

              <h1 className="font-display text-[54px] sm:text-[76px] md:text-[96px] font-[900] leading-[0.88] tracking-[-0.05em] mb-8">
                <span className="block">Akedah</span>
                <span className="text-[#C4550A] italic font-normal block">podcast</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl text-left mb-10">
                Assista ao vivo, acompanhe os bastidores e confira a agenda dos próximos episódios. O podcast oficial sobre estratégia, negócios e autoridade do Estúdio Akedah.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="https://www.youtube.com/@EstudioAkedah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium px-10"
                >
                  Assistir no YouTube
                </a>
                <a href="#calendario" className="btn-premium px-10">
                  Ver Calendário
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. BANNERS SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="#calendario"
              className="group bg-black/25 hover:bg-black/40 border border-white/10 hover:border-[#C4550A]/60 rounded-[20px] p-8 md:p-10 transition-all duration-300 flex flex-col items-start text-left"
            >
              <span className="text-[#C4550A] text-xs font-mono uppercase tracking-[0.25em] mb-4">Próximas entrevistas</span>
              <h3 className="font-display text-2xl font-bold mb-6 text-white group-hover:text-[#C4550A] transition-colors">
                Calendário oficial de gravações e transmissões.
              </h3>
              <span className="font-mono text-xs text-white/50 group-hover:text-white flex items-center gap-2 mt-auto">
                VER DATAS E HORÁRIOS →
              </span>
            </a>

            <a
              href="https://www.youtube.com/@EstudioAkedah"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#C4550A] hover:bg-[#a84508] border border-[#C4550A] rounded-[20px] p-8 md:p-10 transition-all duration-300 flex flex-col items-start text-left text-white shadow-xl shadow-[#C4550A]/20"
            >
              <span className="text-white/80 text-xs font-mono uppercase tracking-[0.25em] mb-4">Canal Oficial</span>
              <h3 className="font-display text-2xl font-bold mb-6 text-white">
                Assista aos episódios completos no YouTube.
              </h3>
              <span className="font-mono text-xs text-white/90 flex items-center gap-2 mt-auto">
                ACESSAR CANAL →
              </span>
            </a>

            <a
              href="https://www.instagram.com/estudioakedah"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black/25 hover:bg-black/40 border border-white/10 hover:border-[#C4550A]/60 rounded-[20px] p-8 md:p-10 transition-all duration-300 flex flex-col items-start text-left"
            >
              <span className="text-[#C4550A] text-xs font-mono uppercase tracking-[0.25em] mb-4">Cortes & Bastidores</span>
              <h3 className="font-display text-2xl font-bold mb-6 text-white group-hover:text-[#C4550A] transition-colors">
                Siga nosso Instagram para cortes e conteúdos rápidos.
              </h3>
              <span className="font-mono text-xs text-white/50 group-hover:text-white flex items-center gap-2 mt-auto">
                SEGUIR AGORA →
              </span>
            </a>
          </div>
        </section>

        {/* 3. PLAYER YOUTUBE */}
        <section id="player" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
                Ao Vivo & Gravado
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Assista ao <span className="text-[#C4550A] italic font-normal">Akedah Podcast</span> direto do estúdio.
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
            <div className="lg:w-2/3 w-full aspect-video rounded-[24px] overflow-hidden shadow-2xl bg-black border border-white/10">
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
            <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
              Programação
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
              Próximas <span className="text-[#C4550A] italic font-normal">entrevistas</span> confirmadas.
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
              <div key={idx} className="bg-black/30 border border-white/10 hover:border-[#C4550A]/50 rounded-[20px] p-8 transition-all duration-300">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-display text-[#C4550A] font-bold text-3xl">{item.data}</span>
                  <span className="font-mono text-sm text-white/50 bg-white/5 px-3 py-1 rounded-full">{item.hora}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-white">{item.convidado}</h3>
                <p className="font-mono text-xs text-white/40 uppercase tracking-wider">{item.tema}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-sm text-white/40 font-mono">
            Datas sujeitas a alteração. A confirmação de cada episódio é publicada com antecedência no Instagram.
          </p>
        </section>

        {/* 5. REDES SOCIAIS SECTION */}
        <section id="redes" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-16">
            <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
              Redes Sociais
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
              Acompanhe o Podcast <span className="text-[#C4550A] italic font-normal">em todas as plataformas.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Cortes, bastidores e conteúdo exclusivo em cada rede. Clique no card e acompanhe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <a href="https://www.youtube.com/@EstudioAkedah" target="_blank" rel="noopener noreferrer" className="rounded-[20px] border border-white/10 overflow-hidden relative group h-80 flex flex-col justify-end p-6">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="YouTube" />
              <div className="relative z-20">
                <span className="text-[#C4550A] font-mono text-xs uppercase tracking-widest mb-1 block">YouTube</span>
                <span className="font-display text-xl font-bold text-white">Canal de Episódios</span>
              </div>
            </a>

            <a href="https://www.instagram.com/estudioakedah" target="_blank" rel="noopener noreferrer" className="rounded-[20px] border border-white/10 overflow-hidden relative group h-80 flex flex-col justify-end p-6">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Instagram" />
              <div className="relative z-20">
                <span className="text-[#C4550A] font-mono text-xs uppercase tracking-widest mb-1 block">Instagram</span>
                <span className="font-display text-xl font-bold text-white">Bastidores e Cortes</span>
              </div>
            </a>

            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="rounded-[20px] border border-white/10 overflow-hidden relative group h-80 flex flex-col justify-end p-6">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Spotify" />
              <div className="relative z-20">
                <span className="text-[#C4550A] font-mono text-xs uppercase tracking-widest mb-1 block">Spotify</span>
                <span className="font-display text-xl font-bold text-white">Ouça Onde Estiver</span>
              </div>
            </a>

            <a href="https://www.tiktok.com/@estudioakedah" target="_blank" rel="noopener noreferrer" className="rounded-[20px] border border-white/10 overflow-hidden relative group h-80 flex flex-col justify-end p-6">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="TikTok" />
              <div className="relative z-20">
                <span className="text-[#C4550A] font-mono text-xs uppercase tracking-widest mb-1 block">TikTok</span>
                <span className="font-display text-xl font-bold text-white">Dicas Rápidas</span>
              </div>
            </a>
          </div>
        </section>

        {/* 6. CTA PARTICIPAR */}
        <section id="contato" className="py-28 px-6">
          <div className="max-w-7xl mx-auto bg-black/40 border border-white/10 rounded-[32px] p-10 md:p-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
            <div>
              <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">Seja um Convidado</span>
              <h2 className="font-display text-3xl md:text-6xl font-bold text-white leading-tight">
                Grave seu episódio no <br />
                <span className="text-[#C4550A] italic font-normal">Estúdio Akedah.</span>
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-premium px-12">
                Agendar Gravação
              </a>
              <p className="text-white/40 text-xs font-mono">Resposta rápida em horário comercial.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Podcast;
