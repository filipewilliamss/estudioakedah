import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DanielNarrativeLayers from "./DanielNarrativeLayers";

gsap.registerPlugin(ScrollTrigger);

export const DanielCinematicExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Pausa o vídeo para que a linha do tempo seja 100% conduzida pelo scroll
    video.pause();

    const handleLoadedMetadata = () => {
      ScrollTrigger.refresh();
    };

    // Fila suave para que o decodificador de vídeo não engasgue nem perca frames
    const handleSeeked = () => {
      if (!video || isNaN(video.duration)) return;
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.04) {
        video.currentTime = targetTimeRef.current;
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);

    // ========================================================================
    // ScrollTrigger: Mapeamento suave e contínuo da linha do tempo do vídeo
    // Pista de 850vh para garantir controle calmo, legibilidade e ritmo cinematográfico
    // ========================================================================
    const trigger = ScrollTrigger.create({
      trigger: ".experience-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.4,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
        if (video && !isNaN(video.duration) && video.duration > 0) {
          // O vídeo conclui aos 93% da rolagem, mantendo o último frame na tela antes de seguir
          const videoProgress = Math.min(self.progress / 0.93, 1);
          const targetTime = Math.max(0, Math.min(videoProgress * (video.duration - 0.05), video.duration - 0.05));
          targetTimeRef.current = targetTime;

          if (!video.seeking) {
            video.currentTime = targetTime;
          }
        }
      },
    });

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      trigger.kill();
    };
  }, []);

  // Navegação direta por cliques nos capítulos
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
    { label: "01 Entrada", ratio: 0.04 },
    { label: "02 Empreendedor", ratio: 0.22 },
    { label: "03 Músico", ratio: 0.52 },
    { label: "04 Fé", ratio: 0.74 },
    { label: "05 Convergência", ratio: 0.92 },
  ];

  return (
    <div
      ref={containerRef}
      className="experience-container relative w-full bg-[#07132B]"
      style={{ minHeight: "850vh" }}
    >
      {/* Sticky Viewport Frame: Trava o vídeo em tela cheia durante 100% da rolagem da pista */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Camada Visual do Vídeo (Camada de Fundo Cinematográfica) */}
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            muted
            playsInline
            preload="auto"
          >
            <source src="/videos/site-video-daniel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Gradientes sutis para garantir contraste sem esconder a cena */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07132B]/85 via-[#07132B]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07132B]/80 via-transparent to-[#07132B]/40 pointer-events-none" />
        </div>

        {/* Camada Narrativa em HTML Real (Estágios 1 ao 6) */}
        <DanielNarrativeLayers progress={scrollProgress} />

        {/* HUD com Marcadores de Capítulo e Barra de Progresso Estilo YouTube */}
        <div className="absolute bottom-0 left-0 w-full z-40">
          {/* Marcadores de Capítulos Sutis */}
          <div className="hidden sm:flex items-center justify-between px-8 py-2 text-[10px] font-mono uppercase tracking-widest text-white/50 pointer-events-auto">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => jumpToStage(ch.ratio)}
                className={`hover:text-white transition-colors duration-200 ${
                  scrollProgress >= ch.ratio - 0.1 && scrollProgress <= ch.ratio + 0.1
                    ? "text-white font-bold"
                    : ""
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>

          {/* Barra de Progresso Branca na Base Inferior */}
          <div className="w-full h-[5px] bg-white/20 relative">
            <div
              className="h-full bg-white transition-[width] duration-75 ease-out shadow-[0_0_12px_rgba(255,255,255,0.9)]"
              style={{ width: `${Math.min(scrollProgress / 0.93, 1) * 100}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DanielCinematicExperience;
