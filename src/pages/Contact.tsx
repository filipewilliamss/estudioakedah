import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#101010] relative">
      <ParticleBackground />
      <SEO 
        title="Contato | Akedah"
        description="Entre em contato com o Estúdio Akedah de Soluções e Estratégias Comerciais."
      />
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="flex flex-col pt-20">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-[80vh] flex items-center justify-center"
          >
            <ContactSection />
          </motion.section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Contact;