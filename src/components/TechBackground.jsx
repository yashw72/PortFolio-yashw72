// components/TechBackground.jsx
// High-performance, subtle interactive animated canvas background
// Features: Grid lines, floating nodes with connecting constellation web,
// programming language & developer code symbols, and subtle mouse interaction.

import { useEffect, useRef } from 'react';

const PROGRAMMING_SYMBOLS = [
  '{ }',
  '</>',
  '01',
  'JS',
  'TS',
  'PY',
  'C++',
  '⚛',
  'fn()',
  '=>',
  'const',
  'git',
  '===',
  '//',
  '[ ]',
  'async',
];

export default function TechBackground({
  className = '',
  interactive = true,
  particleDensity = 'normal', // 'low' | 'normal' | 'high'
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

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Density config
    const isMobile = window.innerWidth < 768;
    const countMultiplier = particleDensity === 'high' ? 1.4 : particleDensity === 'low' ? 0.6 : 1.0;
    const baseNodeCount = isMobile ? Math.floor(18 * countMultiplier) : Math.floor(42 * countMultiplier);
    const baseSymbolCount = isMobile ? Math.floor(8 * countMultiplier) : Math.floor(16 * countMultiplier);
    const maxConnectDistance = isMobile ? 80 : 130;

    // Resize canvas with devicePixelRatio for crisp rendering
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

    // Initialize particles, symbols, and grid points
    const initElements = () => {
      particles = [];
      symbols = [];
      gridCrosses = [];

      // Create Nodes
      for (let i = 0; i < baseNodeCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1,
          color: Math.random() > 0.4 ? 'rgba(0, 240, 255,' : 'rgba(148, 163, 184,',
          alpha: Math.random() * 0.4 + 0.15,
        });
      }

      // Create Floating Programming Symbols
      if (showSymbols) {
        for (let i = 0; i < baseSymbolCount; i++) {
          symbols.push({
            text: PROGRAMMING_SYMBOLS[Math.floor(Math.random() * PROGRAMMING_SYMBOLS.length)],
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            size: Math.floor(Math.random() * 3) + 11, // 11px to 13px
            alpha: Math.random() * 0.12 + 0.08,
            rotation: (Math.random() - 0.5) * 0.2,
            rotSpeed: (Math.random() - 0.5) * 0.002,
          });
        }
      }

      // Create Technical Grid Intersections
      if (showGrid) {
        const step = isMobile ? 80 : 120;
        for (let x = step / 2; x < width; x += step) {
          for (let y = step / 2; y < height; y += step) {
            gridCrosses.push({
              x,
              y,
              alpha: 0.04 + (Math.sin(x + y) * 0.02),
            });
          }
        }
      }
    };

    // Mouse Tracking
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

    // Render loop
    let tick = 0;

    const render = () => {
      tick += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (mouseRef.current.active) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;
      } else {
        mouseRef.current.x = -1000;
        mouseRef.current.y = -1000;
      }

      // 1. Draw Subtle Grid Crosshairs
      if (showGrid) {
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
        ctx.lineWidth = 1;
        for (const pt of gridCrosses) {
          const crossSize = 3;
          ctx.beginPath();
          ctx.moveTo(pt.x - crossSize, pt.y);
          ctx.lineTo(pt.x + crossSize, pt.y);
          ctx.moveTo(pt.x, pt.y - crossSize);
          ctx.lineTo(pt.x, pt.y + crossSize);
          ctx.stroke();
        }
      }

      // 2. Update & Draw Particles (Nodes)
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
            if (dist < 120 && dist > 0) {
              const force = (120 - dist) / 120 * 0.6;
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

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.fill();

        // 3. Draw Connecting Lines (Constellation Web)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const lineAlpha = (1 - dist / maxConnectDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse if nearby
        if (mouseRef.current.active) {
          const mdx = p.x - mouseRef.current.x;
          const mdy = p.y - mouseRef.current.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const mAlpha = (1 - mdist / 140) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${mAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // 4. Draw Floating Programming Symbols
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
          ctx.font = `600 ${s.size}px 'JetBrains Mono', 'Space Mono', monospace`;
          ctx.fillStyle = `rgba(0, 240, 255, ${s.alpha})`;
          ctx.fillText(s.text, 0, 0);
          ctx.restore();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Initial render
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
