import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import EditorialMarquee from "@/components/EditorialMarquee";
import EditorialQuote from "@/components/EditorialQuote";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (!loading && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [loading, location.hash]);

  const studioSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Akedah",
    "alternateName": "Estúdio Akedah de Soluções e Estratégias Comerciais",
    "description": "Estúdio de Soluções e Estratégias Comerciais: social media, tráfego pago, vídeos em lote e treinamentos para empresas consolidadas.",
    "@id": "https://akedah.com.br",
    "url": "https://akedah.com.br",
    "email": "contato@akedah.com.br",
    "telephone": "+5511991076096",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <SEO schema={studioSchema} />

      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`relative z-10 transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {!loading && (
          <main className="flex flex-col snap-y snap-proximity">
            <Navbar />

            <section className="snap-start">
              <HeroSection />
            </section>

            <SectionDivider />

            <section className="snap-start">
              <EditorialMarquee variant="compact" />
            </section>

            <SectionDivider />

            <section className="snap-start">
              <AboutSection />
            </section>

            <SectionDivider />

            <section className="snap-start">
              <EditorialQuote
                eyebrow="Posicionamento Akedah"
                quote={<>Marketing é ferramenta, não <span className="italic text-[#C4550A]">ponto de partida</span>.</>}
                attribution="Daniel Silva · Fundador da Akedah"
              />
            </section>

            <SectionDivider />

            <section className="snap-start">
              <ProcessSection />
            </section>

            <SectionDivider />

            <section className="snap-start">
              <TestimonialsSection />
            </section>

            <SectionDivider />

            <section className="snap-start">
              <ContactSection />
            </section>

            <Footer />
          </main>
        )}
      </div>
    </div>
  );
};

const SectionDivider = () => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    className="section-divider origin-center h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
  />
);

export default Index;
