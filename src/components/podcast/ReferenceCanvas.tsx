import { useState, useSyncExternalStore, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { AKEDAH_EMAIL } from "@/data/services";
import "./reference.css";

// Coordinates are measured on the approved 1672 × 941 artwork, never on a crop.
export type ArtRect = readonly [number, number, number, number];
export const artPosition = ([x, y, width, height]: ArtRect): CSSProperties => ({
  left: `${x / 1672 * 100}%`, top: `${y / 941 * 100}%`,
  width: `${width / 1672 * 100}%`, height: `${height / 941 * 100}%`,
});
const desktopQuery = "(min-width: 960px)";
function subscribe(callback: () => void) {
  const query = window.matchMedia(desktopQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
export function useReferenceDesktop() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(desktopQuery).matches, () => false);
}

export function ReferenceCanvas({ name, id, title, description, primary = false, eager = false, children }: {
  name: string; id?: string; title: string; description?: string;
  primary?: boolean; eager?: boolean; children?: ReactNode;
}) {
  const Heading = primary ? "h1" : "h2";
  return <section id={id} className={`ak-reference ak-reference-${name}`} aria-label={title}>
    <img className="ak-reference-image" src={`/akedah/${name}.png`} width={1672} height={941}
      alt="" loading={eager ? "eager" : "lazy"} decoding="async" />
    <div className="ak-visually-hidden"><Heading>{title}</Heading>{description && <p>{description}</p>}</div>
    {children}
  </section>;
}

export function ReferenceAction({ rect, label, href, onClick, className = "" }: {
  rect: ArtRect; label: string; href?: string; onClick?: () => void; className?: string;
}) {
  const props = { className: `ak-reference-action ${className}`, style: artPosition(rect), "aria-label": label };
  const text = <span className="ak-visually-hidden">{label}</span>;
  if (!href) return <button {...props} type="button" onClick={onClick}>{text}</button>;
  if (href.startsWith("/")) return <Link {...props} to={href}>{text}</Link>;
  return <a {...props} href={href} {...(href.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{text}</a>;
}

export function ReferenceContact({ page = false }: { page?: boolean }) {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Nome: ${data.get("name")}\nE-mail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${AKEDAH_EMAIL}?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return <ReferenceCanvas id="contato" name="contact" title="Vamos conversar?" primary={page} eager={page}
    description="Ideias, parcerias ou uma boa história. O próximo papo pode começar com você.">
    <form onSubmit={submit} className="ak-reference-form" aria-label="Contato por e-mail">
      <label className="ak-visually-hidden" htmlFor="ak-name">Nome</label>
      <input style={artPosition([968, 132, 581, 50])} id="ak-name" name="name" autoComplete="name" required maxLength={120} />
      <label className="ak-visually-hidden" htmlFor="ak-email">E-mail</label>
      <input style={artPosition([968, 239, 581, 48])} id="ak-email" name="email" type="email" autoComplete="email" required maxLength={200} />
      <label className="ak-visually-hidden" htmlFor="ak-subject">Assunto</label>
      <input style={artPosition([968, 345, 581, 48])} id="ak-subject" name="subject" required maxLength={180} />
      <label className="ak-visually-hidden" htmlFor="ak-message">Mensagem</label>
      <textarea style={artPosition([968, 452, 581, 154])} id="ak-message" name="message" required maxLength={4000} />
      <button style={artPosition([954, 635, 607, 72])} className="ak-reference-action" type="submit" aria-describedby="ak-send-help">
        <span className="ak-visually-hidden">Enviar mensagem</span>
      </button>
      <p id="ak-send-help" className={`ak-reference-help ${prepared ? "is-prepared" : ""}`} role={prepared ? "status" : undefined}>
        {prepared ? "Mensagem preparada. Conclua o envio no seu aplicativo de e-mail." : "Abre seu aplicativo de e-mail para concluir o envio."}
      </p>
    </form>
    <ReferenceAction rect={[99, 809, 322, 119]} label="Akedah Podcast — início" href="/podcast" />
    <ReferenceAction rect={[1378, 837, 66, 62]} label="Instagram do Akedah" href="https://www.instagram.com/estudioakedah" />
    <ReferenceAction rect={[1480, 839, 79, 57]} label="YouTube do Akedah" href="https://www.youtube.com/@EstudioAkedah" />
  </ReferenceCanvas>;
}
