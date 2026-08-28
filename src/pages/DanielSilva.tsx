import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import founderPicture from "@/assets/akedah-founder.jpg";
import { WHATSAPP_URL } from "@/data/services";

const DanielSilva = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Silva",
    jobTitle: "Estrategista de Negócios e Fundador",
    description: "Mentoria, palestras, posicionamento de autoridade e estratégias comerciais de alto impacto com Daniel Silva.",
    url: "https://estudioakedah.com/daniel-silva",
  };

  return (
    <div className="min-h-screen bg-[#07132B] text-white selection:bg-white selection:text-[#07132B] relative">
      <SEO
        title="Daniel Silva | Estratégia, Mentoria & Negócios"
        description="Estratégias comerciais, posicionamento executivo e palestras com Daniel Silva. Conheça a agenda, projetos e parcerias."
        url="https://estudioakedah.com/daniel-silva"
        schema={schema}
      />
      <Navbar isDanielSilvaPage={true} />

      <main className="relative z-10 overflow-hidden">
        {/* 1. HERO SECTION (Mesmo sistema de card em tela inteira, cores Azul Marinho e Branco) */}
        <section className="relative min-h-[92vh] md:min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-transparent pt-28 pb-16">
          {/* Background Image com Gradientes em Azul Marinho */}
          <div className="absolute inset-0 z-0">
            <img 
              src={founderPicture} 
              alt="Daniel Silva" 
              className="w-full h-full object-cover opacity-60 filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-[#07132B]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-[#07132B]/50" />
          </div>

          {/* Conteúdo posicionado à esquerda */}
          <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex justify-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-left flex flex-col items-start"
            >
              <div className="flex items-center justify-start gap-4 mb-6">
                <span className="text-white/80 border border-white/20 px-3 py-1 rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-bold">
                  Mentoria & Estratégia Comercial
                </span>
              </div>

              <h1 className="font-display text-[54px] sm:text-[76px] md:text-[96px] font-[900] leading-[0.88] tracking-[-0.05em] mb-8">
                <span className="block text-white">Daniel</span>
                <span className="text-white/80 italic font-normal block">Silva</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl text-left mb-10">
                Aceleração de receitas, estruturação de times comerciais de alta performance e posicionamento executivo para líderes que exigem escala real.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-[15px] transition-all duration-300 shadow-xl"
                >
                  Agendar Mentoria
                </a>
                <a 
                  href="#calendario" 
                  className="bg-transparent text-white hover:bg-white hover:text-[#07132B] border border-white/30 font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-[15px] transition-all duration-300"
                >
                  Ver Agenda
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. BANNERS SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="#calendario"
              className="group bg-[#0B1B3D]/80 hover:bg-[#0F2452] border border-white/10 hover:border-white/40 rounded-[20px] p-8 md:p-10 transition-all duration-300 flex flex-col items-start text-left shadow-lg"
            >
              <span className="text-white/60 text-xs font-mono uppercase tracking-[0.25em] mb-4">Agenda Executiva</span>
              <h3 className="font-display text-2xl font-bold mb-6 text-white group-hover:text-white transition-colors">
                Palestras, workshops e imersões presenciais.
              </h3>
              <span className="font-mono text-xs text-white/50 group-hover:text-white flex items-center gap-2 mt-auto">
                VER DATAS DISPONÍVEIS →
              </span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-white/90 border border-white rounded-[20px] p-8 md:p-10 transition-all duration-300 flex flex-col items-start text-left text-[#07132B] shadow-2xl"
            >
              <span className="text-[#07132B]/70 text-xs font-mono uppercase tracking-[0.25em] mb-4">Mentoria Individual</span>
              <h3 className="font-display text-2xl font-bold mb-6 text-[#07132B]">
                Acompanhamento direto para empresários e CEOs.
              </h3>
              <span className="font-mono text-xs text-[#07132B]/90 font-bold flex items-center gap-2 mt-auto">
                APLICAR PARA VAGA →
              </span>
            </a>

            <a
              href="https://www.instagram.com/estudioakedah"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0B1B3D]/80 hover:bg-[#0F2452] border border-white/10 hover:border-white/40 rounded-[20px] p-8 md:p-10 transition-all duration-300 flex flex-col items-start text-left shadow-lg"
            >
              <span className="text-white/60 text-xs font-mono uppercase tracking-[0.25em] mb-4">Artigos & Conteúdo</span>
              <h3 className="font-display text-2xl font-bold mb-6 text-white group-hover:text-white transition-colors">
                Análises de mercado e lições diárias de gestão.
              </h3>
              <span className="font-mono text-xs text-white/50 group-hover:text-white flex items-center gap-2 mt-auto">
                ACOMPANHAR NO INSTAGRAM →
              </span>
            </a>
          </div>
        </section>

        {/* 3. PLAYER / TRANSMISSÕES & VÍDEOS */}
        <section id="player" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
                Conteúdos & Aulas
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Assista aos conteúdos exclusivos de <span className="text-white/80 italic font-normal">Daniel Silva.</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                Masterclasses, análises de processos comerciais e bastidores da condução de grandes contas.
              </p>
              <a
                href="https://www.youtube.com/@EstudioAkedah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#07132B] hover:bg-transparent hover:text-white border border-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-[12px] transition-all"
              >
                Inscrever-se no Canal
              </a>
            </div>
            <div className="lg:w-2/3 w-full aspect-video rounded-[24px] overflow-hidden shadow-2xl bg-black border border-white/10">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=PL_J8x7L_Lp0C_U7A0YyYV0QGZ4I8iN7x5" 
                title="Daniel Silva"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* 4. CALENDÁRIO SECTION */}
        <section id="calendario" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-16">
            <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
              Agenda & Eventos
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
              Próximos <span className="text-white/80 italic font-normal">compromissos</span> e palestras.
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
              Consulte as datas de treinamentos in-company, keynotes e encontros de mentoria executiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { data: "18/08", hora: "19h", local: "SÃO PAULO", tema: "ESCALA COMERCIAL B2B" },
              { data: "25/08", hora: "14h", local: "ONLINE", tema: "MENTORIA EXECUTIVA" },
              { data: "01/09", hora: "20h", local: "SÃO PAULO", tema: "WORKSHOP DE VENDAS" },
              { data: "08/09", hora: "19h", local: "AO VIVO", tema: "IMERSÃO DESTRACIONANDO" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0B1B3D]/70 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all duration-300">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-display text-white font-bold text-3xl">{item.data}</span>
                  <span className="font-mono text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full">{item.hora}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-white">{item.local}</h3>
                <p className="font-mono text-xs text-white/50 uppercase tracking-wider">{item.tema}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-sm text-white/40 font-mono">
            Para contratação de palestras ou treinamentos corporativos fechados, entre em contato via WhatsApp.
          </p>
        </section>

        {/* 5. REDES SOCIAIS SECTION */}
        <section id="redes" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-16">
            <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
              Conexões
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
              Acompanhe Daniel Silva <span className="text-white/80 italic font-normal">nas redes.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Conteúdo diário sobre negócios, negociações complexas e liderança.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <a href="https://www.instagram.com/estudioakedah" target="_blank" rel="noopener noreferrer" className="rounded-[20px] border border-white/10 overflow-hidden relative group h-80 flex flex-col justify-end p-6">
              <div className="absolute inset-0 bg-[#07132B]/70 group-hover:bg-[#07132B]/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Instagram" />
              <div className="relative z-20">
                <span className="text-white/70 font-mono text-xs uppercase tracking-widest mb-1 block">Instagram</span>
                <span className="font-display text-xl font-bold text-white">Insights Diários</span>
              </div>
            </a>

            <a href="https://www.youtube.com/@EstudioAkedah" target="_blank" rel="noopener noreferrer" className="rounded-[20px] border border-white/10 overflow-hidden relative group h-80 flex flex-col justify-end p-6">
              <div className="absolute inset-0 bg-[#07132B]/70 group-hover:bg-[#07132B]/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="YouTube" />
              <div className="relative z-20">
                <span className="text-white/70 font-mono text-xs uppercase tracking-widest mb-1 block">YouTube</span>
                <span className="font-display text-xl font-bold text-white">Aulas Completas</span>
              </div>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-[20px] border border-white/10 overflow-hidden relative group h-80 flex flex-col justify-end p-6">
              <div className="absolute inset-0 bg-[#07132B]/70 group-hover:bg-[#07132B]/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="LinkedIn" />
              <div className="relative z-20">
                <span className="text-white/70 font-mono text-xs uppercase tracking-widest mb-1 block">LinkedIn</span>
                <span className="font-display text-xl font-bold text-white">Artigos Executivos</span>
              </div>
            </a>

            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="rounded-[20px] border border-white/10 overflow-hidden relative group h-80 flex flex-col justify-end p-6">
              <div className="absolute inset-0 bg-[#07132B]/70 group-hover:bg-[#07132B]/40 transition-all z-10" />
              <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Spotify" />
              <div className="relative z-20">
                <span className="text-white/70 font-mono text-xs uppercase tracking-widest mb-1 block">Spotify</span>
                <span className="font-display text-xl font-bold text-white">Áudios & Podcasts</span>
              </div>
            </a>
          </div>
        </section>

        {/* 6. PATROCINADORES / PARCERIAS SECTION */}
        <section id="patrocinadores" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center md:text-left mb-16">
            <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
              Parcerias Estratégicas
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
              Marcas & <span className="text-white/80 italic font-normal">Patrocinadores</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
              Empresas e marcas alinhadas ao ecossistema de alto valor e negócios de Daniel Silva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0B1B3D]/70 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-white/60 text-xs font-mono uppercase tracking-widest block mb-3">Keynote / Palestras</span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Presença em Convenções</h3>
                <p className="text-white/50 text-sm">Palestra magna para convenções de vendas, liderança e eventos corporativos.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-2 mt-6">
                CONSULTAR DISPONIBILIDADE →
              </a>
            </div>

            <div className="bg-[#0B1B3D]/70 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-white/60 text-xs font-mono uppercase tracking-widest block mb-3">Embaixador de Marca</span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Posicionamento B2B</h3>
                <p className="text-white/50 text-sm">Associação de autoridade e conteúdo especializado para softwares e serviços B2B.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-2 mt-6">
                PROPOR PARCERIA →
              </a>
            </div>

            <div className="bg-[#0B1B3D]/70 border border-white/10 hover:border-white/40 rounded-[20px] p-8 transition-all flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-white/60 text-xs font-mono uppercase tracking-widest block mb-3">Conselho Consultivo</span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Advisory Estratégico</h3>
                <p className="text-white/50 text-sm">Acompanhamento contínuo no direcionamento comercial e expansão corporativa.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-mono text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-2 mt-6">
                FALAR COM ASSESSORIA →
              </a>
            </div>
          </div>
        </section>

        {/* 7. CTA CONTATO */}
        <section id="contato" className="py-28 px-6 border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto bg-[#0B1B3D] border border-white/15 rounded-[32px] p-10 md:p-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 shadow-2xl">
            <div>
              <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">Contato Direto</span>
              <h2 className="font-display text-3xl md:text-6xl font-bold text-white leading-tight">
                Inicie sua jornada de <br />
                <span className="text-white/80 italic font-normal">escala comercial.</span>
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
              <p className="text-white/40 text-xs font-mono">Atendimento direto pela assessoria comercial.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DanielSilva;
