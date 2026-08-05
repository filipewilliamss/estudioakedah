import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const symbolContainerRef = useRef<HTMLDivElement>(null);
  const symbolLeftRef = useRef<SVGPathElement>(null);
  const symbolRightRef = useRef<SVGPathElement>(null);
  const symbolCenterRef = useRef<SVGPathElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [blocks, setBlocks] = useState<number[]>([]);

  useEffect(() => {
    const cols = window.innerWidth < 768 ? 6 : 10;
    setBlocks(Array.from({ length: cols }, (_, i) => i));
  }, []);

  useEffect(() => {
    if (blocks.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial positions: triangles coming from different directions
      gsap.set(symbolLeftRef.current, { x: -150, opacity: 0 });
      gsap.set(symbolRightRef.current, { x: 150, opacity: 0 });
      gsap.set(symbolCenterRef.current, { scale: 0, opacity: 0 });

      // Triangles se encontrando e formando o símbolo
      tl.to([symbolLeftRef.current, symbolRightRef.current], {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
      })
      .to(symbolCenterRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.5");

      // 2. Subtle pulse while progress bar fills
      tl.to(symbolContainerRef.current, {
        scale: 1.05,
        duration: 0.8,
        repeat: 1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Progress bar animation
      tl.to(progressBarRef.current, {
        width: "100%",
        duration: 2.2,
        ease: "power2.inOut"
      }, 0.3);

      // Final exit animation: symbols scale up and fade
      tl.to(symbolContainerRef.current, {
        opacity: 0,
        scale: 1.2,
        duration: 0.5,
        ease: "power2.in"
      });

      // Grid-less exit: columns slide up
      tl.to(".preloader-block", {
        y: "-100%",
        duration: 1,
        stagger: {
          amount: 0.4,
          from: "center"
        },
        ease: "power4.inOut",
        onComplete: onComplete
      });

    }, containerRef);

    return () => ctx.revert();
  }, [blocks, onComplete]);

  const AkedahSymbol = () => (
    <div ref={symbolContainerRef} className="relative w-64 h-64 md:w-96 md:h-96">
      <svg 
        viewBox="0 0 1080 1080" 
        className="w-full h-full"
      >
        {/* Triângulo da Direita */}
        <path 
          ref={symbolRightRef}
          className="st0" 
          fill="#c4550a"
          d="M885.89,466.6l-389.84-225.08c-28.59-16.52-63.18-14.46-89.53,4.9l-9.44,8.03c-13.03,12.96-21.25,29.88-23.45,48.15l-.6,32.78v427.32c0,6.36.72,12.6,2.13,18.62,4.76,20.61,17.33,38.68,35.6,50.39,12.65,8.13,27.18,12.62,42.07,13.05.77.02,1.53.05,2.32.05,9.51,0,18.86-1.67,27.85-4.97l2.63-.98.1-.1c3.51-1.41,6.98-3.11,10.33-5.04l183.89-106.17,77.55-44.78,128.4-74.13c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03ZM871.54,583.79l-150.49,86.9-77.55,44.78-161.82,93.43c-2.77,1.6-5.64,2.94-8.51,3.99l-1,.36c-5.98,2.08-12.19,3.06-18.53,2.87-9.68-.29-19.15-3.23-27.42-8.53-14.65-9.4-23.43-24.43-24.41-41.64l-.1-33.09v-420.3c0-14.42,5.4-27.54,15.3-37.48l4.4-3.92c17.38-14.06,40.95-15.95,60.29-4.78l389.84,225.08c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16Z"
        />
        
        {/* Triângulo da Esquerda (Cortado/Outliner) */}
        <path 
          ref={symbolLeftRef}
          className="st0" 
          fill="none"
          stroke="#c4550a"
          strokeWidth="10"
          d="M276.11,246.31c-28.59-16.52-63.18-14.46-89.53,4.9l-9.44,8.03c-15.37,15.28-24.05,36.07-24.05,58.09v450.15c0,28.09,14.1,53.88,37.72,69.02,12.65,8.13,27.18,12.62,42.07,13.05.77.02,1.53.05,2.32.05,9.51,0,18.86-1.67,27.85-4.97l2.63-.98.1-.1c3.51-1.41,6.98-3.11,10.33-5.04l77.6-44.8c-2.96-9.73-4.54-19.99-4.59-30.5l-87.38,50.47c-2.77,1.6-5.64,2.94-8.51,3.99l-1,.36c-5.98,2.08-12.19,3.06-18.53,2.87-9.68-.29-19.15-3.23-27.42-8.53-15.56-9.97-24.5-26.32-24.5-44.87v-450.15c0-14.42,5.4-27.54,15.3-37.48l4.4-3.92c17.38-14.06,40.95-15.95,60.29-4.78l87.35,50.44,23.91,13.79.6-32.78-22.09-12.77-75.42-43.53Z"
        />

        {/* Outra parte do design que parece ser o triângulo central menor preenchido */}
        <path 
          ref={symbolCenterRef}
          className="st0" 
          fill="#c4550a"
          d="M559.97,533.21l-20.8-12-.96-.55-15.59-9.01-10.59-6.12-10.45-6.02-18.72-10.81c-5.24-3.01-11.24-2.06-15.3,1.34h-.02c-2.84,2.41-4.76,6-4.76,10.26v89.03c0,4.9,2.53,8.94,6.17,11.26,2.03,1.29,4.4,2.06,6.86,2.13,1.63.05,3.28-.19,4.9-.79l.02-.02c.72-.26,1.43-.57,2.13-.98l10.28-5.93.53-.31,4.42-2.56,17.07-9.85,6.26-3.61.81-.48.19-.12,24.6-14.2.26-.17,3.13-1.79.5-.29,9.04-5.21c4.45-2.58,6.69-7.1,6.69-11.59s-2.25-9.04-6.69-11.59Z"
        />
      </svg>
    </div>
  );

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#101010] overflow-hidden">
      {/* Background blocks for transition, but without borders */}
      <div className="absolute inset-0 flex">
        {blocks.map((i) => (
          <div 
            key={i} 
            className="preloader-block flex-1 bg-[#101010]" 
          />
        ))}
      </div>

      <div className="relative z-10">
        <AkedahSymbol />
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 z-20">
        <div 
          ref={progressBarRef}
          className="h-full bg-[#C4550A] w-0"
        />
      </div>
    </div>
  );
};

export default Preloader;