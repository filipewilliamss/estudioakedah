import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ParticleBackground from "@/components/ParticleBackground";
import founderPicture from "@/assets/akedah-founder.jpg";
import studioImg from "@/assets/akedah-podcast-studio.jpg";
import infraImg from "@/assets/svc-infraestrutura.jpg";
import consultoriaImg from "@/assets/svc-consultorias.jpg";

const structureItems = [
  {
    title: "Estúdio de Podcast & Gravações",
    tag: "Captação 4K",
    description: "Ambiente tratado acusticamente com setup multicâmera 4K, iluminação cinematográfica e microfones broadcast de alta definição.",
    image: studioImg,
    features: ["4 Câmeras 4K", "Microfones Shure", "Cenografia Modular"],
  },
  {
    title: "Central de Produção & Edição",
    tag: "Pós-Produção",
    description: "Ilhas de edição com monitores calibrados para color grading, cortes verticais dinâmicos (Reels/Shorts) e finalização em tempo recorde.",
    image: infraImg,
    features: ["Color Grading", "Cortes Dinâmicos", "Entrega Rápida"],
  },
  {
    title: "Sala de Reuniões & Estratégia",
    tag: "Consultoria",
    description: "Espaço privativo com conforto executivo para imersões comerciais, alinhamento de estratégias, auditoria de marketing e mentorias.",
    image: consultoriaImg,
    features: ["Privacidade Total", "Métricas em Tempo Real", "Conforto VIP"],
  },
];

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
        {/* Hero Section */}
        <section className="container-editorial mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em] mb-6 block">
              Nossa História
            </span>
            <h1 className="font-display text-[44px] sm:text-[64px] md:text-[84px] font-[900] leading-[0.92] tracking-[-0.05em] mb-8">
              <span className="block">Onde a estratégia</span>
              <span className="text-[#C4550A] italic font-normal block">encontra a execução.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
              A Akedah não nasceu de um plano de negócios de prateleira. Nasceu do campo de batalha comercial, resolvendo problemas reais de empresas que faturavam muito, mas cresciam pouco.
            </p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] border border-white/10 overflow-hidden"
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

        {/* Meaning Section */}
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

        {/* Method Section */}
        <section className="container-editorial mb-32">
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

        {/* Studio Structure Section */}
        <section className="container-editorial mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">
                Infraestrutura
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                Estrutura do Estúdio
              </h2>
            </div>
            <p className="text-white/60 text-base md:text-lg max-w-md leading-relaxed">
              Equipamentos de última geração, isolamento acústico profissional e ambientes planejados para transformar suas gravações em autoridade imediata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {structureItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-[#181818] border border-white/10 hover:border-[#C4550A]/50 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 text-[#C4550A] text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-[#C4550A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {item.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] font-mono text-white/40 bg-white/5 px-2.5 py-1 rounded"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
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
