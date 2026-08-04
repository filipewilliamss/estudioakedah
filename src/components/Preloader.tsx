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
      gsap.set(symbol1Ref.current, { x: -150, opacity: 0 });
      gsap.set(symbol2Ref.current, { x: 150, opacity: 0 });

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
        viewBox="420 330 250 250" 

        className="w-full h-full fill-[#C4550A]"
      >
        {/* Using the actual path from akedah-symbol.svg as base */}
        <path 
          ref={symbol1Ref}
          d="M665.95,471.38l-240.33-138.75v33.11l225.99,130.48c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16l-64.91,37.48,36.43,12.1,42.82-24.72c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03Z"
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