import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText } from '../components/animations/AnimatedText';
import { AnimatedSubText } from '../components/animations/AnimatedSubText';
import { useLocation } from 'react-router-dom';
import { 
  Cpu, Globe, Database, Smartphone, Palette, Zap, 
  CheckCircle, ArrowRight, ShieldCheck, Settings, Layers, 
  Code, Bot, Cloud, Terminal, Sparkles, TrendingUp, CheckCircle2,
  Lock, PlayCircle, HelpCircle, Activity, Server, HardDrive, SmartphoneCharging,
  Search
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import clsx from 'clsx';

export default function Services() {
  const { openModal } = useModal();
  const location = useLocation();

  const servicesData = [
    {
      id: 'custom-software',
      title: 'Custom Software Engineering',
      subtitle: 'Fast, secure, and reliable backend systems built for your operations.',
      icon: Cpu,
      group: 'engineering',
      isFlagship: true,
      description: 'We design and build high-performance desktop and server applications tailored to streamline your company workflows and handle heavy database activity.',
      benefits: [
        'Secure-by-design systems ready for SOC2 & ISO 27001 auditing',
        'Custom modular APIs that link with your existing databases',
        'High execution speed and zero system downtime guarantees',
        'Full source code ownership with clear documentation'
      ],
      technologies: ['Node.js', 'Go', 'Python', 'C#', 'PostgreSQL', 'Docker'],
      outcomes: { metric: '80%', label: 'Work Automation', desc: 'Average reduction in manual data processing and sync delays.' }
    },
    {
      id: 'ai',
      title: 'AI Solutions & Automation',
      subtitle: 'Intelligent software assistants trained on your business data.',
      icon: Zap,
      group: 'ai',
      isFlagship: true,
      description: 'Boost team output. We integrate custom AI models, intelligent chatbots, and automated workflows directly into your daily operations.',
      benefits: [
        'AI assistants trained exclusively on your corporate manuals and docs',
        'Automated file reading and database entry matching',
        'Smart support automation routing that handles 70% of standard questions',
        'Built-in security guardrails to keep your data private and secure'
      ],
      technologies: ['OpenAI API', 'Python', 'FastAPI', 'LangChain', 'VectorDB', 'HuggingFace'],
      outcomes: { metric: '90%', label: 'Task Speedup', desc: 'Average reduction in support ticket processing and manual research.' }
    },
    {
      id: 'web-apps',
      title: 'Web & SaaS Applications',
      subtitle: 'High-speed, responsive web platforms that engage and convert users.',
      icon: Globe,
      group: 'engineering',
      isFlagship: false,
      description: 'We engineer secure Web portals, subscription-based SaaS products, and custom corporate websites designed to look stunning on mobile and desktop.',
      benefits: [
        'Ultra-fast load times that boost search ranking (SEO)',
        'Built-in secure payment checkouts and billing nodes',
        'Easy-to-use admin portals for content and user management',
        'Responsive layouts that scale to fit mobile, tablet, and monitor screens'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'GraphQL', 'Vite'],
      outcomes: { metric: '+35%', label: 'Conversion Lift', desc: 'Average improvement in customer retention and signup rates.' }
    },
    {
      id: 'mobile-apps',
      title: 'Mobile App Development',
      subtitle: 'Native-level performance for iOS and Android devices.',
      icon: Smartphone,
      group: 'engineering',
      isFlagship: false,
      description: 'We construct cross-platform mobile apps that work offline, sync data instantly, and leverage phone features like camera and FaceID.',
      benefits: [
        'Single codebase built simultaneously for Apple App Store and Google Play',
        'Offline mode support that caches data and syncs when back online',
        'Secure biometric logins (FaceID/Fingerprint) out of the box',
        'Low battery and memory usage optimized for older devices'
      ],
      technologies: ['React Native', 'Flutter', 'iOS / Swift', 'Android / Kotlin', 'Firebase', 'SQLite'],
      outcomes: { metric: '4.8★', label: 'App Rating', desc: 'Average app store rating on client products.' }
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure & DevOps',
      subtitle: 'Secure, auto-scaling server environments with zero downtime.',
      icon: Database,
      group: 'engineering',
      isFlagship: false,
      description: 'Scale securely. We automate server setups, configure auto-scaling for traffic spikes, and deploy real-time threat detection overlays.',
      benefits: [
        'Server setups that scale automatically during traffic spikes',
        'VPC secure clustering environments that isolate databases from outside threats',
        'Automated backups with quick-restore systems in case of incident',
        'Continuous uptime tracking dashboards and automated notifications'
      ],
      technologies: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Datadog'],
      outcomes: { metric: '-40%', label: 'Infrastructure Savings', desc: 'Average cost reductions on server hosting and resources.' }
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design & Brand Consulting',
      subtitle: 'Bespoke design systems centered around customer acquisition.',
      icon: Palette,
      group: 'design',
      isFlagship: false,
      description: 'We design modern, easy-to-use software interfaces built around human behavior. We identify friction points to optimize sign-up flows.',
      benefits: [
        'Interactive prototypes in Figma to click through before coding',
        'Customized components libraries ensuring consistent brand guidelines',
        'Accessibility audits that ensure WCAG standard guidelines are met',
        'Conversion-optimized layout pages and navigation funnels'
      ],
      technologies: ['Figma', 'Adobe Creative Cloud', 'Spline 3D', 'Lottie', 'Miro'],
      outcomes: { metric: '3x', label: 'Velocity Increase', desc: 'Frictionless hand-offs translating design to developer code.' }
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedScope, setSelectedScope] = useState('engineering');

  // Jump to specific service if hash exists in URL
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [location]);

  const filteredServices = servicesData.filter(svc => {
    const matchesFilter = activeFilter === 'all' || svc.group === activeFilter;
    const matchesSearch = 
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      svc.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className={clsx('relative', 'overflow-hidden', 'bg-bg-primary', 'text-text-primary', 'theme-transition', 'bg-grid-tech', 'pt-32', 'pb-0')}>
      
      {/* Ambient background glows */}
      <div className={clsx('absolute', 'top-[8%]', 'right-[-12%]', 'w-[500px]', 'h-[500px]', 'bg-gradient-to-br', 'from-accent/5', 'to-highlight/5', 'rounded-full', 'blur-[140px]', 'pointer-events-none', '-z-10', 'animate-pulse-slow')} />
      <div className={clsx('absolute', 'top-[45%]', 'left-[-15%]', 'w-[600px]', 'h-[600px]', 'bg-gradient-to-tr', 'from-highlight/5', 'to-accent/5', 'rounded-full', 'blur-[150px]', 'pointer-events-none', '-z-10')} />

      {/* 1. HERO HEADER FOLD */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'pb-6', 'lg:pb-10', 'text-center', 'relative', 'z-10')}>
        <span className={clsx('inline-flex', 'items-center', 'gap-1.5', 'text-xs', 'uppercase', 'tracking-[0.25em]', 'font-extrabold', 'text-accent', 'bg-accent/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'border', 'border-accent/20', 'mb-6', 'mx-auto')}>
          <Cpu size={14} className={clsx('text-highlight', 'animate-pulse')} />
          Core Capabilities
        </span>
        <AnimatedText 
          as="h1"
          segments={[
            { text: "Software Solutions Built to " },
            { text: "Grow Your Business", className: "accent-text-gradient" }
          ]}
          className={clsx('text-3xl', 'md:text-5xl', 'lg:text-6xl', 'font-display', 'font-extrabold', 'text-text-primary', 'mt-4', 'max-w-4xl', 'mx-auto', 'leading-tight', 'tracking-tight', 'text-balance')}
        />
        <AnimatedSubText 
          text="Explore our range of services. We partner with you to build reliable software, intelligent AI tools, and beautiful web applications that solve real challenges."
          className={clsx('text-sm', 'sm:text-base', 'text-text-secondary', 'max-w-2xl', 'mx-auto', 'mt-5', 'leading-relaxed', 'font-light', 'font-sans', 'text-balance')}
        />

        {/* Dynamic Category Filters & Interactive Search Control Center */}
        <div className={clsx('flex', 'flex-col', 'md:flex-row', 'gap-4', 'justify-between', 'items-center', 'mt-10', 'max-w-4xl', 'mx-auto', 'border', 'border-border-primary', 'bg-bg-card/25', 'backdrop-blur-md', 'p-3', 'rounded-lg', 'shadow-lg')}>
          {/* Dynamic Category Filters */}
          <div className={clsx('flex', 'flex-wrap', 'gap-1.5', 'w-full', 'md:w-auto', 'justify-center', 'md:justify-start')}>
            {[
              { id: 'all', label: 'All Services' },
              { id: 'engineering', label: 'Engineering' },
              { id: 'ai', label: 'AI & Automation' },
              { id: 'design', label: 'UI/UX Design' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                }}
                className={`px-3.5 py-2 rounded-md text-xs font-mono font-bold border transition-all cursor-pointer select-none shadow-sm ${
                  activeFilter === tab.id
                    ? 'border-accent bg-accent/10 text-text-primary shadow-[0_0_12px_var(--accent-glow)]'
                    : 'border-border-primary bg-bg-secondary/40 text-text-secondary hover:text-text-primary hover:border-border-hover'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Real-time Search Box */}
          <div className={clsx('relative', 'w-full', 'md:w-72')}>
            <span className={clsx('absolute', 'inset-y-0', 'left-0', 'flex', 'items-center', 'pl-3', 'pointer-events-none', 'text-text-muted')}>
              <Search size={14} />
            </span>
            <input
              type="text"
              placeholder="Search services, stack, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={clsx('w-full', 'bg-bg-secondary/30', 'border', 'border-border-primary', 'rounded-md', 'pl-9', 'pr-8', 'py-2', 'text-xs', 'font-sans', 'text-text-primary', 'placeholder-text-muted', 'focus:outline-none', 'focus:border-accent', 'focus:ring-1', 'focus:ring-accent', 'transition-all')}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={clsx('absolute', 'inset-y-0', 'right-0', 'flex', 'items-center', 'pr-2.5', 'text-text-muted', 'hover:text-text-primary', 'transition-colors', 'text-xs', 'font-mono', 'font-bold')}
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. SERVICES COMPREHENSIVE DIRECTORY (3-Column Scannable Grid) */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-6', 'lg:py-10', 'relative', 'z-10')}>
        <motion.div 
          layout
          className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-6', 'items-stretch')}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={svc.id}
                  id={svc.id}
                  className={`bg-bg-card border rounded-lg p-6 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden shadow-lg ${
                    svc.isFlagship
                      ? 'border-accent/40 hover:border-accent shadow-xl md:col-span-2 lg:col-span-1 bg-gradient-to-b from-bg-card via-bg-card to-accent/3'
                      : 'border-border-primary hover:border-accent/30'
                  }`}
                >
                  {/* Subtle Background Glow for Flagship */}
                  {svc.isFlagship && (
                    <div className={clsx('absolute', 'top-0', 'right-0', 'w-32', 'h-32', 'bg-gradient-to-bl', 'from-accent/8', 'to-transparent', 'pointer-events-none', 'group-hover:from-accent/15', 'transition-all', 'duration-300')} />
                  )}

                  <div>
                    {/* Top Bar: Icon & Major Outcome Highlight */}
                    <div className={clsx('flex', 'justify-between', 'items-start')}>
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center border transition-all ${
                        svc.isFlagship 
                          ? 'bg-accent/10 border-accent/30 text-accent group-hover:scale-105'
                          : 'bg-bg-secondary border-border-primary text-text-secondary group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20'
                      }`}>
                        <Icon size={20} />
                      </div>
                      
                      {/* Metric Outcome Badge */}
                      <div className="text-right">
                        <span className={clsx('block', 'text-2xl', 'font-display', 'font-extrabold', 'text-highlight', 'tracking-tight', 'text-glow')}>{svc.outcomes.metric}</span>
                        <span className={clsx('block', 'text-[8px]', 'font-mono', 'tracking-widest', 'text-text-muted', 'uppercase', 'font-bold', 'mt-0.5')}>{svc.outcomes.label}</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="mt-5">
                      {svc.isFlagship && (
                        <span className={clsx('inline-flex', 'items-center', 'gap-1', 'px-2', 'py-0.5', 'rounded-sm', 'text-[8px]', 'font-mono', 'font-bold', 'bg-accent/15', 'text-accent', 'border', 'border-accent/20', 'mb-2', 'uppercase')}>
                          <Sparkles size={8} className="animate-pulse" /> Flagship Solution
                        </span>
                      )}
                      <h3 className={clsx('text-lg', 'sm:text-xl', 'font-display', 'font-bold', 'text-text-primary', 'group-hover:text-accent', 'transition-colors')}>
                        {svc.title}
                      </h3>
                      <p className={clsx('text-xs', 'text-text-secondary', 'mt-1', 'font-medium', 'font-sans', 'leading-relaxed')}>
                        {svc.subtitle}
                      </p>
                      <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary/80', 'mt-3', 'font-light', 'leading-relaxed', 'font-sans')}>
                        {svc.description}
                      </p>
                    </div>

                    {/* High-Fidelity UI Graphic Visualizers */}
                    
                    {/* Visualizer 1: Custom Software Engineering (API Gateway Pipeline) */}
                    {svc.id === 'custom-software' && (
                      <div className={clsx('mt-6', 'p-4.5', 'bg-bg-secondary/60', 'border', 'border-border-primary', 'rounded-lg', 'relative', 'overflow-hidden', 'flex', 'flex-col', 'justify-between', 'h-36')}>
                        <div className={clsx('flex', 'justify-between', 'items-center', 'text-[9px]', 'font-mono', 'text-text-muted', 'border-b', 'border-border-primary/50', 'pb-1.5', 'shrink-0')}>
                          <span>API GATEWAY ROUTING</span>
                          <span className={clsx('flex', 'items-center', 'gap-1', 'text-emerald-500')}><span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-emerald-500', 'animate-pulse')} /> ACTIVE</span>
                        </div>
                        {/* API Node Grid */}
                        <div className={clsx('flex', 'justify-between', 'items-center', 'relative', 'my-auto', 'py-1')}>
                          {/* Pulsing Connector Lines */}
                          <div className={clsx('absolute', 'left-6', 'right-6', 'top-1/2', '-translate-y-1/2', 'h-0.5', 'bg-border-primary', '-z-10')} />
                          <div className={clsx('absolute', 'left-[30%]', 'right-[30%]', 'top-1/2', '-translate-y-1/2', 'h-0.5', 'bg-gradient-to-r', 'from-accent', 'to-highlight', '-z-10', 'animate-pulse')} />
                          
                          {/* Client Request Node */}
                          <div className={clsx('flex', 'flex-col', 'items-center', 'gap-1.5')}>
                            <div className={clsx('w-8', 'h-8', 'rounded-sm', 'bg-bg-primary', 'border', 'border-border-primary', 'flex', 'items-center', 'justify-center', 'text-text-secondary', 'group-hover:border-accent/30', 'transition-colors')}>
                              <Code size={13} />
                            </div>
                            <span className={clsx('text-[8px]', 'font-mono', 'text-text-muted')}>Client Request</span>
                          </div>

                          {/* Gateway Processor */}
                          <div className={clsx('flex', 'flex-col', 'items-center', 'gap-1.5')}>
                            <motion.div 
                              animate={{ scale: [1, 1.08, 1] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                              className={clsx('w-10', 'h-10', 'rounded-sm', 'bg-gradient-to-tr', 'from-accent', 'to-highlight', 'flex', 'items-center', 'justify-center', 'text-white', 'shadow-md', 'relative')}
                            >
                              <Terminal size={15} />
                              <div className={clsx('absolute', 'inset-0', 'rounded-sm', 'bg-accent', 'opacity-20', 'blur', 'animate-ping')} />
                            </motion.div>
                            <span className={clsx('text-[8px]', 'font-mono', 'text-text-primary', 'font-bold')}>API Router</span>
                          </div>

                          {/* Database Node */}
                          <div className={clsx('flex', 'flex-col', 'items-center', 'gap-1.5')}>
                            <div className={clsx('w-8', 'h-8', 'rounded-sm', 'bg-bg-primary', 'border', 'border-border-primary', 'flex', 'items-center', 'justify-center', 'text-text-secondary')}>
                              <Database size={13} />
                            </div>
                            <span className={clsx('text-[8px]', 'font-mono', 'text-text-muted')}>PostgreSQL</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visualizer 2: AI & Automation (Chatbot UI Prompt Simulation) */}
                    {svc.id === 'ai' && (
                      <div className={clsx('mt-6', 'p-4', 'bg-bg-secondary/60', 'border', 'border-border-primary', 'rounded-lg', 'flex', 'flex-col', 'justify-between', 'h-36')}>
                        <div className={clsx('flex', 'justify-between', 'items-center', 'text-[9px]', 'font-mono', 'text-text-muted', 'border-b', 'border-border-primary/50', 'pb-1.5', 'shrink-0')}>
                          <span>COGNITIVE INTELLIGENCE</span>
                          <span className={clsx('text-accent', 'flex', 'items-center', 'gap-1')}><Sparkles size={10} className="animate-pulse" /> ENGINE ACTIVE</span>
                        </div>
                        {/* Chat Bubbles */}
                        <div className={clsx('flex', 'flex-col', 'gap-2', 'my-auto', 'py-1', 'text-[9px]')}>
                          {/* Client Message */}
                          <div className={clsx('flex', 'items-start', 'gap-2', 'self-start', 'max-w-[85%]')}>
                            <div className={clsx('w-5', 'h-5', 'rounded-sm', 'bg-bg-primary', 'border', 'border-border-primary', 'flex', 'items-center', 'justify-center', 'text-text-secondary', 'font-mono', 'text-[8px]')}>U</div>
                            <div className={clsx('bg-bg-primary', 'border', 'border-border-primary', 'p-2', 'rounded-sm', 'text-text-secondary', 'leading-normal')}>
                              Analyze sales document & output pipeline.
                            </div>
                          </div>
                          {/* AI Action Response */}
                          <div className={clsx('flex', 'items-start', 'gap-2', 'self-end', 'max-w-[85%]', 'flex-row-reverse')}>
                            <div className={clsx('w-5', 'h-5', 'rounded-sm', 'bg-accent/10', 'border', 'border-accent/25', 'flex', 'items-center', 'justify-center', 'text-accent')}><Bot size={11} /></div>
                            <div className={clsx('bg-accent/5', 'border', 'border-accent/20', 'p-2', 'rounded-sm', 'text-text-primary', 'font-semibold', 'leading-normal', 'flex', 'items-center', 'gap-1.5', 'shadow-sm')}>
                              <CheckCircle size={10} className={clsx('text-emerald-500', 'shrink-0')} />
                              <span>Key-clauses extracted: Slack notification sent</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visualizer 3: Web & SaaS Applications (Browser Dashboard Mockup) */}
                    {svc.id === 'web-apps' && (
                      <div className={clsx('mt-5', 'p-3.5', 'bg-bg-secondary/60', 'border', 'border-border-primary', 'rounded-lg', 'flex', 'flex-col', 'justify-between', 'h-36', 'overflow-hidden')}>
                        {/* Browser Header */}
                        <div className={clsx('flex', 'items-center', 'gap-1.5', 'border-b', 'border-border-primary', 'pb-2', 'shrink-0')}>
                          <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-highlight/60')} />
                          <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-yellow-500/60')} />
                          <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-green-500/60')} />
                          <div className={clsx('ml-3', 'bg-bg-primary', 'border', 'border-border-primary/80', 'rounded-sm', 'text-[8px]', 'font-mono', 'text-text-muted', 'px-3', 'py-0.5', 'flex-1', 'max-w-[140px]', 'truncate', 'select-none', 'text-left')}>
                            quantixx.io/analytics
                          </div>
                        </div>
                        {/* Dashboard visual */}
                        <div className={clsx('flex', 'items-stretch', 'gap-2.5', 'my-auto', 'py-1', 'h-full')}>
                          {/* Revenue Stats widget */}
                          <div className={clsx('w-[45%]', 'bg-bg-primary', 'border', 'border-border-primary', 'rounded-sm', 'p-2', 'flex', 'flex-col', 'justify-between', 'shadow-sm')}>
                            <span className={clsx('block', 'text-[8px]', 'font-mono', 'text-text-muted', 'uppercase')}>ARR GROWTH</span>
                            <span className={clsx('block', 'text-sm', 'font-display', 'font-extrabold', 'text-text-primary', 'mt-1')}>₹124.5k</span>
                            <div className={clsx('flex', 'items-center', 'gap-1', 'text-[8px]', 'text-emerald-500', 'font-bold', 'mt-1')}>
                              <TrendingUp size={9} />
                              <span>+32.5%</span>
                            </div>
                          </div>
                          {/* Micro Sparkline Chart */}
                          <div className={clsx('flex-1', 'bg-bg-primary', 'border', 'border-border-primary', 'rounded-sm', 'p-2', 'flex', 'items-end', 'justify-between', 'relative', 'overflow-hidden')}>
                            <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-tr', 'from-accent/5', 'to-transparent', '-z-10')} />
                            {/* Graphic Chart Pillars */}
                            <div className={clsx('w-[18%]', 'bg-border-primary', 'h-[40%]', 'rounded-sm')} />
                            <div className={clsx('w-[18%]', 'bg-border-primary', 'h-[60%]', 'rounded-sm')} />
                            <div className={clsx('w-[18%]', 'bg-accent/40', 'h-[75%]', 'rounded-sm')} />
                            <div className={clsx('w-[18%]', 'bg-accent/60', 'h-[90%]', 'rounded-sm')} />
                            <div className={clsx('w-[18%]', 'bg-accent', 'h-[100%]', 'rounded-sm', 'animate-pulse')} />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visualizer 4: Mobile App Development (Smartphone Mock Shell) */}
                    {svc.id === 'mobile-apps' && (
                      <div className={clsx('mt-5', 'p-3.5', 'bg-bg-secondary/60', 'border', 'border-border-primary', 'rounded-lg', 'flex', 'items-center', 'justify-center', 'h-36')}>
                        {/* Smartphone Shell */}
                        <div className={clsx('w-28', 'h-[120%]', 'border', 'border-border-hover', 'bg-bg-primary', 'rounded-xl', 'p-1.5', 'flex', 'flex-col', 'justify-between', 'relative', 'shadow-lg')}>
                          {/* Speaker bar */}
                          <div className={clsx('w-10', 'h-1', 'bg-border-primary', 'rounded-sm', 'mx-auto', 'mb-1', 'shrink-0')} />
                          
                          {/* Screen interface mockup */}
                          <div className={clsx('flex-1', 'rounded-md', 'bg-bg-secondary/40', 'border', 'border-border-primary', 'p-2', 'flex', 'flex-col', 'justify-between', 'font-mono', 'text-[8px]')}>
                            {/* FaceID visual check */}
                            <div className={clsx('flex', 'flex-col', 'items-center', 'gap-1.5', 'my-auto')}>
                              <motion.div 
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className={clsx('w-8', 'h-8', 'rounded-full', 'bg-emerald-500/10', 'border', 'border-emerald-500/30', 'flex', 'items-center', 'justify-center', 'text-emerald-500')}
                              >
                                <ShieldCheck size={14} />
                              </motion.div>
                              <span className={clsx('text-[7px]', 'text-text-secondary', 'text-center', 'uppercase', 'tracking-wide', 'font-bold')}>FaceID SECURED</span>
                            </div>
                            {/* Local Database Sync */}
                            <div className={clsx('border-t', 'border-border-primary/50', 'pt-1', 'flex', 'justify-between', 'items-center', 'text-[7px]', 'text-text-muted')}>
                              <span>Local cache:</span>
                              <span className={clsx('text-emerald-500', 'font-bold')}>SYNCED</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visualizer 5: Cloud Infrastructure & DevOps (Server Racks Dashboard) */}
                    {svc.id === 'cloud' && (
                      <div className={clsx('mt-5', 'p-3.5', 'bg-bg-secondary/60', 'border', 'border-border-primary', 'rounded-lg', 'flex', 'flex-col', 'justify-between', 'h-36')}>
                        <div className={clsx('flex', 'justify-between', 'items-center', 'text-[9px]', 'font-mono', 'text-text-muted', 'border-b', 'border-border-primary/50', 'pb-1.5', 'shrink-0')}>
                          <span>INFRASTRUCTURE RACKS</span>
                          <span className={clsx('text-emerald-500', 'flex', 'items-center', 'gap-1')}><span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-emerald-500', 'animate-ping')} /> AUTO-SCALE ACTIVE</span>
                        </div>
                        {/* Racks list */}
                        <div className={clsx('flex', 'flex-col', 'gap-1.5', 'my-auto', 'py-1', 'font-mono', 'text-[8px]')}>
                          {[
                            { name: 'NODE-01 / US-EAST', load: '68%', status: 'bg-emerald-500' },
                            { name: 'NODE-02 / US-EAST', load: '42%', status: 'bg-emerald-500' },
                            { name: 'BALANCER / STG', load: '85%', status: 'bg-emerald-500 animate-pulse' }
                          ].map((node, i) => (
                            <div key={i} className={clsx('bg-bg-primary', 'border', 'border-border-primary', 'p-1.5', 'rounded-sm', 'flex', 'items-center', 'justify-between', 'shadow-sm')}>
                              <div className={clsx('flex', 'items-center', 'gap-2')}>
                                <span className={`w-1.5 h-1.5 rounded-full ${node.status}`} />
                                <span className={clsx('text-text-secondary', 'font-bold')}>{node.name}</span>
                              </div>
                              <div className={clsx('flex', 'items-center', 'gap-2')}>
                                <span className={clsx('text-text-muted', 'font-bold')}>LOAD</span>
                                <span className={clsx('text-text-primary', 'font-bold')}>{node.load}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Visualizer 6: UI/UX Design & Brand Consulting (Figma Workspace Mockup) */}
                    {svc.id === 'ui-ux' && (
                      <div className={clsx('mt-5', 'p-3.5', 'bg-bg-secondary/60', 'border', 'border-border-primary', 'rounded-lg', 'flex', 'flex-col', 'justify-between', 'h-36', 'overflow-hidden')}>
                        {/* Figma Header */}
                        <div className={clsx('flex', 'justify-between', 'items-center', 'text-[9px]', 'font-mono', 'text-text-muted', 'border-b', 'border-border-primary/50', 'pb-1.5', 'shrink-0')}>
                          <span>WORKSPACE CANVAS</span>
                          <span className="text-text-muted">SYSTEM v1.2</span>
                        </div>
                        {/* Graphic components */}
                        <div className={clsx('flex', 'items-stretch', 'gap-2.5', 'my-auto', 'py-1.5', 'h-full')}>
                          {/* Color Tiles widget */}
                          <div className={clsx('w-[35%]', 'bg-bg-primary', 'border', 'border-border-primary', 'rounded-sm', 'p-1.5', 'flex', 'flex-col', 'justify-between', 'shadow-sm')}>
                            <span className={clsx('text-[7px]', 'font-mono', 'text-text-muted', 'uppercase')}>Palette</span>
                            <div className={clsx('grid', 'grid-cols-2', 'gap-1.5', 'mt-1')}>
                              <div className={clsx('h-4', 'bg-accent', 'rounded-sm')} />
                              <div className={clsx('h-4', 'bg-highlight', 'rounded-sm')} />
                              <div className={clsx('h-4', 'bg-yellow-500', 'rounded-sm')} />
                              <div className={clsx('h-4', 'bg-emerald-500', 'rounded-sm')} />
                            </div>
                          </div>
                          {/* Layout wireframe wire */}
                          <div className={clsx('flex-1', 'bg-bg-primary', 'border', 'border-border-primary', 'rounded-sm', 'p-2', 'flex', 'flex-col', 'justify-between')}>
                            <span className={clsx('text-[7px]', 'font-mono', 'text-text-muted', 'uppercase')}>Grid Mock</span>
                            <div className={clsx('flex-1', 'border', 'border-dashed', 'border-border-hover/80', 'rounded-sm', 'flex', 'items-center', 'justify-center', 'text-accent/50', 'text-[9px]', 'font-mono', 'mt-1', 'relative', 'overflow-hidden')}>
                              <div className={clsx('absolute', 'inset-0', 'bg-accent/2')} />
                              <span>HeroCard</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Benefits checklist */}
                    <div className={clsx('mt-5', 'space-y-2')}>
                      <span className={clsx('block', 'text-[8px]', 'font-mono', 'text-text-muted', 'uppercase', 'tracking-widest')}>Key Deliverables</span>
                      <div className="space-y-1.5">
                        {svc.benefits.map((benefit, idx) => (
                          <div key={idx} className={clsx('flex', 'gap-2', 'items-start', 'text-xs', 'text-text-secondary', 'leading-relaxed')}>
                            <CheckCircle2 size={13} className={clsx('text-highlight', 'shrink-0', 'mt-0.5')} />
                            <span className={clsx('font-sans', 'font-light')}>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech stack badges & consultation button */}
                  <div className={clsx('mt-6', 'pt-4', 'border-t', 'border-border-primary', 'flex', 'flex-wrap', 'justify-between', 'items-center', 'gap-4')}>
                    <div className={clsx('flex', 'flex-wrap', 'gap-1')}>
                      {svc.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className={clsx('px-2', 'py-0.5', 'bg-bg-secondary', 'border', 'border-border-primary', 'text-text-secondary', 'rounded-sm', 'text-[9px]', 'font-mono', 'font-medium')}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={openModal}
                      className={clsx('inline-flex', 'items-center', 'gap-1', 'text-[11px]', 'font-bold', 'text-accent', 'hover:text-accent-hover', 'transition-colors', 'cursor-pointer', 'select-none')}
                    >
                      <span>Request Details</span>
                      <ArrowRight size={11} className={clsx('group-hover:translate-x-0.5', 'transition-transform')} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. CUSTOMER ONBOARDING PATHWAY (How We Work Stepper) */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-6', 'lg:py-10', 'relative', 'z-10')}>
        <div className={clsx('mb-10', 'text-center', 'space-y-3')}>
          <span className={clsx('inline-flex', 'items-center', 'gap-1.5', 'text-xs', 'uppercase', 'tracking-[0.25em]', 'font-extrabold', 'text-highlight', 'bg-highlight/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'border', 'border-highlight/20', 'mb-6')}>
            Engagement Model
          </span>
          <h2 className={clsx('text-3xl', 'font-display', 'font-extrabold', 'text-text-primary')}>
            How We Build Your Software
          </h2>
          <p className={clsx('text-sm', 'text-text-secondary', 'max-w-xl', 'mx-auto', 'font-light', 'leading-relaxed')}>
            We prioritize transparent communication and rapid delivery. Here is our simple 3-step onboarding workflow.
          </p>
        </div>

        {/* Stepper Timeline */}
        <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-8', 'relative')}>
          
          {/* Timeline background connection line (desktop only) */}
          <div className={clsx('hidden', 'md:block', 'absolute', 'top-[28px]', 'left-[15%]', 'right-[15%]', 'h-[1px]', 'bg-border-primary', '-z-10')} />

          {[
            {
              step: '01',
              title: 'Blueprint Call',
              desc: 'Book a free strategy session. We discuss your system requirements, suggest architectures, and deliver a visual roadmap scope within 48 hours.',
              icon: Settings,
              accentColor: 'text-accent bg-accent/10 border-accent/20'
            },
            {
              step: '02',
              title: 'Weekly Sprint Cycles',
              desc: 'We construct your code modularly, launching weekly updates directly to you. We communicate daily on Slack and track progress transparently in Jira.',
              icon: Activity,
              accentColor: 'text-highlight bg-highlight/10 border-highlight/20'
            },
            {
              step: '03',
              title: 'Complete Handover',
              desc: 'Once builds are certified, we transfer the Git repository, sign over full IP/patent ownership, and assist with configuring your server host environments.',
              icon: Layers,
              accentColor: 'text-accent bg-accent/10 border-accent/20'
            }
          ].map((item, idx) => {
            const StepIcon = item.icon;
            return (
              <div 
                key={idx}
                className={clsx('bg-bg-card', 'border', 'border-border-primary', 'rounded-lg', 'p-6', 'text-left', 'relative', 'overflow-hidden', 'flex', 'flex-col', 'justify-between', 'shadow-md')}
              >
                <div className={clsx('flex', 'justify-between', 'items-center', 'mb-6')}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${item.accentColor}`}>
                    <StepIcon size={18} />
                  </div>
                  <span className={clsx('font-mono', 'text-xs', 'font-bold', 'text-text-muted')}>Step {item.step}</span>
                </div>

                <div className="space-y-2">
                  <h3 className={clsx('text-base', 'font-bold', 'text-text-primary', 'font-display')}>{item.title}</h3>
                  <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'leading-relaxed', 'font-sans', 'font-light')}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. TECHNICAL TRUST STANDARDS SECTION */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-6', 'lg:py-10', 'relative', 'z-10')}>
        <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-10', 'lg:gap-16', 'items-center')}>
          <div className={clsx('order-2', 'lg:order-1', 'relative')}>
            <div className={clsx('aspect-[4/3]', 'rounded-sm', 'overflow-hidden', 'bg-bg-card/40', 'border', 'border-border-primary', 'backdrop-blur-sm', 'relative', 'group')}>
              <div className={clsx('absolute', 'inset-0', 'bg-[url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80)]', 'bg-cover', 'bg-center', 'opacity-40', 'group-hover:opacity-60', 'group-hover:scale-105', 'transition-all', 'duration-1000')} />
              <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-tr', 'from-bg-primary', 'via-transparent', 'to-highlight/20')} />
              
              {/* Floating metrics overlay */}
              <div className={clsx('absolute', 'bottom-6', 'left-6', 'right-6', 'p-4', 'rounded-sm', 'bg-bg-card/80', 'backdrop-blur-xl', 'border', 'border-white/10', 'flex', 'justify-between', 'items-center', 'transform', 'translate-y-2', 'opacity-0', 'group-hover:translate-y-0', 'group-hover:opacity-100', 'transition-all', 'duration-500', 'delay-100')}>
                <div>
                  <div className={clsx('text-[10px]', 'text-text-muted', 'uppercase', 'tracking-wider', 'mb-1')}>Processing Power</div>
                  <div className={clsx('text-lg', 'font-display', 'font-bold', 'text-highlight')}>100k+ Ops/sec</div>
                </div>
                <div className={clsx('w-10', 'h-10', 'rounded-full', 'bg-highlight/20', 'flex', 'items-center', 'justify-center', 'border', 'border-highlight/30')}>
                  <Database size={16} className={clsx('text-highlight', 'animate-pulse')} />
                </div>
              </div>
            </div>
            
            {/* Ambient glow behind image */}
            <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-3/4', 'h-3/4', 'bg-highlight/10', 'rounded-full', 'blur-[100px]', '-z-10')} />
          </div>

          <div className={clsx('order-1', 'lg:order-2', 'space-y-6')}>
            <span className={clsx('inline-flex', 'items-center', 'gap-1.5', 'text-xs', 'uppercase', 'tracking-[0.25em]', 'font-extrabold', 'text-highlight', 'bg-highlight/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'border', 'border-highlight/20', 'mb-6')}>
              Quality Assurance
            </span>
            <h2 className={clsx('text-3xl', 'font-display', 'font-bold', 'text-text-primary', 'tracking-tight')}>
              Enterprise-Ready Security & Audits
            </h2>
            <p className={clsx('text-sm', 'sm:text-base', 'text-text-secondary', 'leading-relaxed', 'font-sans', 'font-light')}>
              We eliminate technical debt and structure codebases under strict enterprise guidelines. Our solutions are built to exceed strict security checklists.
            </p>
            
            <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-6', 'sm:gap-8', 'pt-6', 'border-t', 'border-border-primary/60', 'font-sans')}>
              <div className="space-y-2">
                <div className={clsx('w-8', 'h-8', 'rounded-sm', 'bg-bg-secondary', 'flex', 'items-center', 'justify-center', 'text-accent')}>
                  <Code size={15} />
                </div>
                <span className={clsx('block', 'text-sm', 'font-bold', 'text-text-primary')}>Clean Architecture</span>
                <span className={clsx('block', 'text-xs', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                  Strictly typed systems, clear database schemas, and highly structured component-based codes.
                </span>
              </div>
              <div className="space-y-2">
                <div className={clsx('w-8', 'h-8', 'rounded-sm', 'bg-bg-secondary', 'flex', 'items-center', 'justify-center', 'text-accent')}>
                  <ShieldCheck size={15} />
                </div>
                <span className={clsx('block', 'text-sm', 'font-bold', 'text-text-primary')}>Security Audited</span>
                <span className={clsx('block', 'text-xs', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                  Encryption protocols out of the box, safe VPC networks, and ready for ISO27001 certifications.
                </span>
              </div>
              <div className="space-y-2">
                <div className={clsx('w-8', 'h-8', 'rounded-sm', 'bg-bg-secondary', 'flex', 'items-center', 'justify-center', 'text-highlight')}>
                  <Lock size={15} />
                </div>
                <span className={clsx('block', 'text-sm', 'font-bold', 'text-text-primary')}>100% IP Ownership</span>
                <span className={clsx('block', 'text-xs', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                  Complete ownership handoff, zero licensing ties, and simple configuration handbacks.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className={clsx('py-8', 'lg:py-12', 'relative', 'z-10', 'max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'w-full', 'mb-8', 'lg:mb-12')}>
        <div className={clsx('relative', 'overflow-hidden', 'rounded-sm', 'border', 'border-border-primary', 'bg-bg-card/30', 'backdrop-blur-xl', 'p-8', 'sm:p-12', 'lg:p-16', 'grid', 'grid-cols-1', 'lg:grid-cols-12', 'items-center', 'justify-between', 'gap-10', 'lg:gap-16')}>
          
          <div className={clsx('absolute', 'inset-0', 'pointer-events-none', '-z-10')}>
            <div className={clsx('absolute', 'top-0', 'right-0', 'w-[500px]', 'h-[500px]', 'bg-[radial-gradient(ellipse_at_center,rgba(var(--color-accent),0.15)_0%,transparent_70%)]')} />
            <div className={clsx('absolute', 'bottom-0', 'left-0', 'w-[300px]', 'h-[300px]', 'bg-[radial-gradient(ellipse_at_center,rgba(var(--color-highlight),0.1)_0%,transparent_70%)]')} />
          </div>

          <div className={clsx('lg:col-span-6', 'w-full', 'max-w-2xl', 'lg:max-w-none')}>
            <div className={clsx('mb-0', 'flex', 'flex-col', 'h-full', 'justify-center')}>
              <span className={clsx('inline-flex', 'items-center', 'gap-1.5', 'text-xs', 'uppercase', 'tracking-[0.25em]', 'font-extrabold', 'text-accent', 'bg-accent/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'border', 'border-accent/20', 'mb-4', 'w-fit')}>
                <ShieldCheck size={11} className={clsx('text-highlight', 'animate-pulse')} /> 
                SECURE & CONFIDENTIAL
              </span>

              <h3 className={clsx('text-3xl', 'sm:text-4xl', 'xl:text-5xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight', 'leading-tight', 'mb-4', 'max-w-lg')}>
                Have a Custom Project <br className={clsx('hidden', 'sm:inline')} /> in Mind?
              </h3>
              
              <p className={clsx('text-sm', 'sm:text-base', 'text-text-secondary', 'max-w-xl', 'leading-relaxed', 'font-sans', 'font-light', 'mb-8')}>
                Connect with our systems architects. We will analyze your operational bottlenecks, suggest integration roadmaps, and provide a comprehensive technical blueprint at zero initial cost.
              </p>

              {/* Trust points indicators */}
              <div className={clsx('flex', 'flex-wrap', 'gap-x-6', 'gap-y-3', 'pt-6', 'pb-8', 'border-t', 'border-border-primary/50', 'text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-secondary')}>
                <div className={clsx('flex', 'items-center', 'gap-2')}>
                  <CheckCircle2 size={16} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>Mutual NDAs Signed First</span>
                </div>
                <div className={clsx('flex', 'items-center', 'gap-2')}>
                  <CheckCircle2 size={16} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>SLA: &lt; 4 Hour Response</span>
                </div>
                <div className={clsx('flex', 'items-center', 'gap-2')}>
                  <CheckCircle2 size={16} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>Zero Initial Auditing Cost</span>
                </div>
              </div>

              <div>
                <button
                  onClick={openModal}
                  className={clsx('px-8', 'py-4', 'rounded-md', 'text-sm', 'sm:text-base', 'font-bold', 'bg-accent', 'hover:bg-accent-hover', 'text-white', 'shadow-[0_0_20px_var(--accent-glow)]', 'transition-all', 'cursor-pointer', 'flex', 'items-center', 'gap-2', 'hover:-translate-y-0.5', 'transform', 'group', 'w-fit')}
                >
                  <span>Book Solution Blueprint Call</span>
                  <ArrowRight size={16} className={clsx('group-hover:translate-x-1', 'transition-transform')} />
                </button>
              </div>
            </div>

            </div>

            {/* Right Column: Interactive Scope Blueprint Estimator */}
            <div className={clsx('lg:col-span-6', 'w-full')}>
              <div className={clsx('bg-bg-secondary/40', 'border', 'border-white/[0.05]', 'rounded-xl', 'p-6', 'sm:p-8', 'shadow-inner', 'relative', 'overflow-hidden', 'backdrop-blur-md')}>
                <div className={clsx('flex', 'flex-col', 'xl:flex-row', 'justify-between', 'items-start', 'xl:items-center', 'mb-6', 'gap-3')}>
                  <span className={clsx('text-[10px]', 'sm:text-xs', 'font-sans', 'font-bold', 'text-text-muted', 'uppercase', 'tracking-wider')}>Interactive Scope Blueprint</span>
                  {/*  */}
                </div>
                
                {/* Selector tabs */}
                <div className={clsx('grid', 'grid-cols-3', 'gap-1.5', 'sm:gap-2', 'mb-6')}>
                  {[
                    { id: 'engineering', label: 'Software' },
                    { id: 'ai', label: 'AI/Automation' },
                    { id: 'cloud', label: 'Cloud Systems' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedScope(tab.id)}
                      className={`px-1 sm:px-2 xl:px-3 py-2 sm:py-2.5 rounded-md text-[10px] sm:text-xs xl:text-sm font-sans font-semibold border transition-all cursor-pointer flex items-center justify-center text-center leading-tight min-h-[44px] ${
                        selectedScope === tab.id
                          ? 'border-accent bg-accent/10 text-text-primary shadow-[0_0_12px_var(--accent-glow)]'
                          : 'border-border-primary bg-bg-primary/40 text-text-secondary hover:text-text-primary hover:border-border-hover'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Dynamic Blueprint display based on selectedScope */}
                <div className={clsx('bg-bg-primary/80', 'border', 'border-border-primary/80', 'rounded-lg', 'p-5', 'sm:p-6', 'text-left', 'space-y-4', 'shadow-sm')}>
                  {selectedScope === 'engineering' && (
                    <>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'border-b', 'border-border-primary/40', 'pb-3', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Target System:</span>
                        <span className={clsx('text-sm', 'sm:text-base', 'font-display', 'font-bold', 'text-text-primary')}>Custom ERP & API Gateway</span>
                      </div>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'border-b', 'border-border-primary/40', 'pb-3', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Tech Stack:</span>
                        <span className={clsx('text-sm', 'font-mono', 'font-semibold', 'text-accent')}>Node.js / Go / PostgreSQL</span>
                      </div>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'border-b', 'border-border-primary/40', 'pb-3', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Security Tier:</span>
                        <span className={clsx('text-sm', 'sm:text-base', 'font-sans', 'font-bold', 'text-highlight')}>SOC2 & ISO27001 Ready</span>
                      </div>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Estimated Delivery:</span>
                        <span className={clsx('text-sm', 'sm:text-base', 'font-sans', 'font-bold', 'text-text-primary')}>4-6 Weeks</span>
                      </div>
                    </>
                  )}
                  {selectedScope === 'ai' && (
                    <>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'border-b', 'border-border-primary/40', 'pb-3', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Target System:</span>
                        <span className={clsx('text-sm', 'sm:text-base', 'font-display', 'font-bold', 'text-text-primary')}>AI Agent Workflow</span>
                      </div>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'border-b', 'border-border-primary/40', 'pb-3', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Tech Stack:</span>
                        <span className={clsx('text-sm', 'font-mono', 'font-semibold', 'text-accent')}>LangChain / Python / FastAPI</span>
                      </div>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'border-b', 'border-border-primary/40', 'pb-3', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Privacy Tier:</span>
                        <span className={clsx('text-sm', 'sm:text-base', 'font-sans', 'font-bold', 'text-highlight')}>Isolated VPC Vector Store</span>
                      </div>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Estimated Delivery:</span>
                        <span className={clsx('text-sm', 'sm:text-base', 'font-sans', 'font-bold', 'text-text-primary')}>3-5 Weeks</span>
                      </div>
                    </>
                  )}
                  {selectedScope === 'cloud' && (
                    <>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'border-b', 'border-border-primary/40', 'pb-3', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Target System:</span>
                        <span className={clsx('text-sm', 'sm:text-base', 'font-display', 'font-bold', 'text-text-primary')}>Auto-scaling Server Nodes</span>
                      </div>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'border-b', 'border-border-primary/40', 'pb-3', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Tech Stack:</span>
                        <span className={clsx('text-sm', 'font-mono', 'font-semibold', 'text-accent')}>AWS / Kubernetes / Terraform</span>
                      </div>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'border-b', 'border-border-primary/40', 'pb-3', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Uptime Target:</span>
                        <span className={clsx('text-sm', 'sm:text-base', 'font-sans', 'font-bold', 'text-highlight')}>99.99% Availability</span>
                      </div>
                      <div className={clsx('flex', 'flex-col', 'justify-center', 'gap-1.5')}>
                        <span className={clsx('text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-text-muted')}>Estimated Delivery:</span>
                        <span className={clsx('text-sm', 'sm:text-base', 'font-sans', 'font-bold', 'text-text-primary')}>2-4 Weeks</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Subtle interactive simulator prompt feedback */}
                <div className={clsx('mt-5', 'flex', 'justify-between', 'items-center', 'text-xs', 'font-sans', 'font-medium', 'text-text-muted', 'bg-bg-card/40', 'border', 'border-border-primary', 'p-3', 'rounded-lg')}>
                  <span>Ready to lock this blueprint?</span>
                  <span 
                    onClick={openModal}
                    className={clsx('text-accent', 'hover:text-accent-hover', 'font-bold', 'hover:underline', 'cursor-pointer', 'flex', 'items-center', 'gap-1', 'transition-colors')}
                  >
                    Initialize <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </div>
      </section>

    </div>
  );
}
