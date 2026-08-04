import { Link } from "react-router-dom";
import akedahLogo from "@/assets/akedah-logo.png";
import { services, AKEDAH_EMAIL, WHATSAPP_URL } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-transparent py-20 px-6 border-t border-white/5">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">

          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block transition-transform hover:scale-105 duration-500">
              <img src={akedahLogo} alt="Akedah" className="h-8 w-auto" />
            </Link>
            <p className="mt-8 text-[14px] text-white/40 max-w-sm leading-relaxed">
              Estúdio Akedah de Soluções e Estratégias Comerciais para empresas consolidadas que querem crescer com
              inteligência.
            </p>
          </div>

          {/* Services Col */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.3em]">
              Soluções
            </h4>
            <ul className="flex flex-col gap-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/servicos/${service.slug}`}
                    className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/podcast"
                  className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                >
                  Akedah Podcast
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.3em]">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${AKEDAH_EMAIL}`}
                  className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                >
                  {AKEDAH_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/20 uppercase tracking-[0.2em]">
            © 2026 Akedah — Estúdio de Soluções Comerciais. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-white/10 uppercase tracking-[0.3em]">Atendendo em todo o Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
