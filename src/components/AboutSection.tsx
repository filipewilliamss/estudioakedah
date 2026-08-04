import { motion } from "framer-motion";
import founderPicture from "@/assets/akedah-founder.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative section-padding overflow-hidden bg-[#070807] border-t border-white/[0.05]">
      {/* Subtle background element */}
      <div className="absolute right-[-10%] top-[20%] w-[40%] aspect-square bg-[#C4550A]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      {/* Monumental background word */}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-6 md:-left-10 top-[8%] font-display font-[900] text-white/[0.025] leading-none tracking-extratight pointer-events-none select-none"
        style={{ fontSize: "clamp(100px, 18vw, 280px)" }}
      >
        sobre
      </motion.span>

      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Header */}
          <div className="lg:col-span-12 mb-8 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">
                  Sobre a Akedah
                </span>
              </div>
              <h2 className="font-display text-[48px] md:text-[84px] font-[900] text-white leading-[0.84] tracking-[-0.05em] max-w-5xl">
                Antes do marketing, um{" "}
                <span className="text-[#C4550A] italic font-normal">processo comercial.</span>
              </h2>
            </motion.div>
          </div>

          {/* Left: Founder */}
          <div className="lg:col-span-5 relative group">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] overflow-hidden lg:grayscale lg:hover:grayscale-0 transition-all duration-1000 ease-in-out border border-white/5"
            >
              <img
                src={founderPicture}
                alt="Daniel Silva, fundador da Akedah"
                loading="lazy"
                width={900}
                height={1200}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
            </motion.div>

            <div className="absolute -bottom-6 -right-6 hidden md:block w-32 h-32 border-r border-b border-[#C4550A]/30" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <p className="font-display text-[12px] font-bold text-white tracking-[0.2em] uppercase">
                Daniel Silva
              </p>
              <p className="text-[#C4550A]/70 text-[10px] uppercase tracking-[0.1em] mt-1">
                Fundador da Akedah
              </p>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-white text-[18px] md:text-[22px] font-normal leading-relaxed text-balance">
                A Akedah é um estúdio de Soluções e Estratégias Comerciais, criado a partir de uma trajetória real
                dentro do comercial de empresas que precisavam crescer com método, não com sorte.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <p className="text-white/50 text-[15px] leading-relaxed">
                  Antes de criar a Akedah, Daniel Silva viveu de perto o dia a dia comercial de empresas que faturavam
                  bem, mas não tinham processo. Marketing era tratado como solução isolada, desconectado da estratégia
                  de vendas, e o resultado era investimento sem retorno claro. Foi dessa experiência prática que nasceu
                  o Método Akedah.
                </p>
                <p className="text-white/50 text-[15px] leading-relaxed">
                  Com o tempo, essa forma de trabalhar virou estúdio: um espaço físico em São Paulo com sala de
                  estratégia, planejamento e produção de conteúdo sob o mesmo teto. Hoje atendemos empresas
                  consolidadas, com faturamento entre R$ 200 mil e R$ 500 mil por mês, que já têm time comercial
                  formado e precisam escalar com estrutura.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] mt-4">
                {[
                  { title: "Sede própria", text: "São Paulo, SP — atendimento estruturado para todo o Brasil." },
                  { title: "Sala de estratégia", text: "Planejamento comercial antes de qualquer produção." },
                  { title: "Produção de conteúdo", text: "Estrutura própria para gravação de vídeos e conteúdo em lote." },
                  { title: "Equipe própria", text: "Estratégia, conteúdo e execução, sem terceirização." },
                ].map((item) => (
                  <div key={item.title} className="bg-[#070807] p-6">
                    <p className="font-display text-[13px] font-bold text-white uppercase tracking-[0.12em]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-white/40 text-[13.5px] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6 pt-8 border-t border-white/5"
            >
              {[
                { label: "anos de mercado em estratégia comercial.", value: "5+" },
                { label: "etapas no Método Akedah, do diagnóstico à autonomia.", value: "5" },
                { label: "visão comercial aplicada a cada entrega.", value: "360°" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-white font-[900] text-2xl tracking-tighter leading-none">{stat.value}</span>
                  <span className="text-[#C4550A]/70 text-[10px] uppercase tracking-[0.15em] mt-1.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
