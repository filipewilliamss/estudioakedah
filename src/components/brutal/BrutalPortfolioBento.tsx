import React from "react";
import { Link } from "react-router-dom";
import teamluisaImg from "@/assets/teamluisa-pagina-2.webp";
import tabernaculoImg from "@/assets/tabernaculo-pagina-2.webp";
import studioBannerImg from "@/assets/akedah-podcast-studio.jpg";
import construmarImg from "@/assets/svc-infraestrutura.jpg";

export const BrutalPortfolioBento = () => {
  return (
    <section id="cases" className="relative w-full bg-[#0A0604] border-b border-white/[0.08] text-white py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        
        {/* Header do Bloco */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#C4550A] uppercase block mb-2">
              [ PORTFÓLIO &amp; OPERAÇÕES ]
            </span>
            <h2 className="font-barlow-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
              CASES EM DESTAQUE.
            </h2>
          </div>
          <Link
            to="/projetos"
            className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C4550A] hover:text-white transition-colors"
          >
            <span>VER TODOS OS CASES</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Container Principal com Aba Lateral e Bento Grid */}
        <div className="flex flex-col lg:flex-row items-stretch border border-white/[0.08] bg-[#080808]">
          
          {/* Aba Lateral Esquerda Rotacionada (Desktop) */}
          <div className="hidden lg:flex items-center justify-center border-r border-white/[0.08] px-5 py-8 bg-[#0B0705] flex-shrink-0">
            <span className="font-mono text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 select-none">
              [ FEATURED WORK ]
            </span>
          </div>

          {/* Bento Grid Central */}
          <div className="grid grid-cols-1 md:grid-cols-12 flex-grow gap-[1px] bg-white/[0.08]">
            
            {/* Card 01: Construmar (Coluna Esquerda Alta - md:col-span-5) */}
            <Link
              to="/projeto/construmar"
              className="md:col-span-5 relative min-h-[380px] md:min-h-[540px] bg-[#0A0604] p-8 flex flex-col justify-between group overflow-hidden"
            >
              {/* Imagem de Fundo com Alto Contraste */}
              <div className="absolute inset-0 z-0">
                <img
                  src={construmarImg}
                  alt="Construmar Marmoraria"
                  className="w-full h-full object-cover grayscale contrast-[1.3] brightness-40 group-hover:scale-105 group-hover:brightness-50 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0604] via-[#0A0604]/80 to-transparent" />
              </div>

              {/* Conteúdo Topo */}
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold text-[#C4550A] tracking-widest block mb-2">
                  01 /
                </span>
                <h3 className="font-barlow-condensed text-3xl sm:text-4xl font-black uppercase text-white tracking-tight group-hover:text-[#FAF6EB] transition-colors">
                  CONSTRUMAR
                </h3>
                <p className="font-mono text-[10px] sm:text-[11px] text-white/60 tracking-widest uppercase mt-1">
                  AUTORIDADE &amp; VÍDEOS INSTITUCIONAIS
                </p>
              </div>

              {/* Seta no Canto Inferior */}
              <div className="relative z-10 flex justify-end">
                <span className="w-9 h-9 rounded-full border border-white/20 group-hover:border-[#C4550A] group-hover:bg-[#C4550A] flex items-center justify-center text-white transition-all duration-300">
                  <svg className="w-3.5 h-3.5 fill-current transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24">
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Coluna Direita (md:col-span-7) Dividida em 3 Blocos */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-white/[0.08]">
              
              {/* Card 02: Akedah Podcast (Bloco Sólido Laranja Terracota - Estilo Brutal) */}
              <Link
                to="/podcast"
                className="relative min-h-[260px] bg-[#C4550A] p-7 flex flex-col justify-between group overflow-hidden"
              >
                {/* Geometria decorativa interna */}
                <div className="absolute -bottom-6 -right-6 font-barlow-condensed font-black text-[140px] leading-none text-black/10 pointer-events-none select-none">
                  02
                </div>

                <div className="relative z-10">
                  <span className="font-mono text-xs font-bold text-white/85 tracking-widest block mb-2">
                    02 /
                  </span>
                  <h3 className="font-barlow-condensed text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                    AKEDAH PODCAST
                  </h3>
                  <p className="font-mono text-[10px] text-black/75 tracking-wider uppercase mt-1 font-semibold">
                    CANAL DE NEGÓCIOS &amp; LIDERANÇA
                  </p>
                </div>

                <div className="relative z-10 flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-black/25 flex items-center justify-center text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Card 03: Team Luísa (Fundo Escuro com Foto) */}
              <Link
                to="/projeto/team-luisa-crosstraining"
                className="relative min-h-[260px] bg-[#0A0604] p-7 flex flex-col justify-between group overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={teamluisaImg}
                    alt="Team Luísa"
                    className="w-full h-full object-cover grayscale contrast-[1.3] brightness-35 group-hover:scale-105 group-hover:brightness-45 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0604] via-[#0A0604]/75 to-transparent" />
                </div>

                <div className="relative z-10">
                  <span className="font-mono text-xs font-bold text-[#C4550A] tracking-widest block mb-2">
                    03 /
                  </span>
                  <h3 className="font-barlow-condensed text-2xl sm:text-3xl font-black uppercase text-white tracking-tight group-hover:text-[#FAF6EB] transition-colors">
                    TEAM LUÍSA
                  </h3>
                  <p className="font-mono text-[10px] text-white/60 tracking-wider uppercase mt-1">
                    SOCIAL MEDIA &amp; TRÁFEGO
                  </p>
                </div>

                <div className="relative z-10 flex justify-end">
                  <span className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#C4550A] group-hover:bg-[#C4550A] flex items-center justify-center text-white transition-all duration-300">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Card 04: Tabernáculo (Ocupa as 2 Colunas Inferiores) */}
              <Link
                to="/projeto/tabernaculo-da-trindade"
                className="sm:col-span-2 relative min-h-[260px] bg-[#0A0604] p-7 flex flex-col justify-between group overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={tabernaculoImg}
                    alt="Tabernáculo da Trindade"
                    className="w-full h-full object-cover grayscale contrast-[1.3] brightness-35 group-hover:scale-105 group-hover:brightness-45 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0604] via-[#0A0604]/75 to-transparent" />
                </div>

                <div className="relative z-10">
                  <span className="font-mono text-xs font-bold text-[#C4550A] tracking-widest block mb-2">
                    04 /
                  </span>
                  <h3 className="font-barlow-condensed text-2xl sm:text-3xl font-black uppercase text-white tracking-tight group-hover:text-[#FAF6EB] transition-colors">
                    TABERNÁCULO DA TRINDADE
                  </h3>
                  <p className="font-mono text-[10px] text-white/60 tracking-wider uppercase mt-1">
                    INFRAESTRUTURA DE ESTÚDIO &amp; IDENTIDADE AUDIOVISUAL
                  </p>
                </div>

                <div className="relative z-10 flex justify-end">
                  <span className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#C4550A] group-hover:bg-[#C4550A] flex items-center justify-center text-white transition-all duration-300">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                </div>
              </Link>

            </div>

          </div>

          {/* Barra Vertical Direita Sólida Terracota (Desktop) */}
          <Link
            to="/projetos"
            className="hidden xl:flex items-center justify-center bg-[#C4550A] hover:bg-[#b04b08] px-6 py-8 transition-colors flex-shrink-0 group"
          >
            <span className="font-mono text-[10px] font-bold text-white tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 flex items-center gap-3">
              <span>VER TODOS OS PROJETOS</span>
              <span className="rotate-90 group-hover:-translate-y-1 transition-transform">↗</span>
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
};
