import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    phase: "AUDITORIA",
    title: "DIAGNÓSTICO PROFUNDO",
    description: "Mapeamento rigoroso dos gargalos da operação comercial, taxas de conversão históricas e análise de margem de contribuição.",
    deliverable: "RELATÓRIO DE GARGALOS & MATRIZ DE AÇÃO",
  },
  {
    number: "02",
    phase: "ESTRATÉGIA",
    title: "ARQUITETURA DE VENDAS",
    description: "Desenho da proposta única de valor, reestruturação da jornada de compra, scripts de qualificação e funil de fechamento.",
    deliverable: "PLAYBOOK COMERCIAL & GOVERNANÇA",
  },
  {
    number: "03",
    phase: "IMPLEMENTAÇÃO",
    title: "EXECUÇÃO & TRÁFEGO",
    description: "Gravação de autoridade em estúdio cinematográfico, setup de campanhas orientadas a ROI e cadência disciplinada de vendas.",
    deliverable: "30+ CONTEÚDOS & FUNIL ATIVO",
  },
  {
    number: "04",
    phase: "CONSOLIDAÇÃO",
    title: "ESCALA & AUTONOMIA",
    description: "Treinamento intensivo da equipe interna do cliente para operar com previsibilidade, eliminando dependência externa.",
    deliverable: "EQUIPE TREINADA & METAS AUDITADAS",
  },
];

export const BrutalProcessSection = () => {
  return (
    <section id="processo" className="relative w-full bg-[#080808] border-b border-white/[0.08] text-white py-20 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#C4550A] uppercase block mb-3">
              [ MÉTODO AKEDAH // SISTEMA EM 4 ETAPAS ]
            </span>
            <h2 className="font-barlow-condensed text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white">
              ENGENHARIA DE CRESCIMENTO.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-[13px] text-white/60 uppercase tracking-wider max-w-md leading-relaxed">
            Eliminamos improvisos e construímos processos comerciais com previsibilidade milimétrica.
          </p>
        </div>

        {/* Grid Arquitetônico de 4 Etapas com Divisores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/[0.08] bg-[#0A0604] divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 lg:p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors group relative"
            >
              {/* Topo do Card */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-barlow-condensed text-4xl lg:text-5xl font-black text-[#C4550A]">
                    {step.number}
                  </span>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white/40 border border-white/10 px-2.5 py-1">
                    {step.phase}
                  </span>
                </div>

                <h3 className="font-barlow-condensed text-2xl lg:text-[26px] font-black uppercase text-white mb-4 leading-tight group-hover:text-[#FAF6EB] transition-colors">
                  {step.title}
                </h3>

                <p className="font-mono text-[11px] sm:text-xs text-white/65 uppercase tracking-wider leading-relaxed mb-8">
                  {step.description}
                </p>
              </div>

              {/* Tag de Entregável */}
              <div className="pt-6 border-t border-white/[0.06]">
                <span className="font-mono text-[9px] tracking-widest text-[#C4550A] uppercase font-bold block mb-1">
                  ENTREGÁVEL CHAVE:
                </span>
                <span className="font-mono text-[10px] text-white/85 tracking-wider uppercase font-semibold">
                  {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
