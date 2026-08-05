/**
 * Plain-text mirror of the site's public content, used by the MCP tools.
 * Kept free of asset imports so it can be bundled for the Edge Function.
 */

export const SITE_URL = "https://akedah.com.br";
export const AKEDAH_EMAIL = "contato@akedah.com.br";
export const WHATSAPP_URL = "https://wa.me/5511991076096";

export interface McpService {
  slug: string;
  name: string;
  tagline: string;
  eyebrow: string;
  highlights: string[];
  url: string;
}

export const services: McpService[] = [
  {
    slug: "social-media",
    name: "Social Media",
    tagline:
      "Conteúdo com intenção comercial, pensado para gerar leads e conversas qualificadas.",
    eyebrow: "Social Media Comercial",
    highlights: [
      "Mapeamento do ICP e da jornada de compra",
      "Calendário editorial mensal",
      "Criação de conteúdo e artes",
      "Publicação e gestão das redes",
      "Relatório de leads e oportunidades geradas",
    ],
    url: `${SITE_URL}/servicos/social-media`,
  },
  {
    slug: "trafego-pago",
    name: "Tráfego Pago",
    tagline:
      "Campanhas para ampliar uma operação que já sabe vender e precisa de mais demanda.",
    eyebrow: "Meta Ads + Google Ads",
    highlights: [
      "Estruturação de campanhas em Meta Ads e Google Ads",
      "Definição de públicos e criativos",
      "Otimização contínua por custo por lead",
      "Acompanhamento de conversões",
    ],
    url: `${SITE_URL}/servicos/trafego-pago`,
  },
  {
    slug: "videos-em-lote",
    name: "Vídeos em Lote",
    tagline:
      "Pauta, gravação e edição para transformar uma sessão mensal em presença constante.",
    eyebrow: "Sessões de Vídeo em Lote",
    highlights: [
      "Roteiro e pauta dos vídeos",
      "Uma sessão mensal de gravação",
      "Edição e entrega semanal",
      "Conteúdo pensado para o comercial",
    ],
    url: `${SITE_URL}/servicos/videos-em-lote`,
  },
  {
    slug: "cursos-e-treinamentos",
    name: "Cursos e Treinamentos",
    tagline:
      "Estrutura para vender conhecimento ou treinar equipes com método e clareza.",
    eyebrow: "Cursos e Treinamentos",
    highlights: [
      "Desenho da grade e dos módulos",
      "Estrutura de aulas e materiais",
      "Preparação para gravação",
      "Plano de lançamento ou treinamento interno",
    ],
    url: `${SITE_URL}/servicos/cursos-e-treinamentos`,
  },
];

export interface McpCase {
  slug: string;
  title: string;
  client: string;
  subtitle: string;
  url: string;
}

export const cases: McpCase[] = [
  {
    slug: "akedah-podcast",
    title: "Akedah Podcast",
    client: "Akedah Podcast",
    subtitle:
      "Identidade visual para um podcast cristão que une profundidade, autenticidade e propósito em cada conversa.",
    url: `${SITE_URL}/projeto/akedah-podcast`,
  },
  {
    slug: "construmar",
    title: "Construmar",
    client: "Construmar",
    subtitle:
      "Identidade visual estratégica para uma marmoraria que une tradição, precisão e sofisticação.",
    url: `${SITE_URL}/projeto/construmar`,
  },
  {
    slug: "tabernaculo-da-trindade",
    title: "Tabernáculo da Trindade",
    client: "Igreja Tabernáculo da Trindade",
    subtitle: "Manual de Identidade Visual para a Igreja Tabernáculo da Trindade.",
    url: `${SITE_URL}/projeto/tabernaculo-da-trindade`,
  },
  {
    slug: "team-luisa-crosstraining",
    title: "Team Luísa Crosstraining",
    client: "Team Luísa Crosstraining",
    subtitle:
      "Rebranding dinâmico para uma comunidade de cross training que valoriza força, energia e união.",
    url: `${SITE_URL}/projeto/team-luisa-crosstraining`,
  },
];

export const method = [
  {
    stage: "01 Diagnóstico",
    description:
      "Entendimento profundo da operação, dos números e de onde o crescimento está travando.",
  },
  {
    stage: "02 Posicionamento",
    description:
      "Clareza sobre o que a empresa vende, para quem vende e por que é a melhor escolha.",
  },
  {
    stage: "03 Plano Estratégico",
    description: "Metas, métricas e etapas definidas — sem improviso e sem palpite.",
  },
  {
    stage: "04 Execução",
    description:
      "Marketing e comercial conectados, rodando com responsáveis e prazos claros.",
  },
  {
    stage: "05 Autonomia",
    description:
      "A empresa passa a operar o próprio crescimento com previsibilidade.",
  },
];

export const about = {
  name: "Estúdio Akedah",
  positioning:
    "Estúdio Akedah de Soluções e Estratégias Comerciais para empresas consolidadas que querem crescer com inteligência.",
  founder: "Daniel Silva",
  coverage: "Atendendo em todo o Brasil",
  aboutUrl: `${SITE_URL}/sobre`,
  podcastUrl: `${SITE_URL}/podcast`,
};
