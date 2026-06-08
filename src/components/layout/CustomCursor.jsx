import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  // Visibility state removed; cursor always rendered

  useEffect(() => {
    // Disable custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.classList.add('custom-cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      if (!dot || !ring) return;
      
      // Update coordinates directly on the DOM for zero-latency snappiness
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      
      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
    };

    const onMouseOver = (e) => {
      if (!dot || !ring) return;
      
      const target = e.target;
      if (!target) return;
      
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-cursor') || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.tagName === 'SELECT';
      if (isInteractive) {
          // Expand ring & change color to highlight on hover
          dot.style.width = '10px';
          dot.style.height = '10px';
          dot.style.backgroundColor = 'var(--color-highlight)';
          dot.style.boxShadow = '0 0 10px var(--color-highlight)';

          ring.style.width = '24px';
          ring.style.height = '24px';
          ring.style.borderColor = 'var(--color-highlight)';
          ring.style.backgroundColor = 'rgba(225, 29, 72, 0.08)';
          ring.style.borderWidth = '1.5px';
        } else {
          // Default appearance
          dot.style.width = '8px';
          dot.style.height = '8px';
          dot.style.backgroundColor = 'var(--accent)';
          dot.style.boxShadow = '0 0 8px var(--accent-glow)';

          // Keep ring default size from CSS
          ring.style.borderColor = 'var(--accent)';
          ring.style.backgroundColor = 'transparent';
          ring.style.borderWidth = '1px';
        }
    };

    const onMouseDown = () => {
      if (!ring) return;
      ring.style.transform = 'translate(-50%, -50%) scale(0.75)';
    };

    const onMouseUp = () => {
      if (!ring) return;
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
    };

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
  }, []);

  // Always render cursor

  return (
    <>
      {/* Target Dot - zero latency */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,box-shadow] duration-200"
        style={{ left: '-100px', top: '-100px' }}
      />
      {/* Trailing Ring - smooth transition curve for position trails */}
      <div
        ref={ringRef}
        className="fixed w-8 h-8 border border-accent/35 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background-color,transform] duration-300 ease-out"
        style={{ 
          left: '-100px', 
          top: '-100px',
          // Trailing ease curve for coordinates
          transitionProperty: 'left, top, width, height, border-color, background-color, transform',
          transitionDuration: '0.12s, 0.12s, 0.3s, 0.3s, 0.3s, 0.3s, 0.15s',
          transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      />
    </>
  );
}
