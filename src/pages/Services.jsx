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

// ─── Premium Dashboard UI Widgets ──────────────────────────────────────────

function SoftwareWidget() {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={clsx('w-full', 'h-full', 'bg-bg-primary', 'rounded-[24px]', 'border', 'border-border-primary', 'p-6', 'sm:p-8', 'flex', 'flex-col', 'gap-4', 'shadow-2xl')}
    >
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex justify-between items-center mb-2">
        <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">Active Services</span>
        <div className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/> <span className="text-[10px] text-emerald-500 font-mono">System Live</span></div>
      </motion.div>
      
      {[
        { name: 'auth-gateway-v2', load: '12%', status: 'bg-emerald-500', uptime: '99.99%' },
        { name: 'payment-processor', load: '45%', status: 'bg-emerald-500', uptime: '99.98%' },
        { name: 'data-worker-queue', load: '89%', status: 'bg-amber-500', uptime: '99.95%' }
      ].map((item, i) => (
        <motion.div key={i} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { type: "spring" } } }} className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-bg-secondary/40 border border-border-primary/50 group hover:border-accent/30 transition-colors cursor-default">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className={clsx('w-1.5', 'h-8', 'rounded-full', item.status)} />
            <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-mono text-text-primary group-hover:text-accent transition-colors">{item.name}</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-text-secondary mt-1">Uptime: {item.uptime}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
             <span className="text-[10px] font-mono text-text-secondary mb-1">CPU Load</span>
             <span className="text-xs sm:text-sm font-bold font-mono text-text-primary">{item.load}</span>
          </div>
        </motion.div>
      ))}
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="mt-auto pt-4 border-t border-border-primary/50 flex justify-between items-center">
         <span className="text-[10px] sm:text-xs text-text-secondary font-mono">Global SLA</span>
         <span className="text-[10px] sm:text-xs bg-emerald-500/10 text-emerald-500 px-2.5 py-1 rounded-md font-mono font-bold">Optimal</span>
      </motion.div>
    </motion.div>
  );
}

function AIWidget() {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={clsx('w-full', 'h-full', 'bg-bg-primary', 'rounded-[24px]', 'border', 'border-border-primary', 'p-6', 'sm:p-8', 'flex', 'flex-col', 'gap-4', 'relative', 'overflow-hidden', 'shadow-2xl')}
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 blur-[60px] rounded-full pointer-events-none" />
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex justify-between items-center mb-2 z-10">
        <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">Model Inference</span>
        <span className="text-[10px] bg-accent/20 border border-accent/30 text-accent px-2.5 py-1 rounded-md font-mono">GPT-4 Turbo</span>
      </motion.div>
      
      <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }} className="p-5 sm:p-6 rounded-xl bg-bg-secondary/40 border border-border-primary/50 z-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
        <div className="flex justify-between items-end mb-2 relative z-10">
           <span className="text-3xl sm:text-4xl font-bold font-display text-text-primary">12.4<span className="text-lg text-text-secondary">ms</span></span>
           <span className="text-[10px] sm:text-xs text-emerald-500 font-mono mb-1 bg-emerald-500/10 px-2 py-0.5 rounded-sm">↓ 45% faster</span>
        </div>
        <span className="text-[10px] sm:text-xs text-text-secondary font-mono relative z-10">Avg Time to First Token (TTFT)</span>
      </motion.div>

      <div className="flex gap-2 sm:gap-3 z-10 mt-auto">
         {['Vectorize', 'Search DB', 'Generate'].map((step, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex-1 flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-bg-secondary/20 border border-border-primary/30 text-center group hover:border-accent/30 transition-colors">
               <span className={clsx('w-5', 'h-5', 'rounded-full', 'border', i == 2 ? 'border-accent text-accent' : 'border-text-secondary/30 text-text-secondary', 'flex', 'items-center', 'justify-center', 'mb-2', 'transition-colors')}>
                 {i == 2 ? <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> : <span className="text-[8px] font-mono">{i+1}</span>}
               </span>
               <span className="text-[9px] sm:text-[10px] text-text-secondary font-mono">{step}</span>
            </motion.div>
         ))}
      </div>
    </motion.div>
  );
}

function WebWidget() {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={clsx('w-full', 'h-full', 'bg-bg-primary', 'rounded-[24px]', 'border', 'border-border-primary', 'p-6', 'sm:p-8', 'flex', 'flex-col', 'gap-4', 'shadow-2xl')}
    >
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex justify-between items-center mb-2">
        <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">Web Performance</span>
        <span className="text-[10px] text-text-secondary font-mono bg-bg-secondary/50 px-2 py-1 rounded border border-border-primary">Lighthouse V10</span>
      </motion.div>
      
      <div className="flex gap-4 mb-4">
          <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }} className="w-1/3 aspect-square rounded-full border-[6px] border-emerald-500/20 flex flex-col items-center justify-center relative">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#22c55e" strokeWidth="8" strokeDasharray="289" strokeDashoffset="0" className="opacity-90" />
              </svg>
              <span className="text-2xl sm:text-3xl font-bold font-display text-emerald-400">100</span>
          </motion.div>
          <div className="flex flex-col justify-center gap-3 w-2/3">
             {[
               { label: 'Accessibility', score: 100, color: 'bg-emerald-500' },
               { label: 'Best Practices', score: 100, color: 'bg-emerald-500' },
               { label: 'SEO Optimization', score: 100, color: 'bg-emerald-500' }
             ].map((m, i) => (
                <motion.div key={i} variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="w-full">
                    <div className="flex justify-between text-[10px] sm:text-xs font-mono text-text-secondary mb-1.5">
                        <span>{m.label}</span>
                        <span className="text-emerald-400 font-bold">{m.score}</span>
                    </div>
                    <div className="w-full h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                        <div className={`h-full ${m.color} rounded-full w-full`} />
                    </div>
                </motion.div>
             ))}
          </div>
      </div>
      
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="mt-auto pt-4 border-t border-border-primary/50 flex justify-between items-center">
         <span className="text-[10px] sm:text-xs text-text-secondary font-mono">Core Web Vitals</span>
         <span className="text-[10px] sm:text-xs text-text-primary font-mono font-bold">Passed</span>
      </motion.div>
    </motion.div>
  );
}

function MobileWidget() {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={clsx('w-full', 'h-full', 'bg-bg-primary', 'rounded-[24px]', 'border', 'border-border-primary', 'p-6', 'sm:p-8', 'flex', 'flex-col', 'gap-4', 'shadow-2xl')}
    >
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex justify-between items-center mb-2">
        <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">App Health</span>
        <div className="flex gap-1">
           <span className="text-[9px] bg-highlight/20 text-highlight px-2 py-1 rounded-sm border border-highlight/30 font-mono">iOS</span>
           <span className="text-[9px] bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-sm border border-emerald-500/20 font-mono">Android</span>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-2">
        <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="p-4 sm:p-5 rounded-xl bg-bg-secondary/30 border border-border-primary/50 flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-bold font-display text-text-primary mb-1">99.9%</span>
            <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-sm">Crash-Free Users</span>
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="p-4 sm:p-5 rounded-xl bg-bg-secondary/30 border border-border-primary/50 flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-bold font-display text-text-primary mb-1">4.9★</span>
            <span className="text-[9px] sm:text-[10px] text-highlight font-mono bg-highlight/10 px-2 py-0.5 rounded-sm">Avg App Store Rating</span>
        </motion.div>
      </div>

      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-2 mt-auto">
        <div className="flex justify-between items-center">
            <span className="text-[10px] sm:text-xs font-mono text-text-secondary">App Launch Time</span>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-400">&lt; 0.8s</span>
        </div>
        <div className="w-full h-1 bg-bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[95%]" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function CloudWidget() {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={clsx('w-full', 'h-full', 'bg-bg-primary', 'rounded-[24px]', 'border', 'border-border-primary', 'p-6', 'sm:p-8', 'flex', 'flex-col', 'gap-4', 'relative', 'overflow-hidden', 'shadow-2xl')}
    >
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex justify-between items-center mb-2 z-10">
        <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">Global Network</span>
        <span className="text-[10px] text-accent font-mono border border-accent/30 bg-accent/10 px-2.5 py-1 rounded-md">Auto-Scaling</span>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 z-10">
        {[
          { region: 'us-east-1 (AWS)', cpu: '34%', mem: '4.2GB', status: 'Optimal' },
          { region: 'eu-west-2 (GCP)', cpu: '41%', mem: '6.8GB', status: 'Scaling' }
        ].map((node, i) => (
          <motion.div key={i} variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="p-4 rounded-xl bg-bg-secondary/40 border border-border-primary/60 flex flex-col gap-3">
             <div className="flex justify-between items-center">
                 <span className="text-[10px] font-mono text-text-primary font-bold">{node.region}</span>
                 <span className={clsx('w-1.5 h-1.5 rounded-full', i == 0 ? 'bg-emerald-500' : 'bg-highlight animate-pulse')} />
             </div>
             <div className="flex justify-between items-end">
                 <div className="flex flex-col">
                     <span className="text-[8px] font-mono text-text-secondary">CPU</span>
                     <span className="text-xs font-mono text-text-primary">{node.cpu}</span>
                 </div>
                 <div className="flex flex-col text-right">
                     <span className="text-[8px] font-mono text-text-secondary">RAM</span>
                     <span className="text-xs font-mono text-text-primary">{node.mem}</span>
                 </div>
             </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="mt-auto pt-4 border-t border-border-primary/50 flex justify-between items-center z-10">
         <span className="text-[10px] sm:text-xs text-text-secondary font-mono">Current Server Cost</span>
         <span className="text-xs sm:text-sm text-emerald-400 font-mono font-bold">-40% Optimized</span>
      </motion.div>
    </motion.div>
  );
}

function DesignWidget() {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={clsx('w-full', 'h-full', 'bg-bg-primary', 'rounded-[24px]', 'border', 'border-border-primary', 'p-6', 'sm:p-8', 'flex', 'flex-col', 'gap-4', 'shadow-2xl')}
    >
      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex justify-between items-center mb-2">
        <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">Design System</span>
        <span className="text-[10px] text-text-secondary font-mono border border-border-primary bg-bg-secondary px-2.5 py-1 rounded-md">Tokens v2.0</span>
      </motion.div>
      
      <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="p-4 sm:p-5 rounded-xl bg-bg-secondary/20 border border-border-primary/40 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
             <span className="text-[9px] font-mono text-text-secondary">Brand Palette</span>
             <div className="flex gap-2">
                 {['bg-accent', 'bg-highlight', 'bg-emerald-500', 'bg-text-primary'].map((c, i) => (
                    <div key={i} className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${c} border border-border-primary shadow-sm`} />
                 ))}
             </div>
          </div>
          <div className="h-px w-full bg-border-primary/40" />
          <div className="flex flex-col gap-1.5">
             <span className="text-[9px] font-mono text-text-secondary">Typography Scale (Inter)</span>
             <div className="flex items-baseline gap-3 text-text-primary font-display font-bold">
                 <span className="text-2xl">Aa</span>
                 <span className="text-xl">Aa</span>
                 <span className="text-lg">Aa</span>
             </div>
          </div>
      </motion.div>

      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="mt-auto pt-4 border-t border-border-primary/50 flex justify-between items-center">
         <span className="text-[10px] sm:text-xs text-text-secondary font-mono">Figma Auto-Sync</span>
         <span className="text-[10px] sm:text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-mono font-bold">Connected</span>
      </motion.div>
    </motion.div>
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
    Illustration: () => <img src="/software_engineering.png" alt="Software Engineering" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />,
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
    Illustration: () => <img src="/ai_solutions.png" alt="AI Solutions" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />,
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
    Illustration: () => <img src="/data_engineering.png" alt="Web Applications" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />,
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
    Illustration: () => <img src="/devops.png" alt="Mobile Apps" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />,
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
    Illustration: () => <img src="/cloud_architecture.png" alt="Cloud Architecture" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />,
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
    Illustration: () => <img src="/api_design.png" alt="API Design" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />,
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
        className="relative py-12 sm:py-16 mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-bg-card border border-border-primary rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            whileHover={{ boxShadow: '0 30px 80px -20px rgba(124,58,237,0.15)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">

              {/* Left Column */}
              <motion.div
                className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <motion.span variants={staggerChild} className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-text-secondary border border-border-primary rounded bg-bg-primary w-fit mb-6">
                  Partner With Us
                </motion.span>
                <motion.h2 variants={staggerChild} className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary leading-tight mb-6">
                  Ready to scale your <br className="hidden sm:block" />
                  enterprise architecture?
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
                className="lg:col-span-2 bg-bg-primary/40 p-8 sm:p-12 lg:p-16 border-t lg:border-t-0 lg:border-l border-border-primary flex flex-col justify-center items-center text-center relative overflow-hidden"
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
