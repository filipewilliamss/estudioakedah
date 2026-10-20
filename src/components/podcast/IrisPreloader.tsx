import React, { useState, useEffect, useCallback, useRef } from "react";

export const IrisPreloader: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      // Exibe sempre ao recarregar a página (F5 / reload) para facilitar conferência e testes
      const navEntries = performance.getEntriesByType("navigation");
      if (
        navEntries.length > 0 &&
        (navEntries[0] as PerformanceNavigationTiming).type === "reload"
      ) {
        return true;
      }
      return !sessionStorage.getItem("akedah_loader_seen");
    } catch {
      return true;
    }
  });

  const [isExiting, setIsExiting] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const exitTimeoutRef = useRef<number | null>(null);
  const safetyTimerRef = useRef<number | null>(null);

  // Função para finalizar suavemente o preloader
  const handleExit = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);

    try {
      sessionStorage.setItem("akedah_loader_seen", "true");
    } catch {
      // Ignora erro de storage
    }

    // Aguarda o término da animação de saída (700ms) antes de desmontar o componente
    exitTimeoutRef.current = window.setTimeout(() => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
      setIsActive(false);
    }, 700);
  }, [isExiting]);

  // Função para pular imediatamente (ao clicar ou pressionar ESC)
  const handleSkip = useCallback(() => {
    handleExit();
  }, [handleExit]);

  useEffect(() => {
    if (!isActive) return;

    // Bloqueia a rolagem do body enquanto o preloader está ativo
    document.body.style.overflow = "hidden";

    // Timeout de segurança: nunca bloqueia o usuário mais de 8.2 segundos
    safetyTimerRef.current = window.setTimeout(() => {
      handleExit();
    }, 8200);

    // Atalhos de teclado para pular
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Inicialização do vídeo com garantia de reprodução
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoLoaded(true);
          })
          .catch(() => {
            // Se autoplay com vídeo falhar (ex: modo de economia de energia severo),
            // permite que a imagem de capa e timeout façam a transição suave
            setIsVideoLoaded(true);
          });
      }
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
      document.body.style.overflow = "auto";
    };
  }, [isActive, handleExit, handleSkip]);

  // Transição ao término do vídeo ou próximo do frame final (7.5s)
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    // Quando o vídeo atingir a marca de 7.4s (logo completamente assentado e estável), inicia a transição de revelação
    if (video.currentTime >= 7.4 && !isExiting) {
      handleExit();
    }
  };

  const handleEnded = () => {
    if (!isExiting) {
      handleExit();
    }
  };

  if (!isActive) return null;

  return (
    <div
      onClick={handleSkip}
      role="button"
      tabIndex={0}
      aria-label="Vinheta oficial Akedah Podcast. Clique ou aperte ESC para pular."
      className={`fixed inset-0 z-[99999] select-none cursor-pointer overflow-hidden bg-[#1F110B] transition-all duration-700 ease-out ${
        isExiting
          ? "opacity-0 scale-[1.03] pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      style={{
        backgroundColor: "#1F110B",
        backgroundImage: "url('/videos/vinheta-akedah-poster.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* 1. Atmosfera e Textura Base de Couro Escuro dos Frames da Vinheta */}
      <div className="absolute inset-0 bg-[#1F110B]/90 pointer-events-none" />

      {/* 2. Container Central do Vídeo da Vinheta Oficial */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          preload="auto"
          poster="/videos/vinheta-akedah-poster.webp"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-contain md:object-cover transition-opacity duration-500 ease-in-out ${
            isVideoLoaded ? "opacity-100" : "opacity-90"
          }`}
          style={{
            maxHeight: "100vh",
            maxWidth: "100vw",
            filter: "contrast(1.02) saturate(1.02)",
          }}
        >
          {/* Formato WebM moderno super otimizado (588KB) primeiro para carregamento instantâneo */}
          <source src="/videos/vinheta-akedah-podcast.webm" type="video/webm" />
          {/* Fallback MP4 H.264 de alta compatibilidade */}
          <source src="/videos/vinheta-akedah-podcast.mp4" type="video/mp4" />
        </video>

        {/* Efeito de Vinheta Radial Suave para Fusão Perfeita com Viewports Diferentes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(31,17,11,0) 55%, rgba(20,10,6,0.65) 90%, #150B07 100%)",
          }}
        />
      </div>

      {/* 3. Efeito Cinematográfico de Abertura em Íris na Saída */}
      {isExiting && (
        <div
          className="absolute inset-0 pointer-events-none animate-iris-burst"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, transparent 20%, #FAF6EB 22%, #C4550A 28%, #1F110B 35%)",
          }}
        />
      )}

      {/* 4. Botão Elegante de Pular (ESC / Clique) */}
      <div className="absolute bottom-6 right-6 z-50 pointer-events-none flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#150B07]/80 backdrop-blur-md border border-[#FAF6EB]/15 text-[#FAF6EB]/70 text-[11px] font-mono tracking-wider shadow-lg">
        <span className="font-sans font-medium">Pular vinheta</span>
        <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#FAF6EB]/10 border border-[#FAF6EB]/20 text-[#FAF6EB] font-semibold">
          ESC
        </span>
      </div>
    </div>
  );
};

export default IrisPreloader;
