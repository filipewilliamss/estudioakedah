import { useEffect } from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DanielCinematicExperience from "@/components/daniel/DanielCinematicExperience";
import DanielPublicLifeSection from "@/components/daniel/DanielPublicLifeSection";
import DanielPartnersSection from "@/components/daniel/DanielPartnersSection";
import DanielContactSection from "@/components/daniel/DanielContactSection";

const DanielSilva = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Silva",
    jobTitle: "Estrategista de Negócios, Mentor e Músico",
    description: "Site oficial de Daniel Silva: experiência narrativa cinematográfica em scroll pelas três dimensões — empreendedor, músico e mentor de fé.",
    url: "https://estudioakedah.com/daniel-silva",
  };

  return (
    <div className="min-h-screen bg-[#07132B] text-white selection:bg-white selection:text-[#07132B] relative">
      <SEO
        title="Daniel Silva | Estratégia, Fé & Música"
        description="Entre no universo de Daniel Silva: uma experiência cinematográfica em scroll pelas três dimensões de uma mesma pessoa — empreendedorismo, música e fé."
        url="https://estudioakedah.com/daniel-silva"
        schema={schema}
      />
      <Navbar isDanielSilvaPage={true} />

      <main id="experience" className="relative z-10 overflow-x-clip">
        {/* ================================================================ */}
        {/* ESTÁGIOS 1 A 6: EXPERIÊNCIA CINEMATOGRÁFICA NARRATIVA EM SCROLL   */}
        {/* 1. Entrada / Portal                                              */}
        {/* 2. Daniel Empreendedor                                           */}
        {/* 3. Transição Narrativa                                           */}
        {/* 4. Daniel Músico (+ Agenda Musical)                              */}
        {/* 5. Daniel Mentor de Fé                                           */}
        {/* 6. Convergência das Três Dimensões                              */}
        {/* ================================================================ */}
        <DanielCinematicExperience />

        {/* ================================================================ */}
        {/* ESTÁGIO 7: VIDA PÚBLICA (Agenda Pública + Conteúdo Digital)      */}
        {/* ================================================================ */}
        <div id="agenda">
          <DanielPublicLifeSection />
        </div>

        {/* PATROCINADORES & MARCAS PARCEIRAS */}
        <DanielPartnersSection />

        {/* ================================================================ */}
        {/* ESTÁGIO 8: CONTATO & CHAMADA PARA AÇÃO                           */}
        {/* ================================================================ */}
        <DanielContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default DanielSilva;
