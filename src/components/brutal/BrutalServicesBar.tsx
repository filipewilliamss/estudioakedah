import React from "react";
import { Link } from "react-router-dom";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  to: string;
}

const servicesList: ServiceItem[] = [
  {
    number: "01",
    title: "SOCIAL MEDIA & AUTORIDADE",
    description: "POSICIONAMENTO INQUESTIONÁVEL E PRESENÇA DIGITAL PARA LÍDERES E MARCAS CONSOLIDADAS.",
    to: "/servicos/social-media",
  },
  {
    number: "02",
    title: "TRÁFEGO PAGO & ESCALA",
    description: "INFRAESTRUTURA PREVISÍVEL DE AQUISIÇÃO E ENGENHARIA DE CONVERSÃO ORIENTADA A ROI REAL.",
    to: "/servicos/trafego-pago",
  },
  {
    number: "03",
    title: "VÍDEOS EM LOTE & PODCAST",
    description: "CAPTAÇÃO EM ESTÚDIO PRÓPRIO 4K HDR COM ENTREGA MENSAL DE 30+ PÍLULAS DE ALTO IMPACTO.",
    to: "/servicos/videos-em-lote",
  },
  {
    number: "04",
    title: "CONSULTORIA & TREINAMENTOS",
    description: "DIAGNÓSTICO PROFUNDO DE PROCESSOS COMERCIAIS, ALINHAMENTO DE EQUIPES E AUTONOMIA.",
    to: "/servicos/consultorias",
  },
];

export const BrutalServicesBar = () => {
  return (
    <section id="o-que-fazemos" className="relative w-full bg-[#080808] border-b border-white/[0.08] text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        
        {/* Aba Vertical Esquerda Rotacionada */}
        <div className="hidden md:flex items-center justify-center border-r border-white/[0.08] px-6 py-8 bg-[#0B0705] flex-shrink-0">
          <span className="font-mono text-[10px] font-bold text-white/45 tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 select-none">
            [ O QUE FAZEMOS ]
          </span>
        </div>

        {/* Header Mobile para a Aba */}
        <div className="flex md:hidden items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0B0705]">
          <span className="font-mono text-[10px] font-bold text-[#C4550A] tracking-[0.25em] uppercase">
            [ O QUE FAZEMOS // SOLUÇÕES ]
          </span>
          <span className="text-white/40 text-xs font-mono">04 FRENTES</span>
        </div>

        {/* Grid de 4 Colunas com Divisores Ultrafinos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-grow divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {servicesList.map((item) => (
            <Link
              key={item.number}
              to={item.to}
              className="group relative p-8 lg:p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-all duration-300 overflow-hidden"
            >
              {/* Linha sutil de destaque no hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C4550A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Número do Serviço em Laranja Terracota */}
                <span className="font-mono text-sm sm:text-base font-bold text-[#C4550A] tracking-widest block mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {item.number}
                </span>

                {/* Título do Serviço em Bold Uppercase */}
                <h3 className="font-barlow-condensed text-2xl sm:text-[26px] lg:text-[28px] font-black leading-tight tracking-tight uppercase text-white mb-3 group-hover:text-[#FAF6EB] transition-colors">
                  {item.title}
                </h3>

                {/* Descrição Curta de Alto Impacto */}
                <p className="font-mono text-[11px] sm:text-xs text-white/60 leading-relaxed tracking-wider uppercase">
                  {item.description}
                </p>
              </div>

              {/* Seta Diagonal no Canto Inferior Direito */}
              <div className="mt-8 flex justify-end">
                <span className="w-8 h-8 rounded-full border border-white/15 group-hover:border-[#C4550A] group-hover:bg-[#C4550A] flex items-center justify-center text-white/60 group-hover:text-white transition-all duration-300">
                  <svg className="w-3.5 h-3.5 fill-current transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24">
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
