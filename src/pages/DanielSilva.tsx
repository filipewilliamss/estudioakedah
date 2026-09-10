import { useEffect } from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DanielCinematicExperience from "@/components/daniel/DanielCinematicExperience";
import DanielPublicLifeSection from "@/components/daniel/DanielPublicLifeSection";
import DanielPartnersSection from "@/components/daniel/DanielPartnersSection";
import DanielContactSection from "@/components/daniel/DanielContactSection";
import { DaniRepetitiveSealStrip, DANIEL_TAGLINE, DANIEL_POSITIONING } from "@/components/daniel/DanielBrandSignature";

const DanielSilva = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.add("daniel-silva-theme");
    return () => {
      document.documentElement.classList.remove("daniel-silva-theme");
    };
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Silva",
    jobTitle: DANIEL_POSITIONING,
    description: `Site oficial de Daniel Silva: ${DANIEL_TAGLINE}`,
    url: "https://estudioakedah.com/daniel-silva",
  };

  return (
    <div className="min-h-screen bg-[#191919] text-white selection:bg-white selection:text-[#191919] relative font-lato">
      <SEO
        title={`Daniel Silva | ${DANIEL_POSITIONING}`}
        description={`Daniel Silva: ${DANIEL_TAGLINE} Experiência cinematográfica conduzida por scroll.`}
        url="https://estudioakedah.com/daniel-silva"
        schema={schema}
      />
      <Navbar isDanielSilvaPage={true} />

      <main id="experience" className="relative z-10 overflow-x-clip">
        {/* ================================================================ */}
        {/* ESTÁGIOS 1 A 6: EXPERIÊNCIA CINEMATOGRÁFICA NARRATIVA EM SCROLL   */}
        {/* 1. Entrada / Portal                                              */}
        {/* 2. Daniel Empreendedor                                           */}
        {/* 3. Painel de Transição 1 (Respiro Institucional)                 */}
        {/* 4. Daniel Músico (+ Agenda Musical)                              */}
        {/* 5. Painel de Transição 2 (Respiro Institucional)                 */}
        {/* 6. Daniel Mentor de Fé                                           */}
        {/* 7. Convergência das Três Dimensões                              */}
        {/* ================================================================ */}
        <DanielCinematicExperience />

        {/* Camada Estágios 7 & 8: Vida Pública, Patrocinadores e Contato */}
        <div className="relative z-20 bg-[#191919]">
          {/* Faixa Repetida do Selo Oficial Dani */}
          <DaniRepetitiveSealStrip variant="dark" />

          {/* ================================================================ */}
          {/* ESTÁGIO 7: VIDA PÚBLICA (Agenda Pública + Conteúdo Digital)      */}
          {/* ================================================================ */}
          <div id="agenda">
            <DanielPublicLifeSection />
          </div>

          {/* PATROCINADORES & MARCAS PARCEIRAS */}
          <DanielPartnersSection />

          {/* Segunda Faixa Selo Dani em variante Dourada / Institucional */}
          <DaniRepetitiveSealStrip variant="dark" />

          {/* ================================================================ */}
          {/* ESTÁGIO 8: CONTATO & CHAMADA PARA AÇÃO                           */}
          {/* ================================================================ */}
          <DanielContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DanielSilva;
