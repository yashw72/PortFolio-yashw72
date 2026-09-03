// components/AnimatedCodeBackground.jsx
// Layered interactive animated background system with code symbols, operators,
// constellation network, and section-specific presets.

import { useEffect, useRef } from 'react';

const OPERATORS = [
  '{ }', '< />', '</>', '=>', '===', '!==', '&&', '||',
  '++', 'const', 'return', 'async', '01', '10', '[ ]',
  'function', 'while', 'import', 'export', '::', 'fn()',
];

const SECTION_CONFIGS = {
  hero: {
    nodeCount: 38,
    symbolCount: 16,
    maxDist: 120,
    showGrid: true,
    showParticles: true,
    showMatrix: false,
    speedMultiplier: 1.0,
    symbols: ['{ }', '< />', '=>', '&&', '||', 'const', '01', 'return'],
  },
  arsenal: {
    nodeCount: 26,
    symbolCount: 12,
    maxDist: 90,
    showGrid: true,
    showParticles: true,
    showMatrix: false,
    speedMultiplier: 0.7,
    symbols: ['⚛', '⬢', '🐍', 'TS', 'JS', 'API', '{ }', '<>'],
  },
  logs: {
    nodeCount: 22,
    symbolCount: 10,
    maxDist: 85,
    showGrid: false,
    showParticles: true,
    showMatrix: true,
    speedMultiplier: 0.8,
    symbols: ['git', 'commit', 'diff', 'build', '200_OK', '[ ]', '=>'],
  },
  journey: {
    nodeCount: 20,
    symbolCount: 8,
    maxDist: 75,
    showGrid: true,
    showParticles: true,
    showMatrix: false,
    speedMultiplier: 0.6,
    symbols: ['2022', '2025', '2028', 'milestone', 'log', '::', '++'],
  },
  codelab: {
    nodeCount: 30,
    symbolCount: 14,
    maxDist: 100,
    showGrid: true,
    showParticles: true,
    showMatrix: false,
    speedMultiplier: 0.9,
    symbols: ['O(1)', 'O(n)', 'O(log n)', 'binarySearch', 'dp[]', 'graph', 'tree'],
  },
  contact: {
    nodeCount: 18,
    symbolCount: 8,
    maxDist: 70,
    showGrid: false,
    showParticles: true,
    showMatrix: false,
    speedMultiplier: 0.5,
    symbols: ['@', 'ping', 'connect', 'send', '200_OK', '{ }'],
  },
};

export default function AnimatedCodeBackground({
  variant = 'hero',
  className = '',
  interactive = true,
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -2000, y: -2000, targetX: -2000, targetY: -2000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const cfg = SECTION_CONFIGS[variant] || SECTION_CONFIGS.hero;

    const nodeMultiplier = isMobile ? 0.4 : 1.0;
    const activeNodeCount = Math.floor(cfg.nodeCount * nodeMultiplier);
    const activeSymbolCount = Math.floor(cfg.symbolCount * nodeMultiplier);
    const maxConnectDist = isMobile ? 65 : cfg.maxDist;

    let nodes = [];
    let symbols = [];
    let gridCrosses = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      init();
    };

    const init = () => {
      nodes = [];
      symbols = [];
      gridCrosses = [];

      // 1. Constellation Nodes
      for (let i = 0; i < activeNodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35 * cfg.speedMultiplier,
          vy: (Math.random() - 0.5) * 0.35 * cfg.speedMultiplier,
          radius: Math.random() * 1.4 + 0.6,
          alpha: Math.random() * 0.3 + 0.08,
        });
      }

      // 2. Layered Floating Operators
      const pool = cfg.symbols.length > 0 ? cfg.symbols : OPERATORS;
      for (let i = 0; i < activeSymbolCount; i++) {
        const isLarge = i % 3 === 0;
        symbols.push({
          text: pool[i % pool.length],
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22 * cfg.speedMultiplier,
          vy: (Math.random() - 0.5) * 0.22 * cfg.speedMultiplier,
          size: isLarge ? (isMobile ? 16 : 22) : (isMobile ? 10 : 13),
          alpha: isLarge ? 0.035 : 0.065,
          rotation: (Math.random() - 0.5) * 0.3,
          rotSpeed: (Math.random() - 0.5) * 0.002,
        });
      }

      // 3. Coordinate Grid Crosses
      if (cfg.showGrid) {
        const step = isMobile ? 100 : 140;
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

    const parent = canvas.parentElement || window;
    parent.addEventListener('mousemove', handleMouseMove, { passive: true });
    parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', resize);

    resize();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse spring
      if (mouseRef.current.active) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
      } else {
        mouseRef.current.x = -2000;
        mouseRef.current.y = -2000;
      }

      // Draw Grid Crosshairs
      if (cfg.showGrid) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 1;
        const cs = 3;
        for (let i = 0; i < gridCrosses.length; i++) {
          const pt = gridCrosses[i];
          ctx.beginPath();
          ctx.moveTo(pt.x - cs, pt.y);
          ctx.lineTo(pt.x + cs, pt.y);
          ctx.moveTo(pt.x, pt.y - cs);
          ctx.lineTo(pt.x, pt.y + cs);
          ctx.stroke();
        }
      }

      // Draw Nodes & Constellation Web
      if (cfg.showParticles) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];

          if (!prefersReducedMotion) {
            n.x += n.vx;
            n.y += n.vy;

            // Subtle gentle mouse repulsion
            if (mouseRef.current.active) {
              const dx = n.x - mouseRef.current.x;
              const dy = n.y - mouseRef.current.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 110 && dist > 0) {
                const f = ((110 - dist) / 110) * 0.4;
                n.x += (dx / dist) * f;
                n.y += (dy / dist) * f;
              }
            }

            // Wrap bounds
            if (n.x < -10) n.x = width + 10;
            if (n.x > width + 10) n.x = -10;
            if (n.y < -10) n.y = height + 10;
            if (n.y > height + 10) n.y = -10;
          }

          // Node draw
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${n.alpha})`;
          ctx.fill();

          // Interconnecting Lines
          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const dx = n.x - n2.x;
            const dy = n.y - n2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxConnectDist) {
              const lineAlpha = (1 - dist / maxConnectDist) * 0.08;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          }

          // Mouse connecting threads
          if (mouseRef.current.active) {
            const mdx = n.x - mouseRef.current.x;
            const mdy = n.y - mouseRef.current.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 120) {
              const mAlpha = (1 - mdist / 120) * 0.14;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${mAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      // Draw Floating Layered Code Symbols
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < symbols.length; i++) {
        const s = symbols[i];

        if (!prefersReducedMotion) {
          s.x += s.vx;
          s.y += s.vy;
          s.rotation += s.rotSpeed;

          if (s.x < -60) s.x = width + 60;
          if (s.x > width + 60) s.x = -60;
          if (s.y < -60) s.y = height + 60;
          if (s.y > height + 60) s.y = -60;
        }

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.font = `600 ${s.size}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fillText(s.text, 0, 0);
        ctx.restore();
      }

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, [variant, interactive]);

  return (
    <div className={`animated-code-bg-wrap ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="animated-code-canvas" />
      <div className="animated-code-vignette" />
    </div>
  );
}
