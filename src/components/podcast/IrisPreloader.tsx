import React, { useState, useEffect, useCallback, useRef } from "react";

// Ícones vetoriais extraídos diretamente da identidade de símbolos do Estúdio Akedah
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

// 9 Partículas Icônicas com ângulos, raios de explosão e tempos de retorno escalonados (dinamismo orgânico)
const PARTICLES = [
  {
    id: 0,
    Component: KeyIcon,
    color: "#C4550A",
    size: 34,
    angle: 20,
    burstDistance: 195,
    spiralTurns: 1.25,
    returnEndTime: 2.05, // Retorna primeiro
  },
  {
    id: 1,
    Component: StarIcon,
    color: "#FAF6EB",
    size: 46,
    angle: 65,
    burstDistance: 240,
    spiralTurns: 1.45,
    returnEndTime: 2.75, // Retorna mais tarde
  },
  {
    id: 2,
    Component: TrophyIcon,
    color: "#E2BA7A",
    size: 38,
    angle: 110,
    burstDistance: 165,
    spiralTurns: 1.15,
    returnEndTime: 2.20, // Retorna cedo
  },
  {
    id: 3,
    Component: StarIcon,
    color: "#C4550A",
    size: 38,
    angle: 155,
    burstDistance: 225,
    spiralTurns: 1.35,
    returnEndTime: 2.50, // Ritmo intermediário
  },
  {
    id: 4,
    Component: KeyIcon,
    color: "#FAF6EB",
    size: 42,
    angle: 200,
    burstDistance: 180,
    spiralTurns: 1.5,
    returnEndTime: 2.85, // Retorna perto do fim
  },
  {
    id: 5,
    Component: TrophyIcon,
    color: "#C4550A",
    size: 48,
    angle: 245,
    burstDistance: 245,
    spiralTurns: 1.2,
    returnEndTime: 2.35, // Retorna cedo/médio
  },
  {
    id: 6,
    Component: StarIcon,
    color: "#E2BA7A",
    size: 34,
    angle: 290,
    burstDistance: 185,
    spiralTurns: 1.6,
    returnEndTime: 3.02, // O último a retornar
  },
  {
    id: 7,
    Component: KeyIcon,
    color: "#C4550A",
    size: 38,
    angle: 330,
    burstDistance: 215,
    spiralTurns: 1.3,
    returnEndTime: 2.15, // Retorna cedo
  },
  {
    id: 8,
    Component: TrophyIcon,
    color: "#FAF6EB",
    size: 42,
    angle: 375,
    burstDistance: 200,
    spiralTurns: 1.4,
    returnEndTime: 2.65, // Ritmo intermediário/tardio
  },
];

export const IrisPreloader: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      // Se for recarregamento direto (F5 / reload), exibe o preloader para validação visual
      const navEntries = performance.getEntriesByType("navigation");
      if (navEntries.length > 0 && (navEntries[0] as PerformanceNavigationTiming).type === "reload") {
        return true;
      }
      return !sessionStorage.getItem("akedah_loader_seen");
    } catch {
      return true;
    }
  });

  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const flashRef = useRef<HTMLDivElement | null>(null);
  const endFlashRef = useRef<HTMLDivElement | null>(null);
  const coreGlowRef = useRef<HTMLDivElement | null>(null);
  const iris1Ref = useRef<HTMLDivElement | null>(null);
  const iris2Ref = useRef<HTMLDivElement | null>(null);
  const iris3Ref = useRef<HTMLDivElement | null>(null);

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

    // Bloqueia scroll do body durante a animação
    document.body.style.overflow = "hidden";

    let animId: number;
    const startTime = performance.now();
    const totalDuration = 3500; // 3.5 segundos no total

    // Fator de escala responsivo para telas móveis
    const scaleFactor = typeof window !== "undefined"
      ? Math.min(1, Math.max(0.52, window.innerWidth / 720))
      : 1;

    const tick = (now: number) => {
      const elapsed = (now - startTime) / 1000; // segundos decorridos

      // 1. ANIMAÇÃO DE EXPLOSÃO + ESPIRAL + RETORNO ESCALONADO DAS PARTÍCULAS
      PARTICLES.forEach((p, idx) => {
        const el = particleRefs.current[idx];
        if (!el) return;

        let r = 0;
        let angle = p.angle;
        let scale = 0;
        let opacity = 0;
        let selfRot = 0;

        const maxR = p.burstDistance * scaleFactor;

        if (elapsed <= 0.68) {
          // FASE 1: EXPLOSÃO INICIAL A PARTIR DO CENTRO (0s a ~0.68s)
          // Curva cúbica com desaceleração exponencial para impacto balístico
          const prog = Math.min(1, elapsed / 0.68);
          const ease = 1 - Math.pow(1 - prog, 3.2);

          r = maxR * ease;
          angle = p.angle + ease * 28;
          scale = Math.min(1, prog * 1.8);
          opacity = Math.min(1, prog * 2.6);
          selfRot = ease * 50;
        } else if (elapsed <= p.returnEndTime) {
          // FASE 2: ROTAÇÃO EM ESPIRAL LENTA & RETORNO ESCALONADO AO CENTRO
          // Progresso normalizado de 0 a 1 específico para esta partícula
          const spiralProg = (elapsed - 0.68) / (p.returnEndTime - 0.68);

          // O raio decai de volta ao centro via curva cosseno suave (derivada 0 no topo da explosão)
          r = maxR * Math.cos(spiralProg * (Math.PI / 2));

          // Giro em espiral lento que acelera suavemente conforme se aproxima do centro
          const spin = p.spiralTurns * 360 * (0.65 * spiralProg + 0.35 * Math.pow(spiralProg, 2.2));
          angle = p.angle + 28 + spin;
          selfRot = 50 + spin * 0.45;

          // REDUÇÃO DE ESCALA DINÂMICA:
          // Mantém tamanho visível e imponente na primeira metade da espiral;
          // Em seguida, encolhe de forma suave e contínua até sumir no centro
          if (spiralProg < 0.42) {
            scale = 1;
            opacity = 1;
          } else {
            const shrinkProg = (spiralProg - 0.42) / 0.58;
            scale = Math.max(0, Math.cos(shrinkProg * (Math.PI / 2)));
            opacity = Math.max(0, 1 - Math.pow(shrinkProg, 1.4));
          }
        } else {
          // Partícula já chegou ao centro e desapareceu
          scale = 0;
          opacity = 0;
          r = 0;
        }

        const rad = (angle * Math.PI) / 180;
        const x = r * Math.cos(rad);
        const y = r * Math.sin(rad);

        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${selfRot.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
      });

      // 2. FLASH CENTRAL DE EXPLOSÃO INICIAL (0s a 0.38s)
      if (flashRef.current) {
        if (elapsed < 0.38) {
          const fp = elapsed / 0.38;
          const flashScale = Math.sin(fp * Math.PI) * 4.2;
          const flashOp = Math.sin(fp * Math.PI);
          flashRef.current.style.transform = `translate(-50%, -50%) scale(${flashScale.toFixed(2)})`;
          flashRef.current.style.opacity = flashOp.toFixed(2);
        } else {
          flashRef.current.style.opacity = "0";
        }
      }

      // 3. GLOW DA SINGULARIDADE CENTRAL ENQUANTO OS ÍCONES ESPIRALAM (0.4s a 2.95s)
      if (coreGlowRef.current) {
        if (elapsed >= 0.4 && elapsed <= 2.95) {
          const cp = (elapsed - 0.4) / 2.55;
          // Pulsação suave no centro
          const pulse = 1 + 0.25 * Math.sin(cp * Math.PI * 4);
          const coreOp = 0.35 + 0.25 * Math.sin(cp * Math.PI * 4);
          coreGlowRef.current.style.transform = `translate(-50%, -50%) scale(${pulse.toFixed(2)})`;
          coreGlowRef.current.style.opacity = coreOp.toFixed(2);
        } else {
          coreGlowRef.current.style.opacity = "0";
        }
      }

      // 4. FLASH FINAL NO CENTRO QUANDO O ÚLTIMO ÍCONE ENTRA (2.98s a 3.30s)
      if (endFlashRef.current) {
        if (elapsed >= 2.98 && elapsed <= 3.30) {
          const efp = (elapsed - 2.98) / 0.32;
          const endScale = Math.sin(efp * Math.PI) * 4.8;
          const endOp = Math.sin(efp * Math.PI);
          endFlashRef.current.style.transform = `translate(-50%, -50%) scale(${endScale.toFixed(2)})`;
          endFlashRef.current.style.opacity = endOp.toFixed(2);
        } else {
          endFlashRef.current.style.opacity = "0";
        }
      }

      // 5. TRANSIÇÃO DE REVELAÇÃO IRIS WIPE (3.02s a 3.48s)
      const irisStart = 3.02;
      if (iris1Ref.current && elapsed >= irisStart) {
        const p1 = Math.min(1, Math.max(0, (elapsed - irisStart) / 0.44));
        const ease1 = Math.pow(p1, 2.6);
        iris1Ref.current.style.clipPath = `circle(${(ease1 * 155).toFixed(1)}% at 50% 50%)`;
      }
      if (iris2Ref.current && elapsed >= irisStart + 0.08) {
        const p2 = Math.min(1, Math.max(0, (elapsed - (irisStart + 0.08)) / 0.44));
        const ease2 = Math.pow(p2, 2.6);
        iris2Ref.current.style.clipPath = `circle(${(ease2 * 155).toFixed(1)}% at 50% 50%)`;
      }
      if (iris3Ref.current && elapsed >= irisStart + 0.16) {
        const p3 = Math.min(1, Math.max(0, (elapsed - (irisStart + 0.16)) / 0.44));
        const ease3 = Math.pow(p3, 2.6);
        iris3Ref.current.style.clipPath = `circle(${(ease3 * 155).toFixed(1)}% at 50% 50%)`;
      }

      if (elapsed < totalDuration / 1000) {
        animId = requestAnimationFrame(tick);
      } else {
        handleSkip();
      }
    };

    animId = requestAnimationFrame(tick);

    const handleKeyDown = () => {
      handleSkip();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animId);
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
      {/* 1. Fundo com atmosfera de couro, vinheta e micro-ruído procedural */}
      <div className="absolute inset-0 bg-[#1C0F0A] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(196, 85, 10, 0.18) 0%, rgba(28, 15, 10, 0.88) 65%, #1C0F0A 100%)",
        }}
      />
      {/* Micro-ruído procedural inline */}
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

      {/* 2. ESPAÇO CINÉTICO CENTRAL: EXPLOSÃO E ESPIRAL DOS ÍCONES */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Glow da singularidade central enquanto os ícones espiralam */}
        <div
          ref={coreGlowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#C4550A]/40 blur-md pointer-events-none"
          style={{ opacity: 0 }}
        />

        {/* Flash de luz da explosão inicial */}
        <div
          ref={flashRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FAF6EB] pointer-events-none w-7 h-7 shadow-[0_0_35px_rgba(250,246,235,0.9)]"
          style={{ opacity: 0 }}
        />

        {/* Renderização das 9 Partículas de Ícones em Espiral */}
        <div className="relative w-0 h-0 flex items-center justify-center pointer-events-none">
          {PARTICLES.map((p, idx) => (
            <div
              key={p.id}
              ref={(el) => {
                particleRefs.current[idx] = el;
              }}
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none flex items-center justify-center"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: 0,
                transform: "translate3d(0, 0, 0) scale(0)",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center filter"
                style={{
                  filter:
                    p.color === "#C4550A"
                      ? "drop-shadow(0 0 14px rgba(196,85,10,0.65))"
                      : p.color === "#E2BA7A"
                      ? "drop-shadow(0 0 14px rgba(226,186,122,0.65))"
                      : "drop-shadow(0 0 14px rgba(250,246,235,0.65))",
                }}
              >
                <p.Component className="w-full h-full" color={p.color} />
              </div>
            </div>
          ))}
        </div>

        {/* Flash de luz final quando os últimos ícones colapsam no centro */}
        <div
          ref={endFlashRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FAF6EB] pointer-events-none w-8 h-8 shadow-[0_0_45px_rgba(250,246,235,1)]"
          style={{ opacity: 0 }}
        />
      </div>

      {/* 3. REVELAÇÃO DO SITE: TRANSIÇÃO IRIS WIPE MULTI-CAMADA */}
      {/* Camada 1: Círculo Bege/Creme (#FAF6EB) */}
      <div
        ref={iris1Ref}
        className="absolute inset-0 bg-[#FAF6EB] pointer-events-none will-change-[clip-path]"
        style={{ clipPath: "circle(0% at 50% 50%)" }}
      />

      {/* Camada 2: Círculo Terracota (#C4550A) */}
      <div
        ref={iris2Ref}
        className="absolute inset-0 bg-[#C4550A] pointer-events-none will-change-[clip-path]"
        style={{ clipPath: "circle(0% at 50% 50%)" }}
      />

      {/* Camada 3: Círculo Marrom-Café (#1C0F0A), revelando o site com acabamento escuro */}
      <div
        ref={iris3Ref}
        className="absolute inset-0 bg-[#1C0F0A] pointer-events-none will-change-[clip-path]"
        style={{ clipPath: "circle(0% at 50% 50%)" }}
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
