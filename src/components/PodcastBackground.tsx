import React, { useEffect, useRef } from "react";

type IconKind = "star" | "key" | "trophy";

const COLORS = ["#C4550A", "#E2650E", "#42362E", "#2B1710"];

const drawStar = (ctx: CanvasRenderingContext2D, s: number) => {
  const spikes = 5;
  const outer = s;
  const inner = s * 0.45;
  ctx.beginPath();
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / spikes) * i - Math.PI / 2;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
};

const drawKey = (ctx: CanvasRenderingContext2D, s: number) => {
  // ring
  ctx.beginPath();
  ctx.arc(-s * 0.55, 0, s * 0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.save();
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(-s * 0.55, 0, s * 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  // shaft
  ctx.beginPath();
  ctx.rect(-s * 0.1, -s * 0.14, s * 1.1, s * 0.28);
  ctx.fill();
  // teeth
  ctx.beginPath();
  ctx.rect(s * 0.55, 0, s * 0.16, s * 0.4);
  ctx.rect(s * 0.85, 0, s * 0.16, s * 0.4);
  ctx.fill();
};

const drawTrophy = (ctx: CanvasRenderingContext2D, s: number) => {
  // cup
  ctx.beginPath();
  ctx.moveTo(-s * 0.5, -s * 0.7);
  ctx.lineTo(s * 0.5, -s * 0.7);
  ctx.lineTo(s * 0.32, s * 0.05);
  ctx.lineTo(-s * 0.32, s * 0.05);
  ctx.closePath();
  ctx.fill();
  // handles
  ctx.lineWidth = Math.max(s * 0.12, 1);
  ctx.strokeStyle = ctx.fillStyle as string;
  ctx.beginPath();
  ctx.arc(-s * 0.6, -s * 0.42, s * 0.28, Math.PI * 0.5, Math.PI * 1.5, true);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(s * 0.6, -s * 0.42, s * 0.28, Math.PI * 1.5, Math.PI * 0.5, true);
  ctx.stroke();
  // stem + base
  ctx.beginPath();
  ctx.rect(-s * 0.1, s * 0.05, s * 0.2, s * 0.3);
  ctx.rect(-s * 0.45, s * 0.35, s * 0.9, s * 0.28);
  ctx.fill();
};

const PodcastBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let nodes: Node[] = [];

    class Node {
      x = 0;
      baseX = 0;
      baseY = 0;
      y = 0;
      size = 0;
      color = COLORS[0];
      kind: IconKind = "star";
      parallaxFactor = 0.2;
      rotation = 0;
      rotationSpeed = 0;
      pulsePhase = 0;
      pulseSpeed = 0;
      connectionRadius = 200;

      constructor(kind: IconKind) {
        this.baseX = Math.random() * canvas!.width;
        this.baseY = Math.random() * (canvas!.height * 5);
        this.x = this.baseX;
        this.y = this.baseY;
        this.size = Math.random() * 5 + 7;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.kind = kind;
        this.parallaxFactor = Math.random() * 0.4 + 0.1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.006;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
      }

      update(scroll: number) {
        this.y = this.baseY - scroll * this.parallaxFactor;
        this.pulsePhase += this.pulseSpeed;
        this.rotation += this.rotationSpeed;
      }

      draw() {
        if (!ctx) return;
        if (this.y < -80 || this.y > canvas!.height + 80) return;
        const pulse = 1 + Math.sin(this.pulsePhase) * 0.08;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = 0.28;
        ctx.fillStyle = this.color;
        const s = this.size * pulse;
        if (this.kind === "star") drawStar(ctx, s);
        else if (this.kind === "key") drawKey(ctx, s);
        else drawTrophy(ctx, s);
        ctx.restore();
      }
    }

    const kinds: IconKind[] = ["star", "key", "trophy"];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      nodes = [];
      const count = 90;
      for (let i = 0; i < count; i++) nodes.push(new Node(kinds[i % 3]));
    };

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let lastScrollTime = Date.now();

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const now = Date.now();
      const dt = now - lastScrollTime;
      if (dt > 0) scrollVelocity = Math.abs(currentScroll - lastScrollY) / dt;
      lastScrollY = currentScroll;
      lastScrollTime = now;
      scrollY.current = currentScroll;
    };

    const drawConnections = () => {
      if (!ctx) return;
      ctx.lineWidth = 0.8;
      const scrollBoost = Math.min(scrollVelocity * 3, 0.6);
      const autoPulse = (Math.sin(Date.now() / 1500) + 1) * 0.1;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (a.y < -300 || a.y > canvas.height + 300) continue;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < a.connectionRadius) {
            const distanceFactor = 1 - distance / a.connectionRadius;
            const opacity =
              distanceFactor * (0.12 + scrollBoost * 0.4 + autoPulse * 0.4);
            ctx.strokeStyle = `rgba(196, 85, 10, ${Math.min(opacity, 0.5)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      scrollVelocity *= 0.96;
      nodes.forEach((n) => n.update(scrollY.current));
      drawConnections();
      nodes.forEach((n) => n.draw());
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[2]" />
  );
};

export default PodcastBackground;
