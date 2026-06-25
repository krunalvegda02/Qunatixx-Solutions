import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

export default function SmoothScroll({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  useEffect(() => {
    // Force scroll to top immediately on route change
    window.scrollTo(0, 0);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
