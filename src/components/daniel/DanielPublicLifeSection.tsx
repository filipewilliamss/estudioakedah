import React, { useState } from "react";
import { WHATSAPP_URL } from "@/data/services";
import { Instagram, Youtube, Linkedin, Radio, ArrowRight } from "lucide-react";

interface AgendaItem {
  data: string;
  hora: string;
  tipo: "Palestra" | "Ministração" | "Convenção" | "Imersão";
  titulo: string;
  local: string;
  cidade: string;
}

const agendaPublicaItems: AgendaItem[] = [
  { data: "18/09", hora: "19h30", tipo: "Palestra", titulo: "Convenção Nacional de Vendas B2B", local: "Centro de Convenções", cidade: "São Paulo, SP" },
  { data: "25/09", hora: "14h00", tipo: "Imersão", titulo: "Imersão Executiva: Escala & Governança", local: "Alphaville Business Hub", cidade: "Barueri, SP" },
  { data: "03/10", hora: "20h00", tipo: "Palestra", titulo: "Fórum de Liderança, Negócios & Princípios", local: "Auditório Master", cidade: "Belo Horizonte, MG" },
  { data: "12/10", hora: "19h00", tipo: "Ministração", titulo: "Noite de Louvor, Palavra & Propósito", local: "Igreja Central", cidade: "Curitiba, PR" },
  { data: "22/10", hora: "20h30", tipo: "Convenção", titulo: "Painel Fé & Negócios de Impacto", local: "Expo Rio", cidade: "Rio de Janeiro, RJ" },
  { data: "05/11", hora: "19h30", tipo: "Ministração", titulo: "Conferência Águas Profundas", local: "Templo da Fé", cidade: "Brasília, DF" },
];

const conteudosDigitais = [
  {
    canal: "YouTube",
    handle: "youtube.com/danielsilva",
    icon: Youtube,
    formato: "Masterclasses & Aulas",
    metrica: "43 mil inscritos",
    frequencia: "Semanal",
    descricao: "Aprofundamentos em estratégia comercial, discursos de alto ticket e bastidores de produções audiovisuais.",
    link: "https://youtube.com/danielsilva",
    cta: "Acessar youtube.com/danielsilva",
  },
  {
    canal: "Spotify & Apple Podcasts",
    handle: "Akedah Podcast",
    icon: Radio,
    formato: "Akedah Podcast",
    metrica: "Distribuição Global",
    frequencia: "Toda Quarta-feira",
    descricao: "Conversas com grandes líderes, fundadores e vozes influentes sobre negócios, família, fé e maturidade.",
    link: "/podcast",
    cta: "Ouvir no Spotify",
  },
  {
    canal: "Instagram",
    handle: "@danielsilva",
    icon: Instagram,
    formato: "Reflexões Diárias & Bastidores",
    metrica: "48 mil seguidores",
    frequencia: "Diário",
    descricao: "Recortes pontuais, reflexões sobre liderança, rotina e avisos de novos lançamentos.",
    link: "https://instagram.com/danielsilva",
    cta: "Seguir @danielsilva",
  },
  {
    canal: "LinkedIn",
    handle: "Daniel Silva",
    icon: Linkedin,
    formato: "Artigos & Articulação B2B",
    metrica: "20 mil conexões",
    frequencia: "Semanal",
    descricao: "Análises técnicas sobre vendas consultivas, liderança executiva e cultura corporativa baseada em princípios.",
    link: "https://linkedin.com/in/danielsilva",
    cta: "Conectar no LinkedIn",
  },
];

export const DanielPublicLifeSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const filteredAgenda = activeFilter === "Todos"
    ? agendaPublicaItems
    : agendaPublicaItems.filter((item) => item.tipo === activeFilter);

  return (
    <section id="agenda-publica" className="py-[112px] px-[24px] max-w-[1280px] mx-auto border-t border-white/[0.08] font-lato">
      {/* Cabeçalho da Seção Vida Pública */}
      <div className="mb-[80px] text-left">
        <div className="mb-[16px]">
          <span className="label">VIDA PÚBLICA</span>
        </div>
        <h2 className="display text-fluid-80 text-[var(--off-white)]">
          Onde encontrar e acompanhar <br />
          <span className="text-[var(--bege)] italic font-light lowercase font-serif">Daniel Silva</span>
        </h2>
        <p className="text-[var(--off-white)]/70 text-fluid-16 max-w-[68ch] mt-[16px] leading-relaxed font-normal font-lato">
          Compromissos presenciais e grade de publicações digitais organizados para você se conectar com a mensagem e o trabalho de Daniel.
        </p>
      </div>

      {/* =================================================================== */}
      {/* BLOCO 1: AGENDA PÚBLICA (4.3 - LISTA EDITORIAL ABERTA)               */}
      {/* =================================================================== */}
      <div className="mb-[112px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px] mb-[40px] pb-[24px] border-b border-[var(--neutra-2)]">
          <div>
            <div className="mb-[12px]">
              <span className="label">COMPROMISSOS OFICIAIS</span>
            </div>
            <h3 className="display text-fluid-44 text-[var(--off-white)]">
              Agenda Pública
            </h3>
          </div>

          {/* Filtros da Agenda Pública (3.3: pílula de filtro ativo permitida) */}
          <div className="flex flex-wrap gap-[8px]">
            {["Todos", "Palestra", "Ministração", "Convenção", "Imersão"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-[16px] py-[8px] rounded-full text-fluid-13 font-lato font-bold uppercase tracking-wider transition-all ${
                  activeFilter === cat
                    ? "bg-[var(--bege)] text-[var(--preto)] shadow-none"
                    : "bg-[var(--preto)] text-[var(--off-white)]/60 hover:text-[var(--off-white)] border border-[var(--neutra-3)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lista Editorial da Agenda: Linhas de largura total separadas por 1px em --neutra-2 */}
        {/* Zero cards, zero background, zero radius, zero sombra */}
        <div className="divide-y divide-[var(--neutra-2)] border-t border-b border-[var(--neutra-2)]">
          {filteredAgenda.map((item, idx) => (
            <div
              key={idx}
              className="py-[24px] sm:py-[28px] flex flex-col md:flex-row md:items-center justify-between gap-[16px] md:gap-[32px] group"
            >
              {/* Esquerda: Data em Barlow Condensed Black 900 (--text-44) em --bege */}
              <div className="flex items-center gap-[20px] md:w-[140px] shrink-0">
                <span className="display--condensed text-fluid-44 text-[var(--bege)] leading-none">
                  {item.data}
                </span>
                <span className="text-fluid-13 font-lato font-normal text-[var(--neutra-1)] md:hidden">
                  {item.hora}
                </span>
              </div>

              {/* Centro: Título do Evento em Lato Black (--text-28) em --off-white e Local/Hora */}
              <div className="flex-1 min-w-0 text-left">
                <h4 className="font-lato font-black text-fluid-28 text-[var(--off-white)] leading-snug group-hover:text-[var(--bege)] transition-colors">
                  {item.titulo}
                </h4>
                <p className="text-[var(--neutra-1)] text-fluid-13 font-lato font-normal mt-[4px] flex flex-wrap items-center gap-x-[8px]">
                  <span>📍 {item.local} • {item.cidade}</span>
                  <span className="hidden md:inline text-[var(--neutra-2)]">•</span>
                  <span className="hidden md:inline">{item.hora}</span>
                </p>
              </div>

              {/* Direita: Rótulo de Categoria .label e Ação Integrada */}
              <div className="flex items-center justify-between md:justify-end gap-[20px] shrink-0 pt-[8px] md:pt-0">
                <span className="label">
                  {item.tipo}
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] text-fluid-13 font-lato font-black text-[var(--bege)] hover:text-[var(--off-white)] transition-colors uppercase tracking-wider"
                >
                  Garantir Vaga <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =================================================================== */}
      {/* BLOCO 2: CONTEÚDO DIGITAL & AUDIÊNCIA OFICIAL (4.4)                  */}
      {/* =================================================================== */}
      <div>
        <div className="text-left mb-[48px]">
          <div className="mb-[12px]">
            <span className="label">ECOSSISTEMA ONLINE</span>
          </div>
          <h3 className="display text-fluid-44 text-[var(--off-white)]">
            Conteúdo Digital & Presença
          </h3>
          <p className="text-[var(--off-white)]/70 text-fluid-16 font-lato font-normal mt-[8px] max-w-[68ch]">
            Acompanhe reflexões, episódios em áudio/vídeo e análises semanais nas plataformas digitais oficiais.
          </p>
        </div>

        {/* 4.4 Barra Editorial de Audiência Auditada (Mídia Kit Oficial) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] mb-[56px] py-[28px] border-y border-[var(--neutra-2)] text-left">
          <div>
            <span className="display--condensed text-fluid-44 text-[var(--bege)] leading-none block">364 mil</span>
            <span className="text-[var(--off-white)]/70 text-fluid-13 font-lato uppercase tracking-wider block mt-[6px]">
              Alcance Mensal
            </span>
          </div>
          <div>
            <span className="display--condensed text-fluid-44 text-[var(--bege)] leading-none block">4,8%</span>
            <span className="text-[var(--off-white)]/70 text-fluid-13 font-lato uppercase tracking-wider block mt-[6px]">
              Engajamento Médio
            </span>
          </div>
          <div>
            <span className="display--condensed text-fluid-44 text-[var(--bege)] leading-none block">62% • 38%</span>
            <span className="text-[var(--off-white)]/70 text-fluid-13 font-lato uppercase tracking-wider block mt-[6px]">
              Homens • Mulheres (25–44 anos)
            </span>
          </div>
          <div>
            <span className="display--condensed text-fluid-44 text-[var(--bege)] leading-none block">110 mil+</span>
            <span className="text-[var(--off-white)]/70 text-fluid-13 font-lato uppercase tracking-wider block mt-[6px]">
              Audiência Integrada
            </span>
          </div>
        </div>

        {/* Grade de Canais Digitais Oficiais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] text-left">
          {conteudosDigitais.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-[32px] bg-[var(--preto)] border border-[var(--neutra-3)] hover:border-[var(--bege)]/50 flex flex-col justify-between space-y-[24px] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="flex items-center gap-[12px]">
                      <div className="p-[10px] bg-[var(--neutra-4)] text-[var(--bege)]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-lato text-fluid-20 font-black text-[var(--off-white)]">{item.canal}</h4>
                        <span className="text-[var(--bege)] text-fluid-13 font-lato font-bold">{item.metrica}</span>
                      </div>
                    </div>
                    <span className="px-[12px] py-[4px] text-fluid-10 font-lato font-bold uppercase border border-[var(--neutra-3)] bg-[var(--neutra-4)] text-[var(--off-white)]/80">
                      {item.frequencia}
                    </span>
                  </div>
                  <p className="text-[var(--off-white)]/75 text-fluid-16 leading-relaxed font-lato font-normal max-w-[68ch]">
                    {item.descricao}
                  </p>
                </div>

                <div className="pt-[8px]">
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-[8px] text-fluid-13 font-lato font-black uppercase tracking-wider text-[var(--preto)] hover:text-[var(--off-white)] bg-[var(--bege)] hover:bg-[var(--neutra-3)] px-[20px] py-[12px] border border-[var(--bege)] transition-colors"
                  >
                    {item.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DanielPublicLifeSection;
