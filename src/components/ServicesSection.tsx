import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const diagnosticItems = [
    {
      title: "Processos desorganizados",
      description: "Cada venda depende de improviso. Sem etapas claras, sem responsáveis, sem previsibilidade."
    },
    {
      title: "Falta de metas e métricas",
      description: "A operação roda no escuro. Sem número, não há gestão — há palpite."
    },
    {
      title: "Marketing desconectado das vendas",
      description: "Atração e conversão vivem em planetas diferentes. O comercial não vê o que a mídia produz."
    },
    {
      title: "Experiências ruins com fornecedores",
      description: "Agências que entregam relatório e resultado nenhum. Consultores que somem depois do slide."
    }
  ];

  // Faces setup
  const faces = [
    // Face 1: Intro
    {
      id: "intro",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
          <span className="text-[#C4550A] text-[14px] md:text-[18px] font-bold uppercase tracking-[0.4em] mb-4 md:mb-8">
            Diagnóstico
          </span>
          <h2 className="font-display text-[48px] md:text-[100px] font-[900] text-white leading-[0.9] tracking-[-0.05em]">
            Onde a operação <br />
            <span className="text-[#C4550A] italic font-normal">trava.</span>
          </h2>
        </div>
      )
    },
    // Face 2: Highlight Text
    {
      id: "highlight",
      content: (
        <div className="flex items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
          <p className="text-white text-[24px] md:text-[42px] leading-[1.2] font-medium tracking-tight">
            Muitas empresas não precisam de mais marketing, precisam entender por que o esforço que já fazem ainda não se transforma em crescimento previsível.
          </p>
        </div>
      )
    },
    // Faces 3-6: Items
    ...diagnosticItems.map((item, idx) => ({
      id: `item-${idx}`,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
          <span className="text-[#C4550A]/40 font-display text-[40px] md:text-[60px] font-black leading-none mb-4 md:mb-6">
            0{idx + 1}
          </span>
          <h3 className="font-display text-[32px] md:text-[64px] font-[900] text-white leading-[1.1] tracking-[-0.03em] mb-6 md:mb-8">
            {item.title}
          </h3>
          <p className="text-white/80 text-[18px] md:text-[28px] leading-relaxed font-light">
            {item.description}
          </p>
        </div>
      )
    }))
  ];

  return (
    <section 
      ref={sectionRef} 
      id="diagnostico" 
      className="relative h-[600vh] bg-transparent snap-y snap-mandatory"
    >
      <div className="absolute inset-0 pointer-events-none">
        {faces.map((_, i) => (
          <div key={i} className="h-screen w-full snap-start" />
        ))}
      </div>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {faces.map((face, index) => {
          const step = 1 / (faces.length - 1);
          
          // Slide effect: each face "pushes" the previous one
          // When progress is at (index * step), the face is centered (0%)
          // When progress moves towards ((index + 1) * step), it slides up to -100%
          // and the next face slides up from 100% to 0%
          const y = useTransform(
            smoothProgress,
            [(index - 1) * step, index * step, (index + 1) * step],
            ["100%", "0%", "-100%"]
          );
          
          const opacity = useTransform(
            smoothProgress,
            [(index - 0.8) * step, index * step, (index + 0.8) * step],
            [0, 1, 0]
          );

          const scale = useTransform(
            smoothProgress,
            [(index - 0.8) * step, index * step, (index + 0.8) * step],
            [0.95, 1, 0.95]
          );

          // Subtle parallax for internal content
          const contentY = useTransform(
            smoothProgress,
            [(index - 1) * step, index * step, (index + 1) * step],
            [50, 0, -50]
          );

          return (
            <motion.div
              key={face.id}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                y,
                opacity,
                scale,
                zIndex: faces.length - index,
              }}
            >
              <motion.div style={{ y: contentY }}>
                {face.content}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Ensure background is at the very bottom */}
        <div className="absolute inset-0 pointer-events-none bg-transparent -z-10" />
      </div>
    </section>
  );
};

export default ServicesSection;