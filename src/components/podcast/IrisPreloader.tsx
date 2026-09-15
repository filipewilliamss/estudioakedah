import React, { useState, useEffect, useCallback } from "react";

// Ícones vetoriais extraídos diretamente de simbolos.svg
const TrophyIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg viewBox="50 400 225 275" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M268.29,435.66c0-4.3-3.49-7.79-7.79-7.79h-33.16v-12.58c0-5.2-4.21-9.41-9.41-9.41h-110.73c-5.2,0-9.41,4.21-9.41,9.41v12.58h-33.16c-4.3,0-7.79,3.49-7.79,7.79v47.28l.02.48c0,.11.03.32.07.63.21,5.41,1.64,10.7,3.96,15.58,4.91,10.45,14.55,17.84,25.48,21.24,5.03,1.64,10.26,2.57,15.5,3.02,1.72,3.76,4.12,8.08,7.41,12.4,5.36,7.02,13.8,14.92,26.55,19.6-5.78,2.49-9.91,8.1-10.27,14.69h0c-.01.26-.02.5-.02.75,0,.09,0,.18,0,.27,0,0,0,0,0,0-.01,1.06.05,2.06.16,3.14.57,6.71,3.95,13.9,10.65,16.32,2.09.76,4.27,1.1,6.43,1.14-4.91,10.31-13.74,17.94-19.99,22.35h79.56c-6.25-4.41-15.06-12.01-19.95-22.34,11.02-.12,16.58-8.51,17.12-18.72.05-.4.08-.79.1-1.2.35-8.07-4.94-14.98-12.26-17.12,12.02-4.69,20.52-12.03,26.18-18.61,3.8-4.4,6.65-8.81,8.73-12.6,5.57-.41,11.14-1.35,16.49-3.1,5.4-1.72,10.62-4.4,15.03-7.96,8.55-6.96,13.82-17.56,14.39-28.52.07-.49.1-.82.11-.97l.02-47.75ZM69.16,440.19h28.62v64.6c-10.6-1-18.53-4.68-23.58-10.99-4.04-5.04-4.91-10.26-5.04-11.2v-42.4ZM85.24,517.53c-4.47-1.45-8.82-3.53-12.6-6.32-6.06-4.47-10.63-10.91-13.11-18.06,1.05,2.4,2.5,5.03,4.52,7.68,5.35,7.02,15.73,15.28,35.2,16.44.29.88.64,1.86,1.05,2.92-5.11-.31-10.17-1.17-15.05-2.66ZM194.1,583.95c-1.29,2.48-3.2,4.57-5.89,5.86-1.91.91-4.03,1.44-6.2,1.66h-38.9c-2.19-.22-4.32-.75-6.25-1.66-2.79-1.33-4.74-3.53-6.03-6.13,3.17,3.02,7.47,4.89,12.1,4.89h39.27c4.55,0,8.76-1.75,11.9-4.62ZM227.34,440.19h28.62v42.39c-.14,1.04-1.04,6.21-5.04,11.21-5.05,6.31-12.97,9.99-23.58,10.99v-64.6ZM237.91,518.08c-4.47,1.24-9.09,1.9-13.74,2.14.51-1.07.95-2.06,1.32-2.93,19.72-1.07,30.2-9.4,35.58-16.47,1.93-2.53,3.34-5.06,4.38-7.37-4.42,12.57-14.62,21.24-27.55,24.63Z" />
    <path d="M237.41,664.23h0v-26.41c0-10.94-8.87-19.81-19.81-19.81h-110.05c-10.94,0-19.81,8.87-19.81,19.81v26.45h147.31c0,.2.01,1.36.02,2.3-2.29.01-147.27.84-147.27.84v.62l148.43.84h1.14c0-.78.05-3.79.05-4.64Z" />
  </svg>
);

const StarIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg viewBox="420 400 288 275" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M684.28,493.26h-80.13l-24.76-76.21c-4.98-15.34-26.69-15.34-31.67,0l-24.76,76.21h-80.13c-9.54,0-15.78,7.22-16.59,15.08h0s0,.02,0,.03c-.15,1.44-.1,2.9.13,4.35.38,2.9,1.31,5.73,2.6,8.36,2.19,4.45,5.54,8.26,9.34,11.41.78.64,2.95,2.39,3.75,3.05,16.69,13.44,36.31,29.14,53.34,42.53l-22.3,68.62c-4.98,15.34,12.57,28.1,25.62,18.61l64.83-47.1,64.83,47.1c13.05,9.48,30.61-3.28,25.62-18.61l-22.3-68.64c17.04-13.4,36.63-29.08,53.32-42.52.81-.66,2.98-2.41,3.75-3.05,5.83-4.76,10.64-11.51,11.84-19,2.01-9.53-4.72-20.22-16.33-20.22ZM479.28,561.1c-6.76-5.12-24.25-18.37-30.77-23.35-3.39-2.6-6.86-5.22-10.17-7.83-2.81-2.32-5.35-5.12-7.32-8.26.61.6,1.28,1.18,2.02,1.72l64.83,47.1-1.24,3.81c-5.78-4.4-11.54-8.82-17.35-13.19ZM688.74,529.92c-11.56,9.01-29.1,22.17-40.94,31.18-5.8,4.36-11.56,8.78-17.33,13.18l-1.23-3.8,64.83-47.1c.71-.52,1.36-1.08,1.96-1.66-1.97,3.11-4.5,5.9-7.29,8.2Z" />
    <polygon points="563.56 623.54 562.39 624.37 500.75 668.67 501.1 669.19 563.56 628.54 626.03 669.17 626.36 668.68 564.72 624.37 563.56 623.54" />
  </svg>
);

const KeyIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg viewBox="900 385 130 305" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M959.84,391.56c-8.81,0-15.95,7.14-15.95,15.95v160.79c-8.24,2.9-15.79,7.62-22.15,13.98-23.05,23.05-23.05,60.56,0,83.61,23.05,23.05,60.56,23.05,83.61,0,11.17-11.17,17.32-26.01,17.32-41.81,0-15.79-6.15-30.64-17.32-41.81-8.22-8.22-18.44-13.71-29.56-16.04v-77.38s28.17,0,28.17,0c5.49,0,10.33-2.78,13.2-7-1.23,2.97-3.17,5.59-5.98,7.29-2.75,1.59-5.88,2.05-9.04,2.1-7.8.37-16.14.5-23.92.76v1.24s.96,67.87.96,67.87h.77s.91-64.31.93-66.66c6.97-.69,14.4-1.26,21.34-1.76,11.91-.12,17.57-8.64,18.06-19.8,0,0-.16,0-.37,0,0-8.81-7.14-15.94-15.95-15.94h-19.17s0-4.64,0-4.64c4.51-.35,17.7-2.06,17.7-2.06,8.82-.23,14.12-7.03,15.62-14.91.34-1.29.53-2.63.53-4.03,0-8.81-7.14-15.95-15.95-15.95h-21.98s0-.02,0-.02c-.06-2.32-.03-4.99-.14-7.32-1.02-8.84-7.4-14.19-15.31-15.51-1.69-.61-3.51-.97-5.42-.97ZM982.79,604.83c5.14,5.14,7.97,11.98,7.97,19.25,0,7.27-2.83,14.11-7.97,19.25-10.61,10.61-27.88,10.61-38.5,0-5.31-5.31-7.96-12.28-7.96-19.25,0-6.97,2.65-13.94,7.96-19.25,5.14-5.14,11.98-7.97,19.25-7.97,7.27,0,14.11,2.83,19.25,7.97ZM1002.44,449.28c-8.88.34-8.77.62-17.65.61v-2.62s17.91,0,17.91,0c5.7,0,10.69-3,13.51-7.51-2.36,5.47-7,9.54-13.77,9.52ZM978.48,411.47c-.01.72-.04,2.64-.05,3.33,0,.12,0,.36,0,.57h-2.63s0-7.87,0-7.87c0-4.84-2.16-9.16-5.56-12.09,5.73,3.08,8.91,9.54,8.25,16.05Z" />
  </svg>
);

const ORBIT_ICONS = [
  { id: 0, angle: 0, Component: StarIcon, color: "#FAF6EB" },
  { id: 1, angle: 60, Component: KeyIcon, color: "#C4550A" },
  { id: 2, angle: 120, Component: TrophyIcon, color: "#FAF6EB" },
  { id: 3, angle: 180, Component: StarIcon, color: "#C4550A" },
  { id: 4, angle: 240, Component: KeyIcon, color: "#FAF6EB" },
  { id: 5, angle: 300, Component: TrophyIcon, color: "#C4550A" },
];

export const IrisPreloader: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return !sessionStorage.getItem("akedah_loader_seen");
    } catch {
      return false;
    }
  });

  const handleSkip = useCallback(() => {
    try {
      sessionStorage.setItem("akedah_loader_seen", "true");
    } catch {
      // Ignore storage errors
    }
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
    setIsActive(false);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    // Bloqueia scroll do body durante o preloader
    document.body.style.overflow = "hidden";

    // Auto-desmontagem em 1.4s (tempo limite da animação)
    const timer = setTimeout(() => {
      handleSkip();
    }, 1400);

    // Permite pular ao pressionar qualquer tecla
    const handleKeyDown = () => {
      handleSkip();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isActive, handleSkip]);

  if (!isActive) return null;

  return (
    <div
      onClick={handleSkip}
      role="button"
      tabIndex={0}
      aria-label="Carregando Akedah Podcast. Clique para pular."
      className="fixed inset-0 z-[99999] select-none cursor-pointer overflow-hidden bg-[#1C0F0A]"
    >
      {/* Estilos CSS das Animações com acelerações cinematográficas */}
      <style>{`
        @keyframes irisOrbitCollapse {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
          65% {
            transform: rotate(450deg) scale(0.65);
            opacity: 1;
          }
          95% {
            transform: rotate(720deg) scale(0.08);
            opacity: 0.9;
          }
          100% {
            transform: rotate(750deg) scale(0);
            opacity: 0;
          }
        }

        @keyframes irisCenterFlash {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(2.8);
            opacity: 1;
            filter: blur(2px);
          }
          100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
        }

        @keyframes irisExpand {
          0% {
            clip-path: circle(0% at 50% 50%);
          }
          100% {
            clip-path: circle(150% at 50% 50%);
          }
        }
      `}</style>

      {/* 1. Fundo Base com Textura de Couro & Micro-ruído Procedural */}
      <div className="absolute inset-0 bg-[#1C0F0A] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(196, 85, 10, 0.12) 0%, rgba(28, 15, 10, 0.85) 65%, #1C0F0A 100%)",
        }}
      />
      {/* Micro-ruído procedural SVG inline */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="iris-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#iris-noise)" />
      </svg>

      {/* 2. FASE 1: Órbita e Colapso dos 6 Ícones (0.0s a 0.7s) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Círculo guia sutil com diâmetro de 120px */}
        <div
          className="absolute w-[120px] h-[120px] rounded-full border border-white/[0.08] pointer-events-none"
          style={{
            animation: "irisOrbitCollapse 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          }}
        />

        {/* Container da Órbita girando e colapsando para o ponto central */}
        <div
          className="relative w-[120px] h-[120px] flex items-center justify-center"
          style={{
            animation: "irisOrbitCollapse 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          }}
        >
          {ORBIT_ICONS.map((icon) => (
            <div
              key={icon.id}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{
                transform: `rotate(${icon.angle}deg) translateY(-60px) rotate(-${icon.angle}deg)`,
              }}
            >
              <div className="w-7 h-7 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(196,85,10,0.35)]">
                <icon.Component className="w-6 h-6" color={icon.color} />
              </div>
            </div>
          ))}
        </div>

        {/* Flash de Luz no instante do Colapso Central (0.68s - 0.73s) */}
        <div
          className="absolute top-1/2 left-1/2 rounded-full bg-[#FAF6EB] pointer-events-none w-5 h-5"
          style={{
            animation: "irisCenterFlash 0.16s ease-out 0.68s forwards",
            opacity: 0,
            transform: "translate(-50%, -50%) scale(0)",
          }}
        />
      </div>

      {/* 3. FASE 2: Transição de Círculos em Expansão / Iris Wipe (0.7s a 1.34s) */}
      {/* Camada 1: Círculo Bege/Creme (#FAF6EB) */}
      <div
        className="absolute inset-0 bg-[#FAF6EB] pointer-events-none"
        style={{
          clipPath: "circle(0% at 50% 50%)",
          animation: "irisExpand 0.48s cubic-bezier(0.85, 0, 0.15, 1) 0.70s forwards",
        }}
      />

      {/* Camada 2: Círculo Terracota (#C4550A) - Stagger de +80ms */}
      <div
        className="absolute inset-0 bg-[#C4550A] pointer-events-none"
        style={{
          clipPath: "circle(0% at 50% 50%)",
          animation: "irisExpand 0.48s cubic-bezier(0.85, 0, 0.15, 1) 0.78s forwards",
        }}
      />

      {/* Camada 3: Círculo Marrom-Café (#1C0F0A) - Stagger de +80ms, revelando o site */}
      <div
        className="absolute inset-0 bg-[#1C0F0A] pointer-events-none"
        style={{
          clipPath: "circle(0% at 50% 50%)",
          animation: "irisExpand 0.48s cubic-bezier(0.85, 0, 0.15, 1) 0.86s forwards",
        }}
      />

      {/* 4. Dica de Pular Sutil e Elegante (ESC / Clique) */}
      <div className="absolute bottom-6 right-6 z-50 text-[11px] font-mono tracking-widest text-white/40 uppercase pointer-events-none flex items-center gap-2">
        <span>Pular</span>
        <span className="px-1.5 py-0.5 rounded border border-white/20 bg-white/5 text-[10px] text-white/60">
          ESC
        </span>
      </div>
    </div>
  );
};

export default IrisPreloader;
