import React from "react";
import { WHATSAPP_URL } from "@/data/services";
import { Award, ShieldCheck, TrendingUp } from "lucide-react";

export const DanielPartnersSection: React.FC = () => {
  return (
    <section id="patrocinadores" className="py-[96px] px-[24px] max-w-[1280px] mx-auto border-t border-white/[0.08] font-lato">
      <div className="text-left mb-[64px]">
        <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-[16px] block">
          Alianças & Parcerias
        </span>
        <h2 className="font-lato text-3xl sm:text-5xl font-black text-white">
          Patrocinadores & <span className="text-white/80 italic font-light">Marcas Parceiras</span>
        </h2>
        <p className="text-white/60 text-base sm:text-lg max-w-[672px] mt-[16px] leading-relaxed font-light">
          Organizações e marcas que caminham junto ao ecossistema de autoridade, inovação comercial e valores sólidos de Daniel Silva.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] text-left">
        <div className="p-[32px] bg-[#1f1f1f]/90 border border-white/10 hover:border-white/30 rounded-[24px] backdrop-blur-md flex flex-col justify-between min-h-[240px] transition-all">
          <div>
            <div className="p-[12px] bg-white/10 text-white w-fit rounded-[12px] mb-[16px]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-white/50 text-[10px] uppercase tracking-widest block mb-[8px] font-bold">
              Keynote / Palestras
            </span>
            <h3 className="font-lato text-xl font-black text-white mb-[8px]">
              Convenções Corporativas
            </h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light">
              Palestras de alto impacto para convenções de vendas, liderança e encontros de alinhamento executivo.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs font-bold uppercase tracking-wider hover:underline mt-[24px] inline-block"
          >
            Consultar Agenda →
          </a>
        </div>

        <div className="p-[32px] bg-[#1f1f1f]/90 border border-white/10 hover:border-white/30 rounded-[24px] backdrop-blur-md flex flex-col justify-between min-h-[240px] transition-all">
          <div>
            <div className="p-[12px] bg-white/10 text-white w-fit rounded-[12px] mb-[16px]">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-white/50 text-[10px] uppercase tracking-widest block mb-[8px] font-bold">
              Embaixador de Marca
            </span>
            <h3 className="font-lato text-xl font-black text-white mb-[8px]">
              Posicionamento & Autoridade
            </h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light">
              Associação de credibilidade e geração de conteúdo especializado para softwares, serviços e produtos B2B.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs font-bold uppercase tracking-wider hover:underline mt-[24px] inline-block"
          >
            Propor Parceria →
          </a>
        </div>

        <div className="p-[32px] bg-[#1f1f1f]/90 border border-white/10 hover:border-white/30 rounded-[24px] backdrop-blur-md flex flex-col justify-between min-h-[240px] transition-all">
          <div>
            <div className="p-[12px] bg-white/10 text-white w-fit rounded-[12px] mb-[16px]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-white/50 text-[10px] uppercase tracking-widest block mb-[8px] font-bold">
              Advisory Executivo
            </span>
            <h3 className="font-lato text-xl font-black text-white mb-[8px]">
              Conselho Estratégico
            </h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light">
              Acompanhamento consultivo direto para fundadores em reestruturação comercial e expansão de mercado.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs font-bold uppercase tracking-wider hover:underline mt-[24px] inline-block"
          >
            Falar com Assessoria →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DanielPartnersSection;
