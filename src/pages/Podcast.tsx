import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-[#F5E9CB] text-[#42362E]">
      <style>
        {`
          .podcast-leather-texture {
            background-color: #F5E9CB;
            background-image: url("https://www.transparenttextures.com/patterns/leather.png");
            background-repeat: repeat;
            position: relative;
          }
          .podcast-title {
            color: #C4550A;
            font-family: 'DarkenJellybean', sans-serif;
            letter-spacing: 0.08em;
            position: relative;
            z-index: 1;
            text-transform: uppercase;
          }
          .podcast-heading-font {
            font-family: 'DarkenJellybean', sans-serif;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .podcast-body-font {
            font-family: 'BebasNeue', sans-serif;
          }
          .podcast-eyebrow {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            letter-spacing: 0.1em;
            color: #C4550A;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
          }
          .podcast-eyebrow::before {
            content: attr(data-n);
            font-family: 'Montserrat', sans-serif;
            font-size: 0.65rem;
            font-weight: 700;
            background: #C4550A;
            color: #fff;
            padding: 2px 7px;
            border-radius: 6px;
          }
          .podcast-btn-or {
            background: #E2650E;
            color: #fff;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 14px 30px;
            border-radius: 100px;
            transition: all 0.2s;
          }
          .podcast-btn-or:hover {
            background: #a84508;
            transform: translateY(-2px);
          }
          .podcast-btn-ghost {
            background: transparent;
            color: #42362E;
            border: 1px solid rgba(66, 54, 46, 0.28);
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 13px 29px;
            border-radius: 100px;
            transition: all 0.2s;
          }
          .podcast-btn-ghost:hover {
            background: rgba(66, 54, 46, 0.05);
          }
          .podcast-sec-h2 {
            font-family: 'Montserrat', sans-serif;
            font-size: clamp(1.7rem, 3.4vw, 3.4rem);
            font-weight: 900;
            line-height: 1.05;
            letter-spacing: -0.04em;
            color: #2D2727;
          }
          .podcast-sec-h2 em {
            font-style: normal;
            color: #C4550A;
          }
          .podcast-sec-h2--w {
            color: #fff;
          }
          .podcast-card {
            background: #42362E10;
            border: 1px solid rgba(45, 39, 39, 0.1);
            border-radius: 20px;
            padding: 40px;
            transition: all 0.3s;
          }
          .podcast-card:hover {
            background: #42362E18;
            transform: translateY(-5px);
          }
        `}
      </style>
      <SEO
        title="Akedah Podcast | Assista ao Vivo e Calendário"
        description="Akedah Podcast: assista ao vivo, veja o calendário de entrevistas, confira as fotos dos episódios e acompanhe nas redes sociais."
        url="https://estudioakedah.com/podcast"
        schema={schema}
      />
      <Navbar isPodcastPage={true} />

      <main className="podcast-leather-texture overflow-hidden">
        {/* HERO SECTION */}
        <section className="pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              src="https://wqxuprmlsapiucjxleih.supabase.co/storage/v1/object/public/files/9708035d-187a-4a8c-bdf4-3f7fce313c0b-Ativo_7.png" 
              alt="Akedah Podcast" 
              className="h-24 md:h-32 mb-8"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="podcast-title leading-[1.1] text-[clamp(32px,5vw,70px)] mb-8 max-w-5xl"
            >
              ONDE A ESTRATÉGIA <br /> ENCONTRA A VOZ
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="podcast-body-font text-xl md:text-2xl max-w-2xl mb-10 opacity-70 leading-relaxed"
            >
              Assista ao vivo, acompanhe os bastidores e confira a agenda dos próximos episódios. O podcast oficial do Estúdio Akedah.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="https://www.youtube.com/@EstudioAkedah" target="_blank" rel="noopener noreferrer" className="podcast-btn-or">
                ASSISTIR NO YOUTUBE
              </a>
              <a href="#calendario" className="podcast-btn-ghost">
                VER CALENDÁRIO
              </a>
            </motion.div>
          </div>
        </section>

        {/* BANNERS SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#calendario" className="podcast-card flex flex-col items-start text-left">
              <span className="podcast-body-font text-[#C4550A] text-sm uppercase tracking-widest mb-4">Próximas entrevistas</span>
              <span className="podcast-heading-font text-2xl mb-6">Clique aqui para o calendário de entrevistas.</span>
              <span className="podcast-body-font flex items-center gap-2 text-sm">VER DATAS E HORÁRIOS →</span>
            </a>
            <a href="https://www.youtube.com/@EstudioAkedah" target="_blank" className="podcast-card flex flex-col items-start text-left bg-[#C4550A] !text-white">
              <span className="podcast-body-font text-white/80 text-sm uppercase tracking-widest mb-4">Canal Oficial</span>
              <span className="podcast-heading-font text-2xl mb-6">Assista aos episódios completos no YouTube.</span>
              <span className="podcast-body-font flex items-center gap-2 text-sm">ACESSAR CANAL →</span>
            </a>
            <a href="https://www.instagram.com/podcastakedah" target="_blank" className="podcast-card flex flex-col items-start text-left">
              <span className="podcast-body-font text-[#C4550A] text-sm uppercase tracking-widest mb-4">Cortes e Bastidores</span>
              <span className="podcast-heading-font text-2xl mb-6">Siga-nos no Instagram para conteúdos exclusivos.</span>
              <span className="podcast-body-font flex items-center gap-2 text-sm">SEGUIR AGORA →</span>
            </a>
          </div>
        </section>

        {/* PLAYER YOUTUBE */}
        <section id="player" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3">
              <div className="podcast-eyebrow" data-n="01">Ao vivo</div>
              <h2 className="podcast-sec-h2 mb-6">Assista ao <em>Akedah Podcast</em> sem sair da página.</h2>
              <p className="podcast-body-font text-lg opacity-70">Toda entrevista fica disponível aqui logo após a gravação, direto do nosso canal no YouTube.</p>
            </div>
            <div className="md:w-2/3 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
              {/* YouTube Embed Placeholder */}
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

        {/* CALENDÁRIO SECTION */}
        <section id="calendario" className="py-24 px-6 bg-[#2B1710] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center md:text-left mb-16">
              <div className="podcast-eyebrow !text-[#F4E9C9] before:!bg-[#F4E9C9] before:!text-[#2B1710]" data-n="02">Calendário</div>
              <h2 className="podcast-sec-h2 !text-white mb-6">Próximas <em>entrevistas</em> do Akedah Podcast.</h2>
              <p className="podcast-body-font text-lg opacity-70">Datas e horários confirmados. Marque na agenda e acompanhe ao vivo.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { data: "15/08", hora: "19h", convidado: "EM BREVE", tema: "ESTRATÉGIA DE CRESCIMENTO" },
                { data: "22/08", hora: "19h", convidado: "EM BREVE", tema: "MARKETING DIGITAL" },
                { data: "29/08", hora: "19h", convidado: "EM BREVE", tema: "GESTÃO E ESCALA" },
                { data: "05/09", hora: "19h", convidado: "EM BREVE", tema: "VENDAS B2B" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="flex justify-between items-center mb-6">
                    <span className="podcast-body-font text-[#E2650E] text-2xl">{item.data}</span>
                    <span className="podcast-body-font opacity-50">{item.hora}</span>
                  </div>
                  <h3 className="podcast-heading-font text-xl mb-2">{item.convidado}</h3>
                  <p className="podcast-body-font text-xs opacity-40 uppercase tracking-widest">{item.tema}</p>
                </div>
              ))}
            </div>
            <p className="podcast-body-font text-center mt-12 text-sm opacity-40">Datas sujeitas a alteração. A confirmação de cada episódio é publicada com antecedência no Instagram.</p>
          </div>
        </section>

        {/* REDES SOCIAIS SECTION */}
        <section id="redes" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-16">
            <div className="podcast-eyebrow" data-n="03">Redes sociais</div>
            <h2 className="podcast-sec-h2 mb-6">Acompanhe o Akedah Podcast <em>em todos os lugares.</em></h2>
            <p className="podcast-body-font text-lg opacity-70">Cortes, bastidores e conteúdo exclusivo em cada rede. Clique no card e siga a gente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <a href="https://www.youtube.com/@EstudioAkedah" target="_blank" className="podcast-card !p-0 overflow-hidden relative group h-80">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="YouTube" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="podcast-body-font text-white text-xs uppercase tracking-widest mb-2 block">YouTube</span>
                <span className="podcast-heading-font text-white text-xl">Canal de Episódios</span>
              </div>
            </a>
            <a href="https://www.instagram.com/podcastakedah" target="_blank" className="podcast-card !p-0 overflow-hidden relative group h-80">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Instagram" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="podcast-body-font text-white text-xs uppercase tracking-widest mb-2 block">Instagram</span>
                <span className="podcast-heading-font text-white text-xl">Bastidores e Cortes</span>
              </div>
            </a>
            <a href="#" className="podcast-card !p-0 overflow-hidden relative group h-80">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Spotify" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="podcast-body-font text-white text-xs uppercase tracking-widest mb-2 block">Spotify</span>
                <span className="podcast-heading-font text-white text-xl">Ouça Onde Estiver</span>
              </div>
            </a>
            <a href="#" className="podcast-card !p-0 overflow-hidden relative group h-80">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="TikTok" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="podcast-body-font text-white text-xs uppercase tracking-widest mb-2 block">TikTok</span>
                <span className="podcast-heading-font text-white text-xl">Dicas Rápidas</span>
              </div>
            </a>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contato" className="py-32 px-6">
          <div className="max-w-7xl mx-auto bg-[#E2650E] rounded-[40px] p-12 md:p-24 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12">
            <div>
              <p className="podcast-body-font text-white/80 text-lg mb-4">Quer participar como convidado?</p>
              <h2 className="podcast-heading-font text-white text-4xl md:text-6xl leading-tight">Fale com a gente e <br /> entre no <em>Akedah Podcast.</em></h2>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
              <a href="/contato" className="bg-white text-[#E2650E] px-12 py-6 rounded-full podcast-body-font font-bold text-xl hover:bg-[#F4E9C9] transition-all">
                MARCAR UMA CONVERSA
              </a>
              <p className="podcast-body-font text-white/60 text-sm">Resposta em até 1 dia útil.</p>
            </div>
          </div>
        </section>
      </main>

      <div className="font-sans">
        <Footer />
      </div>
    </div>
  );
};

export default Podcast;
