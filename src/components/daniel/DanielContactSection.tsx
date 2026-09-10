import React from "react";
import { WHATSAPP_URL } from "@/data/services";

export const DanielContactSection: React.FC = () => {
  return (
    <section id="contato" className="section--flat scr bg-[var(--off-white)] text-[var(--preto)] items-center font-lato w-full">
      <div className="container w-full text-left" data-section="contato">
        <div className="font-lato font-bold text-fluid-12 tracking-[0.22em] text-[rgba(25,25,25,0.6)] uppercase mb-[2rem]">
          Conexão Oficial &amp; Assessoria
        </div>

        <h3 className="display text-fluid-130 text-[var(--preto)] leading-[0.86] tracking-[-0.025em] uppercase max-w-[12ch] mb-[2rem]">
          Convide Daniel
        </h3>

        <p className="corpo__p font-lato font-normal text-[rgba(25,25,25,0.8)] text-fluid-20 max-w-[68ch] leading-relaxed mb-[3.4rem]">
          Palestras, convenções corporativas, mentorias executivas de negócios ou ministrações musicais. Fale diretamente com a equipe executiva.
        </p>

        <div className="flex flex-wrap gap-[1.6rem]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--preto)] text-[var(--off-white)] hover:bg-[var(--marinho)] font-lato font-black text-fluid-16 uppercase tracking-[0.12em] px-[3.2rem] py-[1.8rem] transition-colors"
          >
            WhatsApp Oficial
          </a>
          <a
            href="mailto:comercial@danielsilva.com"
            className="border-2 border-[var(--preto)] text-[var(--preto)] hover:bg-[var(--preto)] hover:text-[var(--off-white)] font-lato font-black text-fluid-16 uppercase tracking-[0.12em] px-[3.2rem] py-[1.8rem] transition-colors"
          >
            Enviar E-mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default DanielContactSection;
