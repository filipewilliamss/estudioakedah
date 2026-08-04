import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ---------------------------------------------------------------
    // KIIRO SYMBOL — DOT MATRIX 3D SCULPTURE
    // Geometry is sampled DIRECTLY from the official brand SVG file.
    // The SVG silhouette is rasterized to an offscreen canvas, then
    // every filled pixel becomes a column of dots extruded along Z,
    // creating a volumetric "digital sculpture" of the actual logo.
    // ---------------------------------------------------------------

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const W = 420;
    const H = 480;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.scale(DPR, DPR);

    const CX = W / 2;
    const CY = H / 2;
    const FOCAL = 620; // perspective focal length

    type Dot = {
      ox: number; oy: number; oz: number; // origin (home)
      dx: number; dy: number;             // current 2D offset (interaction)
      vx: number; vy: number;             // velocity
      seed: number;                       // for idle phase
    };

    const dots: Dot[] = [];

    // Camera / interaction state
    const target = { rx: 0, ry: 0 };
    const current = { rx: 0, ry: 0 };
    const mouse = { x: CX, y: CY, inside: false };

    let animationFrameId: number;
    let globalOpacity = 0;
    const startTime = performance.now();
    const fadeDuration = 1400;

    // ---- Sample the official Akedah symbol into a volumetric dot matrix
    // The SVG path lives inside viewBox 0 0 1080 1080. We rasterize
    // it to a small offscreen canvas, then scan pixels at a fixed
    // step. Each filled pixel produces a stack of dots along Z.
    const SVG_MARKUP = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
  <path fill="#c4550a" d="M665.95,471.38l-240.33-138.75v33.11l225.99,130.48c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16l-64.91,37.48,36.43,12.1,42.82-24.72c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03ZM885.89,466.6l-389.84-225.08c-28.59-16.52-63.18-14.46-89.53,4.9l-9.44,8.03c-13.03,12.96-21.25,29.88-23.45,48.15l-22.09-12.77-75.42-43.53c-28.59-16.52-63.18-14.46-89.53,4.9l-9.44,8.03c-15.37,15.28-24.05,36.07-24.05,58.09v450.15c0,28.09,14.1,53.88,37.72,69.02,12.65,8.13,27.18,12.62,42.07,13.05.77.02,1.53.05,2.32.05,9.51,0,18.86-1.67,27.85-4.97l2.63-.98.1-.1c3.51-1.41,6.98-3.11,10.33-5.04l77.6-44.8c-2.96-9.73-4.54-19.99-4.59-30.5l-87.38,50.47c-2.77,1.6-5.64,2.94-8.51,3.99l-1,.36c-5.98,2.08-12.19,3.06-18.53,2.87-9.68-.29-19.15-3.23-27.42-8.53-15.56-9.97-24.5-26.32-24.5-44.87v-450.15c0-14.42,5.4-27.54,15.3-37.48l4.4-3.92c17.38-14.06,40.95-15.95,60.29-4.78l87.35,50.44,23.91,13.79v427.32c0,6.36.72,12.6,2.13,18.62,4.76,20.61,17.33,38.68,35.6,50.39,12.65,8.13,27.18,12.62,42.07,13.05.77.02,1.53.05,2.32.05,9.51,0,18.86-1.67,27.85-4.97l2.63-.98.1-.1c3.51-1.41,6.98-3.11,10.33-5.04l183.89-106.17,77.55-44.78,128.4-74.13c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03ZM871.54,583.79l-150.49,86.9-77.55,44.78-161.82,93.43c-2.77,1.6-5.64,2.94-8.51,3.99l-1,.36c-5.98,2.08-12.19,3.06-18.53,2.87-9.68-.29-19.15-3.23-27.42-8.53-14.65-9.4-23.43-24.43-24.41-41.64l23.81-13.75,119.96-69.26,77.55-44.78,42.82-24.72c25.68-14.82,41.02-41.38,41.02-71.03s-15.35-56.2-41.02-71.03l-240.33-138.75v33.11l225.99,130.48c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16l-64.91,37.48-77.55,44.78-83.53,48.22-23.91,13.79v-420.3c0-14.42,5.4-27.54,15.3-37.48l4.4-3.92c17.38-14.06,40.95-15.95,60.29-4.78l389.84,225.08c16.71,9.66,26.68,26.92,26.68,46.19s-9.97,36.53-26.68,46.16Z"/>
</svg>`;

    const SAMPLE_SIZE = 300;          // offscreen rasterization resolution
    const STEP_PX = 4;                // pixel scan step (density of dots)
    const TARGET_HEIGHT = 320;        // displayed height of the symbol
    const DEPTH = 60;                 // total Z extrusion
    const Z_LAYERS = 5;               // number of Z layers
    const STEP_Z = DEPTH / (Z_LAYERS - 1);


    const buildFromSVG = () => {
      const off = document.createElement('canvas');
      off.width = SAMPLE_SIZE;
      off.height = SAMPLE_SIZE;
      const octx = off.getContext('2d');
      if (!octx) return;

      const blob = new Blob([SVG_MARKUP], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => {
        octx.clearRect(0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
        octx.drawImage(img, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
        const data = octx.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE).data;

        // Find the symbol's bounding box in pixel space (alpha > 0)
        let minX = SAMPLE_SIZE, minY = SAMPLE_SIZE, maxX = 0, maxY = 0;
        for (let y = 0; y < SAMPLE_SIZE; y++) {
          for (let x = 0; x < SAMPLE_SIZE; x++) {
            if (data[(y * SAMPLE_SIZE + x) * 4 + 3] > 40) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        const bbW = maxX - minX;
        const bbH = maxY - minY;
        if (bbW <= 0 || bbH <= 0) return;

        // Scale so the symbol's height matches TARGET_HEIGHT, preserving aspect
        const scale = TARGET_HEIGHT / bbH;
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;

        const halfZ = DEPTH / 2;

        for (let y = minY; y <= maxY; y += STEP_PX) {
          for (let x = minX; x <= maxX; x += STEP_PX) {
            const alpha = data[(y * SAMPLE_SIZE + x) * 4 + 3];
            if (alpha > 80) {
              const lx = (x - cx) * scale;
              const ly = (y - cy) * scale;
              for (let k = 0; k < Z_LAYERS; k++) {
                const lz = -halfZ + k * STEP_Z;
                dots.push({
                  ox: lx,
                  oy: ly,
                  oz: lz,
                  dx: 0, dy: 0,
                  vx: 0, vy: 0,
                  seed: Math.random() * Math.PI * 2,
                });
              }
            }
          }
        }
        URL.revokeObjectURL(url);
      };
      img.src = url;
    };

    buildFromSVG();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      mouse.x = mx;
      mouse.y = my;
      mouse.inside = true;
      // Map to small rotation angles (max ~14deg)
      const nx = (mx / W) * 2 - 1;
      const ny = (my / H) * 2 - 1;
      target.ry = nx * 0.24;
      target.rx = -ny * 0.18;
    };
    const handleMouseLeave = () => {
      mouse.inside = false;
      target.rx = 0;
      target.ry = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = (now: number) => {
      const t = (now - startTime) / 1000;
      globalOpacity = Math.min((now - startTime) / fadeDuration, 1);

      // Easing toward target rotation (slow, elegant easing)
      current.rx += (target.rx - current.rx) * 0.045;
      current.ry += (target.ry - current.ry) * 0.045;

      // Idle floating rotation (micro-oscillation)
      const idleRy = Math.sin(t * 0.4) * 0.05;
      const idleRx = Math.cos(t * 0.3) * 0.03;
      const rx = current.rx + idleRx;
      const ry = current.ry + idleRy;

      const cosX = Math.cos(rx), sinX = Math.sin(rx);
      const cosY = Math.cos(ry), sinY = Math.sin(ry);

      ctx.clearRect(0, 0, W, H);

      // Sort by depth (painters algorithm) — back to front
      const projected: Array<{
        sx: number; sy: number; scale: number; alpha: number; z: number;
      }> = [];

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        // Idle breathing on Z
        const breathe = Math.sin(t * 0.9 + d.seed) * 1.2;

        // Rotate around Y then X
        let x = d.ox;
        let y = d.oy;
        let z = d.oz + breathe;

        // Y rotation
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        // X rotation
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        // Perspective projection
        const persp = FOCAL / (FOCAL + z2);
        let sx = CX + x1 * persp;
        let sy = CY + y2 * persp;

        // Mouse interaction in screen space (subtle displacement)
        if (mouse.inside) {
          const mdx = sx - mouse.x;
          const mdy = sy - mouse.y;
          const mdist = Math.hypot(mdx, mdy);
          const R = 75;
          if (mdist < R && mdist > 0.001) {
            const force = (1 - mdist / R) * 10;
            d.vx += (mdx / mdist) * force * 0.18;
            d.vy += (mdy / mdist) * force * 0.18;
          }
        }
        // Spring back
        d.vx += -d.dx * 0.08;
        d.vy += -d.dy * 0.08;
        d.vx *= 0.84;
        d.vy *= 0.84;
        d.dx += d.vx;
        d.dy += d.vy;

        sx += d.dx;
        sy += d.dy;

        // Depth-based scale & alpha
        // Use a deeper focal range for better volumetric perception
        const scale = 0.95 + persp * 0.7;
        const alpha = (0.2 + 0.8 * (persp * persp)) * globalOpacity;

        projected.push({ sx, sy, scale, alpha, z: z2 });
      }

      projected.sort((a, b) => b.z - a.z);

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const r = Math.max(0.5, p.scale * 1.25);
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        
        // Use a subtle gradient or solid depending on depth
        ctx.fillStyle = '#C4550A';
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    // Headline animation
    if (headlineRef.current) {
      gsap.from(headlineRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#070807] overflow-hidden flex items-center"
    >
      {/* Dynamic Grid Overlay */}
      
      
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,85,10,0.05)_0%,transparent_50%)] pointer-events-none" />

      {/* Top meta bar — editorial detail */}

      <div className="relative z-10 container-editorial w-full flex flex-col lg:flex-row items-center gap-12 pt-24 lg:pt-16 pb-20 md:pb-32 lg:pb-0">
        <div className="w-full lg:w-[65%] flex flex-col items-start" ref={headlineRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 flex items-center gap-4"
          >
            <span className="text-[#C4550A] text-[11px] font-bold uppercase tracking-[0.4em]">
              Soluções &amp; Estratégias Comerciais
            </span>
          </motion.div>

          <h1
            className="text-white font-[900] leading-[0.82] text-left tracking-[-0.05em] font-display"
            style={{ fontSize: 'clamp(38px, 9vw, 112px)' }}
          >
            Elevamos o seu negócio ao <br />
            <span className="text-[#C4550A] italic font-normal">próximo patamar.</span>
          </h1>

          <p className="mt-12 text-white/55 text-[17px] md:text-[19px] max-w-2xl text-left font-normal leading-[1.6] font-display tracking-tight">
            Unindo estratégia comercial e ações de impacto. Antes do marketing, um processo comercial organizado
            &mdash; do diagnóstico à autonomia.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <a
              href="https://wa.me/5511991076096"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium px-12"
            >
              Fale com um especialista
            </a>
            <a href="#servicos" className="btn-premium-outline px-12">
              Conheça nossas soluções
            </a>
          </div>
        </div>


        <div className="hidden lg:flex lg:w-[35%] h-[600px] relative items-center justify-center">
          {/* Subtle ambient glow — refined and integrated */}
          <div className="absolute w-[380px] h-[380px] bg-[#C4550A]/[0.03] blur-[120px] rounded-full" />
          
          {/* Technical frame markers */}
          <div className="absolute top-10 left-10 w-2 h-2 border-l border-t border-[#C4550A]/20" />
          <div className="absolute top-10 right-10 w-2 h-2 border-r border-t border-[#C4550A]/20" />
          <div className="absolute bottom-10 left-10 w-2 h-2 border-l border-b border-[#C4550A]/20" />
          <div className="absolute bottom-10 right-10 w-2 h-2 border-r border-b border-[#C4550A]/20" />
          
          {/* Branding metadata */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[#C4550A]/40 text-[8px] uppercase tracking-[0.6em] font-mono whitespace-nowrap">
            AKEDAH · MARK · 001
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/15 text-[8px] uppercase tracking-[0.6em] font-mono whitespace-nowrap">
            ESTRATÉGIA EM MOVIMENTO · VOL.01
          </div>

          <canvas 
            ref={canvasRef}
            id="hero-canvas"
            className="relative z-10 cursor-none"
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;