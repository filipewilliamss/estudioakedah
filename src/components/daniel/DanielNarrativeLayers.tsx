import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/data/services";
import { DanielSignature, DaniRepetitiveSealStrip, DANIEL_TAGLINE, DANIEL_POSITIONING } from "./DanielBrandSignature";

interface DanielNarrativeLayersProps {
  progress: number;
}

// Agenda Musical elegante e autêntica (Dimensão 02)
const musicalEvents = [
  { data: "20/SET", evento: "Noite de Louvor e Ministração", local: "São Paulo, SP", hora: "19h30" },
  { data: "04/OUT", evento: "Encontro Acústico de Adoração", local: "Curitiba, PR", hora: "20h00" },
  { data: "18/OUT", evento: "Conferência de Adoração & Som", local: "Belo Horizonte, MG", hora: "19h00" },
];

export const DanielNarrativeLayers: React.FC<DanielNarrativeLayersProps> = ({ progress }) => {
  // Reancoragem estrita baseada nos timestamps do vídeo e no enquadramento de Daniel:
  const isStage1 = progress >= 0.00 && progress < 0.15; // Hero / Entrada (Vídeo 0.0s -> 6.0s)
  const isStage2 = progress >= 0.15 && progress < 0.35; // Dimensão 01: Empreendedor (Vídeo 6.0s -> 12.0s, close 9-12s)
  const isStage3 = progress >= 0.35 && progress < 0.45; // Painel de Transição 1: Respiro Institucional (Vídeo 12.0s -> 21.0s)
  const isStage4 = progress >= 0.45 && progress < 0.68; // Dimensão 02: Músico + Agenda (Vídeo 21.0s -> 28.0s, close 24-27s)
  const isStage5 = progress >= 0.68 && progress < 0.76; // Painel de Transição 2: Respiro Institucional (Vídeo 28.0s -> 33.0s)
  const isStage6 = progress >= 0.76 && progress < 0.90; // Dimensão 03: Mentor de Fé (Vídeo 33.0s -> 40.0s, sorriso 38-40s)
  const isStage7 = progress >= 0.90;                   // Convergência: O Homem Completo (Vídeo segura em 40.0s)

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
      <AnimatePresence mode="wait">
        {/* ================================================================= */}
        {/* ESTÁGIO 1 — ENTRADA / PORTAL (0% a 15% | Vídeo 0.0s a 6.0s)        */}
        {/* ================================================================= */}
        {isStage1 && (
          <motion.div
            key="stage-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-left space-y-6 pt-10"
          >
            {/* Assinatura Manuscrita Oficial Daniel Silva */}
            <div className="mb-2">
              <DanielSignature variant="white" size="lg" showPositioning={true} />
            </div>

            <h1 className="font-lato text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Estratégia. <br />
              <span className="text-white/80 font-normal italic">Fé. Música.</span>
            </h1>

            <p className="font-lato italic font-light text-white/90 text-base sm:text-xl md:text-2xl leading-relaxed max-w-2xl border-l-2 border-white/40 pl-4">
              "{DANIEL_TAGLINE}"
            </p>

            <p className="font-lato font-light text-white/70 text-sm sm:text-base max-w-xl">
              Entre em uma jornada cinematográfica conduzida pelo scroll pelas três facetas complementares de um mesmo propósito.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/20 backdrop-blur-md text-white/90 text-xs font-lato font-normal">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                Gire o scroll para cruzar o portal de entrada ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 2 — DANIEL EMPREENDEDOR (15% a 35% | Vídeo 6.0s a 12.0s)  */}
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
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-white text-[11px] font-lato font-bold uppercase tracking-[0.25em]">
                01 • Dimensão Empresário
              </span>
            </div>

            <h2 className="font-lato text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[0.95]">
              O Estrategista & <br />
              <span className="text-white/80 font-light italic">Construtor de Negócios</span>
            </h2>

            <p className="font-lato font-light text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
              Reestruturação de processos de vendas, modelagem de ofertas de alto valor e mentoria executiva para empresas em ritmo de expansão acelerada.
            </p>

            {/* Cards dos Pilares de Atuação */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="p-3.5 bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md">
                <span className="text-white/60 text-[10px] font-lato font-bold uppercase tracking-wider block mb-1">Pilar 01</span>
                <p className="text-white font-lato font-bold text-sm">Vendas B2B de Escala</p>
                <p className="text-white/60 font-lato font-light text-[11px] mt-0.5">Discurso comercial e funil de alta conversão.</p>
              </div>
              <div className="p-3.5 bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md">
                <span className="text-white/60 text-[10px] font-lato font-bold uppercase tracking-wider block mb-1">Pilar 02</span>
                <p className="text-white font-lato font-bold text-sm">Playbooks Operacionais</p>
                <p className="text-white/60 font-lato font-light text-[11px] mt-0.5">Sistematização de processos e equipes.</p>
              </div>
              <div className="p-3.5 bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md">
                <span className="text-white/60 text-[10px] font-lato font-bold uppercase tracking-wider block mb-1">Pilar 03</span>
                <p className="text-white font-lato font-bold text-sm">Advisory Executivo</p>
                <p className="text-white/60 font-lato font-light text-[11px] mt-0.5">Aconselhamento direto a fundadores.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center pointer-events-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#191919] hover:bg-transparent hover:text-white border border-white font-lato font-bold text-xs uppercase tracking-[0.2em] px-6 py-3.5 rounded-[10px] transition-all shadow-xl"
              >
                Contratar Consultoria
              </a>
              <span className="text-white/60 text-xs font-lato font-light">
                Continue rolando para a transição musical ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 3 — PAINEL DE TRANSIÇÃO 1 (35% a 45% | Vídeo 12.0s a 21.0s) */}
        {/* Respiro institucional sólido enquanto o vídeo percorre corredor   */}
        {/* ================================================================= */}
        {isStage3 && (
          <motion.div
            key="stage-3"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-left space-y-5 pt-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="text-white/80 text-[10px] font-lato font-bold uppercase tracking-[0.3em]">
                Respiro Institucional • Transição 01
              </span>
            </div>

            <h3 className="font-lato text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Da Rigidez dos Negócios à <br />
              <span className="text-white/80 font-light italic">Harmonia da Música</span>
            </h3>

            <blockquote className="border-l-2 border-white/50 pl-4 text-white/90 text-base sm:text-lg font-lato italic font-light">
              "A mesma disciplina cirúrgica que molda contratos e balanços comerciais encontra na música o espaço para a sensibilidade e adoração sincera."
            </blockquote>

            <div className="pt-2">
              <DanielSignature variant="white" size="sm" showPositioning={true} />
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 4 — DANIEL MÚSICO & AGENDA (45% a 68% | Vídeo 21.0s a 28.0s)*/}
        {/* Daniel 100% enquadrado em close musical enquanto a agenda aparece */}
        {/* ================================================================= */}
        {isStage4 && (
          <motion.div
            key="stage-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-left space-y-5 pt-4"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-white text-[11px] font-lato font-bold uppercase tracking-[0.25em]">
                02 • Dimensão Músico
              </span>
            </div>

            <h2 className="font-lato text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[0.95]">
              A Música como <br />
              <span className="text-white/80 font-light italic">Expressão & Adoração</span>
            </h2>

            <p className="font-lato font-light text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
              Composições autorais, produção sonora de padrão cinematográfico no Estúdio Akedah e encontros de louvor e ministração pelo Brasil.
            </p>

            {/* Agenda Musical Integrada */}
            <div className="pt-1 max-w-2xl">
              <span className="text-white/70 text-[10px] font-lato font-bold uppercase tracking-[0.25em] block mb-2">
                Próximas Apresentações & Ministrações
              </span>
              <div className="space-y-2">
                {musicalEvents.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-lato font-black text-white text-sm sm:text-base bg-white/10 px-2.5 py-1 rounded-[6px]">
                        {item.data}
                      </span>
                      <div>
                        <h4 className="text-white font-lato font-bold text-xs sm:text-sm">{item.evento}</h4>
                        <span className="text-white/60 font-lato font-light text-[11px]">📍 {item.local} • {item.hora}</span>
                      </div>
                    </div>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/70 font-lato font-bold text-[11px] uppercase tracking-wider transition-colors pointer-events-auto self-end sm:self-center"
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
                className="bg-white text-[#191919] hover:bg-transparent hover:text-white border border-white font-lato font-bold text-xs uppercase tracking-[0.2em] px-6 py-3.5 rounded-[10px] transition-all shadow-xl"
              >
                Ouvir no Spotify
              </a>
              <span className="text-white/60 text-xs font-lato font-light">
                Role para a transição de fé ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 5 — PAINEL DE TRANSIÇÃO 2 (68% a 76% | Vídeo 28.0s a 33.0s) */}
        {/* Respiro institucional reflexivo enquanto o vídeo abre a porta 3   */}
        {/* ================================================================= */}
        {isStage5 && (
          <motion.div
            key="stage-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-left space-y-5 pt-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="text-white/80 text-[10px] font-lato font-bold uppercase tracking-[0.3em]">
                Respiro Institucional • Transição 02
              </span>
            </div>

            <h3 className="font-lato text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Dos Palcos ao Altar: <br />
              <span className="text-white/80 font-light italic">O Fundamento Invisível</span>
            </h3>

            <blockquote className="border-l-2 border-white/50 pl-4 text-white/90 text-base sm:text-lg font-lato italic font-light">
              "Sem valores espirituais inegociáveis, o sucesso nos negócios e nos palcos desmorona. A integridade moral é o verdadeiro cimento de qualquer legado."
            </blockquote>

            <div className="pt-2">
              <DanielSignature variant="white" size="sm" showPositioning={true} />
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 6 — DANIEL MENTOR DE FÉ (76% a 90% | Vídeo 33.0s a 40.0s)  */}
        {/* Alta legibilidade com o Scrim Oficial preto da marca              */}
        {/* ================================================================= */}
        {isStage6 && (
          <motion.div
            key="stage-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-left space-y-5 pt-8"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-white text-[11px] font-lato font-bold uppercase tracking-[0.25em]">
                03 • Dimensão Mentor de Fé
              </span>
            </div>

            <h2 className="font-lato text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[0.95]">
              Princípios Bíblicos & <br />
              <span className="text-white/80 font-light italic">Propósito Inegociável</span>
            </h2>

            <p className="font-lato font-light text-white/95 text-base sm:text-lg leading-relaxed border-l-2 border-white/40 pl-4">
              "Nenhum sucesso corporativo justifica a perda dos valores essenciais. A liderança verdadeira é forjada no serviço ao próximo, na honra e no compromisso com Deus e a família."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg">
              <div className="p-4 bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md">
                <span className="text-white/60 text-[10px] font-lato font-bold uppercase tracking-wider block mb-1">Fundamento</span>
                <p className="text-white font-lato font-bold text-sm">Liderança Servidora</p>
                <p className="text-white/60 font-lato font-light text-[11px] mt-1">Impacto que transcende resultados financeiros imediatos.</p>
              </div>
              <div className="p-4 bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md">
                <span className="text-white/60 text-[10px] font-lato font-bold uppercase tracking-wider block mb-1">Comunicação</span>
                <p className="text-white font-lato font-bold text-sm">Akedah Podcast</p>
                <p className="text-white/60 font-lato font-light text-[11px] mt-1">Diálogos de profundidade com pensadores e líderes.</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 pointer-events-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#191919] hover:bg-transparent hover:text-white border border-white font-lato font-bold text-xs uppercase tracking-[0.2em] px-6 py-3.5 rounded-[10px] transition-all shadow-xl"
              >
                Agendar Mentoria
              </a>
              <span className="text-white/60 text-xs font-lato font-light">
                Role para ver a convergência total ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 7 — CONVERGÊNCIA (90% a 100% | Vídeo segura em 40.0s)     */}
        {/* ================================================================= */}
        {isStage7 && (
          <motion.div
            key="stage-7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-left space-y-6 pt-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-white text-[11px] font-lato font-bold uppercase tracking-[0.25em]">
                Convergência • O Homem Completo
              </span>
            </div>

            <h2 className="font-lato text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.9]">
              Não são três pessoas. <br />
              <span className="text-white/80 font-light italic">É um só propósito.</span>
            </h2>

            {/* A fórmula visual de convergência */}
            <div className="p-4 sm:p-6 bg-[#191919]/95 border border-white/20 rounded-[16px] backdrop-blur-xl max-w-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-lato text-white">
                <span className="px-3.5 py-1.5 rounded-[8px] bg-white/10 text-white font-bold border border-white/20">
                  Mentor
                </span>
                <span className="text-white/40 font-bold text-lg">+</span>
                <span className="px-3.5 py-1.5 rounded-[8px] bg-white/10 text-white font-bold border border-white/20">
                  Empresário
                </span>
                <span className="text-white/40 font-bold text-lg">+</span>
                <span className="px-3.5 py-1.5 rounded-[8px] bg-white/10 text-white font-bold border border-white/20">
                  Criador de conteúdo
                </span>
                <span className="text-white/40 font-bold text-lg">=</span>
                <span className="px-4 py-1.5 rounded-[8px] bg-white text-[#191919] font-black shadow-lg">
                  Daniel Silva
                </span>
              </div>
            </div>

            <p className="font-lato font-light text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
              A visão estratégica nos negócios, a sensibilidade nas melodias e a autoridade moral no discipulado convergem para transformar vidas e edificar legados perenes.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center pointer-events-auto">
              <a
                href="#agenda-publica"
                className="bg-white text-[#191919] hover:bg-transparent hover:text-white border border-white font-lato font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-[10px] transition-all shadow-xl"
              >
                Explorar Vida Pública & Agendas ↓
              </a>
              <span className="text-white/60 text-xs font-lato font-light">
                Continue rolando para acessar eventos e canais
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DanielNarrativeLayers;
