import { useState } from "react";
import { ArrowRight, Instagram, Mail } from "lucide-react";
import SEO from "@/components/SEO";
import {
  PodcastShell,
  Action,
  Art,
  Wave,
} from "@/components/podcast/IllustratedSystem";
import { sponsorsData } from "@/data/podcast-sponsors";
import { WHATSAPP_URL, AKEDAH_EMAIL } from "@/data/services";
export default function PodcastSponsors() {
  const [active, setActive] = useState(0);
  const sponsor = sponsorsData[active];
  return (
    <PodcastShell>
      <SEO
        title="Patrocinadores | Akedah Podcast"
        description="Conheça as marcas que apoiam as conversas do Akedah Podcast e descubra como ser um patrocinador."
      />
      <section id="vitrine" className="ak-section ak-dark">
        <div className="ak-section-heading">
          <div>
            <span className="ak-tag">Patrocinadores</span>
            <h1 style={{ marginTop: 24 }}>
              Quem dá força
              <br />à conversa.
            </h1>
          </div>
          <Action href="#seja-patrocinador">
            Seja um patrocinador <ArrowRight />
          </Action>
        </div>
        <p style={{ marginBottom: 35, fontSize: 24 }}>
          Marcas que se conectam com boas histórias.
        </p>
        <div className="ak-sponsor-grid">
          {sponsorsData.map((item, i) => (
            <a
              className="ak-sponsor-tile"
              key={item.id}
              href="#detalhes"
              onClick={() => setActive(i)}
            >
              <img src={item.logo} alt={item.logoAlt} />
              <span>{item.titleLine1}</span>
            </a>
          ))}
          <a className="ak-sponsor-tile" href="#seja-patrocinador">
            <ArrowRight size={42} />
            <span>Sua marca pode estar aqui</span>
          </a>
        </div>
      </section>
      <section id="detalhes" className="ak-section">
        <nav className="ak-pager" aria-label="Selecionar patrocinador">
          {sponsorsData.map((item, i) => (
            <button
              key={item.id}
              aria-pressed={active === i}
              className="ak-pager-name"
              onClick={() => setActive(i)}
            >
              {item.titleLine1}
            </button>
          ))}
        </nav>
        <div className="ak-detail" aria-live="polite">
          <div className="ak-brand-board">
            <img src={sponsor.logo} alt={sponsor.logoAlt} />
          </div>
          <div>
            <span className="ak-tag">Parceiro Akedah</span>
            <h2 style={{ marginTop: 20 }}>{sponsor.titleLine1}</h2>
            <h3>{sponsor.titleLine2}</h3>
            <p>{sponsor.description}</p>
            <ul>
              {sponsor.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Action href={sponsor.instagramUrl}>
              <Instagram /> Conhecer a marca
            </Action>
          </div>
        </div>
      </section>
      <section id="seja-patrocinador" className="ak-page-hero ak-dark">
        <div>
          <span className="ak-tag">Faça parte</span>
          <h2>
            Sua marca.
            <br />
            Nossa conversa.
          </h2>
          <p style={{ marginTop: 25 }}>
            Conecte sua empresa ao Akedah Podcast. Conheça os formatos de
            patrocínio, as inserções e as possibilidades de parceria.
          </p>
          <div className="ak-actions">
            <Action
              href={`${WHATSAPP_URL}?text=${encodeURIComponent("Olá, tenho interesse em patrocinar o Akedah Podcast.")}`}
            >
              Falar sobre patrocínio <ArrowRight />
            </Action>
            <Action
              href={`mailto:${AKEDAH_EMAIL}?subject=Mídia%20Kit%20Akedah`}
              outline
            >
              <Mail /> Solicitar mídia kit
            </Action>
          </div>
        </div>
        <Art
          name="sponsors"
          box="805 0 867 941"
          label="Apresentadores do Akedah celebrando uma parceria"
        />
        <Wave />
      </section>
    </PodcastShell>
  );
}
