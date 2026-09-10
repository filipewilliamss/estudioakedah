import React from "react";
import { WHATSAPP_URL } from "@/data/services";
import { Award, ShieldCheck, TrendingUp } from "lucide-react";

export const DanielPartnersSection: React.FC = () => {
  return (
    <section id="patrocinadores" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="text-left mb-16">
        <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
          Alianças & Parcerias
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-[900] text-white">
          Patrocinadores & <span className="text-white/80 italic font-normal">Marcas Parceiras</span>
        </h2>
        <p className="text-white/60 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed font-light">
          Organizações e marcas que caminham junto ao ecossistema de autoridade, inovação comercial e valores sólidos de Daniel Silva.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="p-8 bg-[#1f1f1f]/90 border border-white/10 hover:border-white/30 rounded-[24px] backdrop-blur-md flex flex-col justify-between min-h-[240px] transition-all">
          <div>
            <div className="p-3 bg-blue-500/10 text-blue-400 w-fit rounded-[12px] mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest block mb-2">
              Keynote / Palestras
            </span>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Convenções Corporativas
            </h3>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
              Palestras de alto impacto para convenções de vendas, liderança e encontros de alinhamento executivo.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:underline mt-6 inline-block"
          >
            Consultar Agenda →
          </a>
        </div>

        <div className="p-8 bg-[#1f1f1f]/90 border border-white/10 hover:border-white/30 rounded-[24px] backdrop-blur-md flex flex-col justify-between min-h-[240px] transition-all">
          <div>
            <div className="p-3 bg-purple-500/10 text-purple-400 w-fit rounded-[12px] mb-4">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest block mb-2">
              Embaixador de Marca
            </span>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Posicionamento & Autoridade
            </h3>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
              Associação de credibilidade e geração de conteúdo especializado para softwares, serviços e produtos B2B.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:underline mt-6 inline-block"
          >
            Propor Parceria →
          </a>
        </div>

        <div className="p-8 bg-[#1f1f1f]/90 border border-white/10 hover:border-white/30 rounded-[24px] backdrop-blur-md flex flex-col justify-between min-h-[240px] transition-all">
          <div>
            <div className="p-3 bg-amber-500/10 text-amber-400 w-fit rounded-[12px] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest block mb-2">
              Advisory Executivo
            </span>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Conselho Estratégico
            </h3>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
              Acompanhamento consultivo direto para fundadores em reestruturação comercial e expansão de mercado.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:underline mt-6 inline-block"
          >
            Falar com Assessoria →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DanielPartnersSection;
