import React from "react";
import { motion } from "framer-motion";

export const BrutalClosingCTA = () => {
  return (
    <section id="contato" className="relative w-full bg-[#0A0604] py-28 lg:py-36 overflow-hidden border-b border-white/[0.08] text-white">
      {/* Spotlight Motivada Quente de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(196,85,10,0.18)_0%,_transparent_70%)] blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
        
        {/* Tag Superior */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#C4550A] uppercase block mb-6"
        >
          // FECHAMENTO &amp; CONVERSÃO DIRETA
        </motion.span>

        {/* Headline Monumental */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-barlow-condensed text-[52px] sm:text-[76px] md:text-[92px] lg:text-[108px] font-black leading-[0.88] tracking-[-0.03em] uppercase mb-8 text-white"
        >
          PRONTO PARA ELEVAR <br />
          <span className="text-[#C4550A]">O JOGO DO SEU NEGÓCIO?</span>
        </motion.h2>

        {/* Subtítulo Cortante */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white/75 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-12"
        >
          Conectamos processos comerciais, autoridade inquestionável e mídia de alta performance para gerar previsibilidade e faturamento real.
        </motion.p>

        {/* Botões de Ação Contrastantes */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/5511991076096"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-4 px-9 py-5 bg-[#C4550A] hover:bg-[#b04b08] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl shadow-[#C4550A]/30"
          >
            <span>FALAR NO WHATSAPP</span>
            <span className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </span>
          </a>

          <a
            href="/orcamento"
            className="group inline-flex items-center justify-center gap-4 px-9 py-5 border border-white/20 hover:border-[#C4550A] text-white/90 hover:text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05]"
          >
            <span>SOLICITAR PROPOSTA</span>
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
