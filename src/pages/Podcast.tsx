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
    // Beige background from brand manual
    <div className="min-h-screen bg-[#F5F5DC] text-[#4B3621]">
      <SEO
        title="Akedah Podcast | Entrevistas"
        description="Página oficial do Akedah Podcast."
        url="https://akedah.com.br/podcast"
        schema={schema}
      />
      <Navbar />

      <main className="container-editorial pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display font-[900] text-[#C4550A] leading-[0.9] tracking-[-0.05em] text-[clamp(40px,8vw,100px)] mb-10">
            Akedah <span className="italic font-normal">Podcast</span>
          </h1>
          
          <div className="max-w-3xl space-y-6 text-[18px] leading-relaxed">
            <p>
              O Akedah Podcast é o espaço onde conversas estratégicas encontram a prática.
            </p>
            <p>
              Seguindo nossa identidade visual, cada episódio traz convidados que compartilham 
              suas jornadas, erros e acertos.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Podcast;
