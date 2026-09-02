import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DanielWalkthroughExperience from "@/components/DanielWalkthroughExperience";
import founderPicture from "@/assets/akedah-founder.jpg";
import { WHATSAPP_URL } from "@/data/services";

// Agenda de Apresentações (Palestras, Convenções, Workshops, Mentorias presenciais)
const agendaApresentacoes = [
  { data: "18/08", hora: "19h30", tipo: "Palestra Magna", evento: "Convenção de Vendas B2B", local: "São Paulo, SP" },
  { data: "25/08", hora: "14h00", tipo: "Mentoria Presencial", evento: "Imersão Escala Executiva", local: "Alphaville, SP" },
  { data: "03/09", hora: "20h00", tipo: "Keynote Speaker", evento: "Fórum de Liderança e Negócios", local: "Belo Horizonte, MG" },
  { data: "12/09", hora: "19h00", tipo: "Workshop Fechado", evento: "Alinhamento de Funil e Fechamento", local: "Curitiba, PR" },
  { data: "22/09", hora: "20h30", tipo: "Encontro com Líderes", evento: "Painel Fé & Negócios de Impacto", local: "Rio de Janeiro, RJ" },
];

// Agenda de Postagens (Masterclasses YouTube, Reels/Instagram, Artigos LinkedIn, Podcasts)
const agendaPostagens = [
  { data: "Segunda-feira", hora: "12h00", canal: "YouTube", formato: "Masterclass de Estratégia Comercial", tema: "Como fechar contratos de alto ticket sem desconto" },
  { data: "Terça-feira", hora: "08h30", canal: "Instagram", formato: "Reels & Carrossel", tema: "5 erros que estão matando sua conversão em vendas" },
  { data: "Quarta-feira", hora: "19h00", canal: "Spotify & YouTube", formato: "Akedah Podcast", tema: "Episódio inédito com grande líder do mercado" },
  { data: "Quinta-feira", hora: "11h00", canal: "LinkedIn", formato: "Artigo Executivo", tema: "Por que marketing sem processo comercial é prejuízo" },
  { data: "Sexta-feira", hora: "18h00", canal: "Instagram & TikTok", formato: "Bastidores & Reflexões", tema: "Princípios de liderança e disciplina na prática" },
  { data: "Domingo", hora: "20h00", canal: "Instagram / YouTube", formato: "Palavra & Reflexão", tema: "Fé, propósito e consistência inegociável" },
];

const DanielSilva = () => {
  const [activeTab, setActiveTab] = useState<"apresentacao" | "postagens">("apresentacao");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Silva",
    jobTitle: "Estrategista de Negócios, Mentor e Palestrante",
    description: "Empreendedorismo, fé, música e aceleração comercial com Daniel Silva.",
    url: "https://estudioakedah.com/daniel-silva",
  };

  return (
    <div className="min-h-screen bg-[#07132B] text-white selection:bg-white selection:text-[#07132B] relative">
      <SEO
        title="Daniel Silva | Empreendedorismo, Fé, Música & Agenda"
        description="Site oficial de Daniel Silva: experiência imersiva em vídeo pelos 3 pilares, agenda de apresentações e postagens, fé, música e contato direto."
        url="https://estudioakedah.com/daniel-silva"
        schema={schema}
      />
      <Navbar isDanielSilvaPage={true} />

      <main className="relative z-10 overflow-x-clip">
        {/* 1. EXPERIÊNCIA DE WALKTHROUGH EM 1ª PESSOA (ANIMAÇÃO POR SCROLL NOS 3 CÔMODOS) */}
        <DanielWalkthroughExperience />

        {/* 2. AGENDA DUPLA (Apresentação & Postagens) */}
        <section id="agenda" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-3 block">
                Cronograma Oficial
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
                Agendas de <span className="text-white/80 italic font-normal">Daniel Silva</span>
              </h2>
            </div>

            {/* Alternador entre as Duas Agendas */}
            <div className="flex items-center p-1.5 bg-[#0B1B3D] border border-white/15 rounded-[16px]">
              <button
                onClick={() => setActiveTab("apresentacao")}
                className={`px-6 py-2.5 rounded-[12px] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "apresentacao"
                    ? "bg-white text-[#07132B] shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Agenda de Apresentação
              </button>
              <button
                onClick={() => setActiveTab("postagens")}
                className={`px-6 py-2.5 rounded-[12px] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "postagens"
                    ? "bg-white text-[#07132B] shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Agenda de Postagens
              </button>
            </div>
          </div>

          {/* Conteúdo da Agenda de Apresentação */}
          {activeTab === "apresentacao" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <p className="text-white/60 text-sm font-mono mb-6">
                Palestras magnas, keynotes corporativos, conferências e imersões presenciais confirmadas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agendaApresentacoes.map((item, idx) => (
                  <div key={idx} className="bg-[#0B1B3D]/80 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-display text-white font-bold text-3xl">{item.data}</span>
                        <span className="font-mono text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full">{item.hora}</span>
                      </div>
                      <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest block mb-1">{item.tipo}</span>
                      <h3 className="font-display text-xl font-bold text-white mb-2">{item.evento}</h3>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-white/60">
                      <span>📍 {item.local}</span>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">
                        CONTRATAR →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Conteúdo da Agenda de Postagens */}
          {activeTab === "postagens" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <p className="text-white/60 text-sm font-mono mb-6">
                Grade semanal de publicações em redes sociais, podcasts, artigos e masterclasses em vídeo.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agendaPostagens.map((item, idx) => (
                  <div key={idx} className="bg-[#0B1B3D]/80 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-display text-white font-bold text-xl">{item.data}</span>
                        <span className="font-mono text-xs text-[#07132B] font-bold bg-white px-3 py-1 rounded-full">{item.hora}</span>
                      </div>
                      <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest block mb-1">
                        {item.canal} • {item.formato}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white mb-2">{item.tema}</h3>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-white/60">
                      <span>🔔 Não perca</span>
                      <span className="text-white font-bold">AO VIVO / NOVO</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </section>

        {/* 3. EMPREENDEDORISMO SECTION */}
        <section id="empreendedorismo" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2 space-y-6">
              <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] block">
                Pilar de Atuação
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
                Empreendedorismo & <br />
                <span className="text-white/80 italic font-normal">Estratégia Comercial</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Daniel Silva atua diretamente na reestruturação de times de vendas, modelagem de ofertas de alto valor e governança comercial para empresas que buscam quebrar barreiras de escala.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                Através de diagnósticos aprofundados e metodologias validadas em campo, os processos comerciais são alinhados para transformar tráfego e autoridade em faturamento previsível e rentável.
              </p>
              <div className="pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-[12px] transition-all"
                >
                  Conhecer Mentorias Executivas
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px]">
                <p className="text-white font-bold text-3xl mb-2">B2B</p>
                <h4 className="text-white font-bold text-lg mb-2">Vendas Complexas</h4>
                <p className="text-white/50 text-sm">Estruturação de discursos e cadências para fechamentos de alto ticket.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px]">
                <p className="text-white font-bold text-3xl mb-2">Audiovisual</p>
                <h4 className="text-white font-bold text-lg mb-2">Autoridade em Vídeo</h4>
                <p className="text-white/50 text-sm">Posicionamento de marca pessoal e corporativa em estúdio profissional.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px]">
                <p className="text-white font-bold text-3xl mb-2">Playbooks</p>
                <h4 className="text-white font-bold text-lg mb-2">Processos Comerciais</h4>
                <p className="text-white/50 text-sm">Criação de manuais operacionais e capacitação contínua de times.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px]">
                <p className="text-white font-bold text-3xl mb-2">Advisory</p>
                <h4 className="text-white font-bold text-lg mb-2">Conselho Estratégico</h4>
                <p className="text-white/50 text-sm">Acompanhamento executivo contínuo para diretores e fundadores.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FÉ SECTION */}
        <section id="fe" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="bg-[#0B1B3D] border border-white/15 rounded-[32px] p-10 md:p-20 relative overflow-hidden">
            <div className="max-w-3xl space-y-6 relative z-10">
              <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] block">
                Fundamento & Princípios
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
                Fé, Propósito & <br />
                <span className="text-white/80 italic font-normal">Valores Inegociáveis</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Para Daniel Silva, o sucesso nos negócios é consequência direta de princípios sólidos, integridade e fidelidade aos valores cristãos. Nenhum resultado financeiro justifica comprometer o caráter ou a família.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                "A verdadeira liderança nasce no serviço ao próximo e na entrega com excelência. Quando seu trabalho é guiado por um propósito maior, o impacto transcende métricas e constrói legados duradouros."
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-mono text-white/80">Integridade</span>
                <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-mono text-white/80">Excelência</span>
                <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-mono text-white/80">Generosidade</span>
                <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-mono text-white/80">Propósito Divino</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. MÚSICA SECTION */}
        <section id="musica" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="lg:w-1/2 space-y-6">
              <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] block">
                Sensibilidade Artística
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
                A Música como <br />
                <span className="text-white/80 italic font-normal">Expressão e Adoração</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                A paixão pela música sempre esteve presente na vida de Daniel Silva, trazendo sensibilidade harmônica, precisão estética e conexão emocional profunda em tudo o que realiza.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                Da composição à produção sonora no Estúdio Akedah, a música representa momentos de inspiração, louvor e entrega, unindo arte de alto nível e atmosfera inspiradora.
              </p>
              <div className="pt-4">
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-[12px] transition-all"
                >
                  Ouvir no Spotify
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px]">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Composição</span>
                <h4 className="text-white font-bold text-xl mb-2">Harmonia & Letra</h4>
                <p className="text-white/50 text-sm">Criações que conectam sensibilidade espiritual e poética.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px]">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Produção</span>
                <h4 className="text-white font-bold text-xl mb-2">Gravação em Estúdio</h4>
                <p className="text-white/50 text-sm">Captação acústica e masterização com tecnologia de ponta.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px]">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Ministração</span>
                <h4 className="text-white font-bold text-xl mb-2">Louvor e Presença</h4>
                <p className="text-white/50 text-sm">Momentos de adoração e elevação espiritual autêntica.</p>
              </div>
              <div className="p-8 bg-[#0B1B3D]/70 border border-white/10 rounded-[20px]">
                <span className="text-white/50 text-xs font-mono uppercase tracking-widest block mb-2">Estética</span>
                <h4 className="text-white font-bold text-xl mb-2">Sonoplastia & Som</h4>
                <p className="text-white/50 text-sm">Trilhas sonoras e ambientação acústica cinematográfica.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PATROCINADORES / PARCERIAS SECTION */}
        <section id="patrocinadores" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-16">
            <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
              Marcas & Parcerias
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
              Patrocinadores <span className="text-white/80 italic font-normal">Oficiais</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
              Empresas e marcas visionárias que caminham junto ao ecossistema de alto valor e negócios de Daniel Silva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0B1B3D]/70 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-white/60 text-xs font-mono uppercase tracking-widest block mb-3">Keynote / Palestras</span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Convenções Empresariais</h3>
                <p className="text-white/50 text-sm">Palestra magna para convenções de vendas, liderança e eventos corporativos.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-2 mt-6">
                CONSULTAR DISPONIBILIDADE →
              </a>
            </div>

            <div className="bg-[#0B1B3D]/70 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-white/60 text-xs font-mono uppercase tracking-widest block mb-3">Embaixador de Marca</span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Posicionamento Estratégico</h3>
                <p className="text-white/50 text-sm">Associação de autoridade e conteúdo especializado para softwares e serviços B2B.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-2 mt-6">
                PROPOR PARCERIA →
              </a>
            </div>

            <div className="bg-[#0B1B3D]/70 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-white/60 text-xs font-mono uppercase tracking-widest block mb-3">Conselho Consultivo</span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Advisory Executivo</h3>
                <p className="text-white/50 text-sm">Acompanhamento contínuo no direcionamento comercial e expansão corporativa.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-2 mt-6">
                FALAR COM ASSESSORIA →
              </a>
            </div>
          </div>
        </section>

        {/* 7. CONTATO SECTION */}
        <section id="contato" className="py-28 px-6 border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto bg-[#0B1B3D] border border-white/15 rounded-[32px] p-10 md:p-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 shadow-2xl">
            <div>
              <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">Fale Conosco</span>
              <h2 className="font-display text-3xl md:text-6xl font-bold text-white leading-tight">
                Entre em contato com <br />
                <span className="text-white/80 italic font-normal">Daniel Silva.</span>
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-12 py-5 rounded-[15px] transition-all shadow-xl"
              >
                Falar no WhatsApp
              </a>
              <p className="text-white/40 text-xs font-mono">Atendimento direto pela equipe de assessoria.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DanielSilva;
