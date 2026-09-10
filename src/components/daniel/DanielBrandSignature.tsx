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
 * Assinatura Manuscrita Oficial Daniel Silva
 * Branca sobre fundos escuros / vídeo, preta sobre fundos claros / off-white.
 */
export const DanielSignature: React.FC<DanielSignatureProps> = ({
  variant = "white",
  size = "md",
  className = "",
  showTagline = false,
  showPositioning = false,
}) => {
  const textColor =
    variant === "white"
      ? "text-white"
      : variant === "gold"
      ? "text-[#E6C387]"
      : "text-[#191919]";

  const subtextColor =
    variant === "white"
      ? "text-white/70"
      : variant === "gold"
      ? "text-[#E6C387]/80"
      : "text-[#191919]/70";

  const sizeStyles = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-4xl",
    lg: "text-3xl sm:text-5xl md:text-6xl",
    xl: "text-4xl sm:text-6xl md:text-7xl",
  }[size];

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      {/* Vetor Tipográfico Caligráfico da Assinatura */}
      <div className={`relative select-none font-serif italic tracking-wide ${sizeStyles} ${textColor}`}>
        <svg
          className="w-auto h-[1.3em] inline-block filter drop-shadow-sm"
          viewBox="0 0 320 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Traço caligráfico manuscrito estético com flourish */}
          <path
            d="M18 52 C 15 32, 28 8, 38 10 C 46 12, 38 38, 22 55 C 32 54, 52 48, 62 36 C 68 28, 70 46, 74 52 C 78 52, 85 38, 92 38 C 96 38, 95 50, 98 52 C 102 52, 108 42, 114 42 C 118 42, 120 50, 124 52 C 128 52, 134 26, 136 20 C 138 18, 140 38, 142 52 C 148 52, 160 52, 164 50"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M178 48 C 172 38, 185 14, 198 12 C 210 10, 192 32, 182 42 C 175 48, 185 54, 195 52 C 208 48, 218 36, 225 36 C 228 36, 226 48, 230 52 C 234 52, 240 24, 242 18 C 244 38, 245 48, 248 52 C 255 52, 268 38, 275 38 C 282 38, 278 50, 285 52 C 292 52, 305 44, 314 40"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Traço de assinatura sublinhado gestual característico */}
          <path
            d="M45 62 C 110 58, 210 56, 305 60 C 270 65, 180 67, 130 67"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      </div>

      {showPositioning && (
        <span className={`text-[10px] sm:text-xs font-lato font-normal tracking-[0.25em] uppercase mt-1 ${subtextColor}`}>
          {DANIEL_POSITIONING}
        </span>
      )}

      {showTagline && (
        <p className={`text-xs sm:text-sm font-lato italic font-light mt-1.5 max-w-md ${subtextColor}`}>
          "{DANIEL_TAGLINE}"
        </p>
      )}
    </div>
  );
};

/**
 * Faixa Repetida do Selo Curto "Dani"
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

  const sealBorder =
    variant === "dark"
      ? "border-white/30 text-white"
      : variant === "gold"
      ? "border-white/40 text-white"
      : "border-[#191919]/40 text-[#191919]";

  return (
    <div className={`w-full overflow-hidden py-3 border-y select-none ${bg} ${className}`}>
      <div className="flex items-center gap-8 whitespace-nowrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            {/* Selo Curto Oficial "Dani" */}
            <span
              className={`px-3 py-1 rounded-full border text-[11px] font-serif italic tracking-widest uppercase font-bold shadow-sm ${sealBorder}`}
            >
              Dani
            </span>
            <span className="text-[11px] font-lato font-light tracking-[0.25em] uppercase opacity-60">
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
