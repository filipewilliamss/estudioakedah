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
  return (
    <div id="vida-publica-root" className="w-full font-lato">
      {/* =================================================================== */}
      {/* BLOCO 1: AGENDA PÚBLICA — TELAS DE 100VH (CONCEITO DE REMOÇÃO)      */}
      {/* =================================================================== */}
      <section id="agenda-publica" className="section--flat scr bg-[var(--marinho)] flex-col justify-center font-lato w-full">
        <div className="container w-full text-left" data-section="agenda-publica">
          <div className="flex items-center justify-between mb-[3.4rem]">
            <div className="font-lato font-bold text-fluid-12 tracking-[0.22em] text-[var(--bege)] uppercase">
              Agenda pública — 01 de 03
            </div>
            <span className="agenda__data text-fluid-44 text-[var(--bege)] hidden">18/09</span>
            <span className="agenda__titulo text-fluid-28 text-[var(--off-white)] hidden">Convenção</span>
          </div>

            <div className="flex items-baseline gap-[3rem] border-b border-white/20 pb-[2.4rem] mb-[2.4rem]">
              <span className="cond text-fluid-130 text-[var(--bege)] leading-[0.78] shrink-0">18/09</span>
              <div className="flex-1 min-w-0">
                <div className="text-fluid-50 font-lato font-black text-[var(--off-white)] uppercase leading-[0.95]">
                  Convenção Nacional de Vendas B2B
                </div>
                <div className="flex items-center justify-between gap-[2rem] text-fluid-16 text-[#8f8a82] mt-[1rem] tracking-[0.04em]">
                  <span>São Paulo, SP &nbsp;·&nbsp; 19h30 &nbsp;·&nbsp; Palestra</span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--bege)] hover:text-[var(--off-white)] text-fluid-13 font-black uppercase tracking-wider transition-colors shrink-0"
                  >
                    Garantir Vaga →
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-baseline gap-[3rem]">
              <span className="cond text-fluid-130 text-[var(--bege)] leading-[0.78] shrink-0">25/09</span>
              <div className="flex-1 min-w-0">
                <div className="text-fluid-50 font-lato font-black text-[var(--off-white)] uppercase leading-[0.95]">
                  Imersão Executiva: Escala &amp; Governança
                </div>
                <div className="flex items-center justify-between gap-[2rem] text-fluid-16 text-[#8f8a82] mt-[1rem] tracking-[0.04em]">
                  <span>Barueri, SP &nbsp;·&nbsp; 14h00 &nbsp;·&nbsp; Imersão</span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--bege)] hover:text-[var(--off-white)] text-fluid-13 font-black uppercase tracking-wider transition-colors shrink-0"
                  >
                    Garantir Vaga →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TELA 13 — AGENDA PÚBLICA (02 DE 03) */}
        <section id="agenda-publica-2" className="section--flat scr bg-[var(--off-white)] text-[var(--preto)] flex-col justify-center border-t border-black/10 font-lato w-full">
          <div className="container w-full text-left" data-section="agenda-publica-2">
            <div className="font-lato font-bold text-fluid-12 tracking-[0.22em] text-[rgba(25,25,25,0.6)] uppercase mb-[3.4rem]">
              Agenda pública — 02 de 03
            </div>

            <div className="flex items-baseline gap-[3rem] border-b border-black/15 pb-[2.4rem] mb-[2.4rem]">
              <span className="cond text-fluid-130 text-[var(--bege)] leading-[0.78] shrink-0">03/10</span>
              <div className="flex-1 min-w-0">
                <div className="text-fluid-50 font-lato font-black text-[var(--preto)] uppercase leading-[0.95]">
                  Fórum de Liderança, Negócios &amp; Princípios
                </div>
                <div className="flex items-center justify-between gap-[2rem] text-fluid-16 text-[#596170] mt-[1rem] tracking-[0.04em]">
                  <span>Belo Horizonte, MG &nbsp;·&nbsp; 20h00 &nbsp;·&nbsp; Palestra</span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--marinho)] hover:text-[var(--preto)] text-fluid-13 font-black uppercase tracking-wider transition-colors shrink-0"
                  >
                    Garantir Vaga →
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-baseline gap-[3rem]">
              <span className="cond text-fluid-130 text-[var(--bege)] leading-[0.78] shrink-0">12/10</span>
              <div className="flex-1 min-w-0">
                <div className="text-fluid-50 font-lato font-black text-[var(--preto)] uppercase leading-[0.95]">
                  Noite de Louvor, Palavra &amp; Propósito
                </div>
                <div className="flex items-center justify-between gap-[2rem] text-fluid-16 text-[#596170] mt-[1rem] tracking-[0.04em]">
                  <span>Curitiba, PR &nbsp;·&nbsp; 19h00 &nbsp;·&nbsp; Ministração</span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--marinho)] hover:text-[var(--preto)] text-fluid-13 font-black uppercase tracking-wider transition-colors shrink-0"
                  >
                    Garantir Vaga →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TELA 14 — AGENDA PÚBLICA (03 DE 03) */}
        <section id="agenda-publica-3" className="section--flat scr bg-[var(--marinho)] flex-col justify-center border-t border-white/20 font-lato w-full">
          <div className="container w-full text-left" data-section="agenda-publica-3">
            <div className="font-lato font-bold text-fluid-12 tracking-[0.22em] text-[var(--bege)] uppercase mb-[3.4rem]">
              Agenda pública — 03 de 03
            </div>

            <div className="flex items-baseline gap-[3rem] border-b border-white/20 pb-[2.4rem] mb-[2.4rem]">
              <span className="cond text-fluid-130 text-[var(--bege)] leading-[0.78] shrink-0">22/10</span>
              <div className="flex-1 min-w-0">
                <div className="text-fluid-50 font-lato font-black text-[var(--off-white)] uppercase leading-[0.95]">
                  Painel Fé &amp; Negócios de Impacto
                </div>
                <div className="flex items-center justify-between gap-[2rem] text-fluid-16 text-[#8f8a82] mt-[1rem] tracking-[0.04em]">
                  <span>Rio de Janeiro, RJ &nbsp;·&nbsp; 20h30 &nbsp;·&nbsp; Convenção</span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--bege)] hover:text-[var(--off-white)] text-fluid-13 font-black uppercase tracking-wider transition-colors shrink-0"
                  >
                    Garantir Vaga →
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-baseline gap-[3rem]">
              <span className="cond text-fluid-130 text-[var(--bege)] leading-[0.78] shrink-0">05/11</span>
              <div className="flex-1 min-w-0">
                <div className="text-fluid-50 font-lato font-black text-[var(--off-white)] uppercase leading-[0.95]">
                  Conferência Águas Profundas
                </div>
                <div className="flex items-center justify-between gap-[2rem] text-fluid-16 text-[#8f8a82] mt-[1rem] tracking-[0.04em]">
                  <span>Brasília, DF &nbsp;·&nbsp; 19h30 &nbsp;·&nbsp; Ministração</span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--bege)] hover:text-[var(--off-white)] text-fluid-13 font-black uppercase tracking-wider transition-colors shrink-0"
                  >
                    Garantir Vaga →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* =================================================================== */}
      {/* BLOCO 2: CONTEÚDO DIGITAL & AUDIÊNCIA (TELA DE 100VH)                */}
      {/* =================================================================== */}
      <section id="conteudo-digital" className="section--flat scr bg-[var(--off-white)] text-[var(--preto)] flex-col justify-center border-t border-black/10 font-lato w-full">
        <div className="container w-full text-left" data-section="conteudo-digital">
          <div className="mb-[3.4rem]">
            <div className="font-lato font-bold text-fluid-12 tracking-[0.22em] text-[rgba(25,25,25,0.6)] uppercase mb-[1.2rem]">
              Ecossistema Online &amp; Presença
            </div>
            <h3 className="display text-fluid-50 text-[var(--preto)] uppercase">
              Conteúdo Digital &amp; Audiência
            </h3>
          </div>

          {/* Barra Editorial de Métricas Auditadas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2.4rem] border-y border-black/15 py-[2.4rem] mb-[3.4rem] text-left">
            <div>
              <span className="cond text-fluid-110 text-[var(--marinho)] leading-[0.8] block">364 mil</span>
              <span className="text-[rgba(25,25,25,0.7)] text-fluid-13 font-lato uppercase tracking-wider block mt-[0.6rem]">
                Alcance Mensal
              </span>
            </div>
            <div>
              <span className="cond text-fluid-110 text-[var(--marinho)] leading-[0.8] block">43 mil</span>
              <span className="text-[rgba(25,25,25,0.7)] text-fluid-13 font-lato uppercase tracking-wider block mt-[0.6rem]">
                Inscritos YouTube
              </span>
            </div>
            <div>
              <span className="cond text-fluid-110 text-[var(--marinho)] leading-[0.8] block">48 mil</span>
              <span className="text-[rgba(25,25,25,0.7)] text-fluid-13 font-lato uppercase tracking-wider block mt-[0.6rem]">
                Seguidores Instagram
              </span>
            </div>
            <div>
              <span className="cond text-fluid-110 text-[var(--marinho)] leading-[0.8] block">20 mil</span>
              <span className="text-[rgba(25,25,25,0.7)] text-fluid-13 font-lato uppercase tracking-wider block mt-[0.6rem]">
                Conexões LinkedIn
              </span>
            </div>
          </div>

          {/* Linhas Editoriais dos Canais Digitais (Zero Cards) */}
          <div className="divide-y divide-black/10 border-b border-black/10">
            {conteudosDigitais.map((item, idx) => (
              <div
                key={idx}
                className="py-[1.8rem] flex flex-col md:flex-row md:items-center justify-between gap-[1.6rem] text-left"
              >
                <div className="flex items-baseline gap-[2.4rem]">
                  <span className="font-lato font-black text-fluid-26 text-[var(--preto)] uppercase min-w-[200px]">
                    {item.canal}
                  </span>
                  <span className="text-[#596170] text-fluid-16 font-lato">
                    {item.formato} &nbsp;·&nbsp; {item.metrica}
                  </span>
                </div>
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-[6px] text-[var(--marinho)] hover:text-[var(--preto)] font-lato font-black text-fluid-13 uppercase tracking-wider transition-colors shrink-0"
                >
                  {item.cta} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DanielPublicLifeSection;
