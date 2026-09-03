// components/HeroExperience.jsx
// Immersive full-screen developer workspace entry with dynamic role reveals,
// mouse parallax, mask animations, magnetic CTAs, and telemetry data.

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { PERSONAL } from '../data/portfolioData';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import MagneticButton from './MagneticButton';

export default function HeroExperience() {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef(null);

  // Mouse Parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cycle Roles
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL.roles.length);
    }, 2800);
    return () => clearInterval(roleTimer);
  }, []);

  // Scroll transformation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const heroScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.96]);
  const heroY = useTransform(scrollYProgress, [0, 0.85], [0, 60]);

  return (
    <section id="hero" ref={containerRef} className="hero-experience">
      {/* Background technical universe */}
      <AnimatedCodeBackground variant="hero" interactive={true} />

      {/* Floating coordinates watermark */}
      <div className="hero-coord-watermark" aria-hidden="true">
        <span>LAT: 18.52° N</span>
        <span>LON: 73.85° E</span>
        <span>SYS_CORE: v2.8</span>
      </div>

      <motion.div
        className="container hero-container"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        <div className="hero-content-wrapper">
          {/* Top Status Telemetry Pill */}
          <motion.div
            className="hero-telemetry-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="telemetry-live-dot" />
            <span className="telemetry-label">{PERSONAL.status}</span>
            <span className="telemetry-separator">/</span>
            <span className="telemetry-loc">{PERSONAL.location}</span>
          </motion.div>

          {/* Sub-label */}
          <motion.p
            className="hero-sublabel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            HELLO, WORLD. WELCOME TO MY DIGITAL WORKSPACE
          </motion.p>

          {/* Giant Typography with Parallax */}
          <motion.div
            className="hero-typography-block"
            animate={{
              x: mousePos.x * 0.4,
              y: mousePos.y * 0.4,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            <h1 className="hero-headline">
              <span className="hero-line-solid">YASH</span>
              <span className="hero-line-outline">WARUNGASE</span>
            </h1>
          </motion.div>

          {/* Dynamic Role Reveal */}
          <div className="hero-dynamic-role-container">
            <span className="role-syntax-bracket" aria-hidden="true">&lt;role&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={PERSONAL.roles[roleIndex]}
                className="hero-dynamic-role-text"
                initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -22, filter: 'blur(6px)' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {PERSONAL.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="role-syntax-bracket" aria-hidden="true">&lt;/role&gt;</span>
          </div>

          {/* Narrative Tagline */}
          <motion.p
            className="hero-narrative"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {PERSONAL.tagline}
          </motion.p>

          {/* Magnetic CTA Buttons */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <MagneticButton href="#build-logs" className="btn btn-primary" strength={0.4}>
              <span>EXPLORE MY WORK</span>
              <span className="btn-arrow">→</span>
            </MagneticButton>

            <MagneticButton href="#contact" className="btn btn-ghost" strength={0.4}>
              <span>LET'S CONNECT</span>
              <span className="btn-arrow">↗</span>
            </MagneticButton>
          </motion.div>

          {/* System Telemetry Bar */}
          <motion.div
            className="hero-system-telemetry-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="telemetry-stat">
              <span className="stat-num">3+</span>
              <span className="stat-desc">CORE PRODUCTION BUILDS</span>
            </div>
            <div className="telemetry-stat-divider" />
            <div className="telemetry-stat">
              <span className="stat-num">99.9%</span>
              <span className="stat-desc">CODE DISCIPLINE & UPTIME</span>
            </div>
            <div className="telemetry-stat-divider" />
            <div className="telemetry-stat">
              <span className="stat-num">B.E. IT</span>
              <span className="stat-desc">D.Y. PATIL INST. TECH PUNE</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator" aria-hidden="true">
          <span className="scroll-text">SCROLL TO ENTER UNIVERSE</span>
          <div className="scroll-line-container">
            <span className="scroll-line-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
