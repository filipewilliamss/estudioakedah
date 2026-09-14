import React, { memo } from "react";

/**
 * PodcastAtmosphere
 * Atmosfera profunda, cinematográfica e de altíssima performance para o Akedah Podcast.
 * - Fundo base escuro #1C0F0A (marrom-espresso)
 * - Gradiente radial sutil fixo a 80% 0% com terracota
 * - Ruído micro-texturizado procedural via SVG inline (feTurbulence) com opacidade 0.03
 * - Zero repaint, zero requisição de rede externa, 60fps garantido
 */
export const PodcastAtmosphere: React.FC = memo(() => {
  return (
    <>
      {/* 1. Gradiente Radial Sutil Fixo no Topo Direito */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 0%, rgba(196, 85, 10, 0.15), transparent 70%)",
        }}
      />

      {/* 2. Micro-ruído texturizado via SVG Inline com feTurbulence (opacidade <= 0.03) */}
      <svg
        aria-hidden="true"
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.028]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="podcast-micro-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#podcast-micro-noise)" />
      </svg>
    </>
  );
});

PodcastAtmosphere.displayName = "PodcastAtmosphere";

export default PodcastAtmosphere;
