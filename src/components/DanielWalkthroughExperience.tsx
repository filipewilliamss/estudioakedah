import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHATSAPP_URL } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export const DanielWalkthroughExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Garante que o vídeo fique pausado e pronto para scrubbing
    video.pause();

    const handleLoadedMetadata = () => {
      ScrollTrigger.refresh();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    // ========================================================================
    // 1. ScrollTrigger Integration (com scrub: 1 para máxima suavidade)
    // ========================================================================
    const trigger = ScrollTrigger.create({
      trigger: ".experience-container",
      start: "top top",
      end: "bottom top",
      scrub: 1, // suaviza o scrubbing
      onUpdate: (self) => {
        setScrollProgress(self.progress);
        if (video && !isNaN(video.duration) && video.duration > 0) {
          video.currentTime = self.progress * video.duration;
        }
      },
    });

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      trigger.kill();
    };
  }, []);

  return (
    // 2. HTML Wrapper: .experience-container com pista de scroll
    <div
      ref={containerRef}
      className="experience-container relative w-full bg-[#07132B]"
      style={{ minHeight: "350vh" }}
    >
      {/* Sticky viewport frame para manter o vídeo fixo na tela enquanto o scroll avança */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Elemento de Vídeo com wrapper exato */}
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            width="100%"
            height="auto"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxHeight: "100vh",
              objectFit: "contain",
            }}
            muted
            playsInline
            preload="auto"
          >
            <source src="/videos/site-video-daniel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Overlay elegante com os textos e botões de Daniel Silva (desvanece ao rolar a página) */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 flex flex-col justify-between p-6 sm:p-12 md:p-16 lg:p-24"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 5) }}
        >
          <div className="pt-16 max-w-2xl text-left space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="text-white text-[11px] font-mono font-bold uppercase tracking-[0.3em]">
                Daniel Silva
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9]">
              Estratégia, Fé <br />
              <span className="text-white/80 italic font-normal">& Música</span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
              Estrategista de negócios, mentor executivo e líder visionário. Conectando princípios sólidos de fé, visão empreendedora e sensibilidade artística.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center pointer-events-auto">
              <a
                href="#agenda"
                className="bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-[12px] transition-all shadow-xl"
              >
                Conferir Agendas
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white hover:bg-white hover:text-[#07132B] border border-white/30 font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-[12px] transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Indicador sutil de scroll no rodapé */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-white/80 text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Role o mouse para avançar pelo vídeo</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DanielWalkthroughExperience;
