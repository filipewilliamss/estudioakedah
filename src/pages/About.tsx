import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ParticleBackground from "@/components/ParticleBackground";
import founderPicture from "@/assets/akedah-founder.jpg";
import studioBannerImg from "@/assets/akedah-podcast-studio.jpg";

// Marcos da Linha do Tempo Akedah
const timelineSteps = [
  {
    number: "01",
    title: "Fundação",
    description: "A Akedah surge com a missão de conectar estratégia comercial de alta performance com produção de conteúdo de impacto.",
  },
  {
    number: "02",
    title: "Desenvolvimento do Método",
    description: "Criação de processos proprietários focados em diagnóstico, posicionamento claro e tração comercial previsível.",
  },
  {
    number: "03",
    title: "Estruturação do Estúdio",
    description: "Inauguração da infraestrutura própria em São Paulo com captação 4K, acústica broadcast e ilhas de edição integradas.",
  },
  {
    number: "04",
    title: "Expansão & Resultados",
    description: "Centenas de horas de gravação e mais de R$ 200k+ gerados para clientes em múltiplos segmentos de mercado.",
  },
  {
    number: "05",
    title: "Autonomia & Futuro",
    description: "Capacitação contínua e implementação de ecossistemas comerciais autônomos para empresas consolidadas.",
  },
];

const TimelineStep = ({ step, idx }: { step: typeof timelineSteps[0]; idx: number }) => {
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

const About = () => {
  return (
    <div className="min-h-screen bg-[#101010] text-white relative">
      <ParticleBackground />
      <SEO 
        title="Nossa História | Akedah"
        description="Conheça a história da Akedah, a estrutura do estúdio, a linha do tempo e a trajetória do fundador Daniel Silva."
      />
      <Navbar forceBlack={true} />
      <div className="relative z-10">
      
      <main className="pb-24">
        {/* 1. Hero Section (Card em Tela Inteira estilo Seção Serviços com imagem ao fundo e texto à esquerda) */}
        <section className="relative min-h-[92vh] md:min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-transparent pt-28 pb-16">
          {/* Background Image com Gradiente */}
          <div className="absolute inset-0 z-0">
            <img 
              src={studioBannerImg} 
              alt="Estúdio Akedah - Nossa História" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101010] via-[#101010]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-[#101010]/50" />
          </div>

          {/* Conteúdo sobreposto posicionado à esquerda */}
          <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex justify-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-left flex flex-col items-start"
            >
              <div className="flex items-center justify-start gap-4 mb-6">
                <span className="text-[#C4550A] text-[11px] md:text-[12px] uppercase tracking-[0.5em] font-bold">
                  Estúdio Akedah
                </span>
              </div>

              <h1 className="font-display text-[54px] sm:text-[76px] md:text-[96px] font-[900] leading-[0.88] tracking-[-0.05em] mb-8">
                <span className="block">Nossa</span>
                <span className="text-[#C4550A] italic font-normal block">história</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl text-left">
                A Akedah não nasceu de um plano de negócios de prateleira. Nasceu do campo de batalha comercial, resolvendo problemas reais de empresas que faturavam muito, mas cresciam pouco.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Descrição da Estrutura do Estúdio (Abaixo do Card) */}
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
                Infraestrutura & Tecnologia
              </span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Estrutura do Estúdio
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70 text-base md:text-lg leading-relaxed">
              <p>
                O Estúdio Akedah foi planejado e construído para oferecer uma experiência audiovisual completa, com isolamento acústico profissional, climatização silenciosa e ambientação acolhedora para você e seus convidados.
              </p>
              <p>
                Dispomos de setup multicâmera com gravação em 4K HDR, captação de áudio cristalina com microfones broadcast Shure, iluminação cinematográfica ajustável e ilhas de edição integradas para entrega ágil de episódios e cortes dinâmicos.
              </p>
            </div>

            {/* Destaques da Estrutura */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[10px]">
                <p className="text-[#C4550A] font-bold text-lg mb-1">4K HDR</p>
                <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Captação Multicâmera</p>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[10px]">
                <p className="text-[#C4550A] font-bold text-lg mb-1">Shure SM7B</p>
                <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Áudio Broadcast</p>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[10px]">
                <p className="text-[#C4550A] font-bold text-lg mb-1">Fibra Óptica</p>
                <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Streaming Redundante</p>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[10px]">
                <p className="text-[#C4550A] font-bold text-lg mb-1">Privativo</p>
                <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Espaço Exclusivo</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. A Trajetória do Daniel Silva */}
        <section className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
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
                alt="Daniel Silva - Fundador da Akedah" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              A trajetória do <span className="text-[#C4550A]">Daniel Silva</span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Com mais de 5 anos de experiência direta no comercial de empresas de diversos setores, Daniel Silva percebeu um padrão: o marketing trazia leads, mas o comercial não sabia o que fazer com eles. Ou pior, o marketing trazia as pessoas erradas.
              </p>
              <p>
                Foi vivenciando essa desconexão que ele desenvolveu uma metodologia que coloca a estratégia comercial no centro. Se a venda não acontece, o marketing é apenas custo.
              </p>
              <p>
                Hoje, a Akedah é a materialização dessa visão. Um estúdio em São Paulo que une inteligência estratégica, produção de conteúdo de alto nível e automação comercial para garantir que cada centavo investido se transforme em crescimento previsível.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-[#C4550A] font-bold text-4xl mb-1">5+</p>
                <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-[#C4550A] font-bold text-4xl mb-1">200k+</p>
                <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold">Faturamento dos Clientes</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Nossa Linha do Tempo (No formato da seção ProcessSection / Método da Home) */}
        <section id="linha-do-tempo" className="relative py-24 bg-transparent border-t border-white/[0.05] overflow-hidden mb-32">
          {/* Fundo monumental */}
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
                  Nossa Linha do Tempo
                </span>
                <h2 className="font-display text-[44px] md:text-[84px] font-[900] text-white leading-[0.85] tracking-extratighter mb-8">
                  Da visão inicial <br /> à <span className="text-[#C4550A] italic font-normal">consolidação.</span>
                </h2>
                <p className="text-white/50 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                  A trajetória da Akedah construída através de resultados concretos, tecnologia e dedicação comercial.
                </p>
              </motion.div>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Linha vertical conectando as etapas */}
              <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C4550A]/60 via-[#C4550A]/20 to-transparent" />

              <div className="space-y-20 md:space-y-0">
                {timelineSteps.map((step, idx) => (
                  <TimelineStep key={idx} step={step} idx={idx} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Significado de Akedah */}
        <section className="py-24 mb-16">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">O que significa <span className="text-[#C4550A]">Akedah</span>?</h2>
              <p className="text-white/60 text-xl leading-relaxed italic">
                "Akedah é um termo de origem hebraica que remete a entrega e compromisso absoluto. Para nós, representa o nível de dedicação que colocamos em cada estratégia comercial: não aceitamos nada menos que o resultado excepcional."
              </p>
            </div>
          </div>
        </section>

      </main>
      </div>

      <Footer />
    </div>
  );
};

export default About;
