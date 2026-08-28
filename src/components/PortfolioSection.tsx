import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { services, type AkedahService } from "@/data/services";

const PortfolioSection = () => {
  return (
    <div id="portfolio" className="relative z-20 bg-transparent">
      {services.map((service, index) => (
        <ServiceShowcase key={service.id} service={service} index={index} total={services.length} />
      ))}
    </div>
  );
};

const ServiceShowcase = ({
  service,
  index,
  total,
}: {
  service: AkedahService;
  index: number;
  total: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1, 1.18]);
  const bgScale = useSpring(rawScale, { stiffness: 60, damping: 25 });

  return (
    <article
      ref={cardRef}
      className="relative min-h-[100dvh] w-full flex items-center overflow-hidden snap-start bg-transparent"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={service.image}
          alt={`${service.name} — Estúdio Akedah`}
          loading="lazy"
          width={1600}
          height={900}
          style={{ scale: bgScale }}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101010] via-[#101010]/85 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-32 flex justify-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-left flex flex-col items-start"
        >
          <div className="flex items-center justify-start gap-4 mb-8">
            <span className="font-mono text-[10px] text-white/40 tracking-[0.3em]">{service.number}</span>
            <span className="text-[#C4550A] text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-bold">
              Serviço Akedah
            </span>
          </div>

          <h3
            className="font-display font-[900] text-white leading-[0.86] tracking-[-0.05em] whitespace-pre-line"
            style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
          >
            {service.name}
          </h3>

          <p className="mt-8 text-white/70 text-[16px] md:text-[19px] leading-[1.6] max-w-xl text-left">{service.tagline}</p>

          <ul className="mt-10 flex flex-col items-start gap-3">
            {service.highlights.slice(0, 4).map((item) => (
              <li key={item} className="flex items-center gap-4 text-left">
                <span className="w-1.5 h-1.5 flex-shrink-0 bg-[#C4550A]" />
                <span className="text-white/60 text-[14px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex justify-start">
            <Link
              to={`/servicos/${service.slug}`}
              className="group inline-flex items-center justify-center px-10 py-5 bg-[#C4550A] text-white border border-[#C4550A] hover:bg-black hover:text-[#C4550A] hover:border-[#C4550A] transition-all duration-300 rounded-[15px]"
            >
              <span className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-bold">
                Ver serviço completo
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                className="ml-4 text-current translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                aria-hidden
              >
                <path
                  d="M4.16663 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="absolute left-6 sm:left-10 lg:left-16 bottom-12 z-30 flex flex-col items-start gap-4">
        <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-white/30">
          Serviço {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`h-[2px] transition-all duration-700 ${
                i === index ? "w-12 bg-[#C4550A]" : "w-4 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default PortfolioSection;
