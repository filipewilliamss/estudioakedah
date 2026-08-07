import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Headline animation
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

          <h1
            className="text-white font-[900] leading-[0.82] text-center tracking-[-0.05em] font-display"
            style={{ fontSize: 'clamp(38px, 9vw, 112px)' }}
          >
            Elevamos o seu negócio ao <br />
            <span className="text-[#C4550A] italic font-normal">próximo patamar.</span>
          </h1>

          <p className="mt-12 text-white/55 text-[17px] md:text-[19px] max-w-2xl text-center font-normal leading-[1.6] font-display tracking-tight">
            Unindo estratégia comercial e ações de impacto. Antes do marketing, um processo comercial organizado
            &mdash; do diagnóstico à autonomia.
          </p>

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