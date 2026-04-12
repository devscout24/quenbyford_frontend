import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      maxLife: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1; // Size of raindrop width
        this.speedX = (Math.random() - 0.5) * 0.5; // Slight horizontal drift
        this.speedY = Math.random() * 3 + 2; // Falling speed (gravity)
        
        // Different vibrant colors
        const colors = ['#3b82f6', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b', '#06b6d4', '#ef4444'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.maxLife = Math.random() * 30 + 20; // How long it lasts before fading
        this.life = this.maxLife;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY; // Falling down like rain
        this.life -= 1;
        this.size *= 0.98; // Shrink slowly
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = Math.max(0, this.life / this.maxLife);
        ctx.fillStyle = this.color;
        
        // Draw an elongated droplet
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size / 2, this.size * 2.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Add 2-3 drops per mouse movement for a rain effect
      const dropsCount = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < dropsCount; i++) {
        // Jitter starting position slightly around mouse
        const startX = mouseX + (Math.random() * 20 - 10);
        const startY = mouseY + (Math.random() * 20 - 10);
        particlesArray.push(new Particle(startX, startY));
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Create trailing effect by clearing with a slight opacity
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].life <= 0 || particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 hidden md:block pointer-events-none z-[99999]"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};
