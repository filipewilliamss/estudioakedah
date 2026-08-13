import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import studioImage from "@/assets/akedah-podcast-studio.jpg";

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
          .podcast-leather-texture::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #F5E9CB;
            opacity: 0.15;
            pointer-events: none;
            z-index: 0;
          }
          .podcast-title {
            color: #C4550A;
            font-family: 'DarkenJellybean', sans-serif;
            letter-spacing: 0.08em;
            position: relative;
            z-index: 1;
            text-transform: uppercase;
          }
          .podcast-accent {
            color: #C4550A;
          }
          .podcast-container {
            position: relative;
            z-index: 1;
          }
          .podcast-container p, 
          .podcast-container span,
          .podcast-container li,
          .podcast-container a {
            font-family: 'BebasNeue', sans-serif;
          }
          .podcast-container p,
          .podcast-container li {
            color: #42362E;
          }
          .podcast-heading-font {
            font-family: 'DarkenJellybean', sans-serif;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .podcast-eyebrow {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            letter-spacing: 0.1em;
            color: #C4550A;
            display: flex;
            align-items: center;
            gap: 14px;
            text-transform: uppercase;
          }
          .podcast-eyebrow::before, .podcast-eyebrow::after {
            content: '';
            width: 32px;
            height: 1px;
            background: #C4550A;
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
        `}
      </style>
      <SEO
        title="Akedah Podcast | Assista ao Vivo e Calendário"
        description="Akedah Podcast: assista ao vivo, veja o calendário de entrevistas, confira as fotos dos episódios e acompanhe nas redes sociais."
        url="https://estudioakedah.com/podcast"
        schema={schema}
      />
      <Navbar isPodcastPage={true} />

      <main className="podcast-leather-texture pt-40 pb-24">
        <div className="container-editorial podcast-container text-center">
          {/* Hero Section from HTML */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="podcast-eyebrow mb-6">Podcast Akedah</div>
            <h1 className="podcast-title leading-[1.1] text-[clamp(40px,6vw,90px)] mb-6 max-w-4xl">
              ONDE A ESTRATÉGIA <br /> ENCONTRA A VOZ
            </h1>
            <p className="text-xl max-w-2xl mb-10 opacity-80 leading-relaxed">
              Assista ao vivo, acompanhe os bastidores e confira a agenda dos próximos episódios. O podcast oficial do Estúdio Akedah.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              <a href="https://www.youtube.com/@EstudioAkedah" target="_blank" rel="noopener noreferrer" className="podcast-btn-or">
                ASSISTIR NO YOUTUBE
              </a>
              <a href="#calendario" className="podcast-btn-ghost">
                VER CALENDÁRIO
              </a>
            </div>
          </motion.div>

          {/* Calendário Section */}
          <section id="calendario" className="mt-32 text-left">
            <h2 className="podcast-heading-font text-4xl text-[#C4550A] mb-12 text-center underline decoration-2 underline-offset-8">CALENDÁRIO DE ENTREVISTAS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { data: "15/08", hora: "19:00", convidado: "Em breve", tema: "Estratégia e Escala" },
                { data: "22/08", hora: "19:00", convidado: "Em breve", tema: "Marketing de Resposta Direta" },
                { data: "29/08", hora: "19:00", convidado: "Em breve", tema: "Cultura e Branding" }
              ].map((item, index) => (
                <div key={index} className="bg-[#42362E]/5 p-8 rounded-2xl border border-[#42362E]/10 hover:bg-[#42362E]/10 transition-colors">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[#C4550A] font-bold text-2xl">{item.data}</span>
                    <span className="opacity-60 font-bold">{item.hora}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.convidado}</h3>
                  <p className="opacity-70 text-lg uppercase tracking-wide">{item.tema}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fotos e Galeria */}
          <section className="mt-40">
            <h2 className="podcast-heading-font text-4xl text-[#C4550A] mb-12 text-center underline decoration-2 underline-offset-8">NOS BASTIDORES</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-[#42362E]/10 rounded-xl overflow-hidden">
                <img src={studioImage} alt="Estúdio Akedah" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="aspect-square bg-[#42362E]/10 rounded-xl overflow-hidden mt-8 md:mt-12">
                <div className="w-full h-full bg-[#C4550A]/20 flex items-center justify-center text-[#C4550A] font-bold">EM BREVE</div>
              </div>
              <div className="aspect-square bg-[#42362E]/10 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-[#42362E]/10 flex items-center justify-center opacity-40">FOTO EPISÓDIO</div>
              </div>
              <div className="aspect-square bg-[#42362E]/10 rounded-xl overflow-hidden mt-8 md:mt-12">
                <div className="w-full h-full bg-[#C4550A]/20 flex items-center justify-center text-[#C4550A] font-bold">EM BREVE</div>
              </div>
            </div>
          </section>

          {/* Onde Ouvir Section */}
          <section className="mt-40 py-20 bg-[#42362E]/5 rounded-3xl px-8">
            <h2 className="podcast-heading-font text-4xl text-[#C4550A] mb-12 text-center">ACOMPANHE EM TODAS AS PLATAFORMAS</h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-80">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#C4550A]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">YT</span>
                </div>
                <span className="font-bold tracking-widest">YOUTUBE</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#C4550A]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">SP</span>
                </div>
                <span className="font-bold tracking-widest">SPOTIFY</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#C4550A]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">AP</span>
                </div>
                <span className="font-bold tracking-widest">APPLE</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#C4550A]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">IN</span>
                </div>
                <span className="font-bold tracking-widest">INSTAGRAM</span>
              </div>
            </div>
          </section>

          {/* Participação */}
          <section className="mt-40 max-w-3xl mx-auto">
            <h2 className="podcast-heading-font text-5xl text-[#C4550A] mb-8">SEJA UM CONVIDADO</h2>
            <p className="text-2xl mb-12 opacity-80">
              Tem uma história inspiradora ou uma estratégia que mudou seu negócio? Queremos ouvir você no Estúdio Akedah.
            </p>
            <a href="/contato" className="podcast-btn-or px-16 py-6 text-lg">
              QUERO PARTICIPAR
            </a>
          </section>
        </div>
      </main>

      <div className="font-sans">
        <Footer />
      </div>
    </div>
  );
};

export default Podcast;
