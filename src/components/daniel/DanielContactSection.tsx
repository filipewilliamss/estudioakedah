import React from "react";
import { WHATSAPP_URL } from "@/data/services";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";

export const DanielContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-28 px-6 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-[#0B1B3D] to-[#07132B] border border-white/15 rounded-[36px] p-10 sm:p-16 md:p-20 relative overflow-hidden shadow-2xl">
        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 text-left">
          <div className="max-w-2xl space-y-6">
            <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] block">
              Estágio 08 • Conexão Direta
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-[900] text-white tracking-tight leading-[0.92]">
              Convide Daniel para <br />
              <span className="text-white/80 italic font-normal">seu próximo projeto.</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light">
              Palestras corporativas, convenções, mentorias executivas de negócios, ministrações musicais ou assessoria estratégica. Entre em contato diretamente com a equipe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-[16px] transition-all shadow-xl hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:contato@estudioakedah.com"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-[16px] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar E-mail Oficial</span>
            </a>

            <p className="text-white/40 text-[11px] font-mono text-center lg:text-left mt-1">
              Atendimento executivo em horário comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DanielContactSection;
