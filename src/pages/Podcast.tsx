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
    description: "Entrevistas, bastidores e histórias reais. O Podcast oficial da Akedah.",
    url: "https://akedah.com.br/podcast",
    publisher: { "@type": "Organization", name: "Akedah" },
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#42362E] font-['BebasNeue']">
      <style>
        {`
          /* Custom styles for the Podcast page using the brand palette and new fonts */
          .podcast-title {
            color: #C4550A;
            font-family: 'DarkenJellybean', sans-serif;
            letter-spacing: 0.05em;
          }
          .podcast-accent {
            color: #C4550A;
          }
          .podcast-container p, 
          .podcast-container span,
          .podcast-container a {
            font-family: 'BebasNeue', sans-serif;
          }
          .podcast-container p {
            color: #42362E;
          }
          .podcast-heading-font {
            font-family: 'DarkenJellybean', sans-serif;
          }
        `}
      </style>
      <SEO
        title="Akedah Podcast | Entrevistas"
        description="Página oficial do Akedah Podcast."
        url="https://akedah.com.br/podcast"
        schema={schema}
      />
      <Navbar />

      <main className="container-editorial pt-40 pb-24 podcast-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C4550A] animate-pulse" />
            <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">
              O PODCAST OFICIAL
            </span>
          </div>
          
          <h1 className="podcast-title font-[900] leading-[0.9] text-[clamp(44px,8.5vw,110px)] mb-12">
            Onde a estratégia <br />
            <span className="italic font-normal">encontra a voz.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-[20px] md:text-[24px] leading-[1.6] font-medium">
                Entrevistas, bastidores e histórias reais sobre comercial e estratégia. 
                Dois programas por semana, gravados no Estúdio Akedah.
              </p>
              
              <div className="space-y-4 pt-6 border-t border-[#42362E]/10">
                <h3 className="text-[12px] uppercase tracking-[0.3em] font-bold opacity-70">
                  Próximos passos
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-[#C4550A] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-[15px] hover:bg-[#A34508] transition-colors">
                    Assistir no YouTube
                  </a>
                  <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-[#42362E]/20 text-[#42362E] text-[11px] font-bold uppercase tracking-[0.2em] rounded-[15px] hover:bg-[#42362E]/5 transition-colors">
                    Ouvir Spotify
                  </a>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
              <img 
                src={studioImage} 
                alt="Akedah Podcast Studio" 
                className="w-full h-full object-cover filter sepia-[0.2] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/40 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* New sections based on typical podcast info that might have been lost */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="space-y-4">
            <h3 className="podcast-heading-font text-[#C4550A] text-3xl">Programação</h3>
            <p className="text-lg">Novos episódios toda terça e quinta-feira, às 19h.</p>
          </div>
          <div className="space-y-4">
            <h3 className="podcast-heading-font text-[#C4550A] text-3xl">Onde ouvir</h3>
            <p className="text-lg">Disponível no YouTube, Spotify, Apple Podcasts e Deezer.</p>
          </div>
          <div className="space-y-4">
            <h3 className="podcast-heading-font text-[#C4550A] text-3xl">Bastidores</h3>
            <p className="text-lg">Acompanhe o dia a dia das gravações em nosso Instagram oficial.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-32 bg-[#42362E]/5 p-12 rounded-[20px] text-center space-y-8"
        >
          <h2 className="podcast-heading-font text-[#C4550A] text-5xl">Seja um convidado</h2>
          <p className="max-w-2xl mx-auto text-xl">
            Tem uma história inspiradora ou uma estratégia que mudou seu negócio? 
            Queremos ouvir você no Estúdio Akedah.
          </p>
          <a href="#" className="inline-flex items-center justify-center px-12 py-5 bg-[#C4550A] text-white text-[13px] font-bold uppercase tracking-[0.2em] rounded-[15px] hover:bg-[#A34508] transition-colors">
            Quero participar
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Podcast;
