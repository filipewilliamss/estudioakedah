import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const symbolContainerRef = useRef<HTMLDivElement>(null);
  const symbol1Ref = useRef<SVGPathElement>(null);
  const symbol2Ref = useRef<SVGPathElement>(null);
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

      // Initial positions for elements
      gsap.set(symbol1Ref.current, { x: -40, opacity: 0 });
      gsap.set(symbol2Ref.current, { x: 40, opacity: 0 });

      // 1. Players move towards each other and fade in
      tl.to([symbol1Ref.current, symbol2Ref.current], {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.1
      });

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
        viewBox="150 200 800 800" 



        className="w-full h-full fill-[#C4550A]"
      >
        {/* Using the actual paths from akedah-symbol.svg */}
        <path 
          ref={symbol1Ref}
          d="M885.89,466.6l-389.84-225.08c-28.59-16.52-63.18-14.46-89.53,4.9l-9.44,8.03c-13.03,12.96-21.25,29.88-23.45,48.15l-22.09-12.77-75.42-43.53c-28.59-16.52-63.18-14.46-89.53,4.9l-9.44,8.03c-15.37,15.28-24.05,36.07-24.05,58.09v450.15c0,28.09,14.1,53.88,37.72,69.02,12.65,8.13,27.18,12.62,42.07,13.05.77.02,1.53.05,2.32.05,9.51,0,18.86-1.67,27.85-4.97l2.63-.98.1-.1c3.51-1.41,6.98-3.11,10.33-5.04l77.6-44.8c-2.96-9.73-4.54-19.99-4.59-30.5l-87.38,50.47c-2.77,1.6-5.64,2.94-8.51,3.99l-1,.36c-5.98,2.08-12.19,3.06-18.53,2.87-9.68-.29-19.15-3.23-27.42-8.53-15.56-9.97-24.5-26.32-24.5-44.87v-450.15c0-14.42,5.4-27.54,15.3-37.48l4.4-3.92c17.38-14.06,40.95-15.95,60.29-4.78l87.35,50.44,23.91,13.79v427.32c0,6.36.72,12.6,2.13,18.62,4.76,20.61,17.33,38.68,35.6,50.39,12.65,8.13,27.18,12.62,42.07,13.05.77.02,1.53.05,2.32.05,9.51,0,18.86-1.67,27.85-4.97l2.63-.98.1-.1c3.51-1.41,6.98-3.11,10.33-5.04l183.89-106.17,77.55-44.78,128.4-74.13c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03Z"
        />
        <path 
          ref={symbol2Ref}
          d="M665.95,471.38l-240.33-138.75v33.11l225.99,130.48c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16l-64.91,37.48,36.43,12.1,42.82-24.72c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03Z"
        />
      </svg>
    </div>
  );

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000] overflow-hidden">
      {/* Background blocks for transition, but without borders */}
      <div className="absolute inset-0 flex">
        {blocks.map((i) => (
          <div 
            key={i} 
            className="preloader-block flex-1 bg-[#000000]" 
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