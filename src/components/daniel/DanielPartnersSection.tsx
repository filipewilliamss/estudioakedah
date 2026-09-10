import React from "react";
import { WHATSAPP_URL } from "@/data/services";
import { Award, ShieldCheck, TrendingUp } from "lucide-react";

export const DanielPartnersSection: React.FC = () => {
  return (
    <section id="patrocinadores" className="py-[96px] px-[24px] max-w-[1280px] mx-auto border-t border-white/[0.08] font-lato">
      <div className="text-left mb-[64px]">
        <div className="mb-[16px]">
          <span className="label">ALIANÇAS & PARCERIAS</span>
        </div>
        <h2 className="display text-fluid-44 text-[var(--off-white)]">
          Patrocinadores & <span className="text-[var(--bege)] italic font-light">Marcas Parceiras</span>
        </h2>
        <p className="text-[var(--off-white)]/70 text-fluid-16 max-w-[68ch] mt-[16px] leading-relaxed font-light">
          Organizações e marcas que caminham junto ao ecossistema de autoridade, inovação comercial e valores sólidos de Daniel Silva.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] text-left">
        <div className="p-[32px] bg-[var(--preto)] border border-[var(--neutra-3)] hover:border-[var(--bege)]/50 flex flex-col justify-between min-h-[240px] transition-colors">
          <div>
            <div className="p-[12px] bg-[var(--neutra-4)] text-[var(--bege)] w-fit mb-[16px]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[var(--bege)] text-fluid-10 uppercase tracking-widest block mb-[8px] font-bold">
              Keynote / Palestras
            </span>
            <h3 className="font-lato text-fluid-20 font-black text-[var(--off-white)] mb-[8px]">
              Convenções Corporativas
            </h3>
            <p className="text-[var(--off-white)]/70 text-fluid-13 leading-relaxed font-light">
              Palestras de alto impacto para convenções de vendas, liderança e encontros de alinhamento executivo.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--bege)] hover:text-[var(--off-white)] text-fluid-13 font-bold uppercase tracking-wider transition-colors mt-[24px] inline-block"
          >
            Consultar Agenda →
          </a>
        </div>

        <div className="p-[32px] bg-[var(--preto)] border border-[var(--neutra-3)] hover:border-[var(--bege)]/50 flex flex-col justify-between min-h-[240px] transition-colors">
          <div>
            <div className="p-[12px] bg-[var(--neutra-4)] text-[var(--bege)] w-fit mb-[16px]">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[var(--bege)] text-fluid-10 uppercase tracking-widest block mb-[8px] font-bold">
              Embaixador de Marca
            </span>
            <h3 className="font-lato text-fluid-20 font-black text-[var(--off-white)] mb-[8px]">
              Posicionamento & Autoridade
            </h3>
            <p className="text-[var(--off-white)]/70 text-fluid-13 leading-relaxed font-light">
              Associação de credibilidade e geração de conteúdo especializado para softwares, serviços e produtos B2B.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--bege)] hover:text-[var(--off-white)] text-fluid-13 font-bold uppercase tracking-wider transition-colors mt-[24px] inline-block"
          >
            Propor Parceria →
          </a>
        </div>

        <div className="p-[32px] bg-[var(--preto)] border border-[var(--neutra-3)] hover:border-[var(--bege)]/50 flex flex-col justify-between min-h-[240px] transition-colors">
          <div>
            <div className="p-[12px] bg-[var(--neutra-4)] text-[var(--bege)] w-fit mb-[16px]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[var(--bege)] text-fluid-10 uppercase tracking-widest block mb-[8px] font-bold">
              Advisory Executivo
            </span>
            <h3 className="font-lato text-fluid-20 font-black text-[var(--off-white)] mb-[8px]">
              Conselho Estratégico
            </h3>
            <p className="text-[var(--off-white)]/70 text-fluid-13 leading-relaxed font-light">
              Acompanhamento consultivo direto para fundadores em reestruturação comercial e expansão de mercado.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--bege)] hover:text-[var(--off-white)] text-fluid-13 font-bold uppercase tracking-wider transition-colors mt-[24px] inline-block"
          >
            Falar com Assessoria →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DanielPartnersSection;
