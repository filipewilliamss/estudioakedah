import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, ShieldCheck, Music, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface DanielDimension {
  number: string;
  role: string;
  title: string;
  tagline: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  deliverables: string[];
}

export const DANIEL_DIMENSIONS_DATA: DanielDimension[] = [
  {
    number: "01",
    role: "O Empresário & Estrategista",
    title: "Estratégia & Operação B2B",
    tagline: "Processos preditivos, negociações consultivas e autoridade de marca.",
    image: "/videos/frame-empreendedor.webp",
    icon: TrendingUp,
    description:
      "Fundador do Estúdio Akedah. Especialista em desbloquear gargalos comerciais complexos, desenhar esteiras de conversão de alto ticket e construir operações de vendas que não dependem do acaso.",
    deliverables: [
      "Estruturação de processos comerciais B2B",
      "Fundação e governança do Estúdio Akedah",
      "Conselhos consultivos para empresas em escala",
      "Alinhamento cirúrgico de marketing e vendas",
    ],
  },
  {
    number: "02",
    role: "O Homem de Fé & Mentor",
    title: "Mentoria de Fundamentos",
    tagline: "Liderança forjada em princípios bíblicos imutáveis e sabedoria executiva.",
    image: "/videos/frame-fe.webp",
    icon: ShieldCheck,
    description:
      "A convicção de que resultados financeiros expressivos só têm valor duradouro quando construídos sobre alicerces éticos, honra familiar e fidelidade a princípios inegociáveis.",
    deliverables: [
      "Mentorias executivas para fundadores e líderes",
      "Imersões de liderança fundamentada em princípios",
      "Orientação estratégica para decisões de alto impacto",
      "Cultura corporativa pautada em integridade",
    ],
  },
  {
    number: "03",
    role: "O Músico & Adorador",
    title: "Produção Musical & Louvor",
    tagline: "Da rigidez dos negócios à harmonia da adoração e da produção cinematográfica.",
    image: "/videos/frame-musico.webp",
    icon: Music,
    description:
      "A música como expressão genuína de entrega e reverência. Direção e produção de encontros acústicos intimistas, registros cinematográficos de adoração e ministrações pelo país.",
    deliverables: [
      "Produções cinematográficas musicais no Estúdio Akedah",
      "Encontros acústicos e celebrações intimistas",
      "Ministrações públicas em congressos e conferências",
      "Composição autoral com estética artística de elite",
    ],
  },
];

export const DanielDimensionsStack: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  // Referências para os cards de imagem
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

  // Referências para os painéis de texto/informações
  const info1Ref = useRef<HTMLDivElement | null>(null);
  const info2Ref = useRef<HTMLDivElement | null>(null);
  const info3Ref = useRef<HTMLDivElement | null>(null);

  // Cabeçalho da seção
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Coordenadas calculadas
      const activeCardX = isMobile ? 0 : -270;
      const activeCardY = isMobile ? -135 : 0;
      const activeScale = isMobile ? 0.95 : 1.15;

      const activeInfoX = isMobile ? 0 : 270;
      const activeInfoY = isMobile ? 120 : 0;

      const stackRightOffset1 = isMobile ? 22 : 46;
      const stackRightOffset2 = isMobile ? 44 : 92;

      const stackLeftOffset1 = isMobile ? -22 : -46;
      const stackLeftOffset2 = isMobile ? -44 : -92;

      // ======================================================================
      // 1. ESTADO INICIAL EXPLÍCITO (Sem interferência de immediateRender)
      // ======================================================================
      gsap.set(card1Ref.current, {
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotateY: 0,
        opacity: 1,
        zIndex: 30,
        filter: "brightness(100%)",
        visibility: "visible",
      });

      gsap.set(card2Ref.current, {
        x: stackRightOffset1,
        y: -12,
        z: -60,
        scale: 0.92,
        rotateY: 0,
        opacity: 0.85,
        zIndex: 20,
        filter: "brightness(65%)",
        visibility: "visible",
      });

      gsap.set(card3Ref.current, {
        x: stackRightOffset2,
        y: -24,
        z: -120,
        scale: 0.84,
        rotateY: 0,
        opacity: 0.65,
        zIndex: 10,
        filter: "brightness(45%)",
        visibility: "visible",
      });

      gsap.set([info1Ref.current, info2Ref.current, info3Ref.current], {
        x: activeInfoX,
        y: activeInfoY + 25,
        opacity: 0,
        pointerEvents: "none",
        visibility: "hidden",
      });

      // ======================================================================
      // 2. TIMELINE COM CONTROLADORES SEQUENCIAIS PUROS (.to e .set)
      // ======================================================================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=360%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // --- FASE 1: ZOOM DO CARD 01 & APRESENTAÇÃO LATERAL (t=0.2s -> 2.6s) ---
      // Card 1 dá zoom e se move para a esquerda
      tl.to(
        card1Ref.current,
        {
          x: activeCardX,
          y: activeCardY,
          scale: activeScale,
          zIndex: 30,
          filter: "brightness(100%)",
          ease: "power2.out",
          duration: 1.2,
        },
        0.2
      );

      // Cards 2 e 3 somem suavemente enquanto Card 1 está em foco
      tl.to(
        [card2Ref.current, card3Ref.current],
        {
          opacity: 0,
          scale: 0.75,
          ease: "power2.inOut",
          duration: 0.8,
        },
        0.2
      );

      // Painel de informações 1 surge suavemente ao lado
      tl.set(info1Ref.current, { visibility: "visible" }, 0.4);
      tl.to(
        info1Ref.current,
        {
          x: activeInfoX,
          y: activeInfoY,
          opacity: 1,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: 1.0,
        },
        0.5
      );

      // Intervalo de leitura de Card 1 (t=1.5s -> 2.6s)
      tl.to({}, { duration: 1.1 });

      // --- FASE 2: ROLETA 3D -> TRANSIÇÃO PARA CARD 02 (t=2.6s -> 5.2s) ---
      // Info 1 sai
      tl.to(
        info1Ref.current,
        {
          opacity: 0,
          y: activeInfoY - 20,
          pointerEvents: "none",
          ease: "power2.in",
          duration: 0.6,
        },
        2.6
      );
      tl.set(info1Ref.current, { visibility: "hidden" }, 3.2);

      // Card 1 gira e sai em arco de roleta
      tl.to(
        card1Ref.current,
        {
          x: isMobile ? -80 : -450,
          y: activeCardY - 30,
          rotateY: -35,
          scale: 0.8,
          opacity: 0,
          filter: "brightness(30%)",
          ease: "power2.in",
          duration: 0.8,
        },
        2.6
      );

      // Card 2 surge em arco de roleta para a frente
      tl.set(
        card2Ref.current,
        {
          x: isMobile ? 80 : 120,
          y: activeCardY + 30,
          rotateY: 35,
          scale: 0.85,
          opacity: 0,
          filter: "brightness(30%)",
          zIndex: 30,
        },
        2.8
      );

      tl.to(
        card2Ref.current,
        {
          x: activeCardX,
          y: activeCardY,
          rotateY: 0,
          scale: activeScale,
          opacity: 1,
          filter: "brightness(100%)",
          ease: "power2.out",
          duration: 1.0,
        },
        2.9
      );

      // Info 2 surge ao lado
      tl.set(info2Ref.current, { visibility: "visible" }, 3.3);
      tl.to(
        info2Ref.current,
        {
          x: activeInfoX,
          y: activeInfoY,
          opacity: 1,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: 1.0,
        },
        3.4
      );

      // Intervalo de leitura de Card 2 (t=4.4s -> 5.5s)
      tl.to({}, { duration: 1.1 });

      // --- FASE 3: ROLETA 3D -> TRANSIÇÃO PARA CARD 03 (t=5.5s -> 8.0s) ---
      // Info 2 sai
      tl.to(
        info2Ref.current,
        {
          opacity: 0,
          y: activeInfoY - 20,
          pointerEvents: "none",
          ease: "power2.in",
          duration: 0.6,
        },
        5.5
      );
      tl.set(info2Ref.current, { visibility: "hidden" }, 6.1);

      // Card 2 gira e sai em arco de roleta
      tl.to(
        card2Ref.current,
        {
          x: isMobile ? -80 : -450,
          y: activeCardY - 30,
          rotateY: -35,
          scale: 0.8,
          opacity: 0,
          filter: "brightness(30%)",
          ease: "power2.in",
          duration: 0.8,
        },
        5.5
      );

      // Card 3 surge em arco de roleta para a frente
      tl.set(
        card3Ref.current,
        {
          x: isMobile ? 80 : 120,
          y: activeCardY + 30,
          rotateY: 35,
          scale: 0.85,
          opacity: 0,
          filter: "brightness(30%)",
          zIndex: 30,
        },
        5.7
      );

      tl.to(
        card3Ref.current,
        {
          x: activeCardX,
          y: activeCardY,
          rotateY: 0,
          scale: activeScale,
          opacity: 1,
          filter: "brightness(100%)",
          ease: "power2.out",
          duration: 1.0,
        },
        5.8
      );

      // Info 3 surge ao lado
      tl.set(info3Ref.current, { visibility: "visible" }, 6.2);
      tl.to(
        info3Ref.current,
        {
          x: activeInfoX,
          y: activeInfoY,
          opacity: 1,
          pointerEvents: "auto",
          ease: "power2.out",
          duration: 1.0,
        },
        6.3
      );

      // Intervalo de leitura de Card 3 (t=7.3s -> 8.3s)
      tl.to({}, { duration: 1.0 });

      // --- FASE 4: ZOOM-OUT & RECOLHIMENTO FINAL -> STACK PARA A ESQUERDA (t=8.3s -> 10.0s) ---
      // Info 3 sai
      tl.to(
        info3Ref.current,
        {
          opacity: 0,
          y: activeInfoY + 20,
          pointerEvents: "none",
          ease: "power2.in",
          duration: 0.5,
        },
        8.3
      );
      tl.set(info3Ref.current, { visibility: "hidden" }, 8.8);

      // Card 3 faz zoom-out e volta para o centro
      tl.to(
        card3Ref.current,
        {
          x: 0,
          y: 0,
          z: 0,
          scale: 1,
          rotateY: 0,
          opacity: 1,
          zIndex: 30,
          filter: "brightness(100%)",
          ease: "power2.inOut",
          duration: 1.1,
        },
        8.5
      );

      // Preparar Cards 2 e 1 para entrarem empilhados à ESQUERDA
      tl.set(
        card2Ref.current,
        {
          x: stackLeftOffset1 - 30,
          y: -12,
          z: -60,
          scale: 0.88,
          rotateY: 0,
          opacity: 0,
          zIndex: 20,
          filter: "brightness(40%)",
        },
        8.6
      );

      tl.set(
        card1Ref.current,
        {
          x: stackLeftOffset2 - 30,
          y: -24,
          z: -120,
          scale: 0.80,
          rotateY: 0,
          opacity: 0,
          zIndex: 10,
          filter: "brightness(30%)",
        },
        8.7
      );

      // Card 2 reaparece suavemente atrás de Card 3, deslocado para a ESQUERDA
      tl.to(
        card2Ref.current,
        {
          x: stackLeftOffset1,
          y: -12,
          z: -60,
          scale: 0.92,
          opacity: 0.85,
          filter: "brightness(65%)",
          ease: "power2.out",
          duration: 1.0,
        },
        8.8
      );

      // Card 1 reaparece suavemente atrás de Card 2, mais para a ESQUERDA
      tl.to(
        card1Ref.current,
        {
          x: stackLeftOffset2,
          y: -24,
          z: -120,
          scale: 0.84,
          opacity: 0.65,
          filter: "brightness(45%)",
          ease: "power2.out",
          duration: 1.0,
        },
        9.0
      );

      // Folga final de contemplação antes de descer para a próxima seção
      tl.to({}, { duration: 0.8 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="dimensoes"
      ref={sectionRef}
      className="relative w-full z-[1] bg-[var(--marinho)]"
    >
      {/* Container de Rolagem Estendido (Runway de scroll suave) */}
      <div ref={triggerRef} className="relative w-full h-[100dvh]">
        {/* Sticky Viewport Frame */}
        <div className="w-full h-full flex flex-col justify-between items-center overflow-hidden px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 select-none">
          {/* 1. Cabeçalho Oficial Monumental (2 Linhas, sem retângulos) */}
          <div
            ref={headerRef}
            className="text-center max-w-5xl mx-auto z-40 shrink-0 mb-2 md:mb-4"
          >
            <h2 className="font-lato uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[4.6rem] xl:text-[5.2rem] tracking-tight leading-[1.02] text-center w-full">
              <span className="block font-black text-[var(--off-white)] whitespace-normal lg:whitespace-nowrap">
                Três dimensões
              </span>
              <span className="block font-light text-[var(--bege)] tracking-wide mt-1 sm:mt-2 whitespace-normal lg:whitespace-nowrap">
                Uma só voz
              </span>
            </h2>
            <p className="hidden md:block font-lato text-fluid-15 text-[var(--off-white)]/70 font-light mt-2 max-w-2xl mx-auto">
              Cada pilar representa uma esfera onde Daniel Silva aplica metodologia, liderança e excelência prática.
            </p>
          </div>

          {/* 2. Palco Central 3D (Área de Interação dos Cards & Textos) */}
          <div
            className="relative w-full max-w-6xl flex-1 flex items-center justify-center"
            style={{ perspective: "1400px", perspectiveOrigin: "50% 50%" }}
          >
            {/* -------------------------------------------------------------- */}
            {/* GRUPO DOS CARDS DE IMAGEM (Stack 3D Central)                  */}
            {/* -------------------------------------------------------------- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Card 01: O Empresário & Estrategista */}
              <div
                ref={card1Ref}
                className="absolute w-[290px] sm:w-[360px] md:w-[440px] lg:w-[480px] aspect-[16/10] bg-black/80 rounded-sm border border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden will-change-transform pointer-events-auto"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={DANIEL_DIMENSIONS_DATA[0].image}
                  alt={DANIEL_DIMENSIONS_DATA[0].role}
                  className="w-full h-full object-cover object-[center_20%]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--marinho)]/90 via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-3 right-4">
                  <span className="font-display font-black text-fluid-24 text-white/40">
                    {DANIEL_DIMENSIONS_DATA[0].number}
                  </span>
                </div>
              </div>

              {/* Card 02: O Homem de Fé & Mentor */}
              <div
                ref={card2Ref}
                className="absolute w-[290px] sm:w-[360px] md:w-[440px] lg:w-[480px] aspect-[16/10] bg-black/80 rounded-sm border border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden will-change-transform pointer-events-auto"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={DANIEL_DIMENSIONS_DATA[1].image}
                  alt={DANIEL_DIMENSIONS_DATA[1].role}
                  className="w-full h-full object-cover object-[center_20%]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--marinho)]/90 via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-3 right-4">
                  <span className="font-display font-black text-fluid-24 text-white/40">
                    {DANIEL_DIMENSIONS_DATA[1].number}
                  </span>
                </div>
              </div>

              {/* Card 03: O Músico & Adorador */}
              <div
                ref={card3Ref}
                className="absolute w-[290px] sm:w-[360px] md:w-[440px] lg:w-[480px] aspect-[16/10] bg-black/80 rounded-sm border border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden will-change-transform pointer-events-auto"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={DANIEL_DIMENSIONS_DATA[2].image}
                  alt={DANIEL_DIMENSIONS_DATA[2].role}
                  className="w-full h-full object-cover object-[center_20%]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--marinho)]/90 via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-3 right-4">
                  <span className="font-display font-black text-fluid-24 text-white/40">
                    {DANIEL_DIMENSIONS_DATA[2].number}
                  </span>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------- */}
            {/* GRUPO DOS PAINÉIS DE INFORMAÇÕES (Lateral Desktop / Baixo Mob) */}
            {/* -------------------------------------------------------------- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Painel 01: Estratégia B2B */}
              <div
                ref={info1Ref}
                className="absolute w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] text-left p-4 sm:p-6 md:p-8 bg-[var(--marinho)]/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/15 md:border-none will-change-transform pointer-events-auto"
              >
                <div className="flex items-center gap-2.5 mb-3 text-[var(--bege)]">
                  <TrendingUp className="w-5 h-5 shrink-0" />
                  <span className="text-fluid-12 uppercase tracking-[0.2em] font-bold">
                    {DANIEL_DIMENSIONS_DATA[0].role}
                  </span>
                </div>

                <h3 className="display--condensed text-fluid-36 sm:text-fluid-44 lg:text-[3.2rem] text-[var(--off-white)] mb-3 tracking-tight uppercase leading-[0.9]">
                  {DANIEL_DIMENSIONS_DATA[0].title}
                </h3>

                <p className="font-lato text-fluid-15 sm:text-fluid-16 text-[var(--bege)] font-medium leading-relaxed mb-4">
                  {DANIEL_DIMENSIONS_DATA[0].tagline}
                </p>

                <p className="font-lato text-fluid-14 text-[var(--off-white)]/85 leading-relaxed font-light mb-6 line-clamp-3 md:line-clamp-none">
                  {DANIEL_DIMENSIONS_DATA[0].description}
                </p>

                <div className="pt-5 border-t border-white/10">
                  <p className="text-[var(--bege)] text-fluid-11 uppercase tracking-widest font-bold mb-3.5">
                    Campos de Atuação:
                  </p>
                  <ul className="space-y-2.5">
                    {DANIEL_DIMENSIONS_DATA[0].deliverables.map((del, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2.5 text-fluid-13 text-[var(--off-white)]/85 font-light leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--bege)] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Painel 02: Mentoria de Fundamentos */}
              <div
                ref={info2Ref}
                className="absolute w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] text-left p-4 sm:p-6 md:p-8 bg-[var(--marinho)]/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/15 md:border-none will-change-transform pointer-events-auto"
              >
                <div className="flex items-center gap-2.5 mb-3 text-[var(--bege)]">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <span className="text-fluid-12 uppercase tracking-[0.2em] font-bold">
                    {DANIEL_DIMENSIONS_DATA[1].role}
                  </span>
                </div>

                <h3 className="display--condensed text-fluid-36 sm:text-fluid-44 lg:text-[3.2rem] text-[var(--off-white)] mb-3 tracking-tight uppercase leading-[0.9]">
                  {DANIEL_DIMENSIONS_DATA[1].title}
                </h3>

                <p className="font-lato text-fluid-15 sm:text-fluid-16 text-[var(--bege)] font-medium leading-relaxed mb-4">
                  {DANIEL_DIMENSIONS_DATA[1].tagline}
                </p>

                <p className="font-lato text-fluid-14 text-[var(--off-white)]/85 leading-relaxed font-light mb-6 line-clamp-3 md:line-clamp-none">
                  {DANIEL_DIMENSIONS_DATA[1].description}
                </p>

                <div className="pt-5 border-t border-white/10">
                  <p className="text-[var(--bege)] text-fluid-11 uppercase tracking-widest font-bold mb-3.5">
                    Campos de Atuação:
                  </p>
                  <ul className="space-y-2.5">
                    {DANIEL_DIMENSIONS_DATA[1].deliverables.map((del, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2.5 text-fluid-13 text-[var(--off-white)]/85 font-light leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--bege)] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Painel 03: Produção Musical & Louvor */}
              <div
                ref={info3Ref}
                className="absolute w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] text-left p-4 sm:p-6 md:p-8 bg-[var(--marinho)]/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/15 md:border-none will-change-transform pointer-events-auto"
              >
                <div className="flex items-center gap-2.5 mb-3 text-[var(--bege)]">
                  <Music className="w-5 h-5 shrink-0" />
                  <span className="text-fluid-12 uppercase tracking-[0.2em] font-bold">
                    {DANIEL_DIMENSIONS_DATA[2].role}
                  </span>
                </div>

                <h3 className="display--condensed text-fluid-36 sm:text-fluid-44 lg:text-[3.2rem] text-[var(--off-white)] mb-3 tracking-tight uppercase leading-[0.9]">
                  {DANIEL_DIMENSIONS_DATA[2].title}
                </h3>

                <p className="font-lato text-fluid-15 sm:text-fluid-16 text-[var(--bege)] font-medium leading-relaxed mb-4">
                  {DANIEL_DIMENSIONS_DATA[2].tagline}
                </p>

                <p className="font-lato text-fluid-14 text-[var(--off-white)]/85 leading-relaxed font-light mb-6 line-clamp-3 md:line-clamp-none">
                  {DANIEL_DIMENSIONS_DATA[2].description}
                </p>

                <div className="pt-5 border-t border-white/10">
                  <p className="text-[var(--bege)] text-fluid-11 uppercase tracking-widest font-bold mb-3.5">
                    Campos de Atuação:
                  </p>
                  <ul className="space-y-2.5">
                    {DANIEL_DIMENSIONS_DATA[2].deliverables.map((del, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2.5 text-fluid-13 text-[var(--off-white)]/85 font-light leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--bege)] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Rodapé Indicador Visual de Scroll */}
          <div className="z-40 text-center shrink-0 pt-2 opacity-50">
            <p className="font-mono text-fluid-11 uppercase tracking-[0.25em] text-[var(--bege)]">
              Role para explorar as três dimensões
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DanielDimensionsStack;
