import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/data/services";
import { DanielSignature, DANIEL_TAGLINE, DANIEL_POSITIONING } from "./DanielBrandSignature";

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
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center px-[24px] sm:px-[48px] md:px-[64px] lg:px-[96px] overflow-hidden">
      <AnimatePresence mode="wait">
        {/* ================================================================= */}
        {/* ESTÁGIO 1 — ENTRADA / PORTAL (0% a 15% | Vídeo 0.0s a 6.0s)        */}
        {/* Headline em --text-110 com tratamento .display e diacritic-safe   */}
        {/* ================================================================= */}
        {isStage1 && (
          <motion.div
            key="stage-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[890px] text-left space-y-[24px] pt-[40px]"
          >
            {/* Assinatura Manuscrita Oficial Daniel Silva */}
            <div className="mb-[8px]">
              <DanielSignature variant="white" size="lg" showPositioning={true} />
            </div>

            {/* Headline com token --text-110 e entrelinha segura para o diacrítico de MÚSICA */}
            <h1 className="display display--diacritic-safe text-fluid-110 text-white">
              Estratégia. <br />
              <span className="text-white/80 font-normal italic lowercase font-serif">fé. música.</span>
            </h1>

            <p className="font-lato italic font-light text-white/90 text-fluid-20 leading-relaxed max-w-[68ch] border-l-2 border-white/40 pl-[16px]">
              "{DANIEL_TAGLINE}"
            </p>

            <p className="font-lato font-normal text-white/70 text-fluid-16 max-w-[68ch] leading-relaxed">
              Entre em uma jornada cinematográfica conduzida pelo scroll pelas três facetas complementares de um mesmo propósito.
            </p>

            <div className="pt-[8px] flex items-center gap-[16px]">
              <span className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-black/50 border border-white/20 backdrop-blur-md text-white/90 text-fluid-10 font-lato font-bold uppercase tracking-[0.25em]">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                Gire o scroll para cruzar o portal de entrada ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 2 — DANIEL EMPREENDEDOR (15% a 35% | Vídeo 6.0s a 12.0s)  */}
        {/* Headline em --text-80 com tratamento .display                     */}
        {/* ================================================================= */}
        {isStage2 && (
          <motion.div
            key="stage-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[768px] text-left space-y-[20px] pt-[32px]"
          >
            <div className="inline-flex items-center gap-[10px] px-[16px] py-[6px] rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-white text-fluid-10 font-lato font-bold uppercase tracking-[0.25em]">
                01 • Dimensão Empresário
              </span>
            </div>

            <h2 className="display text-fluid-80 text-white">
              O Estrategista & <br />
              <span className="text-white/80 font-normal italic lowercase font-serif">negócios</span>
            </h2>

            <p className="font-lato font-normal text-white/85 text-fluid-16 leading-relaxed max-w-[68ch]">
              Reestruturação de processos de vendas, modelagem de ofertas de alto valor e mentoria executiva para empresas em ritmo de expansão acelerada.
            </p>

            {/* Cards dos Pilares de Atuação */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px] pt-[8px] max-w-[672px]">
              <div className="p-[14px] bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md">
                <span className="text-white/60 text-fluid-10 font-lato font-bold uppercase tracking-wider block mb-[4px]">Pilar 01</span>
                <p className="text-white font-lato font-black text-fluid-16">Vendas B2B de Escala</p>
                <p className="text-white/60 font-lato font-normal text-fluid-13 mt-[2px]">Discurso comercial e funil de alta conversão.</p>
              </div>
              <div className="p-[14px] bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md">
                <span className="text-white/60 text-fluid-10 font-lato font-bold uppercase tracking-wider block mb-[4px]">Pilar 02</span>
                <p className="text-white font-lato font-black text-fluid-16">Playbooks Operacionais</p>
                <p className="text-white/60 font-lato font-normal text-fluid-13 mt-[2px]">Sistematização de processos e equipes.</p>
              </div>
              <div className="p-[14px] bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md">
                <span className="text-white/60 text-fluid-10 font-lato font-bold uppercase tracking-wider block mb-[4px]">Pilar 03</span>
                <p className="text-white font-lato font-black text-fluid-16">Advisory Executivo</p>
                <p className="text-white/60 font-lato font-normal text-fluid-13 mt-[2px]">Aconselhamento direto a fundadores.</p>
              </div>
            </div>

            <div className="pt-[8px] flex flex-wrap gap-[16px] items-center pointer-events-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#191919] hover:bg-transparent hover:text-white border border-white font-lato font-black text-fluid-13 uppercase tracking-[0.2em] px-[24px] py-[14px] rounded-[10px] transition-all shadow-xl"
              >
                Contratar Consultoria
              </a>
              <span className="text-white/60 text-fluid-13 font-lato font-normal">
                Continue rolando para a transição musical ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 3 — PAINEL DE TRANSIÇÃO 1 (35% a 45% | Vídeo 12.0s a 21.0s) */}
        {/* Respiro institucional sólido com títulos em --text-44 e quotes    */}
        {/* ================================================================= */}
        {isStage3 && (
          <motion.div
            key="stage-3"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="max-w-[768px] text-left space-y-[20px] pt-[32px]"
          >
            <div className="inline-flex items-center gap-[8px] px-[14px] py-[4px] rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="text-white/80 text-fluid-10 font-lato font-bold uppercase tracking-[0.3em]">
                Respiro Institucional • Transição 01
              </span>
            </div>

            <h3 className="display display--diacritic-safe text-fluid-44 text-white">
              Da Rigidez dos Negócios à <br />
              <span className="text-white/80 font-normal italic lowercase font-serif">harmonia da música</span>
            </h3>

            <blockquote className="border-l-2 border-white/50 pl-[16px] text-white/90 text-fluid-20 font-lato italic font-light max-w-[68ch] leading-relaxed">
              "A mesma disciplina cirúrgica que molda contratos e balanços comerciais encontra na música o espaço para a sensibilidade e adoração sincera."
            </blockquote>

            <div className="pt-[8px]">
              <DanielSignature variant="white" size="sm" showPositioning={true} />
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 4 — DANIEL MÚSICO & AGENDA (45% a 68% | Vídeo 21.0s a 28.0s)*/}
        {/* Headline em --text-80 (.display) e data da agenda em Barlow Cond 900 */}
        {/* ================================================================= */}
        {isStage4 && (
          <motion.div
            key="stage-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[768px] text-left space-y-[20px] pt-[16px]"
          >
            <div className="inline-flex items-center gap-[10px] px-[16px] py-[6px] rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-white text-fluid-10 font-lato font-bold uppercase tracking-[0.25em]">
                02 • Dimensão Músico
              </span>
            </div>

            {/* Headline com tratamento display--diacritic-safe para MÚSICA */}
            <h2 className="display display--diacritic-safe text-fluid-80 text-white">
              A Música como <br />
              <span className="text-white/80 font-normal italic lowercase font-serif">expressão</span>
            </h2>

            <p className="font-lato font-normal text-white/85 text-fluid-16 leading-relaxed max-w-[68ch]">
              Composições autorais, produção sonora de padrão cinematográfico no Estúdio Akedah e encontros de louvor e ministração pelo Brasil.
            </p>

            {/* Agenda Musical Integrada */}
            <div className="pt-[4px] max-w-[672px]">
              <span className="text-white/70 text-fluid-10 font-lato font-bold uppercase tracking-[0.25em] block mb-[8px]">
                Próximas Apresentações & Ministrações
              </span>
              <div className="space-y-[8px]">
                {musicalEvents.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-[12px] bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-[8px]"
                  >
                    <div className="flex items-center gap-[14px]">
                      {/* Número da data com Barlow Condensed 900 em --text-44 */}
                      <span className="display--condensed text-fluid-44 text-white bg-white/10 px-[12px] py-[2px] rounded-[6px]">
                        {item.data}
                      </span>
                      <div>
                        {/* Título de evento em Lato Black --text-28 */}
                        <h4 className="font-lato font-black text-fluid-20 sm:text-fluid-28 text-white leading-tight">
                          {item.evento}
                        </h4>
                        {/* Metadados da agenda em Lato 400 --text-13 */}
                        <span className="text-white/60 font-lato font-normal text-fluid-13">
                          📍 {item.local} • {item.hora}
                        </span>
                      </div>
                    </div>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/70 font-lato font-bold text-fluid-13 uppercase tracking-wider transition-colors pointer-events-auto self-end sm:self-center"
                    >
                      Detalhes →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-[4px] flex items-center gap-[16px] pointer-events-auto">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#191919] hover:bg-transparent hover:text-white border border-white font-lato font-black text-fluid-13 uppercase tracking-[0.2em] px-[24px] py-[14px] rounded-[10px] transition-all shadow-xl"
              >
                Ouvir no Spotify
              </a>
              <span className="text-white/60 text-fluid-13 font-lato font-normal">
                Role para a transição de fé ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 5 — PAINEL DE TRANSIÇÃO 2 (68% a 76% | Vídeo 28.0s a 33.0s) */}
        {/* Respiro institucional reflexivo                                   */}
        {/* ================================================================= */}
        {isStage5 && (
          <motion.div
            key="stage-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="max-w-[768px] text-left space-y-[20px] pt-[32px]"
          >
            <div className="inline-flex items-center gap-[8px] px-[14px] py-[4px] rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="text-white/80 text-fluid-10 font-lato font-bold uppercase tracking-[0.3em]">
                Respiro Institucional • Transição 02
              </span>
            </div>

            <h3 className="display text-fluid-44 text-white">
              Dos Palcos ao Altar: <br />
              <span className="text-white/80 font-normal italic lowercase font-serif">o fundamento</span>
            </h3>

            <blockquote className="border-l-2 border-white/50 pl-[16px] text-white/90 text-fluid-20 font-lato italic font-light max-w-[68ch] leading-relaxed">
              "Sem valores espirituais inegociáveis, o sucesso nos negócios e nos palcos desmorona. A integridade moral é o verdadeiro cimento de qualquer legado."
            </blockquote>

            <div className="pt-[8px]">
              <DanielSignature variant="white" size="sm" showPositioning={true} />
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 6 — DANIEL MENTOR DE FÉ (76% a 90% | Vídeo 33.0s a 40.0s)  */}
        {/* Headline em --text-80 e verificação em PROPÓSITO / BÍBLICOS       */}
        {/* ================================================================= */}
        {isStage6 && (
          <motion.div
            key="stage-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[768px] text-left space-y-[20px] pt-[32px]"
          >
            <div className="inline-flex items-center gap-[10px] px-[16px] py-[6px] rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-white text-fluid-10 font-lato font-bold uppercase tracking-[0.25em]">
                03 • Dimensão Mentor de Fé
              </span>
            </div>

            {/* Headline com display--diacritic-safe para PROPÓSITO e BÍBLICOS */}
            <h2 className="display display--diacritic-safe text-fluid-80 text-white">
              Princípios Bíblicos & <br />
              <span className="text-white/80 font-normal italic lowercase font-serif">propósito</span>
            </h2>

            <blockquote className="font-lato italic font-light text-white/95 text-fluid-20 leading-relaxed border-l-2 border-white/40 pl-[16px] max-w-[68ch]">
              "Nenhum sucesso corporativo justifica a perda dos valores essenciais. A liderança verdadeira é forjada no serviço ao próximo, na honra e no compromisso com Deus e a família."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] pt-[8px] max-w-[512px]">
              <div className="p-[16px] bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md">
                <span className="text-white/60 text-fluid-10 font-lato font-bold uppercase tracking-wider block mb-[4px]">Fundamento</span>
                <p className="text-white font-lato font-black text-fluid-16">Liderança Servidora</p>
                <p className="text-white/60 font-lato font-normal text-fluid-13 mt-[4px]">Impacto que transcende resultados financeiros imediatos.</p>
              </div>
              <div className="p-[16px] bg-[#191919]/90 border border-white/15 rounded-[12px] backdrop-blur-md">
                <span className="text-white/60 text-fluid-10 font-lato font-bold uppercase tracking-wider block mb-[4px]">Comunicação</span>
                <p className="text-white font-lato font-black text-fluid-16">Akedah Podcast</p>
                <p className="text-white/60 font-lato font-normal text-fluid-13 mt-[4px]">Diálogos de profundidade com pensadores e líderes.</p>
              </div>
            </div>

            <div className="pt-[8px] flex items-center gap-[16px] pointer-events-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#191919] hover:bg-transparent hover:text-white border border-white font-lato font-black text-fluid-13 uppercase tracking-[0.2em] px-[24px] py-[14px] rounded-[10px] transition-all shadow-xl"
              >
                Agendar Mentoria
              </a>
              <span className="text-white/60 text-fluid-13 font-lato font-normal">
                Role para ver a convergência total ↓
              </span>
            </div>
          </motion.div>
        )}

        {/* ================================================================= */}
        {/* ESTÁGIO 7 — CONVERGÊNCIA (90% a 100% | Vídeo segura em 40.0s)     */}
        {/* Palavra monumental em Barlow Cond 900 (--text-280) ao fundo       */}
        {/* ================================================================= */}
        {isStage7 && (
          <motion.div
            key="stage-7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[890px] text-left space-y-[24px] pt-[24px] relative"
          >
            {/* Palavra Monumental da Convergência em Barlow Condensed 900 com token --text-280 */}
            <div
              className="display--condensed display--diacritic-safe text-fluid-280 text-white/[0.07] select-none pointer-events-none absolute -bottom-[60px] -right-[40px] leading-[0.88] z-0"
              aria-hidden="true"
            >
              CONVERGÊNCIA
            </div>

            <div className="relative z-10 space-y-[20px]">
              <div className="inline-flex items-center gap-[10px] px-[16px] py-[6px] rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="text-white text-fluid-10 font-lato font-bold uppercase tracking-[0.25em]">
                  Convergência • O Homem Completo
                </span>
              </div>

              <h2 className="display display--diacritic-safe text-fluid-80 text-white">
                Não são três pessoas. <br />
                <span className="text-white/80 font-normal italic lowercase font-serif">é um único propósito.</span>
              </h2>

              {/* A fórmula visual de convergência */}
              <div className="p-[16px] sm:p-[24px] bg-[#191919]/95 border border-white/20 rounded-[16px] backdrop-blur-xl max-w-[672px]">
                <div className="flex flex-wrap items-center justify-between gap-[12px] text-fluid-13 font-lato text-white">
                  <span className="px-[14px] py-[6px] rounded-[8px] bg-white/10 text-white font-bold border border-white/20">
                    Mentor
                  </span>
                  <span className="text-white/40 font-bold text-fluid-20">+</span>
                  <span className="px-[14px] py-[6px] rounded-[8px] bg-white/10 text-white font-bold border border-white/20">
                    Empresário
                  </span>
                  <span className="text-white/40 font-bold text-fluid-20">+</span>
                  <span className="px-[14px] py-[6px] rounded-[8px] bg-white/10 text-white font-bold border border-white/20">
                    Criador de conteúdo
                  </span>
                  <span className="text-white/40 font-bold text-fluid-20">=</span>
                  <span className="px-[16px] py-[6px] rounded-[8px] bg-white text-[#191919] font-black shadow-lg text-fluid-20">
                    Daniel Silva
                  </span>
                </div>
              </div>

              <p className="font-lato font-normal text-white/85 text-fluid-16 leading-relaxed max-w-[68ch]">
                A visão estratégica nos negócios, a sensibilidade nas melodias e a autoridade moral no discipulado convergem para transformar vidas e edificar legados perenes.
              </p>

              <div className="pt-[8px] flex flex-wrap gap-[16px] items-center pointer-events-auto">
                <a
                  href="#agenda-publica"
                  className="bg-white text-[#191919] hover:bg-transparent hover:text-white border border-white font-lato font-black text-fluid-13 uppercase tracking-[0.2em] px-[32px] py-[14px] rounded-[10px] transition-all shadow-xl"
                >
                  Explorar Vida Pública & Agendas ↓
                </a>
                <span className="text-white/60 text-fluid-13 font-lato font-normal">
                  Continue rolando para acessar eventos e canais
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DanielNarrativeLayers;
