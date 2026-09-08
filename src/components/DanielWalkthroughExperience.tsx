import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHATSAPP_URL } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export const DanielWalkthroughExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Pausa inicial para que o vídeo seja conduzido 100% pelo scroll
    video.pause();

    const handleLoadedMetadata = () => {
      ScrollTrigger.refresh();
    };

    // Fila suave para o decodificador de vídeo não engasgar / pular frames
    const handleSeeked = () => {
      if (!video || isNaN(video.duration)) return;
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.04) {
        video.currentTime = targetTimeRef.current;
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);

    // ========================================================================
    // 1. ScrollTrigger Integration
    // - Pista de scroll estendida para suportar a duração total do vídeo
    // - "bottom bottom" garante que o vídeo permaneça 100% visível na tela até o fim
    // - scrub: 1.2 suaviza o avanço da roda do mouse
    // ========================================================================
    const trigger = ScrollTrigger.create({
      trigger: ".experience-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.4,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
        if (video && !isNaN(video.duration) && video.duration > 0) {
          // O vídeo atinge 100% aos 93% da rolagem, mantendo o último frame na tela antes de descer
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

  return (
    // 2. HTML Wrapper: .experience-container com pista de 850vh para rolagem mais lenta e suave
    <div
      ref={containerRef}
      className="experience-container relative w-full bg-[#07132B]"
      style={{ minHeight: "850vh" }}
    >
      {/* Sticky viewport frame: trava o vídeo na tela durante 100% da rolagem em tela cheia */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Elemento de Vídeo ocupando 100% da tela sem molduras laterais */}
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
        </div>

        {/* Overlay elegante com os textos e botões de Daniel Silva (desvanece suavemente ao rolar) */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 flex flex-col justify-between p-6 sm:p-12 md:p-16 lg:p-24"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 6) }}
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

        {/* Indicador de rolagem e progresso no rodapé */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/70 border border-white/15 backdrop-blur-md text-white/90 text-xs font-mono shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping" />
            <span>Gire o scroll para avançar a apresentação</span>
            <span className="text-white/40">|</span>
            <span className="text-[#3B82F6] font-bold">{Math.round(Math.min(scrollProgress / 0.92, 1) * 100)}%</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DanielWalkthroughExperience;
