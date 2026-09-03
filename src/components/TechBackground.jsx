// components/TechBackground.jsx
// Monochrome white/gray constellation background — no cyan, no color.
// High-performance canvas: nodes, connecting lines, programming symbols, mouse interaction.

import { useEffect, useRef } from 'react';

const PROGRAMMING_SYMBOLS = [
  '{ }', '</>', '01', 'JS', 'TS', 'PY', 'C++', '⚛',
  'fn()', '=>', 'const', 'git', '===', '//', '[ ]',
  'async', 'null', 'void', '::',
];

export default function TechBackground({
  className = '',
  interactive = true,
  particleDensity = 'normal',
  showGrid = true,
  showSymbols = true,
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let particles = [];
    let symbols = [];
    let gridCrosses = [];

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const countMultiplier = particleDensity === 'high' ? 1.4 : particleDensity === 'low' ? 0.6 : 1.0;
    const baseNodeCount = isMobile ? Math.floor(14 * countMultiplier) : Math.floor(36 * countMultiplier);
    const baseSymbolCount = isMobile ? Math.floor(6 * countMultiplier) : Math.floor(14 * countMultiplier);
    const maxConnectDistance = isMobile ? 75 : 120;

    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() || {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initElements();
    };

    const initElements = () => {
      particles = [];
      symbols = [];
      gridCrosses = [];

      // Nodes — subtle white/gray palette only
      for (let i = 0; i < baseNodeCount; i++) {
        const brightness = Math.random() > 0.5 ? '255,255,255' : '180,180,180';
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.2 + 0.8,
          color: `rgba(${brightness},`,
          alpha: Math.random() * 0.25 + 0.08,
        });
      }

      // Floating symbols — monochrome
      if (showSymbols) {
        for (let i = 0; i < baseSymbolCount; i++) {
          symbols.push({
            text: PROGRAMMING_SYMBOLS[Math.floor(Math.random() * PROGRAMMING_SYMBOLS.length)],
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            size: Math.floor(Math.random() * 3) + 10,
            alpha: Math.random() * 0.07 + 0.04,
            rotation: (Math.random() - 0.5) * 0.15,
            rotSpeed: (Math.random() - 0.5) * 0.0015,
          });
        }
      }

      // Grid crosshairs
      if (showGrid) {
        const step = isMobile ? 90 : 130;
        for (let x = step / 2; x < width; x += step) {
          for (let y = step / 2; y < height; y += step) {
            gridCrosses.push({ x, y });
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const parentElem = canvas.parentElement || window;
    parentElem.addEventListener('mousemove', handleMouseMove, { passive: true });
    parentElem.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', handleResize);

    handleResize();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (mouseRef.current.active) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;
      } else {
        mouseRef.current.x = -1000;
        mouseRef.current.y = -1000;
      }

      // 1. Grid crosshairs
      if (showGrid) {
        ctx.strokeStyle = 'rgba(255,255,255,0.045)';
        ctx.lineWidth = 1;
        for (const pt of gridCrosses) {
          const cs = 3;
          ctx.beginPath();
          ctx.moveTo(pt.x - cs, pt.y);
          ctx.lineTo(pt.x + cs, pt.y);
          ctx.moveTo(pt.x, pt.y - cs);
          ctx.lineTo(pt.x, pt.y + cs);
          ctx.stroke();
        }
      }

      // 2. Particles + connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Gentle mouse repel
          if (mouseRef.current.active) {
            const dx = p.x - mouseRef.current.x;
            const dy = p.y - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 110 && dist > 0) {
              const force = (110 - dist) / 110 * 0.5;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }

          // Boundary wrap
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Connecting lines (constellation)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const lineAlpha = (1 - dist / maxConnectDistance) * 0.1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255,255,255,${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Mouse connector
        if (mouseRef.current.active) {
          const mdx = p.x - mouseRef.current.x;
          const mdy = p.y - mouseRef.current.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 130) {
            const mAlpha = (1 - mdist / 130) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(255,255,255,${mAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 3. Floating programming symbols
      if (showSymbols) {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        for (const s of symbols) {
          if (!prefersReducedMotion) {
            s.x += s.vx;
            s.y += s.vy;
            s.rotation += s.rotSpeed;

            if (s.x < -40) s.x = width + 40;
            if (s.x > width + 40) s.x = -40;
            if (s.y < -40) s.y = height + 40;
            if (s.y > height + 40) s.y = -40;
          }

          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.rotate(s.rotation);
          ctx.font = `500 ${s.size}px 'JetBrains Mono', monospace`;
          ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
          ctx.fillText(s.text, 0, 0);
          ctx.restore();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      parentElem.removeEventListener('mousemove', handleMouseMove);
      parentElem.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [interactive, particleDensity, showGrid, showSymbols]);

  return (
    <div className={`tech-background-wrapper ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="tech-bg-canvas" />
      <div className="tech-bg-vignette" />
    </div>
  );
}
