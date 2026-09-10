import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface DanielPreloaderProps {
  onComplete: () => void;
}

export const DanielPreloader: React.FC<DanielPreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const penGroupRef = useRef<SVGGElement>(null);
  const penTipRef = useRef<SVGCircleElement>(null);
  const penHaloRef = useRef<SVGCircleElement>(null);
  const calligraphyRef = useRef<SVGGElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setCompleted(true);
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setCompleted(true);
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = "none";
          }
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 1.02,
            duration: 0.65,
            ease: "power2.inOut",
            onComplete: () => {
              onComplete();
            },
          });
        },
      });

      const paths = [
        // D: Haste
        { id: "p-d-stem", el: document.getElementById("p-d-stem"), dur: 0.28, ease: "power2.inOut", startX: 335, startY: 475 },
        // D: Barra transversal de ligação
        { id: "p-d-cross", el: document.getElementById("p-d-cross"), dur: 0.20, ease: "power1.inOut", startX: 270, startY: 600 },
        // D: Arco amplo e laço exterior
        {
          id: "p-d-arch",
          el: document.getElementById("p-d-arch"),
          dur: 0.48,
          ease: "power2.inOut",
          startX: 245,
          startY: 560,
          onCompleteLetter: () => {
            const el = document.getElementById("reveal-d");
            if (el) el.style.display = "block";
          },
        },
        // aniel cursivo
        { id: "p-aniel", el: document.getElementById("p-aniel"), dur: 0.58, ease: "power1.inOut", startX: 375, startY: 580 },
        // Pingo no primeiro i
        {
          id: "p-dot1",
          dot: document.getElementById("p-dot1"),
          cx: 488,
          cy: 535,
          dur: 0.1,
          onCompleteLetter: () => {
            const el = document.getElementById("reveal-aniel");
            if (el) el.style.display = "block";
          },
        },
        // S: Arco superior e subida até o ápice
        { id: "p-s-arch", el: document.getElementById("p-s-arch"), dur: 0.38, ease: "power2.inOut", startX: 640, startY: 550 },
        // S: Haste diagonal central completa (espinha do S)
        { id: "p-s-stem", el: document.getElementById("p-s-stem"), dur: 0.28, ease: "power2.inOut", startX: 725, startY: 465 },
        // S: Laço inferior e saída para conexão
        {
          id: "p-s-exit",
          el: document.getElementById("p-s-exit"),
          dur: 0.26,
          ease: "power1.inOut",
          startX: 580,
          startY: 625,
          onCompleteLetter: () => {
            const el = document.getElementById("reveal-s");
            if (el) el.style.display = "block";
          },
        },
        // ilva e floreio inferior
        { id: "p-ilva", el: document.getElementById("p-ilva"), dur: 0.58, ease: "power1.inOut", startX: 695, startY: 568 },
        // Pingo no segundo i
        { id: "p-dot2", dot: document.getElementById("p-dot2"), cx: 701, cy: 531, dur: 0.1 },
      ];

      const movePen = (x: number, y: number) => {
        if (penTipRef.current && penHaloRef.current) {
          penTipRef.current.setAttribute("cx", String(x));
          penTipRef.current.setAttribute("cy", String(y));
          penHaloRef.current.setAttribute("cx", String(x));
          penHaloRef.current.setAttribute("cy", String(y));
        }
      };

      // Inicializar comprimento e offsets das linhas da máscara com opacidade 0 para evitar vazamentos prematuros
      paths.forEach((item) => {
        if (item.el && item.el instanceof SVGGeometryElement) {
          const len = item.el.getTotalLength();
          gsap.set(item.el, { strokeDasharray: len + 1, strokeDashoffset: len + 1 });
          item.el.style.opacity = "0";
        }
      });

      // Ponto inicial da pena
      const firstPath = paths[0].el as SVGGeometryElement | null;
      if (firstPath) {
        const startPt = firstPath.getPointAtLength(0);
        movePen(startPt.x, startPt.y);
      }

      // Surgimento da pena de caligrafia
      tl.to(penGroupRef.current, { opacity: 1, duration: 0.15 }, 0);

      // Traçado sequencial sincronizado
      paths.forEach((item) => {
        if (item.el && item.el instanceof SVGGeometryElement) {
          const pathEl = item.el;
          const len = pathEl.getTotalLength();
          const progressObj = { p: 0 };

          tl.to(
            progressObj,
            {
              p: 1,
              duration: item.dur,
              ease: item.ease,
              onStart: () => {
                pathEl.style.opacity = "1";
                if (item.startX !== undefined && item.startY !== undefined) {
                  movePen(item.startX, item.startY);
                } else {
                  const pt0 = pathEl.getPointAtLength(0);
                  movePen(pt0.x, pt0.y);
                }
              },
              onUpdate: () => {
                pathEl.style.strokeDashoffset = String(len * (1 - progressObj.p));
                const pt = pathEl.getPointAtLength(progressObj.p * len);
                movePen(pt.x, pt.y);
              },
              onComplete: () => {
                if (item.onCompleteLetter) {
                  item.onCompleteLetter();
                }
              },
            },
            ">-0.02"
          );
        } else if (item.dot) {
          tl.call(
            () => {
              if (item.cx && item.cy) movePen(item.cx, item.cy);
              if (item.dot) item.dot.style.opacity = "1";
              if (item.onCompleteLetter) item.onCompleteLetter();
            },
            undefined,
            ">"
          );
          if (penHaloRef.current) {
            tl.to(penHaloRef.current, { r: 13, opacity: 1, duration: 0.09, yoyo: true, repeat: 1 }, "<");
          }
        }
      });

      // Suavização da pena ao terminar o floreio
      tl.to(penGroupRef.current, { opacity: 0, duration: 0.2 }, "+=0.04");

      // Revelação suave do subtítulo oficial
      if (subtitleRef.current) {
        tl.to(subtitleRef.current, { opacity: 0.9, y: 0, duration: 0.45, ease: "power2.out" }, "-=0.1");
      }

      // Desengate definitivo da máscara para garantir 100% de integridade vetorial nativa
      tl.call(() => {
        if (calligraphyRef.current) {
          calligraphyRef.current.removeAttribute("mask");
        }
      });

      // Respiro estético (0.45s) antes do dissolve de saída
      tl.to({}, { duration: 0.45 });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  const handleSkip = () => {
    if (completed) return;
    setCompleted(true);
    if (containerRef.current) {
      containerRef.current.style.pointerEvents = "none";
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        onComplete: () => {
          onComplete();
        },
      });
    } else {
      onComplete();
    }
  };

  return (
    <div
      ref={containerRef}
      role="status"
      aria-label="Carregando experiência oficial de Daniel Silva"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--marinho)] overflow-hidden select-none"
      style={{
        background: "radial-gradient(circle at center, #00358a 0%, #002867 60%, #001c4a 100%)",
      }}
    >
      {/* Container Centralizado do Logotipo */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-[90vw]">
        <div className="relative w-[300px] sm:w-[440px] md:w-[580px] lg:w-[640px] max-w-full">
          <svg
            id="sig-svg"
            viewBox="215 440 650 200"
            className="w-full h-auto drop-shadow-[0_8px_30px_rgba(0,20,60,0.5)] overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <mask id="daniel-write-mask" maskUnits="userSpaceOnUse" x="215" y="440" width="650" height="200">
                <rect x="215" y="440" width="650" height="200" fill="black" />

                {/* DESBLOQUEIO PROGRESSIVO DE ALTA PRECISÃO:
                    Garante que letras finalizadas nunca sofram cortes ou interrupções */}
                <rect id="reveal-d" x="210" y="430" width="210" height="210" fill="white" style={{ display: "none" }} />
                <rect id="reveal-aniel" x="370" y="480" width="195" height="115" fill="white" style={{ display: "none" }} />
                <rect id="reveal-s" x="550" y="420" width="200" height="230" fill="white" style={{ display: "none" }} />

                {/* TRAÇOS REAIS DE ESCRITA EM TEMPO REAL (todos com opacity 0 inicial para evitar vazamentos de pontas arredondadas) */}
                <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                  {/* D 1: Haste descendente */}
                  <path id="p-d-stem" d="M 335,475 L 270,600" strokeWidth="44" style={{ opacity: 0 }} />
                  {/* D 2: Barra transversal de ligação */}
                  <path id="p-d-cross" d="M 270,600 C 295,595 330,580 375,565" strokeWidth="42" style={{ opacity: 0 }} />
                  {/* D 3: Laço amplo e arco superior */}
                  <path
                    id="p-d-arch"
                    d="M 245,560 C 235,605 255,628 285,618 C 330,575 385,510 410,470 C 420,445 375,438 325,455 C 275,475 235,515 225,555 C 218,590 240,625 270,625 C 320,610 375,565 425,505"
                    strokeWidth="44"
                    style={{ opacity: 0 }}
                  />

                  {/* aniel cursivo */}
                  <path
                    id="p-aniel"
                    d="M 375,580 C 390,555 405,538 412,558 C 418,578 395,588 388,575 C 382,555 400,542 412,555 L 418,580 C 425,565 435,550 442,558 L 442,580 C 452,560 462,552 468,572 L 468,582 C 478,560 488,552 488,580 C 498,558 514,548 514,575 C 522,588 535,535 550,465 C 560,438 575,465 565,505 C 550,545 540,575 560,580 C 570,582 580,575 585,570"
                    strokeWidth="40"
                    style={{ opacity: 0 }}
                  />
                  {/* Pingo no primeiro i */}
                  <circle id="p-dot1" cx="488" cy="535" r="16" fill="white" stroke="none" style={{ opacity: 0 }} />

                  {/* S 1: Arco superior e subida até o ápice (sem invadir a haste do 'l' do Silva) */}
                  <path
                    id="p-s-arch"
                    d="M 640,550 C 600,530 580,505 590,480 C 605,445 660,435 700,446 C 720,450 725,455 725,465"
                    strokeWidth="44"
                    style={{ opacity: 0 }}
                  />
                  {/* S 2: Haste diagonal central completa (espinha do S) */}
                  <path id="p-s-stem" d="M 725,465 L 665,525 L 580,625" strokeWidth="50" style={{ opacity: 0 }} />
                  {/* S 3: Laço inferior e saída para conexão */}
                  <path
                    id="p-s-exit"
                    d="M 580,625 C 555,645 600,650 640,625 C 675,605 690,580 720,565"
                    strokeWidth="46"
                    style={{ opacity: 0 }}
                  />

                  {/* ilva cursivo + floreio dinâmico */}
                  <path
                    id="p-ilva"
                    d="M 695,568 C 708,550 718,548 718,575 C 725,550 740,475 750,505 C 755,530 745,565 745,578 C 755,555 765,550 770,575 L 778,562 C 785,548 795,548 798,575 C 808,555 825,550 862,565"
                    strokeWidth="40"
                    style={{ opacity: 0 }}
                  />
                  {/* Pingo no segundo i */}
                  <circle id="p-dot2" cx="701" cy="531" r="16" fill="white" stroke="none" style={{ opacity: 0 }} />
                </g>
              </mask>
            </defs>

            {/* Grupo Oficial Vetorial Caligráfico */}
            <g ref={calligraphyRef} mask="url(#daniel-write-mask)">
              {/* D inicial */}
              <path
                fill="#ffffff"
                d="M282.5,593.78c-.91,2.04-.82,4.46-3.19,5.04-1.81.45-3.5-.71-4.19-1.92-.98-1.73-.62-3.14-.16-5.77-9.98,5.94-19.55,12.91-27.66,21.49-3.02,3.2-7.06,8.84-6.1,10.95,1.27,2.81,13.47.34,19.84-1.64,8.67-2.7,16.63-5.96,24.95-9.87,28.25-13.25,54.41-29.9,78.58-49.65,17.23-14.08,35.05-31.71,44.92-51.53,7.46-14.98,8.86-32.03-5.45-42.09-11.66-8.19-29.93-9.61-44.36-8.2-41.93,4.09-85.16,25.12-117.32,51.76-5.61,4.65-10.29,9.52-14.74,15.14.3,2.38-.75,4.42-3.09,4.63-1.7-.05-2.94-1.18-3.59-2.19-2.65-4.17,2.04-9.79,6.21-14.2,20.95-22.16,56.09-41.49,84.95-51.74,28.54-10.14,70.96-18.28,96.18,0,11.14,8.07,16.16,20.82,13.94,34.38-3.66,22.39-23.76,45.66-40.8,60.72-23.15,20.45-48.4,38.06-75.7,52.53-15.78,8.36-51.82,25.51-66.39,18.65-4.57-2.15-6.1-7.12-4.16-11.79,2.35-5.49,6.14-9.91,10.62-14.04,9.88-9.09,20.99-16.21,33.04-22.48,7.5-17.1,15.33-33.59,24.63-49.87l28.3-49.54c1.08-1.88,4.17-.98,5.18-.07,1.47,1.32,2.58,3.49,1.49,5.55l-23.88,42.24c-8.53,15.09-16.21,30-23.82,45.93,16.86-7.25,33.46-13.65,51.14-17.88,6.98-1.67,13.57-2.92,20.65-3.1,1.1,0,1.78.37,2.13,1.02.29.53.16,2.04-.76,2.13-23.66,2.51-55.54,15.27-77.34,26.39l-4.04,9.06Z"
              />
              <g>
                {/* aniel */}
                <path
                  fill="#ffffff"
                  d="M396.31,575.59c-5.93,5.47-13.39,14.04-18.59,10.19-6.21-4.6,1.99-16.41,7.53-22.93,4.75-5.59,12.47-12.93,18.42-11.05,2,.63,2.98,2.84,4.27,4.57,1.82,2.44,2.3,4.04.64,6.84-2.31,3.9-4.41,8.12-5.14,13.03,7.31-3.18,12.99-8.32,19.06-13.12,2.68-2.12,4.73-4.24,5.98-7.52.78-2.03,2.83-3.45,4.66-2.8,2.14.76,3.45,3.17,2.4,5.37l-3.52,7.36c6.05-4.72,14.29-14.01,19.4-10.96,1.65.98,3.06,3.28,2.4,5.61l-2.73,9.56c-.58,2.02-1.33,3.88-.62,6.22,6.94-3.42,13.42-7.43,18.46-12.93l6.43-9.88c1.05-1.61,3.12-1.29,4.38-.41,1.56,1.09,2.29,3.13,1.26,4.96l-6.45,11.48c-1.51,2.69-2.95,5.27-3.33,8.72,5.64-1.99,10.11-5.17,14.69-8.59,2.54-9.65,15.1-24.64,22.59-21.39,1.5.65,3.76,2.38,4.05,4.62.94,7.46-10.13,17.35-18.96,20.02-1.8.54-1.9,2.12-1.21,3.94,1.46,3.83,12.31-1.02,16.69-4.23l13.89-10.2c5.13-14.94,12.06-28.62,20.21-42.01,5.32-8.75,16.29-25.14,24.3-28.45,2.17-.9,4.02.79,5.13,1.91,3.64,3.71-1.5,12.59-4.82,19.15-4.64,9.18-10.35,17.34-16.37,25.66s-13.2,15.72-20.45,23.32c-2.82,6.19-5.89,16.52-2.44,20.79,2.27,2.81,9.57,1.41,14.43-.42l21.91-8.27c5.51-2.08,12.34-5.11,15.27-3.2.47.31.79,2.03.11,2.18-2.63.58-4.92,1.1-7.41,2.24l-24.62,11.2c-4.54,2.06-9.12,3.45-14.06,3.89-6.59.58-12.14-3.3-13.5-9.72-.67-3.15-.46-6.13-.04-9.44l-13.97,9.6c-3.01,2.07-6.56,3.2-10.22,3.72-5.27.75-9.95-2.44-11.2-7.8-5.86,4.49-13.87,10.59-18.72,6.27-2.32-2.07-2.95-5.1-1.98-8.76l-9.94,6.65c-2.38,1.59-5.3,1.9-7.89.23-5.97-3.85-2.83-11.64-.53-19.11-9.52,6.6-16.68,14.97-24.35,23.09-1.25,1.33-3.36.33-4.18-.46-1.17-1.14-2.04-3.16-1.24-4.91l3.25-7.08c-6.3,4.54-15.04,13.11-20.22,9.7-1.91-1.26-3.07-3.65-3.11-6.48ZM537.48,546.39c12.23-13.87,22.37-29,29.85-46.29-7.4,7.18-12.68,15.41-17.95,23.88l-11.9,22.41ZM507.76,553.3c-.35-.78-1.7-1.1-3.43.15-4.54,3.26-8.32,8.59-9.73,12.85,5.66-2.99,14.38-10.04,13.16-13ZM402.48,557.99c-2.57.48-3.94,2.05-5.78,3.43-4.91,4.56-9.38,9.51-12.41,15.96,6.69-4.85,14.58-12.21,18.19-19.4Z"
                />
                {/* Pingo no i 1 */}
                <path
                  fill="#ffffff"
                  d="M490.32,538.13c-1.3,1.83-2.73,2.95-4.67,2.43-1.78-.48-3.09-2.24-2.74-4.43.26-1.7,1.28-3.67,2.62-4.74,1.9-1.52,4.05-.37,5.33,1.12,1.5,1.74.97,3.49-.54,5.62Z"
                />
              </g>
              <g>
                {/* Silva + Floreio */}
                <path
                  fill="#ffffff"
                  d="M764.36,555.93c5.13,2.81,10.18-13.53,20.38-10.67,1.86.52,2.35,2.64,3.64,4.03,1.63,1.75,2.92,3.04,1.55,5.65-2.73,5.16-5.93,13.42-3.08,16.36,3.27,3.37,13.4-.17,19.69-2.62l25.37-9.92c6.54-2.55,13.04-4.53,20.06-5.08,6.25-.49,10.12,2.89,8.77,4.89-.59.87-1.48.25-2.43-.07-8.55-2.9-27.22,6.65-37.62,10.85l-19.61,7.91c-3.27,1.32-6.62,1.83-10.21,1.83-6.57.01-11.68-4.84-11.87-11.64-5.19,5.06-11.91,14.17-16.83,11.18-5.65-3.44-1.55-11.24,2.43-17.78-1.82-.55-3.29-1.04-4.81-2.55l-12.74,17.58c-1.75,2.42-3.97,4.97-6.99,5.87s-6.04-2.25-6.31-5.21l1.33-9.29c-8.74,8.12-22.68,21.66-28.5,9.92-1.34-2.7-.9-5.74-.57-9.34-6.95,5.54-18.36,15.76-24.66,10.92-5.45-4.19-1.93-12.27,1.88-19.21l-14.21,4.92c6.37,12.32.85,25.01-8.27,35.06-15.15,16.71-41.02,30.56-63.01,34.94-8.27,1.65-19.23,2-23.22-4.63-7.02-11.67,17.16-29.9,28.27-37.37,17.96-12.08,37.13-21.39,57.55-29.62-2.99-3.9-6.98-6.9-11.49-9.14l-22.07-10.99c-12.1-6.03-26.92-12.96-33.23-25.04-7.48-14.31,2.79-27.03,14.46-36.64,17.18-14.15,36.87-24.68,58.13-31.36,10.42-3.28,24.57-5.99,34.15-2.37,7.23,2.73,10.38,9.87,8.2,17.16s-6.04,13.47-10.67,19.61c-9.1,12.03-19.31,22.64-30.08,33.2-1.91,1.87-4.08,2.91-6.31,1.13-1.71-1.37-2.34-4.29-.44-6.21l22.5-22.83c7.55-7.66,26.77-31.95,15.4-35.57-9.06-2.89-22.21.65-31.9,3.96-17.57,6-33.81,14.65-48.62,25.83-7.65,5.78-19.05,15.76-19.61,24.63-.64,10.09,11.79,18.8,20.79,23.24l20.66,10.19c9.63,4.75,19.74,10.11,26.21,18.88l20-6.5,2.54-3.7c1.36-1.99,3.69-2.57,5.55-1.1,1.68,1.33,1.84,3.4.55,5.5l-4.93,7.98c-2.1,3.39-3.84,6.84-4.48,10.82,3.81-.81,6.55-2.39,9.22-4.41l14.06-10.64c7.21-17.56,16.04-33.92,26.54-49.63,4.47-6.68,14.62-20.59,20.66-20.62,3.72-.02,6.07,3.83,5.34,7.36-3.88,18.72-28.1,47.59-43.66,60.57-2.58,5.78-6.1,13.69-4.89,19.49,3.45-.69,6.16-2.29,8.86-4.32,5.74-4.32,11.36-8.68,16.24-14.02l4.3-8.02c.93-1.73,3.25-1.27,4.38-.54,1.93,1.24,2.14,3.19,1.35,5.15-2.61,6.51-5.44,12.7-6.72,19.72,6.67-7.21,12.27-14.26,17.14-22.13,1.09-1.75,2.39-9.16,6.76-7.27,5.15,2.22-4.11,9.93-.86,11.71ZM725.84,540.16c10.48-10.18,18.33-21.49,25.29-33.61,1.68-3.67,3.64-6.76,4.42-10.8l-10.52,12.04c-7.09,10.37-13.77,20.87-19.19,32.38ZM768.47,568.7c6.13-5.16,11.07-10.62,14.83-17.3-6.11,2.38-12.17,11.34-14.83,17.3ZM600.68,625.88c18.08-5.46,34.63-14.3,48.69-26.44,9.33-8.05,19.42-21.02,13.63-32.53-24.9,10.38-58.41,28.46-76.22,47.72-3.63,3.93-8.52,10.48-6.14,12.61,2.6,2.32,13.69.55,20.03-1.36Z"
                />
                {/* Pingo no i 2 */}
                <path
                  fill="#ffffff"
                  d="M704.41,534.63c-1.12,1.57-2.27,2.74-3.97,2.47-1.35-.21-3.01-1.25-3.36-3.05-.46-2.35,1.08-5.36,3.27-6.51,1.95-1.02,3.84.42,4.71,1.69,1.22,1.79.69,3.53-.64,5.41Z"
                />
              </g>
            </g>

            {/* Pena Luminosa / Ponto de Luz que acompanha a escrita */}
            <g
              ref={penGroupRef}
              className="pointer-events-none opacity-0 drop-shadow-[0_0_8px_#D6B588] drop-shadow-[0_0_16px_rgba(214,181,136,0.85)]"
            >
              <circle ref={penTipRef} cx="0" cy="0" r="3.2" fill="#ffffff" />
              <circle ref={penHaloRef} cx="0" cy="0" r="7.5" fill="#D6B588" opacity="0.8" />
            </g>
          </svg>
        </div>

        {/* Subtítulo Oficial em Bege */}
        <div
          ref={subtitleRef}
          className="mt-6 sm:mt-7 text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.35em] text-[var(--bege)] uppercase opacity-0 translate-y-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] text-center select-none"
        >
          Estrategista &bull; Músico &bull; Mentor
        </div>
      </div>

      {/* Botão Discreto de Pular no Canto Inferior */}
      <button
        onClick={handleSkip}
        className={`absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--off-white)]/40 hover:text-[var(--off-white)] px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[var(--bege)]/40 hover:bg-white/5 transition-all duration-300 active:scale-95 ${
          completed ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        Pular
      </button>
    </div>
  );
};

export default DanielPreloader;
