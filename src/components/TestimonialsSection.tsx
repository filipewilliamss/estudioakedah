import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marques Academy",
    role: "Direção · Educação",
    text: "Antes da Akedah eu tinha faturamento mas não sabia para onde ia o dinheiro. Após a consultoria, a margem aumentou de forma consistente.",
    featured: true,
  },
  {
    name: "MAP Accounting & Tax",
    role: "Diretoria · Contabilidade",
    text: "O social media deles gera leads reais. Nosso comercial recebe contatos quentes todo mês, não curtidas.",
    featured: false,
  },
  {
    name: "Heli Barbosa",
    role: "Proprietária · Joalheria",
    text: "Em um dia de gravação resolvo três meses de presença digital. Isso não tem preço pra quem tem a agenda cheia de atendimentos.",
    featured: false,
  },
];


const TestimonialsSection = () => {
  const featured = testimonials.find((t) => t.featured)!;
  const others = testimonials.filter((t) => !t.featured);

  return (
    <section className="section-padding border-t border-border">
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

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Featured testimonial — larger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="p-10 md:p-12 rounded-2xl border border-primary/20 bg-white/5 flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <svg className="w-10 h-10 text-primary/40 mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-foreground leading-relaxed text-lg md:text-xl mb-10">
                "{featured.text}"
              </p>
            </div>
            <div>
              <p className="font-display font-bold text-foreground text-lg">{featured.name}</p>
              <p className="text-sm text-muted-foreground">{featured.role}</p>
            </div>
          </motion.div>

          {/* Smaller testimonials stacked */}
          <div className="flex flex-col gap-8 md:gap-10">
            {others.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 rounded-2xl border border-border bg-white/5 flex-1 backdrop-blur-sm"
              >
                <svg className="w-7 h-7 text-primary/30 mb-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-secondary-foreground leading-relaxed text-base mb-6">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-display font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
