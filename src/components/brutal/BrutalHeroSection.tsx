import React from "react";
import { motion } from "framer-motion";
import danielPicture from "@/assets/imagem-daniel.png";

export const BrutalHeroSection = () => {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen w-full flex items-center overflow-hidden bg-[#0A0604] pt-28 pb-16 lg:py-24 border-b border-white/[0.08]">
      {/* Luz Motivada Sutil de Fundo */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(196,85,10,0.15)_0%,_transparent_70%)] blur-3xl pointer-events-none -z-10" />

      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Esquerda: Título Monumental & Ação */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tag Superior Técnica / Suporte */}
            <div className="mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#C4550A]" />
              <p className="font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/70 max-w-md">
                ESTÚDIO DE SOLUÇÕES &amp; ESTRATÉGIAS COMERCIAIS DE ALTA PERFORMANCE.
              </p>
            </div>

            {/* Headline Monumental Condensada em 4 Linhas */}
            <h1 className="font-barlow-condensed text-[52px] xs:text-[64px] sm:text-[88px] md:text-[104px] lg:text-[112px] xl:text-[124px] font-black leading-[0.82] tracking-[-0.03em] uppercase mb-8">
              <span className="block text-white">NÃO</span>
              <span className="block text-white">FAZEMOS</span>
              <span className="block text-white">MARKETING</span>
              <span className="block text-[#C4550A]">COMUM.</span>
            </h1>

            {/* Subtítulo Objetivo */}
            <p className="text-white/75 text-base sm:text-lg max-w-lg font-normal leading-relaxed mb-10">
              Construímos máquinas de vendas, autoridade inabalável de marca e infraestrutura audiovisual cinematográfica para operações que lideram seus setores.
            </p>

            {/* Linha de Ação Dupla: Carimbo Sólido + Link Técnico */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto">
              <a
                href="https://wa.me/5511991076096"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-between gap-6 px-8 py-4.5 bg-[#C4550A] hover:bg-[#b04b08] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl shadow-[#C4550A]/25"
              >
                <span>FALAR COM ESPECIALISTA</span>
                <span className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </span>
              </a>

              <a
                href="#o-que-fazemos"
                className="group inline-flex items-center gap-2 text-white/70 hover:text-white font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors py-2 border-b border-white/20 hover:border-[#C4550A]"
              >
                <span>CONHEÇA O MÉTODO</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
              </a>
            </div>
          </motion.div>

          {/* Coluna Direita: Composição Escultórica com Bloco Terracota e Selo Giratório */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-[320px] sm:w-[400px] lg:w-[430px] aspect-[4/5]">
              {/* Bloco Geométrico Arquitetônico Terracota de Fundo */}
              <div className="absolute top-0 right-0 w-[85%] h-[92%] bg-[#C4550A] z-0 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.25)_100%)]" />
                <div className="absolute top-0 right-0 w-full h-full opacity-15 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="#000" strokeWidth="0.8" />
                    <line x1="20" y1="0" x2="100" y2="80" stroke="#000" strokeWidth="0.8" />
                    <line x1="40" y1="0" x2="100" y2="60" stroke="#000" strokeWidth="0.8" />
                  </svg>
                </div>
                {/* Recorte Tipográfico / Letra 'A' de Fundo em Escala Monumental */}
                <span className="absolute -bottom-10 -right-6 font-barlow-condensed font-black text-[220px] leading-none text-black/10 select-none pointer-events-none">
                  A
                </span>
              </div>

              {/* Fotografia de Alto Contraste de Daniel Silva */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
                <img
                  src={danielPicture}
                  alt="Daniel Silva - Fundador do Estúdio Akedah"
                  className="w-full h-[96%] object-cover object-top grayscale contrast-[1.3] brightness-95 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                />
                {/* Degradê de fusão na base para recorte perfeito */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0604] via-[#0A0604]/80 to-transparent z-20" />
              </div>

              {/* Carimbo / Selo Circular Giratório (Agency Seal) */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 z-30 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#0A0604] border border-white/20 p-2 shadow-2xl flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                  <svg className="w-full h-full" viewBox="0 0 140 140">
                    <path
                      id="stampCirclePath"
                      d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                      fill="none"
                    />
                    <text className="font-mono text-[9.5px] font-bold fill-white/80 tracking-[0.28em] uppercase">
                      <textPath href="#stampCirclePath" startOffset="0%">
                        • ESTÚDIO AKEDAH • SÃO PAULO • 2026
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Monograma Central 'A.' */}
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C4550A] text-white flex items-center justify-center font-barlow-condensed text-2xl sm:text-3xl font-black shadow-lg">
                  A.
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
