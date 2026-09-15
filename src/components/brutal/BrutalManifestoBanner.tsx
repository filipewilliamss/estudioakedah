import React from "react";
import { motion } from "framer-motion";

export const BrutalManifestoBanner = () => {
  return (
    <section className="relative w-full bg-[#080808] border-b border-white/[0.08] py-20 lg:py-28 overflow-hidden text-white">
      {/* Glow Sutil de Fundo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(196,85,10,0.12)_0%,_transparent_70%)] blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Headline Massiva em Caixa Alta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 text-left"
          >
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#C4550A] uppercase block mb-4">
              // POSICIONAMENTO AKEDAH
            </span>
            <h2 className="font-barlow-condensed text-[48px] sm:text-[68px] md:text-[84px] lg:text-[96px] font-black leading-[0.88] tracking-[-0.03em] uppercase">
              MARKETING É FERRAMENTA. <br />
              <span className="text-[#C4550A]">NÃO PONTO DE PARTIDA.</span>
            </h2>
          </motion.div>

          {/* Lado Direito: Declaração de Impacto & CTA Arquitetônico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <p className="font-mono text-xs sm:text-[13px] text-white/70 leading-relaxed uppercase tracking-wider mb-8 max-w-sm">
              ANTES DE QUEIMAR ORÇAMENTO COM TRÁFEGO, É PRECISO UMA MÁQUINA COMERCIAL CAPAZ DE CONVERTER E RETER.
            </p>

            <a
              href="https://wa.me/5511991076096"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-8 py-4.5 bg-[#C4550A] hover:bg-[#b04b08] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl shadow-[#C4550A]/20"
            >
              <span>DIAGNÓSTICO ESTRATÉGICO</span>
              <span className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
