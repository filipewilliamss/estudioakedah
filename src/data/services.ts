import socialMediaImg from "@/assets/svc-social-media.jpg";
import trafegoPagoImg from "@/assets/svc-trafego-pago.jpg";
import videosEmLoteImg from "@/assets/svc-videos-em-lote.jpg";
import cursosImg from "@/assets/svc-cursos.jpg";

export interface ServiceBlockItem {
  title: string;
  description: string;
}

export interface AkedahService {
  id: string;
  slug: string;
  number: string;
  name: string;
  /** Short label used on cards */
  tagline: string;
  eyebrow: string;
  /** Hero headline split in lines */
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  image: string;
  /** bullets shown on the home cards */
  highlights: string[];
  problemTitle: string;
  problems: ServiceBlockItem[];
  processTitle: string;
  process: ServiceBlockItem[];
  deliverablesTitle: string;
  deliverables: ServiceBlockItem[];
  fitTitle: string;
  fit: ServiceBlockItem[];
  stats: { value: string; label: string }[];
  testimonial: { quote: string; name: string; role: string };
  ctaTitle: string;
  ctaText: string;
}

export const services: AkedahService[] = [
  {
    id: "social-media",
    slug: "social-media",
    number: "01",
    name: "Social Media",
    tagline: "Conteúdo com intenção comercial, pensado para gerar leads e conversas qualificadas.",
    eyebrow: "Social Media Comercial",
    heroTitle: "Conteúdo que gera",
    heroHighlight: "reuniões.",
    heroSubtitle:
      "Seu social media precisa mover o comercial, não só publicar. Medimos em leads e reuniões geradas, não em curtidas.",
    image: socialMediaImg,
    highlights: [
      "Mapeamento do ICP e da jornada de compra",
      "Calendário editorial mensal",
      "Criação de conteúdo e artes",
      "Publicação e gestão das redes",
      "Relatório de leads e oportunidades geradas",
    ],
    problemTitle: "Faz sentido para você se...",
    problems: [
      {
        title: "Você fatura entre R$200K e R$500K por mês",
        description: "Tem operação estruturada e quer usar o conteúdo para escalar o comercial.",
      },
      {
        title: "Seu time comercial reclama de falta de leads",
        description: "O produto é bom, o serviço funciona. As pessoas certas simplesmente não chegam até você.",
      },
      {
        title: "Paga social media e não sabe o que gerou",
        description: "Relatório de alcance e engajamento, mas nenhuma venda conectada ao canal.",
      },
      {
        title: "Margem apertada, cada real precisa retornar",
        description: "Sem espaço para investimento sem retorno mensurável.",
      },
      {
        title: "Quer conteúdo que posicione, não só que publique",
        description: "A diferença entre aparecer e ser encontrado pelo cliente certo está na estratégia.",
      },
    ],
    processTitle: "Como funciona",
    process: [
      {
        title: "Leitura comercial",
        description: "Entendemos seu ciclo de venda e perfil de cliente antes de produzir qualquer conteúdo.",
      },
      {
        title: "Estratégia e aprovação",
        description:
          "Apresentamos o calendário e os objetivos de cada publicação. Você aprova antes de qualquer entrega.",
      },
      {
        title: "Execução e medição",
        description:
          "Publicamos, monitoramos e entregamos relatório mensal focado em leads e reuniões. Ajustamos todo mês.",
      },
    ],
    deliverablesTitle: "O que você recebe",
    deliverables: [
      {
        title: "Estratégia de conteúdo",
        description: "Planejamento baseado no seu processo de venda. Cada peça serve ao comercial.",
      },
      {
        title: "Calendário editorial mensal",
        description: "Você sabe o que vai ao ar, quando e com qual objetivo comercial.",
      },
      {
        title: "Criação de conteúdo",
        description: "Copy, arte e roteiro produzidos internamente. Identidade alinhada ao seu posicionamento.",
      },
      {
        title: "Publicação e gestão",
        description: "Agendamento, publicação e monitoramento. Você foca na operação.",
      },
      {
        title: "Captação de leads no canal",
        description: "CTA estratégico em cada publicação. O conteúdo convida o prospecto certo a dar o próximo passo.",
      },
      {
        title: "Relatório de leads e reuniões",
        description: "Sem relatório de alcance. Só o que importa: leads chegados e reuniões geradas.",
      },
    ],
    fitTitle: "Sem métricas de vaidade",
    fit: [
      {
        title: "Foco em oportunidade real",
        description: "Tudo o que seu comercial precisa, sem indicadores que não viram receita.",
      },
      {
        title: "Consultoria de processos incluída",
        description: "A leitura do processo comercial está embutida na contratação, não é vendida à parte.",
      },
    ],
    stats: [
      { value: "R$132K", label: "déficit revertido em 8 meses com conteúdo posicionado" },
      { value: "30 dias", label: "para a primeira reunião qualificada gerada pelo canal" },
      { value: "5+ anos", label: "de mercado em estratégia comercial" },
    ],
    testimonial: {
      quote:
        "Antes eu tinha social media que publicava todo dia. Não chegava nenhum lead pelo canal. Depois que a Akedah entrou, a primeira reunião qualificada veio em menos de 30 dias. Hoje o conteúdo é parte do nosso funil.",
      name: "Márcio A.",
      role: "Diretor Comercial, setor de serviços B2B",
    },
    ctaTitle: "Chega de social media que não fecha negócio.",
    ctaText: "Uma conversa direta sobre o que faz sentido para a sua empresa.",
  },
  {
    id: "trafego-pago",
    slug: "trafego-pago",
    number: "02",
    name: "Gestão de Tráfego pago",
    tagline: "Campanhas para ampliar uma operação que já sabe vender e precisa de mais demanda.",
    eyebrow: "Meta Ads + Google Ads",
    heroTitle: "Tráfego pago que realmente",
    heroHighlight: "converte.",
    heroSubtitle:
      "Campanhas, criativos e acompanhamento para gerar demanda com clareza do que acontece depois do clique.",
    image: trafegoPagoImg,
    highlights: [
      "Auditoria do processo comercial antes dos anúncios",
      "Gestão de campanhas Meta Ads e Google Ads",
      "Criação de criativos e copys",
      "Relatórios reais com métricas de resultado",
      "Otimização contínua das campanhas",
    ],
    problemTitle: "Por que a maioria dos anúncios não converte",
    problems: [
      {
        title: "Sem processo comercial",
        description:
          "O anúncio traz o lead. O lead chega. Não tem quem responda rápido, não tem roteiro, não tem follow-up. O tráfego funciona, a venda não.",
      },
      {
        title: "Oferta errada no anúncio",
        description:
          "O negócio sabe o que vende, mas não sabe como comunicar de forma que pare o scroll. A oferta existe, mas não é clara para quem está lá fora.",
      },
      {
        title: "Público mal segmentado",
        description:
          "Anúncios para todo mundo convertem para ninguém. Sem definir o cliente ideal, o algoritmo queima verba com quem nunca vai comprar.",
      },
      {
        title: "Sem acompanhamento real",
        description:
          "Gestão de tráfego não é subir campanha e esperar. É otimizar semana a semana com base em dados, sem isso o dinheiro some devagar.",
      },
    ],
    processTitle: "Primeiro estrutura. Depois tráfego.",
    process: [
      {
        title: "Leitura do funil comercial",
        description: "Entendemos como os leads chegam, quem atende e onde a conversão costuma travar.",
      },
      {
        title: "Estruturação e alinhamento",
        description:
          "Com o processo revisado, definimos oferta, público, canais e metas realistas. Cada real investido tem destino claro.",
      },
      {
        title: "Gestão e escala com dados",
        description:
          "Campanhas no ar, acompanhamento semanal, otimizações constantes. O que funciona escala. O que não funciona, para.",
      },
    ],
    deliverablesTitle: "O que você recebe",
    deliverables: [
      {
        title: "Gestão de campanhas Meta Ads",
        description:
          "Segmentação, criativos e otimização contínua no Facebook e Instagram. Estratégia de funil do awareness à conversão.",
      },
      {
        title: "Gestão de campanhas Google Ads",
        description:
          "Search, Display e Performance Max para capturar quem já está buscando o que você vende. Foco em intenção de compra real.",
      },
      {
        title: "Criativos para performance",
        description:
          "Roteiros e orientação de produção focados em conversão. Criativos que param o scroll e direcionam para ação.",
      },
      {
        title: "Relatórios diretos",
        description:
          "Relatório semanal com o que importa: custo por lead, custo por venda, ROAS e próximo passo. Sem métricas de vaidade.",
      },
      {
        title: "Alinhamento inicial do funil",
        description: "Antes de escalar verba, alinhamos campanha, oferta e fluxo de atendimento para reduzir perda de lead.",
      },
      {
        title: "Otimização semanal",
        description:
          "Revisão semanal de números, ajuste de criativos e redistribuição de verba. Decisão rápida, sem esperar o mês fechar.",
      },
    ],
    fitTitle: "Para quem faz sentido",
    fit: [
      {
        title: "Faturamento entre R$200K e R$500K por mês",
        description: "Com equipe comercial funcionando e vontade de escalar com consistência.",
      },
      {
        title: "Disposição para revisar o processo",
        description: "Antes de colocar mais dinheiro em anúncios, o funil precisa estar alinhado.",
      },
      {
        title: "Clareza acima de relatório bonito",
        description: "Você quer saber o que os anúncios entregam de verdade, mesmo quando a resposta é inconveniente.",
      },
      {
        title: "Não é para quem quer resultado sem mudar nada",
        description: "Se não há equipe ou tempo para atender o volume gerado, o tráfego não resolve.",
      },
    ],
    stats: [
      { value: "R$132K", label: "déficit revertido em operação comercial" },
      { value: "5 meses", label: "de déficit a lucro operacional" },
      { value: "Semanal", label: "ritmo de otimização das campanhas" },
    ],
    testimonial: {
      quote:
        "A Akedah foi a primeira empresa que chegou e disse que não ia subir anúncio nenhum antes de entender como a gente vendia. No início achei estranho. Depois entendi que era justamente isso que faltava. Hoje temos volume de leads que a equipe consegue atender e fechar.",
      name: "Diretor Comercial",
      role: "Empresa de serviços B2B, São Paulo",
    },
    ctaTitle: "Tráfego pago com processo alinhado.",
    ctaText:
      "Uma conversa direta para entender oferta, canais, verba e o caminho mais claro para gerar demanda.",
  },
  {
    id: "videos-em-lote",
    slug: "videos-em-lote",
    number: "03",
    name: "Sessão de vídeos",
    tagline: "Pauta, gravação e edição para transformar uma sessão mensal em presença constante.",
    eyebrow: "Sessões de Vídeo em Lote",
    heroTitle: "Grave uma vez. Apareça por",
    heroHighlight: "1 mês.",
    heroSubtitle: "Uma sessão mensal de gravação. Conteúdo publicado toda semana. Você aparece, a equipe faz o resto.",
    image: videosEmLoteImg,
    highlights: [
      "Pauta estratégica com foco em geração de leads",
      "Direção e gravação em set profissional",
      "Edição profissional com identidade visual",
      "Legendas e adaptações por formato",
      "Programação e publicação nas redes",
    ],
    problemTitle: "Quem some das redes não some por falta de vontade",
    problems: [
      {
        title: "A agenda não perdoa",
        description:
          "Entre atendimentos, reuniões e gestão da equipe, gravar um vídeo passa direto para o final da fila, toda semana.",
      },
      {
        title: "Postar uma vez não basta",
        description:
          "Consistência é o que transforma presença digital em resultado comercial. Aparecer esporadicamente não cria autoridade.",
      },
      {
        title: "Produzir consome mais do que parece",
        description:
          "Pauta, gravação, edição, legenda, publicação. São horas que você não tem para dar a algo que não é o seu negócio principal.",
      },
      {
        title: "O conteúdo precisa vender, não só aparecer",
        description:
          "Views sem estratégia comercial são vaidade. O que importa é conteúdo que atrai o cliente certo e move a conversa para o fechamento.",
      },
    ],
    processTitle: "Quatro etapas. Uma gravação. Um mês no ar.",
    process: [
      {
        title: "Pauta estratégica",
        description: "Temas definidos com base no seu mercado e no que gera resultado comercial.",
      },
      {
        title: "Sessão de gravação",
        description: "Você aparece. Nós conduzimos roteiro, direção e gravação do mês.",
      },
      {
        title: "Edição profissional",
        description: "Corte, trilha, legendas e identidade visual. Cada vídeo pronto para publicar.",
      },
      {
        title: "Publicação e acompanhamento",
        description: "Programamos, publicamos e enviamos relatório mensal. Zero prazo na sua cabeça.",
      },
    ],
    deliverablesTitle: "Tudo que precisa. Nada que sobra.",
    deliverables: [
      {
        title: "Pautas mensais",
        description:
          "Temas definidos com estratégia comercial. Cada pauta tem objetivo claro: atrair, educar ou converter o cliente certo.",
      },
      {
        title: "Gravação mensal em lote",
        description: "Estrutura para gravar o conteúdo do mês em uma sessão objetiva.",
      },
      {
        title: "Edição profissional",
        description: "Cortes, trilha, identidade visual e ritmo. Sem parecer improviso amador.",
      },
      {
        title: "Legendas e acessibilidade",
        description: "Legendas revisadas manualmente. Conteúdo que funciona com e sem som.",
      },
      {
        title: "Programação e publicação",
        description: "Calendário editorial executado por nós. Nenhum prazo na sua cabeça.",
      },
      {
        title: "Relatório de performance",
        description: "Dados mensais objetivos: alcance, engajamento e o que importa para o seu comercial.",
      },
    ],
    fitTitle: "Você tem algo a dizer. Não tem tempo de produzir.",
    fit: [
      {
        title: "Médicos e profissionais de saúde",
        description: "Agenda cheia e um público que confia em quem aparece com consistência.",
      },
      {
        title: "Advogados e escritórios jurídicos",
        description: "Conteúdo que educa o cliente antes da consulta e posiciona o escritório como referência.",
      },
      {
        title: "Contadores e consultores financeiros",
        description: "Temas técnico-práticos que geram confiança e diferenciam no mercado.",
      },
      {
        title: "Empresários com equipe e operação",
        description: "Empresas que querem presença digital proporcional ao tamanho do negócio.",
      },
    ],
    stats: [
      { value: "1", label: "sessão mensal com direção e roteiro" },
      { value: "30+", label: "dias de conteúdo planejado por ciclo mensal" },
      { value: "0", label: "horas extras do cliente com produção semanal" },
    ],
    testimonial: {
      quote:
        "Eu nunca tinha conseguido manter uma presença consistente nas redes. Com a Akedah gravei uma vez no mês e meu Instagram seguiu com conteúdo toda semana. Os pacientes começaram a chegar já me conhecendo.",
      name: "Dra. Fernanda Costa",
      role: "Médica, Clínica Médica",
    },
    ctaTitle: "Grave uma vez. Apareça o mês inteiro.",
    ctaText: "Um serviço mensal para manter presença sem encaixar gravação toda semana na agenda.",
  },
  {
    id: "cursos-e-treinamentos",
    slug: "cursos-e-treinamentos",
    number: "04",
    name: "Cursos e Treinamentos",
    tagline: "Estrutura para vender conhecimento ou treinar equipes com método e clareza.",
    eyebrow: "Cursos e Treinamentos",
    heroTitle: "Cursos e treinamentos",
    heroHighlight: "sob medida.",
    heroSubtitle:
      "Organizamos o conteúdo, gravamos as aulas e entregamos uma estrutura clara para vender, treinar ou padronizar sua equipe.",
    image: cursosImg,
    highlights: [
      "Definição do formato: infoproduto ou treinamento interno",
      "Roteiro e estrutura de conteúdo",
      "Gravação e edição dos módulos",
      "Configuração de plataforma e entrega",
      "Materiais de apoio e trilha de aprendizado",
    ],
    problemTitle: "Dois formatos. Um trabalho bem feito.",
    problems: [
      {
        title: "Curso ou infoproduto",
        description:
          "Seu método organizado em aulas, materiais e plataforma. Roteiro, gravação, edição e publicação.",
      },
      {
        title: "Treinamento interno",
        description:
          "Processo da empresa registrado para onboarding, vendas e operação. Mais clareza para quem entra e para quem lidera.",
      },
    ],
    processTitle: "Da ideia ao material pronto.",
    process: [
      { title: "Mapeamento", description: "Definimos objetivo, público e formato." },
      { title: "Estrutura", description: "Módulos, aulas e roteiro sem excesso." },
      { title: "Produção", description: "Direção, gravação e edição com identidade." },
      { title: "Entrega", description: "Arquivos, acesso e plataforma prontos para uso." },
    ],
    deliverablesTitle: "O essencial, bem resolvido.",
    deliverables: [
      { title: "Roteiro completo", description: "Aulas com objetivo, ordem e clareza." },
      { title: "Gravação e direção", description: "Direção para gravar com segurança." },
      { title: "Edição profissional", description: "Corte, legenda e identidade visual." },
      { title: "Plataforma configurada", description: "Módulos, acessos e organização de entrega." },
      { title: "Materiais de apoio", description: "PDFs, checklists e materiais complementares." },
      { title: "Entrega com prazo", description: "Cronograma claro do início à entrega." },
    ],
    fitTitle: "Faz sentido quando existe método.",
    fit: [
      { title: "Existe conhecimento claro", description: "O conteúdo existe na prática, só precisa virar estrutura." },
      { title: "A operação já funciona", description: "Há rotina, equipe e processo para organizar." },
      { title: "Treinar virou retrabalho", description: "O treinamento precisa ficar na empresa." },
      {
        title: "O conhecimento pode virar produto",
        description: "Um curso bem montado vende sem consumir sua agenda toda.",
      },
    ],
    stats: [
      { value: "+80", label: "projetos entregues" },
      { value: "+5", label: "anos de operação" },
      { value: "R$200K", label: "perfil de empresa atendida" },
    ],
    testimonial: {
      quote:
        "A Akedah pegou o que estava solto na minha cabeça e transformou em um produto claro. Gravei com direção, recebi tudo editado e consegui vender sem parar a operação.",
      name: "Ricardo M.",
      role: "Consultor comercial, SP",
    },
    ctaTitle: "Vamos tirar esse projeto do papel?",
    ctaText: "Uma conversa curta para entender formato, prazo e próximos passos.",
  },
];

export const getServiceBySlug = (slug?: string) => services.find((s) => s.slug === slug);

export const WHATSAPP_URL = "https://wa.me/5511991076096";
export const AKEDAH_EMAIL = "contato@akedah.com.br";
