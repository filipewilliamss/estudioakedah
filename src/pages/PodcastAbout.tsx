import SEO from "@/components/SEO";
import {
  PodcastShell,
  Art,
  Action,
  Wave,
} from "@/components/podcast/IllustratedSystem";
import { ArrowRight } from "lucide-react";
const steps = [
  [
    "O primeiro episódio",
    "O Akedah Podcast nasce com o propósito de levar conversas comerciais sem rodeios para o ecossistema empresarial.",
  ],
  [
    "Evolução técnica & 4K",
    "Implementação de setup multicâmera 4K HDR, microfones Shure SM7B broadcast e acústica de isolamento profissional.",
  ],
  [
    "Grandes líderes",
    "Entrevistas com executivos, empresários e especialistas que geram resultados concretos no mercado.",
  ],
  [
    "Ecossistema de cortes",
    "Produção de cortes verticais para YouTube, Instagram, TikTok e Spotify.",
  ],
  [
    "Autoridade consolidada",
    "Uma trajetória de gravações transformando conhecimento em autoridade e novos negócios para convidados e marcas.",
  ],
];
export default function PodcastAbout() {
  return (
    <PodcastShell>
      <SEO
        title="Nossa história | Akedah Podcast"
        description="Conheça a história, o estúdio e a apresentação do Akedah Podcast."
      />
      <section className="ak-page-hero ak-dark">
        <div>
          <span className="ak-tag">Akedah Podcast</span>
          <h1>Nossa história.</h1>
          <p>
            Um encontro de histórias, ideias e novas perspectivas. Conversas
            profundas com grandes realizadores, em um espaço feito para ouvir e
            compartilhar.
          </p>
          <div className="ak-actions">
            <Action href="/podcast#destaque">
              Conhecer os episódios <ArrowRight />
            </Action>
          </div>
        </div>
        <Art
          name="hero"
          box="805 130 867 685"
          label="Apresentadores do Akedah Podcast"
        />
        <Wave />
      </section>
      <section className="ak-section">
        <div className="ak-about-grid">
          <div>
            <span className="ak-tag">Infraestrutura de gravação</span>
            <h2 style={{ marginTop: 20 }}>Estrutura do podcast.</h2>
            <p>
              Nossa mesa de gravação conta com microfones Shure SM7B broadcast
              com processamento dinâmico em tempo real, garantindo voz limpa,
              encorpada e presença para o ouvinte.
            </p>
            <p>
              Sistema multicâmera 4K HDR, iluminação cinematográfica sob medida
              e ilhas dedicadas à extração de cortes para redes sociais.
            </p>
          </div>
          <Art
            name="backstage"
            box="825 0 847 941"
            label="Bastidores ilustrados do estúdio"
          />
        </div>
        <div className="ak-specs">
          {[
            ["Shure SM7B", "Áudio broadcast"],
            ["4K HDR", "Multicâmera"],
            ["Cortes ágeis", "Reels & Shorts"],
            ["Ao vivo", "Transmissão"],
          ].map(([title, text]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="ak-quote ak-dark">
        <h2>O que representa o podcast?</h2>
        <blockquote>
          “O Akedah Podcast é o ponto de encontro entre o campo de batalha
          empresarial e a autoridade em vídeo. Aqui não há teorias vazias:
          apenas quem vive o negócio e entrega valor real.”
        </blockquote>
      </section>
      <section id="linha-do-tempo" className="ak-section">
        <h2>
          Da primeira bancada
          <br />à grande audiência.
        </h2>
        <div className="ak-timeline">
          {steps.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="ak-section ak-about-grid">
        <Art
          name="player"
          box="1084 337 230 252"
          label="Daniel Silva, apresentador do Akedah"
        />
        <div>
          <span className="ak-tag">Apresentação</span>
          <h2 style={{ marginTop: 20 }}>Daniel Silva.</h2>
          <p>
            Com vivência no centro das decisões comerciais e estratégicas de
            negócios, Daniel Silva conduz cada episódio extraindo insights
            práticos, desafios superados e metodologias que funcionam.
          </p>
          <p>
            Mais do que um podcast de entrevistas, um espaço de mentoria aberta
            para líderes que buscam escalar suas operações com clareza.
          </p>
          <div className="ak-actions">
            <Action href="/daniel-silva">
              Conhecer Daniel <ArrowRight />
            </Action>
          </div>
        </div>
      </section>
    </PodcastShell>
  );
}
