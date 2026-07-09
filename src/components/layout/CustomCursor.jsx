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
    // Use robust check for touch devices
    const isTouch = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia('(pointer: coarse)').matches;
      
    if (isTouch) {
      setIsVisible(false);
      return;
    }

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

    // Bulletproof: if a touch event fires, instantly hide the cursor
    const onTouchStart = () => {
      setIsVisible(false);
      document.body.classList.remove('custom-cursor-active');
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchstart', onTouchStart);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  // Use state for dynamic offset based on hover state
  const dotSize = isHovered ? 10 : 8;
  const ringSize = isHovered ? 24 : 32;

  return (
    <>
      {/* Exact position dot (zero latency) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999]"
        style={{ 
          x: mouseX, 
          y: mouseY,
          // Center the dot exactly without double translateX
          marginLeft: -dotSize / 2,
          marginTop: -dotSize / 2,
        }}
        animate={{
          width: dotSize,
          height: dotSize,
          backgroundColor: isHovered ? 'var(--color-highlight)' : 'var(--color-accent)',
          boxShadow: isHovered ? '0 0 10px var(--color-highlight)' : '0 0 8px var(--color-accent-glow)',
          scale: isDown ? 0.9 : 1
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Trailing ring (smooth spring physics) */}
      <motion.div
        className="fixed top-0 left-0 border rounded-full pointer-events-none z-[99998]"
        style={{ 
          x: ringX, 
          y: ringY,
          // Center the ring exactly without double translateX
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor: isHovered ? 'var(--color-highlight)' : 'var(--color-accent-glow)',
          opacity: isDown ? 0.5 : 1,
          scale: isDown ? 0.8 : 1
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
