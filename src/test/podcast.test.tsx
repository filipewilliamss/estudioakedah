import { describe, it, expect, afterEach } from "vitest";
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
afterEach(cleanup);
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
