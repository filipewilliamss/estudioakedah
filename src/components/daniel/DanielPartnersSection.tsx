import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHATSAPP_URL } from "@/data/services";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const DanielPartnersSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
      });

      // Efeito "levantando do chão" (Ground Lift 3D) idêntico ao hero:
      // rotação no eixo X articulada na base (transformOrigin: 50% 100%) + elevação no eixo Y + fade de opacidade
      // Distribuído com tempo de sobra ao longo da rolagem para visualização clara de cada elemento

      // 1. Tag Alianças & Patrocínios
      if (tagRef.current) {
        tl.fromTo(
          tagRef.current,
          {
            rotateX: 75,
            y: 35,
            opacity: 0,
            filter: "blur(4px)",
          },
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            duration: 0.20,
          },
          0.00
        );
      }

      // 2. Palavra "Marcas"
      if (word1Ref.current) {
        tl.fromTo(
          word1Ref.current,
          {
            rotateX: 82,
            y: 50,
            opacity: 0,
            filter: "blur(6px)",
          },
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            duration: 0.24,
          },
          0.16
        );
      }

      // 3. Palavra "Parceiras"
      if (word2Ref.current) {
        tl.fromTo(
          word2Ref.current,
          {
            rotateX: 82,
            y: 50,
            opacity: 0,
            filter: "blur(6px)",
          },
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            duration: 0.24,
          },
          0.34
        );
      }

      // 4. Barra de Categorias (Convenções • Embaixador • Conselho)
      if (categoriesRef.current) {
        tl.fromTo(
          categoriesRef.current,
          {
            rotateX: 75,
            y: 40,
            opacity: 0,
            filter: "blur(5px)",
          },
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            duration: 0.22,
          },
          0.52
        );
      }

      // 5. Botão de CTA Institucional
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          {
            rotateX: 70,
            y: 30,
            opacity: 0,
            filter: "blur(4px)",
          },
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            duration: 0.20,
          },
          0.68
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="patrocinadores"
      ref={sectionRef}
      className="relative w-full z-[1] bg-[var(--marinho)]"
      style={{ minHeight: "200vh" }}
    >
      {/* Sticky Viewport Frame que segura a seção estável na tela enquanto os elementos se erguem */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] flex flex-col justify-center overflow-hidden font-lato">
        <div
          className="container w-full text-left"
          data-section="patrocinadores"
          style={{ perspective: "1000px", perspectiveOrigin: "50% 100%" }}
        >
        <div
          ref={tagRef}
          className="font-lato font-bold text-fluid-12 tracking-[0.22em] text-[var(--bege)] uppercase mb-[2rem]"
          style={{ transformOrigin: "50% 100%", willChange: "transform, opacity, filter" }}
        >
          Alianças &amp; Patrocínios
        </div>

        <h3
          className="display text-fluid-100 text-[var(--off-white)] leading-[0.88] tracking-[-0.02em] uppercase mb-[4rem] max-w-[14ch]"
          style={{ perspective: "1000px", perspectiveOrigin: "50% 100%" }}
        >
          <span
            ref={word1Ref}
            className="inline-block mr-[0.32em]"
            style={{ transformOrigin: "50% 100%", willChange: "transform, opacity, filter" }}
          >
            Marcas
          </span>
          <span
            ref={word2Ref}
            className="inline-block"
            style={{ transformOrigin: "50% 100%", willChange: "transform, opacity, filter" }}
          >
            parceiras
          </span>
        </h3>

        <div
          ref={categoriesRef}
          className="flex flex-wrap items-center gap-[2rem] md:gap-[4rem] text-fluid-26 font-lato font-black uppercase text-[var(--off-white)]/60 border-y border-white/[0.15] py-[2.4rem] mb-[3.4rem]"
          style={{ transformOrigin: "50% 100%", willChange: "transform, opacity, filter" }}
        >
          <span className="hover:text-[var(--off-white)] transition-colors">Convenções</span>
          <span className="text-[var(--bege)] select-none">•</span>
          <span className="hover:text-[var(--off-white)] transition-colors">Embaixador</span>
          <span className="text-[var(--bege)] select-none">•</span>
          <span className="hover:text-[var(--off-white)] transition-colors">Conselho</span>
        </div>

        <div
          ref={ctaRef}
          style={{ transformOrigin: "50% 100%", willChange: "transform, opacity, filter" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[1rem] text-[var(--bege)] hover:text-[var(--off-white)] font-lato font-black text-fluid-13 uppercase tracking-[0.16em] transition-colors"
          >
            <span>Consultar Disponibilidade Institucional</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default DanielPartnersSection;
