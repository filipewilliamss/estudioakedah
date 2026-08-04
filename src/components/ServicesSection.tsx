import { motion } from "framer-motion";

const ServicesSection = () => {
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

  return (
    <section id="servicos" className="relative section-padding bg-[#070807] overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-white/[0.05] via-white/[0.1] to-transparent pointer-events-none" />
      
      <div className="container-editorial relative z-10">
        <div className="mb-24 lg:mb-40 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em] mb-8">
              Diagnóstico
            </span>
            <h2 className="font-display text-[52px] md:text-[88px] font-[900] text-white leading-[0.82] tracking-[-0.05em] mb-12">
              Onde a operação{" "}
              <span className="text-[#C4550A] italic font-normal">trava.</span>
            </h2>
            <p className="text-white text-[20px] md:text-[26px] leading-snug font-medium max-w-2xl mx-auto">
              Muitas empresas não precisam de mais marketing, precisam entender por que o esforço que já fazem ainda não se transforma em crescimento previsível.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Path Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/[0.05] -translate-x-1/2 hidden md:block" />

          <div className="space-y-24 md:space-y-40">
            {diagnosticItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Visual Connector Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C4550A] shadow-[0_0_15px_rgba(196,85,10,0.5)] z-20" />

                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20 md:text-left"} pl-12 md:pl-0`}>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.1 }}
                    className="block font-display text-[60px] md:text-[100px] font-black leading-none mb-4 md:mb-0 text-white"
                  >
                    0{idx + 1}
                  </motion.span>
                  <h3 className="font-display text-[28px] md:text-[42px] font-[900] text-white leading-[1.1] tracking-[-0.03em] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-md ml-auto mr-auto md:ml-0 md:mr-0">
                    {item.description}
                  </p>
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
          
          {/* Final story closure or path end */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="inline-block px-8 py-4 border border-[#C4550A]/30 bg-[#C4550A]/5 text-[#C4550A] font-bold text-[13px] uppercase tracking-[0.2em] rounded-full">
              Sua jornada começa aqui
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
