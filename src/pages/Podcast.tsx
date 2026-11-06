import { useState } from "react";
import {
  Play,
  CalendarDays,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
  Clock,
  UserRound,
} from "lucide-react";
import SEO from "@/components/SEO";
import {
  PodcastShell,
  Action,
  Art,
  ContactSection,
  Wave,
  Soundwave,
  ScrollCue,
  YOUTUBE,
  INSTAGRAM,
} from "@/components/podcast/IllustratedSystem";
import { agendaPodcastCards } from "@/data/podcast-agenda";
import ReferencePodcast from "@/components/podcast/ReferencePodcast";
import { useReferenceDesktop } from "@/components/podcast/ReferenceCanvas";

const features = [
  {
    id: "cortes",
    art: "clips",
    box: "740 0 932 941",
    title: "Cortes do canal",
    subtitle: "Grandes momentos. Direto ao ponto.",
    text: "Os trechos que merecem mais um play.",
    button: "Ver cortes no YouTube",
    url: YOUTUBE,
    dark: false,
  },
  {
    id: "em-poucas-palavras",
    art: "words",
    box: "720 0 952 941",
    tag: "Quadro especial",
    title: "Em poucas palavras",
    text: "Poucas palavras. Novas perspectivas.",
    button: "Assistir no YouTube",
    url: YOUTUBE,
    dark: true,
  },
  {
    id: "bastidores",
    art: "backstage",
    box: "825 0 847 941",
    title: "Bastidores",
    subtitle: "A conversa começa antes do play.",
    text: "Entre câmeras, ajustes e boas risadas.",
    button: "Ver bastidores no YouTube",
    url: YOUTUBE,
    dark: false,
  },
  {
    id: "patrocinadores",
    art: "sponsors",
    box: "805 0 867 941",
    title: "Conheça nossos patrocinadores",
    text: "Descubra as marcas que fazem parte dessa conversa.",
    button: "Conhecer patrocinadores",
    url: "/podcast/patrocinadores",
    dark: true,
  },
];
export default function Podcast() {
  const referenceDesktop = useReferenceDesktop();
  return referenceDesktop ? <ReferencePodcast /> : <ResponsivePodcast />;
}

function ResponsivePodcast() {
  const [playing, setPlaying] = useState(false);
  const [agendaPage, setAgendaPage] = useState(0);
  const agenda = agendaPodcastCards.flat();
  const pages = Math.ceil(agenda.length / 3);
  return (
    <PodcastShell>
      <SEO
        title="Akedah Podcast | Boas conversas. Novas perspectivas."
        description="Histórias e ideias que conectam. Assista ao Akedah Podcast, acompanhe a agenda, os cortes e os bastidores."
      />
      <section id="hero" className="ak-hero ak-dark">
        <div className="ak-hero-copy">
          <h1>
            Boas conversas.
            <br />
            Novas
            <br />
            perspectivas.
          </h1>
          <p>Histórias e ideias que conectam.</p>
          <div className="ak-actions">
            <Action href="#destaque">
              <Play fill="currentColor" /> Assistir ao vivo
            </Action>
            <Action href="#calendario" outline>
              <CalendarDays /> Ver agenda
            </Action>
          </div>
        </div>
        <Art
          name="hero"
          box="805 130 867 685"
          className="ak-hero-art"
          eager
          label="Apresentadores ilustrados do Akedah Podcast em uma conversa entre ondas sonoras"
        />
        <Wave />
        <ScrollCue />
      </section>
      <section id="destaque" className="ak-section ak-episode">
        <div className="ak-section-heading">
          <h2>Ao vivo, com você.</h2>
          <span className="ak-tag">
            <Play size={16} /> Último episódio
          </span>
        </div>
        <div className="ak-player-grid">
          <div className="ak-tv">
            <div className="ak-tv-screen">
              {playing ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/nAcTWvqdc-E?autoplay=1&rel=0"
                  title="Akedah Podcast — episódio com Daniel Silva"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  aria-label="Reproduzir episódio com Daniel Silva"
                  className="ak-video-poster"
                >
                  <Art name="player" box="102 281 778 388" />
                  <span className="ak-play">
                    <Play fill="currentColor" />
                  </span>
                  <span className="ak-video-label">Assistir episódio</span>
                </button>
              )}
            </div>
            <div className="ak-tv-hardware" aria-hidden="true">
              <span />
              <i />
              <i />
              <i />
            </div>
            <div className="ak-tv-caption">
              <span>Akedah Podcast</span>
              <a
                href="https://www.youtube.com/watch?v=nAcTWvqdc-E"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no YouTube <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <aside className="ak-guest">
            <span className="ak-eyebrow">Neste episódio</span>
            <div className="ak-guest-info">
              <Art name="player" box="1084 337 230 252" className="ak-avatar" />
              <div>
                <h3>Daniel Silva</h3>
                <p>
                  Estrategista de negócios e mentor executivo. Uma conversa
                  sobre posicionamento, governança e construção de autoridade.
                </p>
              </div>
            </div>
            <Action href={INSTAGRAM}>
              <Instagram /> Redes do convidado <ArrowUpRight />
            </Action>
          </aside>
        </div>
        <Soundwave />
      </section>
      <section id="calendario" className="ak-section ak-agenda">
        <div className="ak-agenda-heading">
          <div>
            <span className="ak-tag">Agenda</span>
            <h2>
              Marque esse
              <br />
              encontro.
            </h2>
            <p>As próximas conversas passam por aqui.</p>
          </div>
          <Art
            name="agenda"
            box="785 0 887 475"
            label="Calendário ilustrado envolvido por fones e ondas sonoras"
          />
        </div>
        <div className="ak-agenda-controls">
          <p>Programação do estúdio</p>
          <div>
            <button
              aria-label="Convidados anteriores"
              onClick={() => setAgendaPage((agendaPage - 1 + pages) % pages)}
            >
              <ChevronLeft />
            </button>
            <span aria-live="polite">
              {agendaPage + 1} / {pages}
            </span>
            <button
              aria-label="Próximos convidados"
              onClick={() => setAgendaPage((agendaPage + 1) % pages)}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="ak-agenda-grid">
          {agenda
            .slice(agendaPage * 3, agendaPage * 3 + 3)
            .map((guest, index) => (
              <article className="ak-agenda-card" key={guest.episode}>
                <Art
                  name="agenda"
                  box={index % 2 === 0 ? "50 500 225 315" : "594 500 220 315"}
                  className="ak-agenda-portrait"
                />
                <div>
                  <span className="ak-tag">{guest.date}</span>
                  <h3>{guest.guestName}</h3>
                  <p className="ak-agenda-topic">{guest.topic}</p>
                  <p className="ak-meta">
                    <UserRound size={15} /> {guest.episode}
                  </p>
                  <p className="ak-meta">
                    <Clock size={15} /> {guest.time}
                  </p>
                  <Action href={guest.link} dark>
                    Ver detalhes <ArrowRight size={18} />
                  </Action>
                </div>
              </article>
            ))}
        </div>
        <p className="ak-schedule-note">
          Programação ilustrativa do site. Confirme datas e convidados com a
          equipe.
        </p>
        <Soundwave />
      </section>
      {features.map((feature) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`ak-feature ${feature.dark ? "ak-dark" : ""}`}
        >
          <div className="ak-feature-copy">
            {feature.tag && <span className="ak-tag">{feature.tag}</span>}
            <h2>{feature.title}</h2>
            {feature.subtitle && <h3>{feature.subtitle}</h3>}
            <p>{feature.text}</p>
            <Action href={feature.url} dark={!feature.dark}>
              {feature.url.startsWith("https") && <Youtube />}
              {feature.button}
              {feature.url.startsWith("/") ? <ArrowRight /> : <ArrowUpRight />}
            </Action>
          </div>
          <Art
            name={feature.art}
            box={feature.box}
            className="ak-feature-art"
            label={feature.title + " — ilustração original Akedah"}
          />
        </section>
      ))}
      <ContactSection />
    </PodcastShell>
  );
}
