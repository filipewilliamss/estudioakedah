import { motion } from "framer-motion";
import { AKEDAH_EMAIL, WHATSAPP_URL } from "@/data/services";

const ContactSection = () => {
  return (
    <section
      id="contato"
      className="relative bg-transparent min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* High-Impact Visual Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C4550A]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute top-[20%] left-[-10%] w-[50%] aspect-square bg-[#C4550A]/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] aspect-square bg-[#C4550A]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="container-editorial relative z-10 w-full">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-6xl"
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">
                Próximo passo
              </span>
            </div>

            <h2 className="font-display text-[58px] md:text-[110px] lg:text-[148px] font-[900] leading-[0.8] tracking-[-0.055em] text-white mb-20">
              Marque a sua <br /> reunião com <br /> <span className="text-[#C4550A] italic font-normal">a Akedah.</span>
            </h2>

            <div className="flex flex-col items-center gap-12">
              <p className="font-display text-[19px] md:text-[24px] font-normal text-white/55 max-w-2xl leading-[1.5] text-balance">
                Marketing é ferramenta, não ponto de partida. Alinhamos estratégia comercial, posicionamento e
                comunicação para que cada ação execute um planejamento claro e financeiramente inteligente.
              </p>

              <div className="flex justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium px-16"
                >
                  Marcar uma reunião
                </a>
              </div>

              <p className="text-white/30 text-[12px] uppercase tracking-[0.2em]">
                30 min. Sem taxa. Sem compromisso.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
