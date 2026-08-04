import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const symbolContainerRef = useRef<HTMLDivElement>(null);
  const symbolLeftRef = useRef<SVGPathElement>(null);
  const symbolRightRef = useRef<SVGPathElement>(null);
  const playButtonRef = useRef<SVGPathElement>(null);
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
      gsap.set(symbolLeftRef.current, { x: -50, opacity: 0 });
      gsap.set(symbolRightRef.current, { x: 50, opacity: 0 });
      gsap.set(playButtonRef.current, { scale: 0, opacity: 0, transformOrigin: "center" });

      // 1. "Players" move towards each other and fade in
      tl.to([symbolLeftRef.current, symbolRightRef.current], {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      // 2. Play button appears in the center
      tl.to(playButtonRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "-=0.5");

      // 3. Subtle pulse while progress bar fills
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
    <div ref={symbolContainerRef} className="relative w-32 h-32 md:w-48 md:h-48">
      <svg 
        viewBox="0 0 1080 1080" 
        className="w-full h-full fill-[#C4550A]"
      >
        {/* The outer parts (players) */}
        <path 
          ref={symbolLeftRef}
          d="M425.56,332.63l225.99,130.48c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16l-64.91,37.48,36.43,12.1,42.82-24.72c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03L425.56,332.63v33.11z" 
        />
        <path 
          ref={symbolRightRef}
          d="M654.44,747.37l-225.99-130.48c-16.71-9.66-26.68-26.92-26.68-46.19s9.97-36.53,26.68-46.16l64.91-37.48-36.43-12.1-42.82,24.72c-25.68,14.82-41.02,41.38-41.02,71.03s15.35,56.2,41.02,71.03l240.33,138.75v-33.11z" 
          opacity="0.18"
        />
        {/* The inner play button triangle */}
        <path 
          ref={playButtonRef}
          d="M566.67,544.8c0,4.49-2.25,9.01-6.69,11.59l-9.04,5.21-.5.29-3.13,1.79-.26.17-24.6,14.2-.19.12-.81.48-6.26,3.61-17.07,9.85-4.42,2.56-.53.31-10.28,5.93c-.69.41-1.41.72-2.13.98l-.02.02c-1.63.6-3.28.84-4.9.79-2.46-.07-4.83-.84-6.86-2.13-3.63-2.32-6.17-6.36-6.17-11.26v-89.03c0-4.26,1.91-7.84,4.76-10.26h.02c4.06-3.39,10.06-4.35,15.3-1.34l18.72,10.81,10.45,6.02,10.59,6.12,15.59,9.01.96.55,20.8,12c4.45,2.56,6.69,7.08,6.69,11.59z"
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