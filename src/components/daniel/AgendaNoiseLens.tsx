import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface AgendaNoiseLensProps {
  containerRef: React.RefObject<HTMLElement | HTMLDivElement>;
  theme?: "dark" | "light";
}

// Textura de ruído vetorial puro (SVG fractal noise)
export const SVG_NOISE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.75'/%3E%3C/svg%3E`;

export const AgendaNoiseLens: React.FC<AgendaNoiseLensProps> = ({
  containerRef,
  theme = "dark",
}) => {
  const lensRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const lens = lensRef.current;
    const container = containerRef.current;
    if (!lens || !container) return;

    // Respeito a movimento reduzido
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    // Posição inicial perfeitamente nivelada (sem inclinação)
    gsap.set(lens, {
      x: 60,
      y: 90,
      opacity: 0.95,
      rotation: 0,
    });

    // Função para mover a lente para uma nova coordenada aleatória dentro do container
    // Movimento lento, suave e orgânico (sem "tilt" ou pulos bruscos)
    const moveRandomly = () => {
      if (!lens || !container) return;
      const cRect = container.getBoundingClientRect();

      // Só move se a seção estiver visível ou próxima da viewport
      if (cRect.bottom < -100 || cRect.top > window.innerHeight + 100) return;

      const lensWidth = lens.offsetWidth || 340;
      const lensHeight = lens.offsetHeight || 140;

      const maxW = Math.max(30, cRect.width - lensWidth - 50);
      const maxH = Math.max(30, cRect.height - lensHeight - 50);

      // Posição atual da lente
      const currentX = (gsap.getProperty(lens, "x") as number) || 60;
      const currentY = (gsap.getProperty(lens, "y") as number) || 90;

      // Deslocamento orgânico e suave (passo calmo de 110px a 240px em direção aleatória)
      const angle = Math.random() * Math.PI * 2;
      const step = 110 + Math.random() * 130;

      let targetX = currentX + Math.cos(angle) * step;
      let targetY = currentY + Math.sin(angle) * step;

      // Bounding seguro dentro do container
      if (targetX < 30) targetX = 30 + Math.random() * 100;
      if (targetX > maxW) targetX = maxW - Math.random() * 100;
      if (targetY < 30) targetY = 30 + Math.random() * 80;
      if (targetY > maxH) targetY = maxH - Math.random() * 80;

      // Movimento lento, calmo e estável (rotação 0 constante para evitar qualquer sensação de tilt ou bug)
      gsap.to(lens, {
        x: targetX,
        y: targetY,
        rotation: 0,
        duration: 2.8,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    // Listener do scroll do mouse (wheel e scroll geral) com throttle calmo de 1200ms
    const handleScrollActivity = () => {
      const now = Date.now();
      if (now - lastScrollTime.current > 1200) {
        lastScrollTime.current = now;
        moveRandomly();
      }
    };

    window.addEventListener("wheel", handleScrollActivity, { passive: true });
    window.addEventListener("scroll", handleScrollActivity, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScrollActivity);
      window.removeEventListener("scroll", handleScrollActivity);
    };
  }, [containerRef]);

  const isDark = theme === "dark";

  return (
    <div
      ref={lensRef}
      aria-hidden="true"
      className={`absolute top-0 left-0 w-[280px] sm:w-[360px] md:w-[400px] h-[120px] sm:h-[150px] rounded-2xl pointer-events-none z-30 select-none overflow-hidden transition-shadow duration-300 ${
        isDark
          ? "border border-white/30 shadow-[0_12px_40px_rgba(0,10,30,0.45),inset_0_0_20px_rgba(255,255,255,0.08)]"
          : "border border-black/20 shadow-[0_12px_40px_rgba(0,30,80,0.18),inset_0_0_20px_rgba(0,0,0,0.04)]"
      }`}
      style={{
        backdropFilter: "blur(16px) contrast(1.12) brightness(1.04)",
        WebkitBackdropFilter: "blur(16px) contrast(1.12) brightness(1.04)",
        willChange: "transform",
      }}
    >
      {/* Camada Interna de Grain / Ruído Analógico Exclusivo da Lente */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-overlay"
        style={{
          backgroundImage: `url("${SVG_NOISE_DATA_URI}")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* Brilho Especular Editorial na Borda Superior */}
      <div
        className={`absolute top-0 inset-x-0 h-[1px] ${
          isDark
            ? "bg-gradient-to-r from-transparent via-white/50 to-transparent"
            : "bg-gradient-to-r from-transparent via-black/25 to-transparent"
        }`}
      />

      {/* Marcadores de Enquadramento / Viewfinder nos Cantos */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[var(--bege)]/70" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[var(--bege)]/70" />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[var(--bege)]/70" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[var(--bege)]/70" />

      {/* Badge Minimalista de Foco Estilo Câmera Leica / Hasselblad */}
      <div className="absolute bottom-2 right-3 flex items-center gap-1.5 opacity-70">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--bege)] animate-pulse" />
        <span
          className={`font-mono text-[9px] tracking-[0.18em] uppercase ${
            isDark ? "text-white/80" : "text-black/75"
          }`}
        >
          [GRAIN // LENS]
        </span>
      </div>
    </div>
  );
};

export default AgendaNoiseLens;
