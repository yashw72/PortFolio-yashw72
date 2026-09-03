// components/CustomCursor.jsx
// Fluid custom cursor for desktop with context-sensitive magnetic scaling.
// Automatically disabled on touch screens and respect prefers-reduced-motion.

import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'pointer' | 'project' | 'text' | 'hidden'
  const [cursorText, setCursorText] = useState('');
  const [isTouch, setIsTouch] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useSpring(0, { stiffness: 600, damping: 35 });
  const mouseY = useSpring(0, { stiffness: 600, damping: 35 });

  const dotX = useSpring(0, { stiffness: 1200, damping: 45 });
  const dotY = useSpring(0, { stiffness: 1200, damping: 45 });

  useEffect(() => {
    // Check if device has touch capability or user prefers reduced motion
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      if (!visible) setVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        'button, a, input, textarea, [data-cursor], .project-interactive-card, .tech-interactive-chip'
      );

      if (!target) {
        setCursorState('default');
        setCursorText('');
        return;
      }

      const cursorAttr = target.getAttribute('data-cursor');
      if (cursorAttr) {
        setCursorState(cursorAttr);
        setCursorText(target.getAttribute('data-cursor-text') || '');
        return;
      }

      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorState('text');
        return;
      }

      if (target.classList.contains('project-interactive-card')) {
        setCursorState('project');
        setCursorText('VIEW');
        return;
      }

      setCursorState('pointer');
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, dotX, dotY, visible]);

  if (isTouch || !visible) return null;

  return (
    <>
      {/* Outer Ring / Aura */}
      <motion.div
        className={`custom-cursor-aura cursor-${cursorState}`}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale:
            cursorState === 'pointer'
              ? 1.8
              : cursorState === 'project'
              ? 2.6
              : cursorState === 'text'
              ? 0.4
              : 1,
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
      >
        {cursorText && (
          <span className="cursor-label-text">{cursorText}</span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
