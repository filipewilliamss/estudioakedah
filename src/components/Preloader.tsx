import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Símbolo Oficial Akedah (Chevrons com recorte interno e externo perfeito)
const symbolCompoundPath = "M885.89,466.6l-389.84-225.08c-28.59-16.52-63.18-14.46-89.53,4.9l-9.44,8.03c-13.03,12.96-21.25,29.88-23.45,48.15l-22.09-12.77-75.42-43.53c-28.59-16.52-63.18-14.46-89.53,4.9l-9.44,8.03c-15.37,15.28-24.05,36.07-24.05,58.09v450.15c0,28.09,14.1,53.88,37.72,69.02,12.65,8.13,27.18,12.62,42.07,13.05.77.02,1.53.05,2.32.05,9.51,0,18.86-1.67,27.85-4.97l2.63-.98.1-.1c3.51-1.41,6.98-3.11,10.33-5.04l77.6-44.8c-2.96-9.73-4.54-19.99-4.59-30.5l-87.38,50.47c-2.77,1.6-5.64,2.94-8.51,3.99l-1,.36c-5.98,2.08-12.19,3.06-18.53,2.87-9.68-.29-19.15-3.23-27.42-8.53-15.56-9.97-24.5-26.32-24.5-44.87v-450.15c0-14.42,5.4-27.54,15.3-37.48l4.4-3.92c17.38-14.06,40.95-15.95,60.29-4.78l87.35,50.44,23.91,13.79v427.32c0,6.36.72,12.6,2.13,18.62,4.76,20.61,17.33,38.68,35.6,50.39,12.65,8.13,27.18,12.62,42.07,13.05.77.02,1.53.05,2.32.05,9.51,0,18.86-1.67,27.85-4.97l2.63-.98.1-.1c3.51-1.41,6.98-3.11,10.33-5.04l183.89-106.17,77.55-44.78,128.4-74.13c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03ZM871.54,583.79l-150.49,86.9-77.55,44.78-161.82,93.43c-2.77,1.6-5.64,2.94-8.51,3.99l-1,.36c-5.98,2.08-12.19,3.06-18.53,2.87-9.68-.29-19.15-3.23-27.42-8.53-14.65-9.4-23.43-24.43-24.41-41.64l23.81-13.75,119.96-69.26,77.55-44.78,42.82-24.72c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03l-240.33-138.75v33.11l225.99,130.48c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16l-64.91,37.48-77.55,44.78-83.53,48.22-23.91,13.79v-420.3c0-14.42,5.4-27.54,15.3-37.48l4.4-3.92c17.38-14.06,40.95-15.95,60.29-4.78l389.84,225.08c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16Z";

// Triângulo Central Sólido Oficial (Play)
const centerTrianglePath = "M566.67,544.8c0,4.49-2.25,9.01-6.69,11.59l-9.04,5.21-.5.29-3.13,1.79-.26.17-24.6,14.2-.19.12-.81.48-6.26,3.61-17.07,9.85-4.42,2.56-.53.31-10.28,5.93c-.69.41-1.41.72-2.13.98l-.02.02c-1.63.6-3.28.84-4.9.79-2.46-.07-4.83-.84-6.86-2.13-3.63-2.32-6.17-6.36-6.17-11.26v-89.03c0-4.26,1.91-7.84,4.76-10.26h.02c4.06-3.39,10.06-4.35,15.3-1.34l18.72,10.81,10.45,6.02,10.59,6.12,15.59,9.01.96.55,20.8,12c4.45,2.56,6.69,7.08,6.69,11.59Z";

// Linha guia central (espinha dorsal contínua) que preenche o trajeto todo
const singleFlowSpine = "M 215,310 L 215,750 Q 215,790 250,775 L 430,670 L 465,750 Q 465,790 495,775 L 855,555 Q 880,540 855,525 L 495,305 Q 465,288 465,330 L 465,730 L 530,540";

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressPercentRef = useRef<HTMLSpanElement>(null);
  const fillGroupRef = useRef<SVGGElement>(null);
  const [blocks, setBlocks] = useState<number[]>([]);

  useEffect(() => {
    const cols = window.innerWidth < 768 ? 6 : 10;
    setBlocks(Array.from({ length: cols }, (_, i) => i));
  }, []);

  useEffect(() => {
    if (blocks.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const progress = { value: 0 };

      tl.to(progress, {
        value: 100,
        duration: 2.4,
        ease: "power2.inOut",
        onUpdate: () => {
          const current = Math.round(progress.value);
          if (progressPercentRef.current) {
            progressPercentRef.current.innerText = `${current}%`;
          }
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${current}%`;
          }
          if (fillGroupRef.current) {
            fillGroupRef.current.style.opacity = `${0.22 + (current / 100) * 0.78}`;
          }
        }
      }, 0);

      tl.to(logoWrapperRef.current, {
        scale: 1.03,
        duration: 1.2,
        repeat: 1,
        yoyo: true,
        ease: "sine.inOut"
      }, 0.2);

      tl.to(logoWrapperRef.current, {
        scale: 1.08,
        opacity: 0,
        filter: "brightness(1.4)",
        duration: 0.5,
        ease: "power3.in"
      }, "+=0.1");

      tl.to(".preloader-block", {
        y: "-100%",
        duration: 0.9,
        stagger: {
          amount: 0.35,
          from: "center"
        },
        ease: "power4.inOut",
        onComplete: onComplete
      }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, [blocks, onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#101010] overflow-hidden select-none"
    >
      <div className="absolute inset-0 flex pointer-events-none">
        {blocks.map((i) => (
          <div 
            key={i} 
            className="preloader-block flex-1 bg-[#101010]" 
          />
        ))}
      </div>

      <div 
        ref={logoWrapperRef} 
        className="relative z-10 flex flex-col items-center justify-center px-6"
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-88 md:h-88 flex items-center justify-center">
          <svg 
            viewBox="0 0 1080 1080" 
            className="w-full h-full overflow-visible"
          >
            <defs>
              <mask id="symbolSolidMask">
                <rect x="0" y="0" width="1080" height="1080" fill="#000" />
                <path d={symbolCompoundPath} fill="#fff" fillRule="evenodd" />
                <path d={centerTrianglePath} fill="#fff" />
              </mask>

              <filter id="neonBeamGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4550A" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#FF7A28" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFE0B2" stopOpacity="1" />
              </linearGradient>
            </defs>

            <g ref={fillGroupRef} fill="#C4550A" style={{ opacity: 0.22 }} className="transition-opacity duration-300">
              <path d={symbolCompoundPath} fillRule="evenodd" />
              <path d={centerTrianglePath} />
            </g>

            <g mask="url(#symbolSolidMask)">
              <path
                d={singleFlowSpine}
                fill="none"
                stroke="url(#beamGradient)"
                strokeWidth="110"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#neonBeamGlow)"
                className="animate-single-beam"
                style={{
                  strokeDasharray: "750 2400",
                }}
              />
            </g>

            <path 
              d={centerTrianglePath} 
              fill="#E2650E" 
              className="animate-pulse"
              style={{ opacity: 0.8 }}
            />
          </svg>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <span 
            ref={progressPercentRef}
            className="font-mono text-[#C4550A] text-xl sm:text-2xl font-bold tracking-widest"
          >
            0%
          </span>
          <span className="font-mono text-white/30 text-[10px] sm:text-[11px] uppercase tracking-[0.4em]">
            Estúdio Akedah
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 z-20 overflow-hidden">
        <div 
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#C4550A] to-[#FF7A28] w-0 shadow-[0_0_12px_#FF7A28]"
        />
      </div>

      <style>{`
        @keyframes singleBeamTravel {
          0% {
            stroke-dashoffset: 3150;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .animate-single-beam {
          animation: singleBeamTravel 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;