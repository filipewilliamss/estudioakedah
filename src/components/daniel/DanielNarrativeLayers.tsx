import React from "react";
import { DanielGroundLiftText } from "./DanielGroundLiftText";

interface DanielNarrativeLayersProps {
  progress: number;
}

export const DanielNarrativeLayers: React.FC<DanielNarrativeLayersProps> = ({ progress }) => {
  // Transições e painéis narrativos calibrados:
  const isTrans1 = progress >= 0.32 && progress < 0.44;        // Transição 1: "Da rigidez dos negócios à harmonia da música"
  const isMusicoPilares = progress >= 0.62 && progress < 0.72; // Tela Branca: 01 Produção Cinematográfica Akedah...
  const isTrans2 = progress >= 0.72 && progress < 0.80;        // Transição 2: "Dos palcos ao altar: o fundamento"

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center overflow-hidden w-full">
      {/* ================================================================= */}
      {/* PAINEL DE TRANSIÇÃO 1 (AZUL-MARINHO)                               */}
      {/* "Da rigidez dos negócios à harmonia da música" (Ground Lift 3D)   */}
      {/* ================================================================= */}
      <div
        className="section--flat panel-transition scr !absolute inset-0 flex flex-col justify-center"
        style={{
          opacity: isTrans1 ? 1 : 0,
          pointerEvents: isTrans1 ? "auto" : "none",
          zIndex: isTrans1 ? 35 : -1,
          visibility: isTrans1 ? "visible" : "hidden",
          transition: "opacity 0.4s ease-out",
        }}
      >
        <div className="container" data-section="painel-transicao-1">
          <DanielGroundLiftText
            text="Da rigidez dos negócios à harmonia da música"
            progress={progress}
            startRange={0.33}
            endRange={0.42}
          />
        </div>
      </div>

      {/* ================================================================= */}
      {/* TELA BRANCA — PILARES DE MÚSICA (SÓLIDO OFF-WHITE #F2F0EF)        */}
      {/* Surge após a câmera girar para a parede aos 28.0s                 */}
      {/* ================================================================= */}
      <div
        className="scr !absolute inset-0 flex flex-col justify-center px-[3rem] sm:px-[4rem] bg-[var(--off-white)]"
        style={{
          opacity: isMusicoPilares ? 1 : 0,
          pointerEvents: isMusicoPilares ? "auto" : "none",
          zIndex: isMusicoPilares ? 30 : -1,
          visibility: isMusicoPilares ? "visible" : "hidden",
          transition: "opacity 0.4s ease-out",
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
      {/* PAINEL DE TRANSIÇÃO 2 (AZUL-MARINHO)                               */}
      {/* "Dos palcos ao altar: o fundamento" (Ground Lift 3D)              */}
      {/* ================================================================= */}
      <div
        className="section--flat panel-transition scr !absolute inset-0 flex flex-col justify-center"
        style={{
          opacity: isTrans2 ? 1 : 0,
          pointerEvents: isTrans2 ? "auto" : "none",
          zIndex: isTrans2 ? 35 : -1,
          visibility: isTrans2 ? "visible" : "hidden",
          transition: "opacity 0.4s ease-out",
        }}
      >
        <div className="container" data-section="painel-transicao-2">
          <DanielGroundLiftText
            text="Dos palcos ao altar: o fundamento"
            progress={progress}
            startRange={0.73}
            endRange={0.79}
          />
        </div>
      </div>
    </div>
  );
};

export default DanielNarrativeLayers;
