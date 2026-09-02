import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import founderPicture from "@/assets/akedah-founder.jpg";
import studioBannerImg from "@/assets/akedah-podcast-studio.jpg";
import { WHATSAPP_URL } from "@/data/services";

// ============================================================================
// 🎬 CONFIGURAÇÃO DOS VÍDEOS / MÍDIAS DOS 3 CÔMODOS
// Substitua as URLs abaixo pelos seus vídeos finais quando estiverem prontos!
// ============================================================================
export const DANIEL_ROOMS_MEDIA = {
  // 1. Empreendedor (Social/Formal) - Sala de reuniões / Estúdio corporativo
  empreendedor: {
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    fallbackImage: founderPicture,
    badge: "01 • SALA CORPORATIVA",
    role: "O Estrategista & Empreendedor",
    visualStyle: "Visual Social & Formal",
    tagline: "Vendas complexas, estruturação de processos e aceleração comercial.",
    description: "Daniel no comando de reuniões estratégicas e mentorias corporativas. Um ambiente sóbrio, executivo e focado em metas de alta performance.",
    metrics: [
      { label: "Foco", value: "B2B & Escala" },
      { label: "Atuação", value: "Playbooks & Funil" },
      { label: "Perfil", value: "Executivo" }
    ],
    accentColor: "#3B82F6",
    ambientLight: "rgba(11, 27, 61, 0.85)",
  },

  // 2. Música (Casual Artístico) - Estúdio de gravação / Instrumentos
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
    ambientLight: "rgba(45, 15, 65, 0.85)",
  },

  // 3. Mentoria em Fé & Propósito (Sport Fino) - Lounge inspirador / Podcast
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
    ambientLight: "rgba(25, 35, 60, 0.85)",
  },
};

export const DanielWalkthroughExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

  // Monitora o progresso de scroll dentro do trilho imersivo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001,
  });

  // Atualiza o estado da sala ativa conforme o scroll avança
  scrollYProgress.on("change", (v) => {
    if (v < 0.33) {
      if (currentRoomIndex !== 0) setCurrentRoomIndex(0);
    } else if (v < 0.68) {
      if (currentRoomIndex !== 1) setCurrentRoomIndex(1);
    } else {
      if (currentRoomIndex !== 2) setCurrentRoomIndex(2);
    }
  });

  // --------------------------------------------------------------------------
  // CÂMERA 1ª PESSOA: TRANSFORMAÇÕES 3D E MOVIMENTO PELOS CÔMODOS
  // --------------------------------------------------------------------------

  // SALA 1: Empreendedor (0.0 -> 0.33)
  const room1Opacity = useTransform(smoothProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const room1Scale = useTransform(smoothProgress, [0, 0.28], [1.0, 1.25]);
  const room1Z = useTransform(smoothProgress, [0, 0.28], [0, 80]);
  const room1RotateY = useTransform(smoothProgress, [0.22, 0.33], [0, -18]);
  const room1Blur = useTransform(smoothProgress, [0.24, 0.33], [0, 10]);

  // SALA 2: Música (0.28 -> 0.68)
  const room2Opacity = useTransform(smoothProgress, [0.28, 0.38, 0.60, 0.68], [0, 1, 1, 0]);
  const room2Scale = useTransform(smoothProgress, [0.28, 0.42, 0.62], [1.3, 1.0, 1.25]);
  const room2RotateY = useTransform(smoothProgress, [0.28, 0.38, 0.58, 0.68], [25, 0, 0, -20]);
  const room2Blur = useTransform(smoothProgress, [0.28, 0.35, 0.60, 0.68], [10, 0, 0, 10]);

  // SALA 3: Fé & Mentoria (0.63 -> 1.0)
  const room3Opacity = useTransform(smoothProgress, [0.63, 0.74, 1.0], [0, 1, 1]);
  const room3Scale = useTransform(smoothProgress, [0.63, 0.76, 1.0], [1.3, 1.0, 1.18]);
  const room3RotateY = useTransform(smoothProgress, [0.63, 0.74, 1.0], [20, 0, 0]);
  const room3Blur = useTransform(smoothProgress, [0.63, 0.72, 1.0], [10, 0, 0]);

  // Função para navegar diretamente para um cômodo ao clicar no mini-mapa
  const jumpToRoom = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targets = [0.05, 0.48, 0.88];
    window.scrollTo({
      top: containerTop + totalHeight * targets[index],
      behavior: "smooth",
    });
  };

  return (
    <section ref={containerRef} className="relative w-full h-[450vh] bg-[#07132B]">
      {/* VIEWPORT FIXO EM TELA INTEIRA (CÂMERA EM 1ª PESSOA) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center [perspective:1400px]">
        
        {/* ================================================================== */}
        {/* CÔMODO 1: SALA CORPORATIVA (EMPREENDEDORISMO - SOCIAL/FORMAL)      */}
        {/* ================================================================== */}
        <motion.div
          style={{
            opacity: room1Opacity,
            scale: room1Scale,
            z: room1Z,
            rotateY: room1RotateY,
            filter: useTransform(room1Blur, (b) => `blur(${b}px)`),
          }}
          className="absolute inset-0 w-full h-full pointer-events-none [transform-style:preserve-3d]"
        >
          {/* Mídia de Fundo (Vídeo ou Imagem) */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 filter contrast-110"
              poster={DANIEL_ROOMS_MEDIA.empreendedor.fallbackImage}
            >
              <source src={DANIEL_ROOMS_MEDIA.empreendedor.videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-[#07132B]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-[#07132B]/60" />
          </div>

          {/* Conteúdo Sobreposto - Sala 1 */}
          <div className="relative z-20 w-full h-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-start pointer-events-auto">
            <motion.div className="max-w-2xl text-left space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
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

              {/* Cards de Métricas Rápidas */}
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
                <span className="text-white/50 text-xs font-mono animate-bounce">
                  Role para entrar no próximo cenário ↓
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================================================================== */}
        {/* CÔMODO 2: ESTÚDIO MUSICAL (MÚSICA - CASUAL ARTÍSTICO)              */}
        {/* ================================================================== */}
        <motion.div
          style={{
            opacity: room2Opacity,
            scale: room2Scale,
            rotateY: room2RotateY,
            filter: useTransform(room2Blur, (b) => `blur(${b}px)`),
          }}
          className="absolute inset-0 w-full h-full pointer-events-none [transform-style:preserve-3d]"
        >
          {/* Mídia de Fundo */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 filter contrast-125"
              poster={DANIEL_ROOMS_MEDIA.musica.fallbackImage}
            >
              <source src={DANIEL_ROOMS_MEDIA.musica.videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#140827] via-[#140827]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-[#140827]/70" />
          </div>

          {/* Conteúdo Sobreposto - Sala 2 */}
          <div className="relative z-20 w-full h-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-start pointer-events-auto">
            <motion.div className="max-w-2xl text-left space-y-6">
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
                <span className="text-white/50 text-xs font-mono animate-bounce">
                  Role para ir ao Lounge de Mentoria ↓
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================================================================== */}
        {/* CÔMODO 3: LOUNGE DE MENTORIA EM FÉ (FÉ & PODCAST - SPORT FINO)     */}
        {/* ================================================================== */}
        <motion.div
          style={{
            opacity: room3Opacity,
            scale: room3Scale,
            rotateY: room3RotateY,
            filter: useTransform(room3Blur, (b) => `blur(${b}px)`),
          }}
          className="absolute inset-0 w-full h-full pointer-events-none [transform-style:preserve-3d]"
        >
          {/* Mídia de Fundo */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 filter contrast-115"
              poster={DANIEL_ROOMS_MEDIA.fe.fallbackImage}
            >
              <source src={DANIEL_ROOMS_MEDIA.fe.videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-[#0B1528]/70" />
          </div>

          {/* Conteúdo Sobreposto - Sala 3 */}
          <div className="relative z-20 w-full h-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-start pointer-events-auto">
            <motion.div className="max-w-2xl text-left space-y-6">
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
            </motion.div>
          </div>
        </motion.div>

        {/* ================================================================== */}
        {/* HUD FIXO: MINI-MAPA DE CÔMODOS & CONTROLES DE CÂMERA EM 1ª PESSOA  */}
        {/* ================================================================== */}
        <div className="absolute bottom-8 left-6 sm:left-12 lg:left-24 z-40 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 p-1.5 bg-black/60 border border-white/15 backdrop-blur-xl rounded-full">
            <button
              onClick={() => jumpToRoom(0)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-300 ${
                currentRoomIndex === 0
                  ? "bg-white text-[#07132B] shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              01 • Empreendedor
            </button>
            <button
              onClick={() => jumpToRoom(1)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-300 ${
                currentRoomIndex === 1
                  ? "bg-purple-500 text-white shadow-md shadow-purple-500/30"
                  : "text-white/60 hover:text-white"
              }`}
            >
              02 • Música
            </button>
            <button
              onClick={() => jumpToRoom(2)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-300 ${
                currentRoomIndex === 2
                  ? "bg-amber-400 text-[#07132B] shadow-md shadow-amber-400/30"
                  : "text-white/60 hover:text-white"
              }`}
            >
              03 • Fé & Mentoria
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/50 text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Tour Interativo em 1ª Pessoa • Role a página para caminhar</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DanielWalkthroughExperience;
