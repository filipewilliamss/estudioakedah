import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DanielNarrativeLayers from "./DanielNarrativeLayers";

gsap.registerPlugin(ScrollTrigger);

/**
 * ============================================================================
 * TIMESTAMPS VERIFICADOS DO VÍDEO OFICIAL DANIEL SILVA (40.75s @ 30fps)
 * ============================================================================
 * 0.0s - 2.0s:  Porta de entrada, corredor escuro (Hero / Entrada)
 * 2.0s - 6.0s:  Aproximação do escritório, Daniel pequeno ao fundo (Fim hero)
 * 6.0s - 12.0s: Empreendedor enquadrado (close forte em 9-12s) (Dimensão 01)
 * 12.0s - 19.0s: Saída de quadro, parede, porta 2 (Painel Transição 1)
 * 19.0s - 21.0s: Entrada na sala de música (Abertura Dimensão 02)
 * 21.0s - 28.0s: Músico enquadrado (close em 24-27s) (Dimensão 02)
 * 28.0s - 33.0s: Porta 3, abertura (Painel Transição 2)
 * 33.0s - 40.0s: Fé enquadrado (close com sorriso em 38-40s) (Dimensão 03 + Convergência)
 */
export const DANIEL_VIDEO_TIMESTAMPS = {
  HERO_START: 0.0,
  HERO_DOOR_END: 2.0,
  HERO_APPROACH_END: 6.0,
  ENTREPRENEUR_START: 6.0,
  ENTREPRENEUR_CLOSEUP: 9.0,
  ENTREPRENEUR_END: 12.0,
  TRANSITION_1_START: 12.0, // Saída de quadro, parede, porta 2
  TRANSITION_1_END: 19.0,
  MUSIC_ROOM_ENTRY: 19.0,
  MUSICIAN_START: 21.0,     // Músico enquadrado
  MUSICIAN_CLOSEUP: 24.0,   // Close musical 24-27s
  MUSICIAN_END: 28.0,
  TRANSITION_2_START: 28.0, // Porta 3, abertura
  TRANSITION_2_END: 33.0,
  FAITH_START: 33.0,        // Fé enquadrado
  FAITH_CLOSEUP_SMILE: 38.0,// Close com sorriso 38-40s
  FAITH_CONVERGENCE: 40.0,  // Segura o quadro até o final
  TOTAL_DURATION: 40.75,
} as const;

/**
 * Mapeamento por Trechos (Piecewise Linear) Scroll -> Vídeo
 * Garante que cada dimensão só é visível enquanto Daniel está comprovadamente no enquadramento.
 * Os 12s de deslocamento por corredores e portas (12-19s e 28-33s) tornam-se os respiros institucionais.
 */
export const getVideoTimeForScroll = (progress: number): number => {
  const p = Math.max(0, Math.min(progress, 1));

  // 1. Hero / Entrada (Scroll 0.00 -> 0.15) => Vídeo 0.0s -> 6.0s
  if (p < 0.15) {
    const frac = p / 0.15;
    return (
      DANIEL_VIDEO_TIMESTAMPS.HERO_START +
      frac * (DANIEL_VIDEO_TIMESTAMPS.HERO_APPROACH_END - DANIEL_VIDEO_TIMESTAMPS.HERO_START)
    );
  }

  // 2. Dimensão 01 - Empreendedor (Scroll 0.15 -> 0.35) => Vídeo 6.0s -> 12.0s
  if (p < 0.35) {
    const frac = (p - 0.15) / (0.35 - 0.15);
    return (
      DANIEL_VIDEO_TIMESTAMPS.ENTREPRENEUR_START +
      frac * (DANIEL_VIDEO_TIMESTAMPS.ENTREPRENEUR_END - DANIEL_VIDEO_TIMESTAMPS.ENTREPRENEUR_START)
    );
  }

  // 3. Painel de Transição 1 (Scroll 0.35 -> 0.45) => Vídeo 12.0s -> 21.0s
  if (p < 0.45) {
    const frac = (p - 0.35) / (0.45 - 0.35);
    return (
      DANIEL_VIDEO_TIMESTAMPS.TRANSITION_1_START +
      frac * (DANIEL_VIDEO_TIMESTAMPS.MUSICIAN_START - DANIEL_VIDEO_TIMESTAMPS.TRANSITION_1_START)
    );
  }

  // 4. Dimensão 02 - Músico + Agenda (Scroll 0.45 -> 0.68) => Vídeo 21.0s -> 28.0s
  if (p < 0.68) {
    const frac = (p - 0.45) / (0.68 - 0.45);
    return (
      DANIEL_VIDEO_TIMESTAMPS.MUSICIAN_START +
      frac * (DANIEL_VIDEO_TIMESTAMPS.MUSICIAN_END - DANIEL_VIDEO_TIMESTAMPS.MUSICIAN_START)
    );
  }

  // 5. Painel de Transição 2 (Scroll 0.68 -> 0.76) => Vídeo 28.0s -> 33.0s
  if (p < 0.76) {
    const frac = (p - 0.68) / (0.76 - 0.68);
    return (
      DANIEL_VIDEO_TIMESTAMPS.TRANSITION_2_START +
      frac * (DANIEL_VIDEO_TIMESTAMPS.FAITH_START - DANIEL_VIDEO_TIMESTAMPS.TRANSITION_2_START)
    );
  }

  // 6. Dimensão 03 - Mentor de Fé (Scroll 0.76 -> 0.90) => Vídeo 33.0s -> 40.0s
  if (p < 0.90) {
    const frac = (p - 0.76) / (0.90 - 0.76);
    return (
      DANIEL_VIDEO_TIMESTAMPS.FAITH_START +
      frac * (DANIEL_VIDEO_TIMESTAMPS.FAITH_CONVERGENCE - DANIEL_VIDEO_TIMESTAMPS.FAITH_START)
    );
  }

  // 7. Estágio Final - Convergência (Scroll 0.90 -> 1.00) => Mantém o quadro de sorriso em 40.0s
  return DANIEL_VIDEO_TIMESTAMPS.FAITH_CONVERGENCE;
};

export const DanielCinematicExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoLayerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();

    const handleLoadedMetadata = () => {
      ScrollTrigger.refresh();
    };

    const handleSeeked = () => {
      if (!video || isNaN(video.duration)) return;
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.04) {
        video.currentTime = targetTimeRef.current;
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);

    const trigger = ScrollTrigger.create({
      trigger: ".experience-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
        if (video && !isNaN(video.duration) && video.duration > 0) {
          const targetTime = getVideoTimeForScroll(self.progress);
          targetTimeRef.current = targetTime;

          if (!video.seeking) {
            video.currentTime = targetTime;
          }
        }
      },
      onLeave: () => {
        if (videoLayerRef.current) {
          videoLayerRef.current.style.opacity = "0";
          videoLayerRef.current.style.pointerEvents = "none";
        }
      },
      onEnterBack: () => {
        if (videoLayerRef.current) {
          videoLayerRef.current.style.opacity = "1";
        }
      },
    });

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      trigger.kill();
    };
  }, []);

  const jumpToStage = (targetRatio: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: containerTop + totalHeight * targetRatio,
      behavior: "smooth",
    });
  };

  const chapters = [
    { label: "01 Entrada", ratio: 0.05 },
    { label: "02 Empreendedor", ratio: 0.25 },
    { label: "03 Músico", ratio: 0.56 },
    { label: "04 Fé", ratio: 0.83 },
    { label: "05 Convergência", ratio: 0.95 },
  ];

  return (
    <div
      ref={containerRef}
      className="experience-container relative w-full bg-[#191919]"
      style={{ minHeight: "850vh" }}
    >
      {/* Sticky Viewport Frame com 100dvh */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center">
        {/* Camada Visual do Vídeo (.video-layer fixa 100vw x 100dvh com object-position center 40%) */}
        <div
          ref={videoLayerRef}
          className="video-layer transition-opacity duration-500 ease-out"
        >
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
          >
            <source src="/videos/site-video-daniel.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>

          {/* Scrim Oficial Preto da Marca (rgb(25 25 25 / ...)) */}
          <div className="scrim" />
        </div>

        {/* Camada Narrativa em HTML Real (Estágios 1 ao 6) */}
        <DanielNarrativeLayers progress={scrollProgress} />

        {/* HUD com Marcadores de Capítulo e Barra de Progresso Estilo YouTube */}
        <div className="absolute bottom-0 left-0 w-full z-40 pointer-events-none">
          {/* Marcadores de Capítulos Sutis */}
          <div className="hidden sm:flex items-center justify-between px-8 py-2 text-[10px] font-lato font-normal uppercase tracking-widest text-white/50 pointer-events-auto">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => jumpToStage(ch.ratio)}
                className={`hover:text-white transition-colors duration-200 ${
                  scrollProgress >= ch.ratio - 0.08 && scrollProgress <= ch.ratio + 0.08
                    ? "text-white font-bold scale-105"
                    : ""
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>

          {/* Barra de Progresso Branca na Base Inferior Estilo YouTube */}
          <div className="w-full h-[5px] bg-white/20 relative">
            <div
              className="h-full bg-white transition-[width] duration-75 ease-out shadow-[0_0_12px_rgba(255,255,255,0.9)]"
              style={{ width: `${Math.min(scrollProgress / 0.92, 1) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanielCinematicExperience;
