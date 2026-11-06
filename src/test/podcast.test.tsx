import { describe, it, expect, afterEach, vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  within,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Podcast from "@/pages/Podcast";
import PodcastSponsors from "@/pages/PodcastSponsors";
import PodcastContact from "@/pages/PodcastContact";
import PodcastAbout from "@/pages/PodcastAbout";
import type { ReactElement } from "react";
function mount(ui: ReactElement) {
  return render(
    <HelmetProvider>
      <MemoryRouter>{ui}</MemoryRouter>
    </HelmetProvider>,
  );
}
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

function desktopViewport() {
  const original = window.matchMedia;
  vi.spyOn(window, "matchMedia").mockImplementation(query => ({
    ...original(query), matches: query === "(min-width: 960px)",
  }));
}

describe("Approved reference compositions on desktop", () => {
  it("uses all eight complete artworks in order without adding a separate header", () => {
    desktopViewport();
    const { container } = mount(<Podcast />);
    expect(container.querySelector(".ak-header")).toBeNull();
    const images = [...container.querySelectorAll("main > section > .ak-reference-image")];
    expect(images.map(image => image.getAttribute("src"))).toEqual([
      "/akedah/hero.png", "/akedah/player.png", "/akedah/agenda.png", "/akedah/clips.png",
      "/akedah/words.png", "/akedah/backstage.png", "/akedah/sponsors.png", "/akedah/contact.png",
    ]);
    for (const image of images) {
      expect(image).toHaveAttribute("width", "1672");
      expect(image).toHaveAttribute("height", "941");
    }
    expect(screen.getByRole("link", { name: "Ver agenda" })).toHaveAttribute("href", "#calendario");
    expect(screen.getByRole("link", { name: "Conhecer patrocinadores" })).toHaveAttribute("href", "/podcast/patrocinadores");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Boas conversas. Novas perspectivas.");
  });
  it("opens and closes the real player inside the illustrated television", () => {
    desktopViewport();
    const { container } = mount(<Podcast />);
    expect(container.querySelector("iframe")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Reproduzir episódio com Daniel Silva" }));
    expect(screen.getByTitle("Akedah Podcast — episódio com Daniel Silva")).toHaveAttribute("src", expect.stringContaining("/embed/nAcTWvqdc-E"));
    fireEvent.click(screen.getByRole("button", { name: "Fechar episódio" }));
    expect(container.querySelector("iframe")).toBeNull();
  });
  it("keeps the existing agenda available from the illustrated detail buttons", () => {
    desktopViewport();
    const { container } = mount(<Podcast />);
    const dialog = container.querySelector("dialog")!;
    dialog.showModal = vi.fn(() => dialog.setAttribute("open", ""));
    dialog.close = vi.fn(() => dialog.removeAttribute("open"));
    fireEvent.click(screen.getByRole("button", { name: "Ver detalhes — Novas perspectivas" }));
    expect(dialog.showModal).toHaveBeenCalledOnce();
    const agenda = within(dialog);
    expect(agenda.getByRole("heading", { name: "DANIEL SILVA" })).toBeInTheDocument();
    fireEvent.click(agenda.getByRole("button", { name: "Próximos convidados" }));
    expect(agenda.getByRole("heading", { name: "MARIANA BITTENCOURT" })).toBeInTheDocument();
    fireEvent.click(agenda.getByRole("button", { name: "Fechar programação" }));
    expect(dialog).not.toHaveAttribute("open");
  });
  it("uses real labeled fields within the original contact composition", () => {
    desktopViewport();
    const { container } = mount(<PodcastContact />);
    expect(container.querySelector(".ak-reference-contact > img")).toHaveAttribute("src", "/akedah/contact.png");
    fireEvent.change(screen.getByLabelText("Nome"), { target: { value: "Filipe" } });
    expect(screen.getByLabelText("Nome")).toHaveValue("Filipe");
    expect(screen.getByLabelText("E-mail")).toHaveAttribute("type", "email");
    expect(screen.getByLabelText("Assunto")).toBeRequired();
    expect(screen.getByLabelText("Mensagem")).toBeRequired();
    expect(screen.getByRole("button", { name: "Enviar mensagem" })).toHaveAttribute("aria-describedby", "ak-send-help");
  });
  it("uses the sponsor reference and retains sponsor selection below it", () => {
    desktopViewport();
    const { container } = mount(<PodcastSponsors />);
    expect(container.querySelector(".ak-reference-sponsors > img")).toHaveAttribute("src", "/akedah/sponsors.png");
    expect(screen.getByRole("link", { name: "Conhecer patrocinadores" })).toHaveAttribute("href", "#marcas");
    fireEvent.click(screen.getByRole("button", { name: "FE-CAR Multimarcas" }));
    expect(screen.getByRole("link", { name: "Conhecer a marca" })).toHaveAttribute("href", "https://www.instagram.com/fecarmultimarcas");
  });
});
describe("Akedah illustrated website", () => {
  it("retains the established homepage section sequence and destinations", () => {
    const { container } = mount(<Podcast />);
    expect(
      Array.from(container.querySelectorAll("main > section")).map((s) => s.id),
    ).toEqual([
      "hero",
      "destaque",
      "calendario",
      "cortes",
      "em-poucas-palavras",
      "bastidores",
      "patrocinadores",
      "contato",
    ]);
    expect(
      screen.getByRole("link", { name: /Ver bastidores no YouTube/ }),
    ).toHaveAttribute("href", "https://www.youtube.com/@EstudioAkedah");
    expect(
      screen.getByRole("link", { name: /Conhecer patrocinadores/ }),
    ).toHaveAttribute("href", "/podcast/patrocinadores");
  });
  it("loads the original episode only after the play action", () => {
    const { container } = mount(<Podcast />);
    expect(container.querySelector("iframe")).toBeNull();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Reproduzir episódio com Daniel Silva",
      }),
    );
    expect(
      screen.getByTitle("Akedah Podcast — episódio com Daniel Silva"),
    ).toHaveAttribute("src", expect.stringContaining("/embed/nAcTWvqdc-E"));
  });
  it("lets visitors move forward and backward through the preserved agenda", () => {
    const { container } = mount(<Podcast />);
    const agenda = within(
      container.querySelector("#calendario") as HTMLElement,
    );
    expect(
      agenda.getByRole("heading", { name: "DANIEL SILVA" }),
    ).toBeInTheDocument();
    fireEvent.click(
      agenda.getByRole("button", { name: "Próximos convidados" }),
    );
    expect(
      agenda.getByRole("heading", { name: "MARIANA BITTENCOURT" }),
    ).toBeInTheDocument();
    fireEvent.click(
      agenda.getByRole("button", { name: "Convidados anteriores" }),
    );
    expect(
      agenda.getByRole("heading", { name: "DANIEL SILVA" }),
    ).toBeInTheDocument();
  });
  it("opens the menu and closes it with Escape", () => {
    mount(<Podcast />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir menu" }));
    expect(screen.getByRole("button", { name: "Fechar menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Abrir menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
  it("selects an existing sponsor and preserves its external destination", () => {
    mount(<PodcastSponsors />);
    fireEvent.click(screen.getByRole("button", { name: "FE-CAR Multimarcas" }));
    expect(
      screen.getByRole("heading", { name: "FE-CAR Multimarcas" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Conhecer a marca" }),
    ).toHaveAttribute("href", "https://www.instagram.com/fecarmultimarcas");
  });
  it("provides labeled required contact fields and an honest email handoff", () => {
    mount(<PodcastContact />);
    expect(screen.getByLabelText("Nome")).toBeRequired();
    expect(screen.getByLabelText("E-mail")).toHaveAttribute("type", "email");
    expect(screen.getByLabelText("Assunto")).toBeRequired();
    expect(screen.getByLabelText("Mensagem")).toBeRequired();
    expect(
      screen.getByText("Abre seu aplicativo de e-mail para concluir o envio."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Prefere conversar pelo WhatsApp?" }),
    ).toHaveAttribute("href", "https://wa.me/5511991076096");
  });
  it("retains the story, infrastructure, timeline and host page content", () => {
    mount(<PodcastAbout />);
    expect(
      screen.getByRole("heading", { name: "Nossa história." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Estrutura do podcast." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "O primeiro episódio" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Conhecer Daniel" }),
    ).toHaveAttribute("href", "/daniel-silva");
  });
});
