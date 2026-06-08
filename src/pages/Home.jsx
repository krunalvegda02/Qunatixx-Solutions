import { useState, useEffect, useRef } from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Database, Smartphone, Palette, Zap, TrendingUp, CheckCircle2, ChevronRight, Quote, Bot, Cloud, CheckCircle } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { useTheme } from '../context/ThemeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const { openModal } = useModal();
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(0);
  const [activeEcosystemTab, setActiveEcosystemTab] = useState('all');
  const [ctaCategory, setCtaCategory] = useState('saas');

  // Mouse tracking for bento cards and 3D parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate offset from center of screen for parallax
      const x = (e.clientX - window.innerWidth / 2) / 35;
      const y = (e.clientY - window.innerHeight / 2) / 35;
      setMousePos({ x, y });

      const cards = document.querySelectorAll('.grid-glow-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardX = e.clientX - rect.left;
        const cardY = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${cardX}px`);
        card.style.setProperty('--mouse-y', `${cardY}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: '99.99%', label: 'Infrastructure Uptime', desc: 'Enterprise-grade SLA' },
    { value: '80%', label: 'Manual Automation', desc: 'Repetitive workflows cut' },
    { value: '+35%', label: 'Conversion Lift', desc: 'Optimized user experience' },
    { value: '$12M+', label: 'Client Revenue Generated', desc: 'Measurable business impact' },
  ];

  const services = [
    {
      title: 'Custom Software Development',
      desc: 'Scalable, custom-engineered desktop and server applications tailored to optimize enterprise operations.',
      icon: Cpu,
      techs: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'REST API'],
      bullets: ['High-throughput database connections', 'Robust multi-threaded backend APIs', 'Secure transaction processing'],
      visualType: 'software',
      outcome: '$150k Annual Overhead Saved'
    },
    {
      title: 'UI/UX Engineering',
      desc: 'Stunning user-centered interfaces modeled around core customer journeys.',
      icon: Palette,
      techs: ['Figma', 'Framer Motion', 'TailwindCSS', 'WebGL', 'SVG'],
      bullets: ['Interactive high-fidelity prototypes', 'Design systems and pattern libraries', 'Micro-interactions and gestures'],
      visualType: 'design',
      outcome: '+35% Conversion Lift Verified'
    },
    {
      title: 'Web & SaaS Solutions',
      desc: 'Ultra-fast, responsive web apps and multi-tenant SaaS products designed with modern React frameworks.',
      icon: Globe,
      techs: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind'],
      bullets: ['High-speed server-side rendering', 'Multi-tenant subscription gateways', 'Real-time telemetry dashboards'],
      visualType: 'web',
      outcome: '$12M+ Client Revenue Generated'
    },
    {
      title: 'Enterprise AI & Automation',
      desc: 'Integrate LLMs, neural searches, and automated pipeline scripts to eliminate 90% of redundant operational work.',
      icon: Zap,
      techs: ['OpenAI API', 'Python', 'FastAPI', 'LangChain', 'PyTorch'],
      bullets: ['Custom-trained fine-tuning nodes', 'Agentic autonomous chains', 'AI-assisted semantic search'],
      visualType: 'ai',
      outcome: '80% Manual Workflows Cut'
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      desc: 'Automated CI/CD pipelines, container orchestration, and serverless architectures using IaC.',
      icon: Database,
      techs: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      bullets: ['Infrastructure as Code (IaC) configurations', 'Automated horizontal auto-scaling', 'Encrypted VPC network architectures'],
      visualType: 'cloud',
      outcome: '99.99% Infrastructure Uptime SLA'
    },
    {
      title: 'Mobile Architecture',
      desc: 'Top-tier cross-platform iOS & Android mobile platforms offering native-level visual performance.',
      icon: Smartphone,
      techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'SQLite'],
      bullets: ['Native biometric device hooks', 'App Store and Google Play publishing', 'Local offline-first databases'],
      visualType: 'mobile',
      outcome: 'Delivered 6 Weeks Ahead of Schedule'
    },
  ];

  const ecosystem = [
    { 
      name: 'React', 
      category: 'Frontend Library',
      color: 'rgba(97, 218, 251, 0.12)',
      glowColor: '#61DAFB',
      role: 'High-Fidelity SPAs',
      status: 'Core UI Framework',
      slug: 'react',
      group: 'frontend'
    },
    { 
      name: 'Next.js', 
      category: 'Server Rendering',
      color: 'rgba(255, 255, 255, 0.08)',
      glowColor: '#FFFFFF',
      role: 'Production SaaS',
      status: 'App Router Node',
      slug: 'nextdotjs',
      group: 'frontend'
    },
    { 
      name: 'TypeScript', 
      category: 'Type Safety',
      color: 'rgba(49, 120, 198, 0.15)',
      glowColor: '#3178C6',
      role: 'Type-Safe Codebase',
      status: 'Strict Compilation',
      slug: 'typescript',
      group: 'frontend'
    },
    { 
      name: 'TailwindCSS', 
      category: 'Fluid Styling',
      color: 'rgba(56, 189, 248, 0.15)',
      glowColor: '#38BDF8',
      role: 'Utility-First Styles',
      status: 'Responsive Engine',
      slug: 'tailwindcss',
      group: 'frontend'
    },
    { 
      name: 'Node.js', 
      category: 'Backend Engine',
      color: 'rgba(51, 153, 51, 0.12)',
      glowColor: '#339933',
      role: 'Async Server Nodes',
      status: 'High Concurrency',
      slug: 'nodedotjs',
      group: 'backend'
    },
    { 
      name: 'Python', 
      category: 'AI & Data Processing',
      color: 'rgba(55, 118, 171, 0.15)',
      glowColor: '#3776AB',
      role: 'AI Model Pipelines',
      status: 'FastAPI Router',
      slug: 'python',
      group: 'backend'
    },
    { 
      name: 'PostgreSQL', 
      category: 'Primary Database',
      color: 'rgba(51, 103, 145, 0.15)',
      glowColor: '#4169E1',
      role: 'Persistent Storage',
      status: 'Row-Level Auditing',
      slug: 'postgresql',
      group: 'database'
    },
    { 
      name: 'AWS', 
      category: 'Cloud Host',
      color: 'rgba(255, 153, 0, 0.15)',
      glowColor: '#FF9900',
      role: 'Highly Scalable Ops',
      status: 'VPC Cluster Host',
      slug: 'amazonwebservices',
      group: 'devops'
    },
    { 
      name: 'Docker', 
      category: 'Container Dev',
      color: 'rgba(36, 150, 237, 0.15)',
      glowColor: '#2496ED',
      role: 'Isolated Clusters',
      status: 'Microservice Build',
      slug: 'docker',
      group: 'devops'
    },
    { 
      name: 'Kubernetes', 
      category: 'Orchestration',
      color: 'rgba(50, 108, 229, 0.15)',
      glowColor: '#326CE5',
      role: 'Failover Orchestrator',
      status: 'Dynamic Autoscale',
      slug: 'kubernetes',
      group: 'devops'
    },
    { 
      name: 'Terraform', 
      category: 'IaC Framework',
      color: 'rgba(132, 79, 186, 0.15)',
      glowColor: '#844FBA',
      role: 'Automated Deployments',
      status: 'State Lock Sync',
      slug: 'terraform',
      group: 'devops'
    },
    { 
      name: 'OpenAI API', 
      category: 'Intelligent Models',
      color: 'rgba(16, 163, 127, 0.15)',
      glowColor: '#10A37F',
      role: 'Agentic Cognitive Node',
      status: 'Fine-Tuned Embeddings',
      slug: 'openai',
      group: 'backend'
    },
    { 
      name: 'MongoDB', 
      category: 'NoSQL Database',
      color: 'rgba(71, 162, 72, 0.15)',
      glowColor: '#47A248',
      role: 'Document Store Sync',
      status: 'Dynamic Schema',
      slug: 'mongodb',
      group: 'database'
    },
    { 
      name: 'Express.js', 
      category: 'Minimal Backend',
      color: 'rgba(255, 255, 255, 0.08)',
      glowColor: '#FFFFFF',
      role: 'RESTful Middleware',
      status: 'Node Router Engine',
      slug: 'express',
      group: 'backend'
    },
    { 
      name: 'Flutter', 
      category: 'Cross-Platform SDK',
      color: 'rgba(2, 86, 155, 0.15)',
      glowColor: '#02569B',
      role: 'Native Performance Mobile',
      status: 'Skia Render Pipeline',
      slug: 'flutter',
      group: 'mobile'
    },
    { 
      name: 'React Native', 
      category: 'Hybrid Mobile',
      color: 'rgba(97, 218, 251, 0.12)',
      glowColor: '#61DAFB',
      role: 'Native Component Hooks',
      status: 'JS-to-Native Bridge',
      slug: 'react',
      group: 'mobile'
    },
  ];

  const testimonials = [
    {
      quote: <span>Quantixx Solutions completely revamped our logistics portal. They <span className="text-highlight font-bold">automated 80% of our manual tracking workflows</span>, which directly saved us over <span className="text-accent font-bold">$150k in operational overhead</span> in just the first six months.</span>,
      author: "Sarah Jenkins",
      role: "VP of Operations",
      company: "DHL Logistics",
      avatar: "SJ",
      logo: 'dhl',
      logoColor: '#FFCC00',
      rating: 5,
      verifiedDate: 'Verified System Audit // May 2026',
      metric: '80%',
      metricLabel: 'Manual Labor Cut',
      metricStatus: 'VERIFIED OVERHEAD'
    },
    {
      quote: <span>The engineering team at Quantixx has a level of <span className="text-highlight font-bold">craftsmanship that is rare to find</span>. Their work on our custom SaaS platform has received praise from our major enterprise clients for <span className="text-accent font-bold">speed and visual excellence</span>.</span>,
      author: "Marcus Vance",
      role: "Founder & CEO",
      company: "Webflow",
      avatar: "MV",
      logo: 'webflow',
      logoColor: '#4353FF',
      rating: 5,
      verifiedDate: 'Verified Integration Audit // April 2026',
      metric: '99.99%',
      metricLabel: 'SLA Reliability',
      metricStatus: 'ACTIVE MONITOR'
    },
    {
      quote: <span>From day one, their communication was completely transparent and their technical architecture plan was highly solid. They delivered our core mobile app <span className="text-highlight font-bold">six weeks ahead of schedule</span>.</span>,
      author: "Elena Rostova",
      role: "CTO",
      company: "Stripe",
      avatar: "ER",
      logo: 'stripe',
      logoColor: '#00D4B2',
      rating: 5,
      verifiedDate: 'Verified App Store Audit // March 2026',
      metric: '-6 Weeks',
      metricLabel: 'Time-to-Market',
      metricStatus: 'SHIPPED PROD'
    },
    {
      quote: <span>Architecting high-frequency trading dashboards requires zero-latency rendering. Quantixx achieved this using React and Rust, pushing our application performance to <span className="text-highlight font-bold">sub-10ms response times</span>.</span>,
      author: "David Chen",
      role: "Head of Infrastructure",
      company: "Google Cloud",
      avatar: "DC",
      logo: 'googlecloud',
      logoColor: '#4285F4',
      rating: 5,
      verifiedDate: 'Verified Cloud Performance // June 2026',
      metric: '<10ms',
      metricLabel: 'Render Latency',
      metricStatus: 'INFRA AUDITED'
    },
    {
      quote: <span>Quantixx migrated our legacy design system to a modern utility-based framework. The transition was seamless, and developer velocity <span className="text-highlight font-bold">improved by 40%</span>.</span>,
      author: "Liam O'Connor",
      role: "Director of Product",
      company: "Airbnb",
      avatar: "LO",
      logo: 'airbnb',
      logoColor: '#FF5A5F',
      rating: 5,
      verifiedDate: 'Verified Product Audit // June 2026',
      metric: '+40%',
      metricLabel: 'Developer Velocity',
      metricStatus: 'DESIGN STABLE'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const titleWords = "Engineering the Future of Intelligent and Enterprise Innovation".split(" ");

  return (
    <div className="relative overflow-hidden bg-bg-primary text-text-primary theme-transition bg-grid-tech">
      
      {/* HERO SECTION - Split-screen Landing Fold */}
      <section className="relative w-full min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        
        {/* Subtle Dot Grid Overlay */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(var(--hero-dot-color)_1.5px,transparent_1.5px)] [background-size:40px_40px] pointer-events-none -z-20 opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" 
          style={{ transform: `translate3d(${-mousePos.x * 0.15}px, ${-mousePos.y * 0.15}px, 0)` }}
        />

        {/* Backdrop Glows */}
        <div 
          className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-accent/10 to-highlight/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" 
          style={{ transform: `translate3d(${-mousePos.x * 0.1}px, ${-mousePos.y * 0.1}px, 0)` }}
        />
        <div className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-highlight/10 to-accent/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT COLUMN: BRAND MESSAGING & PROPOSITIONS */}
            <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-left relative z-10">
              
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-border-primary bg-bg-secondary/60 backdrop-blur-md mb-3"
              >
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-text-secondary uppercase tracking-wider font-mono">
                  Trusted Technology Partner
                </span>
              </motion.div>

              {/* Main Heading with Letter-by-Letter Typewriter animation */}
              <motion.h1
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.055,
                      delayChildren: 0.25,
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-display font-extrabold tracking-tight leading-[1.12] text-text-primary text-balance mb-4.5"
              >
                {["Architecting"].map((word, wIdx) => (
                  <span key={`b-w-${wIdx}`} className="inline-block whitespace-nowrap mr-[0.25em]">
                    {word.split("").map((char, cIdx) => (
                      <motion.span
                        key={`b-c-${cIdx}`}
                        variants={{
                          hidden: { opacity: 0, y: 5 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
                {" "}
                <span className="accent-text-gradient text-glow inline-block mr-[0.25em]">
                  {["High-Performance", "Platforms"].map((word, wIdx) => (
                    <span key={`dp-w-${wIdx}`} className="inline-block whitespace-nowrap mr-[0.25em]">
                      {word.split("").map((char, cIdx) => (
                        <motion.span
                          key={`dp-c-${cIdx}`}
                          variants={{
                            hidden: { opacity: 0, y: 5 },
                            visible: { opacity: 1, y: 0 }
                          }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </span>
                {" "}
                {["That", "Scale", "Enterprises"].map((word, wIdx) => (
                  <span key={`sb-w-${wIdx}`} className="inline-block whitespace-nowrap mr-[0.25em]">
                    {word.split("").map((char, cIdx) => (
                      <motion.span
                        key={`sb-c-${cIdx}`}
                        variants={{
                          hidden: { opacity: 0, y: 5 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>

              {/* Tagline / Subtitle with Word-by-Word fade reveal */}
              <motion.p
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.035,
                      delayChildren: 2.8,
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-sans font-light mb-6"
              >
                {"Quantixx Solutions helps startups, enterprises, and growing brands design, develop, and scale high-fidelity software, custom SaaS platforms, and automated workflow pipelines.".split(" ").map((word, i) => (
                  <span key={`w-${i}`} className="inline-block mr-1">
                    <motion.span
                      variants={{
                        hidden: { opacity: 0, y: 3 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.p>

              {/* Button CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 w-full sm:w-auto mb-6"
              >
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto px-8 py-4 rounded-sm text-sm font-bold bg-accent hover:bg-accent-hover text-white shadow-[0_0_20px_var(--accent-glow)] transition-all cursor-pointer transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
                  Start Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={openModal}
                  className="w-full sm:w-auto px-8 py-4 rounded-sm text-sm font-bold bg-bg-secondary hover:bg-bg-elevated text-text-primary border border-border-primary hover:border-border-hover transition-all cursor-pointer flex items-center justify-center"
                >
                  Book Consultation
                </button>
              </motion.div>

              {/* Capabilities Pills */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {["Web Engineering", "Mobile Platforms", "AI Integration", "Cloud Ops", "SaaS Infrastructure", "UI/UX Systems"].map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3.5 py-1.5 rounded-sm text-xs font-medium bg-bg-secondary/40 border border-border-primary text-text-secondary select-none"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* Core Trust Checkmarks */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-x-8 gap-y-3 pt-6 border-t border-border-primary w-full"
              >
                {[
                  "Enterprise Security",
                  "Agile & Fast Delivery",
                  "Transparent Deliverables",
                  "Dedicated Core Architects"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle size={16} className="text-highlight shrink-0" />
                    <span className="font-sans font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>

            </div>

            {/* RIGHT COLUMN: INTERACTIVE DASHBOARD & FLOATING ACTIONS */}
            <div className="col-span-12 lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center items-center">
              
              {/* Rotating perspective glow backplane */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 to-highlight/15 rounded-sm-[32px] blur-3xl -z-10" />

              {/* Main Interactive Live Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full glass-card rounded-sm p-6 shadow-2xl relative border border-border-primary overflow-hidden"
              >
                {/* Mockup Header tab */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-border-primary">
                  <div className="flex items-center gap-3">
                    {/* Traffic Light Dots */}
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-highlight/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                      Quantixx Systems // active_flow
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-highlight/10 text-highlight text-[10px] font-mono font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse" />
                    +32.5% GROWTH
                  </div>
                </div>

                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs text-text-secondary font-mono">System API Success Rate</span>
                  <span className="text-2xl font-bold font-display text-text-primary">99.98%</span>
                </div>

                {/* SVG Live Sparkline Chart */}
                <div className="h-44 w-full bg-bg-secondary/40 rounded-sm border border-border-primary relative overflow-hidden flex items-end p-1">
                  
                  {/* Chart Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between py-4 opacity-30 pointer-events-none">
                    <div className="border-t border-border-primary w-full" />
                    <div className="border-t border-border-primary w-full" />
                    <div className="border-t border-border-primary w-full" />
                  </div>

                  <svg className="w-full h-[80%] stroke-accent fill-none" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Glowing Area Fill */}
                    <path d="M 0 30 Q 15 15 25 22 T 50 8 T 75 18 T 100 4 L 100 30 L 0 30 Z" fill="url(#chart-area)" stroke="none" />
                    {/* Vector Curve */}
                    <path 
                      d="M 0 30 Q 15 15 25 22 T 50 8 T 75 18 T 100 4" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>

                  {/* Pulsing tracer dot at curve end */}
                  <div className="absolute top-[28%] right-[4%] flex h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent"></span>
                  </div>
                </div>

                {/* Bottom Core Stats Row */}
                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div className="rounded-sm bg-bg-secondary/40 border border-border-primary p-3.5 text-center">
                    <div className="text-xl sm:text-2xl font-bold font-display text-text-primary">100+</div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider font-mono">Projects</div>
                  </div>
                  <div className="rounded-sm bg-bg-secondary/40 border border-border-primary p-3.5 text-center">
                    <div className="text-xl sm:text-2xl font-bold font-display text-text-primary">50+</div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider font-mono">Clients</div>
                  </div>
                  <div className="rounded-sm bg-bg-secondary/40 border border-border-primary p-3.5 text-center">
                    <div className="text-xl sm:text-2xl font-bold font-display text-text-primary">99%</div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider font-mono">Success</div>
                  </div>
                </div>

              </motion.div>

              {/* Floating Technology Cards (Staggered parallax layers) */}
              
              {/* Floater 1: AI Automation */}
              <div 
                className="absolute -left-10 top-12 pointer-events-none transition-transform duration-300 ease-out hidden sm:block"
                style={{ transform: `translate3d(${mousePos.x * 1.3}px, ${mousePos.y * 1.3}px, 0)` }}
              >
                <motion.div 
                  className="bg-bg-card border border-border-primary p-3.5 rounded-sm shadow-xl flex items-center gap-3 select-none"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-9 h-9 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Bot size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text-primary">AI Automation</div>
                    <div className="text-[9px] text-text-muted font-mono">Workflow Opt.</div>
                  </div>
                </motion.div>
              </div>

              {/* Floater 2: Cloud Infrastructure */}
              <div 
                className="absolute -right-8 top-[32%] pointer-events-none transition-transform duration-300 ease-out hidden sm:block"
                style={{ transform: `translate3d(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px, 0)` }}
              >
                <motion.div 
                  className="bg-bg-card border border-border-primary p-3.5 rounded-sm shadow-xl flex items-center gap-3 select-none"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-9 h-9 rounded-sm bg-highlight/10 border border-highlight/20 flex items-center justify-center text-highlight">
                    <Cloud size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text-primary">Cloud Infrastructure</div>
                    <div className="text-[9px] text-text-muted font-mono">AWS & DevOps</div>
                  </div>
                </motion.div>
              </div>

              {/* Floater 3: Mobile Architecture */}
              <div 
                className="absolute bottom-[-16px] left-[5%] pointer-events-none transition-transform duration-300 ease-out hidden sm:block"
                style={{ transform: `translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 0)` }}
              >
                <motion.div 
                  className="bg-bg-card border border-border-primary p-3.5 rounded-sm shadow-xl flex items-center gap-3 select-none"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="w-9 h-9 rounded-sm bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text-primary">Mobile Platforms</div>
                    <div className="text-[9px] text-text-muted font-mono">iOS & Android</div>
                  </div>
                </motion.div>
              </div>

              {/* Floater 4: Web Architecture */}
              <div 
                className="absolute bottom-12 -right-8 pointer-events-none transition-transform duration-300 ease-out hidden sm:block"
                style={{ transform: `translate3d(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px, 0)` }}
              >
                <motion.div 
                  className="bg-bg-card border border-border-primary p-3.5 rounded-sm shadow-xl flex items-center gap-3 select-none"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  <div className="w-9 h-9 rounded-sm bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
                    <Globe size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text-primary">Web Architecture</div>
                    <div className="text-[9px] text-text-muted font-mono">React & Next.js</div>
                  </div>
                </motion.div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TRUSTED BY MARQUEE */}
      <section className="py-12 border-y border-border-primary bg-bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-text-muted">
            Trusted by founders and scaling companies worldwide
          </p>
        </div>
        
        {/* Infinite marquee container */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="flex gap-16 py-2 animate-marquee whitespace-nowrap min-w-full">
            {['Vercel', 'AWS', 'Stripe', 'OpenAI', 'Linear', 'Cloudflare', 'DigitalOcean', 'Framer', 'Webflow'].map((brand, i) => (
              <span key={i} className="text-xl sm:text-2xl font-bold font-display text-text-secondary/60 hover:text-text-primary transition-colors uppercase tracking-[0.15em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {brand}
              </span>
            ))}
          </div>
          <div className="flex gap-16 py-2 animate-marquee whitespace-nowrap min-w-full" aria-hidden="true">
            {['Vercel', 'AWS', 'Stripe', 'OpenAI', 'Linear', 'Cloudflare', 'DigitalOcean', 'Framer', 'Webflow'].map((brand, i) => (
              <span key={i} className="text-xl sm:text-2xl font-bold font-display text-text-secondary/60 hover:text-text-primary transition-colors uppercase tracking-[0.15em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Interactive Showcase */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
        
        {/* Subtle Background Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center relative z-10 space-y-4"
        >
          {/* Category Pill */}
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-accent bg-accent/10 px-3.5 py-1.5 rounded-sm inline-block">
            Engineering Capabilities
          </span>

          {/* Page Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight max-w-3xl mx-auto leading-tight">
            Enterprise Solutions & <span className="accent-text-gradient">Premium Craftsmanship</span>
          </h2>

          {/* Tagline / Subtitle */}
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            We operate at the intersection of business strategy and high-fidelity software engineering. Explore our core capabilities below to see how we build software clients trust.
          </p>
        </motion.div>

        {/* Split Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: Vertical Capabilities Navigation */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center space-y-2.5">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              const isSelected = activeService === idx;
              return (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveService(idx)}
                  onClick={() => setActiveService(idx)}
                  className={`w-full text-left p-4.5 rounded-sm border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                    isSelected 
                      ? 'bg-bg-card border-accent/25 shadow-[0_4px_30px_var(--accent-glow)] scale-[1.01]' 
                      : 'bg-transparent border-border-primary hover:border-border-hover'
                  }`}
                >
                  {/* Left Accent indicator pill */}
                  {isSelected && (
                    <motion.div 
                      layoutId="service-accent-bar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-accent to-highlight"
                    />
                  )}
                  
                  <div className="flex gap-4 items-center relative z-10">
                    <div className={`w-10 h-10 rounded-sm flex items-center justify-center border transition-all ${
                      isSelected 
                        ? 'bg-accent/10 border-accent/30 text-accent' 
                        : 'bg-bg-secondary border-border-primary text-text-secondary'
                    }`}>
                      <Icon size={18} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline">
                        <span className={`text-sm sm:text-base font-bold transition-colors ${
                          isSelected ? 'text-accent' : 'text-text-primary'
                        }`}>
                          {svc.title}
                        </span>
                        <span className="text-[10px] font-mono text-text-muted">0{idx + 1}</span>
                      </div>
                      <p className="text-xs text-text-secondary mt-0.5 line-clamp-1 font-light">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Interactive High-Fidelity Visual Panel */}
          <div className="col-span-12 lg:col-span-7 flex">
            <div className="w-full glass-card rounded-sm border border-border-primary p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="h-full flex flex-col justify-between space-y-6"
                >
                  
                  {/* Top: Description & Bullet Points */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                    
                      <span className="text-xs text-text-muted font-mono">// status: active</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary">
                      {services[activeService].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                      {services[activeService].desc}
                    </p>

                    <div className="space-y-2 pt-2">
                      {services[activeService].bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-text-secondary">
                          <CheckCircle2 size={15} className="text-accent shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                     
                    </div>
                  </div>

                  {/* Center: Unique visual representation mockups */}
                  <div className="h-48 w-full bg-bg-secondary/40 rounded-sm border border-border-primary flex items-center justify-center p-4 relative overflow-hidden">
                    
                    {/* Software schema Node Graph mock */}
                    {services[activeService].visualType === 'software' && (
                      <div className="w-full h-full flex flex-col border border-border-primary bg-bg-primary/50 rounded-sm overflow-hidden font-mono text-[9px]">
                        <div className="bg-bg-secondary h-6 px-3 border-b border-border-primary flex justify-between items-center text-text-muted shrink-0 select-none">
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                            api_gateway_controller.go
                          </span>
                          <span>UTF-8 // Go</span>
                        </div>
                        <div className="flex-1 flex items-center justify-between px-8 relative bg-dot-matrix bg-[size:16px_16px]">
                          <div className="w-11 h-11 rounded-sm bg-accent/15 border border-accent/30 flex items-center justify-center text-accent relative z-10 shadow-[0_0_15px_var(--accent-glow)]">
                            <Cpu size={18} />
                          </div>
                          <div className="flex-1 h-0.5 border-t-2 border-dashed border-border-hover relative">
                            <motion.span 
                              animate={{ left: ['0%', '100%'] }} 
                              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-accent blur-[2px]" 
                            />
                          </div>
                          <div className="w-11 h-11 rounded-sm bg-highlight/15 border border-highlight/30 flex items-center justify-center text-highlight relative z-10 animate-pulse">
                            <Database size={18} />
                          </div>
                          <div className="flex-1 h-0.5 border-t-2 border-dashed border-border-hover relative">
                            <motion.span 
                              animate={{ left: ['0%', '100%'] }} 
                              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-highlight blur-[2px]" 
                            />
                          </div>
                          <div className="w-11 h-11 rounded-sm bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-500 relative z-10">
                            <Globe size={18} />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* UI UX design canvas interface mockup */}
                    {services[activeService].visualType === 'design' && (
                      <div className="w-full h-full flex flex-col justify-between border border-border-hover rounded-sm p-3 bg-bg-primary/50 relative">
                        <div className="flex justify-between items-center text-[10px] font-mono text-text-muted">
                          <span>Canvas Mode // 768px</span>
                          <span>X: 254px // Y: 104px</span>
                        </div>
                        <div className="flex justify-center items-center h-20 gap-4">
                          <div className="w-16 h-10 rounded-sm border border-accent bg-accent/10 flex items-center justify-center text-accent text-xs">Card</div>
                          <motion.div 
                            animate={{ scale: [1, 1.05, 1], rotate: [0, 4, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-16 h-16 rounded-sm border border-highlight bg-highlight/10 flex items-center justify-center text-highlight text-xs font-bold"
                          >
                            Hero
                          </motion.div>
                          <div className="w-16 h-10 rounded-sm border border-border-primary flex items-center justify-center text-text-muted text-xs">Spacer</div>
                        </div>
                        <div className="w-full bg-border-primary h-1 rounded-sm-[2px] animate-pulse" />
                      </div>
                    )}

                    {/* Web browser mockup */}
                    {services[activeService].visualType === 'web' && (
                      <div className="w-full h-full flex flex-col border border-border-primary bg-bg-primary/60 rounded-sm overflow-hidden">
                        <div className="bg-bg-secondary h-6 px-3 border-b border-border-primary flex items-center gap-1.5 shrink-0">
                          <span className="w-2 h-2 rounded-full bg-highlight/60" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                          <span className="w-2 h-2 rounded-full bg-green-500/60" />
                        </div>
                        <div className="flex-1 p-3 flex gap-3 items-center">
                          <div className="w-[30%] bg-bg-secondary rounded-sm h-full border border-border-primary p-2 flex flex-col justify-between">
                            <div className="w-6 h-6 rounded-sm bg-accent/20" />
                            <div className="w-full h-1 bg-border-primary rounded-sm-[2px]" />
                          </div>
                          <div className="flex-1 bg-bg-secondary rounded-sm h-full border border-border-primary p-2.5 flex flex-col justify-between">
                            <div className="flex justify-between items-baseline">
                              <span className="text-[9px] text-text-muted font-mono">Conversion</span>
                              <span className="text-xs font-bold text-accent">+14%</span>
                            </div>
                            <div className="h-6 w-full flex items-end gap-1">
                              <div className="bg-accent/40 w-full h-[60%] rounded-sm-[2px]" />
                              <div className="bg-accent/60 w-full h-[80%] rounded-sm-[2px] animate-pulse" />
                              <div className="bg-accent w-full h-[100%] rounded-sm-[2px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* AI Prompt chat interface */}
                    {services[activeService].visualType === 'ai' && (
                      <div className="w-full h-full flex flex-col justify-between border border-border-primary bg-bg-primary/70 rounded-sm p-3.5 font-mono text-[10px] text-text-secondary space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-accent font-bold">&gt; USER:</span>
                          <span className="text-text-primary">Trigger workflow automation pipelines</span>
                        </div>
                        <div className="flex-1 bg-bg-secondary/40 border border-border-primary rounded-sm p-2 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[9px] text-text-muted">
                            <span>LLM NODE // ready</span>
                            <span className="text-emerald-500">online</span>
                          </div>
                          <div className="text-text-primary font-bold text-[11px] animate-pulse">
                            &gt; Initializing agent logic... OK
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Cloud Server status maps */}
                    {services[activeService].visualType === 'cloud' && (
                      <div className="w-full h-full flex flex-col border border-border-primary bg-bg-primary/50 rounded-sm overflow-hidden">
                        <div className="bg-bg-secondary h-6 px-3 border-b border-border-primary flex justify-between items-center text-text-muted font-mono text-[8px] shrink-0 select-none">
                          <span>VPC Cluster: prod-environment-node</span>
                          <span>AWS Cloud Map</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center gap-6 relative">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-9 h-9 rounded-sm bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                              <Database size={16} />
                            </div>
                            <span className="text-[9px] font-mono text-text-muted">AWS DB</span>
                          </div>
                          <div className="h-0.5 w-12 border-t-2 border-dotted border-border-hover relative">
                            <motion.span 
                              animate={{ left: ['0%', '100%'] }} 
                              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                              className="absolute -top-1 w-2 h-2 rounded-full bg-accent blur-[1px]" 
                            />
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-9 h-9 rounded-sm bg-highlight/15 border border-highlight/30 flex items-center justify-center text-highlight animate-pulse">
                              <Cpu size={16} />
                            </div>
                            <span className="text-[9px] font-mono text-text-muted">DOCKER</span>
                          </div>
                          <div className="h-0.5 w-12 border-t-2 border-dotted border-border-hover relative">
                            <motion.span 
                              animate={{ left: ['0%', '100%'] }} 
                              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                              className="absolute -top-1 w-2 h-2 rounded-full bg-highlight blur-[1px]" 
                            />
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-9 h-9 rounded-sm bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-500">
                              <Globe size={16} />
                            </div>
                            <span className="text-[9px] font-mono text-text-muted">CDN</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mobile app feed preview */}
                    {services[activeService].visualType === 'mobile' && (
                      <div className="w-[140px] h-[95%] border border-border-hover bg-bg-primary rounded-sm overflow-hidden shadow-lg p-2.5 flex flex-col justify-between relative">
                        <div className="w-6 h-1.5 bg-border-primary mx-auto rounded-full mb-2" />
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="w-full bg-bg-secondary border border-border-primary rounded-sm p-1.5 flex items-center gap-2">
                            <div className="w-4 h-4 rounded-sm bg-accent/20" />
                            <div className="w-10 h-1 bg-border-primary rounded-sm-[2px]" />
                          </div>
                          <div className="w-full bg-accent text-[9px] text-white py-1 text-center rounded-sm mt-2 font-bold shadow-sm">
                            Launch Mobile App
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Bottom: Tech Stacks pills */}
                  <div className="pt-4 border-t border-border-primary">
                    <span className="block text-[10px] uppercase tracking-wider text-text-muted mb-2 font-mono">
                      Technology Stack / Core Integrations
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {services[activeService].techs.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 rounded-sm text-xs font-semibold bg-bg-secondary text-text-secondary border border-border-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </section>

      {/* WHY QUANTIXX / METRICS & ENTERPRISE TRUST */}
      <section className="py-16 lg:py-24 bg-bg-secondary/40 border-y border-border-primary relative overflow-hidden">
        
        {/* Futuristic Grid / Radial Blur Backdrops */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--hero-dot-color)_1.2px,transparent_1.2px)] [background-size:32px_32px] pointer-events-none opacity-20" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-highlight/5 rounded-full blur-[180px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading & Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-highlight bg-highlight/10 px-3.5 py-1.5 rounded-sm">
              Engineered for Performance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight max-w-3xl mx-auto leading-tight">
              Why Enterprises Partner With Quantixx Solutions
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
              We eliminate technical debt and optimize operational workflows. Our products are engineered under strict security guidelines and high-availability frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT COLUMN: Values Proposition Panel */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8 bg-bg-card/30 backdrop-blur-md border border-border-primary rounded-sm p-8 lg:p-10">
              <div className="space-y-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded-sm">
                  Standard Operating Baselines
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary">
                  The Quantixx Assurance
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                  We deploy production-ready infrastructures equipped with redundant networks, structured testing, and rigorous code audits to guarantee high-performance uptime.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-border-primary">
                {[
                  'Transparent milestones & Slack/Jira communication',
                  'Enterprise-grade production quality (SOC2 readiness)',
                  'Scalable microservices & automated deployments',
                  'Bespoke, human-centered UI design workflows'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="font-sans font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Premium Bento Metrics Showcase */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Stat Card 1: SLA Uptime */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card hover:border-accent/30 rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all" />
                <div className="flex justify-between items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 text-accent border border-accent/20">
                    <Cloud size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-sm font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    LIVE TELEMETRY
                  </span>
                </div>
                
                <div className="my-8">
                  <div className="text-4xl sm:text-5xl font-display font-extrabold text-text-primary tracking-tight">
                    99.99%
                  </div>
                  <div className="text-sm font-semibold text-text-primary mt-2">
                    Infrastructure Uptime
                  </div>
                  <div className="text-xs text-text-secondary mt-1 font-light leading-normal">
                    Enterprise-grade SLA matching mission-critical expectations.
                  </div>
                </div>

                {/* Micro Visualizer: Server Ping Nodes */}
                <div className="flex gap-1.5 items-center bg-bg-secondary/60 border border-border-primary p-2 rounded-sm">
                  {[...Array(12)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`h-3 flex-1 rounded-sm-[2px] ${i === 11 ? 'bg-amber-500/80 animate-pulse' : 'bg-emerald-500/85'}`}
                    />
                  ))}
                  <span className="text-[9px] font-mono text-text-muted ml-2">US-EAST</span>
                </div>
              </motion.div>

              {/* Stat Card 2: Manual Automation */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card hover:border-highlight/30 rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-highlight/5 rounded-full blur-2xl group-hover:bg-highlight/15 transition-all" />
                <div className="flex justify-between items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-highlight/10 text-highlight border border-highlight/20">
                    <Bot size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">SYSTEM METRIC</span>
                </div>

                <div className="my-8">
                  <div className="text-4xl sm:text-5xl font-display font-extrabold text-text-primary tracking-tight">
                    80%
                  </div>
                  <div className="text-sm font-semibold text-text-primary mt-2">
                    Manual Workflows Cut
                  </div>
                  <div className="text-xs text-text-secondary mt-1 font-light leading-normal">
                    Repetitive daily processes shifted to autonomous software chains.
                  </div>
                </div>

                {/* Micro Visualizer: Queue Loading bar */}
                <div className="w-full bg-bg-secondary/60 border border-border-primary p-2 rounded-sm flex items-center justify-between text-[9px] font-mono">
                  <span className="text-highlight">Auto_Cron_Sync</span>
                  <div className="w-1/2 bg-border-primary h-2 rounded-sm overflow-hidden">
                    <motion.div 
                      animate={{ width: ['0%', '80%', '80%', '0%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="bg-highlight h-full rounded-sm" 
                    />
                  </div>
                  <span className="text-text-secondary font-bold">80%</span>
                </div>
              </motion.div>

              {/* Stat Card 3: Conversion Lift */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card hover:border-yellow-500/30 rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/15 transition-all" />
                <div className="flex justify-between items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                    <TrendingUp size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">UI/UX AUDIT</span>
                </div>

                <div className="my-8">
                  <div className="text-4xl sm:text-5xl font-display font-extrabold text-text-primary tracking-tight">
                    +35%
                  </div>
                  <div className="text-sm font-semibold text-text-primary mt-2">
                    Conversion Lift
                  </div>
                  <div className="text-xs text-text-secondary mt-1 font-light leading-normal">
                    Frictionless interfaces customized to optimize customer acquisition.
                  </div>
                </div>

                {/* Micro Visualizer: Growing Bars */}
                <div className="h-10 w-full flex items-end gap-1.5 bg-bg-secondary/40 border border-border-primary rounded-sm p-2">
                  <div className="bg-text-muted w-full h-[40%] rounded-sm-[2px]" />
                  <div className="bg-text-muted w-full h-[55%] rounded-sm-[2px]" />
                  <div className="bg-text-muted w-full h-[70%] rounded-sm-[2px]" />
                  <div className="bg-yellow-500 w-full h-[100%] rounded-sm-[2px] animate-pulse" />
                </div>
              </motion.div>

              {/* Stat Card 4: Revenue Impact */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card hover:border-emerald-500/30 rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all" />
                <div className="flex justify-between items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">FINANCIAL SUMMARY</span>
                </div>

                <div className="my-8">
                  <div className="text-4xl sm:text-5xl font-display font-extrabold text-text-primary tracking-tight">
                    $12M+
                  </div>
                  <div className="text-sm font-semibold text-text-primary mt-2">
                    Client Revenue Generated
                  </div>
                  <div className="text-xs text-text-secondary mt-1 font-light leading-normal">
                    Measurable visual software and pipelines driving hard business results.
                  </div>
                </div>

                {/* Micro Visualizer: Security Audited line */}
                <div className="w-full bg-bg-secondary/60 border border-border-primary py-1.5 px-3 rounded-sm flex items-center justify-between text-[9px] font-mono">
                  <span className="text-text-muted">Audit Assurance</span>
                  <span className="text-emerald-500 font-bold">100% SECURE</span>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* TECH ECOSYSTEM PREVIEW */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
        
        {/* Subtle Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-accent bg-accent/10 px-3.5 py-1.5 rounded-sm">
            Modern Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight">
            Ecosystem Integrations
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            We engineer high-fidelity products with industry-standard, battle-tested technologies to guarantee scale, speed, and safety.
          </p>
        </motion.div>

        {/* Dual Row Continuous Infinite Scrollers (Pause on Hover) */}
        <div className="space-y-6 relative z-10 w-full overflow-hidden">
          
          {/* Row 1: Left-Moving Scroller */}
          <div className="flex w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex shrink-0 gap-6 py-4 animate-marquee whitespace-nowrap min-w-full hover:[animation-play-state:paused]">
              {ecosystem.slice(0, 8).map((tech, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="glass-card rounded-sm p-6 border-border-primary hover:border-transparent transition-all duration-300 text-left flex flex-col justify-between h-[210px] w-[270px] shrink-0 relative group overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.15)] whitespace-normal"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${tech.color}, transparent 65%)` }}
                  />
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-highlight/40 rounded-sm-tl-lg transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-accent/40 rounded-sm-br-lg transition-all duration-300" />
                  
                  <div className="flex justify-between items-start w-full relative z-10">
                    <div className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 p-2 rounded-sm bg-bg-secondary/60 border border-border-primary/80">
                      <img 
                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.glowColor.replace('#', '')}`} 
                        alt={tech.name} 
                        className="w-7 h-7 object-contain select-none pointer-events-none" 
                      />
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-bg-secondary/80 border border-border-primary text-[8px] font-mono font-bold text-text-secondary select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      STABLE
                    </div>
                  </div>

                  <div className="mt-3 relative z-10">
                    <span className="block text-[8px] font-mono text-text-muted uppercase tracking-[0.15em] select-none">Core Integration Node</span>
                    <span className="block text-xs font-sans font-bold text-text-primary mt-1 line-clamp-1 group-hover:text-highlight transition-colors">{tech.role}</span>
                  </div>

                  <div className="pt-3 border-t border-border-primary/60 relative z-10 flex flex-col justify-end">
                    <span className="block text-sm font-black text-text-primary tracking-tight font-display">{tech.name}</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[9px] text-text-muted font-mono truncate">{tech.category}</span>
                      <span className="text-[8px] font-mono text-highlight bg-highlight/10 px-1.5 py-0.25 rounded-sm">PROD</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicated track for seamless infinite scroll */}
            <div className="flex shrink-0 gap-6 py-4 animate-marquee whitespace-nowrap min-w-full hover:[animation-play-state:paused]" aria-hidden="true">
              {ecosystem.slice(0, 8).map((tech, idx) => (
                <div
                  key={`r1-dup-${idx}`}
                  className="glass-card rounded-sm p-6 border-border-primary hover:border-transparent transition-all duration-300 text-left flex flex-col justify-between h-[210px] w-[270px] shrink-0 relative group overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.15)] whitespace-normal"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${tech.color}, transparent 65%)` }}
                  />
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-highlight/40 rounded-sm-tl-lg transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-accent/40 rounded-sm-br-lg transition-all duration-300" />
                  
                  <div className="flex justify-between items-start w-full relative z-10">
                    <div className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 p-2 rounded-sm bg-bg-secondary/60 border border-border-primary/80">
                      <img 
                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.glowColor.replace('#', '')}`} 
                        alt={tech.name} 
                        className="w-7 h-7 object-contain select-none pointer-events-none" 
                      />
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-bg-secondary/80 border border-border-primary text-[8px] font-mono font-bold text-text-secondary select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      STABLE
                    </div>
                  </div>

                  <div className="mt-3 relative z-10">
                    <span className="block text-[8px] font-mono text-text-muted uppercase tracking-[0.15em] select-none">Core Integration Node</span>
                    <span className="block text-xs font-sans font-bold text-text-primary mt-1 line-clamp-1 group-hover:text-highlight transition-colors">{tech.role}</span>
                  </div>

                  <div className="pt-3 border-t border-border-primary/60 relative z-10 flex flex-col justify-end">
                    <span className="block text-sm font-black text-text-primary tracking-tight font-display">{tech.name}</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[9px] text-text-muted font-mono truncate">{tech.category}</span>
                      <span className="text-[8px] font-mono text-highlight bg-highlight/10 px-1.5 py-0.25 rounded-sm">PROD</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right-Moving Scroller */}
          <div className="flex w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex shrink-0 gap-6 py-4 animate-marquee-reverse whitespace-nowrap min-w-full hover:[animation-play-state:paused]">
              {ecosystem.slice(8, 16).map((tech, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="glass-card rounded-sm p-6 border-border-primary hover:border-transparent transition-all duration-300 text-left flex flex-col justify-between h-[210px] w-[270px] shrink-0 relative group overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.15)] whitespace-normal"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${tech.color}, transparent 65%)` }}
                  />
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-highlight/40 rounded-sm-tl-lg transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-accent/40 rounded-sm-br-lg transition-all duration-300" />
                  
                  <div className="flex justify-between items-start w-full relative z-10">
                    <div className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 p-2 rounded-sm bg-bg-secondary/60 border border-border-primary/80">
                      <img 
                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.glowColor.replace('#', '')}`} 
                        alt={tech.name} 
                        className="w-7 h-7 object-contain select-none pointer-events-none" 
                      />
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-bg-secondary/80 border border-border-primary text-[8px] font-mono font-bold text-text-secondary select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      STABLE
                    </div>
                  </div>

                  <div className="mt-3 relative z-10">
                    <span className="block text-[8px] font-mono text-text-muted uppercase tracking-[0.15em] select-none">Core Integration Node</span>
                    <span className="block text-xs font-sans font-bold text-text-primary mt-1 line-clamp-1 group-hover:text-highlight transition-colors">{tech.role}</span>
                  </div>

                  <div className="pt-3 border-t border-border-primary/60 relative z-10 flex flex-col justify-end">
                    <span className="block text-sm font-black text-text-primary tracking-tight font-display">{tech.name}</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[9px] text-text-muted font-mono truncate">{tech.category}</span>
                      <span className="text-[8px] font-mono text-highlight bg-highlight/10 px-1.5 py-0.25 rounded-sm">PROD</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicated track for seamless infinite scroll */}
            <div className="flex shrink-0 gap-6 py-4 animate-marquee-reverse whitespace-nowrap min-w-full hover:[animation-play-state:paused]" aria-hidden="true">
              {ecosystem.slice(8, 16).map((tech, idx) => (
                <div
                  key={`r2-dup-${idx}`}
                  className="glass-card rounded-sm p-6 border-border-primary hover:border-transparent transition-all duration-300 text-left flex flex-col justify-between h-[210px] w-[270px] shrink-0 relative group overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.15)] whitespace-normal"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${tech.color}, transparent 65%)` }}
                  />
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-highlight/40 rounded-sm-tl-lg transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-accent/40 rounded-sm-br-lg transition-all duration-300" />
                  
                  <div className="flex justify-between items-start w-full relative z-10">
                    <div className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 p-2 rounded-sm bg-bg-secondary/60 border border-border-primary/80">
                      <img 
                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.glowColor.replace('#', '')}`} 
                        alt={tech.name} 
                        className="w-7 h-7 object-contain select-none pointer-events-none" 
                      />
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-bg-secondary/80 border border-border-primary text-[8px] font-mono font-bold text-text-secondary select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      STABLE
                    </div>
                  </div>

                  <div className="mt-3 relative z-10">
                    <span className="block text-[8px] font-mono text-text-muted uppercase tracking-[0.15em] select-none">Core Integration Node</span>
                    <span className="block text-xs font-sans font-bold text-text-primary mt-1 line-clamp-1 group-hover:text-highlight transition-colors">{tech.role}</span>
                  </div>

                  <div className="pt-3 border-t border-border-primary/60 relative z-10 flex flex-col justify-end">
                    <span className="block text-sm font-black text-text-primary tracking-tight font-display">{tech.name}</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[9px] text-text-muted font-mono truncate">{tech.category}</span>
                      <span className="text-[8px] font-mono text-highlight bg-highlight/10 px-1.5 py-0.25 rounded-sm">PROD</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS BENTO GRID */}
      <section className="py-16 lg:py-24 bg-bg-secondary/10 border-t border-border-primary relative overflow-hidden">
        
        {/* Subtle Decorative Lights */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-highlight/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 space-y-4"
          >
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-extrabold text-accent bg-accent/10 px-4 py-2 rounded-sm border border-accent/25">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Enterprise Proof
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-text-primary tracking-tight leading-tight">
              Trusted by Engineering <span className="accent-text-gradient">Powerhouses</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto font-light leading-relaxed">
              Discover how leading global organizations partner with Quantixx Solutions to deploy resilient infrastructure, maximize conversions, and scale effortlessly.
            </p>
          </motion.div>

          {/* Testimonials Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {testimonials.map((t, idx) => {
              // Custom grid classes for bento arrangement
              let gridSpanClass = "md:col-span-4";
              if (idx === 0) gridSpanClass = "md:col-span-7";
              if (idx === 1) gridSpanClass = "md:col-span-5";

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`${gridSpanClass} relative overflow-hidden rounded-sm p-8 sm:p-10 bg-bg-card/40 backdrop-blur-xl border border-white/[0.06] hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group shadow-2xl`}
                >
                  {/* Glassmorphic hover lighting tracking & grid patterns */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.06),transparent_80%)] pointer-events-none" />

                  {/* Top Bar: Company Logo & Rating */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 relative z-10">
                    <div className="flex gap-1 select-none">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Brand logo tag */}
                    <div className="flex items-center gap-2 bg-bg-secondary/80 border border-border-primary/80 px-3 py-1.5 rounded-sm shadow-sm">
                      <img 
                        src={`https://cdn.simpleicons.org/${t.logo}/${t.logoColor.replace('#', '')}`}
                        alt={t.company}
                        className="h-3.5 object-contain opacity-90 select-none pointer-events-none"
                      />
                      <span className="text-[10px] font-mono font-extrabold text-text-primary tracking-wider uppercase">{t.company}</span>
                    </div>
                  </div>

                  {/* Core Quote Message */}
                  <div className="mt-8 mb-8 relative z-10 flex-grow">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-accent/5 -z-10 rotate-180" />
                    <p className="text-base sm:text-lg text-text-primary/95 leading-relaxed font-sans font-medium tracking-tight">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Metrics Dashboard Widget inside card */}
                  <div className="mb-6 p-4 rounded-sm bg-bg-secondary/40 border border-border-primary/50 flex items-center justify-between relative z-10 group-hover:border-accent/20 transition-all duration-300">
                    <div>
                      <span className="block text-[9px] font-mono text-text-secondary/70 uppercase tracking-widest">{t.metricLabel}</span>
                      <span className="block text-2xl font-display font-extrabold text-text-primary tracking-tight mt-0.5">{t.metric}</span>
                    </div>
                    <div className="h-8 w-[1px] bg-border-primary" />
                    <div className="text-right">
                      <span className="block text-[8px] font-mono text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-sm font-bold">
                        {t.metricStatus}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Bar: Profile details & Verified stamp */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-border-primary/60 gap-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm bg-gradient-to-tr from-accent to-highlight flex items-center justify-center font-display font-black text-xs text-white shadow-[0_0_12px_rgba(124,58,237,0.3)] select-none">
                        {t.avatar}
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-bold text-text-primary tracking-tight">{t.author}</span>
                        <span className="block text-[10px] text-text-secondary mt-0.5 font-mono">{t.role}</span>
                      </div>
                    </div>
                    
                    {/* Audit stamp */}
                    <div className="text-[9px] font-mono text-text-muted select-none flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                      {t.verifiedDate.split('//')[0].trim()}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="relative overflow-hidden rounded-sm border border-border-primary bg-bg-card/20 backdrop-blur-xl p-8 sm:p-16 text-left max-w-6xl mx-auto shadow-[0_30px_80px_var(--shadow-heavy)] group">
          
          {/* background glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />

          {/* Grid visual overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none opacity-40" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Core pitch and trust metrics */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-extrabold text-highlight bg-highlight/10 px-4 py-2 rounded-sm border border-highlight/20">
                <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse" />
                Let's Collaborate
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-text-primary leading-tight tracking-tight">
                Ready to Build Your Next <span className="accent-text-gradient">Digital Product</span>?
              </h2>
              <p className="text-text-secondary text-sm sm:text-base max-w-xl leading-relaxed font-sans font-light">
                Connect with our solution architects today. We will review your project requirements, audit your current infrastructure, and present a comprehensive technical blueprint at zero initial cost.
              </p>

              {/* Trust & SLA Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-primary/60">
                <div>
                  <span className="block text-[10px] font-mono text-text-secondary/60 uppercase tracking-widest">SLA RESPONSE</span>
                  <span className="block text-lg sm:text-xl font-display font-bold text-text-primary mt-1">&lt; 4 Hours</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-text-secondary/60 uppercase tracking-widest">BLUEPRINT DELIVERY</span>
                  <span className="block text-lg sm:text-xl font-display font-bold text-text-primary mt-1">48 Hours</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-text-secondary/60 uppercase tracking-widest">CLIENT rating</span>
                  <span className="block text-lg sm:text-xl font-display font-bold text-emerald-400 mt-1">4.98/5.00</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Project Initialization Widget */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-sm p-6 sm:p-8 border-white/[0.08] shadow-2xl relative overflow-hidden flex flex-col justify-between">
                
                {/* Visual border light glow */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-sm-tl-lg" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-highlight/40 rounded-sm-br-lg" />

                <div className="mb-6">
                  <span className="text-[9px] font-mono text-text-secondary/80 uppercase tracking-widest block mb-2">Select Project Category</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'saas', label: 'SaaS Platform', color: 'accent' },
                      { id: 'mobile', label: 'Mobile Apps', color: 'highlight' },
                      { id: 'infra', label: 'Cloud Systems', color: 'accent' },
                      { id: 'ai', label: 'AI & Automation', color: 'highlight' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setCtaCategory(tab.id)}
                        className={`px-3 py-2.5 rounded-sm text-xs font-bold text-left transition-all duration-300 border flex flex-col justify-between h-20 relative overflow-hidden cursor-pointer ${
                          ctaCategory === tab.id
                            ? 'bg-accent border-accent text-white shadow-[0_0_15px_rgba(124,58,237,0.35)]'
                            : 'bg-bg-secondary/40 border-border-primary/80 text-text-secondary hover:text-text-primary hover:border-border-hover'
                        }`}
                      >
                        <span className="block">{tab.label}</span>
                        <div className="flex justify-between items-center w-full mt-2">
                          <span className="text-[8px] font-mono opacity-60">
                            {tab.id === 'saas' && 'React / Node.js'}
                            {tab.id === 'mobile' && 'React Native'}
                            {tab.id === 'infra' && 'AWS / Kubernetes'}
                            {tab.id === 'ai' && 'LLM / VectorDB'}
                          </span>
                          <span className={`w-1.5 h-1.5 rounded-full ${ctaCategory === tab.id ? 'bg-white animate-pulse' : 'bg-text-muted'}`} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={openModal}
                  className="w-full py-4 rounded-sm text-sm font-bold bg-accent hover:bg-accent-hover text-white shadow-[0_0_20px_var(--accent-glow)] transition-all cursor-pointer transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 group/btn"
                >
                  Book Priority Consultation
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="mt-4 text-center">
                  <span className="text-[10px] text-text-muted font-mono">
                    Or direct email: <a href="mailto:solutions@quantixx.com" className="text-highlight hover:underline">solutions@quantixx.com</a>
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
