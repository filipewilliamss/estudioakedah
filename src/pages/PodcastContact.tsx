import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import {
  PodcastShell,
  ContactSection,
  Action,
  YOUTUBE,
  INSTAGRAM,
} from "@/components/podcast/IllustratedSystem";
import { WHATSAPP_URL, AKEDAH_EMAIL } from "@/data/services";
import { useReferenceDesktop } from "@/components/podcast/ReferenceCanvas";
const channels = [
  {
    name: "Comercial & patrocínios",
    text: "Converse sobre parcerias, inserções publicitárias e formatos para sua marca.",
    href: `${WHATSAPP_URL}?text=${encodeURIComponent("Olá, tenho interesse em patrocinar o Akedah Podcast.")}`,
    cta: "Falar sobre patrocínio",
  },
  {
    name: "Pautas & convidados",
    text: "Tem uma história para compartilhar ou uma sugestão de convidado? Vamos conversar.",
    href: `${WHATSAPP_URL}?text=${encodeURIComponent("Olá, gostaria de sugerir uma pauta ou convidado para o Akedah Podcast.")}`,
    cta: "Sugerir convidado",
  },
  {
    name: "Mídia kit & propostas",
    text: AKEDAH_EMAIL,
    href: `mailto:${AKEDAH_EMAIL}?subject=Mídia%20Kit%20Akedah`,
    cta: "Solicitar mídia kit",
  },
  {
    name: "YouTube",
    text: "Episódios completos, cortes e transmissões do Akedah Podcast.",
    href: YOUTUBE,
    cta: "Acessar canal",
  },
  {
    name: "Instagram",
    text: "Bastidores, novidades do estúdio e os próximos encontros.",
    href: INSTAGRAM,
    cta: "Acessar perfil",
  },
  {
    name: "Spotify & áudio",
    text: "Encontre o Akedah Podcast na sua plataforma de áudio.",
    href: "https://open.spotify.com",
    cta: "Abrir Spotify",
  },
];
export default function PodcastContact() {
  const referenceDesktop = useReferenceDesktop();
  return (
    <PodcastShell reference={referenceDesktop}>
      <SEO
        title="Contato | Akedah Podcast"
        description="Entre em contato para sugerir pautas, participar do Akedah Podcast ou conversar sobre patrocínios."
      />
      <ContactSection page />
      <section className="ak-section">
        <div className="ak-contact-channels">
          {channels.map((item) => (
            <article className="ak-contact-channel" key={item.name}>
              <h2>{item.name}</h2>
              <p>{item.text}</p>
              <Action href={item.href} dark>
                {item.cta}
                <ArrowUpRight size={18} />
              </Action>
            </article>
          ))}
        </div>
        <div className="ak-address">
          <h2>Estúdio de gravação</h2>
          <p>
            São Paulo, SP. Setup multicâmera 4K HDR, iluminação cinematográfica
            e microfones broadcast.
          </p>
          <p>Gravações com agendamento prévio.</p>
        </div>
      </section>
    </PodcastShell>
  );
}
