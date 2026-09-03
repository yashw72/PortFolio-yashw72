// components/MagneticButton.jsx
// Smooth spring-based magnetic attraction toward cursor for CTA buttons and links.

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  target,
  rel,
  strength = 0.35,
  as = 'a',
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = (clientX - centerX) * strength;
    const distanceY = (clientY - centerY) * strength;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const MotionComponent = as === 'button' ? motion.button : motion.a;

  return (
    <MotionComponent
      ref={ref}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`magnetic-button-wrap ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, mass: 0.5 }}
      {...props}
    >
      <span className="magnetic-content">{children}</span>
    </MotionComponent>
  );
}
