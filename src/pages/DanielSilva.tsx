import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import founderPicture from "@/assets/akedah-founder.jpg";
import { WHATSAPP_URL, AKEDAH_EMAIL } from "@/data/services";

// Agenda Pública - Seção 1 (Fundo Azul Marinho - 2 primeiras datas)
const agendaSecao1 = [
  {
    data: "18/09",
    titulo: "CONVENÇÃO NACIONAL DE VENDAS B2B",
    subtitulo: "São Paulo, SP • 19h30 • Palestra Magna",
    formato: "Palestra",
    link: WHATSAPP_URL,
  },
  {
    data: "25/09",
    titulo: "IMERSÃO EXECUTIVA: ESCALA & GOVERNANÇA",
    subtitulo: "Barueri, SP • 14h00 • Imersão Executiva",
    formato: "Imersão",
    link: WHATSAPP_URL,
  },
];

// Agenda Pública - Seção 2 (Fundo Branco - 3 datas restantes)
const agendaSecao2 = [
  {
    data: "03/10",
    titulo: "FÓRUM DE LIDERANÇA, NEGÓCIOS & PRINCÍPIOS",
    subtitulo: "Belo Horizonte, MG • 20h00 • Palestra",
    formato: "Palestra",
    link: WHATSAPP_URL,
  },
  {
    data: "12/10",
    titulo: "NOITE DE LOUVOR, PALAVRA & PROPÓSITO",
    subtitulo: "Curitiba, PR • 19h00 • Ministração & Adoração",
    formato: "Ministração",
    link: WHATSAPP_URL,
  },
  {
    data: "22/10",
    titulo: "PAINEL FÉ & NEGÓCIOS DE IMPACTO",
    subtitulo: "Rio de Janeiro, RJ • 20h30 • Encontro com Líderes",
    formato: "Encontro Executivo",
    link: WHATSAPP_URL,
  },
];

// Componente que aplica animação de surgimento com desfoque alto associada ao scroll
const ScrollBlurItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center 50%"],
  });

  // Começa com desfoque alto (24px) e opacidade reduzida; ao atingir o centro da viewport fica totalmente nítido (0px e opacidade 1)
  const blurVal = useTransform(scrollYProgress, [0, 0.7, 1], [24, 4, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.15, 0.65, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [32, 0]);
  const filter = useTransform(blurVal, (v) => (v <= 0.2 ? "none" : `blur(${v.toFixed(1)}px)`));

  return (
    <motion.div
      ref={ref}
      style={{
        filter,
        opacity,
        y,
        willChange: "filter, opacity, transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const DanielSilva = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Silva",
    jobTitle: "Estrategista de Negócios, Mentor Executivo e Palestrante",
    description: "Site oficial de Daniel Silva: posicionamento estratégico, governança comercial, mentorias, fé, música e palestras.",
    url: "https://estudioakedah.com/daniel-silva",
  };

  return (
    <div className="min-h-screen bg-[#07132B] text-white selection:bg-white selection:text-[#07132B] relative font-sans">
      <SEO
        title="Daniel Silva | Estratégia de Negócios, Mentorias & Posicionamento"
        description="Site oficial de Daniel Silva: palestras, agenda pública de eventos, empreendedorismo, fé, música e contato para contratações."
        url="https://estudioakedah.com/daniel-silva"
        schema={schema}
      />
      <Navbar isDanielSilvaPage={true} />

      <main className="relative z-10 overflow-hidden">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (MODELO IMAGEM 1)                                        */}
        {/* ========================================================================= */}
        <section className="relative min-h-[92vh] md:min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-transparent pt-28 pb-16">
          {/* Fundo com Fotografia em Chiaroscuro e Degradês */}
          <div className="absolute inset-0 z-0">
            <img 
              src={founderPicture} 
              alt="Daniel Silva" 
              className="w-full h-full object-cover object-top opacity-45 filter grayscale contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-[#07132B]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-[#07132B]/50" />
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-3xl pointer-events-none" />
          </div>

          <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex justify-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-left flex flex-col items-start"
            >
              {/* Badge Superior */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <span className="text-white/80 border border-white/20 px-4 py-1.5 rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.35em] font-mono font-bold bg-[#0B1B3D]/50 backdrop-blur-sm">
                  ESTRATÉGIA DE NEGÓCIOS • POSICIONAMENTO
                </span>
              </div>

              {/* Título Principal */}
              <h1 className="font-display text-[58px] sm:text-[80px] md:text-[104px] font-[900] leading-[0.88] tracking-[-0.04em] mb-8">
                <span className="block text-white">Daniel</span>
                <span className="text-white/80 italic font-normal block">Silva</span>
              </h1>

              {/* Descrição Editorial */}
              <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl text-left mb-10 font-normal">
                Construção de tração em marcas de alto valor e liderança executiva. Conectando princípios sólidos de fé, visão empreendedora e sensibilidade artística para transformar vidas e empresas.
              </p>

              {/* Botões de Ação do Hero */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#agenda"
                  className="bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-[14px] transition-all duration-300 shadow-xl"
                >
                  Conferir Agendas
                </a>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-white hover:bg-white hover:text-[#07132B] border border-white/30 font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-[14px] transition-all duration-300"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. AGENDA PÚBLICA - PARTE 1 (FUNDO AZUL MARINHO - 2 PRIMEIRAS DATAS)       */}
        {/* ========================================================================= */}
        <section id="agenda" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08] relative scroll-mt-20">
          <ScrollBlurItem className="mb-12 text-left">
            <span className="text-[#E2BA7A] text-xs font-mono font-bold uppercase tracking-[0.35em] mb-3 block">
              AGENDA PÚBLICA — 2026
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Cronograma Oficial de Apresentações
            </h2>
          </ScrollBlurItem>

          {/* Linhas Horizontais (2 Primeiras Datas no Fundo Azul Marinho) */}
          <div className="divide-y divide-white/15 border-t border-b border-white/15">
            {agendaSecao1.map((evento, idx) => (
              <ScrollBlurItem key={idx}>
                <a
                  href={evento.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.03] transition-colors px-4 -mx-4 rounded-none block"
                >
                  {/* Lado Esquerdo: Data em Fonte Gigante Dourada */}
                  <div className="flex items-center gap-6 sm:gap-10 shrink-0">
                    <span className="font-barlow-condensed font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E2BA7A] tracking-tighter leading-none group-hover:scale-105 transition-transform duration-300">
                      {evento.data}
                    </span>
                  </div>

                  {/* Centro: Título do Evento e Detalhes de Local/Hora */}
                  <div className="flex-1 text-left">
                    <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-tight group-hover:text-[#F4E4C1] transition-colors">
                      {evento.titulo}
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base font-sans mt-2">
                      {evento.subtitulo}
                    </p>
                  </div>

                  {/* Lado Direito: Botão / Link Cortante */}
                  <div className="shrink-0 flex items-center md:justify-end">
                    <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white group-hover:text-[#E2BA7A] flex items-center gap-2 border border-white/20 group-hover:border-[#E2BA7A] px-5 py-3 rounded-none transition-colors">
                      <span>GARANTIR VAGA</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </a>
              </ScrollBlurItem>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2.1 AGENDA PÚBLICA - PARTE 2 (FUNDO BRANCO - 3 DATAS RESTANTES)           */}
        {/* ========================================================================= */}
        <section className="w-full bg-white text-[#07132B] py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            {/* Linhas Horizontais com Fundo Branco (3 Datas Restantes) */}
            <div className="divide-y divide-black/10 border-t border-b border-black/10">
              {agendaSecao2.map((evento, idx) => (
                <ScrollBlurItem key={idx}>
                  <a
                    href={evento.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#07132B]/[0.03] transition-colors px-4 -mx-4 rounded-none block"
                  >
                    {/* Lado Esquerdo: Data em Fonte Gigante Dourada/Bronze Nobre */}
                    <div className="flex items-center gap-6 sm:gap-10 shrink-0">
                      <span className="font-barlow-condensed font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#B58738] tracking-tighter leading-none group-hover:scale-105 transition-transform duration-300">
                        {evento.data}
                      </span>
                    </div>

                    {/* Centro: Título do Evento e Detalhes de Local/Hora */}
                    <div className="flex-1 text-left">
                      <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#07132B] uppercase tracking-tight leading-tight group-hover:text-[#B58738] transition-colors">
                        {evento.titulo}
                      </h3>
                      <p className="text-[#07132B]/70 text-sm sm:text-base font-sans mt-2">
                        {evento.subtitulo}
                      </p>
                    </div>

                    {/* Lado Direito: Botão Escuro com Efeito Hover */}
                    <div className="shrink-0 flex items-center md:justify-end">
                      <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#07132B] group-hover:text-white flex items-center gap-2 border border-[#07132B]/25 group-hover:border-[#07132B] group-hover:bg-[#07132B] px-5 py-3 rounded-none transition-all duration-300">
                        <span>GARANTIR VAGA</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </a>
                </ScrollBlurItem>
              ))}
            </div>

            <ScrollBlurItem className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#07132B]/60">
              <span>Datas e locais sujeitos a confirmação junto à assessoria executiva.</span>
              <a
                href="#contato"
                className="text-[#07132B] hover:text-[#B58738] transition-colors underline decoration-[#07132B]/30 underline-offset-4 font-bold"
              >
                Solicitar data na sua cidade ou convenção →
              </a>
            </ScrollBlurItem>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. EMPREENDEDORISMO & ESTRATÉGIA COMERCIAL (MODELO IMAGEM 1)              */}
        {/* ========================================================================= */}
        <section id="empreendedorismo" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2 space-y-6 text-left">
              <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] block">
                Atuação &amp; Negócios
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Empreendedorismo &amp; <br />
                <span className="text-white/80 italic font-normal">Estratégia Comercial</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                Liderança e execução prática na construção de operações de alto valor. Desenvolvimento de processos de vendas previsíveis com foco em governança corporativa, margem comercial e autoridade no mercado.
              </p>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Atuação direta em conselhos consultivos, estruturação de playbooks de vendas complexas B2B e mentoria de alta performance para fundadores e executivos C-Level.
              </p>
              <div className="pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-[12px] transition-all duration-300 shadow-xl"
                >
                  Conhecer Metodologia →
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">B2B</span>
                <h4 className="text-white font-bold text-xl mb-2">Vendas Complexas</h4>
                <p className="text-white/50 text-sm leading-relaxed">Processos e cadências comerciais de alta conversão para negociações de grande porte.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Audiovisual</span>
                <h4 className="text-white font-bold text-xl mb-2">Autoridade em Vídeo</h4>
                <p className="text-white/50 text-sm leading-relaxed">Posicionamento estratégico através de produções audiovisuais cinematográficas.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Playbooks</span>
                <h4 className="text-white font-bold text-xl mb-2">Processos Comerciais</h4>
                <p className="text-white/50 text-sm leading-relaxed">Documentação e esteiras de vendas replicáveis para escalar operações.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Advisory</span>
                <h4 className="text-white font-bold text-xl mb-2">Conselho Estratégico</h4>
                <p className="text-white/50 text-sm leading-relaxed">Acompanhamento consultivo para diretores, fundadores e investidores.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. FÉ, PROPÓSITO & VALORES INEGOCIÁVEIS (MODELO IMAGEM 1)                  */}
        {/* ========================================================================= */}
        <section id="fe" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="bg-[#0B1B3D]/80 border border-white/10 rounded-[32px] p-8 sm:p-14 lg:p-16 text-left relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] block mb-4">
              Fundamentos de Vida e Liderança
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Fé, Propósito &amp; <br />
              <span className="text-white/80 italic font-normal">Valores Inegociáveis</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white/70 leading-relaxed text-base sm:text-lg mb-10">
              <p>
                A integridade e o temor a Deus são os pilares que sustentam toda trajetória de liderança autêntica. O verdadeiro sucesso empresarial só se sustenta quando alinhado a princípios éticos inegociáveis, generosidade ativa e compromisso moral irrestrito.
              </p>
              <p>
                Na vida pública e privada, princípios de honra, verdade e serviço ao próximo guiam cada decisão estratégica, gerando frutos duradouros tanto nos negócios quanto nas relações humanas.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
              {["Temor a Deus", "Família", "Integridade", "Visão de Futuro", "Mordomia Bíblica"].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono uppercase tracking-wider"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. A MÚSICA COMO EXPRESSÃO E ADORAÇÃO (MODELO IMAGEM 1)                    */}
        {/* ========================================================================= */}
        <section id="musica" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="lg:w-1/2 space-y-6 text-left">
              <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] block">
                Sensibilidade Artística &amp; Adoração
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                A Música como <br />
                <span className="text-white/80 italic font-normal">Expressão e Adoração</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                A paixão pela música sempre esteve presente na vida de Daniel Silva, trazendo sensibilidade harmônica, precisão estética e conexão emocional profunda em tudo o que realiza.
              </p>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Da composição à produção sonora no Estúdio Akedah, a música representa momentos de inspiração, louvor e entrega, unindo arte de alto nível e atmosfera inspiradora.
              </p>
              <div className="pt-4">
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-[12px] transition-all duration-300 shadow-xl"
                >
                  Ouvir no Spotify ↗
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Composição</span>
                <h4 className="text-white font-bold text-xl mb-2">Harmonia &amp; Letra</h4>
                <p className="text-white/50 text-sm leading-relaxed">Criações que conectam sensibilidade espiritual e poética.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Produção</span>
                <h4 className="text-white font-bold text-xl mb-2">Gravação em Estúdio</h4>
                <p className="text-white/50 text-sm leading-relaxed">Captação acústica e masterização com tecnologia de ponta.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Ministração</span>
                <h4 className="text-white font-bold text-xl mb-2">Louvor e Presença</h4>
                <p className="text-white/50 text-sm leading-relaxed">Momentos de adoração e elevação espiritual autêntica.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px] text-left hover:border-white/30 transition-colors">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Estética</span>
                <h4 className="text-white font-bold text-xl mb-2">Sonoplastia &amp; Som</h4>
                <p className="text-white/50 text-sm leading-relaxed">Trilhas sonoras e ambientação acústica cinematográfica.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. PATROCINADORES OFICIAIS (MODELO IMAGEM 1)                               */}
        {/* ========================================================================= */}
        <section id="patrocinadores" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-16">
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              Marcas &amp; Parcerias
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
              Patrocinadores <span className="text-white/80 italic font-normal">Oficiais</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
              Empresas e marcas visionárias que caminham junto ao ecossistema de alto valor e negócios de Daniel Silva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0B1B3D]/70 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all flex flex-col justify-between min-h-[240px] text-left">
              <div>
                <span className="text-white/60 text-xs font-mono uppercase tracking-widest block mb-3">Keynote / Palestras</span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Convenções Empresariais</h3>
                <p className="text-white/50 text-sm leading-relaxed">Palestra magna para convenções de vendas, liderança e eventos corporativos.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:text-[#E2BA7A] flex items-center gap-2 mt-6 transition-colors">
                CONSULTAR DISPONIBILIDADE →
              </a>
            </div>

            <div className="bg-[#0B1B3D]/70 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all flex flex-col justify-between min-h-[240px] text-left">
              <div>
                <span className="text-white/60 text-xs font-mono uppercase tracking-widest block mb-3">Embaixador de Marca</span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Posicionamento Estratégico</h3>
                <p className="text-white/50 text-sm leading-relaxed">Associação de autoridade e conteúdo especializado para marcas e soluções B2B.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:text-[#E2BA7A] flex items-center gap-2 mt-6 transition-colors">
                PROPOR PARCERIA →
              </a>
            </div>

            <div className="bg-[#0B1B3D]/70 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all flex flex-col justify-between min-h-[240px] text-left">
              <div>
                <span className="text-white/60 text-xs font-mono uppercase tracking-widest block mb-3">Conselho Consultivo</span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Advisory Executivo</h3>
                <p className="text-white/50 text-sm leading-relaxed">Acompanhamento contínuo no direcionamento comercial e expansão corporativa.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:text-[#E2BA7A] flex items-center gap-2 mt-6 transition-colors">
                FALAR COM ASSESSORIA →
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. CTA DE FECHAMENTO — "CONVIDE DANIEL" (EXATAMENTE COMO NA IMAGEM 3)      */}
        {/* ========================================================================= */}
        <section id="contato" className="py-24 sm:py-32 px-6 sm:px-12 bg-[#F4F2EB] text-[#111111] relative scroll-mt-20">
          <div className="max-w-6xl mx-auto text-left">
            {/* Tag / Eyebrow */}
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#555555] mb-6 block">
              CONEXÃO OFICIAL &amp; ASSESSORIA
            </span>

            {/* Título Monumental Gigante */}
            <h2 className="font-black text-6xl sm:text-8xl md:text-9xl uppercase tracking-tight leading-[0.88] text-[#111111] mb-8 font-display">
              CONVIDE <br />
              DANIEL
            </h2>

            {/* Subtítulo explicativo */}
            <p className="text-[#333333] text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 font-normal">
              Palestras, convenções corporativas, mentorias executivas de negócios ou ministrações musicais. Fale diretamente com a equipe executiva.
            </p>

            {/* Botões da Imagem 3 */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#111111] hover:bg-[#222222] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-none border border-[#111111] transition-colors text-center shadow-lg"
              >
                WHATSAPP OFICIAL
              </a>
              <a
                href={`mailto:${AKEDAH_EMAIL}`}
                className="px-8 py-4 bg-transparent hover:bg-[#111111] hover:text-white text-[#111111] font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-none border border-[#111111] transition-colors text-center"
              >
                ENVIAR E-MAIL
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 8. RODAPÉ COM FUNDO AZUL MARINHO E LOGO DANIEL SILVA */}
      <Footer isDanielSilvaPage={true} />
    </div>
  );
};

export default DanielSilva;
