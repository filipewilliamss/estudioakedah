import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  {
    main: "Elevamos o seu negócio ao",
    highlight: "próximo patamar.",
    subtitle: "Unindo estratégia comercial e ações de impacto. Antes do marketing, um processo comercial organizado — do diagnóstico à autonomia."
  },
  {
    main: "Transformamos ideias em",
    highlight: "resultados reais.",
    subtitle: "Sua visão potencializada por uma metodologia única de crescimento e escala para o mercado digital."
  },
  {
    main: "A estratégia certa para sua",
    highlight: "operação escalar.",
    subtitle: "Onde a operação trava, nós destravamos. Conectamos processos, pessoas e tecnologia para impulsionar seu lucro."
  }
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Initial entrance animation
    if (headlineRef.current) {
      gsap.from(headlineRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-transparent overflow-hidden flex items-center"
    >
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,85,10,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-20 container-editorial w-full flex flex-col items-center pt-24 lg:pt-16 pb-20 md:pb-32 lg:pb-0">
        <div className="w-full flex flex-col items-center" ref={headlineRef}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 flex items-center gap-4"
          >
            <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">
              Soluções &amp; Estratégias Comerciais
            </span>
          </motion.div>

          <div className="relative w-full overflow-hidden flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full flex flex-col items-center"
              >
                <h1
                  className="text-white font-[900] leading-[0.82] text-center tracking-[-0.05em] font-display"
                  style={{ fontSize: 'clamp(38px, 9vw, 112px)' }}
                >
                  {titles[currentIndex].main} <br />
                  <span className="text-[#C4550A] italic font-normal">{titles[currentIndex].highlight}</span>
                </h1>

                <p className="mt-12 text-white/55 text-[17px] md:text-[19px] max-w-2xl text-center font-normal leading-[1.6] font-display tracking-tight">
                  {titles[currentIndex].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 items-center justify-center">
            <a
              href="https://wa.me/5511991076096"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium px-12"
            >
              Fale com um especialista
            </a>
            <a href="#servicos" className="btn-premium-outline px-12">
              Conheça nossas soluções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;