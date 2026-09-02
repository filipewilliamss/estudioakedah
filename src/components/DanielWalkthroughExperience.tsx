import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import founderPicture from "@/assets/akedah-founder.jpg";
import studioBannerImg from "@/assets/akedah-podcast-studio.jpg";
import retratoFielVideo from "@/assets/retrato-fiel.mp4";
import { WHATSAPP_URL } from "@/data/services";

// ============================================================================
// 🎬 CONFIGURAÇÃO DOS VÍDEOS / MÍDIAS DOS 3 CÔMODOS
// O scroll do mouse agora controla a linha do tempo (frame a frame) dos vídeos!
// ============================================================================
export const DANIEL_ROOMS_MEDIA = {
  // 1. Empreendedor (Social/Formal) - Vídeo Real "Retrato Fiel.mp4"
  empreendedor: {
    videoUrl: retratoFielVideo,
    fallbackImage: founderPicture,
    badge: "01 • SALA CORPORATIVA",
    role: "O Estrategista & Empreendedor",
    visualStyle: "Visual Social & Formal",
    tagline: "Vendas complexas, estruturação de processos e aceleração comercial.",
    description: "Daniel no comando de reuniões estratégicas e mentorias corporativas. Conforme você rola a página, o vídeo avança e você entra no ambiente executivo.",
    metrics: [
      { label: "Foco", value: "B2B & Escala" },
      { label: "Atuação", value: "Playbooks & Funil" },
      { label: "Perfil", value: "Executivo" }
    ],
    accentColor: "#3B82F6",
  },

  // 2. Música (Casual Artístico)
  musica: {
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    fallbackImage: studioBannerImg,
    badge: "02 • ESTÚDIO DE MÚSICA",
    role: "O Artista & Produtor",
    visualStyle: "Visual Casual Criativo",
    tagline: "Sensibilidade harmônica, produção sonora e conexão emocional.",
    description: "Você entra no estúdio musical. Instrumentos, luzes quentes e Daniel em sua versão artística, compondo, produzindo e ministrando.",
    metrics: [
      { label: "Arte", value: "Composição" },
      { label: "Estúdio", value: "Sonoplastia 4K" },
      { label: "Atmosfera", value: "Sensibilidade" }
    ],
    accentColor: "#A855F7",
  },

  // 3. Mentoria em Fé & Propósito (Sport Fino)
  fe: {
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    fallbackImage: founderPicture,
    badge: "03 • LOUNGE DE MENTORIA",
    role: "O Mentor em Fé & Propósito",
    visualStyle: "Visual Sport Fino",
    tagline: "Liderança com princípios bíblicos, propósito de vida e host do podcast.",
    description: "Uma atmosfera acolhedora e inspiradora. Daniel de blazer e camisa, compartilhando princípios eternos para a vida, família e liderança servidora.",
    metrics: [
      { label: "Fundamento", value: "Princípios Bíblicos" },
      { label: "Formato", value: "Mentoria & Podcast" },
      { label: "Legado", value: "Propósito Real" }
    ],
    accentColor: "#EAB308",
  },
};

export const DanielWalkthroughExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);

  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [video1Loaded, setVideo1Loaded] = useState(false);

  // Monitora o progresso de scroll dentro do trilho imersivo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  // --------------------------------------------------------------------------
  // 🎞️ CONTROLE DO VÍDEO POR SCROLL (VIDEO SCRUBBING FRAME A FRAME)
  // --------------------------------------------------------------------------
  useEffect(() => {
    let animationFrameId: number;

    const updateVideoFrames = () => {
      const p = smoothProgress.get();

      // Atualiza a sala ativa
      if (p < 0.33) {
        setCurrentRoomIndex(0);
      } else if (p < 0.68) {
        setCurrentRoomIndex(1);
      } else {
        setCurrentRoomIndex(2);
      }

      // 1. Controla o vídeo da Sala 1 (Empreendedorismo)
      // Mapeado no intervalo de scroll 0.00 -> 0.30
      if (video1Ref.current && video1Ref.current.duration) {
        const room1Progress = Math.min(Math.max(p / 0.30, 0), 1);
        const targetTime = room1Progress * video1Ref.current.duration;
        if (Math.abs(video1Ref.current.currentTime - targetTime) > 0.02) {
          video1Ref.current.currentTime = targetTime;
        }
      }

      // 2. Controla o vídeo da Sala 2 (Música)
      // Mapeado no intervalo de scroll 0.34 -> 0.65
      if (video2Ref.current && video2Ref.current.duration) {
        const room2Progress = Math.min(Math.max((p - 0.34) / (0.65 - 0.34), 0), 1);
        const targetTime = room2Progress * video2Ref.current.duration;
        if (Math.abs(video2Ref.current.currentTime - targetTime) > 0.02) {
          video2Ref.current.currentTime = targetTime;
        }
      }

      // 3. Controla o vídeo da Sala 3 (Fé & Mentoria)
      // Mapeado no intervalo de scroll 0.68 -> 0.98
      if (video3Ref.current && video3Ref.current.duration) {
        const room3Progress = Math.min(Math.max((p - 0.68) / (0.98 - 0.68), 0), 1);
        const targetTime = room3Progress * video3Ref.current.duration;
        if (Math.abs(video3Ref.current.currentTime - targetTime) > 0.02) {
          video3Ref.current.currentTime = targetTime;
        }
      }

      animationFrameId = requestAnimationFrame(updateVideoFrames);
    };

    animationFrameId = requestAnimationFrame(updateVideoFrames);
    return () => cancelAnimationFrame(animationFrameId);
  }, [smoothProgress]);

  // Transições de Opacidade suaves entre os 3 cenários
  const room1Opacity = useTransform(smoothProgress, [0, 0.28, 0.34], [1, 1, 0]);
  const room2Opacity = useTransform(smoothProgress, [0.28, 0.35, 0.62, 0.68], [0, 1, 1, 0]);
  const room3Opacity = useTransform(smoothProgress, [0.62, 0.69, 1.0], [0, 1, 1]);

  // Função para navegar diretamente para um cômodo ao clicar no mini-mapa
  const jumpToRoom = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targets = [0.05, 0.48, 0.88];
    window.scrollTo({
      top: containerTop + totalHeight * targets[index],
      behavior: "smooth",
    });
  };

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] bg-[#07132B]">
      {/* VIEWPORT FIXO EM TELA INTEIRA (STICKY) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* ================================================================== */}
        {/* CÔMODO 1: SALA CORPORATIVA (EMPREENDEDORISMO - SOCIAL/FORMAL)      */}
        {/* ================================================================== */}
        <motion.div
          style={{ opacity: room1Opacity }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Fundo com Vídeo Controlado por Scroll */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#07132B]">
            <img 
              src={DANIEL_ROOMS_MEDIA.empreendedor.fallbackImage} 
              alt="Daniel Silva - Sala Executiva" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                video1Loaded ? "opacity-20" : "opacity-60"
              } filter grayscale contrast-125`}
            />
            <video
              ref={video1Ref}
              preload="auto"
              muted
              playsInline
              src={DANIEL_ROOMS_MEDIA.empreendedor.videoUrl}
              onLoadedMetadata={() => setVideo1Loaded(true)}
              className="absolute inset-0 w-full h-full object-cover opacity-85 filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-[#07132B]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-[#07132B]/60" />
          </div>

          {/* Conteúdo Sobreposto - Sala 1 */}
          <div className="relative z-20 w-full h-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-start">
            <div className="max-w-2xl text-left space-y-6 pt-16">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
                <span className="text-white text-[11px] font-mono font-bold uppercase tracking-[0.3em]">
                  {DANIEL_ROOMS_MEDIA.empreendedor.badge}
                </span>
              </div>

              <div>
                <span className="text-[#3B82F6] font-mono text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                  {DANIEL_ROOMS_MEDIA.empreendedor.visualStyle}
                </span>
                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9]">
                  O Estrategista <br />
                  <span className="text-white/80 italic font-normal">& Empreendedor</span>
                </h2>
              </div>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
                {DANIEL_ROOMS_MEDIA.empreendedor.description}
              </p>

              {/* Cards de Métricas */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                {DANIEL_ROOMS_MEDIA.empreendedor.metrics.map((m, i) => (
                  <div key={i} className="p-3 bg-white/[0.06] border border-white/10 rounded-[12px] backdrop-blur-md">
                    <span className="text-white/50 text-[10px] font-mono uppercase tracking-wider block">{m.label}</span>
                    <span className="text-white font-bold text-sm sm:text-base font-display">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-[12px] transition-all shadow-xl"
                >
                  Contratar Consultoria
                </a>
                <span className="text-white/70 text-xs font-mono flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  🖱️ Role o mouse para avançar o vídeo frame a frame ↓
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================================================================== */}
        {/* CÔMODO 2: ESTÚDIO MUSICAL (MÚSICA - CASUAL ARTÍSTICO)              */}
        {/* ================================================================== */}
        <motion.div
          style={{ opacity: room2Opacity }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Fundo com Vídeo Controlado por Scroll */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#140827]">
            <img 
              src={DANIEL_ROOMS_MEDIA.musica.fallbackImage} 
              alt="Daniel Silva - Estúdio Musical" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter contrast-125 brightness-90"
            />
            <video
              ref={video2Ref}
              preload="auto"
              muted
              playsInline
              src={DANIEL_ROOMS_MEDIA.musica.videoUrl}
              className="absolute inset-0 w-full h-full object-cover opacity-75 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#140827] via-[#140827]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-[#140827]/70" />
          </div>

          {/* Conteúdo Sobreposto - Sala 2 */}
          <div className="relative z-20 w-full h-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-start">
            <div className="max-w-2xl text-left space-y-6 pt-16">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-white text-[11px] font-mono font-bold uppercase tracking-[0.3em]">
                  {DANIEL_ROOMS_MEDIA.musica.badge}
                </span>
              </div>

              <div>
                <span className="text-purple-400 font-mono text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                  {DANIEL_ROOMS_MEDIA.musica.visualStyle}
                </span>
                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9]">
                  O Artista, Músico <br />
                  <span className="text-purple-300 italic font-normal">& Produtor Sonoro</span>
                </h2>
              </div>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
                {DANIEL_ROOMS_MEDIA.musica.description}
              </p>

              {/* Destaques da Música */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                {DANIEL_ROOMS_MEDIA.musica.metrics.map((m, i) => (
                  <div key={i} className="p-3 bg-purple-950/40 border border-purple-500/20 rounded-[12px] backdrop-blur-md">
                    <span className="text-purple-300/60 text-[10px] font-mono uppercase tracking-wider block">{m.label}</span>
                    <span className="text-white font-bold text-sm sm:text-base font-display">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-[12px] transition-all shadow-xl shadow-purple-600/20"
                >
                  Ouvir Produções Musicais
                </a>
                <span className="text-white/70 text-xs font-mono flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  Role para ir ao Lounge de Mentoria em Fé ↓
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================================================================== */}
        {/* CÔMODO 3: LOUNGE DE MENTORIA EM FÉ (FÉ & PODCAST - SPORT FINO)     */}
        {/* ================================================================== */}
        <motion.div
          style={{ opacity: room3Opacity }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Fundo com Vídeo Controlado por Scroll */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0B1528]">
            <img 
              src={DANIEL_ROOMS_MEDIA.fe.fallbackImage} 
              alt="Daniel Silva - Lounge de Mentoria" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter contrast-120"
            />
            <video
              ref={video3Ref}
              preload="auto"
              muted
              playsInline
              src={DANIEL_ROOMS_MEDIA.fe.videoUrl}
              className="absolute inset-0 w-full h-full object-cover opacity-75 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-[#0B1528]/70" />
          </div>

          {/* Conteúdo Sobreposto - Sala 3 */}
          <div className="relative z-20 w-full h-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-start">
            <div className="max-w-2xl text-left space-y-6 pt-16">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-white text-[11px] font-mono font-bold uppercase tracking-[0.3em]">
                  {DANIEL_ROOMS_MEDIA.fe.badge}
                </span>
              </div>

              <div>
                <span className="text-amber-400 font-mono text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                  {DANIEL_ROOMS_MEDIA.fe.visualStyle}
                </span>
                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9]">
                  Mentoria em Fé, <br />
                  <span className="text-amber-200 italic font-normal">Propósito & Podcast</span>
                </h2>
              </div>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
                {DANIEL_ROOMS_MEDIA.fe.description}
              </p>

              {/* Destaques da Fé & Mentoria */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                {DANIEL_ROOMS_MEDIA.fe.metrics.map((m, i) => (
                  <div key={i} className="p-3 bg-amber-950/40 border border-amber-500/20 rounded-[12px] backdrop-blur-md">
                    <span className="text-amber-200/60 text-[10px] font-mono uppercase tracking-wider block">{m.label}</span>
                    <span className="text-white font-bold text-sm sm:text-base font-display">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-400 text-[#07132B] font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-[12px] transition-all shadow-xl shadow-amber-500/20"
                >
                  Agendar Mentoria em Fé
                </a>
                <a
                  href="/podcast"
                  className="bg-transparent text-white hover:bg-white/10 border border-white/30 font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-[12px] transition-all"
                >
                  Assistir Akedah Podcast
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================================================================== */}
        {/* HUD FIXO: MINI-MAPA DE CÔMODOS & CONTROLES DE CÂMERA EM 1ª PESSOA  */}
        {/* ================================================================== */}
        <div className="absolute bottom-8 left-6 sm:left-12 lg:left-24 z-40 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 p-1.5 bg-black/80 border border-white/20 backdrop-blur-xl rounded-full shadow-2xl">
            <button
              onClick={() => jumpToRoom(0)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 ${
                currentRoomIndex === 0
                  ? "bg-white text-[#07132B] shadow-md scale-105"
                  : "text-white/60 hover:text-white"
              }`}
            >
              01 • Empreendedor
            </button>
            <button
              onClick={() => jumpToRoom(1)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 ${
                currentRoomIndex === 1
                  ? "bg-purple-500 text-white shadow-md shadow-purple-500/30 scale-105"
                  : "text-white/60 hover:text-white"
              }`}
            >
              02 • Música
            </button>
            <button
              onClick={() => jumpToRoom(2)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 ${
                currentRoomIndex === 2
                  ? "bg-amber-400 text-[#07132B] shadow-md shadow-amber-400/30 scale-105"
                  : "text-white/60 hover:text-white"
              }`}
            >
              03 • Fé & Mentoria
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white/90 text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Vídeo por Scroll • Gire a roda do mouse para avançar ou retroceder a gravação</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DanielWalkthroughExperience;
