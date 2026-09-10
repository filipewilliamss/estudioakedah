import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/data/services";
import { DanielSignature, DANIEL_TAGLINE, DANIEL_POSITIONING } from "./DanielBrandSignature";
import { DanielGroundLiftText } from "./DanielGroundLiftText";

interface DanielNarrativeLayersProps {
  progress: number;
}

// Miniatura em loop de 8-10s para a assinatura visual de Convergência (4.2)
interface LoopingThumbnailProps {
  startTime: number;
  endTime: number;
  label: string;
}

const LoopingThumbnail: React.FC<LoopingThumbnailProps> = ({ startTime, endTime, label }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      video.currentTime = startTime;
      video.play().catch(() => {});
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= endTime || video.currentTime < startTime - 0.5) {
        video.currentTime = startTime;
      }
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);

    if (video.readyState >= 1) {
      video.currentTime = startTime;
      video.play().catch(() => {});
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [startTime, endTime]);

  return (
    <div className="convergencia__thumb">
      <video
        ref={videoRef}
        src="/videos/site-video-daniel-desktop.mp4"
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        className="w-full h-full object-cover pointer-events-none"
        style={{ objectPosition: "center 35%" }}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
};

// Agenda Musical elegante e autêntica (Dimensão 02)
const musicalEvents = [
  { data: "20/SET", evento: "Noite de Louvor e Ministração", local: "São Paulo, SP", hora: "19h30" },
  { data: "04/OUT", evento: "Encontro Acústico de Adoração", local: "Curitiba, PR", hora: "20h00" },
  { data: "18/OUT", evento: "Conferência de Adoração & Som", local: "Belo Horizonte, MG", hora: "19h00" },
];

export const DanielNarrativeLayers: React.FC<DanielNarrativeLayersProps> = ({ progress }) => {
  // Mapeamento das telas em 100vh com "uma ideia por tela" (Conceito de Remoção):
  const isHero = progress >= 0.00 && progress < 0.12;
  const isEmpreendedorA = progress >= 0.12 && progress < 0.22; // Declaração "O ESTRATEGISTA"
  const isEmpreendedorB = progress >= 0.22 && progress < 0.35; // Pilares "01, 02, 03"
  const isTrans1 = progress >= 0.35 && progress < 0.43;        // Transição 1 (Respiro Marinho)
  const isMusicoA = progress >= 0.43 && progress < 0.55;       // Músico Vídeo (Porta abrindo, violão, sorriso, giro)
  const isMusicoB = progress >= 0.55 && progress < 0.65;       // Pilares Música (Tela Branca: 01 Produção...)
  const isTrans2 = progress >= 0.65 && progress < 0.72;        // Transição 2 (Respiro Marinho)
  const isFeA = progress >= 0.72 && progress < 0.81;          // Declaração "O MENTOR" (Porta clássica abrindo)
  const isFeB = progress >= 0.81 && progress < 0.88;          // Manifesto de Fé
  const isConvergenciaA = progress >= 0.88 && progress < 0.94; // "NÃO SÃO TRÊS PESSOAS" (Off-white)
  const isConvergenciaB = progress >= 0.94;                     // "É UM SÓ PROPÓSITO" (Preto + 3 thumbs)

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center overflow-hidden w-full">
      {/* ================================================================= */}
      {/* TELA 01 — HERO / ENTRADA (CONCEITO DE REMOÇÃO)                    */}
      {/* ================================================================= */}
      <div
        className="scr !absolute inset-0 flex flex-col justify-between p-[3rem] sm:p-[4rem] transition-opacity duration-500"
        style={{
          opacity: isHero ? 1 : 0,
          pointerEvents: isHero ? "auto" : "none",
          zIndex: isHero ? 25 : -1,
        }}
      >
        <div className="text-left font-serif italic text-[2.4rem] text-[var(--off-white)] select-none">
          Daniel Silva
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[2rem] w-full">
          <div className="text-left">
            <h1 className="hero__h1 display text-fluid-125 text-[var(--off-white)] leading-[0.86] tracking-[-0.025em] uppercase">
              Estratégia.<br />
              <span className="text-[var(--bege)] font-serif font-light italic lowercase">Fé. Música.</span>
            </h1>
            <p className="corpo__p font-lato italic font-light text-[var(--off-white)]/80 text-fluid-20 mt-[1.6rem] max-w-[68ch]">
              "{DANIEL_TAGLINE}"
            </p>
          </div>
          <div className="text-right font-lato font-bold text-fluid-12 tracking-[0.22em] text-[var(--off-white)]/60 uppercase pb-[1rem]">
            Role para entrar ↓
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* TELA 02 — DECLARAÇÃO EMPREENDEDOR (OVERLAY SOBRE O VÍDEO)         */}
      {/* ================================================================= */}
      <div
        className="scr !absolute inset-0 flex flex-col justify-center px-[3rem] sm:px-[4rem] transition-opacity duration-500"
        style={{
          opacity: isEmpreendedorA ? 1 : 0,
          pointerEvents: isEmpreendedorA ? "auto" : "none",
          zIndex: isEmpreendedorA ? 25 : -1,
        }}
      >
        <div className="absolute top-[4rem] left-[4rem]">
          <span className="font-lato font-bold text-fluid-12 tracking-[0.2em] text-[var(--bege)] uppercase">
            01 — CONSULTORIA
          </span>
        </div>
        <h2 className="dimensao__h2 display text-fluid-190 text-[var(--off-white)] leading-[0.84] tracking-[-0.025em] uppercase max-w-[14ch] text-left">
          O estrategista
        </h2>
      </div>

      {/* ================================================================= */}
      {/* TELA 03 — PILARES DE NEGÓCIOS (OVERLAY SOBRE O VÍDEO)             */}
      {/* ================================================================= */}
      <div
        className="scr !absolute inset-0 flex flex-col justify-center px-[3rem] sm:px-[4rem] transition-opacity duration-500"
        style={{
          opacity: isEmpreendedorB ? 1 : 0,
          pointerEvents: isEmpreendedorB ? "auto" : "none",
          zIndex: isEmpreendedorB ? 25 : -1,
        }}
      >
        <div className="w-full max-w-[1400px] text-left">
          <div className="flex items-baseline gap-[2.4rem] border-b border-white/20 pb-[1.6rem] mb-[1.6rem]">
            <span className="cond text-fluid-110 text-[var(--bege)] leading-[0.8] w-[9rem] shrink-0">01</span>
            <span className="font-lato font-black text-fluid-54 text-[var(--off-white)] uppercase leading-[0.95]">
              Vendas B2B de escala
            </span>
          </div>
          <div className="flex items-baseline gap-[2.4rem] border-b border-white/20 pb-[1.6rem] mb-[1.6rem]">
            <span className="cond text-fluid-110 text-[var(--bege)] leading-[0.8] w-[9rem] shrink-0">02</span>
            <span className="font-lato font-black text-fluid-54 text-[var(--off-white)] uppercase leading-[0.95]">
              Playbooks operacionais
            </span>
          </div>
          <div className="flex items-baseline gap-[2.4rem]">
            <span className="cond text-fluid-110 text-[var(--bege)] leading-[0.8] w-[9rem] shrink-0">03</span>
            <span className="font-lato font-black text-fluid-54 text-[var(--off-white)] uppercase leading-[0.95]">
              Advisory executivo
            </span>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* TELA 04 — PAINEL DE TRANSIÇÃO 1 (ALVO 2 — REGIME B)               */}
      {/* ================================================================= */}
      <div
        className="section--flat panel-transition"
        style={{
          opacity: isTrans1 ? 1 : 0,
          pointerEvents: isTrans1 ? "auto" : "none",
          zIndex: isTrans1 ? 35 : -1,
          transition: "opacity 0.4s ease-out",
        }}
      >
        <div className="container" data-section="painel-transicao-1">
          <DanielGroundLiftText
            text="Da rigidez dos negócios à harmonia da música"
            progress={progress}
            startRange={0.350}
            endRange={0.410}
          />
        </div>
      </div>

      {/* ================================================================= */}
      {/* TELA 05 — DECLARAÇÃO MÚSICO (OVERLAY SOBRE O VÍDEO)               */}
      {/* ================================================================= */}
      <div
        className="scr !absolute inset-0 flex flex-col justify-center px-[3rem] sm:px-[4rem] transition-opacity duration-500"
        style={{
          opacity: isMusicoA ? 1 : 0,
          pointerEvents: isMusicoA ? "auto" : "none",
          zIndex: isMusicoA ? 25 : -1,
        }}
      >
        <div className="absolute top-[4rem] left-[4rem]">
          <span className="font-lato font-bold text-fluid-12 tracking-[0.2em] text-[var(--bege)] uppercase">
            02 — MINISTRAÇÃO
          </span>
        </div>
        <h2 className="display text-fluid-190 text-[var(--off-white)] leading-[0.84] tracking-[-0.025em] uppercase max-w-[14ch] text-left">
          O músico
        </h2>
      </div>

      {/* ================================================================= */}
      {/* TELA 06 — PILARES DE MÚSICA (SÓLIDO OFF-WHITE #F2F0EF)            */}
      {/* ================================================================= */}
      <div
        className="scr !absolute inset-0 flex flex-col justify-center px-[3rem] sm:px-[4rem] transition-opacity duration-500 bg-[var(--off-white)]"
        style={{
          opacity: isMusicoB ? 1 : 0,
          pointerEvents: isMusicoB ? "auto" : "none",
          zIndex: isMusicoB ? 25 : -1,
        }}
      >
        <div className="w-full max-w-[1400px] text-left">
          <div className="flex items-baseline gap-[2.4rem] border-b border-black/15 pb-[1.6rem] mb-[1.6rem]">
            <span className="cond text-fluid-110 text-[var(--bege)] leading-[0.8] w-[9rem] shrink-0">01</span>
            <span className="font-lato font-black text-fluid-54 text-[var(--preto)] uppercase leading-[0.95]">
              Produção Cinematográfica Akedah
            </span>
          </div>
          <div className="flex items-baseline gap-[2.4rem] border-b border-black/15 pb-[1.6rem] mb-[1.6rem]">
            <span className="cond text-fluid-110 text-[var(--bege)] leading-[0.8] w-[9rem] shrink-0">02</span>
            <span className="font-lato font-black text-fluid-54 text-[var(--preto)] uppercase leading-[0.95]">
              Encontros Acústicos de Adoração
            </span>
          </div>
          <div className="flex items-baseline gap-[2.4rem]">
            <span className="cond text-fluid-110 text-[var(--bege)] leading-[0.8] w-[9rem] shrink-0">03</span>
            <span className="font-lato font-black text-fluid-54 text-[var(--preto)] uppercase leading-[0.95]">
              Ministrações & Louvor pelo Brasil
            </span>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* TELA 07 — PAINEL DE TRANSIÇÃO 2 (ALVO 2 — REGIME B)               */}
      {/* ================================================================= */}
      <div
        className="section--flat panel-transition"
        style={{
          opacity: isTrans2 ? 1 : 0,
          pointerEvents: isTrans2 ? "auto" : "none",
          zIndex: isTrans2 ? 35 : -1,
          transition: "opacity 0.4s ease-out",
        }}
      >
        <div className="container" data-section="painel-transicao-2">
          <DanielGroundLiftText
            text="Dos palcos ao altar: o fundamento"
            progress={progress}
            startRange={0.655}
            endRange={0.710}
          />
        </div>
      </div>

      {/* ================================================================= */}
      {/* TELA 08 — DECLARAÇÃO FÉ (OVERLAY SOBRE O VÍDEO)                   */}
      {/* ================================================================= */}
      <div
        className="scr !absolute inset-0 flex flex-col justify-center px-[3rem] sm:px-[4rem] transition-opacity duration-500"
        style={{
          opacity: isFeA ? 1 : 0,
          pointerEvents: isFeA ? "auto" : "none",
          zIndex: isFeA ? 25 : -1,
        }}
      >
        <div className="absolute top-[4rem] left-[4rem]">
          <span className="font-lato font-bold text-fluid-12 tracking-[0.2em] text-[var(--bege)] uppercase">
            03 — DISCIPULADO
          </span>
        </div>
        <h2 className="display text-fluid-190 text-[var(--off-white)] leading-[0.84] tracking-[-0.025em] uppercase max-w-[14ch] text-left">
          O mentor
        </h2>
      </div>

      {/* ================================================================= */}
      {/* TELA 09 — MANIFESTO DE FÉ (OVERLAY SOBRE O VÍDEO)                 */}
      {/* ================================================================= */}
      <div
        className="scr !absolute inset-0 flex flex-col justify-center px-[3rem] sm:px-[4rem] transition-opacity duration-500"
        style={{
          opacity: isFeB ? 1 : 0,
          pointerEvents: isFeB ? "auto" : "none",
          zIndex: isFeB ? 25 : -1,
        }}
      >
        <div className="w-full max-w-[1400px] text-left">
          <div className="flex items-baseline gap-[2.4rem] border-b border-white/20 pb-[1.6rem] mb-[1.6rem]">
            <span className="cond text-fluid-110 text-[var(--bege)] leading-[0.8] w-[9rem] shrink-0">01</span>
            <span className="font-lato font-black text-fluid-54 text-[var(--off-white)] uppercase leading-[0.95]">
              Liderança Servidora & Princípios
            </span>
          </div>
          <div className="flex items-baseline gap-[2.4rem] border-b border-white/20 pb-[1.6rem] mb-[1.6rem]">
            <span className="cond text-fluid-110 text-[var(--bege)] leading-[0.8] w-[9rem] shrink-0">02</span>
            <span className="font-lato font-black text-fluid-54 text-[var(--off-white)] uppercase leading-[0.95]">
              Akedah Podcast & Grandes Diálogos
            </span>
          </div>
          <div className="flex items-baseline gap-[2.4rem]">
            <span className="cond text-fluid-110 text-[var(--bege)] leading-[0.8] w-[9rem] shrink-0">03</span>
            <span className="font-lato font-black text-fluid-54 text-[var(--off-white)] uppercase leading-[0.95]">
              Legado Perene que Transcende
            </span>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* TELA 10 — CONVERGÊNCIA A (SÓLIDO OFF-WHITE #F2F0EF)               */}
      {/* ================================================================= */}
      <div
        className="scr !absolute inset-0 flex items-center px-[3rem] sm:px-[4rem] transition-opacity duration-500 bg-[var(--off-white)] text-[var(--preto)]"
        style={{
          opacity: isConvergenciaA ? 1 : 0,
          pointerEvents: isConvergenciaA ? "auto" : "none",
          zIndex: isConvergenciaA ? 30 : -1,
        }}
      >
        <h2 className="display text-fluid-150 text-[var(--preto)] leading-[0.86] tracking-[-0.025em] uppercase max-w-[15ch] text-left">
          Não são três pessoas.
        </h2>
      </div>

      {/* ================================================================= */}
      {/* TELA 11 — CONVERGÊNCIA B (SÓLIDO MARINHO #002867)                 */}
      {/* ================================================================= */}
      <div
        className="section--flat scr !absolute inset-0 flex flex-col justify-center transition-opacity duration-500 bg-[var(--marinho)]"
        style={{
          opacity: isConvergenciaB ? 1 : 0,
          pointerEvents: isConvergenciaB ? "auto" : "none",
          zIndex: isConvergenciaB ? 30 : -1,
        }}
      >
        <div className="container w-full text-left" data-section="convergencia">
          <h2 className="display text-fluid-150 text-[var(--off-white)] leading-[0.86] tracking-[-0.025em] uppercase mb-[4rem]">
            É um só propósito.
          </h2>

          <div
            data-prop="proposito"
            className="convergencia__linha proposito-monumental"
          >
            <span className="convergencia__letra">PRO</span>
            <LoopingThumbnail startTime={6.0} endTime={12.0} label="Daniel Empreendedor" />
            <span className="convergencia__letra display--diacritic-safe">PÓ</span>
            <LoopingThumbnail startTime={21.0} endTime={28.0} label="Daniel Músico" />
            <span className="convergencia__letra">SI</span>
            <LoopingThumbnail startTime={33.0} endTime={40.0} label="Daniel Mentor de Fé" />
            <span className="convergencia__letra">TO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanielNarrativeLayers;
