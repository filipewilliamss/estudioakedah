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
    cta: "Ouvir no Spotify",
    tagColor: "bg-green-500/20 text-green-300 border-green-500/30",
  },
  {
    canal: "Instagram",
    icon: Instagram,
    formato: "Reflexões Diárias & Bastidores",
    frequencia: "Diário",
    descricao: "Recortes pontuais, pensamentos sobre liderança, rotina de gravações e avisos de novos lançamentos.",
    link: "https://instagram.com",
    cta: "Seguir no Instagram",
    tagColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  },
  {
    canal: "LinkedIn",
    icon: Linkedin,
    formato: "Artigos & Articulação B2B",
    frequencia: "Semanal",
    descricao: "Análises técnicas sobre vendas consultivas, liderança executiva e cultura corporativa baseada em princípios.",
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
    <section id="agenda-publica" className="py-[112px] px-[24px] max-w-[1280px] mx-auto border-t border-white/[0.08]">
      {/* Cabeçalho da Seção Vida Pública */}
      <div className="mb-[80px] text-left">
        <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.4em] mb-[16px] block font-lato">
          Estágio 07 • Vida Pública
        </span>
        <h2 className="font-lato text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Onde encontrar e acompanhar <br />
          <span className="text-white/80 italic font-light">Daniel Silva</span>
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-[672px] mt-[16px] leading-relaxed font-light font-lato">
          Compromissos presenciais e grade de publicações digitais organizados para você se conectar com a mensagem e o trabalho de Daniel.
        </p>
      </div>

      {/* =================================================================== */}
      {/* BLOCO 1: AGENDA PÚBLICA                                             */}
      {/* =================================================================== */}
      <div className="mb-[112px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px] mb-[40px] pb-[24px] border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-[8px] px-[12px] py-[4px] rounded-full bg-white/10 border border-white/15 mb-[12px]">
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span className="text-white/80 text-xs font-lato font-bold uppercase tracking-wider">
                Compromissos Oficiais
              </span>
            </div>
            <h3 className="font-lato text-2xl sm:text-4xl font-black text-white">
              Agenda Pública
            </h3>
          </div>

          {/* Filtros da Agenda Pública */}
          <div className="flex flex-wrap gap-[8px]">
            {["Todos", "Palestra", "Ministração", "Convenção", "Imersão"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-[16px] py-[8px] rounded-[12px] text-xs font-lato font-bold uppercase tracking-wider transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {filteredAgenda.map((item, idx) => (
            <div
              key={idx}
              className="p-[28px] bg-[#1f1f1f]/90 border border-white/10 hover:border-white/30 rounded-[20px] transition-all duration-300 flex flex-col justify-between min-h-[220px] backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-[16px]">
                  <span className="font-lato text-3xl font-black text-white">{item.data}</span>
                  <span className="text-xs font-lato font-normal text-white/80 bg-white/10 px-[12px] py-[4px] rounded-full">
                    {item.hora}
                  </span>
                </div>
                <span className="text-white/60 text-[10px] font-lato uppercase tracking-widest block mb-[8px] font-bold">
                  {item.tipo}
                </span>
                <h4 className="font-lato font-black text-lg text-white mb-[8px] leading-snug">
                  {item.titulo}
                </h4>
                <p className="text-white/60 text-xs font-lato font-light">
                  📍 {item.local} • {item.cidade}
                </p>
              </div>

              <div className="pt-[16px] border-t border-white/10 mt-[16px] flex items-center justify-between">
                <span className="text-[11px] text-white/40 font-lato">Inscrições abertas</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] text-xs font-lato font-bold text-white hover:text-white/80 transition-colors uppercase tracking-wider"
                >
                  Garantir Vaga <ArrowRight className="w-3.5 h-3.5" />
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
        <div className="text-left mb-[64px]">
          <div className="inline-flex items-center gap-[8px] px-[12px] py-[4px] rounded-full bg-white/10 border border-white/15 mb-[12px]">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white/80 text-xs font-lato font-bold uppercase tracking-wider">
              Ecossistema Online
            </span>
          </div>
          <h3 className="font-lato text-2xl sm:text-4xl font-black text-white">
            Conteúdo Digital
          </h3>
          <p className="text-white/60 text-sm font-lato mt-[8px]">
            Acompanhe reflexões, episódios em áudio/vídeo e materiais semanais nas principais plataformas.
          </p>
        </div>

        {/* Grade de Canais Digitais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] text-left">
          {conteudosDigitais.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-[32px] bg-[#1f1f1f]/90 border border-white/10 hover:border-white/30 rounded-[24px] backdrop-blur-md flex flex-col justify-between space-y-[24px] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="flex items-center gap-[12px]">
                      <div className="p-[10px] rounded-[12px] bg-white/10 text-white">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-lato text-xl font-black text-white">{item.canal}</h4>
                        <span className="text-white/50 text-xs font-lato font-light">{item.formato}</span>
                      </div>
                    </div>
                    <span className={`px-[12px] py-[4px] rounded-full text-[10px] font-lato font-bold uppercase border ${item.tagColor}`}>
                      {item.frequencia}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed font-lato font-light">
                    {item.descricao}
                  </p>
                </div>

                <div className="pt-[8px]">
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-[8px] text-xs font-lato font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors bg-white/10 hover:bg-white/20 px-[20px] py-[12px] rounded-[12px] border border-white/15"
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
