import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/data/services";

interface DanielNarrativeLayersProps {
  progress: number;
}

// Dados para a Agenda Musical elegante (Estágio 4)
const musicalEvents = [
  { data: "20/SET", evento: "Noite de Louvor e Ministração", local: "São Paulo, SP", hora: "19h30" },
  { data: "04/OUT", evento: "Encontro Acústico de Adoração", local: "Curitiba, PR", hora: "20h00" },
  { data: "18/OUT", evento: "Conferência de Adoração & Som", local: "Belo Horizonte, MG", hora: "19h00" },
];

export const DanielNarrativeLayers: React.FC<DanielNarrativeLayersProps> = ({ progress }) => {
  // Mapeamento dos 6 Estágios Narrativos baseado no scrollProgress (0.0 a 1.0)
  const isStage1 = progress >= 0.00 && progress < 0.12; // Entrada / Portal
  const isStage2 = progress >= 0.12 && progress < 0.35; // Daniel Empreendedor
  const isStage3 = progress >= 0.35 && progress < 0.42; // Transição Empreendedor -> Músico
  const isStage4 = progress >= 0.42 && progress < 0.65; // Daniel Músico + Agenda
  const isStage5 = progress >= 0.65 && progress < 0.85; // Daniel Mentor de Fé
  const isStage6 = progress >= 0.85;                   // Convergência

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
      <AnimatePresence mode="wait">
        {/* ================================================================= */}
        {/* ESTÁGIO 1 — ENTRADA (0% a 12%)                                    */}
        {/* ================================================================= */}
        {isStage1 && (
          <motion.div
            key="stage-1"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-left space-y-6 pt-12"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="text-white text-[11px] font-mono font-bold uppercase tracking-[0.3em]">
                Universo Oficial • Daniel Silva
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-[900] text-white tracking-tight leading-[0.88]">
              Estratégia. <br />
              <span className="text-white/80 italic font-normal">Fé. Música.</span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Entre no universo de Daniel Silva: uma jornada cinematográfica através de três dimensões complementares de um mesmo propósito.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/15 backdrop-blur-md text-white/80 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                Role para avançar pela porta de entrada ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 2 — DANIEL EMPREENDEDOR (12% a 35%)                       */}
        {/* ================================================================= */}
        {isStage2 && (
          <motion.div
            key="stage-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-left space-y-5 pt-8"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span className="text-blue-300 text-[11px] font-mono font-bold uppercase tracking-[0.3em]">
                01 • Dimensão Empreendedor
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-[900] text-white tracking-tight leading-[0.92]">
              O Estrategista & <br />
              <span className="text-white/80 italic font-normal">Construtor de Negócios</span>
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
              Reestruturação de operações comerciais complexas, modelagem de ofertas de alto ticket e governança de vendas para empresas em fase de expansão.
            </p>

            {/* Cards de áreas de atuação e indicadores placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="p-3.5 bg-[#0B1B3D]/80 border border-white/10 rounded-[14px] backdrop-blur-md">
                <span className="text-blue-400 text-[10px] font-mono uppercase tracking-wider block mb-1">Pilar 01</span>
                <p className="text-white font-bold text-sm">Vendas B2B de Escala</p>
                <p className="text-white/50 text-[11px] mt-0.5">Discurso comercial e funil de fechamento.</p>
              </div>
              <div className="p-3.5 bg-[#0B1B3D]/80 border border-white/10 rounded-[14px] backdrop-blur-md">
                <span className="text-blue-400 text-[10px] font-mono uppercase tracking-wider block mb-1">Pilar 02</span>
                <p className="text-white font-bold text-sm">Playbooks Operacionais</p>
                <p className="text-white/50 text-[11px] mt-0.5">Padronização e treinamento de equipes.</p>
              </div>
              <div className="p-3.5 bg-[#0B1B3D]/80 border border-white/10 rounded-[14px] backdrop-blur-md">
                <span className="text-blue-400 text-[10px] font-mono uppercase tracking-wider block mb-1">Pilar 03</span>
                <p className="text-white font-bold text-sm">Advisory Executivo</p>
                <p className="text-white/50 text-[11px] mt-0.5">Conselho estratégico para fundadores.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center pointer-events-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-[12px] transition-all shadow-xl"
              >
                Contratar Consultoria
              </a>
              <span className="text-white/60 text-xs font-mono">
                Continue rolando para a transição musical ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 3 — TRANSIÇÃO NARRATIVA (35% a 42%)                       */}
        {/* ================================================================= */}
        {isStage3 && (
          <motion.div
            key="stage-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-left space-y-4 pt-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-md">
              <span className="text-purple-300 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
                Transição de Atmosfera
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight">
              Da Rigidez dos Negócios à <br />
              <span className="text-purple-300 italic font-normal">Sensibilidade da Música</span>
            </h3>

            <blockquote className="border-l-2 border-purple-400/50 pl-4 text-white/70 text-base sm:text-lg italic font-light">
              "A mesma mente que estrutura números e processos canaliza sensibilidade em acordes e atmosferas sonoras."
            </blockquote>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 4 — DANIEL MÚSICO & AGENDA MUSICAL (42% a 65%)            */}
        {/* ================================================================= */}
        {isStage4 && (
          <motion.div
            key="stage-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-left space-y-5 pt-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-purple-300 text-[11px] font-mono font-bold uppercase tracking-[0.3em]">
                02 • Dimensão Músico
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-[900] text-white tracking-tight leading-[0.92]">
              A Música como <br />
              <span className="text-purple-300 italic font-normal">Expressão e Adoração</span>
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
              Composições autorais, produção sonora de padrão cinematográfico no Estúdio Akedah e ministração em eventos e igrejas pelo Brasil.
            </p>

            {/* Área Elegante de Agenda Musical */}
            <div className="pt-2 max-w-2xl">
              <span className="text-purple-300/80 text-[10px] font-mono uppercase tracking-[0.25em] block mb-2 font-bold">
                Próximas Apresentações & Ministrações
              </span>
              <div className="space-y-2">
                {musicalEvents.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#0B1B3D]/85 border border-purple-500/20 rounded-[14px] backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display font-bold text-white text-base sm:text-lg bg-purple-500/20 px-2.5 py-1 rounded-[8px]">
                        {item.data}
                      </span>
                      <div>
                        <h4 className="text-white font-bold text-xs sm:text-sm">{item.evento}</h4>
                        <span className="text-white/50 text-[11px] font-mono">📍 {item.local} • {item.hora}</span>
                      </div>
                    </div>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-colors pointer-events-auto self-end sm:self-center"
                    >
                      Detalhes →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-1 flex items-center gap-4 pointer-events-auto">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-[12px] transition-all shadow-xl shadow-purple-600/20"
              >
                Ouvir no Spotify
              </a>
              <span className="text-white/60 text-xs font-mono">
                Continue rolando para a dimensão de fé ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 5 — DANIEL MENTOR DE FÉ (65% a 85%)                       */}
        {/* ================================================================= */}
        {isStage5 && (
          <motion.div
            key="stage-5"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-left space-y-6 pt-12"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-amber-300 text-[11px] font-mono font-bold uppercase tracking-[0.3em]">
                03 • Dimensão Mentor de Fé
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-[900] text-white tracking-tight leading-[0.92]">
              Princípios Bíblicos & <br />
              <span className="text-amber-200 italic font-normal">Propósito Real</span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-light">
              "Nenhum sucesso nos negócios compensa a perda dos valores essenciais. A liderança verdadeira é forjada no serviço ao próximo, na integridade inegociável e no compromisso com Deus e a família."
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 max-w-lg">
              <div className="p-4 bg-[#0B1B3D]/80 border border-amber-500/20 rounded-[14px] backdrop-blur-md">
                <span className="text-amber-300 text-[10px] font-mono uppercase tracking-wider block mb-1">Fundamento</span>
                <p className="text-white font-bold text-sm">Liderança Servidora</p>
                <p className="text-white/50 text-[11px] mt-1">Impacto que transcende métricas financeiras.</p>
              </div>
              <div className="p-4 bg-[#0B1B3D]/80 border border-amber-500/20 rounded-[14px] backdrop-blur-md">
                <span className="text-amber-300 text-[10px] font-mono uppercase tracking-wider block mb-1">Comunicação</span>
                <p className="text-white font-bold text-sm">Akedah Podcast</p>
                <p className="text-white/50 text-[11px] mt-1">Diálogos profundos com grandes líderes.</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 pointer-events-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-[#07132B] font-bold text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-[12px] transition-all shadow-xl shadow-amber-400/20"
              >
                Agendar Mentoria
              </a>
              <span className="text-white/60 text-xs font-mono">
                Continue rolando para a convergência das 3 personas ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 6 — CONVERGÊNCIA (85% a 100%)                             */}
        {/* ================================================================= */}
        {isStage6 && (
          <motion.div
            key="stage-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-left space-y-6 pt-8"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-white text-[11px] font-mono font-bold uppercase tracking-[0.3em]">
                Convergência • O Homem Completo
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9]">
              Não são três pessoas. <br />
              <span className="text-white/80 italic font-normal">É um só propósito.</span>
            </h2>

            {/* A fórmula visual de convergência */}
            <div className="p-4 sm:p-6 bg-[#0B1B3D]/90 border border-white/20 rounded-[20px] backdrop-blur-xl max-w-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-mono text-white/90">
                <span className="px-3 py-1.5 rounded-[10px] bg-blue-500/20 text-blue-300 font-bold border border-blue-400/30">
                  Empreendedor
                </span>
                <span className="text-white/40 font-bold text-lg">+</span>
                <span className="px-3 py-1.5 rounded-[10px] bg-purple-500/20 text-purple-300 font-bold border border-purple-400/30">
                  Músico
                </span>
                <span className="text-white/40 font-bold text-lg">+</span>
                <span className="px-3 py-1.5 rounded-[10px] bg-amber-500/20 text-amber-300 font-bold border border-amber-400/30">
                  Mentor de Fé
                </span>
                <span className="text-white/40 font-bold text-lg">=</span>
                <span className="px-4 py-1.5 rounded-[10px] bg-white text-[#07132B] font-bold shadow-lg">
                  Daniel Silva
                </span>
              </div>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
              A solidez do estrategista, a sensibilidade do músico e a retidão do mentor convergem para impactar pessoas, transformar negócios e construir legados duradouros.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center pointer-events-auto">
              <a
                href="#agenda-publica"
                className="bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-[12px] transition-all shadow-xl"
              >
                Explorar Vida Pública & Agendas ↓
              </a>
              <span className="text-white/60 text-xs font-mono">
                Role mais para conferir agendas e conteúdos
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DanielNarrativeLayers;
