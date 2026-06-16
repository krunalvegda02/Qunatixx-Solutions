import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for exact mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring configuration for the trailing ring (butter smooth physics)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  
  // Create trailing coordinates
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices natively
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.classList.add('custom-cursor-active');
    setIsVisible(true);

    const onMouseMove = (e) => {
      // Update mouse motion values immediately
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      // Determine if hovering an interactive element
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-cursor') || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.tagName === 'SELECT';
        
      setIsHovered(!!isInteractive);
    };

    const onMouseDown = () => setIsDown(true);
    const onMouseUp = () => setIsDown(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Exact position dot (zero latency) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{ 
          x: mouseX, 
          y: mouseY, 
          translateX: '-50%', 
          translateY: '-50%' 
        }}
        animate={{
          width: isHovered ? 10 : 8,
          height: isHovered ? 10 : 8,
          backgroundColor: isHovered ? 'var(--color-highlight)' : 'var(--color-accent)',
          boxShadow: isHovered ? '0 0 10px var(--color-highlight)' : '0 0 8px var(--color-accent-glow)',
          scale: isDown ? 0.9 : 1
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Trailing ring (smooth spring physics) */}
      <motion.div
        className="fixed top-0 left-0 border rounded-full pointer-events-none z-[9998]"
        style={{ 
          x: ringX, 
          y: ringY, 
          translateX: '-50%', 
          translateY: '-50%' 
        }}
        animate={{
          width: isHovered ? 24 : 32,
          height: isHovered ? 24 : 32,
          borderWidth: isHovered ? 1.5 : 1,
          borderColor: isHovered ? 'var(--color-highlight)' : 'rgba(124, 58, 237, 0.4)', // using purple accent fallback
          backgroundColor: isHovered ? 'rgba(225, 29, 72, 0.08)' : 'transparent',
          scale: isDown ? 0.75 : 1
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
