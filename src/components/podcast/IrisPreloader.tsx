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

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  // Raios dos círculos concêntricos em coordenadas SVG 1920x1080 (centro em 960, 540)
  // Diagonal do 1080p é ~1101px, então 1250px cobre a tela inteira fora do viewport
  const [radii, setRadii] = useState<{ cream: number; orange: number; dark: number }>({
    cream: 1300,
    orange: 1300,
    dark: 1300,
  });

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const safetyTimerRef = useRef<number | null>(null);
  const isTerminatedRef = useRef<boolean>(false);

  // Finalização imediata (desmonta preloader e desbloqueia scroll da página)
  const handleComplete = useCallback(() => {
    if (isTerminatedRef.current) return;
    isTerminatedRef.current = true;

    try {
      sessionStorage.setItem("akedah_loader_seen", "true");
    } catch {
      // Ignora erro de storage
    }

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }

    setIsActive(false);
  }, []);

  // Inicia a transição circular de fechamento idêntica à do começo do vídeo
  const startCircularClosing = useCallback(() => {
    if (isClosing || isTerminatedRef.current) return;
    setIsClosing(true);

    const video = videoRef.current;
    if (video) {
      // Pausa o vídeo no frame com o logo perfeito e estabilizado (substituindo o final original)
      video.pause();
    }

    const startTime = performance.now();
    const DURATION = 950; // Duração total em milissegundos
    const MAX_R = 1250;

    // Curva de aceleração cúbica natural de íris/obturador fechando
    const easeIris = (t: number) => Math.pow(Math.min(1, Math.max(0, t)), 2.2);

    const step = (now: number) => {
      const elapsed = now - startTime;

      // Círculo 1 (Creme - fecha primeiro): de 0ms a ~580ms
      const tCream = elapsed / 580;
      const rCream = tCream >= 1 ? 0 : MAX_R * (1 - easeIris(tCream));

      // Círculo 2 (Laranja - fecha em seguida): de 140ms a ~760ms
      const tOrange = (elapsed - 140) / 620;
      const rOrange = tOrange <= 0 ? MAX_R : tOrange >= 1 ? 0 : MAX_R * (1 - easeIris(tOrange));

      // Círculo 3 (Escuro / Couro - fecha por último): de 280ms a ~950ms
      const tDark = (elapsed - 280) / 670;
      const rDark = tDark <= 0 ? MAX_R : tDark >= 1 ? 0 : MAX_R * (1 - easeIris(tDark));

      setRadii({
        cream: Math.max(0, rCream),
        orange: Math.max(0, rOrange),
        dark: Math.max(0, rDark),
      });

      // Quando o último círculo fechar completamente (raio 0), abre e carrega o site!
      if (tDark >= 1 || elapsed >= DURATION) {
        handleComplete();
      } else {
        animFrameRef.current = requestAnimationFrame(step);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  }, [isClosing, handleComplete]);

  // Função para pular imediatamente (ao clicar ou pressionar ESC)
  const handleSkip = useCallback(() => {
    handleComplete();
  }, [handleComplete]);

  useEffect(() => {
    if (!isActive) return;

    // Bloqueia rolagem do body durante a vinheta
    document.body.style.overflow = "hidden";

    // Timeout de segurança: nunca bloqueia o usuário mais de 5.5 segundos
    safetyTimerRef.current = window.setTimeout(() => {
      handleComplete();
    }, 5500);

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
            // Em caso de bloqueio severo de mídia pelo navegador, fallback seguro
            setIsVideoLoaded(true);
          });
      }
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      document.body.style.overflow = "auto";
    };
  }, [isActive, handleComplete, handleSkip]);

  // Monitora o tempo do vídeo: escrita ocorre de 0s a ~2.4s, logo assenta e fica visível até 3.45s;
  // Disparamos a transição circular concêntrica para fechar e abrir o site
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.currentTime >= 3.45 && !isClosing) {
      startCircularClosing();
    }
  };

  const handleEnded = () => {
    if (!isClosing) {
      startCircularClosing();
    }
  };

  if (!isActive) return null;

  // Função auxiliar para gerar caminho SVG de anel concêntrico que fecha até 0
  const getHolePath = (r: number) => {
    if (r <= 0.1) {
      // Quando fechou completamente, cobre todo o viewport 1920x1080
      return "M 0 0 H 1920 V 1080 H 0 Z";
    }
    // Preenche tudo exceto o orifício circular central em (960, 540)
    return `M 0 0 H 1920 V 1080 H 0 Z M 960 ${540 - r} A ${r} ${r} 0 1 0 960 ${540 + r} A ${r} ${r} 0 1 0 960 ${540 - r} Z`;
  };

  return (
    <div
      onClick={handleSkip}
      role="button"
      tabIndex={0}
      aria-label="Vinheta oficial Akedah Podcast. Clique ou aperte ESC para pular."
      className="fixed inset-0 z-[99999] select-none cursor-pointer overflow-hidden bg-[#1F110B]"
      style={{
        backgroundColor: "#1F110B",
        backgroundImage: "url('/videos/vinheta-akedah-poster.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* 1. Container de Fundo e Vídeo da Vinheta */}
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
          className={`w-full h-full object-contain md:object-cover transition-opacity duration-300 ${
            isVideoLoaded ? "opacity-100" : "opacity-90"
          }`}
          style={{
            maxHeight: "100vh",
            maxWidth: "100vw",
            filter: "contrast(1.02) saturate(1.02)",
          }}
        >
          <source src="/videos/vinheta-akedah-podcast.webm" type="video/webm" />
          <source src="/videos/vinheta-akedah-podcast.mp4" type="video/mp4" />
        </video>

        {/* Efeito de Vinheta Radial Suave nas bordas */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(31,17,11,0) 60%, rgba(20,10,6,0.6) 92%, #150B07 100%)",
          }}
        />
      </div>

      {/* 2. TRANSIÇÃO CIRCULAR CONCÊNTRICA DE FECHAMENTO (REPLICANDO O INÍCIO DO VÍDEO NO FINAL) */}
      {isClosing && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-40 will-change-transform"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Padrão com a textura real de couro para o fechamento escuro */}
            <pattern
              id="closing-leather-dark"
              patternUnits="userSpaceOnUse"
              width="1920"
              height="1080"
            >
              <image
                href="/videos/vinheta-akedah-poster.webp"
                width="1920"
                height="1080"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>

          {/* Camada 1: Círculo Bege/Creme (#FAF6EB) fechando primeiro sobre o logo */}
          {radii.cream < 1250 && (
            <path
              fillRule="evenodd"
              d={getHolePath(radii.cream)}
              fill="#FAF6EB"
              className="will-change-[d]"
            />
          )}

          {/* Camada 2: Círculo Laranja Terracota (#FF6C1D) fechando em seguida sobre o bege */}
          {radii.orange < 1250 && (
            <path
              fillRule="evenodd"
              d={getHolePath(radii.orange)}
              fill="#FF6C1D"
              className="will-change-[d]"
            />
          )}

          {/* Camada 3: Círculo Escuro de Couro (#1F110B / #0C0704) fechando por último */}
          {radii.dark < 1250 && (
            <path
              fillRule="evenodd"
              d={getHolePath(radii.dark)}
              fill="url(#closing-leather-dark)"
              className="will-change-[d]"
            />
          )}
        </svg>
      )}

      {/* 3. Botão Elegante de Pular (ESC / Clique) */}
      <div className="absolute bottom-6 right-6 z-50 pointer-events-none flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#150B07]/80 backdrop-blur-md border border-[#FAF6EB]/15 text-[#FAF6EB]/70 text-xs font-bebas-neue tracking-wider shadow-lg">
        <span className="font-bebas-neue tracking-wider">Pular vinheta</span>
        <span className="px-1.5 py-0.5 rounded text-[11px] bg-[#FAF6EB]/10 border border-[#FAF6EB]/20 text-[#FAF6EB] font-bebas-neue tracking-widest font-semibold">
          ESC
        </span>
      </div>
    </div>
  );
};

export default IrisPreloader;
