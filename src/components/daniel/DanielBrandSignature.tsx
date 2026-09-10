import React from "react";

export const DANIEL_TAGLINE = "Fé que inspira, disciplina que sustenta, conhecimento que transforma vidas.";
export const DANIEL_POSITIONING = "Mentor · Empresário · Criador de conteúdo";

interface DanielSignatureProps {
  variant?: "white" | "dark" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showTagline?: boolean;
  showPositioning?: boolean;
}

/**
 * Assinatura Manuscrita Oficial Daniel Silva (Extraída do Brand Kit)
 * Branca sobre fundos escuros / vídeo, preta sobre fundos claros / off-white.
 */
export const DanielSignature: React.FC<DanielSignatureProps> = ({
  variant = "white",
  size = "md",
  className = "",
  showTagline = false,
  showPositioning = false,
}) => {
  const imgSrc =
    variant === "white"
      ? "/daniel-silva-assinatura-white.svg"
      : "/daniel-silva-assinatura-dark.svg";

  const subtextColor =
    variant === "white"
      ? "text-[var(--off-white)]/80"
      : variant === "gold"
      ? "text-[var(--bege)]"
      : "text-[rgba(25,25,25,0.8)]";

  const sizeStyles = {
    sm: "h-[24px] sm:h-[32px]",
    md: "h-[36px] sm:h-[48px]",
    lg: "h-[48px] sm:h-[64px]",
    xl: "h-[64px] sm:h-[88px]",
  }[size];

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      {/* Assinatura Vetorial Oficial */}
      <img
        src={imgSrc}
        alt="Daniel Silva - Assinatura Oficial"
        className={`${sizeStyles} w-auto object-contain select-none`}
        loading="eager"
      />

      {showPositioning && (
        <span className={`text-fluid-10 font-lato font-bold tracking-[0.25em] uppercase mt-[4px] ${subtextColor}`}>
          {DANIEL_POSITIONING}
        </span>
      )}

      {showTagline && (
        <p className={`text-fluid-13 font-lato italic font-light mt-[6px] max-w-[448px] ${subtextColor}`}>
          "{DANIEL_TAGLINE}"
        </p>
      )}
    </div>
  );
};

/**
 * Faixa Marquee Oficial com Separador de Bullet (Brand Kit 3.5)
 * Fundo em --bege, texto em --preto, tipografia Lato Black 900, --text-10, tracking 0.14em.
 * Deslocamento horizontal contínuo e lento, congelado sob prefers-reduced-motion.
 */
export const DanielBrandMarquee: React.FC<{
  className?: string;
}> = ({ className = "" }) => {
  const repeatedText = "MENTOR • EMPRESÁRIO • CRIADOR DE CONTEÚDO";

  return (
    <div className={`marquee border-y border-[var(--preto)]/20 ${className}`} aria-hidden="true">
      <div className="marquee-track">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-center gap-[24px] shrink-0">
            <img
              src="/dani-selo.svg"
              alt=""
              aria-hidden="true"
              className="h-[18px] w-auto object-contain inline-block opacity-90"
              loading="lazy"
            />
            <span>{repeatedText} •</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Alias de compatibilidade para a faixa horizontal contínua
 */
export const DaniRepetitiveSealStrip = DanielBrandMarquee;

export default DanielSignature;

