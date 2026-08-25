import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ParticleBackground from "@/components/ParticleBackground";
import founderPicture from "@/assets/akedah-founder.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
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
            <h1 className="font-display text-[54px] md:text-[92px] font-[900] leading-[0.9] tracking-[-0.05em] mb-8">
              Onde a estratégia <br />
              <span className="text-[#C4550A] italic font-normal">encontra a execução.</span>
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
        <section className="bg-[#0A0A0A] py-32 mb-32 border-y border-white/5">
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

        {/* CTA */}
        <section className="container-editorial">
          <div className="bg-[#C4550A] p-12 md:p-24 text-center">
            <h2 className="font-display text-4xl md:text-7xl font-[900] leading-none mb-8">
              PRONTO PARA ESCREVER O PRÓXIMO CAPÍTULO?
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
              Se sua empresa fatura acima de R$ 200k e você sente que a operação comercial está estagnada, vamos conversar.
            </p>
            <a 
              href="/#contato" 
              className="inline-block bg-black text-white px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all"
            >
              Falar com estrategista
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
