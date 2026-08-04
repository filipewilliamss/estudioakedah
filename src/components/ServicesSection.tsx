import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative section-padding bg-[#070807] border-t border-white/[0.05] overflow-hidden">
      {/* Monumental backdrop word */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="absolute right-[-4%] top-[2%] md:top-[6%] font-display font-[900] text-white/[0.015] md:text-white/[0.025] leading-none tracking-extratight pointer-events-none select-none"
        style={{ fontSize: "clamp(100px, 18vw, 280px)" }}
      >
        soluções
      </motion.span>

      <div className="container-editorial relative z-10">
        <div className="mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">
                Soluções Comerciais
              </span>
            </div>
            <h2 className="font-display text-[52px] md:text-[88px] font-[900] text-white leading-[0.82] tracking-[-0.05em]">
              Escolha a frente que faz sentido para o seu{" "}
              <span className="text-[#C4550A] italic font-normal">momento.</span>
            </h2>
            <p className="mt-10 text-white/50 text-[16px] md:text-[18px] max-w-2xl leading-relaxed">
              Estratégia, conteúdo e aquisição para empresas que já têm operação comercial ativa. A Consultoria de
              Processos é a base de todos os serviços: ela não é vendida à parte, está embutida em cada contratação.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.08 }}
            >
              <Link
                to={`/servicos/${service.slug}`}
                className="group relative flex flex-col h-full border border-white/[0.08] p-9 md:p-12 hover:border-[#C4550A]/60 transition-colors duration-700 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#C4550A]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex items-start justify-between gap-6">
                  <span className="font-mono text-[11px] text-white/25 tracking-[0.3em]">{service.number}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-white/30 group-hover:text-[#C4550A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                    aria-hidden
                  >
                    <path
                      d="M5 15L15 5M15 5H7.5M15 5V12.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className="relative z-10 mt-8 font-display text-[32px] md:text-[46px] font-[900] text-white leading-[0.9] tracking-[-0.04em] group-hover:text-[#C4550A] transition-colors duration-500">
                  {service.name}
                </h3>

                <p className="relative z-10 mt-6 text-white/50 text-[15px] md:text-[16px] leading-relaxed">
                  {service.tagline}
                </p>

                <ul className="relative z-10 mt-10 pt-8 border-t border-white/[0.06] flex flex-col gap-3">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-[9px] w-1.5 h-1.5 flex-shrink-0 bg-[#C4550A]" />
                      <span className="text-white/40 text-[13.5px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <span className="relative z-10 mt-10 text-[11px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-white transition-colors duration-500">
                  Ver serviço
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
