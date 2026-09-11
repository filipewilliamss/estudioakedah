import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  DanielSignature,
  DanielBrandMarquee,
  DANIEL_TAGLINE,
  DANIEL_POSITIONING,
} from "@/components/daniel/DanielBrandSignature";
import DanielContactSection from "@/components/daniel/DanielContactSection";
import danielPicture from "@/assets/imagem-daniel.png";
import { ArrowUpRight, ShieldCheck, TrendingUp, Music, CheckCircle2, Award, Building2, Radio } from "lucide-react";
import { Link } from "react-router-dom";

// ============================================================================
// 1. DADOS DAS TRÊS DIMENSÕES ESTRUTURAIS
// ============================================================================
const DANIEL_DIMENSIONS = [
  {
    number: "01",
    role: "O Empresário & Estrategista",
    title: "Estratégia & Operação B2B",
    tagline: "Processos preditivos, negociações consultivas e autoridade de marca.",
    image: "/videos/frame-empreendedor.webp",
    badge: "Negócios & Escala",
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
    badge: "Princípios & Sabedoria",
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
    badge: "Harmonia & Arte",
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

// ============================================================================
// 2. MARCOS DA TRAJETÓRIA HISTÓRICA
// ============================================================================
const DANIEL_TIMELINE_STEPS = [
  {
    year: "Fase 01",
    number: "01",
    title: "Origem no Front Comercial",
    subtitle: "O campo de batalha das vendas reais",
    description:
      "Início da caminhada na linha de frente comercial, vivenciando o atrito real entre discursos de marketing e a realidade da conversão em vendas de tickets representativos. Aqui foi forjada a intolerância a achismos.",
  },
  {
    year: "Fase 02",
    number: "02",
    title: "A Forja do Método Previsível",
    subtitle: "Dados, cadência e autoridade",
    description:
      "Desenvolvimento de uma metodologia proprietária unindo inteligência de dados comerciais, cadência disciplinada de prospecção e narrativas de alto valor, transformando gargalos operacionais em máquinas de receita.",
  },
  {
    year: "Fase 03",
    number: "03",
    title: "Fundação do Estúdio Akedah",
    subtitle: "Infraestrutura de padrão internacional",
    description:
      "Materialização em São Paulo de um dos ecossistemas audiovisuais mais modernos e cinematográficos do Brasil, projetado para conceder às empresas e marcas a autoridade visual que o mercado de elite exige.",
  },
  {
    year: "Fase 04",
    number: "04",
    title: "Akedah Podcast & Expansão de Voz",
    subtitle: "Diálogos com referências nacionais",
    description:
      "Lançamento do Akedah Podcast, conectando empresários, líderes de mercado, personalidades e vozes de fé em conversas de alto nível sobre negócios, família, propósito e resiliência executiva.",
  },
  {
    year: "Fase 05",
    number: "05",
    title: "Mentorias & Presença Nacional",
    subtitle: "Conselho, convenções e ministrações",
    description:
      "Consolidação de uma marca pessoal que atua como referência em mentoria executiva, presença de palco em convenções corporativas e ministrações musicais em grandes eventos pelo país.",
  },
];

// Componente de etapa da linha do tempo
const TimelineItem = ({ step, idx }: { step: typeof DANIEL_TIMELINE_STEPS[0]; idx: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 20%"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0.2, 1, 1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 0.25], [30, 0]);
  const smoothY = useSpring(contentY, { stiffness: 60, damping: 20 });

  return (
    <div ref={containerRef} className="relative py-12 md:py-20">
      <motion.div
        style={{ opacity: contentOpacity, y: smoothY }}
        className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
          idx % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Ponto indicador com anel luminoso */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 items-center justify-center z-20">
          <div className="w-3 h-3 rounded-full bg-[var(--bege)] shadow-[0_0_16px_var(--bege)]" />
          <div className="absolute w-7 h-7 rounded-full border border-[var(--bege)]/30 animate-ping" />
        </div>

        {/* Número Gigante em Marca d'água */}
        <span
          className={`absolute font-display text-[90px] sm:text-[140px] md:text-[220px] font-black text-white/[0.04] leading-none pointer-events-none select-none z-0 ${
            idx % 2 === 0 ? "left-4 md:left-auto md:right-[52%]" : "left-4 md:left-[52%]"
          }`}
          aria-hidden="true"
        >
          {step.number}
        </span>

        {/* Card de Conteúdo */}
        <div
          className={`w-full md:w-[46%] relative z-10 p-8 sm:p-10 bg-white/[0.03] border border-white/10 backdrop-blur-[8px] ${
            idx % 2 === 0 ? "md:text-left" : "md:text-left"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[var(--bege)] text-fluid-12 uppercase tracking-widest font-mono font-bold">
              {step.year} • {step.subtitle}
            </span>
          </div>

          <h3 className="display--condensed text-fluid-44 text-[var(--off-white)] mb-4 tracking-tight leading-[0.92]">
            {step.title}
          </h3>

          <p className="font-lato text-fluid-16 text-[var(--off-white)]/80 leading-relaxed font-light">
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// ============================================================================
// 3. PÁGINA PRINCIPAL SOBRE MIM
// ============================================================================
const DanielSilvaAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.add("daniel-silva-theme");

    return () => {
      document.documentElement.classList.remove("daniel-silva-theme");
    };
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Silva",
    jobTitle: DANIEL_POSITIONING,
    description: `Trajetória e propósito de Daniel Silva: ${DANIEL_TAGLINE}`,
    url: "https://estudioakedah.com/daniel-silva/sobre",
  };

  return (
    <div className="min-h-screen bg-[var(--marinho)] text-[var(--off-white)] selection:bg-[var(--bege)] selection:text-[var(--marinho)] relative font-lato">
      <SEO
        title={`Sobre Mim | Daniel Silva · ${DANIEL_POSITIONING}`}
        description={`Conheça a trajetória, os princípios e o ecossistema de Daniel Silva. ${DANIEL_TAGLINE}`}
        url="https://estudioakedah.com/daniel-silva/sobre"
        schema={schema}
      />

      {/* Navbar Oficial com Tema Daniel Silva */}
      <Navbar isDanielSilvaPage={true} />

      <main className="relative z-10 overflow-x-clip">
        {/* ================================================================ */}
        {/* 1. HERO EDITORIAL DE ALTO IMPACTO ("QUEM É DANIEL SILVA")         */}
        {/* ================================================================ */}
        <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 border-b border-white/10 overflow-hidden">
          {/* Luz de ambiência institucional */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00388F]/30 rounded-full blur-[160px] pointer-events-none -z-10" />

          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Coluna Esquerda: Textos & Posicionamento Oficial */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Título Monumental (+40% maior) */}
                <h1 className="display--condensed text-fluid-130 sm:text-fluid-150 text-[var(--off-white)] leading-[0.86] tracking-[-0.03em] uppercase mb-6">
                  Daniel <span className="text-[var(--bege)]">Silva</span>
                </h1>

                {/* Assinatura Manuscrita Oficial */}
                <div className="mb-8">
                  <DanielSignature variant="gold" size="lg" />
                </div>

                {/* Tagline e Introdução */}
                <p className="font-lato text-fluid-20 text-[var(--off-white)]/90 leading-relaxed max-w-2xl mb-4 font-normal">
                  Mentor executivo, estrategista comercial e criador de conteúdo. Uma trajetória
                  construída no campo de batalha real de vendas, guiada pela convicção de que
                  negócios duradouros exigem método previsível, estética de elite e princípios
                  inabaláveis.
                </p>
              </div>

              {/* Coluna Direita: Retrato Cinematográfico Nobre */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full border border-white/15 overflow-hidden bg-black/40">
                  <img
                    src={danielPicture}
                    alt="Daniel Silva - Mentor, Empresário & Criador"
                    className="w-full h-full object-cover object-[center_12%]"
                    loading="eager"
                  />
                  {/* Gradiente de acabamento cinematográfico */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--marinho)]/90 via-transparent to-transparent opacity-80" />
                  
                  {/* Plaqueta de Assinatura */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-[var(--marinho)]/90 backdrop-blur-md border border-white/15">
                    <p className="display--condensed text-fluid-20 text-[var(--off-white)] tracking-wide uppercase">
                      Daniel Silva
                    </p>
                    <p className="font-lato text-fluid-12 text-[var(--bege)] uppercase tracking-[0.2em] font-semibold">
                      São Paulo, Brasil • Atuação Nacional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 2. FAIXA MARQUEE OFICIAL (TRANSIÇÃO DINÂMICA)                     */}
        {/* ================================================================ */}
        <DanielBrandMarquee />

        {/* ================================================================ */}
        {/* 3. O MANIFESTO / TESE CENTRAL ("UM SÓ PROPÓSITO")                 */}
        {/* ================================================================ */}
        <section className="py-24 md:py-36 border-b border-white/10 bg-[#001D4D]">
          <div className="container-editorial">
            <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
              <h2 className="font-lato uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.8rem] tracking-tight leading-[1.02] mb-10 text-center w-full">
                <span className="block font-black text-[var(--off-white)] whitespace-normal lg:whitespace-nowrap">
                  Não são três personas
                </span>
                <span className="block font-light text-[var(--bege)] tracking-wide mt-1 sm:mt-3 whitespace-normal lg:whitespace-nowrap">
                  É um só propósito
                </span>
              </h2>

              <blockquote className="font-lato italic font-light text-fluid-26 text-[var(--off-white)]/90 leading-relaxed mb-12 border-y border-white/10 py-8 max-w-3xl">
                "{DANIEL_TAGLINE}"
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left text-[var(--off-white)]/80 text-fluid-16 leading-relaxed font-light">
                <p>
                  No ambiente corporativo moderno, muitos separam vida pessoal, negócios e fé como
                  se fossem compartimentos isolados. Daniel Silva construiu sua trajetória provando
                  o oposto: a disciplina inegociável nos negócios é o mesmo fruto da firmeza moral e
                  espiritual que ele vive fora dos holofotes.
                </p>
                <p>
                  Da rigidez analítica de uma sala de reunião com grandes decisores à sensibilidade
                  de um violão em um altar de adoração, o fundamento é rigorosamente o mesmo:
                  autenticidade, padrão máximo de entrega e a convicção de que toda influência deve
                  servir a um propósito eterno.
                </p>
              </div>

              <div className="mt-12">
                <DanielSignature variant="white" size="md" />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 4. AS TRÊS DIMENSÕES DE ATUAÇÃO (OS PILARES ESTRUTURAIS)          */}
        {/* ================================================================ */}
        <section id="dimensoes" className="py-24 md:py-36 border-b border-white/10">
          <div className="container-editorial">
            {/* Cabeçalho da Seção */}
            <div className="text-center max-w-6xl mx-auto mb-20">
              <h2 className="font-lato uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.8rem] tracking-tight leading-[1.02] mb-6 text-center w-full">
                <span className="block font-black text-[var(--off-white)] whitespace-normal lg:whitespace-nowrap">
                  Três dimensões
                </span>
                <span className="block font-light text-[var(--bege)] tracking-wide mt-1 sm:mt-3 whitespace-normal lg:whitespace-nowrap">
                  Uma só voz
                </span>
              </h2>
              <p className="font-lato text-fluid-18 text-[var(--off-white)]/70 font-light leading-relaxed">
                Cada pilar representa uma esfera onde Daniel Silva aplica metodologia, liderança e
                excelência prática.
              </p>
            </div>

            {/* Grid dos 3 Cards Cinematográficos */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {DANIEL_DIMENSIONS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col bg-white/[0.02] border border-white/10 hover:border-[var(--bege)]/50 transition-all duration-500 overflow-hidden group"
                  >
                    {/* Imagem Autêntica de Vídeo */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={item.image}
                        alt={item.role}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--marinho)] via-transparent to-black/40 opacity-80" />
                      <div className="absolute bottom-4 right-4">
                        <span className="font-display font-black text-fluid-28 text-white/40">
                          {item.number}
                        </span>
                      </div>
                    </div>

                    {/* Conteúdo Editorial */}
                    <div className="p-8 sm:p-10 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3 text-[var(--bege)]">
                        <IconComponent className="w-5 h-5" />
                        <span className="text-fluid-12 uppercase tracking-[0.2em] font-bold">
                          {item.role}
                        </span>
                      </div>

                      <h3 className="display--condensed text-fluid-28 text-[var(--off-white)] mb-2 tracking-tight uppercase leading-[0.92]">
                        {item.title}
                      </h3>

                      <p className="font-lato text-fluid-14 text-[var(--bege)] font-medium leading-relaxed mb-4">
                        {item.tagline}
                      </p>

                      <p className="font-lato text-fluid-15 text-[var(--off-white)]/75 leading-relaxed font-light mb-8">
                        {item.description}
                      </p>

                      <div className="mt-auto pt-6 border-t border-white/10">
                        <p className="text-[var(--bege)] text-fluid-11 uppercase tracking-widest font-bold mb-4">
                          Campos de Atuação:
                        </p>
                        <ul className="space-y-2.5">
                          {item.deliverables.map((del, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2.5 text-fluid-13 text-[var(--off-white)]/80 font-light leading-snug"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[var(--bege)] shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 5. LINHA DO TEMPO DA TRAJETÓRIA (FORJADA NO CAMPO)                */}
        {/* ================================================================ */}
        <section id="trajetoria" className="py-24 md:py-36 border-b border-white/10 relative overflow-hidden">
          {/* Marca d'água monumental de fundo */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-[8%] font-display font-black text-white/[0.02] text-[18vw] leading-none pointer-events-none select-none tracking-tighter"
          >
            TRAJETÓRIA
          </span>

          <div className="container-editorial relative z-10">
            {/* Cabeçalho */}
            <div className="text-center max-w-6xl mx-auto mb-24">
              <h2 className="font-lato uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.8rem] tracking-tight leading-[1.02] mb-6 text-center w-full">
                <span className="block font-black text-[var(--off-white)] whitespace-normal lg:whitespace-nowrap">
                  Do campo de batalha
                </span>
                <span className="block font-light text-[var(--bege)] tracking-wide mt-1 sm:mt-3 whitespace-normal lg:whitespace-nowrap">
                  À liderança
                </span>
              </h2>
              <p className="font-lato text-fluid-18 text-[var(--off-white)]/70 font-light leading-relaxed">
                Nenhum título foi ganho no conforto da teoria. Cada marco reflete desafios reais de
                mercado, maturidade operacional e expansão estratégica.
              </p>
            </div>

            {/* Timeline com Guia Central */}
            <div className="relative max-w-5xl mx-auto">
              {/* Linha vertical divisória central */}
              <div
                className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--bege)] via-white/20 to-transparent"
                aria-hidden="true"
              />

              <div className="space-y-8 md:space-y-0">
                {DANIEL_TIMELINE_STEPS.map((step, idx) => (
                  <TimelineItem key={idx} step={step} idx={idx} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 6. TRANSIÇÃO EM FUNDO CLARO: ECOSSISTEMA & MÉTRICAS DE IMPACTO    */}
        {/* ================================================================ */}
        <section className="py-24 md:py-36 bg-[var(--off-white)] text-[var(--preto)] border-b border-black/10">
          <div className="container-editorial">
            {/* Header da Seção Claro */}
            <div className="max-w-4xl mb-16 text-left">
              <h2 className="display text-fluid-100 sm:text-fluid-110 text-[var(--preto)] uppercase mb-6 leading-[0.88]">
                Estrutura que Gera <span className="text-[var(--marinho)]">Resultado</span>
              </h2>
              <p className="font-lato text-fluid-18 text-[rgba(25,25,25,0.75)] font-normal leading-relaxed">
                Daniel Silva não atua isolado. Ele comanda um ecossistema integrado que reúne
                audiovisual cinematográfico, canal de mídia influente e consultoria estratégica.
              </p>
            </div>

            {/* 4 Cards de Métricas */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <div className="p-8 bg-black/[0.03] border border-black/10 flex flex-col justify-between">
                <div>
                  <p className="display--condensed text-fluid-44 text-[var(--marinho)] leading-none mb-2 tracking-tight">
                    364 mil+
                  </p>
                  <p className="font-lato font-bold text-fluid-12 uppercase tracking-widest text-[var(--preto)]">
                    Alcance Mensal
                  </p>
                </div>
                <p className="font-lato text-fluid-13 text-[rgba(25,25,25,0.6)] font-light mt-4 leading-snug">
                  Distribuição qualificada somando YouTube, Instagram, podcasts e LinkedIn.
                </p>
              </div>

              <div className="p-8 bg-black/[0.03] border border-black/10 flex flex-col justify-between">
                <div>
                  <p className="display--condensed text-fluid-44 text-[var(--marinho)] leading-none mb-2 tracking-tight">
                    5+ Anos
                  </p>
                  <p className="font-lato font-bold text-fluid-12 uppercase tracking-widest text-[var(--preto)]">
                    Prática Comercial
                  </p>
                </div>
                <p className="font-lato text-fluid-13 text-[rgba(25,25,25,0.6)] font-light mt-4 leading-snug">
                  Experiência direta em negociações consultivas e reestruturação de vendas.
                </p>
              </div>

              <div className="p-8 bg-black/[0.03] border border-black/10 flex flex-col justify-between">
                <div>
                  <p className="display--condensed text-fluid-44 text-[var(--marinho)] leading-none mb-2 tracking-tight">
                    3 Frentes
                  </p>
                  <p className="font-lato font-bold text-fluid-12 uppercase tracking-widest text-[var(--preto)]">
                    Ecossistema Ativo
                  </p>
                </div>
                <p className="font-lato text-fluid-13 text-[rgba(25,25,25,0.6)] font-light mt-4 leading-snug">
                  Estúdio Akedah, Akedah Podcast e a marca pessoal Daniel Silva.
                </p>
              </div>

              <div className="p-8 bg-black/[0.03] border border-black/10 flex flex-col justify-between">
                <div>
                  <p className="display--condensed text-fluid-44 text-[var(--marinho)] leading-none mb-2 tracking-tight">
                    100%
                  </p>
                  <p className="font-lato font-bold text-fluid-12 uppercase tracking-widest text-[var(--preto)]">
                    Fidelidade ao Método
                  </p>
                </div>
                <p className="font-lato text-fluid-13 text-[rgba(25,25,25,0.6)] font-light mt-4 leading-snug">
                  Processos orientados a princípios inegociáveis e métricas transparentes.
                </p>
              </div>
            </div>

            {/* Os 3 Braços do Ecossistema */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-black/10">
              <Link
                to="/"
                className="p-8 bg-white border border-black/10 hover:border-[var(--marinho)] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Building2 className="w-6 h-6 text-[var(--marinho)]" />
                    <ArrowUpRight className="w-5 h-5 text-black/40 group-hover:text-[var(--marinho)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="display--condensed text-fluid-28 text-[var(--preto)] mb-2 uppercase">
                    Estúdio Akedah
                  </h3>
                  <p className="font-lato text-fluid-14 text-[rgba(25,25,25,0.7)] font-light leading-relaxed">
                    Infraestrutura audiovisual cinematográfica em São Paulo com foco em autoridade de
                    marca, vídeos de escala e podcasts institucionais.
                  </p>
                </div>
                <span className="font-lato font-bold text-fluid-12 text-[var(--marinho)] uppercase tracking-wider mt-6 block">
                  Conhecer o Estúdio →
                </span>
              </Link>

              <Link
                to="/podcast"
                className="p-8 bg-white border border-black/10 hover:border-[var(--marinho)] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Radio className="w-6 h-6 text-[var(--marinho)]" />
                    <ArrowUpRight className="w-5 h-5 text-black/40 group-hover:text-[var(--marinho)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="display--condensed text-fluid-28 text-[var(--preto)] mb-2 uppercase">
                    Akedah Podcast
                  </h3>
                  <p className="font-lato text-fluid-14 text-[rgba(25,25,25,0.7)] font-light leading-relaxed">
                    O canal oficial de conversas e debates com líderes empresariais, mentores e vozes
                    influentes sobre estratégia, vida e integridade.
                  </p>
                </div>
                <span className="font-lato font-bold text-fluid-12 text-[var(--marinho)] uppercase tracking-wider mt-6 block">
                  Acessar o Podcast →
                </span>
              </Link>

              <Link
                to="/daniel-silva"
                className="p-8 bg-white border border-black/10 hover:border-[var(--marinho)] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Award className="w-6 h-6 text-[var(--marinho)]" />
                    <ArrowUpRight className="w-5 h-5 text-black/40 group-hover:text-[var(--marinho)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="display--condensed text-fluid-28 text-[var(--preto)] mb-2 uppercase">
                    Marca Pessoal
                  </h3>
                  <p className="font-lato text-fluid-14 text-[rgba(25,25,25,0.7)] font-light leading-relaxed">
                    A página inicial da experiência cinematográfica de Daniel Silva, com agenda
                    pública, marcas parceiras e posicionamento oficial.
                  </p>
                </div>
                <span className="font-lato font-bold text-fluid-12 text-[var(--marinho)] uppercase tracking-wider mt-6 block">
                  Ver Experiência Completa →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* 7. FAIXA MARQUEE OFICIAL (TRANSIÇÃO PARA CONTATO)                 */}
        {/* ================================================================ */}
        <DanielBrandMarquee />

        {/* ================================================================ */}
        {/* 8. CONEXÃO OFICIAL & ASSESSORIA (CALL TO ACTION)                  */}
        {/* ================================================================ */}
        <DanielContactSection />
      </main>

      {/* Rodapé Oficial do Ecossistema */}
      <Footer />
    </div>
  );
};

export default DanielSilvaAbout;
