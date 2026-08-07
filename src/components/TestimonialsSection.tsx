import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonialGroups = [
  [
    {
      name: "Marques Academy",
      role: "Direção · Educação",
      text: "Antes da Akedah eu tinha faturamento mas não sabia para onde ia o dinheiro. Após a consultoria, a margem aumentou de forma consistente.",
    },
    {
      name: "MAP Accounting & Tax",
      role: "Diretoria · Contabilidade",
      text: "O social media deles gera leads reais. Nosso comercial recebe contatos quentes todo mês, não curtidas.",
    },
    {
      name: "Heli Barbosa",
      role: "Proprietária · Joalheria",
      text: "Em um dia de gravação resolvo três meses de presença digital. Isso não tem preço pra quem tem a agenda cheia de atendimentos.",
    },
  ],
  [
    {
      name: "Studio X",
      role: "CEO · Arquitetura",
      text: "A clareza que o processo da Akedah trouxe para o nosso posicionamento foi o divisor de águas que precisávamos para atrair clientes de alto padrão.",
    },
    {
      name: "Dr. Roberto Silva",
      role: "Fundador · Saúde",
      text: "Nossa operação de vídeos agora é profissional. O que antes levava dias agora resolvemos em poucas horas com uma qualidade absurda.",
    },
    {
      name: "E-commerce Pro",
      role: "Marketing · Vendas",
      text: "A gestão de tráfego focada em conversão real mudou nosso jogo. Finalmente paramos de queimar dinheiro e começamos a escalar.",
    },
  ],
  [
    {
      name: "Tech Solutions",
      role: "Sócio · Tecnologia",
      text: "Implementar o método Akedah foi como dar um reset na nossa comunicação. Hoje somos vistos como autoridade no mercado.",
    },
    {
      name: "Ana Costa",
      role: "Diretora · Moda",
      text: "Os treinamentos in-company transformaram minha equipe. Todos agora falam a mesma língua e o resultado aparece nas métricas.",
    },
    {
      name: "Podcast Lab",
      role: "Produtor · Mídia",
      text: "A consultoria de sonoplastia elevou o nível do nosso podcast. A audiência notou a diferença na primeira semana.",
    },
  ],
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialGroups.length);
    }, 6000); // 6 segundos (5s de visualização + 1s de transição)
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding overflow-hidden relative">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Depoimentos</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-[900]">
            Clientes que viraram resultados reais.
          </h2>
        </motion.div>

        <div className="relative min-h-[550px] md:min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonialGroups[currentIndex].map((t, i) => (
                <motion.div
                  key={`${currentIndex}-${t.name}`}
                  variants={{
                    initial: { opacity: 0, x: 100 },
                    animate: { 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: i * 0.5,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1] 
                      } 
                    },
                    exit: { 
                      opacity: 0, 
                      x: -100,
                      transition: { 
                        delay: i * 0.1, 
                        duration: 0.5 
                      } 
                    }
                  }}
                  className={`p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col justify-between ${
                    currentIndex === 0 ? (i === 1 ? "md:translate-y-6" : i === 2 ? "md:-translate-y-4" : "") :
                    currentIndex === 1 ? (i === 0 ? "md:translate-y-4" : i === 2 ? "md:translate-y-8" : "") :
                    (i === 1 ? "md:-translate-y-6" : i === 0 ? "md:translate-y-2" : "")
                  }`}
                >
                  <div>
                    <svg className="w-8 h-8 text-primary/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-foreground leading-relaxed text-base mb-8 italic">
                      "{t.text}"
                    </p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-lg">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
