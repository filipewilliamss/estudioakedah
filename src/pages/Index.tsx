import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import { BrutalHeroSection } from "@/components/brutal/BrutalHeroSection";
import { BrutalServicesBar } from "@/components/brutal/BrutalServicesBar";
import { BrutalManifestoBanner } from "@/components/brutal/BrutalManifestoBanner";
import { BrutalPortfolioBento } from "@/components/brutal/BrutalPortfolioBento";
import { BrutalProcessSection } from "@/components/brutal/BrutalProcessSection";
import { BrutalClosingCTA } from "@/components/brutal/BrutalClosingCTA";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const Index = () => {
  const [loading, setLoading] = useState(() => {
    try {
      return !sessionStorage.getItem('akedah_home_loader_seen');
    } catch {
      return true;
    }
  });
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
    <div className="min-h-screen bg-[#0A0604] relative text-white selection:bg-[#C4550A] selection:text-white">
      <SEO schema={studioSchema} />

      <AnimatePresence>
        {loading && (
          <Preloader
            onComplete={() => {
              try {
                sessionStorage.setItem('akedah_home_loader_seen', 'true');
              } catch {}
              setLoading(false);
            }}
          />
        )}
      </AnimatePresence>

      <div className={`relative z-10 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {!loading && (
          <main className="flex flex-col">
            <Navbar />
            <BrutalHeroSection />
            <BrutalServicesBar />
            <BrutalManifestoBanner />
            <BrutalPortfolioBento />
            <BrutalProcessSection />
            <TestimonialsSection />
            <BrutalClosingCTA />
            <Footer />
          </main>
        )}
      </div>
    </div>
  );
};

export default Index;
