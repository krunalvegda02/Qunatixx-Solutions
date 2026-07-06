import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText } from '../components/animations/AnimatedText';
import { AnimatedSubText } from '../components/animations/AnimatedSubText';
import { Target, Shield, Users, Flame, Cpu, ArrowUpRight, CheckCircle2, ShieldAlert, MessageSquare, Key, RefreshCw, Terminal, Globe, Zap, Sparkles } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import clsx from 'clsx';

export default function About() {
  const { openModal } = useModal();

  const values = [
    { title: 'Built to Last', desc: 'We create clean, reliable software that grows alongside your business and never leaves you stranded.', icon: Cpu },
    { title: 'Clear Communication', desc: 'No guesswork or hidden fees. You get simple daily updates and a direct line to the people actually building your project.', icon: MessageSquare },
    { title: 'Safe & Secure', desc: 'We take your data seriously. We build top-tier security into everything we do from day one, so you can sleep easy.', icon: Key },
    { title: 'True Partnership', desc: "We don't just write code; we partner with you. You will work directly with our friendly experts to turn your vision into reality.", icon: Users },
  ];

  const playbook = [
    { step: '01', title: 'Discovery & NDA', desc: 'We start by signing an NDA to ensure your ideas are fully protected. From there, we take the time to understand your vision and provide a clear, tailored technical roadmap at no cost.' },
    { step: '02', title: 'Direct Collaboration', desc: 'You work directly with the senior engineers building your product. We eliminate middlemen and account managers so you always get clear, immediate answers about your project.' },
    { step: '03', title: 'Transparent Development', desc: 'We build your software in rapid, interactive stages. You get live access to test and review your product as it comes to life, ensuring the final result perfectly matches your expectations.' },
    { step: '04', title: 'Complete Ownership', desc: 'When we launch, you retain 100% ownership of your intellectual property. We hand over all source code, servers, and assets—guaranteeing zero vendor lock-in, ever.' }
  ];

  const leadership = [
    {
      name: 'Krunal Vegda',
      role: 'Co-Founder & CTO',
      bio: 'As the technical architect behind Quantixx, Krunal ensures every digital product we build is highly secure, exceptionally fast, and engineered to scale seamlessly. From complex cloud infrastructures to robust full-stack applications, he transforms technical complexity into flawless, reliable performance.',
      photo: '/krunal_vegda.png',
      initial: 'KV',
      accentColor: 'rose',
      themeGradient: 'from-[#E11D48]/20 via-[#E11D48]/5 to-transparent',
      quote: "Technology should never be a friction point. It should be the invisible engine that effortlessly powers your growth.",
      focus: ["Cloud Infrastructure", "Full-Stack Architecture", "System Scalability", "Technical Leadership"],
      stats: [
        { label: 'Infrastructure', value: 'Cloud Native' },
        { label: 'Development', value: 'Full-Stack' },
        { label: 'Expertise', value: 'Tech Leadership' }
      ]
    },
    {
      name: 'Abhishek Sharma',
      role: 'Co-Founder & CEO',
      bio: 'Abhishek bridges the critical gap between high-level business strategy and technical execution. With a specialized focus on Laravel, .NET, and intelligent automation, he designs AI-driven solutions that eliminate operational friction and accelerate your business growth.',
      photo: '/abhishek_sharma.png',
      initial: 'AS',
      accentColor: 'cyan',
      themeGradient: 'from-[#0EA5E9]/20 via-[#0EA5E9]/5 to-transparent',
      quote: "True digital transformation isn't just about writing code—it's about engineering strategic leverage that redefines how your business scales.",
      focus: ["AI & Automation Strategy", "Laravel Architecture", ".NET Enterprise Solutions", "Full-Stack Development"],
      stats: [
        { label: 'Focus Area', value: 'AI / Automation' },
        { label: 'Core Stack', value: 'Laravel / .NET' },
        { label: 'Expertise', value: 'Enterprise Strategy' }
      ]
    }
  ];

  return (
    <div className={clsx('relative', 'overflow-hidden', 'bg-bg-primary', 'text-text-primary', 'theme-transition', 'bg-grid-tech', 'pt-28', 'pb-16', 'min-h-screen')}>

      {/* Ambient background glows */}
      <div className={clsx('absolute', 'top-[8%]', 'right-[-12%]', 'w-[500px]', 'h-[500px]', 'bg-gradient-to-br', 'from-accent/5', 'to-highlight/5', 'rounded-full', 'blur-[140px]', 'pointer-events-none', '-z-10', 'animate-pulse-slow')} />
      <div className={clsx('absolute', 'top-[45%]', 'left-[-15%]', 'w-[600px]', 'h-[600px]', 'bg-gradient-to-tr', 'from-highlight/5', 'to-accent/5', 'rounded-full', 'blur-[150px]', 'pointer-events-none', '-z-10')} />

      {/* 1. HERO HEADER FOLD */}
      {/* 1. HERO HEADER FOLD */}
      <div className={clsx('relative', 'w-full', 'bg-gradient-to-b', 'from-bg-primary', 'to-bg-secondary/30', 'pt-14', 'pb-32', 'sm:pb-48', 'border-b', 'border-border-primary/50')}>
        <div className={clsx('absolute', 'bottom-0', 'left-1/2', '-translate-x-1/2', 'w-3/4', 'h-[1px]', 'bg-gradient-to-r', 'from-transparent', 'via-accent/40', 'to-transparent')} />
        <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'text-left', 'sm:text-center', 'relative', 'z-10')}>
          <span className={clsx('inline-flex', 'items-center', 'gap-2', 'px-4', 'py-1.5', 'rounded-full', 'bg-white/[0.03]', 'border', 'border-white/[0.08]', 'text-sm', 'uppercase', 'tracking-[0.2em]', 'font-extrabold', 'text-accent', 'font-mono', 'mb-6', 'backdrop-blur-md')}>
            <Globe size={14} className={clsx('text-highlight', 'animate-pulse')} />
            Company Profile
          </span>
          <AnimatedText 
            as="h1"
            segments={[
              { text: "Your Dedicated Team of " },
              { text: "Software Engineering Partners", className: "accent-text-gradient" }
            ]}
            className={clsx('text-4xl', 'sm:text-5xl', 'lg:text-6xl', 'font-display', 'font-extrabold', 'text-text-primary', 'mt-4', 'max-w-4xl', 'sm:mx-auto', 'leading-tight', 'tracking-tight', 'text-balance')}
          />
          <AnimatedSubText 
            text="We are a friendly team of software experts dedicated to turning your ideas into beautiful, easy-to-use digital tools. We prioritize your success and peace of mind above everything else."
            className={clsx('text-sm', 'sm:text-base', 'text-text-secondary', 'max-w-2xl', 'sm:mx-auto', 'mt-5', 'leading-relaxed', 'font-light', 'font-sans', 'text-balance', 'text-left', 'sm:text-center')}
          />
        </section>
      </div>

      {/* MINIMALIST PREMIUM B2B BLOCK (Overlap) */}
      <div className={clsx('relative', 'w-full', 'px-4', 'sm:px-6', 'lg:px-8', 'max-w-6xl', 'mx-auto', 'z-20', '-mt-16', 'sm:-mt-20', 'mb-16', 'sm:mb-24')}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'bg-bg-card', 'border', 'border-border-primary', 'rounded-2xl', 'shadow-sm', 'overflow-hidden')}
        >
          
          {/* Left Block */}
          <div className={clsx('p-8', 'md:p-12', 'border-b', 'md:border-b-0', 'md:border-r', 'border-border-primary', 'flex', 'flex-col', 'justify-start', 'space-y-6', 'group')}>
            <div className={clsx('flex', 'items-center', 'gap-3')}>
              <Sparkles size={12} className="text-highlight animate-pulse" />
              <span className={clsx('text-[10px]', 'font-mono', 'font-semibold', 'tracking-[0.15em]', 'text-highlight', 'uppercase')}>Limited Availability</span>
            </div>
            
            <div className="space-y-4">
              <h3 className={clsx('text-2xl', 'sm:text-3xl', 'font-display', 'font-medium', 'text-text-primary', 'tracking-tight', 'leading-snug')}>
                Accepting new client partners.
              </h3>
              <p className={clsx('text-sm', 'text-text-secondary', 'font-sans', 'leading-relaxed', 'font-light')}>
                We keep our team focused so that every client gets our direct, undivided attention from start to finish.
              </p>
            </div>
          </div>

          {/* Right Block */}
          <div className={clsx('p-8', 'md:p-12', 'flex', 'flex-col', 'justify-start', 'space-y-6')}>
            <div className={clsx('flex', 'items-center', 'gap-3')}>
              <MessageSquare size={12} className="text-text-muted" />
              <span className={clsx('text-[10px]', 'font-mono', 'font-semibold', 'tracking-[0.15em]', 'text-text-muted', 'uppercase')}>Direct Communication</span>
            </div>
            
            <div className="space-y-4">
              <h3 className={clsx('text-2xl', 'sm:text-3xl', 'font-display', 'font-medium', 'text-text-primary', 'tracking-tight', 'leading-snug')}>
                No middle-men. <br className={clsx('hidden', 'lg:block')}/>Just engineers.
              </h3>
              <p className={clsx('text-sm', 'text-text-secondary', 'font-sans', 'leading-relaxed', 'font-light')}>
                We don't use account managers. When you partner with us, you speak directly to the senior developers who are actively writing your code.
              </p>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Story & Philosophy Section */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-12', 'lg:py-16', 'font-sans', 'relative', 'z-10')}>
        <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-12', 'items-center')}>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={clsx('text-left', 'space-y-6')}
          >
            <h2 className={clsx('text-2xl', 'sm:text-3xl', 'font-display', 'font-bold', 'text-text-primary')}>Our Story & Core Philosophy</h2>
            <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
              We founded Quantixx to solve the biggest frustrations in product development: unreliable communication, hidden fees, and poorly built software. By eliminating middlemen, we ensure you work directly with the experts building your product, saving you time, money, and frustration.
            </p>
            <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
              We focus entirely on delivering high-quality software and maintaining complete transparency with you every step of the way. When you succeed, we succeed.
            </p>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={clsx('bg-bg-secondary/60', 'border', 'border-border-primary', 'rounded-xl', 'p-4.5', 'flex', 'gap-4', 'items-center', 'backdrop-blur-sm', 'cursor-pointer')}
            >
              <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-accent/10', 'text-accent', 'flex', 'items-center', 'justify-center', 'shrink-0')}>
                <Flame size={18} />
              </div>
              <span className={clsx('text-xs', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                "Our mission is simple: design and engineer software that solves your most complex problems, operates securely, and helps your business thrive."
              </span>
            </motion.div>
          </motion.div>

          {/* Mission & Vision cards */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={clsx('bg-bg-card', 'border', 'border-border-primary', 'rounded-2xl', 'p-6', 'text-left', 'relative', 'overflow-hidden', 'group', 'hover:border-accent/40', 'transition-colors', 'duration-300', 'shadow-sm', 'hover:shadow-[0_10px_30px_rgba(var(--color-accent-rgb),0.1)]', 'cursor-pointer')}
            >
              <div className={clsx('absolute', 'top-0', 'right-0', 'w-24', 'h-24', 'bg-accent/5', 'rounded-bl-full', 'pointer-events-none', 'group-hover:bg-accent/8', 'transition-colors')} />
              <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-accent/10', 'text-accent', 'flex', 'items-center', 'justify-center', 'mb-4', 'group-hover:scale-110', 'transition-transform')}><Target size={20} /></div>
              <h3 className={clsx('text-lg', 'font-bold', 'text-text-primary', 'mb-2', 'font-display')}>Our Mission</h3>
              <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                To build robust, intuitive software solutions that solve your biggest operational challenges, secure your data, and help your business grow faster.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={clsx('bg-bg-card', 'border', 'border-border-primary', 'rounded-2xl', 'p-6', 'text-left', 'relative', 'overflow-hidden', 'group', 'hover:border-highlight/40', 'transition-colors', 'duration-300', 'shadow-sm', 'hover:shadow-[0_10px_30px_rgba(var(--color-highlight-rgb),0.1)]', 'cursor-pointer')}
            >
              <div className={clsx('absolute', 'top-0', 'right-0', 'w-24', 'h-24', 'bg-highlight/5', 'rounded-bl-full', 'pointer-events-none', 'group-hover:bg-highlight/8', 'transition-colors')} />
              <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-highlight/10', 'text-highlight', 'flex', 'items-center', 'justify-center', 'mb-4', 'group-hover:scale-110', 'transition-transform')}><Shield size={20} /></div>
              <h3 className={clsx('text-lg', 'font-bold', 'text-text-primary', 'mb-2', 'font-display')}>Our Vision</h3>
              <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                To be the most trusted technology partner for businesses worldwide, known for our technical excellence, transparent communication, and unwavering commitment to client success.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className={clsx('py-12', 'lg:py-20', 'bg-bg-secondary/40', 'border-y', 'border-border-primary', 'relative', 'z-10', 'backdrop-blur-sm')}>
        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'text-center')}>
          <div className="mb-16">
            <span className={clsx('text-xs', 'uppercase', 'tracking-wider', 'font-semibold', 'text-accent', 'font-mono')}>Commitment</span>
            <h2 className={clsx('text-3xl', 'font-display', 'font-bold', 'text-text-primary', 'mt-2')}>Our Code of Values</h2>
            <p className={clsx('text-sm', 'text-text-secondary', 'mt-2', 'font-sans', 'font-light')}>These guidelines dictate how we write files, coordinate sprints, and interface with partners.</p>
          </div>

          <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-6', 'text-left', 'font-sans')}>
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={clsx('bg-bg-card', 'border', 'border-border-primary', 'hover:border-accent/30', 'rounded-2xl', 'p-6', 'sm:p-8', 'transition-colors', 'duration-300', 'group', 'shadow-sm', 'hover:shadow-[0_15px_30px_rgba(var(--color-accent-rgb),0.1)]', 'cursor-pointer')}
                >
                  <div className={clsx('w-12', 'h-12', 'rounded-xl', 'bg-bg-secondary', 'flex', 'items-center', 'justify-center', 'text-accent', 'mb-5', 'border', 'border-border-primary', 'group-hover:border-accent/40', 'group-hover:bg-accent/10', 'transition-colors')}><Icon size={20} /></div>
                  <h3 className={clsx('text-lg', 'font-bold', 'text-text-primary', 'mb-3', 'font-display')}>{val.title}</h3>
                  <p className={clsx('text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Guarantees Playbook */}
      <div className={clsx('w-full', 'bg-bg-secondary/40', 'border-y', 'border-border-primary/50', 'relative', 'overflow-hidden', 'mt-8', 'mb-8')}>
        <div className={clsx('absolute', 'top-0', 'left-1/2', '-translate-x-1/2', 'w-[800px]', 'h-[300px]', 'bg-accent/5', 'rounded-[100%]', 'blur-[80px]', 'pointer-events-none', '-z-10')} />
        <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-12', 'lg:py-16', 'relative', 'z-10')}>
        <div className={clsx('text-center', 'mb-16')}>
          <span className={clsx('text-xs', 'uppercase', 'tracking-wider', 'font-semibold', 'text-accent', 'font-mono')}>Engagement Model</span>
          <h2 className={clsx('text-3xl', 'font-display', 'font-bold', 'text-text-primary', 'mt-2')}>How We Work with Clients</h2>
          <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'mt-2', 'font-light', 'max-w-xl', 'mx-auto')}>
            We operate under a transparent framework. Here is our client onboarding and development roadmap.
          </p>
        </div>

        {/* Playbook track */}
        <div className={clsx('relative', 'border-l', 'border-border-primary', 'pl-6', 'sm:pl-10', 'space-y-8', 'max-w-4xl', 'mx-auto', 'text-left', 'font-sans')}>
          {playbook.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={clsx('relative', 'group')}
            >
              {/* timeline node dot */}
              <div className={clsx('absolute', '-left-[31px]', 'sm:-left-[47px]', 'top-5', 'w-4', 'h-4', 'rounded-full', 'bg-bg-primary', 'border-[3px]', 'border-accent', 'group-hover:bg-accent', 'transition-colors', 'duration-300')} />
              <motion.div 
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={clsx('bg-bg-card', 'border', 'border-border-primary', 'group-hover:border-accent/40', 'p-6', 'sm:p-8', 'rounded-2xl', 'transition-colors', 'duration-300', 'shadow-sm', 'hover:shadow-md', 'cursor-pointer')}
              >
                <span className={clsx('text-xs', 'font-bold', 'font-mono', 'text-accent')}>STEP {item.step}</span>
                <h3 className={clsx('text-xl', 'font-bold', 'text-text-primary', 'mt-2', 'mb-3', 'font-display')}>{item.title}</h3>
                <p className={clsx('text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        </section>
      </div>

      {/* Leadership Section */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-12', 'lg:py-16', 'font-sans', 'relative', 'z-10')}>
        <div className={clsx('text-center', 'mb-20')}>
          <span className={clsx('text-xs', 'uppercase', 'tracking-[0.2em]', 'font-extrabold', 'text-accent', 'bg-accent/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'inline-block')}>
            Our Leadership
          </span>
          <h2 className={clsx('text-3xl', 'sm:text-4xl', 'font-display', 'font-extrabold', 'text-text-primary', 'mt-4')}>
            Direct Access to Co-Founders
          </h2>
          <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'mt-3', 'font-light', 'max-w-xl', 'mx-auto', 'leading-relaxed')}>
            We operate as active developers and architects. You interface directly with the leaders writing the code and provisioning the servers.
          </p>
        </div>

        <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-10', 'max-w-7xl', 'mx-auto')}>
          {leadership.map((lead, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={clsx('glass-card', 'border', 'border-border-primary', 'hover:border-accent/30', 'rounded-3xl', 'p-6', 'sm:p-8', 'lg:p-10', 'relative', 'overflow-hidden', 'group', 'shadow-2xl', 'transition-colors', 'duration-500', 'bg-gradient-to-br', 'from-bg-card/50', 'via-bg-card/20', 'to-transparent')}
              >
                {/* Asymmetrical background glows specific to each founder */}
                <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-96 h-96 bg-gradient-to-br ${lead.themeGradient} rounded-full blur-[100px] pointer-events-none -z-10 transition-opacity duration-500 opacity-60 group-hover:opacity-100`} />
                <div className={`absolute bottom-0 ${isEven ? 'left-1/4' : 'right-1/4'} w-72 h-72 bg-accent/4 rounded-full blur-[80px] pointer-events-none -z-10`} />

                {/* Tech grid texture in card */}
                <div className={clsx('absolute', 'inset-0', 'bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)]', 'bg-[size:24px_24px]', 'pointer-events-none', 'opacity-30', '-z-10')} />

                <div className={clsx('flex', 'flex-col', 'gap-10', 'relative', 'z-10')}>
                  {/* Portrait side */}
                  <div className={clsx('flex', 'justify-center', 'w-full')}>
                    <div className={clsx('relative', 'group/photo')}>
                      {/* Stylized Outer Glow Frame */}
                      <div className={clsx('absolute', '-inset-2', 'rounded-2xl', 'bg-gradient-to-tr', 'from-accent/20', 'to-highlight/20', 'opacity-0', 'group-hover/photo:opacity-100', 'blur-lg', 'transition', 'duration-700', '-z-10')} />

                      {/* Inner Photo Frame */}
                      <div className={clsx('w-64', 'h-64', 'sm:w-72', 'sm:h-72', 'rounded-3xl', 'overflow-hidden', 'border', 'border-white/[0.08]', 'bg-bg-secondary', 'flex', 'items-center', 'justify-center', 'relative', 'shadow-2xl', 'aspect-square')}>
                        {lead.photo ? (
                          <img
                            src={lead.photo}
                            alt={lead.name}
                            className={clsx('w-full', 'h-full', 'object-cover', 'grayscale', 'group-hover/photo:grayscale-0', 'transition-all', 'duration-700', 'scale-100', 'group-hover/photo:scale-105')}
                          />
                        ) : (
                          <span className={clsx('font-display', 'text-4xl', 'font-extrabold', 'text-text-primary')}>{lead.initial}</span>
                        )}

                        {/* Floating Status Indicator Badge */}
                        <div className={clsx('absolute', 'bottom-3', 'left-3', 'bg-bg-primary/90', 'backdrop-blur-md', 'border', 'border-white/[0.08]', 'px-3', 'py-1', 'rounded-full', 'flex', 'items-center', 'gap-1.5', 'shadow-md')}>
                          <span className={clsx('relative', 'flex', 'h-2', 'w-2')}>
                            <span className={clsx('animate-ping', 'absolute', 'inline-flex', 'h-full', 'w-full', 'rounded-full', 'bg-emerald-400', 'opacity-75')}></span>
                            <span className={clsx('relative', 'inline-flex', 'rounded-full', 'h-2', 'w-2', 'bg-emerald-500')}></span>
                          </span>
                          <span className={clsx('text-[9px]', 'font-mono', 'font-bold', 'text-text-primary', 'tracking-wider', 'uppercase')}>Active Staging</span>
                        </div>
                      </div>

                      {/* Tech Role Accent Strip */}
                      <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-lg text-[10px] font-mono font-bold tracking-widest uppercase border backdrop-blur-md shadow-lg ${lead.accentColor === 'cyan' ? 'bg-[#0EA5E9]/10 text-[#0EA5E9] border-[#0EA5E9]/20 shadow-[#0EA5E9]/5' : 'bg-[#E11D48]/10 text-[#E11D48] border-[#E11D48]/20 shadow-[#E11D48]/5'
                        }`}>
                        {lead.name === 'Abhishek Sharma' ? 'AI & Automation' : 'Cloud Architecture'}
                      </div>
                    </div>
                  </div>

                  {/* Info Details side */}
                  <div className={clsx('text-left', 'space-y-6')}>
                    <div>
                      {/* Name & Socials */}
                      <div className={clsx('flex', 'flex-wrap', 'items-center', 'gap-4', 'justify-between')}>
                        <div>
                          <h3 className={clsx('text-2xl', 'sm:text-3xl', 'font-extrabold', 'font-display', 'text-text-primary', 'tracking-tight')}>
                            {lead.name}
                          </h3>
                          <span className={clsx('text-xs', 'sm:text-sm', 'font-semibold', 'text-accent', 'font-mono', 'block', 'mt-1', 'tracking-wider', 'uppercase')}>
                            {lead.role}
                          </span>
                        </div>

                        {/* Social Icons */}
                        <div className={clsx('flex', 'gap-2')}>
                          <a
                            href="#"
                            className={clsx('w-8', 'h-8', 'rounded-full', 'border', 'border-white/[0.06]', 'hover:border-white/[0.2]', 'hover:bg-white/[0.05]', 'text-text-secondary', 'hover:text-text-primary', 'flex', 'items-center', 'justify-center', 'transition-all', 'cursor-pointer')}
                            aria-label={`${lead.name} GitHub`}
                          >
                            <Terminal size={14} />
                          </a>
                          <a
                            href="#"
                            className={clsx('w-8', 'h-8', 'rounded-full', 'border', 'border-white/[0.06]', 'hover:border-white/[0.2]', 'hover:bg-white/[0.05]', 'text-text-secondary', 'hover:text-text-primary', 'flex', 'items-center', 'justify-center', 'transition-all', 'cursor-pointer')}
                            aria-label={`${lead.name} LinkedIn`}
                          >
                            <Globe size={14} />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Specialized Bio */}
                    <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light', 'font-sans')}>
                      {lead.bio}
                    </p>

                    {/* Stylized Quote Banner */}
                    <div className={clsx('relative', 'pl-5', 'py-2', 'border-l-2', 'border-accent/40', 'bg-white/[0.01]', 'rounded-r-lg', 'pr-4', 'font-sans', 'italic', 'text-sm', 'sm:text-base', 'text-text-primary/95', 'leading-relaxed', 'font-light')}>
                      <span className={clsx('absolute', 'left-1.5', 'top-0', 'font-serif', 'text-3xl', 'text-accent/30', 'select-none')}>“</span>
                      {lead.quote}
                    </div>

                    {/* System Stats Block */}
                    <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-3', 'gap-4', 'sm:gap-6', 'bg-bg-secondary/40', 'border', 'border-border-primary/50', 'p-5', 'sm:p-6', 'rounded-xl', 'mt-6')}>
                      {lead.stats.map((stat, idx) => (
                        <div key={idx} className={clsx('space-y-1', 'sm:space-y-1.5', 'border-l-2', 'border-accent/20', 'pl-3', 'hover:border-accent/60', 'transition-colors')}>
                          <span className={clsx('text-text-muted', 'block', 'uppercase', 'tracking-widest', 'text-[10px]', 'font-mono', 'font-semibold')}>{stat.label}</span>
                          <span className={clsx('text-text-primary', 'font-display', 'font-bold', 'text-sm', 'sm:text-base', 'truncate')}>{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Focus Badges / Cards */}
                    <div className="space-y-3 mt-8">
                      <span className={clsx('text-[10px]', 'uppercase', 'tracking-[0.15em]', 'text-text-muted', 'font-mono', 'font-semibold', 'block')}>Core Focus Areas</span>
                      <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-2', 'sm:gap-3')}>
                        {lead.focus.map((foc, idx) => (
                          <div
                            key={idx}
                            className={clsx('px-4', 'py-2.5', 'rounded-lg', 'text-xs', 'sm:text-sm', 'font-sans', 'font-medium', 'text-center', 'text-text-secondary', 'border', 'border-border-primary/50', 'bg-bg-card', 'hover:bg-accent/5', 'hover:border-accent/40', 'hover:text-text-primary', 'hover:-translate-y-0.5', 'hover:shadow-lg', 'hover:shadow-accent/5', 'transition-all', 'duration-300', 'cursor-default', 'flex', 'items-center', 'justify-center')}
                          >
                            {foc}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* About CTA */}
      <section className={clsx('py-12', 'lg:py-16', 'relative', 'z-10', 'max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'w-full', 'mb-8', 'lg:mb-12')}>
        <div className={clsx('glass-card', 'border', 'border-white/[0.08]', 'rounded-xl', 'p-8', 'sm:p-12', 'shadow-2xl', 'relative', 'overflow-hidden', 'group', 'w-full', 'bg-gradient-to-br', 'from-bg-card/45', 'via-bg-card/20', 'to-accent/4', 'backdrop-blur-xl')}>
          {/* Inner ambient glows */}
          <div className={clsx('absolute', 'top-0', 'right-1/4', 'w-[350px]', 'h-[350px]', 'bg-accent/8', 'rounded-full', 'blur-[100px]', 'pointer-events-none', '-z-10', 'animate-pulse-slow')} />
          <div className={clsx('absolute', 'bottom-0', 'right-10', 'w-[250px]', 'h-[250px]', 'bg-highlight/8', 'rounded-full', 'blur-[80px]', 'pointer-events-none', '-z-10')} />

          {/* Inner Grid Visualizer */}
          <div className={clsx('absolute', 'inset-0', 'bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)]', 'bg-[size:30px_30px]', 'pointer-events-none', 'opacity-40', '-z-10')} />

          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-10', 'items-center', 'relative', 'z-10')}>
            {/* Left Column: Core Pitch */}
            <div className={clsx('lg:col-span-7', 'text-left', 'space-y-5')}>
              <span className={clsx('text-[9px]', 'font-mono', 'font-bold', 'uppercase', 'tracking-[0.2em]', 'text-accent', 'bg-accent/10', 'px-3', 'py-1.5', 'rounded-sm', 'border', 'border-accent/20', 'inline-flex', 'items-center', 'gap-1.5')}>
                <Shield size={11} className={clsx('text-highlight', 'animate-pulse')} />
                100% SECURE VIRTUAL COLLABORATION
              </span>
              <h2 className={clsx('text-3xl', 'sm:text-4xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight', 'leading-tight')}>
                Ready to Map Out <br className={clsx('hidden', 'sm:inline')} /> Your Architecture?
              </h2>
              <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'max-w-xl', 'leading-relaxed', 'font-sans', 'font-light')}>
                Connect directly with our co-founders. We will discuss your system requirements, suggest integration roadmaps, and deliver a comprehensive technical blueprint at zero initial cost.
              </p>

              {/* Trust points */}
              <div className={clsx('flex', 'flex-wrap', 'gap-x-6', 'gap-y-3', 'pt-4', 'border-t', 'border-border-primary/50', 'text-[10px]', 'sm:text-xs', 'font-mono', 'text-text-secondary')}>
                <div className={clsx('flex', 'items-center', 'gap-1.5')}>
                  <CheckCircle2 size={12} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>Free Scoping Call</span>
                </div>
                <div className={clsx('flex', 'items-center', 'gap-1.5')}>
                  <CheckCircle2 size={12} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>Direct Slack Channels</span>
                </div>
                <div className={clsx('flex', 'items-center', 'gap-1.5')}>
                  <CheckCircle2 size={12} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>Mutual NDA Signed First</span>
                </div>
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openModal}
                  className={clsx('px-6', 'py-3.5', 'rounded-xl', 'text-sm', 'font-bold', 'bg-accent', 'hover:bg-accent-hover', 'text-white', 'shadow-[0_0_20px_var(--accent-glow)]', 'transition-colors', 'duration-300', 'cursor-pointer', 'flex', 'items-center', 'gap-2', 'group')}
                >
                  <span>Request Scoping Call</span>
                  <ArrowUpRight size={14} className={clsx('group-hover:translate-x-0.5', 'group-hover:-translate-y-0.5', 'transition-transform')} />
                </motion.button>
              </div>
            </div>

            {/* Right Column: Dynamic stats / trust values */}
            <div className={clsx('lg:col-span-5', 'w-full')}>
              <div className={clsx('bg-bg-secondary/40', 'border', 'border-white/[0.05]', 'rounded-lg', 'p-6', 'sm:p-8', 'shadow-inner', 'relative', 'overflow-hidden', 'backdrop-blur-md')}>
                <span className={clsx('text-xs', 'font-mono', 'text-text-muted', 'uppercase', 'tracking-widest', 'block', 'mb-6')}>Our Guarantees</span>
                <div className={clsx('space-y-4', 'sm:space-y-5', 'text-sm', 'sm:text-base', 'text-text-secondary')}>
                  <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'sm:items-center', 'justify-between', 'gap-1', 'border-b', 'border-border-primary/40', 'pb-3')}>
                    <span className="text-text-muted">Response SLA:</span>
                    <span className={clsx('text-text-primary', 'font-semibold')}>&lt; 4 Hours</span>
                  </div>
                  <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'sm:items-center', 'justify-between', 'gap-1', 'border-b', 'border-border-primary/40', 'pb-3')}>
                    <span className="text-text-muted">Dev Channel:</span>
                    <span className={clsx('text-accent', 'font-medium')}>Direct Slack with Founders</span>
                  </div>
                  <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'sm:items-center', 'justify-between', 'gap-1', 'border-b', 'border-border-primary/40', 'pb-3')}>
                    <span className="text-text-muted">Intellectual Property:</span>
                    <span className={clsx('text-highlight', 'font-semibold')}>100% Transfer Guarantee</span>
                  </div>
                  <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'sm:items-center', 'justify-between', 'gap-1')}>
                    <span className="text-text-muted">Virtual Security:</span>
                    <span className={clsx('text-text-primary', 'font-semibold')}>VPC & Cloud Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
