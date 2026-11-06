import { useRef, useState } from "react";
import SEO from "@/components/SEO";
import { PodcastShell, Action, YOUTUBE, INSTAGRAM } from "./IllustratedSystem";
import { ReferenceCanvas, ReferenceAction, ReferenceContact, artPosition } from "./ReferenceCanvas";
import { agendaPodcastCards } from "@/data/podcast-agenda";

const features = [
  { id: "cortes", art: "clips", title: "Cortes do canal", description: "Grandes momentos. Direto ao ponto. Os trechos que merecem mais um play.", label: "Ver cortes no YouTube", href: YOUTUBE, rect: [40, 616, 596, 104] as const },
  { id: "em-poucas-palavras", art: "words", title: "Em poucas palavras.", description: "Quadro especial. Poucas palavras. Novas perspectivas.", label: "Assistir no YouTube", href: YOUTUBE, rect: [60, 545, 558, 95] as const },
  { id: "bastidores", art: "backstage", title: "Bastidores", description: "A conversa começa antes do play. Entre câmeras, ajustes e boas risadas.", label: "Ver bastidores no YouTube", href: YOUTUBE, rect: [44, 558, 603, 90] as const },
  { id: "patrocinadores", art: "sponsors", title: "Conheça nossos patrocinadores", description: "Descubra as marcas que fazem parte dessa conversa.", label: "Conhecer patrocinadores", href: "/podcast/patrocinadores", rect: [50, 524, 647, 108] as const },
];

export default function ReferencePodcast() {
  const [playing, setPlaying] = useState(false);
  const [agendaPage, setAgendaPage] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const agenda = agendaPodcastCards.flat();
  const pages = Math.ceil(agenda.length / 3);
  function showAgenda(page: number) {
    setAgendaPage(page);
    dialog.current?.showModal();
  }
  return <PodcastShell reference>
    <SEO title="Akedah Podcast | Boas conversas. Novas perspectivas." description="Histórias e ideias que conectam. Assista ao Akedah Podcast, acompanhe a agenda, os cortes e os bastidores." />
    <ReferenceCanvas id="hero" name="hero" title="Boas conversas. Novas perspectivas." description="Histórias e ideias que conectam." primary eager>
      <ReferenceAction rect={[77, 23, 379, 144]} label="Akedah Podcast — início" href="/podcast" />
      <nav aria-label="Navegação do podcast">
        <ReferenceAction rect={[778, 37, 151, 71]} label="Ao vivo" href="#destaque" />
        <ReferenceAction rect={[946, 37, 162, 71]} label="Agenda" href="#calendario" />
        <ReferenceAction rect={[1130, 37, 272, 71]} label="Patrocinadores" href="/podcast/patrocinadores" />
        <ReferenceAction rect={[1430, 37, 166, 71]} label="Contato" href="#contato" />
      </nav>
      <ReferenceAction rect={[97, 590, 351, 83]} label="Assistir ao vivo" href="#destaque" />
      <ReferenceAction rect={[466, 590, 289, 83]} label="Ver agenda" href="#calendario" />
      <ReferenceAction rect={[662, 831, 351, 90]} label="A conversa começa aqui" href="#destaque" />
    </ReferenceCanvas>
    <ReferenceCanvas id="destaque" name="player" title="Ao vivo, com você." description="Player do Akedah Podcast. A arte representa o formato ao vivo; a reprodução abre o episódio disponível com Daniel Silva.">
      <ReferenceAction rect={[32, 20, 379, 152]} label="Akedah Podcast — início" href="/podcast" />
      {playing ? <div className="ak-reference-video" style={artPosition([101, 281, 780, 479])}>
        <iframe src="https://www.youtube-nocookie.com/embed/nAcTWvqdc-E?autoplay=1&rel=0" title="Akedah Podcast — episódio com Daniel Silva"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <button className="ak-close-video" onClick={() => setPlaying(false)} aria-label="Fechar episódio">×</button>
      </div> : <ReferenceAction rect={[101, 281, 780, 479]} label="Reproduzir episódio com Daniel Silva" onClick={() => setPlaying(true)} className="ak-screen-action" />}
      <ReferenceAction rect={[1053, 668, 570, 82]} label="Instagram do convidado" href={INSTAGRAM} />
      <span className="ak-visually-hidden">Perfil ilustrativo. O convidado do episódio disponível é Daniel Silva.</span>
    </ReferenceCanvas>
    <ReferenceCanvas id="calendario" name="agenda" title="Marque esse encontro." description="As próximas conversas passam por aqui. Programação ilustrativa. Convidados e horários a confirmar.">
      <ReferenceAction rect={[59, 20, 331, 118]} label="Akedah Podcast — início" href="/podcast" />
      <ReferenceAction rect={[301, 734, 247, 54]} label="Ver detalhes — Novas perspectivas" onClick={() => showAgenda(0)} />
      <ReferenceAction rect={[826, 734, 242, 54]} label="Ver detalhes — Histórias que inspiram" onClick={() => showAgenda(1)} />
      <ReferenceAction rect={[1359, 734, 242, 54]} label="Ver detalhes — Conexões reais" onClick={() => showAgenda(2)} />
      <dialog ref={dialog} className="ak-reference-dialog" data-lenis-prevent aria-labelledby="ak-agenda-dialog-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <button className="ak-dialog-close" onClick={() => dialog.current?.close()} aria-label="Fechar programação">×</button>
        <h2 id="ak-agenda-dialog-title">Programação do estúdio</h2>
        <p>Registros ilustrativos do site. Confirme datas e convidados com a equipe.</p>
        <div className="ak-reference-agenda-list">
          {agenda.slice(agendaPage * 3, agendaPage * 3 + 3).map(guest => <article key={guest.episode}>
            <span>{guest.date} · {guest.time}</span><h3>{guest.guestName}</h3><p>{guest.topic}</p><p>{guest.episode}</p>
            <Action href={guest.link} dark>Ver episódio</Action>
          </article>)}
        </div>
        <nav className="ak-reference-pager" aria-label="Páginas da programação">
          <button onClick={() => setAgendaPage((agendaPage - 1 + pages) % pages)} aria-label="Convidados anteriores">←</button>
          <span aria-live="polite">{agendaPage + 1} / {pages}</span>
          <button onClick={() => setAgendaPage((agendaPage + 1) % pages)} aria-label="Próximos convidados">→</button>
        </nav>
      </dialog>
    </ReferenceCanvas>
    {features.map(feature => <ReferenceCanvas key={feature.id} id={feature.id} name={feature.art} title={feature.title} description={feature.description}>
      <ReferenceAction rect={feature.rect} label={feature.label} href={feature.href} />
      {feature.art === "clips" && <>
        <ReferenceAction rect={[882, 340, 96, 85]} label="Assistir aos cortes com a apresentadora" href={YOUTUBE} />
        <ReferenceAction rect={[1332, 320, 95, 88]} label="Assistir aos cortes com o apresentador" href={YOUTUBE} />
        <ReferenceAction rect={[1063, 637, 105, 100]} label="Assistir aos cortes do podcast" href={YOUTUBE} />
      </>}
      <ReferenceAction rect={feature.art === "sponsors" ? [67, 687, 389, 143] : feature.art === "words" ? [69, 727, 357, 138] : feature.art === "clips" ? [102, 775, 375, 142] : [61, 739, 398, 153]} label="Akedah Podcast — início" href="/podcast" />
    </ReferenceCanvas>)}
    <ReferenceContact />
  </PodcastShell>;
}
