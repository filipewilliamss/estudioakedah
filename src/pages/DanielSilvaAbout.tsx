import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import founderPicture from "@/assets/akedah-founder.jpg";

// Marcos da Trajetória de Daniel Silva
const danielTimelineSteps = [
  {
    number: "01",
    title: "Origem Comercial",
    description: "Início no campo de batalha de vendas, vivenciando os gargalos práticos entre equipes de marketing e conversão final.",
  },
  {
    number: "02",
    title: "Desenvolvimento da Metodologia",
    description: "Criação de processos estruturados unindo inteligência de dados, cadência comercial e discurso persuasivo de alto valor.",
  },
  {
    number: "03",
    title: "Fundação do Estúdio Akedah",
    description: "Materialização de um ecossistema audiovisual e estratégico de padrão cinematográfico em São Paulo.",
  },
  {
    number: "04",
    title: "Mentorias & Advisory",
    description: "Expansão para mentorias executivas, direcionando empresários a escalarem operações com margem e previsibilidade.",
  },
  {
    number: "05",
    title: "Autoridade e Ecossistema",
    description: "Consolidação de uma marca pessoal que é referência nacional em estratégia comercial e produção audiovisual de alto impacto.",
  },
];

const DanielTimelineStep = ({ step, idx }: { step: typeof danielTimelineSteps[0]; idx: number }) => {
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
        <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 top-10 w-2.5 h-2.5 bg-white rounded-full z-10 shadow-[0_0_25px_rgba(255,255,255,0.9)]" />

        {/* Número Gigante em Parallax */}
        <motion.span
          style={{ y: smoothNumberY }}
          className={`absolute font-display text-[100px] sm:text-[150px] md:text-[280px] font-[800] text-white/[0.08] md:text-white/[0.1] leading-none pointer-events-none select-none z-0 ${
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
            className={`text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-md ${
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

const DanielSilvaAbout = () => {
  return (
    <div className="min-h-screen bg-[#07132B] text-white selection:bg-white selection:text-[#07132B] relative">
      <SEO 
        title="Sobre Mim | Daniel Silva"
        description="Conheça a trajetória de Daniel Silva nos negócios, liderança, fé e música."
      />
      <Navbar isDanielSilvaPage={true} />

      <div className="relative z-10">
        <main className="pb-24">
          {/* 1. Hero Section (Card em Tela Inteira estilo Serviços com foto e texto à esquerda) */}
          <section className="relative min-h-[92vh] md:min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-transparent pt-28 pb-16">
            <div className="absolute inset-0 z-0">
              <img 
                src={founderPicture} 
                alt="Daniel Silva - Trajetória" 
                className="w-full h-full object-cover opacity-60 filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-[#07132B]/85 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-[#07132B]/50" />
            </div>

            <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex justify-start">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl text-left flex flex-col items-start"
              >
                <div className="flex items-center justify-start gap-4 mb-6">
                  <span className="text-white/80 border border-white/20 px-3 py-1 rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-bold">
                    Daniel Silva
                  </span>
                </div>

                <h1 className="font-display text-[54px] sm:text-[76px] md:text-[96px] font-[900] leading-[0.88] tracking-[-0.05em] mb-8">
                  <span className="block text-white">Sobre</span>
                  <span className="text-white/80 italic font-normal block">mim</span>
                </h1>

                <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl text-left">
                  A evolução de uma mentalidade forjada na prática comercial, liderança fundamentada em princípios e paixão pela música.
                </p>
              </motion.div>
            </div>
          </section>

          {/* 2. Descrição da Estrutura & Metodologia */}
          <section className="container-editorial py-20 mb-28 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl space-y-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em]">
                  Pilares de Atuação
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Estrutura & Metodologia
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70 text-base md:text-lg leading-relaxed">
                <p>
                  A metodologia de Daniel Silva une a precisão cirúrgica de dados comerciais com a autoridade estética do audiovisual contemporâneo. Sem espaço para achismos.
                </p>
                <p>
                  Cada projeto e mentoria é desenhado para transformar operações estagnadas em máquinas de tração previsível e clientes qualificados de alto ticket.
                </p>
              </div>

              {/* Destaques */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                <div className="p-4 bg-white/[0.04] border border-white/10 rounded-[10px]">
                  <p className="text-white font-bold text-lg mb-1">Diagnóstico</p>
                  <p className="text-white/50 text-[11px] uppercase tracking-wider font-semibold">Análise de Funil</p>
                </div>
                <div className="p-4 bg-white/[0.04] border border-white/10 rounded-[10px]">
                  <p className="text-white font-bold text-lg mb-1">Execução</p>
                  <p className="text-white/50 text-[11px] uppercase tracking-wider font-semibold">Playbook Comercial</p>
                </div>
                <div className="p-4 bg-white/[0.04] border border-white/10 rounded-[10px]">
                  <p className="text-white font-bold text-lg mb-1">Autoridade</p>
                  <p className="text-white/50 text-[11px] uppercase tracking-wider font-semibold">Presença em Vídeo</p>
                </div>
                <div className="p-4 bg-white/[0.04] border border-white/10 rounded-[10px]">
                  <p className="text-white font-bold text-lg mb-1">Escala</p>
                  <p className="text-white/50 text-[11px] uppercase tracking-wider font-semibold">Receita Previsível</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 3. Filosofia de Daniel Silva */}
          <section className="py-24 mb-20 border-t border-white/[0.05]">
            <div className="container-editorial">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">O que move a <span className="text-white/80">Marca</span>?</h2>
                <p className="text-white/70 text-xl leading-relaxed italic">
                  "O marketing traz o público, mas é a estratégia comercial que coloca o dinheiro no caixa. Nosso compromisso é alinhar posicionamento, produto e processo até a escala ser inevitável."
                </p>
              </div>
            </div>
          </section>

          {/* 4. Linha do Tempo da Trajetória */}
          <section id="linha-do-tempo" className="relative py-24 bg-transparent border-t border-white/[0.05] overflow-hidden mb-32">
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-6 md:-left-10 top-[5%] md:top-[8%] font-display font-[900] text-white/[0.03] leading-none tracking-extratight pointer-events-none select-none"
              style={{ fontSize: "clamp(80px, 15vw, 250px)" }}
            >
              trajetória
            </motion.span>

            <div className="container-editorial relative z-10">
              <div className="flex flex-col items-center text-center mb-32">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="inline-block text-white/70 border border-white/20 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.4em] mb-8">
                    Marcos Históricos
                  </span>
                  <h2 className="font-display text-[44px] md:text-[84px] font-[900] text-white leading-[0.85] tracking-extratighter mb-8">
                    Do campo de batalha <br /> à <span className="text-white/80 italic font-normal">liderança executiva.</span>
                  </h2>
                  <p className="text-white/60 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                    A trajetória construída com desafios reais, superação e foco inegociável em performance.
                  </p>
                </motion.div>
              </div>

              <div className="relative max-w-6xl mx-auto">
                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/60 via-white/20 to-transparent" />

                <div className="space-y-20 md:space-y-0">
                  {danielTimelineSteps.map((step, idx) => (
                    <DanielTimelineStep key={idx} step={step} idx={idx} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Biografia & Números */}
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
                  alt="Daniel Silva - Mentor e Fundador" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                A visão de <span className="text-white/80">Daniel Silva</span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                <p>
                  Com mais de 5 anos atuando na linha de frente de negociações estratégicas para empresas de diferentes portes, Daniel Silva especializou-se em conectar discurso comercial à esteira de entrega.
                </p>
                <p>
                  Como fundador do Estúdio Akedah e host do Akedah Podcast, ele sintetiza a união entre inteligência de negócios e posicionamento audiovisual de elite.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-white font-bold text-4xl mb-1">5+ Anos</p>
                  <p className="text-white/50 text-[11px] uppercase tracking-widest font-bold">Experiência Comercial</p>
                </div>
                <div>
                  <p className="text-white font-bold text-4xl mb-1">Multi-setor</p>
                  <p className="text-white/50 text-[11px] uppercase tracking-widest font-bold">B2B e Serviços</p>
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

export default DanielSilvaAbout;
