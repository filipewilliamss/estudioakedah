import React from "react";
import { WHATSAPP_URL } from "@/data/services";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";
import { DanielSignature } from "./DanielBrandSignature";

export const DanielContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-[112px] px-[24px] border-t border-white/[0.08] font-lato">
      <div className="max-w-[1280px] mx-auto bg-gradient-to-b from-[#222222] to-[#191919] border border-white/15 rounded-[36px] p-[40px] sm:p-[64px] md:p-[80px] relative overflow-hidden shadow-2xl">
        {/* Glow sutil neutro de fundo */}
        <div className="absolute top-0 right-0 w-[384px] h-[384px] bg-white/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[48px] text-left">
          <div className="max-w-[672px] space-y-[24px]">
            <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] block">
              Estágio 08 • Conexão Direta
            </span>

            <div className="mb-[8px]">
              <DanielSignature variant="white" size="lg" showPositioning={true} />
            </div>

            <h2 className="font-lato text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[0.92]">
              Convide Daniel para <br />
              <span className="text-white/80 italic font-light">seu próximo projeto.</span>
            </h2>

            <p className="font-lato text-white/80 text-base sm:text-lg leading-relaxed font-light">
              Palestras corporativas, convenções, mentorias executivas de negócios, ministrações musicais ou assessoria estratégica. Entre em contato diretamente com a assessoria.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-[16px] w-full lg:w-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[12px] bg-white text-[#191919] hover:bg-transparent hover:text-white border border-white font-lato font-bold text-xs uppercase tracking-[0.2em] px-[40px] py-[20px] rounded-[16px] transition-all shadow-xl hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:contato@estudioakedah.com"
              className="inline-flex items-center justify-center gap-[12px] bg-white/10 hover:bg-white/20 text-white border border-white/20 font-lato font-bold text-xs uppercase tracking-[0.2em] px-[40px] py-[20px] rounded-[16px] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar E-mail Oficial</span>
            </a>

            <p className="text-white/40 text-[11px] font-lato font-light text-center lg:text-left mt-[4px]">
              Atendimento executivo em horário comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DanielContactSection;
