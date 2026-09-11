import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHATSAPP_URL } from "@/data/services";
import { Instagram, Youtube, Linkedin, Radio, ArrowRight } from "lucide-react";
import { AgendaNoiseLens, SVG_NOISE_DATA_URI } from "./AgendaNoiseLens";

gsap.registerPlugin(ScrollTrigger);

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

interface MetricRouletteItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  sequence: number[];
  startTime: number;
  endTime: number;
}

const METRICS_ROULETTE_DATA: MetricRouletteItem[] = [
  {
    id: "alcance",
    target: 364,
    suffix: "mil",
    label: "Alcance Mensal",
    sequence: [364, 362, 359, 374, 391, 418, 465, 530, 620, 750, 840, 930, 160, 290, 440, 610, 730, 860, 980],
    startTime: 0.00,
    endTime: 0.68,
  },
  {
    id: "youtube",
    target: 43,
    suffix: "mil",
    label: "Inscritos YouTube",
    sequence: [43, 42, 41, 45, 50, 56, 64, 75, 87, 94, 16, 29, 38, 54, 69, 81, 92],
    startTime: 0.04,
    endTime: 0.80,
  },
  {
    id: "instagram",
    target: 48,
    suffix: "mil",
    label: "Seguidores Instagram",
    sequence: [48, 47, 46, 51, 58, 66, 77, 89, 96, 19, 33, 47, 61, 75, 86],
    startTime: 0.08,
    endTime: 0.90,
  },
  {
    id: "linkedin",
    target: 20,
    suffix: "mil",
    label: "Conexões LinkedIn",
    sequence: [20, 19, 18, 23, 28, 35, 44, 56, 69, 81, 89, 14, 27, 41, 53, 66, 78, 91, 98, 17, 33],
    startTime: 0.02,
    endTime: 1.00,
  },
];

export const DanielPublicLifeSection: React.FC = () => {
  const agenda1Ref = useRef<HTMLElement>(null);
  const agenda1ContentRef = useRef<HTMLDivElement>(null);
  const agenda1GrainRef = useRef<HTMLDivElement>(null);

  const agenda2Ref = useRef<HTMLElement>(null);
  const agenda2ContentRef = useRef<HTMLDivElement>(null);
  const agenda2GrainRef = useRef<HTMLDivElement>(null);
  const agenda2BgRef = useRef<HTMLDivElement>(null);

  const agenda3Ref = useRef<HTMLElement>(null);
  const agenda3ContentRef = useRef<HTMLDivElement>(null);
  const agenda3GrainRef = useRef<HTMLDivElement>(null);

  const conteudoRef = useRef<HTMLElement>(null);
  const conteudoBgRef = useRef<HTMLDivElement>(null);
  const conteudoHeaderRef = useRef<HTMLDivElement>(null);
  const conteudoMetricsRef = useRef<HTMLDivElement>(null);
  const metricReelsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const conteudoLinesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const ctx = gsap.context(() => {
      // 1. Deslocamento parallax suave nos fundos brancos elevados
      const parallaxSections = [
        { section: agenda2Ref.current, bg: agenda2BgRef.current },
        { section: conteudoRef.current, bg: conteudoBgRef.current },
      ];

      parallaxSections.forEach(({ section, bg }) => {
        if (!section || !bg) return;

        gsap.fromTo(
          bg,
          { y: -65 },
          {
            y: 65,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
              onUpdate: (self) => {
                const dir = self.direction; // 1 = descendo, -1 = subindo
                gsap.to(bg, {
                  yPercent: dir === 1 ? 1.8 : -1.8,
                  duration: 0.35,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              },
            },
          }
        );
      });

      // 2. Animação de aparição das informações da agenda pública (desfoque alto + grain -> nítido)
      const agendaEntrances = [
        { section: agenda1Ref.current, content: agenda1ContentRef.current, grain: agenda1GrainRef.current },
        { section: agenda2Ref.current, content: agenda2ContentRef.current, grain: agenda2GrainRef.current },
        { section: agenda3Ref.current, content: agenda3ContentRef.current, grain: agenda3GrainRef.current },
      ];

      agendaEntrances.forEach(({ section, content, grain }) => {
        if (!section || !content) return;

        // O desfoque permanece por mais tempo na rolagem e fica 100% nítido e normal
        // apenas quando as informações se aproximam do centro da viewport de scroll.
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        tl.fromTo(
          content,
          {
            filter: "blur(22px)",
            opacity: 0.35,
            y: 32,
          },
          {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            ease: "power2.in",
            duration: 0.38,
          }
        )
          .to(content, {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            duration: 0.24, // Ampla zona central de leitura 100% nítida e normal
          })
          .to(content, {
            filter: "blur(22px)",
            opacity: 0.35,
            y: -32,
            ease: "power2.out",
            duration: 0.38,
          });

        // Camada de grain de entrada vinculada que desaparece na zona central nítida
        if (grain) {
          const grainTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          });

          grainTl
            .fromTo(
              grain,
              { opacity: 0.55 },
              { opacity: 0, ease: "power2.in", duration: 0.38 }
            )
            .to(grain, { opacity: 0, duration: 0.24 })
            .to(grain, { opacity: 0.55, ease: "power2.out", duration: 0.38 });
        }
      });

      // 3. Animação sequencial "uma linha por vez" no Ecossistema Online com scroll runway espaçado
      if (conteudoRef.current) {
        const lines: HTMLElement[] = [];
        if (conteudoHeaderRef.current) lines.push(conteudoHeaderRef.current);
        if (conteudoMetricsRef.current) lines.push(conteudoMetricsRef.current);
        conteudoLinesRef.current.forEach((el) => {
          if (el) lines.push(el);
        });

        if (lines.length > 0) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: conteudoRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.8,
            },
          });

          // Pacing calmo e progressivo: cada linha ganha tempo real de rolagem para ser apreciada
          const lineTimes = [0.00, 0.12, 0.44, 0.54, 0.64, 0.74];
          const lineDurations = [0.14, 0.16, 0.12, 0.12, 0.12, 0.12];

          lines.forEach((line, index) => {
            const startTime = lineTimes[index] ?? (index * 0.14);
            const duration = lineDurations[index] ?? 0.14;
            tl.fromTo(
              line,
              {
                opacity: 0,
                y: 32,
                filter: "blur(6px)",
              },
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                ease: "power2.out",
                duration: duration,
              },
              startTime
            );
          });
        }
      }

      // 4. Animação de roleta numérica nos 4 números do Ecossistema Online
      // Com o scroll runway expandido, a roleta tem tempo generoso para rodar acelerada e desacelerar visivelmente
      if (conteudoRef.current) {
        const rouletteTl = gsap.timeline({
          scrollTrigger: {
            trigger: conteudoRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });

        // Cada número desacelera e trava em um tempo próprio com espaço de sobra para visualização:
        const rouletteTimings = [
          { start: 0.12, end: 0.34 }, // 364 mil trava primeiro
          { start: 0.14, end: 0.38 }, // 43 mil trava em segundo
          { start: 0.16, end: 0.42 }, // 48 mil trava em terceiro
          { start: 0.14, end: 0.46 }, // 20 mil trava em quarto
        ];

        METRICS_ROULETTE_DATA.forEach((item, idx) => {
          const reelEl = metricReelsRef.current[idx];
          if (!reelEl) return;

          const totalItems = item.sequence.length;
          const initialYPercent = -((totalItems - 1) / totalItems) * 100;
          const timing = rouletteTimings[idx] || { start: item.startTime, end: item.endTime };
          const duration = timing.end - timing.start;

          rouletteTl.fromTo(
            reelEl,
            {
              yPercent: initialYPercent,
              filter: "blur(2.5px)",
            },
            {
              yPercent: 0,
              filter: "blur(0px)",
              ease: "power3.out",
              duration: duration,
            },
            timing.start
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="vida-publica-root" className="w-full font-lato">
      {/* =================================================================== */}
      {/* BLOCO 1: AGENDA PÚBLICA — TELAS DE 100VH (CONCEITO DE REMOÇÃO)      */}
      {/* =================================================================== */}
      <section
        id="agenda-publica"
        ref={agenda1Ref}
        className="section--flat scr bg-[var(--marinho)] flex-col justify-center font-lato w-full relative z-[1] overflow-hidden"
      >
        {/* Grain de Entrada vinculado ao scroll */}
        <div
          ref={agenda1GrainRef}
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
          style={{
            backgroundImage: `url("${SVG_NOISE_DATA_URI}")`,
            backgroundSize: "160px 160px",
          }}
        />

        {/* Lente Retangular Móvel com Desfoque e Grain */}
        <AgendaNoiseLens containerRef={agenda1Ref} theme="dark" />

        <div
          ref={agenda1ContentRef}
          className="container w-full text-left relative z-10"
          data-section="agenda-publica"
          style={{ willChange: "filter, transform, opacity" }}
        >
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
        <section
          id="agenda-publica-2"
          ref={agenda2Ref}
          className="section--flat scr text-[var(--preto)] flex-col justify-center font-lato w-full relative overflow-visible z-[5]"
        >
          {/* Camada de Fundo Branco em Parallax Elevado sobre o Azul Marinho */}
          <div
            ref={agenda2BgRef}
            aria-hidden="true"
            className="absolute inset-x-0 bg-[var(--off-white)] pointer-events-none z-0"
            style={{
              top: "-50px",
              bottom: "-50px",
              height: "calc(100% + 100px)",
              boxShadow: "0 0 60px rgba(0, 20, 60, 0.28), 0 25px 45px rgba(0, 0, 0, 0.16)",
              willChange: "transform",
            }}
          />

          {/* Grain de Entrada vinculado ao scroll */}
          <div
            ref={agenda2GrainRef}
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
            style={{
              backgroundImage: `url("${SVG_NOISE_DATA_URI}")`,
              backgroundSize: "160px 160px",
            }}
          />

          {/* Lente Retangular Móvel com Desfoque e Grain */}
          <AgendaNoiseLens containerRef={agenda2Ref} theme="light" />

          <div
            ref={agenda2ContentRef}
            className="container w-full text-left relative z-10"
            data-section="agenda-publica-2"
            style={{ willChange: "filter, transform, opacity" }}
          >
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
        <section
          id="agenda-publica-3"
          ref={agenda3Ref}
          className="section--flat scr bg-[var(--marinho)] flex-col justify-center font-lato w-full relative z-[1] overflow-hidden"
        >
          {/* Grain de Entrada vinculado ao scroll */}
          <div
            ref={agenda3GrainRef}
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
            style={{
              backgroundImage: `url("${SVG_NOISE_DATA_URI}")`,
              backgroundSize: "160px 160px",
            }}
          />

          {/* Lente Retangular Móvel com Desfoque e Grain */}
          <AgendaNoiseLens containerRef={agenda3Ref} theme="dark" />

          <div
            ref={agenda3ContentRef}
            className="container w-full text-left relative z-10"
            data-section="agenda-publica-3"
            style={{ willChange: "filter, transform, opacity" }}
          >
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
      {/* BLOCO 2: CONTEÚDO DIGITAL & AUDIÊNCIA (STICKY SCROLL RUNWAY)        */}
      {/* =================================================================== */}
      <section
        id="conteudo-digital"
        ref={conteudoRef}
        className="relative w-full z-[5]"
        style={{ minHeight: "220vh" }}
      >
        {/* Sticky Viewport Frame que segura as informações no centro da tela */}
        <div className="sticky top-0 left-0 w-full h-[100dvh] flex flex-col justify-center overflow-hidden font-lato text-[var(--preto)]">
          {/* Camada de Fundo Branco em Parallax Elevado sobre o Azul Marinho */}
          <div
            ref={conteudoBgRef}
            aria-hidden="true"
            className="absolute inset-0 bg-[var(--off-white)] pointer-events-none z-0"
            style={{
              boxShadow: "0 0 60px rgba(0, 20, 60, 0.28), 0 25px 45px rgba(0, 0, 0, 0.16)",
            }}
          />

          <div className="container w-full text-left relative z-10" data-section="conteudo-digital">
          {/* Linha 1: Cabeçalho da Seção */}
          <div
            ref={conteudoHeaderRef}
            className="mb-[3.4rem]"
            style={{ willChange: "transform, opacity, filter" }}
          >
            <div className="font-lato font-bold text-fluid-12 tracking-[0.22em] text-[rgba(25,25,25,0.6)] uppercase mb-[1.2rem]">
              Ecossistema Online &amp; Presença
            </div>
            <h3 className="display text-fluid-50 text-[var(--preto)] uppercase">
              Conteúdo Digital &amp; Audiência
            </h3>
          </div>

          {/* Linha 2: Barra Editorial de Métricas Auditadas com Roleta Numérica */}
          <div
            ref={conteudoMetricsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-[2.4rem] border-y border-black/15 py-[2.4rem] mb-[3.4rem] text-left"
            style={{ willChange: "transform, opacity, filter" }}
          >
            {METRICS_ROULETTE_DATA.map((item, idx) => (
              <div key={item.id}>
                <span className="cond text-fluid-110 text-[var(--marinho)] leading-[0.8] flex items-baseline select-none">
                  <span className="inline-block overflow-hidden h-[0.82em] leading-[0.82em] align-baseline relative">
                    <span
                      ref={(el) => {
                        metricReelsRef.current[idx] = el;
                      }}
                      className="flex flex-col will-change-transform"
                      style={{
                        transform: "translateY(0%)",
                      }}
                    >
                      {item.sequence.map((num, i) => (
                        <span key={i} className="h-[0.82em] leading-[0.82em] block">
                          {num}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="ml-[0.15em] leading-[0.82em]">{item.suffix}</span>
                </span>
                <span className="text-[rgba(25,25,25,0.7)] text-fluid-13 font-lato uppercase tracking-wider block mt-[0.6rem]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Linhas 3 a 6: Linhas Editoriais dos Canais Digitais (Zero Cards) */}
          <div className="divide-y divide-black/10 border-b border-black/10">
            {conteudosDigitais.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  conteudoLinesRef.current[idx] = el;
                }}
                className="py-[1.8rem] flex flex-col md:flex-row md:items-center justify-between gap-[1.6rem] text-left"
                style={{ willChange: "transform, opacity, filter" }}
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
        </div>
      </section>
    </div>
  );
};

export default DanielPublicLifeSection;
