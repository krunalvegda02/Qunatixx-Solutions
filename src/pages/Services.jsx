import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { AnimatedText } from '../components/animations/AnimatedText';
import { AnimatedSubText } from '../components/animations/AnimatedSubText';
import { useLocation, Link } from 'react-router-dom';
import {
  Cpu, Globe, Database, Smartphone, Palette, Zap,
  ArrowRight, CheckCircle2, TrendingUp, Sparkles, ChevronRight
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import clsx from 'clsx';

// ─── Animation Variants ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};

const staggerChild = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

// ─── Animated Number Counter ───────────────────────────────────────────
function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ''));
    const prefix = value.match(/^[^0-9]*/)?.[0] ?? '';
    const localSuffix = value.match(/[^0-9.]+$/)?.[0] ?? suffix;
    const steps = 40;
    const duration = 1200;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(prefix + Math.round(eased * numeric) + localSuffix);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value, suffix]);

  return <span ref={ref}>{display}</span>;
}

// ─── Magnetic Button ───────────────────────────────────────────────────
function MagneticButton({ onClick, children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.22);
    y.set(dy * 0.22);
  }, [x, y]);

  const handleLeave = useCallback(() => {
    x.set(0); y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}

// ─── Service Image Illustrations (Enhanced Custom SVG) ────────────────
function SoftwareSVG() {
  return (
    <motion.svg viewBox="0 0 380 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
      <defs>
        <linearGradient id="s-bg" x1="0" y1="0" x2="380" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0a0e1a" /><stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="s-bar1" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#7c3aed" /><stop offset="1" stopColor="#4f46e5" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="s-bar2" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#06b6d4" /><stop offset="1" stopColor="#06b6d4" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="s-accent-line" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#7c3aed" /><stop offset="0.5" stopColor="#06b6d4" /><stop offset="1" stopColor="#22c55e" />
        </linearGradient>
        <filter id="s-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="s-glow-sm" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="s-radial" cx="50%" cy="50%" r="50%">
          <stop stopColor="#7c3aed" stopOpacity="0.15" /><stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Background */}
      <rect width="380" height="300" rx="18" fill="url(#s-bg)" />
      {/* Ambient glow */}
      <ellipse cx="190" cy="150" rx="160" ry="120" fill="url(#s-radial)" className="svg-pulse-slow" />
      {/* Grid dots */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={24 + col * 48} cy={24 + row * 42} r="1" fill="#1e293b" />
        ))
      )}
      {/* === CODE EDITOR PANEL === */}
      <motion.rect x="16" y="16" width="218" height="168" rx="12" fill="#111827" stroke="#1e293b" strokeWidth="1.5" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 12 } } }} />
      {/* Title bar */}
      <rect x="16" y="16" width="218" height="32" rx="12" fill="#0d1424" />
      <rect x="16" y="36" width="218" height="12" fill="#0d1424" />
      <circle cx="34" cy="32" r="5" fill="#ef4444" opacity="0.9" filter="url(#s-glow-sm)" />
      <circle cx="50" cy="32" r="5" fill="#f59e0b" opacity="0.9" />
      <circle cx="66" cy="32" r="5" fill="#22c55e" opacity="0.9" filter="url(#s-glow-sm)" />
      {/* File tab */}
      <rect x="82" y="22" width="68" height="20" rx="4" fill="#1e293b" />
      <text x="116" y="35" fontSize="8" fill="#94a3b8" textAnchor="middle" fontFamily="monospace">server.ts</text>
      {/* Line numbers */}
      {[58, 72, 86, 100, 114, 128, 142, 156].map((y, i) => (
        <text key={i} x="26" y={y} fontSize="8" fill="#374151" fontFamily="monospace">{i + 1}</text>
      ))}
      {/* Code syntax */}
      <text x="40" y="58" fontSize="8" fill="#7c3aed" fontFamily="monospace" fontWeight="bold">import</text>
      <text x="82" y="58" fontSize="8" fill="#94a3b8" fontFamily="monospace">{'{'} express {'}'}</text>
      <text x="128" y="58" fontSize="8" fill="#7c3aed" fontFamily="monospace">from</text>
      <text x="152" y="58" fontSize="8" fill="#22c55e" fontFamily="monospace">'express'</text>
      <text x="40" y="72" fontSize="8" fill="#06b6d4" fontFamily="monospace">const</text>
      <text x="68" y="72" fontSize="8" fill="#e2e8f0" fontFamily="monospace">app</text>
      <text x="90" y="72" fontSize="8" fill="#94a3b8" fontFamily="monospace">= express()</text>
      <text x="40" y="86" fontSize="8" fill="#7c3aed" fontFamily="monospace">app</text>
      <text x="58" y="86" fontSize="8" fill="#94a3b8" fontFamily="monospace">.get(</text>
      <text x="88" y="86" fontSize="8" fill="#22c55e" fontFamily="monospace">'/api'</text>
      <text x="118" y="86" fontSize="8" fill="#94a3b8" fontFamily="monospace">, (req, res)</text>
      <text x="40" y="100" fontSize="8" fill="#94a3b8" fontFamily="monospace">  =&gt;</text>
      <text x="56" y="100" fontSize="8" fill="#e2e8f0" fontFamily="monospace">res.json({'{'}</text>
      <text x="104" y="100" fontSize="8" fill="#06b6d4" fontFamily="monospace">status</text>
      <text x="40" y="114" fontSize="8" fill="#f59e0b" fontFamily="monospace">    :</text>
      <text x="56" y="114" fontSize="8" fill="#22c55e" fontFamily="monospace">'ok'</text>
      <text x="40" y="128" fontSize="8" fill="#94a3b8" fontFamily="monospace">  {'}'}))</text>
      {/* Active line highlight */}
      <rect x="18" y="118" width="214" height="12" rx="2" fill="#7c3aed" opacity="0.08" />
      <rect x="18" y="118" width="2" height="12" rx="1" fill="#7c3aed" opacity="0.9" />
      {/* Cursor blink */}
      <rect x="74" y="120" width="1.5" height="10" rx="1" fill="#e2e8f0" opacity="0.8" className="svg-blink" />
      {/* Bottom status bar */}
      <rect x="16" y="169" width="218" height="15" rx="0" fill="#0d1424" />
      <rect x="16" y="172" width="218" height="12" rx="0" fill="#0d1424" />
      <circle cx="28" cy="178" r="3" fill="#22c55e" filter="url(#s-glow-sm)" />
      <text x="35" y="181" fontSize="7" fill="#22c55e" fontFamily="monospace">TypeScript · UTF-8</text>
      <text x="180" y="181" fontSize="7" fill="#64748b" fontFamily="monospace">Ln 6, Col 12</text>
      {/* === METRIC CARDS (right column) === */}
      {/* Card 1 - Uptime */}
      <motion.rect x="244" y="16" width="120" height="78" rx="10" fill="#111827" stroke="#1e293b" strokeWidth="1.5" variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring" } } }} />
      <rect x="244" y="16" width="120" height="3" rx="2" fill="url(#s-accent-line)" />
      <text x="256" y="38" fontSize="9" fill="#64748b" fontFamily="monospace" letterSpacing="1">UPTIME SLA</text>
      <text x="256" y="64" fontSize="28" fontWeight="bold" fill="#7c3aed" fontFamily="monospace" filter="url(#s-glow-sm)">99.9%</text>
      <circle cx="350" cy="50" r="4" fill="#22c55e" filter="url(#s-glow-sm)" />
      <text x="357" y="38" fontSize="7" fill="#22c55e" fontFamily="monospace">LIVE</text>
      <text x="256" y="82" fontSize="8" fill="#22c55e" fontFamily="monospace">↑ All systems go</text>
      {/* Card 2 - Latency */}
      <motion.rect x="244" y="104" width="120" height="78" rx="10" fill="#111827" stroke="#1e293b" strokeWidth="1.5" variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring" } } }} />
      <rect x="244" y="104" width="120" height="3" rx="2" fill="#06b6d4" />
      <text x="256" y="124" fontSize="9" fill="#64748b" fontFamily="monospace" letterSpacing="1">API LATENCY</text>
      <text x="256" y="152" fontSize="26" fontWeight="bold" fill="#06b6d4" fontFamily="monospace" filter="url(#s-glow-sm)">&lt;50ms</text>
      <text x="256" y="170" fontSize="8" fill="#22c55e" fontFamily="monospace">↑ Avg response time</text>
      {/* === BOTTOM PANEL - Automation Chart === */}
      <motion.rect x="16" y="194" width="348" height="90" rx="12" fill="#111827" stroke="#1e293b" strokeWidth="1.5" variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring" } } }} />
      <text x="28" y="214" fontSize="9" fill="#64748b" fontFamily="monospace" letterSpacing="1">WORKFLOW AUTOMATION RATE</text>
      {/* Chart bars */}
      {[
        { x: 28, h: 38, w: 30, c: 'url(#s-bar1)', label: 'Jan', val: '65%' },
        { x: 68, h: 44, w: 30, c: 'url(#s-bar1)', label: 'Feb', val: '70%' },
        { x: 108, h: 34, w: 30, c: 'url(#s-bar1)', label: 'Mar', val: '62%' },
        { x: 148, h: 55, w: 30, c: 'url(#s-bar2)', label: 'Apr', val: '78%' },
        { x: 188, h: 48, w: 30, c: 'url(#s-bar1)', label: 'May', val: '75%' },
        { x: 228, h: 58, w: 30, c: 'url(#s-bar2)', label: 'Jun', val: '80%' },
      ].map((b, i) => (
        <g key={i}>
          <motion.rect x={b.x} y={270 - b.h} width={b.w} height={b.h} rx="4" fill={b.c} variants={{ hidden: { scaleY: 0, transformOrigin: "bottom" }, visible: { scaleY: 1, transition: { type: "spring", stiffness: 50, damping: 10 } } }} />
          <text x={b.x + 15} y="283" fontSize="7" fill="#374151" textAnchor="middle" fontFamily="monospace">{b.label}</text>
        </g>
      ))}
      {/* Big metric */}
      <text x="290" y="250" fontSize="32" fontWeight="bold" fill="#22c55e" fontFamily="monospace" filter="url(#s-glow)">80%</text>
      <text x="290" y="268" fontSize="8" fill="#64748b" fontFamily="monospace">Avg Automated</text>
      {/* Trend arrow */}
      <motion.path d="M 285 248 L 300 232 L 315 240 L 330 224" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.6, transition: { duration: 1.5, delay: 0.8, ease: "easeOut" } } }} />
    </motion.svg>
  );
}

function AISvg() {
  return (
    <motion.svg viewBox="0 0 380 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
      <defs>
        <linearGradient id="ai-bg" x1="0" y1="0" x2="380" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#09090f" /><stop offset="1" stopColor="#130a2a" />
        </linearGradient>
        <radialGradient id="ai-core-glow" cx="50%" cy="50%" r="50%">
          <stop stopColor="#7c3aed" stopOpacity="0.4" /><stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ai-pulse" cx="50%" cy="50%" r="50%">
          <stop stopColor="#7c3aed" stopOpacity="0.2" /><stop offset="1" stopColor="transparent" />
        </radialGradient>
        <filter id="ai-glow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="ai-glow-sm">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="380" height="300" rx="18" fill="url(#ai-bg)" />
      {/* Central ambient glow */}
      <ellipse cx="190" cy="148" rx="100" ry="80" fill="url(#ai-core-glow)" className="svg-pulse-slow" />
      {/* Outer pulse rings */}
      <circle cx="190" cy="148" r="90" stroke="#7c3aed" strokeWidth="0.5" strokeDasharray="6 4" opacity="0.3" className="svg-spin-slow" />
      <circle cx="190" cy="148" r="70" stroke="#7c3aed" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.2" className="svg-spin-reverse" />
      {/* Connection lines to nodes */}
      {[
        { cx: 68, cy: 52, color: '#06b6d4' },
        { cx: 312, cy: 52, color: '#7c3aed' },
        { cx: 40, cy: 188, color: '#8b5cf6' },
        { cx: 340, cy: 188, color: '#06b6d4' },
        { cx: 190, cy: 260, color: '#22c55e' },
      ].map((n, i) => (
        <g key={i}>
          {/* Dashed beam */}
          <line x1={n.cx} y1={n.cy} x2="190" y2="148" stroke={n.color} strokeWidth="1" strokeDasharray="5 4" opacity="0.35" />
          {/* Data packet dot */}
          <circle cx={(n.cx + 190) / 2} cy={(n.cy + 148) / 2} r="2.5" fill={n.color} opacity="0.7" filter="url(#ai-glow-sm)" />
        </g>
      ))}
      {/* === CORE BRAIN === */}
      <circle cx="190" cy="148" r="46" fill="#130a2a" stroke="#7c3aed" strokeWidth="2" filter="url(#ai-glow)" />
      <circle cx="190" cy="148" r="36" fill="#1e0a40" stroke="#6d28d9" strokeWidth="1" />
      {/* Brain pattern - hexagonal mesh */}
      {[[-12, -8], [12, -8], [0, 4], [-12, 16], [12, 16], [0, -20]].map(([dx, dy], i) => (
        <circle key={i} cx={190 + dx} cy={148 + dy} r="3" fill="#7c3aed" opacity={0.6 + i * 0.05} />
      ))}
      {[[-12, -8, 12, -8], [12, -8, 0, 4], [0, 4, -12, 16], [-12, 16, 12, 16], [0, -20, 12, -8], [0, -20, -12, -8], [-12, -8, -12, 16], [12, -8, 12, 16], [0, 4, 0, -20]].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={190 + x1} y1={148 + y1} x2={190 + x2} y2={148 + y2} stroke="#7c3aed" strokeWidth="0.8" opacity="0.4" />
      ))}
      <text x="190" y="170" fontSize="9" fill="#a78bfa" textAnchor="middle" fontFamily="monospace" fontWeight="bold" letterSpacing="1">AI CORE</text>
      {/* === SATELLITE NODES === */}
      {[
        { cx: 68, cy: 52, label: 'GPT-4', sublabel: 'Language', color: '#06b6d4', icon: '⊞' },
        { cx: 312, cy: 52, label: 'LangChain', sublabel: 'Orchestrate', color: '#7c3aed', icon: '⊙' },
        { cx: 40, cy: 188, label: 'VectorDB', sublabel: 'Memory', color: '#8b5cf6', icon: '⊛' },
        { cx: 340, cy: 188, label: 'FastAPI', sublabel: 'Backend', color: '#06b6d4', icon: '⊕' },
        { cx: 190, cy: 260, label: 'HuggingFace', sublabel: 'Models', color: '#22c55e', icon: '⊗' },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r="26" fill="#0f0f1a" stroke={n.color} strokeWidth="1.5" filter="url(#ai-glow-sm)" />
          <circle cx={n.cx} cy={n.cy} r="20" fill="#111827" />
          <text x={n.cx} y={n.cy - 4} fontSize="11" fill={n.color} textAnchor="middle" fontFamily="monospace">{n.icon}</text>
          <text x={n.cx} y={n.cy + 8} fontSize="6.5" fill={n.color} textAnchor="middle" fontFamily="monospace" fontWeight="bold">{n.label}</text>
        </g>
      ))}
      {/* === METRIC BANNER === */}
      <rect x="118" y="18" width="144" height="28" rx="14" fill="#7c3aed" filter="url(#ai-glow-sm)" />
      <text x="190" y="31" fontSize="9" fill="white" textAnchor="middle" fontFamily="monospace">AI Speedup</text>
      <text x="190" y="42" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="monospace">90% Faster Processing</text>
    </motion.svg>
  );
}

function WebSvg() {
  return (
    <motion.svg viewBox="0 0 380 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
      <defs>
        <linearGradient id="w-bg" x1="0" y1="0" x2="380" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06111f" /><stop offset="1" stopColor="#031a1a" />
        </linearGradient>
        <linearGradient id="w-chart" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#06b6d4" stopOpacity="0.6" /><stop offset="1" stopColor="#06b6d4" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="w-hero" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#1e1b4b" /><stop offset="1" stopColor="#042f2e" />
        </linearGradient>
        <filter id="w-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="380" height="300" rx="18" fill="url(#w-bg)" />
      {/* === BROWSER SHELL === */}
      <rect x="14" y="14" width="352" height="272" rx="14" fill="#0d1424" stroke="#1e293b" strokeWidth="1.5" />
      {/* Title bar */}
      <rect x="14" y="14" width="352" height="38" rx="14" fill="#080e1a" />
      <rect x="14" y="38" width="352" height="14" fill="#080e1a" />
      <circle cx="34" cy="33" r="5.5" fill="#ef4444" opacity="0.85" />
      <circle cx="52" cy="33" r="5.5" fill="#f59e0b" opacity="0.85" />
      <circle cx="70" cy="33" r="5.5" fill="#22c55e" opacity="0.85" filter="url(#w-glow)" />
      {/* URL bar */}
      <rect x="88" y="24" width="220" height="18" rx="9" fill="#111827" stroke="#1e293b" strokeWidth="1" />
      <circle cx="100" cy="33" r="4" fill="none" stroke="#22c55e" strokeWidth="1.5" />
      <text x="110" y="37" fontSize="8" fill="#64748b" fontFamily="monospace">quantixx.io/dashboard</text>
      {/* === NAV BAR === */}
      <rect x="14" y="52" width="352" height="32" fill="#0a1020" />
      <rect x="22" y="60" width="28" height="16" rx="3" fill="#06b6d4" opacity="0.15" />
      <text x="36" y="72" fontSize="9" fontWeight="bold" fill="#06b6d4" textAnchor="middle" fontFamily="monospace">Q</text>
      {['Home', 'Services', 'Portfolio', 'Contact'].map((item, i) => (
        <g key={i}>
          <text x={72 + i * 62} y="72" fontSize="8" fill={i === 1 ? '#06b6d4' : '#64748b'} fontFamily="sans-serif">{item}</text>
          {i === 1 && <rect x={72 + i * 62} y="76" width={item.length * 5} height="1.5" rx="1" fill="#06b6d4" />}
        </g>
      ))}
      <rect x="322" y="59" width="36" height="14" rx="7" fill="#06b6d4" opacity="0.9" />
      <text x="340" y="70" fontSize="7" fill="white" textAnchor="middle" fontFamily="monospace">CTA →</text>
      {/* === HERO SECTION === */}
      <rect x="22" y="92" width="170" height="88" rx="8" fill="url(#w-hero)" />
      <rect x="32" y="104" width="80" height="7" rx="3.5" fill="#7c3aed" opacity="0.6" />
      <rect x="32" y="118" width="140" height="12" rx="4" fill="#e2e8f0" opacity="0.15" />
      <rect x="32" y="136" width="120" height="8" rx="4" fill="#64748b" opacity="0.4" />
      <rect x="32" y="150" width="100" height="8" rx="4" fill="#64748b" opacity="0.3" />
      <rect x="32" y="164" width="60" height="14" rx="7" fill="#06b6d4" />
      <text x="62" y="174" fontSize="7.5" fill="white" textAnchor="middle" fontFamily="monospace">Launch →</text>
      {/* === ANALYTICS PANEL === */}
      <rect x="202" y="92" width="156" height="88" rx="8" fill="#080e1a" stroke="#1e293b" strokeWidth="1" />
      <text x="214" y="108" fontSize="8" fill="#64748b" fontFamily="monospace" letterSpacing="1">CONVERSIONS</text>
      <text x="214" y="130" fontSize="26" fontWeight="bold" fill="#06b6d4" fontFamily="monospace" filter="url(#w-glow)">+35%</text>
      <text x="214" y="145" fontSize="8" fill="#22c55e" fontFamily="monospace">↑ vs last quarter</text>
      {/* Sparkline area chart */}
      <polyline points="208,172 225,162 242,166 258,154 275,148 292,140 310,133 328,126 346,118" stroke="#06b6d4" strokeWidth="2" fill="none" strokeLinecap="round" />
      <polygon points="208,172 225,162 242,166 258,154 275,148 292,140 310,133 328,126 346,118 346,178 208,178" fill="url(#w-chart)" />
      {/* === KPI STRIP === */}
      {[
        { x: 22, v: '99.9%', l: 'Uptime', color: '#7c3aed' },
        { x: 142, v: '<1s', l: 'Load Time', color: '#06b6d4' },
        { x: 262, v: 'A+', l: 'Security Score', color: '#22c55e' },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="190" width="108" height="82" rx="10" fill="#080e1a" stroke="#1e293b" strokeWidth="1" />
          <rect x={s.x} y="190" width="108" height="3" rx="2" fill={s.color} />
          <text x={s.x + 54} y="224" fontSize="20" fontWeight="bold" fill={s.color} textAnchor="middle" fontFamily="monospace" filter="url(#w-glow)">{s.v}</text>
          <text x={s.x + 54} y="244" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="monospace">{s.l}</text>
          <circle cx={s.x + 90} cy="204" r="4" fill={s.color} filter="url(#w-glow)" />
          {/* mini sparkline */}
          <polyline
            points={`${s.x + 8},268 ${s.x + 22},260 ${s.x + 36},264 ${s.x + 50},256 ${s.x + 64},252 ${s.x + 80},246 ${s.x + 96},250`}
            stroke={s.color} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"
          />
        </g>
      ))}
    </motion.svg>
  );
}

function MobileSvg() {
  return (
    <motion.svg viewBox="0 0 380 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
      <defs>
        <linearGradient id="m-bg" x1="0" y1="0" x2="380" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d071e" /><stop offset="1" stopColor="#0a0f1e" />
        </linearGradient>
        <linearGradient id="m-screen1" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#1a0940" /><stop offset="1" stopColor="#050a18" />
        </linearGradient>
        <linearGradient id="m-screen2" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#031a1a" /><stop offset="1" stopColor="#050a18" />
        </linearGradient>
        <filter id="m-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="m-glow-sm">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="m-halo1" cx="50%" cy="50%" r="50%">
          <stop stopColor="#7c3aed" stopOpacity="0.15" /><stop offset="1" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="m-halo2" cx="50%" cy="50%" r="50%">
          <stop stopColor="#06b6d4" stopOpacity="0.12" /><stop offset="1" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="380" height="300" rx="18" fill="url(#m-bg)" />
      {/* Ambient halos */}
      <ellipse cx="110" cy="150" rx="80" ry="100" fill="url(#m-halo1)" />
      <ellipse cx="270" cy="150" rx="80" ry="100" fill="url(#m-halo2)" />
      {/* === PHONE 1 (Left, slightly tilted look) === */}
      <rect x="36" y="18" width="108" height="188" rx="18" fill="#111827" stroke="#7c3aed" strokeWidth="2" filter="url(#m-glow-sm)" />
      <rect x="36" y="18" width="108" height="188" rx="18" fill="#111827" />
      {/* Notch */}
      <rect x="68" y="24" width="44" height="10" rx="5" fill="#0a0e1a" />
      <circle cx="90" cy="29" r="3" fill="#0a0e1a" />
      {/* Screen content */}
      <rect x="44" y="40" width="92" height="158" rx="10" fill="url(#m-screen1)" />
      {/* Status bar */}
      <text x="50" y="52" fontSize="7" fill="#64748b" fontFamily="monospace">9:41</text>
      <text x="118" y="52" fontSize="7" fill="#64748b" textAnchor="end" fontFamily="monospace">◉◉◉</text>
      {/* Rating card */}
      <rect x="52" y="58" width="76" height="52" rx="8" fill="#1e0a40" />
      <text x="90" y="74" fontSize="7.5" fill="#a78bfa" textAnchor="middle" fontFamily="monospace">APP RATING</text>
      <text x="90" y="96" fontSize="22" fontWeight="bold" fill="#7c3aed" textAnchor="middle" fontFamily="monospace" filter="url(#m-glow)">4.8★</text>
      {/* Feature list */}
      {[
        { label: 'FaceID Unlock', color: '#7c3aed', active: true },
        { label: 'Offline Mode', color: '#94a3b8', active: false },
        { label: 'Push Alerts', color: '#94a3b8', active: false },
        { label: 'Dark Theme', color: '#94a3b8', active: false },
      ].map((f, i) => (
        <g key={i}>
          <rect x="52" y={118 + i * 22} width="76" height="17" rx="5" fill={f.active ? '#7c3aed' : '#0f172a'} opacity={f.active ? 0.85 : 0.9} />
          <circle cx="63" cy={126 + i * 22} r="3" fill={f.active ? 'white' : '#334155'} />
          <text x="70" y={129 + i * 22} fontSize="7" fill={f.active ? 'white' : '#64748b'} fontFamily="monospace">{f.label}</text>
        </g>
      ))}
      {/* Home indicator */}
      <rect x="70" y="192" width="40" height="3" rx="1.5" fill="#334155" />
      {/* === PHONE 2 (Right) === */}
      <rect x="236" y="30" width="108" height="188" rx="18" fill="#111827" stroke="#06b6d4" strokeWidth="2" filter="url(#m-glow-sm)" />
      <rect x="236" y="30" width="108" height="188" rx="18" fill="#111827" />
      <rect x="268" y="36" width="44" height="10" rx="5" fill="#0a0e1a" />
      <circle cx="290" cy="41" r="3" fill="#0a0e1a" />
      {/* Screen content */}
      <rect x="244" y="52" width="92" height="158" rx="10" fill="url(#m-screen2)" />
      <text x="250" y="64" fontSize="7" fill="#64748b" fontFamily="monospace">9:41</text>
      {/* Live sync badge */}
      <rect x="252" y="70" width="76" height="32" rx="6" fill="#042f2e" stroke="#06b6d4" strokeWidth="1" />
      <circle cx="263" cy="86" r="4" fill="#22c55e" filter="url(#m-glow-sm)" />
      <text x="272" y="83" fontSize="7" fill="#06b6d4" fontFamily="monospace">Real-time Sync</text>
      <text x="272" y="95" fontSize="8" fontWeight="bold" fill="#22c55e" fontFamily="monospace">● LIVE</text>
      {/* Notification stack */}
      {[
        { label: 'Order Shipped', sub: 'ETA: 2 days', color: '#06b6d4', icon: '📦' },
        { label: 'Payment Confirmed', sub: '$2,400 received', color: '#22c55e', icon: '✓' },
        { label: 'Build Deployed', sub: 'v2.4.1 → Production', color: '#7c3aed', icon: '🚀' },
      ].map((n, i) => (
        <g key={i}>
          <rect x="252" y={110 + i * 28} width="76" height="22" rx="5" fill="#0a0e1a" stroke={n.color} strokeWidth="0.8" />
          <text x="258" y={122 + i * 28} fontSize="6.5" fill={n.color} fontFamily="monospace">{n.icon} {n.label}</text>
          <text x="258" y={130 + i * 28} fontSize="6" fill="#374151" fontFamily="monospace">{n.sub}</text>
        </g>
      ))}
      <rect x="270" y="202" width="40" height="3" rx="1.5" fill="#334155" />
      {/* === CENTER CONNECTOR === */}
      <rect x="148" y="108" width="84" height="50" rx="10" fill="#0a0e1a" stroke="#334155" strokeWidth="1" />
      <text x="190" y="128" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="monospace">CROSS-PLATFORM</text>
      <text x="190" y="146" fontSize="11" fontWeight="bold" fill="#a78bfa" textAnchor="middle" fontFamily="monospace">iOS • Android</text>
      {/* Connecting lines */}
      <line x1="144" y1="133" x2="148" y2="133" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      <line x1="232" y1="133" x2="236" y2="133" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      {/* Bottom store badges */}
      <rect x="72" y="222" width="236" height="60" rx="10" fill="#0a0e1a" stroke="#1e293b" strokeWidth="1" />
      {[
        { x: 84, icon: '▶', store: 'Google Play', sub: '50M+ downloads', color: '#22c55e' },
        { x: 198, icon: '', store: 'App Store', sub: '4.8 avg rating', color: '#06b6d4' },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="230" width="96" height="44" rx="8" fill="#111827" stroke="#1e293b" strokeWidth="1" />
          <text x={s.x + 10} y="248" fontSize="16" fill={s.color}>{s.icon}</text>
          <text x={s.x + 28} y="248" fontSize="8" fontWeight="bold" fill="#e2e8f0" fontFamily="monospace">{s.store}</text>
          <text x={s.x + 28} y="260" fontSize="7" fill="#64748b" fontFamily="monospace">{s.sub}</text>
        </g>
      ))}
    </motion.svg>
  );
}

function CloudSvg() {
  return (
    <motion.svg viewBox="0 0 380 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
      <defs>
        <linearGradient id="cl-bg" x1="0" y1="0" x2="380" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#060d18" /><stop offset="1" stopColor="#031a18" />
        </linearGradient>
        <linearGradient id="cl-cloud" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#0f1e38" /><stop offset="1" stopColor="#0a1a2e" />
        </linearGradient>
        <filter id="cl-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="cl-glow-sm">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="cl-halo" cx="50%" cy="40%" r="50%">
          <stop stopColor="#06b6d4" stopOpacity="0.1" /><stop offset="1" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="380" height="300" rx="18" fill="url(#cl-bg)" />
      <ellipse cx="190" cy="110" rx="180" ry="110" fill="url(#cl-halo)" />
      {/* Grid lines */}
      {[60, 120, 180, 240, 300, 360].map(x => (
        <line key={x} x1={x} y1="10" x2={x} y2="290" stroke="#06b6d4" strokeWidth="0.3" opacity="0.08" />
      ))}
      {[60, 120, 180, 240].map(y => (
        <line key={y} x1="10" y1={y} x2="370" y2={y} stroke="#06b6d4" strokeWidth="0.3" opacity="0.08" />
      ))}
      {/* === TOP: Load Balancer === */}
      <rect x="130" y="14" width="120" height="40" rx="10" fill="#0a1a2e" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="190" y="30" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="monospace" letterSpacing="1">LOAD BALANCER</text>
      <text x="190" y="46" fontSize="9" fontWeight="bold" fill="#06b6d4" textAnchor="middle" fontFamily="monospace">Auto-Routing ●</text>
      {/* Lines from LB to Cloud */}
      <line x1="166" y1="54" x2="140" y2="80" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <line x1="190" y1="54" x2="190" y2="80" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      <line x1="214" y1="54" x2="242" y2="80" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      {/* === CLOUD ICON (center) === */}
      <path d="M120 115 Q96 90 120 76 Q132 46 172 58 Q196 38 222 64 Q252 60 252 96 Q266 118 248 126 L122 126 Z" fill="url(#cl-cloud)" stroke="#06b6d4" strokeWidth="1.5" filter="url(#cl-glow-sm)" />
      <circle cx="196" cy="92" r="8" fill="#06b6d4" opacity="0.15" />
      <circle cx="196" cy="92" r="4" fill="#06b6d4" opacity="0.5" />
      <text x="190" y="148" fontSize="8" fill="#06b6d4" textAnchor="middle" fontFamily="monospace">CLOUD ORCHESTRATOR</text>
      {/* Lines from Cloud to providers */}
      {[72, 192, 312].map(x => (
        <line key={x} x1={x} y1="155" x2={x} y2="175" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
      ))}
      {/* === PROVIDER NODES === */}
      {[
        { x: 30, label: 'AWS', sublabel: 'us-east-1', color: '#f59e0b', icon: '⬡' },
        { x: 150, label: 'GCP', sublabel: 'us-central', color: '#4285f4', icon: '◆' },
        { x: 270, label: 'Azure', sublabel: 'eastus-2', color: '#7c3aed', icon: '▣' },
      ].map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="175" width="84" height="62" rx="10" fill="#0a1a2e" stroke={p.color} strokeWidth="1.5" />
          <rect x={p.x} y="175" width="84" height="3" rx="2" fill={p.color} />
          <text x={p.x + 14} y="196" fontSize="14" fill={p.color}>{p.icon}</text>
          <text x={p.x + 30} y="196" fontSize="9" fontWeight="bold" fill={p.color} fontFamily="monospace">{p.label}</text>
          <text x={p.x + 12} y="212" fontSize="7" fill="#64748b" fontFamily="monospace">{p.sublabel}</text>
          {/* Health bars */}
          <rect x={p.x + 12} y="220" width="60" height="4" rx="2" fill="#1e293b" />
          <rect x={p.x + 12} y="220" width={[52, 58, 54][i]} height="4" rx="2" fill={p.color} opacity="0.7" />
          <text x={p.x + 12} y="232" fontSize="7" fill="#374151" fontFamily="monospace">99.{[8, 9, 7][i]}% uptime</text>
        </g>
      ))}
      {/* === KPI STRIP === */}
      <rect x="14" y="250" width="352" height="40" rx="10" fill="#0a1a2e" stroke="#1e293b" strokeWidth="1" />
      {[
        { x: 30, v: '-40%', l: 'Cost Saved', color: '#22c55e' },
        { x: 130, v: '99.9%', l: 'Uptime SLA', color: '#06b6d4' },
        { x: 230, v: '<50ms', l: 'Response', color: '#7c3aed' },
        { x: 318, v: '0-day', l: 'Patch Deploy', color: '#f59e0b' },
      ].map((m, i) => (
        <g key={i}>
          <text x={m.x} y="268" fontSize="12" fontWeight="bold" fill={m.color} fontFamily="monospace" filter="url(#cl-glow-sm)">{m.v}</text>
          <text x={m.x} y="282" fontSize="7" fill="#64748b" fontFamily="monospace">{m.l}</text>
        </g>
      ))}
      {/* Auto-scale indicator */}
      <circle cx="336" cy="103" r="18" fill="#042f2e" stroke="#22c55e" strokeWidth="1.5" filter="url(#cl-glow-sm)" />
      <text x="336" y="99" fontSize="7" fill="#22c55e" textAnchor="middle" fontFamily="monospace">AUTO</text>
      <text x="336" y="111" fontSize="7" fill="#22c55e" textAnchor="middle" fontFamily="monospace">SCALE</text>
    </motion.svg>
  );
}

function DesignSvg() {
  return (
    <motion.svg viewBox="0 0 380 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
      <defs>
        <linearGradient id="d-bg" x1="0" y1="0" x2="380" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d0720" /><stop offset="1" stopColor="#0a0f1e" />
        </linearGradient>
        <linearGradient id="d-frame" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#2e1065" /><stop offset="1" stopColor="#1e1b4b" />
        </linearGradient>
        <filter id="d-glow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="d-glow-sm">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="d-halo" cx="40%" cy="40%" r="50%">
          <stop stopColor="#7c3aed" stopOpacity="0.12" /><stop offset="1" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="380" height="300" rx="18" fill="url(#d-bg)" />
      <ellipse cx="160" cy="130" rx="140" ry="110" fill="url(#d-halo)" />
      {/* === FIGMA CANVAS AREA === */}
      <rect x="14" y="14" width="240" height="180" rx="10" fill="#060a16" stroke="#1e293b" strokeWidth="1.5" />
      {/* Ruler top */}
      <rect x="14" y="14" width="240" height="14" rx="5" fill="#0a0e1a" />
      {[40, 70, 100, 130, 160, 190, 220].map(x => (
        <line key={x} x1={x} y1="18" x2={x} y2="24" stroke="#334155" strokeWidth="0.8" />
      ))}
      {/* Ruler left */}
      <rect x="14" y="28" width="14" height="166" rx="0" fill="#0a0e1a" />
      {[44, 70, 96, 122, 148, 174].map(y => (
        <line key={y} x1="18" y1={y} x2="24" y2={y} stroke="#334155" strokeWidth="0.8" />
      ))}
      {/* Canvas */}
      {/* Component: Hero */}
      <rect x="34" y="32" width="120" height="72" rx="6" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1" />
      <rect x="40" y="40" width="6" height="6" rx="1" fill="#7c3aed" opacity="0.8" />
      <text x="50" y="47" fontSize="7" fill="#64748b" fontFamily="monospace">Hero Section</text>
      <rect x="40" y="54" width="90" height="12" rx="4" fill="#7c3aed" opacity="0.3" />
      <rect x="40" y="72" width="70" height="8" rx="4" fill="#64748b" opacity="0.3" />
      <rect x="40" y="86" width="40" height="10" rx="5" fill="#7c3aed" opacity="0.8" />
      <text x="60" y="94" fontSize="6.5" fill="white" textAnchor="middle" fontFamily="monospace">CTA →</text>
      {/* Component: Card */}
      <rect x="164" y="32" width="80" height="72" rx="6" fill="#1e293b" stroke="#06b6d4" strokeWidth="1" />
      <rect x="170" y="40" width="6" height="6" rx="1" fill="#06b6d4" opacity="0.8" />
      <text x="180" y="47" fontSize="7" fill="#64748b" fontFamily="monospace">Feature Card</text>
      <circle cx="196" cy="68" r="10" fill="#06b6d4" opacity="0.15" stroke="#06b6d4" strokeWidth="1" />
      <rect x="170" y="84" width="64" height="5" rx="2" fill="#64748b" opacity="0.4" />
      <rect x="170" y="93" width="48" height="5" rx="2" fill="#64748b" opacity="0.3" />
      {/* Component: Navbar */}
      <rect x="34" y="112" width="210" height="28" rx="5" fill="#0d1424" stroke="#334155" strokeWidth="1" />
      <rect x="40" y="120" width="12" height="12" rx="2" fill="url(#d-frame)" />
      {['Home', 'Work', 'Services', 'Blog'].map((l, i) => (
        <text key={i} x={64 + i * 38} y="130" fontSize="7" fill={i === 0 ? '#7c3aed' : '#64748b'} fontFamily="monospace">{l}</text>
      ))}
      <rect x="202" y="118" width="36" height="14" rx="7" fill="#7c3aed" opacity="0.85" />
      <text x="220" y="128" fontSize="7" fill="white" textAnchor="middle" fontFamily="monospace">Contact</text>
      {/* Design tokens */}
      <rect x="34" y="148" width="210" height="38" rx="6" fill="#080e1a" stroke="#1e293b" strokeWidth="1" />
      <text x="44" y="162" fontSize="7" fill="#64748b" fontFamily="monospace" letterSpacing="1">DESIGN TOKENS</text>
      <text x="44" y="176" fontSize="8" fill="#7c3aed" fontFamily="monospace">T =</text>
      <text x="62" y="176" fontSize="8" fill="#22c55e" fontFamily="monospace">Inter · 16px · 1.5lh</text>
      <text x="130" y="176" fontSize="8" fill="#7c3aed" fontFamily="monospace">R =</text>
      <text x="148" y="176" fontSize="8" fill="#e2e8f0" fontFamily="monospace">8px radius</text>
      {/* === RIGHT SIDE PANELS === */}
      {/* Color Palette */}
      <rect x="264" y="14" width="102" height="90" rx="10" fill="#080e1a" stroke="#1e293b" strokeWidth="1" />
      <text x="274" y="30" fontSize="8" fill="#64748b" fontFamily="monospace" letterSpacing="1">PALETTE</text>
      {['#7c3aed', '#06b6d4', '#22c55e', '#f59e0b', '#ef4444'].map((c, i) => (
        <g key={i}>
          <rect x={274 + i * 16} y="36" width="14" height="28" rx="3" fill={c} />
          <rect x={274 + i * 16} y="70" width="14" height="28" rx="3" fill={c} opacity="0.3" />
        </g>
      ))}
      <text x="274" y="104" fontSize="7" fill="#374151" fontFamily="monospace">Primary · Tints</text>
      {/* Metrics */}
      <rect x="264" y="114" width="102" height="80" rx="10" fill="#080e1a" stroke="#1e293b" strokeWidth="1" />
      <rect x="264" y="114" width="102" height="3" rx="2" fill="#7c3aed" />
      <text x="274" y="132" fontSize="8" fill="#64748b" fontFamily="monospace" letterSpacing="1">DEV VELOCITY</text>
      <text x="274" y="158" fontSize="30" fontWeight="bold" fill="#7c3aed" fontFamily="monospace" filter="url(#d-glow)">3x</text>
      <text x="274" y="174" fontSize="7" fill="#22c55e" fontFamily="monospace">↑ Faster delivery</text>
      <text x="274" y="184" fontSize="7" fill="#22c55e" fontFamily="monospace">↑ 98% satisfaction</text>
      {/* === BOTTOM: Process Steps === */}
      <rect x="14" y="204" width="352" height="82" rx="12" fill="#080e1a" stroke="#1e293b" strokeWidth="1" />
      <text x="26" y="222" fontSize="8" fill="#64748b" fontFamily="monospace" letterSpacing="1">DESIGN PROCESS</text>
      {[
        { step: '01', label: 'Research', color: '#7c3aed', done: true },
        { step: '02', label: 'Wireframe', color: '#7c3aed', done: true },
        { step: '03', label: 'Prototype', color: '#7c3aed', done: true },
        { step: '04', label: 'Test', color: '#06b6d4', done: false },
        { step: '05', label: 'Launch', color: '#374151', done: false },
      ].map((s, i) => (
        <g key={i}>
          <rect x={26 + i * 68} y="230" width="58" height="44" rx="8" fill={s.done ? '#1a0a40' : '#0a0e1a'} stroke={s.done ? s.color : '#1e293b'} strokeWidth={s.done ? '1.5' : '1'} />
          <text x={55 + i * 68} y="247" fontSize="8" fontWeight="bold" fill={s.done ? s.color : '#374151'} textAnchor="middle" fontFamily="monospace">{s.step}</text>
          <text x={55 + i * 68} y="260" fontSize="7" fill={s.done ? '#e2e8f0' : '#374151'} textAnchor="middle" fontFamily="monospace">{s.label}</text>
          {s.done && <circle cx={55 + i * 68} cy="268" r="2.5" fill={s.color} filter="url(#d-glow-sm)" />}
          {i < 4 && <line x1={84 + i * 68} y1="252" x2={94 + i * 68} y2="252" stroke={s.done ? s.color : '#1e293b'} strokeWidth="1" />}
        </g>
      ))}
    </motion.svg>
  );
}
// ─── Service Data ──────────────────────────────────────────────────────
const servicesData = [
  {
    id: 'custom-software',
    title: 'Custom Software Engineering',
    tagline: 'Built for your operations.',
    metric: '80%',
    metricLabel: 'Work Automated',
    badge: 'Engineering',
    badgeColor: 'accent',
    keyPoints: ['Secure-by-design systems', 'Custom modular APIs', 'Zero downtime guarantee', 'Full source code ownership'],
    technologies: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'Docker'],
    Illustration: SoftwareSVG,
  },
  {
    id: 'ai',
    title: 'AI Solutions & Automation',
    tagline: 'Intelligent tools trained on your data.',
    metric: '90%',
    metricLabel: 'Task Speedup',
    badge: 'AI / ML',
    badgeColor: 'purple',
    keyPoints: ['Custom AI chatbots & agents', 'Automated workflows', 'Smart data extraction', 'Private & secure guardrails'],
    technologies: ['OpenAI', 'LangChain', 'FastAPI', 'VectorDB', 'HuggingFace'],
    Illustration: AISvg,
  },
  {
    id: 'web-apps',
    title: 'Web & SaaS Applications',
    tagline: 'Beautiful platforms that convert.',
    metric: '+35%',
    metricLabel: 'Conversion Lift',
    badge: 'Engineering',
    badgeColor: 'cyan',
    keyPoints: ['Ultra-fast load times (SEO)', 'Secure payment checkout', 'Admin management portal', 'Fully responsive layout'],
    technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Vite'],
    Illustration: WebSvg,
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    tagline: 'Native-level iOS & Android apps.',
    metric: '4.8★',
    metricLabel: 'Avg. App Rating',
    badge: 'Mobile',
    badgeColor: 'purple',
    keyPoints: ['Single iOS + Android codebase', 'Offline mode support', 'Biometric authentication', 'Low battery usage'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    Illustration: MobileSvg,
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure & DevOps',
    tagline: 'Scalable servers with zero downtime.',
    metric: '-40%',
    metricLabel: 'Infrastructure Costs',
    badge: 'Cloud',
    badgeColor: 'cyan',
    keyPoints: ['Auto-scaling environments', 'VPC secure clustering', 'Automated backups', 'Real-time monitoring'],
    technologies: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Datadog'],
    Illustration: CloudSvg,
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design & Brand Consulting',
    tagline: 'Designs that delight and convert.',
    metric: '3x',
    metricLabel: 'Dev Velocity',
    badge: 'Design',
    badgeColor: 'accent',
    keyPoints: ['Interactive Figma prototypes', 'Custom component library', 'WCAG accessibility audits', 'Conversion-optimized layouts'],
    technologies: ['Figma', 'Adobe CC', 'Spline 3D', 'Lottie', 'Miro'],
    Illustration: DesignSvg,
  },
];

const BADGE_STYLES = {
  accent: 'bg-accent/10 text-accent border-accent/25',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-400/25',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/25',
};

const METRIC_COLOR = {
  accent: 'text-accent',
  purple: 'text-purple-400',
  cyan: 'text-cyan-400',
};

// ─── Service Row ───────────────────────────────────────────────────────
function ServiceRow({ service, index, isFirst, openModal }) {
  const isEven = index % 2 === 0;
  const { Illustration } = service;
  const rowRef = useRef(null);
  const inView = useInView(rowRef, { once: true, margin: '-80px' });

  const textContent = (
    <motion.div
      className="flex flex-col justify-center gap-6 py-4"
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Badge */}
      <motion.div variants={staggerChild}>
        <span className={`inline-flex items-center gap-2 self-start px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest rounded-full border ${BADGE_STYLES[service.badgeColor]}`}>
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-current"
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          {service.badge}
        </span>
      </motion.div>

      {/* Title */}
      <motion.div variants={staggerChild}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-text-primary leading-tight tracking-tight mb-2">
          {service.title}
        </h2>
        <p className="text-base text-text-secondary font-light leading-relaxed">{service.tagline}</p>
      </motion.div>

      {/* Metric Highlight — animated counter */}
      <motion.div
        variants={staggerChild}
        className="flex items-center gap-4 py-4 px-5 rounded-xl bg-bg-card/40 border border-border-primary/60 w-fit"
        whileHover={{ scale: 1.03, borderColor: 'rgba(124,58,237,0.4)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <span className={`text-4xl sm:text-5xl font-display font-black tracking-tighter ${METRIC_COLOR[service.badgeColor]}`}>
          <AnimatedNumber value={service.metric} />
        </span>
        <div>
          <div className="text-xs font-mono text-text-muted uppercase tracking-widest">{service.metricLabel}</div>
          <div className="flex items-center gap-1 mt-0.5">
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <TrendingUp size={12} className="text-emerald-400" />
            </motion.div>
            <span className="text-xs text-emerald-400 font-mono">Proven result</span>
          </div>
        </div>
      </motion.div>

      {/* Key Points — staggered */}
      <motion.ul className="space-y-2.5" variants={staggerContainer}>
        {service.keyPoints.map((point, i) => (
          <motion.li
            key={i}
            variants={staggerChild}
            className="flex items-center gap-3 text-sm text-text-secondary"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.3 + i * 0.07, type: 'spring', stiffness: 400, damping: 15 }}
            >
              <CheckCircle2 size={15} className={`shrink-0 ${METRIC_COLOR[service.badgeColor]}`} />
            </motion.div>
            {point}
          </motion.li>
        ))}
      </motion.ul>

      {/* Tech Chips — staggered */}
      <motion.div className="flex flex-wrap gap-2" variants={staggerContainer}>
        {service.technologies.map((tech, i) => (
          <motion.span
            key={i}
            variants={staggerChild}
            whileHover={{ y: -2, borderColor: 'rgba(124,58,237,0.5)', color: 'var(--text-primary)' }}
            className="px-3 py-1 text-xs font-mono text-text-muted bg-bg-secondary/60 border border-border-primary/60 rounded-full cursor-default transition-colors"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {/* CTA — Magnetic Primary Button */}
      <motion.div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto" variants={staggerChild}>
        <MagneticButton
          onClick={() => openModal('contact')}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-accent hover:bg-accent/90 transition-colors shadow-lg cursor-pointer relative overflow-hidden w-full sm:w-auto"
        >
          <motion.span
            className="absolute inset-0 bg-white/10"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          />
          <span className="relative">Get a Quote</span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowRight size={15} />
          </motion.div>
        </MagneticButton>
        <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="w-full sm:w-auto">
          <Link
            to={`/services#${service.id}`}
            className="inline-flex w-full justify-center items-center gap-1.5 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary border border-border-primary hover:border-border-hover transition-all"
          >
            Learn more <ChevronRight size={14} />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  const illustration = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group cursor-default"
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br from-${service.badgeColor === 'accent' ? 'accent' : service.badgeColor === 'purple' ? 'purple-600' : 'cyan-600'}/10 to-transparent pointer-events-none z-10 rounded-2xl`}
        whileHover={{ opacity: 1.5 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute inset-0 border border-border-primary/50 rounded-2xl z-10 pointer-events-none"
        whileHover={{ borderColor: 'rgba(124,58,237,0.4)' }}
        transition={{ duration: 0.4 }}
      />
      <Illustration />
    </motion.div>
  );

  return (
    <div
      ref={rowRef}
      id={service.id}
      className={clsx(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center border-b border-border-primary/40 last:border-0",
        isFirst ? "pt-6 pb-12 lg:pt-10 lg:pb-16" : "py-12 lg:py-16"
      )}
    >
      {isEven ? (
        <>
          <div className="order-2 lg:order-1">{illustration}</div>
          <div className="order-1 lg:order-2">{textContent}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-2">{illustration}</div>
          <div className="order-1 lg:order-1">{textContent}</div>
        </>
      )}
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────
export default function Services() {
  const { openModal } = useModal();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location]);

  return (
    <motion.div
      className={clsx('relative', 'overflow-hidden', 'bg-bg-primary', 'text-text-primary', 'theme-transition', 'pt-28', 'pb-0')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      {/* ── PROFESSIONAL HERO ── */}
      <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-12 overflow-hidden border-b border-border-primary/50 bg-bg-secondary/20">
        
        {/* Animated grid background */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-text-secondary border border-border-primary rounded-full bg-bg-primary mb-8 shadow-sm">
              Capabilities & Solutions
            </span>
          </motion.div>

          {/* H1 — word-by-word reveal */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-text-primary leading-tight tracking-tight max-w-5xl mx-auto"
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Engineering solutions for{' '}
            <br className="hidden md:block" />
            <motion.span
              className="text-accent"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              digital transformation.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mt-8 leading-relaxed"
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            We architect scalable products, build custom enterprise software, and deploy intelligent AI systems that drive measurable business value.
          </motion.p>

          {/* Nav chips — staggered */}
          <motion.div
            className="mt-12 lg:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-3 lg:gap-4 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {servicesData.map((svc, i) => (
              <motion.a
                key={svc.id}
                variants={staggerChild}
                href={`#${svc.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(svc.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                whileHover={{ y: -3, borderColor: 'rgba(124,58,237,0.5)', color: 'var(--text-primary)' }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-border-primary bg-bg-card text-sm font-bold text-text-secondary shadow-sm flex items-center justify-center gap-2 group cursor-pointer transition-colors"
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-accent/50"
                  whileHover={{ scale: 1.6, backgroundColor: 'rgb(124,58,237)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                />
                {svc.title}
              </motion.a>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {servicesData.map((svc, idx) => (
          <ServiceRow key={svc.id} service={svc} index={idx} isFirst={idx === 0} openModal={openModal} />
        ))}
      </section>

      {/* ── PROFESSIONAL B2B CTA ── */}
      <motion.section
        className="relative py-16 sm:py-20 bg-bg-secondary/40 border-t border-border-primary/50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-bg-card border border-border-primary rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ boxShadow: '0 30px 80px -20px rgba(124,58,237,0.12)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">

              {/* Left Column */}
              <motion.div
                className="lg:col-span-3 p-6 sm:p-10 lg:p-14 flex flex-col justify-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <motion.span variants={staggerChild} className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-text-secondary border border-border-primary rounded bg-bg-primary w-fit mb-6">
                  Partner With Us
                </motion.span>
                <motion.h2 variants={staggerChild} className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary leading-tight mb-6">
                  Ready to accelerate your <br className="hidden sm:block" />
                  digital transformation?
                </motion.h2>
                <motion.p variants={staggerChild} className="text-base sm:text-lg text-text-secondary leading-relaxed mb-10 max-w-xl">
                  Book a confidential, no-obligation strategy session with our senior architects. We will discuss your technical challenges, review your architecture, and outline a clear roadmap for execution.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-6 mt-auto" variants={staggerContainer}>
                  {['Enterprise Security', 'Scalable Architecture', 'Dedicated Teams'].map((label) => (
                    <motion.div key={label} variants={staggerChild} className="flex items-center gap-3">
                      <motion.div
                        className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0"
                        whileHover={{ scale: 1.15, backgroundColor: 'rgba(124,58,237,0.2)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <CheckCircle2 size={18} className="text-accent" />
                      </motion.div>
                      <div className="text-sm font-medium text-text-primary">{label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                className="lg:col-span-2 bg-bg-primary/50 p-6 sm:p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-border-primary flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg mb-8 shadow-accent/20"
                  whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-text-primary mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Speak to an Expert
                </motion.h3>
                <motion.p
                  className="text-sm text-text-secondary mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Get a response within 24 hours. No sales teams, just senior engineers.
                </motion.p>

                <MagneticButton
                  onClick={() => openModal('contact')}
                  className="w-full relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-accent hover:bg-accent/90 transition-colors shadow-lg cursor-pointer mb-4"
                >
                  <motion.span
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative">Schedule Consultation</span>
                  <motion.div
                    className="relative"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </MagneticButton>

                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link
                    to="/portfolio"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-text-secondary bg-transparent hover:bg-bg-secondary transition-colors"
                  >
                    View Case Studies
                  </Link>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </motion.section>

    </motion.div>
  );
}
