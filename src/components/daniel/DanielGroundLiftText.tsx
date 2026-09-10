import React, { useMemo } from "react";

interface DanielGroundLiftTextProps {
  text: string;
  progress: number;
  startRange: number;
  endRange: number;
  className?: string;
  charWindow?: number;
}

export const DanielGroundLiftText: React.FC<DanielGroundLiftTextProps> = ({
  text,
  progress,
  startRange,
  endRange,
  className = "panel-transition__text",
  charWindow = 0.28,
}) => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Progresso normalizado entre 0 e 1 ao longo da janela do scroll
  const normalizedP = Math.max(
    0,
    Math.min(1, (progress - startRange) / (endRange - startRange))
  );

  // Curva de aceleração cúbica natural
  const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);

  const { words, totalChars } = useMemo(() => {
    const rawWords = text.split(" ");
    let globalIndex = 0;
    const total = text.replace(/\s+/g, "").length;

    const parsedWords = rawWords.map((word) => {
      const chars = Array.from(word).map((char) => {
        const idx = globalIndex++;
        return { char, index: idx };
      });
      return { word, chars };
    });

    return { words: parsedWords, totalChars: total };
  }, [text]);

  if (prefersReducedMotion) {
    return <h2 className={className}>{text}</h2>;
  }

  return (
    <h2 className={className}>
      {words.map((w, wIdx) => (
        <span key={wIdx} className="panel-transition__word">
          {w.chars.map(({ char, index }) => {
            const start = (index / totalChars) * (1 - charWindow);
            const end = start + charWindow;
            const rawCharP = Math.max(0, Math.min(1, (normalizedP - start) / (end - start)));
            const eased = easeOutCubic(rawCharP);

            // Efeito 3D: levantando do chão (rotação no eixo X + elevação no eixo Y + fade de opacidade)
            const rotateX = (1 - eased) * 82;
            const translateY = (1 - eased) * 44;
            const opacity = rawCharP === 0 ? 0 : Math.min(1, rawCharP * 1.5);
            const blur = (1 - eased) * 2;

            return (
              <span
                key={index}
                className="panel-transition__char"
                style={{
                  transform: `translateY(${translateY.toFixed(2)}px) rotateX(${rotateX.toFixed(2)}deg)`,
                  opacity: Number(opacity.toFixed(3)),
                  filter: blur > 0.1 ? `blur(${blur.toFixed(1)}px)` : "none",
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h2>
  );
};

export default DanielGroundLiftText;
