import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Clock
} from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { WHATSAPP_URL, AKEDAH_EMAIL } from "@/data/services";

interface ContactChannel {
  name: string;
  category: "Mensageria" | "Rede Social" | "Canal Direto";
  handle: string;
  url: string;
  description: string;
  actionText: string;
  icon: (props: { className?: string }) => JSX.Element;
  highlight?: boolean;
}

const contactChannels: ContactChannel[] = [
  {
    name: "WhatsApp",
    category: "Mensageria",
    handle: "+55 (11) 99107-6096",
    url: WHATSAPP_URL,
    description: "Atendimento direto com nossa equipe estratégica para novos projetos e consultorias.",
    actionText: "Iniciar Conversa",
    highlight: true,
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.972.531 1.776.812 2.796.813h.005c3.179 0 5.767-2.586 5.768-5.766 0-1.54-.6-2.988-1.689-4.078-1.09-1.09-2.538-1.692-4.084-1.692zm3.385 8.163c-.145.407-.847.777-1.18.825-.333.048-.769.071-2.484-.639-1.425-.59-2.338-2.039-2.41-2.134-.07-.096-.577-.768-.577-1.464 0-.696.363-1.038.492-1.181.13-.143.283-.179.377-.179.094 0 .188.001.27.006.086.004.202-.033.315.24.118.283.402.98.437 1.052.035.072.059.155.012.249-.047.094-.07.153-.14.236-.07.082-.148.184-.211.247-.07.07-.143.146-.061.287.082.141.365.602.784.975.539.48 0.994.629 1.135.699.141.07.224.059.307-.035.082-.094.353-.412.447-.553.094-.141.188-.118.318-.07.13.047.825.389.966.46.141.07.236.106.27.165.035.059.035.342-.11.749zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.438 5.169L2 22l4.98-1.306C8.423 21.525 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.698 0-3.27-.514-4.577-1.393l-.328-.222-2.962.777.791-2.887-.243-.387A8.204 8.204 0 0 1 3.75 12c0-4.549 3.701-8.25 8.25-8.25 4.549 0 8.25 3.701 8.25 8.25 0 4.549-3.701 8.25-8.25 8.25z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    category: "Rede Social",
    handle: "@estudioakedah",
    url: "https://instagram.com/estudioakedah",
    description: "Bastidores, processos, lançamentos e nosso dia a dia de estratégia e produção.",
    actionText: "Acessar Perfil",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    category: "Rede Social",
    handle: "Estúdio Akedah",
    url: "https://linkedin.com/company/estudioakedah",
    description: "Insights B2B, análises de mercado, expansão corporativa e networking institucional.",
    actionText: "Conectar no LinkedIn",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    category: "Rede Social",
    handle: "@estudioakedah",
    url: "https://tiktok.com/@estudioakedah",
    description: "Cortes dinâmicos, análises rápidas, hacks comerciais e destaques em vídeo curto.",
    actionText: "Seguir no TikTok",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    category: "Rede Social",
    handle: "Estúdio Akedah",
    url: "https://facebook.com/estudioakedah",
    description: "Publicações institucionais, eventos corporativos e novidades da comunidade.",
    actionText: "Acompanhar no Facebook",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      </svg>
    ),
  },
  {
    name: "E-mail Corporativo",
    category: "Canal Direto",
    handle: AKEDAH_EMAIL,
    url: `mailto:${AKEDAH_EMAIL}`,
    description: "Envio de briefings detalhados, propostas comerciais e solicitações formais.",
    actionText: "Enviar E-mail",
    icon: ({ className }) => <Mail className={className} />,
  }
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#101010] text-white relative flex flex-col selection:bg-[#C4550A] selection:text-white">
      <ParticleBackground />
      
      <SEO 
        title="Contato e Redes Sociais | Akedah"
        description="Fale diretamente com o Estúdio Akedah através do WhatsApp, Instagram, LinkedIn, TikTok, Facebook ou E-mail."
      />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />
        
        <main className="flex-1 pt-36 md:pt-48 pb-28 px-6">
          <div className="container-editorial max-w-7xl mx-auto">
            
            {/* Header / Hero */}
            <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[#C4550A] animate-pulse" />
                <span className="text-[#C4550A] font-mono text-[11px] md:text-[12px] uppercase tracking-[0.3em] font-bold">
                  Canais Oficiais
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-[42px] sm:text-[60px] md:text-[84px] lg:text-[100px] font-[900] leading-[0.92] tracking-[-0.04em] text-white mb-8"
              >
                Fale com a <br className="hidden sm:inline" />
                <span className="text-[#C4550A] italic font-normal">Akedah.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/60 text-[16px] sm:text-[19px] md:text-[22px] leading-relaxed max-w-2xl mx-auto font-light"
              >
                Conecte-se conosco através de nossas redes sociais ou envie uma mensagem direta pelo canal de sua preferência.
              </motion.p>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {contactChannels.map((channel, idx) => (
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
                      ? "bg-gradient-to-b from-[#C4550A]/20 via-[#181818] to-[#141414] border-[#C4550A]/40 hover:border-[#C4550A] shadow-[0_10px_30px_rgba(196,85,10,0.15)]"
                      : "bg-[#141414]/90 hover:bg-[#181818] border-white/10 hover:border-[#C4550A]/60"
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
                            ? "bg-[#C4550A] text-white shadow-lg shadow-[#C4550A]/30" 
                            : "bg-white/[0.06] text-white/90 group-hover:bg-[#C4550A] group-hover:text-white"
                        }`}>
                          <channel.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-white/40 block mb-1">
                            {channel.category}
                          </span>
                          <h2 className="font-display text-[22px] font-bold text-white tracking-tight">
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
                      <p className="text-white/55 text-[14px] leading-relaxed font-light">
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
              className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#C4550A] flex-shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display text-[20px] font-bold text-white mb-2">
                    Atendimento e Sede
                  </h3>
                  <p className="text-white/50 text-[14px] leading-relaxed max-w-md">
                    São Paulo, SP — Atendimento presencial com agendamento prévio ou remoto para empresas de todo o Brasil.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/40 font-mono text-[12px] uppercase tracking-[0.2em]">
                <Clock className="w-4 h-4 text-[#C4550A]" />
                <span>Seg a Sex · 09h às 18h</span>
              </div>
            </motion.div>

          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Contact;