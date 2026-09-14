import { Link, useLocation } from "react-router-dom";
import akedahLogo from "@/assets/akedah-logo.png";
import { services, AKEDAH_EMAIL, WHATSAPP_URL } from "@/data/services";

const PODCAST_LOGO = "https://wqxuprmlsapiucjxleih.supabase.co/storage/v1/object/public/files/9708035d-187a-4a8c-bdf4-3f7fce313c0b-Ativo_7.png";

interface FooterProps {
  isPodcastPage?: boolean;
}

const Footer = ({ isPodcastPage }: FooterProps) => {
  const location = useLocation();
  const isPodcast = isPodcastPage ?? location.pathname.startsWith("/podcast");

  return (
    <footer className={`${isPodcast ? "bg-[#160C08] border-t border-white/[0.08]" : "bg-black"} py-20 px-6 relative z-[20]`}>
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">

          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link 
              to={isPodcast ? "/podcast" : "/"} 
              className="inline-block transition-transform hover:scale-105 duration-300"
              aria-label={isPodcast ? "Akedah Podcast" : "Estúdio Akedah"}
            >
              <img 
                src={isPodcast ? PODCAST_LOGO : akedahLogo} 
                alt={isPodcast ? "Akedah Podcast" : "Akedah"} 
                className={isPodcast ? "h-[50px] md:h-[60px] w-auto object-contain" : "h-8 w-auto"} 
              />
            </Link>
            <p className="mt-6 text-[14px] text-white/50 max-w-sm leading-relaxed">
              {isPodcast
                ? "Akedah Podcast — O canal de autoridade executiva onde empresários e líderes do mercado debatem estratégia comercial, expansão de negócios e governança."
                : "Estúdio Akedah de Soluções e Estratégias Comerciais para empresas consolidadas que querem crescer com inteligência."}
            </p>
          </div>

          {/* Services / Navegação Col */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.3em] font-mono">
              {isPodcast ? "Podcast" : "Soluções"}
            </h4>
            <ul className="flex flex-col gap-4">
              {isPodcast ? (
                <>
                  <li>
                    <Link
                      to="/podcast/sobre"
                      className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                    >
                      Nossa história
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/podcast#destaque"
                      className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                    >
                      Último Episódio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/podcast#calendario"
                      className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                    >
                      Programação & Convidados
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/podcast#redes"
                      className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                    >
                      Plataformas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-[13px] text-[#C4550A] hover:text-white transition-colors duration-300 font-medium"
                    >
                      ← Estúdio Akedah
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/servicos/${service.slug}`}
                        className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                      >
                        {service.name.replace('\n', ' ')}
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
                </>
              )}
            </ul>
          </div>

          {/* Contact / Plataformas Col */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.3em] font-mono">
              {isPodcast ? "Canais & Contato" : "Contato"}
            </h4>
            <ul className="flex flex-col gap-4">
              {isPodcast ? (
                <>
                  <li>
                    <a
                      href="https://www.youtube.com/@EstudioAkedah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                    >
                      YouTube Oficial
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                    >
                      Spotify
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/estudioakedah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                    >
                      Instagram (@estudioakedah)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@estudioakedah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                    >
                      TikTok (@estudioakedah)
                    </a>
                  </li>
                  <li>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/50 hover:text-[#C4550A] transition-colors duration-300"
                    >
                      WhatsApp Comercial
                    </a>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-mono">
            {isPodcast
              ? "© 2026 Akedah Podcast — Todos os direitos reservados."
              : "© 2026 Akedah — Estúdio de Soluções Comerciais. Todos os direitos reservados."}
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-mono">
              {isPodcast ? "Canal Audiovisual do Estúdio Akedah" : "Atendendo em todo o Brasil"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
