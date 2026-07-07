import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Database, Smartphone, Palette, Zap, TrendingUp, CheckCircle2, ChevronRight, Quote, Bot, Cloud, CheckCircle, Tag, LineChart } from 'lucide-react';
import { Counter } from '../components/animations/Counter';
import { VelocityScroll } from '../components/animations/VelocityScroll';
import { useModal } from '../context/ModalContext';
import { useTheme } from '../context/ThemeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow, EffectCards } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import clsx from 'clsx';

const PremiumHoverCard = ({ children, className, ...props }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      {...props}
      className={clsx(
        "group/card relative rounded-2xl bg-bg-primary border border-border-primary transition-all duration-300 overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className={clsx('pointer-events-none', 'absolute', '-inset-px', 'rounded-2xl', 'opacity-0', 'transition', 'duration-500', 'group-hover/card:opacity-100', 'z-0')}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className={clsx('relative', 'z-10', 'p-5', 'sm:p-8', 'flex', 'flex-col', 'items-start', 'text-left', 'h-full')}>
        {children}
      </div>
    </motion.div>
  );
};

export default function Home() {
  const { openModal } = useModal();
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(0);
  const [activeEcosystemTab, setActiveEcosystemTab] = useState('all');
  const [ctaCategory, setCtaCategory] = useState('saas');
  const [mobileCardIndex, setMobileCardIndex] = useState(0);
  const servicesSwiperRef = useRef(null);

  // Auto-cycle the mobile dynamic island
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileCardIndex(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    { value: '99.99%', label: 'Platform Reliability', desc: 'Enterprise-grade uptime' },
    { value: '80%', label: 'Time Saved', desc: 'Automating repetitive workflows' },
    { value: '+35%', label: 'User Engagement', desc: 'Beautiful, intuitive experiences' },
    { value: '₹12M+', label: 'Client Revenue', desc: 'Measurable business growth' },
  ];

  const services = [
    {
      title: 'Custom Software Development',
      desc: 'Tailored web and desktop applications built to solve your unique business challenges and scale seamlessly.',
      icon: Cpu,
      techs: ['Node.js', 'PostgreSQL', 'PrismaORM', 'Mongodb', 'Nestjs'],
      bullets: ['Reliable data processing', 'Secure and fast backend APIs', 'Built for long-term growth'],
      visualType: 'software',
      outcome: '₹150k Annual Costs Saved'
    },
    {
      title: 'UI/UX Design & Strategy',
      desc: 'Stunning, intuitive interfaces designed to delight your customers and make your brand stand out.',
      icon: Palette,
      techs: ['Figma', 'Framer Motion', 'TailwindCSS', 'WebGL', 'SVG'],
      bullets: ['High-fidelity interactive prototypes', 'Cohesive design systems', 'Engaging animations'],
      visualType: 'design',
      outcome: '+35% Customer Retention'
    },
    {
      title: 'Modern Web Applications',
      desc: 'Lightning-fast, responsive web apps and SaaS platforms that feel exactly like native software.',
      icon: Globe,
      techs: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind'],
      bullets: ['Instant page load speeds', 'Secure user portals', 'Live data dashboards'],
      visualType: 'web',
      outcome: '₹12M+ Revenue Generated'
    },
    {
      title: 'AI & Business Automation',
      desc: 'Integrate smart AI tools to handle tedious tasks, freeing your team to focus on what matters most.',
      icon: Zap,
      techs: ['OpenAI API', 'Python', 'FastAPI', 'PyTorch'],
      bullets: ['Custom AI chatbots and assistants', 'Automated document processing', 'Smart data search'],
      visualType: 'ai',
      outcome: '80% Manual Work Eliminated'
    },
    {
      title: 'Cloud & Infrastructure',
      desc: 'Secure, reliable cloud hosting that automatically scales with your business traffic without breaking a sweat.',
      icon: Database,
      techs: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      bullets: ['Zero-downtime deployments', 'Cost-optimized scaling', 'Bank-grade security networks'],
      visualType: 'cloud',
      outcome: '99.99% Guaranteed Uptime'
    },
    {
      title: 'Mobile App Development',
      desc: 'Beautiful iOS & Android applications that deliver a flawless experience on every device.',
      icon: Smartphone,
      techs: ['React Native', 'Flutter', 'Swift', 'SQLite'],
      bullets: ['App Store & Google Play launch', 'Offline mode support', 'Smooth native performance'],
      visualType: 'mobile',
      outcome: 'Delivered 6 Weeks Early'
    },
  ];

  const ecosystem = [
    {
      name: 'React',
      category: 'Frontend Library',
      color: 'rgba(97, 218, 251, 0.12)',
      glowColor: '#61DAFB',
      role: 'Interactive Interfaces',
      status: 'Beautiful Experiences',
      slug: 'react',
      group: 'frontend'
    },
    {
      name: 'Next.js',
      category: 'Server Rendering',
      color: 'rgba(255, 255, 255, 0.08)',
      glowColor: '#FFFFFF',
      role: 'Fast Loading Websites',
      status: 'SEO Optimized',
      slug: 'nextdotjs',
      group: 'frontend'
    },
    {
      name: 'TypeScript',
      category: 'Type Safety',
      color: 'rgba(49, 120, 198, 0.15)',
      glowColor: '#3178C6',
      role: 'Reliable Codebases',
      status: 'Zero Crashes',
      slug: 'typescript',
      group: 'frontend'
    },
    {
      name: 'TailwindCSS',
      category: 'Fluid Styling',
      color: 'rgba(56, 189, 248, 0.15)',
      glowColor: '#38BDF8',
      role: 'Custom Designs',
      status: 'Pixel Perfect',
      slug: 'tailwindcss',
      group: 'frontend'
    },
    {
      name: 'Node.js',
      category: 'Backend Engine',
      color: 'rgba(51, 153, 51, 0.12)',
      glowColor: '#339933',
      role: 'Fast Data Processing',
      status: 'Handles High Traffic',
      slug: 'nodedotjs',
      group: 'backend'
    },
    {
      name: 'Python',
      category: 'AI & Data Processing',
      color: 'rgba(55, 118, 171, 0.15)',
      glowColor: '#3776AB',
      role: 'Smart Automation',
      status: 'AI Integration',
      slug: 'python',
      group: 'backend'
    },
    {
      name: 'PostgreSQL',
      category: 'Primary Database',
      color: 'rgba(51, 103, 145, 0.15)',
      glowColor: '#4169E1',
      role: 'Secure Data Storage',
      status: 'Always Available',
      slug: 'postgresql',
      group: 'database'
    },
    {
      name: 'AWS',
      category: 'Cloud Host',
      color: 'rgba(255, 153, 0, 0.15)',
      glowColor: '#FF9900',
      role: 'Reliable Hosting',
      status: 'Grows With You',
      slug: 'amazonaws',
      group: 'devops'
    },
    {
      name: 'Docker',
      category: 'Container Dev',
      color: 'rgba(36, 150, 237, 0.15)',
      glowColor: '#2496ED',
      role: 'Consistent Environments',
      status: 'Runs Anywhere',
      slug: 'docker',
      group: 'devops'
    },
    {
      name: 'Kubernetes',
      category: 'Orchestration',
      color: 'rgba(50, 108, 229, 0.15)',
      glowColor: '#326CE5',
      role: 'Automatic Scaling',
      status: 'Zero Downtime',
      slug: 'kubernetes',
      group: 'devops'
    },
    {
      name: 'Terraform',
      category: 'IaC Framework',
      color: 'rgba(132, 79, 186, 0.15)',
      glowColor: '#844FBA',
      role: 'Automated Setup',
      status: 'Error-Free Systems',
      slug: 'terraform',
      group: 'devops'
    },
    {
      name: 'OpenAI API',
      category: 'Intelligent Models',
      color: 'rgba(16, 163, 127, 0.15)',
      glowColor: '#10A37F',
      role: 'Smart Assistants',
      status: 'Custom AI Tools',
      slug: 'openai',
      group: 'backend'
    },
    {
      name: 'MongoDB',
      category: 'NoSQL Database',
      color: 'rgba(71, 162, 72, 0.15)',
      glowColor: '#47A248',
      role: 'Flexible Data',
      status: 'High Speed',
      slug: 'mongodb',
      group: 'database'
    },
    {
      name: 'Express.js',
      category: 'Minimal Backend',
      color: 'rgba(255, 255, 255, 0.08)',
      glowColor: '#FFFFFF',
      role: 'Connecting Services',
      status: 'Reliable APIs',
      slug: 'express',
      group: 'backend'
    },
    {
      name: 'Flutter',
      category: 'Cross-Platform SDK',
      color: 'rgba(2, 86, 155, 0.15)',
      glowColor: '#02569B',
      role: 'Cross-Platform Mobile',
      status: 'Beautiful Apps',
      slug: 'flutter',
      group: 'mobile'
    },
    {
      name: 'React Native',
      category: 'Hybrid Mobile',
      color: 'rgba(97, 218, 251, 0.12)',
      glowColor: '#61DAFB',
      role: 'Mobile Experiences',
      status: 'Feels Native',
      slug: 'react',
      group: 'mobile'
    },
  ];

  const testimonials = [
    {
      quote: <span>Quantixx Solutions completely revamped our logistics portal. They <span className={clsx('text-highlight', 'font-bold')}>automated 80% of our manual tracking workflows</span>, which directly saved us over <span className={clsx('text-accent', 'font-bold')}>₹150k in operational overhead</span> in just the first six months.</span>,
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
      quote: <span>The engineering team at Quantixx has a level of <span className={clsx('text-highlight', 'font-bold')}>craftsmanship that is rare to find</span>. Their work on our custom SaaS platform has received praise from our major enterprise clients for <span className={clsx('text-accent', 'font-bold')}>speed and visual excellence</span>.</span>,
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
      quote: <span>From day one, their communication was completely transparent and their technical architecture plan was highly solid. They delivered our core mobile app <span className={clsx('text-highlight', 'font-bold')}>six weeks ahead of schedule</span>.</span>,
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
      quote: <span>Architecting high-frequency trading dashboards requires zero-latency rendering. Quantixx achieved this using React and Rust, pushing our application performance to <span className={clsx('text-highlight', 'font-bold')}>sub-10ms response times</span>.</span>,
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
      quote: <span>Quantixx migrated our legacy design system to a modern utility-based framework. The transition was seamless, and developer velocity <span className={clsx('text-highlight', 'font-bold')}>improved by 40%</span>.</span>,
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
    <div className={clsx('relative', 'overflow-hidden', 'bg-bg-primary', 'text-text-primary', 'theme-transition', 'bg-grid-tech')}>

      {/* HERO SECTION - Split-screen Landing Fold */}
      <section className={clsx('relative', 'w-full', 'min-h-screen', 'flex', 'items-center', 'pt-24', 'pb-16', 'sm:pt-28', 'sm:pb-20', 'overflow-hidden')}>

        {/* Subtle Dot Grid Overlay */}
        <div
          className={clsx('absolute', 'inset-0', 'bg-[radial-gradient(var(--hero-dot-color)_1.5px,transparent_1.5px)]', '[background-size:40px_40px]', 'pointer-events-none', '-z-20', 'opacity-30', '[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]')}
          style={{ transform: `translate3d(${-mousePos.x * 0.15}px, ${-mousePos.y * 0.15}px, 0)` }}
        />

        {/* Backdrop Glows */}
        <div
          className={clsx('absolute', 'top-[20%]', 'left-[-10%]', 'w-[600px]', 'h-[600px]', 'bg-gradient-to-tr', 'from-accent/10', 'to-highlight/5', 'rounded-full', 'blur-[140px]', 'pointer-events-none', '-z-10', 'animate-pulse-slow')}
          style={{ transform: `translate3d(${-mousePos.x * 0.1}px, ${-mousePos.y * 0.1}px, 0)` }}
        />
        <div className={clsx('absolute', 'bottom-[10%]', 'right-[-10%]', 'w-[700px]', 'h-[700px]', 'bg-gradient-to-br', 'from-highlight/10', 'to-accent/5', 'rounded-full', 'blur-[150px]', 'pointer-events-none', '-z-10')} />

        <div className={clsx('w-full', 'max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'relative', 'z-10')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-8', 'lg:gap-16', 'items-center')}>

            {/* LEFT COLUMN: BRAND MESSAGING & PROPOSITIONS */}
            <div className={clsx('col-span-12', 'lg:col-span-7', 'flex', 'flex-col', 'items-start', 'text-left', 'relative', 'z-10')}>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx('inline-flex', 'items-center', 'gap-2', 'px-3.5', 'py-1.5', 'rounded-sm', 'border', 'border-border-primary', 'bg-bg-secondary/60', 'backdrop-blur-md', 'mb-3')}
              >
                <span className={clsx('flex', 'h-2.5', 'w-2.5', 'rounded-full', 'bg-emerald-500', 'relative')}>
                  <span className={clsx('animate-ping', 'absolute', 'inline-flex', 'h-full', 'w-full', 'rounded-full', 'bg-emerald-400', 'opacity-75')}></span>
                  <span className={clsx('relative', 'inline-flex', 'rounded-full', 'h-2.5', 'w-2.5', 'bg-emerald-500')}></span>
                </span>
                <span className={clsx('text-[10px]', 'sm:text-xs', 'font-semibold', 'text-text-secondary', 'uppercase', 'tracking-wider', 'font-mono')}>
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
                className={clsx('text-4xl', 'sm:text-5xl', 'lg:text-6xl', 'xl:text-[4.25rem]', 'font-display', 'font-extrabold', 'tracking-tight', 'leading-[1.12]', 'text-text-primary', 'text-balance', 'mb-4.5')}
              >
                {["Building"].map((word, wIdx) => (
                  <span key={`b-w-${wIdx}`} className={clsx('inline-block', 'whitespace-nowrap', 'mr-[0.25em]', 'mb-2')}>
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
                <span className={clsx('accent-text-gradient', 'text-glow', 'inline')}>
                  {["Beautiful", "Software"].map((word, wIdx) => (
                    <span key={`dp-w-${wIdx}`} className={clsx('inline-block', 'whitespace-nowrap', 'mr-[0.25em]', 'mb-2')}>
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
                {["That", "Grows", "Your", "Business"].map((word, wIdx) => (
                  <span key={`sb-w-${wIdx}`} className={clsx('inline-block', 'whitespace-nowrap', 'mr-[0.25em]', 'mb-2')}>
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
                className={clsx('text-base', 'sm:text-lg', 'text-text-secondary', 'leading-relaxed', 'max-w-2xl', 'font-sans', 'font-light', 'mb-6')}
              >
                {"We partner with ambitious brands to design, build, and launch reliable web applications, mobile experiences, and automated tools that solve real problems.".split(" ").map((word, i) => (
                  <span key={`w-${i}`} className={clsx('inline-block', 'mr-1')}>
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
                className={clsx('flex', 'flex-col', 'sm:flex-row', 'gap-3', 'sm:gap-4', 'w-full', 'sm:w-auto', 'mb-6', 'sm:mb-8', 'mt-2')}
              >
                <button
                  onClick={openModal}
                  className={clsx('w-full', 'sm:w-auto', 'px-6', 'py-3.5', 'sm:px-8', 'sm:py-4', 'rounded-full', 'text-[13px]', 'sm:text-sm', 'font-bold', 'bg-accent/90', 'backdrop-blur-xl', 'border', 'border-white/20', 'text-white', 'shadow-[0_8px_32px_var(--accent-glow)]', 'hover:shadow-[0_8px_40px_var(--accent)]', 'hover:bg-accent', 'hover:scale-[1.02]', 'active:scale-[0.98]', 'transition-all', 'cursor-pointer', 'flex', 'items-center', 'justify-center', 'gap-2', 'group')}
                >
                  Start Project
                  <ArrowRight size={16} className={clsx('group-hover:translate-x-1', 'transition-transform')} />
                </button>

                <button
                  onClick={openModal}
                  className={clsx('w-full', 'sm:w-auto', 'px-6', 'py-3.5', 'sm:px-8', 'sm:py-4', 'rounded-full', 'text-[13px]', 'sm:text-sm', 'font-bold', 'bg-white/5', 'backdrop-blur-xl', 'border', 'border-white/10', 'hover:border-white/20', 'hover:bg-white/10', 'text-text-primary', 'shadow-[0_8px_32px_rgba(0,0,0,0.1)]', 'hover:scale-[1.02]', 'active:scale-[0.98]', 'transition-all', 'cursor-pointer', 'flex', 'items-center', 'justify-center')}
                >
                  Book Consultation
                </button>
              </motion.div>

              {/* Capabilities Pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ delay: 0.4 }}
                className={clsx('flex', 'flex-wrap', 'gap-2', 'mb-6')}
              >
                {["Web Engineering", "Mobile Platforms", "AI Integration", "Cloud Ops", "SaaS Infrastructure", "UI/UX Systems"].map((item, i) => (
                  <span
                    key={i}
                    className={clsx('flex-1', 'text-center', 'px-3.5', 'py-1.5', 'rounded-sm', 'text-xs', 'font-medium', 'bg-bg-secondary/40', 'border', 'border-border-primary', 'text-text-secondary', 'select-none')}
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
                className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-x-4', 'sm:gap-x-8', 'gap-y-3', 'pt-6', 'border-t', 'border-border-primary', 'w-full')}
              >
                {[
                  "Enterprise Security",
                  "Agile & Fast Delivery",
                  "Transparent Deliverables",
                  "Dedicated Core Architects"
                ].map((item, i) => (
                  <div key={i} className={clsx('flex', 'items-center', 'gap-2.5', 'text-xs', 'sm:text-sm', 'text-text-secondary')}>
                    <CheckCircle size={16} className={clsx('text-highlight', 'shrink-0')} />
                    <span className={clsx('font-sans', 'font-medium')}>{item}</span>
                  </div>
                ))}
              </motion.div>

            </div>

            {/* RIGHT COLUMN: INTERACTIVE DASHBOARD & FLOATING ACTIONS */}
            <div className={clsx('col-span-12', 'lg:col-span-5', 'relative', 'mt-8', 'lg:mt-0', 'flex', 'flex-col', 'justify-center', 'items-center')}>

              {/* Rotating perspective glow backplane */}
              <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-tr', 'from-accent/15', 'to-highlight/15', 'rounded-sm-[32px]', 'blur-3xl', '-z-10')} />

              {/* Mobile "Dynamic Island" Tech Cycler (Unique to mobile) */}
              <div className={clsx('sm:hidden', 'w-11/12', 'max-w-[280px]', 'mx-auto', 'mb-6', 'z-30', 'relative', 'shadow-2xl')}>
                <AnimatePresence mode="wait">
                  {[
                    { title: "AI Automation", sub: "Workflow Opt.", icon: Bot, colorClass: "text-accent", bgClass: "bg-accent/10 border-accent/20" },
                    { title: "Cloud Infrastructure", sub: "AWS & DevOps", icon: Cloud, colorClass: "text-highlight", bgClass: "bg-highlight/10 border-highlight/20" },
                    { title: "Mobile Platforms", sub: "iOS & Android", icon: Smartphone, colorClass: "text-yellow-500", bgClass: "bg-yellow-500/10 border-yellow-500/20" },
                    { title: "Web Architecture", sub: "React & Next.js", icon: Globe, colorClass: "text-green-500", bgClass: "bg-green-500/10 border-green-500/20" }
                  ].map((card, idx) => {
                    if (idx !== mobileCardIndex) return null;
                    const Icon = card.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={clsx('bg-bg-card/90', 'backdrop-blur-2xl', 'border', 'border-white/10', 'p-2.5', 'rounded-[20px]', 'flex', 'items-center', 'gap-3', 'w-full')}
                      >
                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${card.bgClass} ${card.colorClass}`}>
                          <Icon size={18} />
                        </div>
                        <div className={clsx('flex-1', 'flex', 'flex-col', 'justify-center')}>
                          <div className={clsx('text-[13px]', 'font-black', 'text-text-primary', 'leading-tight')}>{card.title}</div>
                          <div className={clsx('text-[10px]', 'text-text-muted', 'font-mono', 'tracking-wider')}>{card.sub}</div>
                        </div>
                        <div className="pr-3">
                          <span className={`flex h-2.5 w-2.5 relative`}>
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${card.bgClass.split(' ')[0].replace('/10', '')}`}></span>
                            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${card.bgClass.split(' ')[0].replace('/10', '')}`}></span>
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Main Interactive Live Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={clsx('w-full', 'bg-bg-card/60', 'backdrop-blur-xl', 'rounded-[24px]', 'p-5', 'sm:p-8', 'shadow-[0_20px_50px_rgba(0,0,0,0.15)]', 'relative', 'border', 'border-white/10', 'overflow-hidden')}
              >
                {/* Subtle Inner Glow */}
                <div className={clsx('absolute', 'top-0', 'left-1/2', '-translate-x-1/2', 'w-[80%]', 'h-1', 'bg-gradient-to-r', 'from-transparent', 'via-accent/50', 'to-transparent', 'blur-sm')} />

                {/* Mockup Header tab */}
                <div className={clsx('flex', 'flex-row', 'justify-between', 'items-center', 'mb-8', 'pb-5', 'border-b', 'border-white/[0.05]')}>
                  <div className={clsx('flex', 'items-center', 'gap-3')}>
                    {/* Traffic Light Dots */}
                    <div className={clsx('flex', 'gap-2')}>
                      <span className={clsx('w-3', 'h-3', 'rounded-full', 'bg-red-400', 'shadow-[0_0_8px_rgba(248,113,113,0.5)]')} />
                      <span className={clsx('w-3', 'h-3', 'rounded-full', 'bg-amber-400', 'shadow-[0_0_8px_rgba(251,191,36,0.5)]')} />
                      <span className={clsx('w-3', 'h-3', 'rounded-full', 'bg-emerald-400', 'shadow-[0_0_8px_rgba(52,211,153,0.5)]')} />
                    </div>
                    <span className={clsx('hidden', 'sm:inline-block', 'text-[11px]', 'font-mono', 'text-text-muted', 'uppercase', 'tracking-wider', 'ml-2')}>
                      Quantixx // active_flow
                    </span>
                  </div>
                  <div className={clsx('inline-flex', 'items-center', 'gap-2', 'px-3', 'py-1', 'rounded-full', 'bg-emerald-500/10', 'text-emerald-500', 'border', 'border-emerald-500/20', 'text-[10px]', 'font-mono', 'font-black', 'tracking-widest')}>
                    <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-emerald-500', 'animate-pulse')} />
                    +32.5% GROWTH
                  </div>
                </div>

                <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'sm:justify-between', 'items-start', 'sm:items-baseline', 'gap-1', 'sm:gap-0', 'mb-2')}>
                  <span className={clsx('text-xs', 'text-text-secondary', 'font-mono')}>System API Success Rate</span>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={clsx('text-3xl', 'sm:text-4xl', 'font-bold', 'font-display', 'text-text-primary', 'tracking-tight')}
                  >
                    <Counter value="99.98%" duration={1.5} delay={0.4} />
                  </motion.div>
                </div>

                {/* SVG Live Sparkline Chart */}
                <div className={clsx('h-48', 'w-full', 'bg-gradient-to-b', 'from-bg-secondary/10', 'to-bg-secondary/40', 'rounded-[16px]', 'border', 'border-white/5', 'relative', 'overflow-hidden', 'flex', 'items-end', 'p-2', 'mt-4', 'shadow-inner')}>

                  {/* Chart Grid Lines */}
                  <div className={clsx('absolute', 'inset-0', 'flex', 'flex-col', 'justify-between', 'py-6', 'opacity-20', 'pointer-events-none', 'px-2')}>
                    <div className={clsx('border-t', 'border-white/20', 'w-full', 'border-dashed')} />
                    <div className={clsx('border-t', 'border-white/20', 'w-full', 'border-dashed')} />
                    <div className={clsx('border-t', 'border-white/20', 'w-full', 'border-dashed')} />
                  </div>

                  <svg className={clsx('w-full', 'h-[85%]', 'fill-none')} viewBox="0 0 100 30" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="chart-line" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="var(--highlight)" />
                        <stop offset="100%" stopColor="var(--accent)" />
                      </linearGradient>
                    </defs>
                    {/* Glowing Area Fill */}
                    <motion.path
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ margin: "-50px" }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                      d="M 0 30 Q 15 15 25 22 T 50 8 T 75 18 T 100 4 L 100 30 L 0 30 Z"
                      fill="url(#chart-area)"
                      stroke="none"
                    />
                    {/* Vector Curve */}
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ margin: "-50px" }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
                      d="M 0 30 Q 15 15 25 22 T 50 8 T 75 18 T 100 4"
                      stroke="url(#chart-line)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="drop-shadow-[0_4px_8px_rgba(124,58,237,0.5)]"
                    />
                  </svg>

                  {/* Pulsing tracer dot at curve end */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 1.5 }}
                    className={clsx('absolute', 'top-[22%]', 'right-[4%]', 'flex', 'h-4', 'w-4', '-translate-x-1/2', '-translate-y-1/2')}
                  >
                    <span className={clsx('animate-ping', 'absolute', 'inline-flex', 'h-full', 'w-full', 'rounded-full', 'bg-accent', 'opacity-75')}></span>
                    <span className={clsx('relative', 'inline-flex', 'rounded-full', 'h-4', 'w-4', 'bg-accent', 'shadow-[0_0_12px_var(--accent)]', 'border-2', 'border-white')}></span>
                  </motion.div>
                </div>

                {/* Bottom Core Stats Row */}
                <div className={clsx('grid', 'grid-cols-3', 'gap-3', 'sm:gap-4', 'mt-6')}>
                  {[
                    { label: "Projects", value: "100+", color: "bg-blue-500" },
                    { label: "Clients", value: "50+", color: "bg-purple-500" },
                    { label: "Success", value: "99%", color: "bg-emerald-500" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.4 + (i * 0.15) }}
                      className={clsx('rounded-[16px]', 'bg-gradient-to-br', 'from-bg-secondary/40', 'to-bg-secondary/10', 'border', 'border-white/10', 'p-3', 'sm:p-4', 'text-center', 'shadow-lg', 'relative', 'overflow-hidden', 'group', 'hover:-translate-y-1', 'transition-transform', 'duration-300', 'cursor-pointer')}
                    >
                      <div className={`absolute -top-6 -right-6 w-12 h-12 ${stat.color} rounded-full blur-[20px] opacity-20 group-hover:opacity-60 transition-opacity duration-500`} />
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.6 + (i * 0.15), type: "spring", stiffness: 200 }}
                        className={clsx('text-xl', 'sm:text-2xl', 'lg:text-3xl', 'font-black', 'font-display', 'text-text-primary', 'tracking-tight')}
                      >
                        <Counter value={stat.value} duration={1.5} delay={0.6 + (i * 0.15)} />
                      </motion.div>
                      <div className={clsx('text-[10px]', 'sm:text-xs', 'text-text-secondary', 'uppercase', 'tracking-widest', 'font-mono', 'mt-1', 'font-bold')}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>

              {/* Floating Technology Cards (Desktop Only) */}

              {/* Floater 1: AI Automation */}
              <div
                className={clsx('absolute', '-left-10', 'top-12', 'pointer-events-none', 'transition-transform', 'duration-300', 'ease-out', 'hidden', 'sm:block', 'z-20')}
                style={{ transform: `translate3d(${mousePos.x * 1.3}px, ${mousePos.y * 1.3}px, 0)` }}
              >
                <motion.div
                  className={clsx('bg-bg-card', 'border', 'border-border-primary', 'p-3.5', 'rounded-sm', 'shadow-xl', 'flex', 'items-center', 'gap-3', 'select-none')}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className={clsx('w-9', 'h-9', 'rounded-sm', 'bg-accent/10', 'border', 'border-accent/20', 'flex', 'items-center', 'justify-center', 'text-accent')}>
                    <Bot size={18} />
                  </div>
                  <div>
                    <div className={clsx('text-xs', 'font-bold', 'text-text-primary')}>AI Automation</div>
                    <div className={clsx('text-[9px]', 'text-text-muted', 'font-mono')}>Workflow Opt.</div>
                  </div>
                </motion.div>
              </div>

              {/* Floater 2: Cloud Infrastructure */}
              <div
                className={clsx('absolute', '-right-8', 'top-[32%]', 'pointer-events-none', 'transition-transform', 'duration-300', 'ease-out', 'hidden', 'sm:block', 'z-20')}
                style={{ transform: `translate3d(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px, 0)` }}
              >
                <motion.div
                  className={clsx('bg-bg-card', 'border', 'border-border-primary', 'p-3.5', 'rounded-sm', 'shadow-xl', 'flex', 'items-center', 'gap-3', 'select-none')}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className={clsx('w-9', 'h-9', 'rounded-sm', 'bg-highlight/10', 'border', 'border-highlight/20', 'flex', 'items-center', 'justify-center', 'text-highlight')}>
                    <Cloud size={18} />
                  </div>
                  <div>
                    <div className={clsx('text-xs', 'font-bold', 'text-text-primary')}>Cloud Infrastructure</div>
                    <div className={clsx('text-[9px]', 'text-text-muted', 'font-mono')}>AWS & DevOps</div>
                  </div>
                </motion.div>
              </div>

              {/* Floater 3: Mobile Architecture */}
              <div
                className={clsx('absolute', 'bottom-[-16px]', 'left-[5%]', 'pointer-events-none', 'transition-transform', 'duration-300', 'ease-out', 'hidden', 'sm:block', 'z-20')}
                style={{ transform: `translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 0)` }}
              >
                <motion.div
                  className={clsx('bg-bg-card', 'border', 'border-border-primary', 'p-3.5', 'rounded-sm', 'shadow-xl', 'flex', 'items-center', 'gap-3', 'select-none')}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className={clsx('w-9', 'h-9', 'rounded-sm', 'bg-yellow-500/10', 'border', 'border-yellow-500/20', 'flex', 'items-center', 'justify-center', 'text-yellow-500')}>
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <div className={clsx('text-xs', 'font-bold', 'text-text-primary')}>Mobile Platforms</div>
                    <div className={clsx('text-[9px]', 'text-text-muted', 'font-mono')}>iOS & Android</div>
                  </div>
                </motion.div>
              </div>

              {/* Floater 4: Web Architecture */}
              <div
                className={clsx('absolute', 'bottom-12', '-right-8', 'pointer-events-none', 'transition-transform', 'duration-300', 'ease-out', 'hidden', 'sm:block', 'z-20')}
                style={{ transform: `translate3d(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px, 0)` }}
              >
                <motion.div
                  className={clsx('bg-bg-card', 'border', 'border-border-primary', 'p-3.5', 'rounded-sm', 'shadow-xl', 'flex', 'items-center', 'gap-3', 'select-none')}
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  <div className={clsx('w-9', 'h-9', 'rounded-sm', 'bg-green-500/10', 'border', 'border-green-500/20', 'flex', 'items-center', 'justify-center', 'text-green-500')}>
                    <Globe size={18} />
                  </div>
                  <div>
                    <div className={clsx('text-xs', 'font-bold', 'text-text-primary')}>Web Architecture</div>
                    <div className={clsx('text-[9px]', 'text-text-muted', 'font-mono')}>React & Next.js</div>
                  </div>
                </motion.div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* TRUSTED BY MARQUEE */}
      <section className={clsx('py-12', 'border-y', 'border-border-primary', 'bg-bg-primary', 'overflow-hidden')}>
        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'text-center', 'mb-6')}>
          <p className={clsx('text-xs', 'uppercase', 'tracking-[0.2em]', 'font-semibold', 'text-text-muted')}>
            Trusted by founders and scaling companies worldwide
          </p>
        </div>

        {/* Infinite marquee container */}
        <div className={clsx('flex', 'w-full', 'overflow-hidden', 'select-none', 'transform-gpu')}>
          <div className={clsx('flex', 'shrink-0', 'gap-8', 'sm:gap-16', 'pr-8', 'sm:pr-16', 'py-2', 'animate-marquee', 'whitespace-nowrap', 'min-w-full', 'items-center', 'justify-around', 'will-change-transform', 'transform-gpu')}>
            {['Vercel', 'AWS', 'Stripe', 'OpenAI', 'Linear', 'Cloudflare', 'DigitalOcean', 'Framer', 'Webflow'].map((brand, i) => (
              <span key={i} className={clsx('text-lg', 'sm:text-2xl', 'font-bold', 'font-display', 'text-text-secondary/60', 'hover:text-text-primary', 'transition-colors', 'uppercase', 'tracking-[0.15em]', 'flex', 'items-center', 'gap-2')}>
                <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-accent')} />
                {brand}
              </span>
            ))}
          </div>
          <div className={clsx('flex', 'shrink-0', 'gap-8', 'sm:gap-16', 'pr-8', 'sm:pr-16', 'py-2', 'animate-marquee', 'whitespace-nowrap', 'min-w-full', 'items-center', 'justify-around', 'will-change-transform', 'transform-gpu')} aria-hidden="true">
            {['Vercel', 'AWS', 'Stripe', 'OpenAI', 'Linear', 'Cloudflare', 'DigitalOcean', 'Framer', 'Webflow'].map((brand, i) => (
              <span key={i} className={clsx('text-lg', 'sm:text-2xl', 'font-bold', 'font-display', 'text-text-secondary/60', 'hover:text-text-primary', 'transition-colors', 'uppercase', 'tracking-[0.15em]', 'flex', 'items-center', 'gap-2')}>
                <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-accent')} />
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>






      {/* EXCLUSIVE OFFERS SECTION: Premium Layout */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className={clsx('py-12', 'lg:py-24', 'px-4', 'sm:px-6', 'lg:px-8', 'max-w-7xl', 'mx-auto', 'relative', 'z-10')}
      >
        <div className={clsx('relative', 'w-full', 'rounded-[32px]', 'overflow-hidden', 'bg-bg-card', 'border', 'border-border-primary', 'p-5', 'sm:p-8', 'lg:p-16', 'shadow-2xl', 'group')}>
          
          {/* Minimalist Tech Background */}
          <div className={clsx('absolute', 'inset-0', 'bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]', 'bg-[size:32px_32px]', 'opacity-50', 'pointer-events-none')} />
          
          <div className={clsx('relative', 'z-10', 'grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-10', 'lg:gap-16', 'items-center', 'mb-12', 'lg:mb-20')}>
            
            {/* Left: Text Content */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className={clsx('flex', 'flex-col', 'items-start', 'text-left', 'order-1')}
            >
              <span className={clsx('inline-flex', 'items-center', 'gap-2', 'text-[11px]', 'uppercase', 'tracking-[0.25em]', 'font-bold', 'text-text-primary', 'bg-white/5', 'px-4', 'py-1.5', 'rounded-full', 'border', 'border-white/10', 'mb-6', 'shadow-sm')}>
                <span className={clsx('w-2', 'h-2', 'rounded-full', 'bg-highlight', 'animate-pulse')} /> Exclusive For New Partners
              </span>
              <h2 className={clsx('text-4xl', 'md:text-5xl', 'lg:text-6xl', 'font-display', 'font-black', 'text-text-primary', 'leading-tight', 'tracking-tight', 'mb-6')}>
                Client <span className={clsx('text-transparent', 'bg-clip-text', 'bg-gradient-to-r', 'from-accent', 'to-highlight')}>Welcome Pass</span>
              </h2>
              <p className={clsx('text-sm', 'sm:text-base', 'text-text-secondary', 'font-light', 'leading-relaxed', 'mb-8', 'max-w-xl')}>
                Partner with Quantixx and instantly unlock thousands of dollars in foundational engineering value. We set you up for long-term success from day one with premium audits, massive discounts, and free infrastructure setup.
              </p>
              
              {/* Premium Outline CTA Button */}
              <button 
                onClick={openModal} 
                className={clsx(
                  'relative', 'w-full', 'sm:w-auto', 'px-8', 'py-4', 'rounded-xl', 'group',
                  'bg-transparent', 'border-2', 'border-text-primary',
                  'text-sm', 'font-bold', 'text-text-primary', 'transition-all', 'duration-300',
                  'hover:bg-text-primary', 'hover:text-bg-primary', 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]',
                  'hover:-translate-y-1', 'flex', 'items-center', 'justify-center', 'gap-3'
                )}
              >
                <span className={clsx('relative', 'z-10', 'flex', 'items-center', 'gap-2')}>
                  Activate Pass <ArrowRight size={18} className={clsx('group-hover:translate-x-1', 'transition-transform', 'duration-300')} />
                </span>
              </button>
            </motion.div>

            {/* Right: Clean Professional Dashboard Widget */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className={clsx('relative', 'flex', 'w-full', 'max-w-md', 'mx-auto', 'lg:mx-0', 'lg:ml-auto', 'order-2')}
            >
              
              <div className={clsx(
                'w-full', 'rounded-2xl', 'bg-bg-primary', 'border', 'border-border-primary', 
                'p-6', 'sm:p-8', 'shadow-2xl'
              )}>
                
                <div className={clsx('flex', 'items-center', 'justify-between', 'mb-8', 'pb-6', 'border-b', 'border-border-primary')}>
                  <div className={clsx('flex', 'items-center', 'gap-4')}>
                    <div className={clsx('w-10', 'h-10', 'sm:w-12', 'sm:h-12', 'rounded-lg', 'bg-text-primary', 'text-bg-primary', 'flex', 'items-center', 'justify-center', 'shadow-md')}>
                      <CheckCircle2 size={20} className={clsx('sm:w-6', 'sm:h-6')} />
                    </div>
                    <div>
                      <div className={clsx('text-[10px]', 'font-mono', 'text-text-muted', 'tracking-widest', 'uppercase', 'mb-1')}>Authorization</div>
                      <div className={clsx('text-sm', 'sm:text-base', 'font-bold', 'text-text-primary', 'tracking-tight')}>New Partner Status</div>
                    </div>
                  </div>
                  <div className={clsx('px-2.5', 'py-1', 'rounded-full', 'bg-emerald-500/10', 'text-emerald-500', 'border', 'border-emerald-500/20', 'text-[9px]', 'sm:text-[10px]', 'font-mono', 'font-bold', 'flex', 'items-center', 'gap-1.5')}>
                    <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-emerald-500', 'animate-pulse')} /> VERIFIED
                  </div>
                </div>

                <div className={clsx('space-y-5', 'sm:space-y-6', 'mb-8')}>
                   <motion.div 
                     variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
                     className={clsx('flex', 'justify-between', 'items-center', 'group')}
                   >
                      <span className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'font-medium', 'group-hover:text-text-primary', 'transition-colors')}>Comprehensive Audit</span>
                      <span className={clsx('text-xs', 'sm:text-sm', 'font-mono', 'font-semibold', 'text-text-primary')}>₹1,00,000</span>
                   </motion.div>
                   
                   <motion.div 
                     variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
                     className={clsx('flex', 'justify-between', 'items-center', 'group')}
                   >
                      <span className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'font-medium', 'group-hover:text-text-primary', 'transition-colors')}>Infrastructure Setup</span>
                      <span className={clsx('text-xs', 'sm:text-sm', 'font-mono', 'font-semibold', 'text-text-primary')}>₹60,000</span>
                   </motion.div>
                   
                   <motion.div 
                     variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
                     className={clsx('flex', 'justify-between', 'items-center', 'group')}
                   >
                      <span className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'font-medium', 'group-hover:text-text-primary', 'transition-colors')}>Initial Build Discount</span>
                      <span className={clsx('text-xs', 'sm:text-sm', 'font-mono', 'font-semibold', 'text-highlight')}>15% OFF</span>
                   </motion.div>
                </div>

                <div className={clsx('pt-6', 'border-t', 'border-border-primary', 'flex', 'items-end', 'justify-between')}>
                   <div>
                     <div className={clsx('text-[9px]', 'sm:text-[10px]', 'text-text-muted', 'uppercase', 'tracking-widest', 'font-mono', 'mb-2')}>Total Unlocked Value</div>
                     <div className={clsx('text-3xl', 'sm:text-4xl', 'font-display', 'font-black', 'text-text-primary', 'tracking-tight')}>₹1,60,000+</div>
                   </div>
                   <div className={clsx('w-10', 'h-10', 'sm:w-12', 'sm:h-12', 'flex', 'items-center', 'justify-center', 'text-text-muted', 'opacity-30')}>
                      <Cpu size={28} className={clsx('sm:w-8', 'sm:h-8')} />
                   </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* 3-Column Offers Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className={clsx('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6', 'lg:gap-8', 'mb-12', 'lg:mb-16', 'relative', 'z-10')}
          >
            
            {/* Offer 1 */}
            <PremiumHoverCard 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              className="hover:border-accent/40"
            >
              <div className={clsx('w-12', 'h-12', 'rounded-xl', 'bg-accent/10', 'text-accent', 'flex', 'items-center', 'justify-center', 'mb-6', 'border', 'border-accent/20', 'group-hover/card:scale-110', 'group-hover/card:bg-accent/20', 'transition-transform')}>
                <LineChart size={24} strokeWidth={1.5} />
              </div>
              <h3 className={clsx('text-xl', 'font-display', 'font-bold', 'text-text-primary', 'mb-2')}>Comprehensive Audit</h3>
              <div className={clsx('text-[10px]', 'font-mono', 'font-bold', 'text-accent', 'bg-accent/10', 'px-2.5', 'py-1', 'rounded-sm', 'mb-4', 'border', 'border-accent/20')}>₹1,00,000 VALUE</div>
              <p className={clsx('text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                Deep-dive review of your current setup, identifying hidden bottlenecks, and mapping a clear technical blueprint to scale your business.
              </p>
            </PremiumHoverCard>

            {/* Offer 2 */}
            <PremiumHoverCard 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              className="hover:border-highlight/40"
            >
              <div className={clsx('w-12', 'h-12', 'rounded-xl', 'bg-highlight/10', 'text-highlight', 'flex', 'items-center', 'justify-center', 'mb-6', 'border', 'border-highlight/20', 'group-hover/card:scale-110', 'group-hover/card:bg-highlight/20', 'transition-transform')}>
                <Tag size={24} strokeWidth={1.5} />
              </div>
              <h3 className={clsx('text-xl', 'font-display', 'font-bold', 'text-text-primary', 'mb-2')}>15% Welcome Discount</h3>
              <div className={clsx('text-[10px]', 'font-mono', 'font-bold', 'text-highlight', 'bg-highlight/10', 'px-2.5', 'py-1', 'rounded-sm', 'mb-4', 'border', 'border-highlight/20')}>ALL SERVICES</div>
              <p className={clsx('text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                Enjoy an exclusive 15% rate reduction on your entire custom software, web app, or mobile development project.
              </p>
            </PremiumHoverCard>

            {/* Offer 3 */}
            <PremiumHoverCard 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              className="hover:border-emerald-500/40"
            >
              <div className={clsx('w-12', 'h-12', 'rounded-xl', 'bg-emerald-500/10', 'text-emerald-500', 'flex', 'items-center', 'justify-center', 'mb-6', 'border', 'border-emerald-500/20', 'group-hover/card:scale-110', 'group-hover/card:bg-emerald-500/20', 'transition-transform')}>
                <Zap size={24} strokeWidth={1.5} />
              </div>
              <h3 className={clsx('text-xl', 'font-display', 'font-bold', 'text-text-primary', 'mb-2')}>Free Launch Setup</h3>
              <div className={clsx('text-[10px]', 'font-mono', 'font-bold', 'text-emerald-500', 'bg-emerald-500/10', 'px-2.5', 'py-1', 'rounded-sm', 'mb-4', 'border', 'border-emerald-500/20')}>₹60,000 VALUE</div>
              <p className={clsx('text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                We handle the complex server hosting, domain configuration, and launch logistics entirely for free when you sign on for a full build.
              </p>
            </PremiumHoverCard>

          </motion.div>

          <div className={clsx('flex', 'justify-center', 'relative', 'z-20')}>
            <button 
              onClick={openModal} 
              className={clsx(
                'px-10', 'py-4', 'sm:py-5', 'bg-text-primary', 'text-bg-primary', 'rounded-full', 
                'text-sm', 'sm:text-base', 'font-bold', 'transition-all', 'duration-300', 
                'shadow-[0_10px_40px_rgba(var(--color-accent),0.15)]', 'hover:shadow-[0_15px_50px_rgba(var(--color-accent),0.25)]', 
                'hover:-translate-y-1', 'flex', 'items-center', 'justify-center', 'gap-3', 'group/btn'
              )}
            >
              Activate Your Welcome Pass 
              <ArrowRight size={18} className={clsx('group-hover/btn:translate-x-1.5', 'transition-transform')} />
            </button>
          </div>
        </div>
      </motion.section>

      {/* SERVICES SECTION - Glassmorphic Auto-Scroll Carousel */}
      <section className={clsx('py-12', 'lg:py-20', 'relative', 'overflow-hidden')}>

        {/* Background atmosphere */}
        <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-b', 'from-bg-primary', 'via-bg-secondary/20', 'to-bg-primary', 'pointer-events-none')} />
        <div className={clsx('absolute', 'top-1/3', 'left-1/4', 'w-[600px]', 'h-[600px]', 'bg-accent/6', 'rounded-full', 'blur-[150px]', 'pointer-events-none')} />
        <div className={clsx('absolute', 'bottom-1/3', 'right-1/4', 'w-[500px]', 'h-[500px]', 'bg-highlight/5', 'rounded-full', 'blur-[140px]', 'pointer-events-none')} />
        <div className={clsx('absolute', 'inset-0', 'bg-[radial-gradient(var(--hero-dot-color)_1px,transparent_1px)]', '[background-size:28px_28px]', 'opacity-10', 'pointer-events-none')} />

        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'relative', 'z-10')}>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className={clsx('text-center', 'mb-14', 'space-y-4')}
          >
            <span className={clsx('inline-flex', 'items-center', 'gap-1.5', 'text-xs', 'uppercase', 'tracking-[0.25em]', 'font-extrabold', 'text-accent', 'bg-accent/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'border', 'border-accent/20', 'mb-6')}>
              <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-accent', 'animate-pulse')} />
              Engineering Capabilities
            </span>
            <h2 className={clsx('text-3xl', 'sm:text-4xl', 'lg:text-5xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight', 'max-w-3xl', 'mx-auto', 'leading-tight')}>
              What We <span className="accent-text-gradient">Build For You</span>
            </h2>
            <p className={clsx('text-sm', 'sm:text-base', 'text-text-secondary', 'max-w-2xl', 'mx-auto', 'font-light', 'leading-relaxed')}>
              Swipe through our core capabilities — from AI automation to cloud infrastructure. Every service is crafted to deliver measurable results.
            </p>
          </motion.div>

          {/* Auto-scrolling Glassmorphic Cards Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Swiper
              modules={[Autoplay, Pagination, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{ rotate: 0, stretch: 0, depth: 80, modifier: 1.5, slideShadows: false }}
              spaceBetween={24}
              slidesPerView={1.1}
              centeredSlides={true}
              autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              pagination={{ clickable: true, el: '.services-pagination' }}
              loop={true}
              onSwiper={(swiper) => { servicesSwiperRef.current = swiper; }}
              onSlideChange={(swiper) => setActiveService(swiper.realIndex)}
              breakpoints={{
                640: { slidesPerView: 1.6, spaceBetween: 24 },
                900: { slidesPerView: 2.3, spaceBetween: 28 },
                1200: { slidesPerView: 3, spaceBetween: 32 }
              }}
              className={clsx('!overflow-visible', 'pb-6')}
            >
              {services.map((svc, idx) => {
                const Icon = svc.icon;
                const accentColors = [
                  { glow: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.3)', iconCls: 'text-accent    bg-accent/10    border-accent/20' },
                  { glow: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.3)', iconCls: 'text-highlight  bg-highlight/10  border-highlight/20' },
                  { glow: 'rgba(59,130,246,0.14)', border: 'rgba(59,130,246,0.3)', iconCls: 'text-blue-400   bg-blue-400/10   border-blue-400/20' },
                  { glow: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', iconCls: 'text-amber-400  bg-amber-400/10  border-amber-400/20' },
                  { glow: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.3)', iconCls: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
                ];
                const c = accentColors[idx % accentColors.length];
                return (
                  <SwiperSlide key={idx} className="h-auto">
                    {({ isActive }) => (
                      <motion.div
                        whileHover={{ y: -6, scale: 1.015 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="h-full"
                      >
                        {/* Glassmorphic card */}
                        <div
                          className={clsx('relative', 'rounded-[24px]', 'overflow-hidden', 'flex', 'flex-col', 'min-h-[380px]', 'sm:min-h-[480px]', 'cursor-pointer', 'group', 'lg:bg-bg-primary')}
                          style={{
                            backgroundImage: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                            backdropFilter: 'blur(28px)',
                            WebkitBackdropFilter: 'blur(28px)',
                            border: `1px solid ${c.border}`,
                            boxShadow: `0 12px 48px ${c.glow}, 0 1px 0 rgba(255,255,255,0.08) inset`,
                          }}
                        >
                          {/* Top shimmer line */}
                          <div className={clsx('absolute', 'top-0', 'left-[8%]', 'right-[8%]', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-white/25', 'to-transparent')} />

                          {/* Corner accents */}
                          <div className={clsx('absolute', 'top-0', 'left-0', 'w-14', 'h-14', 'border-t-[1.5px]', 'border-l-[1.5px]', 'rounded-tl-[24px]', 'opacity-40', 'transition-opacity', 'duration-300', 'group-hover:opacity-80')} style={{ borderColor: c.border }} />
                          <div className={clsx('absolute', 'bottom-0', 'right-0', 'w-14', 'h-14', 'border-b-[1.5px]', 'border-r-[1.5px]', 'rounded-br-[24px]', 'opacity-20', 'transition-opacity', 'duration-300', 'group-hover:opacity-60')} style={{ borderColor: c.border }} />

                          {/* Hover radial glow */}
                          <div
                            className={clsx('absolute', 'inset-0', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-700', 'pointer-events-none', 'rounded-[24px]')}
                            style={{ background: `radial-gradient(circle at 50% 0%, ${c.glow}, transparent 70%)` }}
                          />

                          <div className={clsx('relative', 'z-10', 'p-5', 'sm:p-7', 'flex', 'flex-col', 'h-full')}>

                            {/* Header row */}
                            <div className={clsx('flex', 'items-start', 'justify-between', 'mb-4', 'sm:mb-5')}>
                              <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center border ${c.iconCls} shrink-0`}>
                                <Icon size={22} />
                              </div>
                              <span className={clsx('text-[9px]', 'font-mono', 'font-bold', 'tracking-[0.2em]', 'text-text-muted', 'bg-bg-secondary/70', 'border', 'border-border-primary/60', 'px-2.5', 'py-1', 'rounded-full', 'select-none')}>
                                0{idx + 1} / 0{services.length}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className={clsx('text-base', 'sm:text-lg', 'font-display', 'font-extrabold', 'text-text-primary', 'mb-2', 'leading-snug')}>
                              {svc.title}
                            </h3>

                            {/* Description */}
                            <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'font-light', 'leading-relaxed', 'mb-4')}>
                              {svc.desc}
                            </p>

                            {/* Outcome pill */}
                            <div
                              className={clsx('inline-flex', 'items-center', 'gap-2', 'px-3', 'py-1', 'sm:px-3.5', 'sm:py-1.5', 'rounded-full', 'text-[9px]', 'sm:text-[10.5px]', 'font-bold', 'font-mono', 'mb-4', 'sm:mb-5', 'w-fit', 'shadow-sm')}
                              style={{ background: c.glow, border: `1px solid ${c.border}` }}
                            >
                              <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'shrink-0', 'shadow-sm')} style={{ backgroundColor: c.border.replace('0.3', '0.8') }} />
                              <span className={clsx('text-text-primary/90', 'tracking-wide')}>{svc.outcome}</span>
                            </div>

                            {/* Bullet points */}
                            <div className={clsx('space-y-2', 'sm:space-y-3', 'mb-5', 'sm:mb-6', 'flex-1')}>
                              {svc.bullets.map((bullet, bIdx) => (
                                <div key={bIdx} className={clsx('flex', 'items-start', 'gap-2.5', 'sm:gap-3')}>
                                  <div
                                    className={clsx('w-4', 'h-4', 'mt-0.5', 'rounded-full', 'flex', 'items-center', 'justify-center', 'shrink-0')}
                                    style={{ background: c.glow, border: `1px solid ${c.border}` }}
                                  >
                                    <CheckCircle2 size={10} style={{ color: c.border.replace('0.3', '1') }} />
                                  </div>
                                  <span className={clsx('text-[13px]', 'sm:text-sm', 'text-text-secondary', 'font-medium', 'leading-relaxed')}>{bullet}</span>
                                </div>
                              ))}
                            </div>

                            {/* Tech stack */}
                            <div className={clsx('pt-4', 'border-t', 'border-white/[0.06]')}>
                              <span className={clsx('block', 'text-[9px]', 'uppercase', 'tracking-[0.2em]', 'text-text-muted', 'font-mono', 'mb-2.5')}>Stack</span>
                              <div className={clsx('flex', 'flex-wrap', 'gap-1.5')}>
                                {svc.techs.map((tech, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className={clsx('px-2.5', 'py-1', 'rounded-full', 'text-[10px]', 'font-semibold', 'font-mono')}
                                    style={{
                                      background: 'rgba(255,255,255,0.04)',
                                      border: '1px solid rgba(255,255,255,0.08)',
                                      color: 'var(--text-secondary)'
                                    }}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Mobile Controls Stack (Hidden on Desktop) */}
            <div className={clsx('flex', 'flex-col', 'items-center', 'justify-center', 'gap-5', 'my-2', 'lg:hidden', 'w-full')}>
              {/* Centered Pagination Dots */}
              <div className={clsx('services-pagination', 'flex', 'justify-center', 'gap-2', 'items-center', 'w-full', '[&_.swiper-pagination-bullet]:w-1.5', '[&_.swiper-pagination-bullet]:h-1.5', '[&_.swiper-pagination-bullet]:rounded-full', '[&_.swiper-pagination-bullet]:bg-text-muted', '[&_.swiper-pagination-bullet]:opacity-40', '[&_.swiper-pagination-bullet]:transition-all', '[&_.swiper-pagination-bullet]:duration-300', 'hover:[&_.swiper-pagination-bullet]:opacity-60', '[&_.swiper-pagination-bullet-active]:!bg-text-primary', '[&_.swiper-pagination-bullet-active]:!opacity-100', 'cursor-pointer')} />

              {/* Standalone Sleek Glass CTA Button */}
              <button
                onClick={openModal}
                className={clsx('px-6', 'sm:px-8', 'py-2.5', 'sm:py-3', 'rounded-full', 'text-sm', 'font-semibold', 'text-text-primary', 'bg-gradient-to-br', 'from-white/50', 'to-white/10', 'backdrop-blur-md', 'border', 'border-white/40', 'shadow-[0_8px_32px_rgba(0,0,0,0.05)]', 'hover:from-white/70', 'hover:to-white/30', 'hover:-translate-y-0.5', 'active:scale-95', 'transition-all', 'duration-300', 'cursor-pointer', 'flex', 'items-center', 'justify-center', 'gap-2', 'group/cta')}
              >
                Explore All Services
                <ArrowRight size={14} className={clsx('group-hover/cta:translate-x-1', 'transition-transform')} />
              </button>
            </div>

            {/* Desktop Only CTA Button */}
            <div className={clsx('hidden', 'lg:flex', 'justify-center', 'mt-10', 'w-full')}>
              <button
                onClick={openModal}
                className={clsx('px-8', 'py-3.5', 'rounded-full', 'text-sm', 'font-semibold', 'text-text-primary', 'bg-gradient-to-br', 'from-white/50', 'to-white/10', 'backdrop-blur-md', 'border', 'border-white/40', 'shadow-[0_8px_32px_rgba(0,0,0,0.05)]', 'hover:from-white/70', 'hover:to-white/30', 'hover:-translate-y-0.5', 'active:scale-95', 'transition-all', 'duration-300', 'cursor-pointer', 'flex', 'items-center', 'justify-center', 'gap-2', 'group/cta')}
              >
                Explore All Services
                <ArrowRight size={14} className={clsx('group-hover/cta:translate-x-1', 'transition-transform')} />
              </button>
            </div>
          </motion.div>

        </div>
      </section>


      {/* WHY QUANTIXX / METRICS & ENTERPRISE TRUST */}
      <section className={clsx('py-12', 'lg:py-20', 'bg-bg-secondary/40', 'border-y', 'border-border-primary', 'relative', 'overflow-hidden')}>

        {/* Futuristic Grid / Radial Blur Backdrops */}
        <div className={clsx('absolute', 'inset-0', 'bg-[radial-gradient(var(--hero-dot-color)_1.2px,transparent_1.2px)]', '[background-size:32px_32px]', 'pointer-events-none', 'opacity-20')} />
        <div className={clsx('absolute', 'top-1/3', 'left-1/4', 'w-[500px]', 'h-[500px]', 'bg-accent/5', 'rounded-full', 'blur-[160px]', 'pointer-events-none', '-z-10')} />
        <div className={clsx('absolute', 'bottom-1/3', 'right-1/4', 'w-[600px]', 'h-[600px]', 'bg-highlight/5', 'rounded-full', 'blur-[180px]', 'pointer-events-none', '-z-10')} />

        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'relative', 'z-10')}>

          {/* Section Heading & Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={clsx('text-center', 'mb-20', 'space-y-4')}
          >
            <span className={clsx('inline-flex', 'items-center', 'gap-1.5', 'text-xs', 'uppercase', 'tracking-[0.25em]', 'font-extrabold', 'text-highlight', 'bg-highlight/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'border', 'border-highlight/20', 'mb-6')}>
              Engineered for Performance
            </span>
            <h2 className={clsx('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'xl:text-6xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight', 'max-w-4xl', 'mx-auto', 'leading-[1.1]')}>
              Why Enterprises Partner With Quantixx Solutions
            </h2>
            <p className={clsx('text-sm', 'sm:text-base', 'md:text-lg', 'text-text-secondary', 'max-w-2xl', 'mx-auto', 'font-light', 'leading-relaxed')}>
              We eliminate technical debt and optimize operational workflows. Our products are engineered under strict security guidelines and high-availability frameworks.
            </p>
          </motion.div>

          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-8', 'items-stretch')}>

            {/* LEFT COLUMN: Values Proposition Panel */}
            <div className={clsx('lg:col-span-4', 'flex', 'flex-col', 'justify-between', 'space-y-8', 'bg-bg-card/30', 'backdrop-blur-md', 'border', 'border-border-primary', 'rounded-sm', 'p-8', 'lg:p-10')}>
              <div className="space-y-6">
                <span className={clsx('inline-flex', 'items-center', 'gap-1.5', 'text-xs', 'uppercase', 'tracking-[0.25em]', 'font-extrabold', 'text-accent', 'bg-accent/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'border', 'border-accent/20', 'mb-4')}>
                  Standard Operating
                </span>
                <h3 className={clsx('text-2xl', 'sm:text-3xl', 'xl:text-4xl', 'font-display', 'font-bold', 'text-text-primary', 'leading-tight')}>
                  The Quantixx Assurance
                </h3>
                <p className={clsx('text-sm', 'md:text-base', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                  We deploy production-ready infrastructures equipped with redundant networks, structured testing, and rigorous code audits to guarantee high-performance uptime.
                </p>
              </div>

              <div className={clsx('space-y-4', 'pt-4', 'border-t', 'border-border-primary')}>
                {[
                  'Transparent milestones & Slack/Jira communication',
                  'Enterprise-grade production quality (SOC2 readiness)',
                  'Scalable microservices & automated deployments',
                  'Bespoke, human-centered UI design workflows'
                ].map((item, idx) => (
                  <div key={idx} className={clsx('flex', 'items-start', 'gap-3.5', 'text-sm', 'md:text-base', 'text-text-secondary')}>
                    <CheckCircle2 size={18} className={clsx('text-accent', 'shrink-0', 'mt-0.5')} />
                    <span className={clsx('font-sans', 'font-medium', 'leading-snug')}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Premium Bento Metrics Showcase */}
            <div className={clsx('lg:col-span-8', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-6')}>

              {/* Stat Card 1: SLA Uptime */}
              <motion.div
                whileHover={{ y: -5 }}
                className={clsx('glass-card', 'hover:border-accent/30', 'rounded-sm', 'p-6', 'sm:p-8', 'flex', 'flex-col', 'justify-between', 'transition-all', 'duration-300', 'overflow-hidden', 'relative', 'group')}
              >
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-32', 'h-32', 'bg-accent/5', 'rounded-full', 'blur-2xl', 'group-hover:bg-accent/15', 'transition-all')} />
                <div className={clsx('flex', 'justify-between', 'items-start')}>
                  <div className={clsx('flex', 'h-10', 'w-10', 'items-center', 'justify-center', 'rounded-sm', 'bg-accent/10', 'text-accent', 'border', 'border-accent/20')}>
                    <Cloud size={20} />
                  </div>
                  <span className={clsx('inline-flex', 'items-center', 'gap-1', 'text-[10px]', 'font-mono', 'text-emerald-500', 'bg-emerald-500/10', 'px-2', 'py-0.5', 'rounded-sm', 'font-bold')}>
                    <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-emerald-500', 'animate-ping')} />
                    LIVE TELEMETRY
                  </span>
                </div>

                <div className="my-8">
                  <div className={clsx('text-4xl', 'sm:text-5xl', 'xl:text-6xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight')}>
                    <Counter value="99.99%" />
                  </div>
                  <div className={clsx('text-sm', 'md:text-base', 'font-semibold', 'text-text-primary', 'mt-2')}>
                    Infrastructure Uptime
                  </div>
                  <div className={clsx('text-xs', 'md:text-sm', 'text-text-secondary', 'mt-1.5', 'font-light', 'leading-relaxed')}>
                    Enterprise-grade SLA matching mission-critical expectations.
                  </div>
                </div>

                {/* Micro Visualizer: Server Ping Nodes */}
                <div className={clsx('flex', 'gap-1.5', 'items-center', 'bg-bg-secondary/60', 'border', 'border-border-primary', 'p-2', 'rounded-sm')}>
                  {[...Array(12)].map((_, i) => (
                    <span
                      key={i}
                      className={`h-3 flex-1 rounded-sm-[2px] ${i === 11 ? 'bg-amber-500/80 animate-pulse' : 'bg-emerald-500/85'}`}
                    />
                  ))}
                  <span className={clsx('text-[9px]', 'font-mono', 'text-text-muted', 'ml-2')}>US-EAST</span>
                </div>
              </motion.div>

              {/* Stat Card 2: Manual Automation */}
              <motion.div
                whileHover={{ y: -5 }}
                className={clsx('glass-card', 'hover:border-highlight/30', 'rounded-sm', 'p-6', 'sm:p-8', 'flex', 'flex-col', 'justify-between', 'transition-all', 'duration-300', 'overflow-hidden', 'relative', 'group')}
              >
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-32', 'h-32', 'bg-highlight/5', 'rounded-full', 'blur-2xl', 'group-hover:bg-highlight/15', 'transition-all')} />
                <div className={clsx('flex', 'justify-between', 'items-start')}>
                  <div className={clsx('flex', 'h-10', 'w-10', 'items-center', 'justify-center', 'rounded-sm', 'bg-highlight/10', 'text-highlight', 'border', 'border-highlight/20')}>
                    <Bot size={20} />
                  </div>
                  <span className={clsx('text-[10px]', 'font-mono', 'text-text-muted')}>SYSTEM METRIC</span>
                </div>

                <div className="my-8">
                  <div className={clsx('text-4xl', 'sm:text-5xl', 'xl:text-6xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight')}>
                    <Counter value="80%" />
                  </div>
                  <div className={clsx('text-sm', 'md:text-base', 'font-semibold', 'text-text-primary', 'mt-2')}>
                    Manual Workflows Cut
                  </div>
                  <div className={clsx('text-xs', 'md:text-sm', 'text-text-secondary', 'mt-1.5', 'font-light', 'leading-relaxed')}>
                    Repetitive daily processes shifted to autonomous software chains.
                  </div>
                </div>

                {/* Micro Visualizer: Queue Loading bar */}
                <div className={clsx('w-full', 'bg-bg-secondary/60', 'border', 'border-border-primary', 'p-2', 'rounded-sm', 'flex', 'items-center', 'justify-between', 'text-[9px]', 'font-mono')}>
                  <span className="text-highlight">Auto_Cron_Sync</span>
                  <div className={clsx('w-1/2', 'bg-border-primary', 'h-2', 'rounded-sm', 'overflow-hidden')}>
                    <motion.div
                      animate={{ width: ['0%', '80%', '80%', '0%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className={clsx('bg-highlight', 'h-full', 'rounded-sm')}
                    />
                  </div>
                  <span className={clsx('text-text-secondary', 'font-bold')}>80%</span>
                </div>
              </motion.div>

              {/* Stat Card 3: Conversion Lift */}
              <motion.div
                whileHover={{ y: -5 }}
                className={clsx('glass-card', 'hover:border-yellow-500/30', 'rounded-sm', 'p-6', 'sm:p-8', 'flex', 'flex-col', 'justify-between', 'transition-all', 'duration-300', 'overflow-hidden', 'relative', 'group')}
              >
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-32', 'h-32', 'bg-yellow-500/5', 'rounded-full', 'blur-2xl', 'group-hover:bg-yellow-500/15', 'transition-all')} />
                <div className={clsx('flex', 'justify-between', 'items-start')}>
                  <div className={clsx('flex', 'h-10', 'w-10', 'items-center', 'justify-center', 'rounded-sm', 'bg-yellow-500/10', 'text-yellow-500', 'border', 'border-yellow-500/20')}>
                    <TrendingUp size={20} />
                  </div>
                  <span className={clsx('text-[10px]', 'font-mono', 'text-text-muted')}>UI/UX AUDIT</span>
                </div>

                <div className="my-8">
                  <div className={clsx('text-4xl', 'sm:text-5xl', 'xl:text-6xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight')}>
                    <Counter value="+35%" />
                  </div>
                  <div className={clsx('text-sm', 'md:text-base', 'font-semibold', 'text-text-primary', 'mt-2')}>
                    Conversion Lift
                  </div>
                  <div className={clsx('text-xs', 'md:text-sm', 'text-text-secondary', 'mt-1.5', 'font-light', 'leading-relaxed')}>
                    Frictionless interfaces customized to optimize customer acquisition.
                  </div>
                </div>

                {/* Micro Visualizer: Growing Bars */}
                <div className={clsx('h-10', 'w-full', 'flex', 'items-end', 'gap-1.5', 'bg-bg-secondary/40', 'border', 'border-border-primary', 'rounded-sm', 'p-2')}>
                  <div className={clsx('bg-text-muted', 'w-full', 'h-[40%]', 'rounded-sm-[2px]')} />
                  <div className={clsx('bg-text-muted', 'w-full', 'h-[55%]', 'rounded-sm-[2px]')} />
                  <div className={clsx('bg-text-muted', 'w-full', 'h-[70%]', 'rounded-sm-[2px]')} />
                  <div className={clsx('bg-yellow-500', 'w-full', 'h-[100%]', 'rounded-sm-[2px]', 'animate-pulse')} />
                </div>
              </motion.div>

              {/* Stat Card 4: Revenue Impact */}
              <motion.div
                whileHover={{ y: -5 }}
                className={clsx('glass-card', 'hover:border-emerald-500/30', 'rounded-sm', 'p-6', 'sm:p-8', 'flex', 'flex-col', 'justify-between', 'transition-all', 'duration-300', 'overflow-hidden', 'relative', 'group')}
              >
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-32', 'h-32', 'bg-emerald-500/5', 'rounded-full', 'blur-2xl', 'group-hover:bg-emerald-500/15', 'transition-all')} />
                <div className={clsx('flex', 'justify-between', 'items-start')}>
                  <div className={clsx('flex', 'h-10', 'w-10', 'items-center', 'justify-center', 'rounded-sm', 'bg-emerald-500/10', 'text-emerald-500', 'border', 'border-emerald-500/20')}>
                    <CheckCircle2 size={20} />
                  </div>
                  <span className={clsx('text-[10px]', 'font-mono', 'text-text-muted')}>FINANCIAL SUMMARY</span>
                </div>

                <div className="my-8">
                  <div className={clsx('text-4xl', 'sm:text-5xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight')}>
                    ₹12M+
                  </div>
                  <div className={clsx('text-sm', 'font-semibold', 'text-text-primary', 'mt-2')}>
                    Client Revenue Generated
                  </div>
                  <div className={clsx('text-xs', 'text-text-secondary', 'mt-1', 'font-light', 'leading-normal')}>
                    Measurable visual software and pipelines driving hard business results.
                  </div>
                </div>

                {/* Micro Visualizer: Security Audited line */}
                <div className={clsx('w-full', 'bg-bg-secondary/60', 'border', 'border-border-primary', 'py-1.5', 'px-3', 'rounded-sm', 'flex', 'items-center', 'justify-between', 'text-[9px]', 'font-mono')}>
                  <span className="text-text-muted">Audit Assurance</span>
                  <span className={clsx('text-emerald-500', 'font-bold')}>100% SECURE</span>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* TECH ECOSYSTEM PREVIEW */}
      <section className={clsx('py-12', 'lg:py-20', 'px-4', 'sm:px-6', 'lg:px-8', 'max-w-7xl', 'mx-auto', 'text-center', 'relative', 'overflow-hidden')}>

        {/* Subtle Background Accent */}
        <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[500px]', 'h-[500px]', 'bg-accent/5', 'rounded-full', 'blur-[140px]', 'pointer-events-none', '-z-10')} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={clsx('mb-12', 'text-center', 'space-y-4')}
        >
          <span className={clsx('inline-flex', 'items-center', 'gap-1.5', 'text-xs', 'uppercase', 'tracking-[0.25em]', 'font-extrabold', 'text-accent', 'bg-accent/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'border', 'border-accent/20', 'mb-6')}>
            Modern Tech Stack
          </span>
          <h2 className={clsx('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'xl:text-6xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight')}>
            Ecosystem Integrations
          </h2>
          <p className={clsx('text-sm', 'sm:text-base', 'md:text-lg', 'text-text-secondary', 'max-w-2xl', 'mx-auto', 'font-light', 'leading-relaxed')}>
            We engineer high-fidelity products with industry-standard, battle-tested technologies to guarantee scale, speed, and safety.
          </p>
        </motion.div>

        {/* Dual Row Continuous Infinite Scrollers (Pause on Hover) */}
        <div className={clsx('space-y-6', 'relative', 'z-10', 'w-full', 'overflow-hidden')}>

          {/* Row 1: Left-Moving Scroller */}
          <div className={clsx('flex', 'w-full', 'overflow-hidden', 'select-none', '[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]')}>
            <VelocityScroll baseVelocity={-1} className="py-4">
              {ecosystem.slice(0, 8).map((tech, idx) => (
                <div
                  key={`r1-${idx}`}
                  className={clsx('glass-card', 'rounded-sm', 'p-5', 'sm:p-6', 'border-border-primary', 'hover:border-transparent', 'transition-all', 'duration-300', 'text-left', 'flex', 'flex-col', 'justify-between', 'h-[180px]', 'sm:h-[210px]', 'w-[230px]', 'sm:w-[270px]', 'shrink-0', 'relative', 'group', 'overflow-hidden', 'cursor-pointer', 'shadow-[0_10px_30px_rgba(0,0,0,0.15)]', 'whitespace-normal')}
                >
                  <div
                    className={clsx('absolute', 'inset-0', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-500', 'pointer-events-none')}
                    style={{ background: `radial-gradient(circle at top right, ${tech.color}, transparent 65%)` }}
                  />
                  <div className={clsx('absolute', 'top-0', 'left-0', 'w-8', 'h-8', 'border-t-2', 'border-l-2', 'border-transparent', 'group-hover:border-highlight/40', 'rounded-sm-tl-lg', 'transition-all', 'duration-300')} />
                  <div className={clsx('absolute', 'bottom-0', 'right-0', 'w-8', 'h-8', 'border-b-2', 'border-r-2', 'border-transparent', 'group-hover:border-accent/40', 'rounded-sm-br-lg', 'transition-all', 'duration-300')} />

                  <div className={clsx('flex', 'justify-between', 'items-start', 'w-full', 'relative', 'z-10')}>
                    <div className={clsx('group-hover:scale-110', 'group-hover:rotate-6', 'transition-all', 'duration-300', 'p-2', 'rounded-sm', 'bg-bg-secondary/60', 'border', 'border-border-primary/80')}>
                      <img
                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.glowColor.replace('#', '')}`}
                        alt={tech.name}
                        className={clsx('w-7', 'h-7', 'object-contain', 'select-none', 'pointer-events-none')}
                      />
                    </div>
                    <div className={clsx('flex', 'items-center', 'gap-1.5', 'px-2', 'py-0.5', 'rounded-sm', 'bg-bg-secondary/80', 'border', 'border-border-primary', 'text-[8px]', 'font-mono', 'font-bold', 'text-text-secondary', 'select-none')}>
                      <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-emerald-500', 'animate-pulse')} />
                      STABLE
                    </div>
                  </div>

                  <div className={clsx('mt-3', 'relative', 'z-10')}>
                    <span className={clsx('block', 'text-[8px]', 'font-mono', 'text-text-muted', 'uppercase', 'tracking-[0.15em]', 'select-none')}>Core Integration Node</span>
                    <span className={clsx('block', 'text-xs', 'font-sans', 'font-bold', 'text-text-primary', 'mt-1', 'line-clamp-1', 'group-hover:text-highlight', 'transition-colors')}>{tech.role}</span>
                  </div>

                  <div className={clsx('pt-3', 'border-t', 'border-border-primary/60', 'relative', 'z-10', 'flex', 'flex-col', 'justify-end')}>
                    <span className={clsx('block', 'text-sm', 'font-black', 'text-text-primary', 'tracking-tight', 'font-display')}>{tech.name}</span>
                    <div className={clsx('flex', 'justify-between', 'items-center', 'mt-1')}>
                      <span className={clsx('text-[9px]', 'text-text-muted', 'font-mono', 'truncate')}>{tech.category}</span>
                      {/* <span className={clsx('text-[8px]', 'font-mono', 'text-highlight', 'bg-highlight/10', 'px-1.5', 'py-0.25', 'rounded-sm')}>PROD</span> */}
                    </div>
                  </div>
                </div>
              ))}
            </VelocityScroll>
          </div>

          {/* Row 2: Right-Moving Scroller */}
          <div className={clsx('flex', 'w-full', 'overflow-hidden', 'select-none', '[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]')}>
            <VelocityScroll baseVelocity={1} className="py-4">
              {ecosystem.slice(8, 16).map((tech, idx) => (
                <div
                  key={`r2-${idx}`}
                  className={clsx('glass-card', 'rounded-sm', 'p-5', 'sm:p-6', 'border-border-primary', 'hover:border-transparent', 'transition-all', 'duration-300', 'text-left', 'flex', 'flex-col', 'justify-between', 'h-[180px]', 'sm:h-[210px]', 'w-[230px]', 'sm:w-[270px]', 'shrink-0', 'relative', 'group', 'overflow-hidden', 'cursor-pointer', 'shadow-[0_10px_30px_rgba(0,0,0,0.15)]', 'whitespace-normal')}
                >
                  <div
                    className={clsx('absolute', 'inset-0', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-500', 'pointer-events-none')}
                    style={{ background: `radial-gradient(circle at top right, ${tech.color}, transparent 65%)` }}
                  />
                  <div className={clsx('absolute', 'top-0', 'left-0', 'w-8', 'h-8', 'border-t-2', 'border-l-2', 'border-transparent', 'group-hover:border-highlight/40', 'rounded-sm-tl-lg', 'transition-all', 'duration-300')} />
                  <div className={clsx('absolute', 'bottom-0', 'right-0', 'w-8', 'h-8', 'border-b-2', 'border-r-2', 'border-transparent', 'group-hover:border-accent/40', 'rounded-sm-br-lg', 'transition-all', 'duration-300')} />

                  <div className={clsx('flex', 'justify-between', 'items-start', 'w-full', 'relative', 'z-10')}>
                    <div className={clsx('group-hover:scale-110', 'group-hover:rotate-6', 'transition-all', 'duration-300', 'p-2', 'rounded-sm', 'bg-bg-secondary/60', 'border', 'border-border-primary/80')}>
                      <img
                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.glowColor.replace('#', '')}`}
                        alt={tech.name}
                        className={clsx('w-7', 'h-7', 'object-contain', 'select-none', 'pointer-events-none')}
                      />
                    </div>
                    <div className={clsx('flex', 'items-center', 'gap-1.5', 'px-2', 'py-0.5', 'rounded-sm', 'bg-bg-secondary/80', 'border', 'border-border-primary', 'text-[8px]', 'font-mono', 'font-bold', 'text-text-secondary', 'select-none')}>
                      <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-emerald-500', 'animate-pulse')} />
                      STABLE
                    </div>
                  </div>

                  <div className={clsx('mt-3', 'relative', 'z-10')}>
                    <span className={clsx('block', 'text-[8px]', 'font-mono', 'text-text-muted', 'uppercase', 'tracking-[0.15em]', 'select-none')}>Core Integration Node</span>
                    <span className={clsx('block', 'text-xs', 'font-sans', 'font-bold', 'text-text-primary', 'mt-1', 'line-clamp-1', 'group-hover:text-highlight', 'transition-colors')}>{tech.role}</span>
                  </div>

                  <div className={clsx('pt-3', 'border-t', 'border-border-primary/60', 'relative', 'z-10', 'flex', 'flex-col', 'justify-end')}>
                    <span className={clsx('block', 'text-sm', 'font-black', 'text-text-primary', 'tracking-tight', 'font-display')}>{tech.name}</span>
                    <div className={clsx('flex', 'justify-between', 'items-center', 'mt-1')}>
                      <span className={clsx('text-[9px]', 'text-text-muted', 'font-mono', 'truncate')}>{tech.category}</span>

                      {/* <span className={clsx('text-[8px]', 'font-mono', 'text-highlight', 'bg-highlight/10', 'px-1.5', 'py-0.25', 'rounded-sm')}>PROD</span> */}
                    </div>
                  </div>
                </div>
              ))}
            </VelocityScroll>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS BENTO GRID */}
      <section className={clsx('py-12', 'lg:py-20', 'bg-bg-secondary/10', 'border-t', 'border-border-primary', 'relative', 'overflow-hidden')}>

        {/* Subtle Decorative Lights */}
        <div className={clsx('absolute', 'top-1/4', 'left-10', 'w-96', 'h-96', 'bg-accent/5', 'rounded-full', 'blur-[120px]', 'pointer-events-none', '-z-10', 'animate-pulse-slow')} />
        <div className={clsx('absolute', 'bottom-1/4', 'right-10', 'w-96', 'h-96', 'bg-highlight/5', 'rounded-full', 'blur-[140px]', 'pointer-events-none', '-z-10', 'animate-pulse-slow')} />

        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={clsx('text-center', 'mb-16', 'md:mb-20', 'space-y-4')}
          >
            <span className={clsx('inline-flex', 'items-center', 'gap-1.5', 'text-xs', 'uppercase', 'tracking-[0.25em]', 'font-extrabold', 'text-accent', 'bg-accent/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'border', 'border-accent/20', 'mb-6')}>
              <span className={clsx('w-1.5', 'h-1.5', 'md:w-2', 'md:h-2', 'rounded-full', 'bg-accent', 'animate-pulse')} />
              Enterprise Proof
            </span>
            <h2 className={clsx('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'lg:text-6xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight', 'leading-tight')}>
              Trusted by Engineering <span className="accent-text-gradient">Powerhouses</span>
            </h2>
            <p className={clsx('text-sm', 'sm:text-base', 'md:text-lg', 'text-text-secondary', 'max-w-xl', 'mx-auto', 'font-light', 'leading-relaxed', 'px-4', 'sm:px-0')}>
              Discover how leading global organizations partner with Quantixx Solutions to deploy resilient infrastructure, maximize conversions, and scale effortlessly.
            </p>
          </motion.div>

          {/* Desktop Testimonials Bento Grid */}
          <div className={clsx('hidden', 'md:grid', 'grid-cols-1', 'md:grid-cols-12', 'gap-6')}>
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
                  className={`${gridSpanClass} relative overflow-hidden rounded-sm p-6 sm:p-8 md:p-10 bg-bg-card/40 backdrop-blur-xl border border-white/[0.06] hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group shadow-2xl`}
                >
                  {/* Glassmorphic hover lighting tracking & grid patterns */}
                  <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-br', 'from-accent/5', 'via-transparent', 'to-highlight/5', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-700', 'pointer-events-none')} />
                  <div className={clsx('absolute', 'inset-0', 'bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.06),transparent_80%)]', 'pointer-events-none')} />

                  {/* Top Bar: Company Logo & Rating */}
                  <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'justify-between', 'items-start', 'sm:items-center', 'w-full', 'gap-4', 'relative', 'z-10')}>
                    <div className={clsx('flex', 'gap-1', 'select-none')}>
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} className={clsx('w-4', 'h-4', 'fill-current', 'text-amber-400', 'drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]')} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Brand logo tag */}
                    <div className={clsx('flex', 'items-center', 'gap-2', 'bg-bg-secondary/80', 'border', 'border-border-primary/80', 'px-3', 'py-1.5', 'rounded-sm', 'shadow-sm')}>
                      <img
                        src={`https://cdn.simpleicons.org/${t.logo}/${t.logoColor.replace('#', '')}`}
                        alt={t.company}
                        className={clsx('h-3', 'sm:h-3.5', 'object-contain', 'opacity-90', 'select-none', 'pointer-events-none')}
                      />
                      <span className={clsx('text-[9px]', 'sm:text-[10px]', 'font-mono', 'font-extrabold', 'text-text-primary', 'tracking-wider', 'uppercase')}>{t.company}</span>
                    </div>
                  </div>

                  {/* Core Quote Message */}
                  <div className={clsx('mt-6', 'sm:mt-8', 'mb-6', 'sm:mb-8', 'relative', 'z-10', 'flex-grow')}>
                    <Quote className={clsx('absolute', '-top-3', 'sm:-top-4', '-left-3', 'sm:-left-4', 'w-8', 'h-8', 'sm:w-12', 'sm:h-12', 'text-accent/5', '-z-10', 'rotate-180')} />
                    <p className={clsx('text-sm', 'sm:text-base', 'lg:text-lg', 'text-text-primary/95', 'leading-relaxed', 'font-sans', 'font-medium', 'tracking-tight')}>
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Metrics Dashboard Widget inside card */}
                  <div className={clsx('mb-6', 'p-3', 'sm:p-4', 'rounded-sm', 'bg-bg-secondary/40', 'border', 'border-border-primary/50', 'flex', 'items-center', 'justify-between', 'relative', 'z-10', 'group-hover:border-accent/20', 'transition-all', 'duration-300')}>
                    <div>
                      <span className={clsx('block', 'text-[8px]', 'sm:text-[9px]', 'font-mono', 'text-text-secondary/70', 'uppercase', 'tracking-widest')}>{t.metricLabel}</span>
                      <span className={clsx('block', 'text-xl', 'sm:text-2xl', 'md:text-3xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight', 'mt-0.5')}>{t.metric}</span>
                    </div>
                    <div className={clsx('h-6', 'sm:h-8', 'w-[1px]', 'bg-border-primary')} />
                    <div className="text-right">
                      <span className={clsx('block', 'text-[7px]', 'sm:text-[8px]', 'font-mono', 'text-emerald-500', 'uppercase', 'tracking-widest', 'bg-emerald-500/10', 'px-2', 'py-1', 'sm:px-2.5', 'rounded-sm', 'font-bold')}>
                        {t.metricStatus}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Bar: Profile details & Verified stamp */}
                  <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'justify-between', 'items-start', 'sm:items-center', 'pt-5', 'sm:pt-6', 'border-t', 'border-border-primary/60', 'gap-4', 'relative', 'z-10')}>
                    <div className={clsx('flex', 'items-center', 'gap-3')}>
                      <div className={clsx('w-8', 'h-8', 'sm:w-10', 'sm:h-10', 'rounded-sm', 'bg-gradient-to-tr', 'from-accent', 'to-highlight', 'flex', 'items-center', 'justify-center', 'font-display', 'font-black', 'text-[10px]', 'sm:text-xs', 'text-white', 'shadow-[0_0_12px_rgba(124,58,237,0.3)]', 'select-none')}>
                        {t.avatar}
                      </div>
                      <div className="text-left">
                        <span className={clsx('block', 'text-[11px]', 'sm:text-xs', 'font-bold', 'text-text-primary', 'tracking-tight')}>{t.author}</span>
                        <span className={clsx('block', 'text-[9px]', 'sm:text-[10px]', 'text-text-secondary', 'mt-0.5', 'font-mono')}>{t.role}</span>
                      </div>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Mobile Testimonials 3D Card Deck */}
          <div className={clsx('block', 'md:hidden', 'w-full', 'max-w-[340px]', 'mx-auto', 'pb-10')}>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Pagination, Autoplay]}
              rewind={true}
              observer={true}
              observeParents={true}
              cardsEffect={{
                slideShadows: false,
                perSlideOffset: 10,
                perSlideRotate: 3,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: '.testimonials-deck-pagination',
                type: 'bullets',
              }}
              className={clsx('testimonials-cards-swiper', 'w-full', 'aspect-auto')}
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={`mobile-test-${idx}`} className="h-auto">
                  <div className={clsx('relative', 'overflow-hidden', 'rounded-lg', 'p-6', 'bg-bg-primary', 'border', 'border-border-primary', 'shadow-2xl', 'flex', 'flex-col', 'justify-between', 'h-full', 'w-full')}>

                    {/* Top Bar: Company Logo & Rating */}
                    <div className={clsx('flex', 'justify-between', 'items-start', 'w-full', 'gap-4', 'relative', 'z-10', 'mb-6')}>
                      <div className={clsx('flex', 'gap-1', 'select-none')}>
                        {[...Array(t.rating)].map((_, i) => (
                          <svg key={i} className={clsx('w-4', 'h-4', 'fill-current', 'text-amber-400', 'drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]')} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Brand logo tag */}
                      <div className={clsx('flex', 'items-center', 'gap-2', 'bg-bg-secondary/80', 'border', 'border-border-primary/80', 'px-3', 'py-1.5', 'rounded-sm', 'shadow-sm')}>
                        <img
                          src={`https://cdn.simpleicons.org/${t.logo}/${t.logoColor.replace('#', '')}`}
                          alt={t.company}
                          className={clsx('h-3', 'object-contain', 'opacity-90', 'select-none', 'pointer-events-none')}
                        />
                        <span className={clsx('text-[9px]', 'font-mono', 'font-extrabold', 'text-text-primary', 'tracking-wider', 'uppercase')}>{t.company}</span>
                      </div>
                    </div>

                    {/* Core Quote Message */}
                    <div className={clsx('mb-6', 'relative', 'z-10', 'flex-grow')}>
                      <Quote className={clsx('absolute', '-top-3', '-left-3', 'w-8', 'h-8', 'text-accent/10', '-z-10', 'rotate-180')} />
                      <p className={clsx('text-sm', 'text-text-primary/95', 'leading-relaxed', 'font-sans', 'font-medium', 'tracking-tight')}>
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Metrics Dashboard Widget inside card */}
                    <div className={clsx('mb-6', 'p-3', 'rounded-sm', 'bg-bg-secondary/40', 'border', 'border-border-primary/50', 'flex', 'items-center', 'justify-between', 'relative', 'z-10')}>
                      <div>
                        <span className={clsx('block', 'text-[8px]', 'font-mono', 'text-text-secondary/70', 'uppercase', 'tracking-widest')}>{t.metricLabel}</span>
                        <span className={clsx('block', 'text-xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight', 'mt-0.5')}>{t.metric}</span>
                      </div>
                      <div className={clsx('h-6', 'w-[1px]', 'bg-border-primary')} />
                      <div className="text-right">
                        <span className={clsx('block', 'text-[7px]', 'font-mono', 'text-emerald-500', 'uppercase', 'tracking-widest', 'bg-emerald-500/10', 'px-2', 'py-1', 'rounded-sm', 'font-bold')}>
                          {t.metricStatus}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Bar: Profile details & Verified stamp */}
                    <div className={clsx('flex', 'justify-between', 'items-center', 'pt-5', 'border-t', 'border-border-primary/60', 'gap-2', 'relative', 'z-10')}>
                      <div className={clsx('flex', 'items-center', 'gap-3')}>
                        <div className={clsx('w-8', 'h-8', 'rounded-sm', 'bg-gradient-to-tr', 'from-accent', 'to-highlight', 'flex', 'items-center', 'justify-center', 'font-display', 'font-black', 'text-[10px]', 'text-white', 'shadow-[0_0_12px_rgba(124,58,237,0.3)]', 'select-none')}>
                          {t.avatar}
                        </div>
                        <div className="text-left">
                          <span className={clsx('block', 'text-[11px]', 'font-bold', 'text-text-primary', 'tracking-tight')}>{t.author}</span>
                          <span className={clsx('block', 'text-[9px]', 'text-text-secondary', 'mt-0.5', 'font-mono')}>{t.role}</span>
                        </div>
                      </div>

                      {/* Audit stamp */}
                      <div className={clsx('text-[8px]', 'font-mono', 'text-text-muted', 'select-none', 'flex', 'items-center', 'gap-1')}>
                        <span className={clsx('w-1', 'h-1', 'rounded-full', 'bg-emerald-500', 'animate-ping')} />
                        {t.verifiedDate.split('//')[0].trim()}
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={clsx('testimonials-deck-pagination', 'flex', 'gap-2', 'justify-center', 'w-full', 'mt-6', '[&_.swiper-pagination-bullet]:w-1.5', '[&_.swiper-pagination-bullet]:h-1.5', '[&_.swiper-pagination-bullet]:rounded-full', '[&_.swiper-pagination-bullet]:bg-text-muted', '[&_.swiper-pagination-bullet]:opacity-40', '[&_.swiper-pagination-bullet]:transition-all', '[&_.swiper-pagination-bullet-active]:opacity-100', '[&_.swiper-pagination-bullet-active]:bg-text-primary')} />

            {/* Subtle User Hint */}
            <div className={clsx('mt-4', 'flex', 'items-center', 'justify-center', 'text-text-muted', 'opacity-50')}>
              <span className={clsx('text-[9px]', 'font-mono', 'uppercase', 'tracking-[0.25em]')}>Swipe to explore</span>
            </div>
          </div>
        </div>
      </section>


      {/* BOTTOM CTA */}
      <section className={clsx('py-12', 'lg:py-20', 'px-4', 'sm:px-6', 'lg:px-8', 'max-w-7xl', 'mx-auto', 'relative', 'z-10')}>
        <div className={clsx('relative', 'overflow-hidden', 'rounded-sm', 'border', 'border-border-primary', 'bg-bg-card/20', 'backdrop-blur-xl', 'p-5', 'sm:p-10', 'lg:p-16', 'text-left', 'max-w-6xl', 'mx-auto', 'shadow-[0_30px_80px_var(--shadow-heavy)]', 'group')}>

          {/* background glows */}
          <div className={clsx('absolute', 'top-0', 'left-0', 'w-96', 'h-96', 'bg-accent/10', 'rounded-full', 'blur-[120px]', 'pointer-events-none', '-z-10', 'animate-pulse-slow')} />
          <div className={clsx('absolute', 'bottom-0', 'right-0', 'w-96', 'h-96', 'bg-highlight/10', 'rounded-full', 'blur-[120px]', 'pointer-events-none', '-z-10', 'animate-pulse-slow')} />

          {/* Grid visual overlay */}
          <div className={clsx('absolute', 'inset-0', 'bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)]', 'bg-[size:40px_40px]', '[mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]', 'pointer-events-none', 'opacity-40')} />

          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-12', 'items-center', 'relative', 'z-10')}>

            {/* Left Column: Core pitch and trust metrics */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className={clsx('lg:col-span-7', 'space-y-6', 'text-left')}
            >
              <span className={clsx('inline-flex', 'items-center', 'gap-1.5', 'text-xs', 'uppercase', 'tracking-[0.25em]', 'font-extrabold', 'text-highlight', 'bg-highlight/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'border', 'border-highlight/20', 'mb-6')}>
                <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-highlight', 'animate-pulse')} />
                Let's Collaborate
              </span>
              <h2 className={clsx('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'lg:text-6xl', 'font-display', 'font-extrabold', 'text-text-primary', 'leading-tight', 'tracking-tight')}>
                Ready to Build Your Next <span className="accent-text-gradient">Digital Product</span>?
              </h2>
              <p className={clsx('text-text-secondary', 'text-sm', 'sm:text-base', 'md:text-lg', 'max-w-xl', 'mx-auto', 'lg:mx-0', 'leading-relaxed', 'font-sans', 'font-light')}>
                Connect with our solution architects today. We will review your project requirements, audit your current infrastructure, and present a comprehensive technical blueprint at zero initial cost.
              </p>

              {/* Trust & SLA Badges */}
              <div className={clsx('grid', 'grid-cols-3', 'gap-2', 'sm:gap-6', 'pt-6', 'border-t', 'border-border-primary/60', 'text-left')}>
                <div>
                  <span className={clsx('block', 'text-[8px]', 'sm:text-[10px]', 'font-mono', 'text-text-secondary/60', 'uppercase', 'tracking-widest')}>SLA RESPONSE</span>
                  <span className={clsx('block', 'text-base', 'sm:text-xl', 'md:text-2xl', 'font-display', 'font-bold', 'text-text-primary', 'mt-1')}>&lt; 4 Hours</span>
                </div>
                <div>
                  <span className={clsx('block', 'text-[8px]', 'sm:text-[10px]', 'font-mono', 'text-text-secondary/60', 'uppercase', 'tracking-widest')}>DELIVERY</span>
                  <span className={clsx('block', 'text-base', 'sm:text-xl', 'md:text-2xl', 'font-display', 'font-bold', 'text-text-primary', 'mt-1')}>48 Hours</span>
                </div>
                <div>
                  <span className={clsx('block', 'text-[8px]', 'sm:text-[10px]', 'font-mono', 'text-text-secondary/60', 'uppercase', 'tracking-widest')}>RATING</span>
                  <span className={clsx('block', 'text-base', 'sm:text-xl', 'md:text-2xl', 'font-display', 'font-bold', 'text-emerald-400', 'mt-1')}>4.98/5.0</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Project Initialization Widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className={clsx('glass-card', 'rounded-sm', 'p-5', 'sm:p-8', 'border-white/[0.08]', 'shadow-2xl', 'relative', 'overflow-hidden', 'flex', 'flex-col', 'justify-between')}>

                {/* Visual border light glow */}
                <div className={clsx('absolute', 'top-0', 'left-0', 'w-8', 'h-8', 'border-t-2', 'border-l-2', 'border-accent/40', 'rounded-sm-tl-lg')} />
                <div className={clsx('absolute', 'bottom-0', 'right-0', 'w-8', 'h-8', 'border-b-2', 'border-r-2', 'border-highlight/40', 'rounded-sm-br-lg')} />

                <div className="mb-6">
                  <span className={clsx('text-[9px]', 'sm:text-[10px]', 'font-mono', 'text-text-secondary/80', 'uppercase', 'tracking-widest', 'block', 'mb-3', 'text-left')}>Select Project Category</span>
                  <div className={clsx('grid', 'grid-cols-2', 'gap-2', 'sm:gap-3')}>
                    {[
                      { id: 'saas', label: 'SaaS Platform', color: 'accent' },
                      { id: 'mobile', label: 'Mobile Apps', color: 'highlight' },
                      { id: 'infra', label: 'Cloud Systems', color: 'accent' },
                      { id: 'ai', label: 'AI & Automation', color: 'highlight' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setCtaCategory(tab.id)}
                        className={`p-3 sm:px-4 sm:py-3.5 rounded-sm text-[10px] sm:text-xs font-bold text-left transition-all duration-300 border flex flex-col justify-between h-auto min-h-[64px] sm:min-h-0 sm:h-24 items-start relative overflow-hidden cursor-pointer ${ctaCategory === tab.id
                          ? 'bg-accent border-accent text-white shadow-[0_0_15px_rgba(124,58,237,0.35)]'
                          : 'bg-bg-secondary/40 border-border-primary/80 text-text-secondary hover:text-text-primary hover:border-border-hover'
                          }`}
                      >
                        <span className={clsx('block', 'leading-tight')}>{tab.label}</span>
                        <div className={clsx('flex', 'justify-between', 'items-center', 'w-full', 'mt-2', 'gap-2')}>
                          <span className={clsx('text-[8px]', 'font-mono', 'opacity-60', 'hidden', 'sm:block')}>
                            {tab.id === 'saas' && 'React / Node.js'}
                            {tab.id === 'mobile' && 'React Native'}
                            {tab.id === 'infra' && 'AWS / K8s'}
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
                  className={clsx('w-full', 'py-3.5', 'sm:py-4', 'rounded-sm', 'text-xs', 'sm:text-sm', 'font-bold', 'bg-accent', 'hover:bg-accent-hover', 'text-white', 'shadow-[0_0_20px_var(--accent-glow)]', 'transition-all', 'cursor-pointer', 'transform', 'hover:-translate-y-0.5', 'text-center', 'flex', 'items-center', 'justify-center', 'gap-2', 'group/btn')}
                >
                  Book Priority Consultation
                  <ArrowRight className={clsx('w-4', 'h-4', 'group-hover/btn:translate-x-1', 'transition-transform')} />
                </button>

                <div className={clsx('mt-4', 'text-center')}>
                  <span className={clsx('text-[10px]', 'text-text-muted', 'font-mono')}>
                    Or direct email: <a href="mailto:info@quantixx.solutions" className={clsx('text-highlight', 'hover:underline')}>info@quantixx.solutions</a>
                  </span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
