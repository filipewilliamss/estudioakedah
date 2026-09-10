import React from "react";
import { WHATSAPP_URL } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const DanielPartnersSection: React.FC = () => {
  return (
    <section id="patrocinadores" className="section--flat scr bg-[var(--marinho)] flex-col justify-center font-lato w-full">
      <div className="container w-full text-left" data-section="patrocinadores">
        <div className="font-lato font-bold text-fluid-12 tracking-[0.22em] text-[var(--bege)] uppercase mb-[2rem]">
          Alianças &amp; Patrocínios
        </div>

        <h3 className="display text-fluid-100 text-[var(--off-white)] leading-[0.88] tracking-[-0.02em] uppercase mb-[4rem] max-w-[14ch]">
          Marcas parceiras
        </h3>

        <div className="flex flex-wrap items-center gap-[2rem] md:gap-[4rem] text-fluid-26 font-lato font-black uppercase text-[var(--off-white)]/60 border-y border-white/[0.15] py-[2.4rem] mb-[3.4rem]">
          <span className="hover:text-[var(--off-white)] transition-colors">Convenções</span>
          <span className="text-[var(--bege)] select-none">•</span>
          <span className="hover:text-[var(--off-white)] transition-colors">Embaixador</span>
          <span className="text-[var(--bege)] select-none">•</span>
          <span className="hover:text-[var(--off-white)] transition-colors">Conselho</span>
        </div>

        <div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[1rem] text-[var(--bege)] hover:text-[var(--off-white)] font-lato font-black text-fluid-13 uppercase tracking-[0.16em] transition-colors"
          >
            <span>Consultar Disponibilidade Institucional</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DanielPartnersSection;
