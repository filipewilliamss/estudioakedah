import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const fullSymbolPath = "M665.95,471.38l-240.33-138.75v33.11l225.99,130.48c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16l-64.91,37.48,36.43,12.1,42.82-24.72c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03ZM885.89,466.6l-389.84-225.08c-28.59-16.52-63.18-14.46-89.53,4.9l-9.44,8.03c-13.03,12.96-21.25,29.88-23.45,48.15l-22.09-12.77-75.42-43.53c-28.59-16.52-63.18-14.46-89.53,4.9l-9.44,8.03c-15.37,15.28-24.05,36.07-24.05,58.09v450.15c0,28.09,14.1,53.88,37.72,69.02,12.65,8.13,27.18,12.62,42.07,13.05.77.02,1.53.05,2.32.05,9.51,0,18.86-1.67,27.85-4.97l2.63-.98.1-.1c3.51-1.41,6.98-3.11,10.33-5.04l77.6-44.8c-2.96-9.73-4.54-19.99-4.59-30.5l-87.38,50.47c-2.77,1.6-5.64,2.94-8.51,3.99l-1,.36c-5.98,2.08-12.19,3.06-18.53,2.87-9.68-.29-19.15-3.23-27.42-8.53-15.56-9.97-24.5-26.32-24.5-44.87v-450.15c0-14.42,5.4-27.54,15.3-37.48l4.4-3.92c17.38-14.06,40.95-15.95,60.29-4.78l87.35,50.44,23.91,13.79v427.32c0,6.36.72,12.6,2.13,18.62,4.76,20.61,17.33,38.68,35.6,50.39,12.65,8.13,27.18,12.62,42.07,13.05.77.02,1.53.05,2.32.05,9.51,0,18.86-1.67,27.85-4.97l2.63-.98.1-.1c3.51-1.41,6.98-3.11,10.33-5.04l183.89-106.17,77.55-44.78,128.4-74.13c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03ZM871.54,583.79l-150.49,86.9-77.55,44.78-161.82,93.43c-2.77,1.6-5.64,2.94-8.51,3.99l-1,.36c-5.98,2.08-12.19,3.06-18.53,2.87-9.68-.29-19.15-3.23-27.42-8.53-14.65-9.4-23.43-24.43-24.41-41.64l23.81-13.75,119.96-69.26,77.55-44.78,42.82-24.72c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03l-240.33-138.75v33.11l225.99,130.48c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16l-64.91,37.48-77.55,44.78-83.53,48.22-23.91,13.79v-420.3c0-14.42,5.4-27.54,15.3-37.48l4.4-3.92c17.38-14.06,40.95-15.95,60.29-4.78l389.84,225.08c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16Z";

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressPercentRef = useRef<HTMLSpanElement>(null);
  const fillPathRef = useRef<SVGPathElement>(null);
  const [blocks, setBlocks] = useState<number[]>([]);

  useEffect(() => {
    const cols = window.innerWidth < 768 ? 6 : 10;
    setBlocks(Array.from({ length: cols }, (_, i) => i));
  }, []);

  useEffect(() => {
    if (blocks.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Progress counter object
      const progress = { value: 0 };

      // Animate progress 0 -> 100%
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
          if (fillPathRef.current) {
            fillPathRef.current.style.opacity = `${0.15 + (current / 100) * 0.85}`;
          }
        }
      }, 0);

      // Subtle pulse during load
      tl.to(logoWrapperRef.current, {
        scale: 1.04,
        duration: 1.2,
        repeat: 1,
        yoyo: true,
        ease: "sine.inOut"
      }, 0.2);

      // Reveal / Glow flash at 100%
      tl.to(logoWrapperRef.current, {
        scale: 1.1,
        opacity: 0,
        filter: "brightness(1.5)",
        duration: 0.5,
        ease: "power3.in"
      }, "+=0.1");

      // Columns slide up revealing website
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
      {/* Background slide-out curtain columns */}
      <div className="absolute inset-0 flex pointer-events-none">
        {blocks.map((i) => (
          <div 
            key={i} 
            className="preloader-block flex-1 bg-[#101010]" 
          />
        ))}
      </div>

      {/* Main Logo and Loading Beam */}
      <div 
        ref={logoWrapperRef} 
        className="relative z-10 flex flex-col items-center justify-center px-6"
      >
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 flex items-center justify-center">
          <svg 
            viewBox="0 0 1080 1080" 
            className="w-full h-full overflow-visible"
          >
            <defs>
              {/* Neon Glow Filter */}
              <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base Dimmed Logo */}
            <path 
              ref={fillPathRef}
              d={fullSymbolPath} 
              fill="#C4550A" 
              className="transition-opacity duration-300"
              style={{ opacity: 0.2 }}
            />

            {/* Outer Subtle Stroke Silhouette */}
            <path 
              d={fullSymbolPath} 
              fill="none" 
              stroke="#C4550A" 
              strokeWidth="4" 
              strokeOpacity="0.3"
            />

            {/* Laser Stroke Beam Cycling Around the Logo (Without Rotating the Logo) */}
            <path 
              d={fullSymbolPath} 
              fill="none" 
              stroke="#FF7A28" 
              strokeWidth="10" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              filter="url(#logoGlow)"
              className="animate-logo-trace"
              style={{
                strokeDasharray: "280 850",
              }}
            />
          </svg>
        </div>

        {/* Brand & Loading Percentage Counter */}
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

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 z-20 overflow-hidden">
        <div 
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#C4550A] to-[#FF7A28] w-0 shadow-[0_0_12px_#FF7A28]"
        />
      </div>

      {/* Inline Keyframes for continuous SVG path tracing */}
      <style>{`
        @keyframes traceLogoPath {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -1130;
          }
        }
        .animate-logo-trace {
          animation: traceLogoPath 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;