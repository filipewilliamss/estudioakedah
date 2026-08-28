import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import founderPicture from "@/assets/akedah-founder.jpg";
import studioBannerImg from "@/assets/akedah-podcast-studio.jpg";

// Marcos da Linha do Tempo do Podcast
const podcastTimelineSteps = [
  {
    number: "01",
    title: "O Primeiro Episódio",
    description: "O Akedah Podcast nasce com o propósito de levar conversas comerciais sem rodeios para o ecossistema empresarial.",
  },
  {
    number: "02",
    title: "Evolução Técnica & 4K",
    description: "Implementação de setup multicâmera 4K HDR, microfones Shure SM7B broadcast e acústica de isolamento profissional.",
  },
  {
    number: "03",
    title: "Grandes Líderes",
    description: "Entrevistas com executivos, empresários e especialistas que geram resultados concretos no mercado.",
  },
  {
    number: "04",
    title: "Ecossistema de Cortes",
    description: "Criação de esteira de produção para cortes verticais de alta retenção no YouTube, Instagram, TikTok e Spotify.",
  },
  {
    number: "05",
    title: "Autoridade Consolidada",
    description: "Centenas de horas de gravação transformando conhecimento em autoridade e novos negócios para convidados e marcas.",
  },
];

const PodcastTimelineStep = ({ step, idx }: { step: typeof podcastTimelineSteps[0]; idx: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const numberTranslateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const smoothNumberY = useSpring(numberTranslateY, { stiffness: 50, damping: 20 });

  const contentTranslateY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const smoothContentY = useSpring(contentTranslateY, { stiffness: 60, damping: 25 });

  return (
    <div ref={containerRef} className="relative py-20 md:py-32">
      <motion.div
        style={{
          opacity: contentOpacity,
          y: smoothContentY,
        }}
        className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 ${
          idx % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Ponto de conexão */}
        <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 top-10 w-2.5 h-2.5 bg-[#C4550A] rounded-full z-10 shadow-[0_0_25px_rgba(196,85,10,0.9)]" />

        {/* Número Gigante em Parallax */}
        <motion.span
          style={{ y: smoothNumberY }}
          className={`absolute font-display text-[100px] sm:text-[150px] md:text-[280px] font-[800] text-[#C4550A]/[0.12] md:text-[#C4550A]/[0.15] leading-none pointer-events-none select-none z-0 ${
            idx % 2 === 0 ? "left-6 md:left-auto md:right-[45%]" : "left-6 md:left-[45%]"
          }`}
        >
          {step.number}
        </motion.span>

        <div
          className={`w-full md:w-[45%] relative z-10 px-8 md:px-0 ${
            idx % 2 === 0 ? "md:text-left" : "md:text-right"
          }`}
        >
          <h3 className="font-display text-[32px] md:text-[48px] font-[800] text-white mb-6 tracking-tighter leading-[0.9]">
            {step.title}
          </h3>
          <p
            className={`text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-md ${
              idx % 2 === 0 ? "" : "md:ml-auto"
            } font-light tracking-wide`}
          >
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const PodcastAbout = () => {
  return (
    <div className="min-h-screen bg-[#2D1A11] text-white selection:bg-[#C4550A] selection:text-white relative">
      <SEO 
        title="Nossa História | Akedah Podcast"
        description="Conheça a história do Akedah Podcast, a infraestrutura do estúdio de gravação e a trajetória de construção de autoridade."
      />
      <Navbar isPodcastPage={true} />

      {/* Camada de Textura de Couro em Alto Relevo */}
      <div 
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 opacity-60 mix-blend-overlay"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/leather.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "340px 340px",
          filter: "contrast(320%) brightness(160%)",
        }}
      />
      <div 
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 opacity-35 mix-blend-color-dodge"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/leather.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "340px 340px",
          filter: "invert(1) contrast(350%) brightness(120%)",
        }}
      />

      <div className="relative z-10">
        <main className="pb-24">
          {/* 1. Hero Section (Card em Tela Inteira estilo Serviços com foto de estúdio e texto à esquerda) */}
          <section className="relative min-h-[92vh] md:min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-transparent pt-28 pb-16">
            <div className="absolute inset-0 z-0">
              <img 
                src={studioBannerImg} 
                alt="Akedah Podcast - Nossa História" 
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D1A11] via-[#2D1A11]/85 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1A11] via-transparent to-[#2D1A11]/50" />
            </div>

            <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex justify-start">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl text-left flex flex-col items-start"
              >
                <div className="flex items-center justify-start gap-4 mb-6">
                  <span className="text-[#C4550A] text-[11px] md:text-[12px] uppercase tracking-[0.5em] font-bold">
                    Akedah Podcast
                  </span>
                </div>

                <h1 className="font-display text-[54px] sm:text-[76px] md:text-[96px] font-[900] leading-[0.88] tracking-[-0.05em] mb-8">
                  <span className="block">Nossa</span>
                  <span className="text-[#C4550A] italic font-normal block">história</span>
                </h1>

                <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl text-left">
                  O Akedah Podcast nasceu para ser a principal mesa de debates de negócios, estratégia e crescimento real, unindo conversas profundas com grandes líderes e produção cinematográfica.
                </p>
              </motion.div>
            </div>
          </section>

          {/* 2. Descrição da Estrutura do Podcast */}
          <section className="container-editorial py-20 mb-28 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl space-y-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">
                  Infraestrutura de Gravação
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Estrutura do Podcast
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70 text-base md:text-lg leading-relaxed">
                <p>
                  Nossa mesa de gravação conta com microfones Shure SM7B broadcast com processamento dinâmico em tempo real, garantindo voz limpa, encorpada e presença imersiva para o ouvinte.
                </p>
                <p>
                  Dispomos de sistema multicâmera 4K HDR calibrado com iluminação cinematográfica sob medida, além de ilhas dedicadas à extração rápida de cortes verticais para redes sociais.
                </p>
              </div>

              {/* Destaques da Estrutura */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                <div className="p-4 bg-white/[0.03] border border-white/5 rounded-[10px]">
                  <p className="text-[#C4550A] font-bold text-lg mb-1">Shure SM7B</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Áudio Broadcast</p>
                </div>
                <div className="p-4 bg-white/[0.03] border border-white/5 rounded-[10px]">
                  <p className="text-[#C4550A] font-bold text-lg mb-1">4K HDR</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Multicâmera Cinema</p>
                </div>
                <div className="p-4 bg-white/[0.03] border border-white/5 rounded-[10px]">
                  <p className="text-[#C4550A] font-bold text-lg mb-1">Cortes Ágeis</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Reels & Shorts</p>
                </div>
                <div className="p-4 bg-white/[0.03] border border-white/5 rounded-[10px]">
                  <p className="text-[#C4550A] font-bold text-lg mb-1">Ao Vivo</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Transmissão 4K</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 3. Significado de Akedah Podcast */}
          <section className="py-24 mb-20 border-t border-white/[0.05]">
            <div className="container-editorial">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">O que representa o <span className="text-[#C4550A]">Podcast</span>?</h2>
                <p className="text-white/60 text-xl leading-relaxed italic">
                  "O Akedah Podcast é o ponto de encontro entre o campo de batalha empresarial e a autoridade em vídeo. Aqui não há teorias vazias: apenas quem vive o negócio e entrega valor real."
                </p>
              </div>
            </div>
          </section>

          {/* 4. Linha do Tempo do Podcast */}
          <section id="linha-do-tempo" className="relative py-24 bg-transparent border-t border-white/[0.05] overflow-hidden mb-32">
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-6 md:-left-10 top-[5%] md:top-[8%] font-display font-[900] text-white/[0.015] leading-none tracking-extratight pointer-events-none select-none"
              style={{ fontSize: "clamp(80px, 15vw, 250px)" }}
            >
              linha do tempo
            </motion.span>

            <div className="container-editorial relative z-10">
              <div className="flex flex-col items-center text-center mb-32">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="inline-block text-[#C4550A] text-[12px] font-bold uppercase tracking-[0.5em] mb-8">
                    Linha do Tempo do Podcast
                  </span>
                  <h2 className="font-display text-[44px] md:text-[84px] font-[900] text-white leading-[0.85] tracking-extratighter mb-8">
                    Da primeira bancada <br /> à <span className="text-[#C4550A] italic font-normal">grande audiência.</span>
                  </h2>
                  <p className="text-white/50 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                    A trajetória do Akedah Podcast construída episódio a episódio com grandes convidados.
                  </p>
                </motion.div>
              </div>

              <div className="relative max-w-6xl mx-auto">
                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C4550A]/60 via-[#C4550A]/20 to-transparent" />

                <div className="space-y-20 md:space-y-0">
                  {podcastTimelineSteps.map((step, idx) => (
                    <PodcastTimelineStep key={idx} step={step} idx={idx} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Apresentadores / Fundador */}
          <section className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/5] border border-white/10 overflow-hidden rounded-[12px]"
              >
                <img 
                  src={founderPicture} 
                  alt="Daniel Silva - Host e Fundador do Akedah Podcast" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                Apresentação por <span className="text-[#C4550A]">Daniel Silva</span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                <p>
                  Com anos de vivência no centro das decisões comerciais e estratégicas de negócios, Daniel Silva conduz cada episódio extraindo insights práticos, desafios superados e metodologias que funcionam.
                </p>
                <p>
                  Mais do que um podcast de entrevistas, é um espaço de mentoria aberta para líderes que buscam escalar suas operações com clareza e previsibilidade.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-[#C4550A] font-bold text-4xl mb-1">4K HDR</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold">Padrão Cinema</p>
                </div>
                <div>
                  <p className="text-[#C4550A] font-bold text-4xl mb-1">100%</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold">Foco em Estratégia</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default PodcastAbout;
