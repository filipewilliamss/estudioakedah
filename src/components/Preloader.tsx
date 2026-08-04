import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const symbolLeftRef = useRef<SVGSVGElement>(null);
  const symbolRightRef = useRef<SVGSVGElement>(null);
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

      // Initial positions for symbols
      gsap.set(symbolLeftRef.current, { x: -80, opacity: 0, scale: 0.8 });
      gsap.set(symbolRightRef.current, { x: 80, opacity: 0, scale: 0.8 });

      // Connection animation: move towards each other
      tl.to([symbolLeftRef.current, symbolRightRef.current], {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1
      });

      // Subtle pulse while progress bar fills
      tl.to([symbolLeftRef.current, symbolRightRef.current], {
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
      tl.to([symbolLeftRef.current, symbolRightRef.current], {
        opacity: 0,
        scale: 1.3,
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

  // Simplified Play Symbol based on the Akedah aesthetic (triangle/play button)
  const PlaySymbol = ({ svgRef, className }: { svgRef: React.RefObject<SVGSVGElement>, className?: string }) => (
    <svg 
      ref={svgRef}
      viewBox="0 0 100 100" 
      className={`w-20 h-20 md:w-32 md:h-32 fill-[#C4550A] ${className}`}
    >
      <path d="M25 20 L85 50 L25 80 Z" />
    </svg>
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

      {/* Modern connection animation */}
      <div className="relative z-10 flex items-center justify-center gap-0">
        <PlaySymbol svgRef={symbolLeftRef} />
        <PlaySymbol svgRef={symbolRightRef} className="rotate-180 -ml-8" />
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