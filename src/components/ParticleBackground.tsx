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
    let hubs: Hub[] = [];

    class Hub {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      color: string;
      parallaxFactor: number;
      pulsePhase: number;
      pulseSpeed: number;
      connectionRadius: number;

      constructor() {
        this.baseX = Math.random() * canvas!.width;
        this.baseY = Math.random() * (canvas!.height * 5); // Spread across a large scrollable area
        this.x = this.baseX;
        this.y = this.baseY;
        this.size = Math.random() * 3 + 2;
        this.color = '#C4550A';
        this.parallaxFactor = Math.random() * 0.4 + 0.1;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.05 + 0.02;
        this.connectionRadius = 350;
      }

      update(scroll: number) {
        // Apply parallax to vertical position
        this.y = this.baseY - scroll * this.parallaxFactor;
        this.pulsePhase += this.pulseSpeed;
      }

      draw() {
        if (!ctx) return;
        
        // Only draw if visible in viewport (with some padding)
        if (this.y < -100 || this.y > canvas!.height + 100) return;

        const pulse = Math.sin(this.pulsePhase) * 2;
        
        // Draw hub core - No outer glow as requested
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size + pulse, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      hubs = [];
      
      // Density-based hub creation
      const hubCount = 40; 
      for (let i = 0; i < hubCount; i++) {
        hubs.push(new Hub());
      }
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    const drawConnections = () => {
      if (!ctx) return;
      
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < hubs.length; i++) {
        const hubA = hubs[i];
        
        // Skip connection logic if hub A is far outside viewport
        if (hubA.y < -300 || hubA.y > canvas.height + 300) continue;

        for (let j = i + 1; j < hubs.length; j++) {
          const hubB = hubs[j];
          
          const dx = hubA.x - hubB.x;
          const dy = hubA.y - hubB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < hubA.connectionRadius) {
            // Opacity based on distance and visibility
            const opacity = (1 - distance / hubA.connectionRadius) * 0.3;
            ctx.strokeStyle = `rgba(196, 85, 10, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(hubA.x, hubA.y);
            ctx.lineTo(hubB.x, hubB.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      hubs.forEach(hub => hub.update(scrollY.current));
      
      // First draw lines, then hubs (hubs on top)
      drawConnections();
      hubs.forEach(hub => hub.draw());

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
      className="fixed inset-0 pointer-events-none z-[1]"
    />
  );
};

export default ParticleBackground;