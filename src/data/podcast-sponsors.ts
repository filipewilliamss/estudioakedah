import logoEstudioAkedah from "@/assets/patrocinadores/logo-estudio-akedah.png";
import logoDunamis from "@/assets/patrocinadores/dunamis.svg";
import logoFecar from "@/assets/patrocinadores/logo-fecar.png";
import logoTabernaculo from "@/assets/patrocinadores/logo-tabernaculo.png";
import logoHorizontalSimbolo from "@/assets/patrocinadores/logo-horizontal-simbolo.png";
interface SponsorDetail {
  id: string;
  number: string;
  category: string;
  titleLine1: string; // Linha 1: PerfectCorporate Black
  titleLine2: string; // Linha 2: Fonte Podcast
  description: string;
  highlights: string[];
  logo: string;
  logoAlt: string;
  logoSizeClass: string;
  instagramUrl: string;
}

// 5 Patrocinadores Oficiais com dados detalhados para o Card 2 (Slider Horizontal)
export const sponsorsData: SponsorDetail[] = [
  {
    id: "estudio-akedah",
    number: "01",
    category: "INFRAESTRUTURA & PRODUÇÃO 4K HDR",
    titleLine1: "Estúdio Akedah",
    titleLine2: "Produção & Infraestrutura",
    description:
      "Estúdio de alta performance para gravações corporativas, podcasts em 4K HDR e produções audiovisuais cinematográficas. Infraestrutura técnica de ponta, isolamento acústico broadcast, ilhas dedicadas de edição rápida e curadoria estratégica para grandes marcas e líderes do mercado.",
    highlights: [
      "Transmissão e gravação multicâmera em 4K HDR Cinema",
      "Mesa de áudio com microfones Shure SM7B Broadcast",
      "Ilha dedicada para extração de cortes virais em tempo real",
    ],
    logo: logoEstudioAkedah,
    logoAlt: "Estúdio Akedah",
    logoSizeClass:
      "max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px]",
    instagramUrl: "https://www.instagram.com/estudioakedah",
  },
  {
    id: "dunamis",
    number: "02",
    category: "LIDERANÇA GLOBAL & TRANSFORMAÇÃO",
    titleLine1: "Dunamis",
    titleLine2: "Movimento & Transformação",
    description:
      "Movimento global de impacto cultural e liderança, focado em capacitar e despertar uma geração para estabelecer princípios inegociáveis, transformação social contínua e relevância no ecossistema de trabalho, negócios e sociedade.",
    highlights: [
      "Conferências e convenções de grande escala internacional",
      "Programas contínuos de desenvolvimento de liderança e mentoria",
      "Projetos educacionais e culturais com impacto contínuo",
    ],
    logo: logoDunamis,
    logoAlt: "Dunamis Movement",
    logoSizeClass:
      "max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[460px]",
    instagramUrl: "https://www.instagram.com/dunamismovement",
  },
  {
    id: "fecar",
    number: "03",
    category: "VEÍCULOS DE LUXO & CORPORATIVOS",
    titleLine1: "FE-CAR Multimarcas",
    titleLine2: "Veículos & Procedência",
    description:
      "Com sólida credibilidade no segmento automotivo premium e corporativo, a FE-CAR Multimarcas entrega curadoria rigorosa de procedência, pós-venda exemplar e assessoria completa em frotas executivas e veículos de altíssimo padrão com garantia total.",
    highlights: [
      "Curadoria rigorosa de procedência com laudo pericial aprovado",
      "Assessoria VIP para compras corporativas e veículos executivos",
      "Atendimento exclusivo e suporte integral de pós-venda",
    ],
    logo: logoFecar,
    logoAlt: "FE-CAR Multimarcas",
    logoSizeClass:
      "max-w-[300px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px]",
    instagramUrl: "https://www.instagram.com/fecarmultimarcas",
  },
  {
    id: "tabernaculo",
    number: "04",
    category: "AÇÃO SOCIAL, FÉ & DESENVOLVIMENTO",
    titleLine1: "Tabernáculo",
    titleLine2: "Da Trindade",
    description:
      "Fundamentada em princípios inegociáveis de fé, integridade e acolhimento familiar, a instituição lidera projetos humanitários de grande alcance, formação de valores éticos e iniciativas comunitárias contínuas de transformação e suporte familiar.",
    highlights: [
      "Ações sociais e iniciativas humanitárias de suporte a famílias",
      "Formação de princípios éticos, caráter e integridade geracional",
      "Espaços de acolhimento, desenvolvimento comunitário e voluntariado",
    ],
    logo: logoTabernaculo,
    logoAlt: "Tabernáculo da Trindade",
    logoSizeClass:
      "max-w-[300px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px]",
    instagramUrl: "https://www.instagram.com/tabernaculodatrindade",
  },
  {
    id: "studio",
    number: "05",
    category: "ENGENHARIA DE ÁUDIO & SOUND DESIGN",
    titleLine1: "Studio Akedah",
    titleLine2: "Engenharia de Som",
    description:
      "Engenharia sonora avançada, produção musical, pós-produção acústica e identidade auditiva corporativa. Criação de trilhas originais, mixagem e masterização para produções de altíssimo padrão com equipamentos analógicos e digitais de padrão internacional.",
    highlights: [
      "Tratamento acústico de sala calibrado para máxima fidelidade sonora",
      "Mixagem e masterização de áudio para streaming e cinema 4K",
      "Criação de identidade sonora corporativa e sound design exclusivo",
    ],
    logo: logoHorizontalSimbolo,
    logoAlt: "Studio Akedah",
    logoSizeClass:
      "max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px]",
    instagramUrl: "https://www.instagram.com/estudioakedah",
  },
];
