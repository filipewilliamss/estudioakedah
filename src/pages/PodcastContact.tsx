import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Clock,
  Sparkles,
  Radio
} from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PodcastAtmosphere from "@/components/podcast/PodcastAtmosphere";
import { WHATSAPP_URL, AKEDAH_EMAIL } from "@/data/services";

interface PodcastContactChannel {
  name: string;
  category: string;
  handle: string;
  url: string;
  description: string;
  actionText: string;
  icon: (props: { className?: string }) => JSX.Element;
  highlight?: boolean;
}

const podcastContactChannels: PodcastContactChannel[] = [
  {
    name: "Comercial & Patrocínios",
    category: "Patrocínio Oficial",
    handle: "+55 (11) 99107-6096",
    url: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20patrocinar%20o%20Akedah%20Podcast`,
    description: "Atendimento executivo para empresas interessadas em cotas de patrocínio, inserções publicitárias em vídeo e naming rights.",
    actionText: "Falar sobre Patrocínio",
    highlight: true,
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.972.531 1.776.812 2.796.813h.005c3.179 0 5.767-2.586 5.768-5.766 0-1.54-.6-2.988-1.689-4.078-1.09-1.09-2.538-1.692-4.084-1.692zm3.385 8.163c-.145.407-.847.777-1.18.825-.333.048-.769.071-2.484-.639-1.425-.59-2.338-2.039-2.41-2.134-.07-.096-.577-.768-.577-1.464 0-.696.363-1.038.492-1.181.13-.143.283-.179.377-.179.094 0 .188.001.27.006.086.004.202-.033.315.24.118.283.402.98.437 1.052.035.072.059.155.012.249-.047.094-.07.153-.14.236-.07.082-.148.184-.211.247-.07.07-.143.146-.061.287.082.141.365.602.784.975.539.48 0.994.629 1.135.699.141.07.224.059.307-.035.082-.094.353-.412.447-.553.094-.141.188-.118.318-.07.13.047.825.389.966.46.141.07.236.106.27.165.035.059.035.342-.11.749zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.438 5.169L2 22l4.98-1.306C8.423 21.525 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.698 0-3.27-.514-4.577-1.393l-.328-.222-2.962.777.791-2.887-.243-.387A8.204 8.204 0 0 1 3.75 12c0-4.549 3.701-8.25 8.25-8.25 4.549 0 8.25 3.701 8.25 8.25 0 4.549-3.701 8.25-8.25 8.25z" />
      </svg>
    ),
  },
  {
    name: "Pautas & Convidados",
    category: "Curadoria Editorial",
    handle: "+55 (11) 99107-6096",
    url: `${WHATSAPP_URL}&text=Ol%C3%A1%2C%20gostaria%20de%20sugerir%20uma%20pauta%20ou%20convidado%20para%20o%20Akedah%20Podcast`,
    description: "Canal direto para envio de biografias, indicação de líderes do mercado e proposição de temas para episódios futuros.",
    actionText: "Sugerir Convidado",
    icon: ({ className }) => <Radio className={className} />,
  },
  {
    name: "Mídia Kit & Propostas",
    category: "Canal Corporativo",
    handle: AKEDAH_EMAIL,
    url: `mailto:${AKEDAH_EMAIL}?subject=M%C3%ADdia%20Kit%20e%20Patroc%C3%ADnio%20-%20Akedah%20Podcast`,
    description: "Solicite o mídia kit atualizado com métricas de audiência, demografia qualificada e formatos de inserção.",
    actionText: "Solicitar Mídia Kit",
    icon: ({ className }) => <Mail className={className} />,
  },
  {
    name: "YouTube Oficial",
    category: "Canal de Vídeo",
    handle: "@EstudioAkedah",
    url: "https://www.youtube.com/@EstudioAkedah?sub_confirmation=1",
    description: "Episódios completos em 4K HDR, recortes semanais com pontos altos das conversas e transmissões especiais.",
    actionText: "Acessar Canal",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    category: "Rede Social",
    handle: "@estudioakedah",
    url: "https://instagram.com/estudioakedah",
    description: "Bastidores do estúdio, trechos de entrevistas, confirmações de agenda e interação direta com o público.",
    actionText: "Acessar Perfil",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Spotify & Áudio",
    category: "Streaming Hi-Fi",
    handle: "Akedah Podcast",
    url: "https://open.spotify.com",
    description: "Distribuição em áudio com mixagem profissional para ouvir no trânsito, na academia ou durante o trabalho.",
    actionText: "Ouvir no Spotify",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308a.747.747 0 0 1-1.028.248c-2.813-1.718-6.353-2.107-10.524-1.155a.75.75 0 0 1-.336-1.462c4.564-1.042 8.49-.602 11.64 1.341a.749.749 0 0 1 .248 1.028zm1.47-3.266a.936.936 0 0 1-1.287.308c-3.22-1.979-8.128-2.552-11.936-1.396a.937.937 0 0 1-.55-1.79c4.354-1.321 9.775-.683 13.465 1.591a.936.936 0 0 1 .308 1.287zm.126-3.41c-3.86-2.292-10.228-2.503-13.899-1.388a1.124 1.124 0 1 1-.652-2.152c4.225-1.282 11.26-1.033 15.717 1.613a1.124 1.124 0 1 1-1.166 1.927z" />
      </svg>
    ),
  },
];

const PodcastContact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0C0704] text-white relative flex flex-col selection:bg-[#C4550A] selection:text-white">
      <PodcastAtmosphere />

      <SEO 
        title="Contato e Patrocínios | Akedah Podcast"
        description="Fale diretamente com a equipe do Akedah Podcast para cotas de patrocínio, indicação de convidados ou gravação em nosso estúdio."
      />

      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar forceBlack={true} isPodcastPage={true} />

        <main className="flex-1 pt-36 md:pt-48 pb-28 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Header / Hero */}
            <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#C4550A]/30 bg-[#C4550A]/10 backdrop-blur-md mb-8"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C4550A] animate-pulse" />
                <span className="text-[#C4550A] font-mono text-[11px] md:text-[12px] uppercase tracking-[0.3em] font-bold">
                  COMERCIAL & CURADORIA
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-barlow-condensed text-[44px] sm:text-[64px] md:text-[84px] lg:text-[102px] font-black leading-[0.92] tracking-tight uppercase text-white mb-8"
              >
                FALE COM O <br className="hidden sm:inline" />
                <span className="text-[#C4550A] italic font-normal">AKEDAH PODCAST.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/60 text-[16px] sm:text-[19px] md:text-[22px] leading-relaxed max-w-2xl mx-auto font-light"
              >
                Conecte sua marca à nossa audiência qualificada, solicite o mídia kit de patrocínios ou envie sugestões de pautas e convidados.
              </motion.p>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {podcastContactChannels.map((channel, idx) => (
                <motion.a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
                  className={`group relative flex flex-col justify-between p-8 md:p-10 rounded-[24px] border transition-all duration-500 overflow-hidden ${
                    channel.highlight 
                      ? "bg-gradient-to-b from-[#C4550A]/25 via-[#1A0D07] to-[#120804] border-[#C4550A]/50 hover:border-[#C4550A] shadow-[0_10px_35px_rgba(196,85,10,0.2)]"
                      : "bg-[#140C07]/90 hover:bg-[#1B0F09] border-white/10 hover:border-[#C4550A]/60"
                  }`}
                >
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C4550A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Card Top */}
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                          channel.highlight 
                            ? "bg-[#C4550A] text-white shadow-lg shadow-[#C4550A]/40" 
                            : "bg-white/[0.06] text-white/90 group-hover:bg-[#C4550A] group-hover:text-white"
                        }`}>
                          <channel.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C4550A] block mb-1 font-semibold">
                            {channel.category}
                          </span>
                          <h2 className="font-barlow-condensed text-[24px] font-bold text-white tracking-wide uppercase">
                            {channel.name}
                          </h2>
                        </div>
                      </div>

                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-[#C4550A] group-hover:bg-[#C4550A]/20 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Handle & Description */}
                    <div className="mb-8">
                      <p className="font-mono text-[15px] font-semibold text-[#C4550A] mb-3 group-hover:text-[#F07A28] transition-colors">
                        {channel.handle}
                      </p>
                      <p className="text-white/60 text-[14px] leading-relaxed font-light">
                        {channel.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.25em] text-white/70 group-hover:text-white transition-colors">
                    <span>{channel.actionText}</span>
                    <span className="text-[#C4550A] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Information Banner */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="rounded-[30px] border border-white/10 bg-[#140C07]/80 backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#C4550A]/15 border border-[#C4550A]/30 flex items-center justify-center text-[#C4550A] flex-shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-barlow-condensed text-[24px] font-bold text-white uppercase tracking-wide mb-2">
                    ESTÚDIO DE GRAVAÇÃO & SEDE
                  </h3>
                  <p className="text-white/60 text-[14px] leading-relaxed max-w-xl">
                    São Paulo, SP — Infraestrutura com setup multicâmera 4K HDR, iluminação cinematográfica, microfones broadcast e curadoria executiva para produções de alto valor.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/50 font-mono text-[12px] uppercase tracking-[0.2em]">
                <Clock className="w-4 h-4 text-[#C4550A]" />
                <span>Gravações com Agendamento Prévio</span>
              </div>
            </motion.div>

          </div>
        </main>

        <Footer isPodcastPage={true} />
      </div>
    </div>
  );
};

export default PodcastContact;
