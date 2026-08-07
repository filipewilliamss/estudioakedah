import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let comets: Comet[] = [];

    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      color: string;
      parallaxFactor: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.2 + 0.3;
        this.opacity = Math.random() * 0.15 + 0.05; // Low opacity as requested
        this.color = Math.random() > 0.5 ? '#FFFFFF' : '#C4550A'; // White or Orange
        this.parallaxFactor = Math.random() * 0.05 + 0.02;
      }

      draw(scroll: number) {
        if (!ctx) return;
        const currentY = (this.y - scroll * this.parallaxFactor) % canvas!.height;
        const finalY = currentY < 0 ? currentY + canvas!.height : currentY;
        
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, finalY, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    class Comet {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;

      constructor() {
        this.reset();
        this.active = false;
        // Start randomly active to spread them out
        if (Math.random() > 0.8) this.active = true;
      }

      reset() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 15 + 10;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2; // roughly diagonal
        this.opacity = 0;
        this.active = true;
      }

      update() {
        if (!this.active) {
          if (Math.random() > 0.997) this.reset();
          return;
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        
        // Fade in and out
        if (this.x < canvas!.width && this.y < canvas!.height) {
          this.opacity = Math.min(this.opacity + 0.05, 0.2);
        } else {
          this.active = false;
        }
      }

      draw() {
        if (!this.active || !ctx) return;
        
        ctx.strokeStyle = '#FFFFFF';
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      comets = [];
      
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 8000);
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }

      for (let i = 0; i < 3; i++) {
        comets.push(new Comet());
      }
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Keep background color consistent with the site
      ctx.fillStyle = '#101010';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => star.draw(scrollY.current));
      comets.forEach(comet => {
        comet.update();
        comet.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
    />
  );
};

export default ParticleBackground;