import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ParticleBackground from "@/components/ParticleBackground";
import founderPicture from "@/assets/akedah-founder.jpg";
import studioBannerImg from "@/assets/akedah-podcast-studio.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-[#101010] text-white relative">
      <ParticleBackground />
      <SEO 
        title="Nossa História | Akedah"
        description="Conheça a história da Akedah, o Método Akedah e a trajetória do fundador Daniel Silva."
      />
      <Navbar forceBlack={true} />
      <div className="relative z-10">
      
      <main className="pt-32 pb-24">
        {/* 1. Hero Section */}
        <section className="container-editorial mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em] mb-6 block">
              Estúdio Akedah
            </span>
            <h1 className="font-display text-[54px] sm:text-[76px] md:text-[96px] font-[900] leading-[0.88] tracking-[-0.05em] mb-8">
              <span className="block">Nossa</span>
              <span className="text-[#C4550A] italic font-normal block">história</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
              A Akedah não nasceu de um plano de negócios de prateleira. Nasceu do campo de batalha comercial, resolvendo problemas reais de empresas que faturavam muito, mas cresciam pouco.
            </p>
          </motion.div>
        </section>

        {/* 2. Nossa Estrutura (Card Retangular Panorâmico + Bloco Descritivo) */}
        <section className="container-editorial mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            {/* Card Único e Retangular da Imagem (formato 1024x200 px aprox.) */}
            <div className="relative w-full max-w-5xl h-[200px] sm:h-[230px] md:h-[260px] border border-white/10 overflow-hidden group rounded-[16px] shadow-2xl">
              <img 
                src={studioBannerImg} 
                alt="Estrutura do Estúdio Akedah" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-[#101010]/20" />
              <div className="absolute bottom-4 left-6 sm:left-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C4550A] animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/80">
                  Infraestrutura & Tecnologia Audiovisual
                </span>
              </div>
            </div>

            {/* Bloco de Texto Descritivo da Estrutura */}
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">
                  Ambiente de Alto Padrão
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Nossa Estrutura
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70 text-base md:text-lg leading-relaxed pt-2">
                <p>
                  O Estúdio Akedah foi planejado e construído para oferecer uma experiência audiovisual completa, com isolamento acústico profissional, climatização silenciosa e ambientação acolhedora para você e seus convidados.
                </p>
                <p>
                  Dispomos de setup multicâmera com gravação em 4K HDR, captação de áudio cristalina com microfones broadcast Shure, iluminação cinematográfica ajustável e ilhas de edição integradas para entrega ágil de episódios e cortes dinâmicos.
                </p>
              </div>

              {/* Destaques da Estrutura */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[10px]">
                  <p className="text-[#C4550A] font-bold text-lg mb-1">4K HDR</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Captação Multicâmera</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[10px]">
                  <p className="text-[#C4550A] font-bold text-lg mb-1">Shure SM7B</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Áudio Broadcast</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[10px]">
                  <p className="text-[#C4550A] font-bold text-lg mb-1">Fibra Óptica</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Streaming Redundante</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[10px]">
                  <p className="text-[#C4550A] font-bold text-lg mb-1">Privativo</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Espaço Exclusivo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. Story Section (A trajetória do Daniel Silva) */}
        <section className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] border border-white/10 overflow-hidden rounded-[12px]"
            >
              <img 
                src={founderPicture} 
                alt="Daniel Silva - Fundador da Akedah" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              A trajetória do <span className="text-[#C4550A]">Daniel Silva</span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Com mais de 5 anos de experiência direta no comercial de empresas de diversos setores, Daniel Silva percebeu um padrão: o marketing trazia leads, mas o comercial não sabia o que fazer com eles. Ou pior, o marketing trazia as pessoas erradas.
              </p>
              <p>
                Foi vivenciando essa desconexão que ele desenvolveu uma metodologia que coloca a estratégia comercial no centro. Se a venda não acontece, o marketing é apenas custo.
              </p>
              <p>
                Hoje, a Akedah é a materialização dessa visão. Um estúdio em São Paulo que une inteligência estratégica, produção de conteúdo de alto nível e automação comercial para garantir que cada centavo investido se transforme em crescimento previsível.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-[#C4550A] font-bold text-4xl mb-1">5+</p>
                <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-[#C4550A] font-bold text-4xl mb-1">200k+</p>
                <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold">Faturamento dos Clientes</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Meaning Section (O que significa Akedah) */}
        <section className="py-32 mb-32">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">O que significa <span className="text-[#C4550A]">Akedah</span>?</h2>
              <p className="text-white/60 text-xl leading-relaxed italic">
                "Akedah é um termo de origem hebraica que remete a entrega e compromisso absoluto. Para nós, representa o nível de dedicação que colocamos em cada estratégia comercial: não aceitamos nada menos que o resultado excepcional."
              </p>
            </div>
          </div>
        </section>

        {/* 5. Method Section (O Método Akedah) */}
        <section className="container-editorial mb-16">
          <div className="text-center mb-16">
            <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">Processo</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold">O Método Akedah</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {[
              { num: "01", title: "Diagnóstico", desc: "Entendemos onde a operação trava antes de propor qualquer mudança." },
              { num: "02", title: "Posicionamento", desc: "Ajustamos a mensagem para atrair quem realmente tem poder de compra." },
              { num: "03", title: "Estratégia", desc: "Desenhamos o caminho do lead até a conversão final." },
              { num: "04", title: "Execução", desc: "Produzimos o conteúdo e as campanhas que vão rodar a operação." },
              { num: "05", title: "Autonomia", desc: "Entregamos inteligência para que sua empresa não dependa eternamente de nós." },
            ].map((step) => (
              <div key={step.num} className="bg-black p-8 group hover:bg-[#C4550A]/5 transition-colors">
                <span className="text-[#C4550A] font-bold text-sm mb-4 block">{step.num}</span>
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      </div>

      <Footer />
    </div>
  );
};

export default About;
