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

    // Posição inicial orgânica
    gsap.set(lens, {
      x: 60,
      y: 80,
      opacity: 0.95,
      rotation: -1,
    });

    // Função para mover a lente para uma nova coordenada aleatória dentro do container
    const moveRandomly = () => {
      if (!lens || !container) return;
      const cRect = container.getBoundingClientRect();
      
      // Só move se a seção estiver visível ou próxima da viewport
      if (cRect.bottom < -100 || cRect.top > window.innerHeight + 100) return;

      const lensWidth = lens.offsetWidth || 340;
      const lensHeight = lens.offsetHeight || 150;

      const maxW = Math.max(20, cRect.width - lensWidth - 40);
      const maxH = Math.max(20, cRect.height - lensHeight - 40);

      const targetX = 20 + Math.random() * maxW;
      const targetY = 20 + Math.random() * maxH;
      const targetRotation = (Math.random() - 0.5) * 4; // inclinação sutil entre -2deg e +2deg

      gsap.to(lens, {
        x: targetX,
        y: targetY,
        rotation: targetRotation,
        duration: 0.85,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    // Listener do scroll do mouse (wheel) throttled a cada 110ms
    const handleWheel = () => {
      const now = Date.now();
      if (now - lastScrollTime.current > 110) {
        lastScrollTime.current = now;
        moveRandomly();
      }
    };

    // Listener de scroll geral
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime.current > 160) {
        lastScrollTime.current = now;
        moveRandomly();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
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
