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
      ? "text-white/70"
      : variant === "gold"
      ? "text-[#E6C387]/80"
      : "text-[#191919]/70";

  const sizeStyles = {
    sm: "h-[32px] sm:h-[40px]",
    md: "h-[44px] sm:h-[56px]",
    lg: "h-[56px] sm:h-[80px]",
    xl: "h-[80px] sm:h-[112px]",
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
        <span className={`text-[10px] sm:text-xs font-lato font-normal tracking-[0.25em] uppercase mt-[4px] ${subtextColor}`}>
          {DANIEL_POSITIONING}
        </span>
      )}

      {showTagline && (
        <p className={`text-xs sm:text-sm font-lato italic font-light mt-[6px] max-w-[448px] ${subtextColor}`}>
          "{DANIEL_TAGLINE}"
        </p>
      )}
    </div>
  );
};

/**
 * Faixa Repetida do Selo Oficial Curto "Dani"
 * Usada como divisória institucional de prestígio e acabamento de alto padrão.
 */
export const DaniRepetitiveSealStrip: React.FC<{
  variant?: "dark" | "light" | "gold";
  className?: string;
}> = ({ variant = "dark", className = "" }) => {
  const bg =
    variant === "dark"
      ? "bg-[#191919] text-white/80 border-white/10"
      : variant === "gold"
      ? "bg-[#C4550A] text-white border-white/20"
      : "bg-[#F5E9CB] text-[#191919] border-[#191919]/15";

  const seloSrc =
    variant === "dark"
      ? "/dani-selo-white.svg"
      : "/dani-selo.svg";

  return (
    <div className={`w-full overflow-hidden py-[12px] border-y select-none ${bg} ${className}`}>
      <div className="flex items-center gap-[40px] whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-center gap-[40px] shrink-0">
            {/* Selo Curto Oficial Dani */}
            <div className="flex items-center gap-[8px]">
              <img
                src={seloSrc}
                alt="Selo Dani"
                className="h-[36px] w-auto object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-[11px] font-lato font-light tracking-[0.3em] uppercase opacity-60">
              {DANIEL_POSITIONING}
            </span>
            <span className="text-[10px] opacity-40">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DanielSignature;
