import React, { useState } from "react";
import { WHATSAPP_URL } from "@/data/services";
import { Play, Instagram, Youtube, Linkedin, Radio, Calendar, ArrowRight } from "lucide-react";

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
    icon: Youtube,
    formato: "Masterclasses & Aulas",
    frequencia: "Semanal",
    descricao: "Aprofundamentos em estratégia comercial, discursos de alto ticket e bastidores de produções audiovisuais.",
    link: "https://youtube.com",
    cta: "Acessar Canal no YouTube",
    tagColor: "bg-red-500/20 text-red-300 border-red-500/30",
  },
  {
    canal: "Spotify & Apple Podcasts",
    icon: Radio,
    formato: "Akedah Podcast",
    frequencia: "Toda Quarta-feira",
    descricao: "Conversas com grandes líderes, fundadores e vozes influentes sobre negócios, família, fé e maturidade.",
    link: "/podcast",
    cta: "Ouvir Episódios",
    tagColor: "bg-green-500/20 text-green-300 border-green-500/30",
  },
  {
    canal: "Instagram",
    icon: Instagram,
    formato: "Insights & Bastidores",
    frequencia: "Diário",
    descricao: "Reflexões práticas de liderança, rotina executiva, gravações de estúdio e interação direta com a comunidade.",
    link: "https://instagram.com",
    cta: "Seguir no Instagram",
    tagColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  },
  {
    canal: "LinkedIn",
    icon: Linkedin,
    formato: "Artigos Executivos",
    frequencia: "Semanal",
    descricao: "Ensaios analíticos sobre governança de vendas, cultura organizacional e tomada de decisão estratégica.",
    link: "https://linkedin.com",
    cta: "Conectar no LinkedIn",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
  },
];

export const DanielPublicLifeSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const filteredAgenda = activeFilter === "Todos"
    ? agendaPublicaItems
    : agendaPublicaItems.filter((item) => item.tipo === activeFilter);

  return (
    <section id="agenda-publica" className="py-28 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Cabeçalho da Seção Vida Pública */}
      <div className="mb-20 text-left">
        <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
          Estágio 07 • Vida Pública
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-[900] text-white tracking-tight leading-tight">
          Onde encontrar e acompanhar <br />
          <span className="text-white/80 italic font-normal">Daniel Silva</span>
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed font-light">
          Compromissos presenciais e grade de publicações digitais organizados para você se conectar com a mensagem e o trabalho de Daniel.
        </p>
      </div>

      {/* =================================================================== */}
      {/* BLOCO 1: AGENDA PÚBLICA                                             */}
      {/* =================================================================== */}
      <div className="mb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 mb-3">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-300 text-xs font-mono font-bold uppercase tracking-wider">
                Compromissos Oficiais
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
              Agenda Pública
            </h3>
          </div>

          {/* Filtros da Agenda Pública */}
          <div className="flex flex-wrap gap-2">
            {["Todos", "Palestra", "Ministração", "Convenção", "Imersão"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-[12px] text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeFilter === cat
                    ? "bg-white text-[#191919] shadow-lg"
                    : "bg-[#1f1f1f] text-white/60 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grade de Eventos da Agenda Pública */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgenda.map((item, idx) => (
            <div
              key={idx}
              className="p-7 bg-[#1f1f1f]/90 border border-white/10 hover:border-white/30 rounded-[20px] transition-all duration-300 flex flex-col justify-between min-h-[220px] backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-3xl font-[900] text-white">{item.data}</span>
                  <span className="text-xs font-mono text-white/80 bg-white/10 px-3 py-1 rounded-full">
                    {item.hora}
                  </span>
                </div>
                <span className="text-blue-400 text-[10px] font-mono uppercase tracking-widest block mb-2 font-bold">
                  {item.tipo}
                </span>
                <h4 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                  {item.titulo}
                </h4>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>📍 {item.cidade}</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-bold flex items-center gap-1"
                >
                  Informações <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =================================================================== */}
      {/* BLOCO 2: CONTEÚDO DIGITAL                                           */}
      {/* =================================================================== */}
      <div>
        <div className="mb-10 pb-6 border-b border-white/10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/20 mb-3">
            <Play className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-purple-300 text-xs font-mono font-bold uppercase tracking-wider">
              Ecossistema Online
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
            Conteúdo Digital
          </h3>
          <p className="text-white/60 text-sm font-mono mt-2">
            Acompanhe reflexões, episódios em áudio/vídeo e materiais semanais nas principais plataformas.
          </p>
        </div>

        {/* Grade de Canais Digitais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {conteudosDigitais.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#1f1f1f]/90 border border-white/10 hover:border-white/30 rounded-[24px] backdrop-blur-md flex flex-col justify-between space-y-6 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-[12px] bg-white/10 text-white">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-display text-xl font-bold text-white">{item.canal}</h4>
                        <span className="text-white/50 text-xs font-mono">{item.formato}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase border ${item.tagColor}`}>
                      {item.frequencia}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.descricao}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors bg-white/10 hover:bg-white/20 px-5 py-3 rounded-[12px] border border-white/15"
                  >
                    {item.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DanielPublicLifeSection;
