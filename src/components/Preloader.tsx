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
      gsap.set(symbol1Ref.current, { x: -30, opacity: 0 });
      gsap.set(symbol2Ref.current, { x: 30, opacity: 0 });

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
    <div ref={symbolContainerRef} className="relative w-24 h-24 md:w-32 md:h-32">
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full fill-[#C4550A]"
      >
        {/* Simplified rounded triangles (play buttons) based on Akedah logo style */}
        <path 
          ref={symbol1Ref}
          d="M20,25 C20,22 23,20 25,22 L75,47 C77,48 77,52 75,53 L25,78 C23,80 20,78 20,75 Z" 
        />
        <path 
          ref={symbol2Ref}
          d="M45,25 C45,22 48,20 50,22 L100,47 C102,48 102,52 100,53 L50,78 C48,80 45,78 45,75 Z" 
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