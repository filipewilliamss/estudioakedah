import React from "react";
import { WHATSAPP_URL } from "@/data/services";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";
import { DanielSignature } from "./DanielBrandSignature";

export const DanielContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-[112px] px-[24px] border-t border-[var(--neutra-3)]/60 font-lato">
      <div className="max-w-[1280px] mx-auto bg-[var(--preto)] border border-[var(--neutra-3)] p-[40px] sm:p-[64px] md:p-[80px] relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[48px] text-left">
          <div className="max-w-[672px] space-y-[24px]">
            <div className="mb-[8px]">
              <span className="label">CONEXÃO DIRETA</span>
            </div>

            <div className="mb-[8px]">
              <DanielSignature variant="white" size="lg" showPositioning={true} />
            </div>

            <h2 className="display text-fluid-44 md:text-fluid-80 text-[var(--off-white)] tracking-tight leading-[0.92]">
              Convide Daniel para <br />
              <span className="text-[var(--bege)] italic font-light">seu próximo projeto.</span>
            </h2>

            <p className="font-lato text-[var(--off-white)]/80 text-fluid-16 leading-relaxed font-light max-w-[68ch]">
              Palestras corporativas, convenções, mentorias executivas de negócios, ministrações musicais ou assessoria estratégica. Entre em contato diretamente com a assessoria.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-[16px] w-full lg:w-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[12px] bg-[var(--bege)] text-[var(--preto)] hover:bg-[var(--off-white)] border border-[var(--bege)] font-lato font-black text-fluid-13 uppercase tracking-[0.2em] px-[40px] py-[20px] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:comercial@danielsilva.com"
              className="inline-flex items-center justify-center gap-[12px] bg-[var(--preto)] hover:bg-[var(--neutra-3)] text-[var(--off-white)] border border-[var(--neutra-3)] font-lato font-bold text-fluid-13 uppercase tracking-[0.2em] px-[40px] py-[20px] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar E-mail Oficial</span>
            </a>

            <p className="text-[var(--neutra-1)] text-fluid-10 font-lato font-light text-center lg:text-left mt-[4px]">
              Atendimento executivo em horário comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DanielContactSection;
