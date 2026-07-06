import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText } from '../components/animations/AnimatedText';
import { AnimatedSubText } from '../components/animations/AnimatedSubText';
import { Counter } from '../components/animations/Counter';
import {
  Filter, Calendar, BarChart3, Settings, ShieldCheck, ArrowUpRight, X, Clock,
  HelpCircle, Lightbulb, CheckCircle2, Search, Cpu, Database, Terminal,
  Activity, Sparkles, TrendingUp, Target
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import clsx from 'clsx';
import { portfolioProjects } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};


const MediaViewer = ({ media, title }) => {
  if (!media) return (
    <div className="w-full h-full bg-bg-secondary flex items-center justify-center border border-border-primary rounded-lg overflow-hidden">
      <span className="text-text-muted font-mono text-xs">NO MEDIA UPLOADED</span>
    </div>
  );

  return (
    <div className="w-full h-full border border-border-primary rounded-lg overflow-hidden relative group bg-bg-secondary flex items-center justify-center">
      {media.type === 'video' ? (
        <video 
          src={media.url} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          poster={media.fallbackImage}
        />
      ) : (
        <img 
          src={media.url} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          onError={(e) => {
             e.target.style.display = 'none';
             e.target.nextSibling.style.display = 'flex';
          }}
        />
      )}
      <div className="absolute inset-0 bg-bg-secondary hidden items-center justify-center pointer-events-none">
          <span className="text-text-muted font-mono text-[10px]">MEDIA NOT FOUND</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

export default function Portfolio() {
  const { openModal } = useModal();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);


  const filters = ['All', 'Web Apps', 'Mobile Apps', 'Automation', 'Cloud', 'Enterprise', 'SaaS'];

  const getFilterCount = (filter) => {
    if (filter === 'All') return projects.length;
    return projects.filter(p => p.category.includes(filter)).length;
  };

  const projects = portfolioProjects;

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'All' || project.category.includes(selectedFilter);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.impact.some(imp => imp.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.results.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Auto-focus cards on mobile when they scroll into the center of the viewport
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cards = document.querySelectorAll('.portfolio-card');
          let closestCard = null;
          let minDistance = Infinity;
          const centerY = window.innerHeight / 2;

          cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            // Calculate center of the card
            const cardCenterY = rect.top + rect.height / 2;
            const distance = Math.abs(centerY - cardCenterY);

            if (distance < minDistance) {
              minDistance = distance;
              closestCard = card.getAttribute('data-id');
            }
          });

          // Focus the closest card if it's reasonably close to the center
          if (closestCard && minDistance < window.innerHeight * 0.35) {
            setHoveredCard(closestCard);
          } else {
            setHoveredCard(null);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [filteredProjects]);

  return (
    <motion.div
      className={clsx('relative', 'overflow-hidden', 'bg-bg-primary', 'text-text-primary', 'theme-transition', 'pt-28', 'pb-0', 'min-h-screen')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      {/* ── PROFESSIONAL HERO ── */}
      <section className={clsx('relative', 'pt-16', 'pb-12', 'lg:pt-20', 'lg:pb-12', 'overflow-hidden', 'border-b', 'border-border-primary/50', 'bg-bg-secondary/20')}>
        
        {/* Animated grid background */}
        <motion.div
          className={clsx('absolute', 'inset-0', 'opacity-[0.03]')}
          style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
        />
        
        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'relative', 'z-10', 'text-center')}>

          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className={clsx('inline-flex', 'items-center', 'justify-center', 'gap-2', 'px-4', 'py-1.5', 'text-xs', 'font-bold', 'uppercase', 'tracking-widest', 'text-text-secondary', 'border', 'border-border-primary', 'rounded-full', 'bg-bg-primary', 'mb-8', 'shadow-sm')}>
              <Target size={14} className="text-highlight" />
              Case Studies
            </span>
          </motion.div>

          {/* H1 — word-by-word reveal */}
          <motion.h1
            className={clsx('text-4xl', 'md:text-5xl', 'lg:text-7xl', 'font-display', 'font-extrabold', 'text-text-primary', 'leading-tight', 'tracking-tight', 'max-w-5xl', 'mx-auto')}
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Success Stories Built for <br className={clsx('hidden', 'md:block')} />
            <motion.span
              className="text-accent"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Real Business Impact.
            </motion.span>
          </motion.h1>

          <motion.p
            className={clsx('text-lg', 'sm:text-xl', 'text-text-secondary', 'max-w-3xl', 'mx-auto', 'mt-8', 'leading-relaxed')}
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Explore the real business outcomes and measurable growth behind our successful client partnerships.
          </motion.p>
        </div>
      </section>
      {/* Search & Filter Controls Panel */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-6', 'lg:py-10')}>
        <div className={clsx('flex', 'flex-col', 'lg:flex-row', 'gap-5', 'justify-between', 'items-center', 'bg-bg-card/40', 'backdrop-blur-xl', 'p-4', 'rounded-2xl', 'border', 'border-border-primary', 'shadow-lg')}>
          {/* Filters List */}
          <div className={clsx('flex', 'flex-wrap', 'gap-2', 'justify-start', 'w-full', 'lg:w-auto')}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setSelectedFilter(filter);
                  if (window.innerWidth < 1024) {
                    setTimeout(() => {
                      const grid = document.getElementById('projects-grid');
                      if (grid) {
                        if (window.lenis) {
                          window.lenis.scrollTo(grid, { offset: -180, duration: 2 });
                        } else {
                          const y = grid.getBoundingClientRect().top + window.scrollY - 180;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }
                    }, 50);
                  }
                }}
                className={`flex-1 justify-center px-3 py-1.5 text-xs font-mono font-bold rounded-md border transition-all cursor-pointer select-none flex items-center gap-1.5 shadow-sm ${selectedFilter === filter
                    ? 'border-accent bg-accent/10 text-text-primary shadow-[0_0_12px_var(--accent-glow)]'
                    : 'border-border-primary bg-bg-secondary/40 text-text-secondary hover:text-text-primary hover:border-border-hover'
                  }`}
              >
                <span>{filter}</span>
                <span className={clsx('text-[9px]', 'opacity-60', 'bg-bg-primary/60', 'px-1.5', 'py-0.25', 'rounded-full', 'font-mono')}>
                  {getFilterCount(filter)}
                </span>
              </button>
            ))}
          </div>

          {/* Live Search */}
          <div className={clsx('relative', 'w-full', 'lg:w-72')}>
            <span className={clsx('absolute', 'inset-y-0', 'left-0', 'flex', 'items-center', 'pl-3', 'pointer-events-none', 'text-text-muted')}>
              <Search size={14} />
            </span>
            <input
              type="text"
              placeholder="Search projects, tech, keywords..."
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

      {/* Projects Grid */}
      <section id="projects-grid" className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-6', 'lg:py-10')}>
        <motion.div
          layout
          className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-6', 'perspective-1000')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isHovered = hoveredCard === project.id;
              const isOtherHovered = hoveredCard !== null && hoveredCard !== project.id;

              return (
                <motion.div
                  layoutId={`card-${project.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  key={project.id}
                  onClick={() => {
                    // On mobile, first tap highlights, second tap opens. On desktop, click immediately opens.
                    if (window.innerWidth < 1024) {
                      if (hoveredCard !== project.id) {
                        setHoveredCard(project.id);
                      } else {
                        setActiveProject(project);
                      }
                    } else {
                      setActiveProject(project);
                    }
                  }}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  className={`portfolio-card bg-bg-card border border-border-primary rounded-xl p-5 lg:p-6 flex flex-col justify-between min-h-[320px] lg:min-h-[420px] cursor-pointer group/card transition-all duration-500 ease-out overflow-visible relative ${isHovered ? 'z-50 scale-[1.03] -translate-y-4 border-accent shadow-[0_0_80px_rgba(var(--color-accent),0.4)]' : 'z-0'} ${isOtherHovered ? 'opacity-30 blur-[4px]' : 'opacity-100 blur-none'}`}
                  data-id={project.id}
                >
                  {/* Background & Glows (Contained) */}
                  <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-b', 'from-bg-card', 'to-bg-card/95', 'rounded-xl', 'overflow-hidden', 'pointer-events-none', '-z-10')}>
                    <div className={clsx('absolute', 'top-0', 'right-0', 'w-32', 'h-32', 'bg-gradient-to-bl', 'from-accent/5', 'to-transparent', 'group-hover/card:from-accent/20', 'transition-all', 'duration-500')} />
                    <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-tr', 'from-white/0', 'via-white/[0.04]', 'to-white/0', 'opacity-0', 'group-hover/card:opacity-100', 'transition-opacity', 'duration-500', 'mix-blend-overlay')} />
                  </div>

                  {/* Extreme Hover Out-of-Bounds Points */}
                  <div className={clsx('absolute', 'inset-0', 'pointer-events-none', 'z-50')}>
                    {project.impact.map((imp, i) => {
                      const activeTransforms = [
                        "-translate-x-3 -translate-y-8 lg:-translate-x-16 lg:-translate-y-12 opacity-100 scale-90 lg:scale-100",
                        "translate-x-3 -translate-y-4 lg:translate-x-20 lg:translate-y-2 opacity-100 scale-90 lg:scale-100",
                        "-translate-x-2 translate-y-8 lg:-translate-x-10 lg:translate-y-16 opacity-100 scale-90 lg:scale-100"
                      ];
                      const inactiveTransforms = "translate-x-0 translate-y-0 opacity-0 scale-50";
                      const origins = [
                        "top-[-10px] left-2 lg:left-0",
                        "top-1/3 right-2 lg:right-0",
                        "bottom-[-10px] left-2 lg:left-0"
                      ];
                      return (
                        <div
                          key={i}
                          className={`absolute ${origins[i]} transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform w-max max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] z-50 ${isHovered ? activeTransforms[i] : inactiveTransforms}`}
                          style={{ transitionDelay: `${100 + i * 150}ms` }}
                        >
                          <div className={clsx('bg-bg-primary/90', 'backdrop-blur-2xl', 'border', 'border-border-primary', 'p-3', 'lg:p-4', 'rounded-xl', 'shadow-[0_20px_50px_var(--shadow-heavy)]')}>
                            <span className={clsx('text-sm', 'sm:text-base', 'lg:text-lg', 'font-display', 'font-black', 'bg-clip-text', 'text-transparent', 'bg-gradient-to-br', 'from-text-primary', 'to-accent', 'leading-tight')}>
                              {imp}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    {/* Category Pill */}
                    <div className={clsx('flex', 'flex-wrap', 'gap-1.5', 'mb-4')}>
                      {project.category.map((cat, i) => (
                        <span key={i} className={clsx('px-2', 'py-0.5', 'rounded-sm', 'text-[8px]', 'font-mono', 'tracking-wider', 'uppercase', 'bg-bg-secondary', 'text-text-secondary', 'border', 'border-border-primary')}>
                          {cat}
                        </span>
                      ))}
                    </div>

                    <motion.h3 layoutId={`title-${project.id}`} className={clsx('text-lg', 'lg:text-xl', 'font-display', 'font-bold', 'text-text-primary', 'group-hover/card:text-accent', 'transition-colors', 'duration-500', 'mb-1', 'lg:mb-2', 'relative', 'z-10', 'transform', 'group-hover/card:translate-x-1')}>
                      {project.title}
                    </motion.h3>
                    <div className="text-xs text-text-muted font-mono mb-2 relative z-10">{project.company}</div>

                    <div className={clsx('grid', "[grid-template-areas:'stack']", 'mb-3', 'lg:mb-4', 'h-14', 'lg:h-16')}>
                      {/* Default Description */}
                      <motion.p layoutId={`desc-${project.id}`} className={clsx('[grid-area:stack]', 'text-[11px]', 'lg:text-xs', 'text-text-secondary', 'leading-relaxed', 'font-sans', 'font-light', 'relative', 'z-10', 'transform', 'transition-all', 'duration-500', 'group-hover/card:opacity-0', 'group-hover/card:-translate-y-2', 'line-clamp-2', 'lg:line-clamp-none')}>
                        {project.shortDesc}
                      </motion.p>

                      {/* Hover Highlight Data Reveal */}
                      {/* <div className={clsx('[grid-area:stack]', 'z-10', 'opacity-0', 'pointer-events-none', 'group-hover/card:opacity-100', 'transform', 'translate-y-4', 'group-hover/card:translate-y-0', 'transition-all', 'duration-500', 'delay-100', 'flex', 'flex-col', 'justify-center', 'gap-1.5', 'lg:gap-2')}>
                      {project.impact.slice(0, 2).map((imp, i) => (
                        <div key={i} className={clsx('flex', 'items-start', 'gap-1.5', 'lg:gap-2', 'text-[9px]', 'lg:text-[10px]', 'font-bold', 'text-text-primary', 'bg-highlight/5', 'border', 'border-highlight/20', 'px-2', 'lg:px-2.5', 'py-1', 'lg:py-1.5', 'rounded-sm', 'shadow-[0_0_15px_rgba(var(--color-highlight),0.1)]', 'backdrop-blur-sm')}>
                          <TrendingUp size={12} className={clsx('text-highlight', 'shrink-0', 'mt-0.5')} />
                          <span className="leading-tight">{imp}</span>
                        </div>
                      ))}
                    </div> */}
                    </div>

                    {/* High-Fidelity UI Graphic Mockups ("Screenshots") */}
                    <motion.div layoutId={`mockup-${project.id}`} className={clsx('transform', 'group-hover/card:scale-[1.02]', 'group-hover/card:-translate-y-1', 'transition-all', 'duration-500', 'delay-100', 'relative', 'z-10')}>
                      <div className="h-32 sm:h-40 w-full"><MediaViewer media={project.media} title={project.title} /></div>
                    </motion.div>
                  </div>

                  {/* Outcome Badge */}
                  <div className={clsx('mt-3', 'lg:mt-4', 'pt-3', 'lg:pt-4', 'border-t', 'border-border-primary', 'flex', 'flex-col', 'justify-between', 'gap-3', 'lg:gap-4', 'group-hover/card:border-accent/30', 'transition-colors', 'duration-500')}>
                    <div className={clsx('bg-bg-primary', 'border', 'border-highlight/20', 'rounded-md', 'p-2', 'lg:p-2.5', 'text-left', 'transform', 'group-hover/card:-translate-y-1', 'group-hover/card:border-highlight/60', 'group-hover/card:shadow-[0_0_20px_rgba(var(--color-highlight),0.2)]', 'transition-all', 'duration-500', 'delay-150')}>
                      <span className={clsx('block', 'text-[7px]', 'lg:text-[8px]', 'uppercase', 'tracking-wider', 'text-highlight', 'font-bold', 'font-mono')}>Business Outcome</span>
                      <span className={clsx('block', 'text-[10px]', 'lg:text-xs', 'font-bold', 'text-text-primary', 'mt-0.5', 'group-hover/card:text-highlight', 'transition-colors', 'duration-500', 'truncate')}>
                        <Counter value={project.metric} />
                      </span>
                    </div>
                    <div className={clsx('flex', 'justify-between', 'items-center', 'text-[10px]', 'lg:text-xs', 'font-semibold', 'text-text-secondary', 'group-hover/card:text-accent', 'transition-colors', 'duration-500', 'relative', 'z-10', 'transform', 'group-hover/card:translate-x-1', 'delay-200')}>
                      <span>View Case Study</span>
                      <ArrowUpRight size={14} className={clsx('group-hover/card:translate-x-1', 'group-hover/card:-translate-y-1', 'transition-transform')} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Case Study Fullscreen Expand Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className={clsx('fixed', 'inset-0', 'z-[100]', 'flex', 'items-center', 'justify-center', 'p-0', 'sm:p-6', 'lg:p-12', 'overflow-hidden', 'pointer-events-none')}>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveProject(null)}
              className={clsx('absolute', 'inset-0', 'bg-bg-primary/90', 'backdrop-blur-xl', 'pointer-events-auto')}
            />

            {/* Expanding Fullscreen Card */}
            <motion.div
              layoutId={`card-${activeProject.id}`}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={clsx('relative', 'w-full', 'max-w-6xl', 'h-full', 'max-h-[100dvh]', 'sm:max-h-[90vh]', 'bg-bg-card', 'border-0', 'sm:border', 'border-border-primary', 'rounded-none', 'sm:rounded-2xl', 'overflow-y-auto', 'lg:overflow-hidden', 'shadow-[0_0_80px_var(--shadow-heavy)]', 'z-10', 'flex', 'flex-col', 'lg:flex-row', 'pointer-events-auto')}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className={clsx('fixed', 'top-4', 'right-4', 'sm:absolute', 'sm:top-6', 'sm:right-6', 'z-50', 'p-2', 'lg:p-2.5', 'text-text-secondary', 'hover:text-white', 'rounded-full', 'bg-bg-primary/80', 'sm:bg-bg-primary/50', 'hover:bg-black/60', 'backdrop-blur-md', 'transition-colors', 'cursor-pointer', 'border', 'border-border-primary', 'hover:border-white/20')}
                aria-label="Close panel"
              >
                <X size={18} />
              </button>

              {/* Left Column: Visuals & Core Info */}
              <div data-lenis-prevent="true" className={clsx('w-full', 'shrink-0', 'lg:w-2/5', 'bg-bg-elevated', 'pt-16', 'px-6', 'pb-6', 'sm:p-8', 'lg:p-12', 'border-b', 'lg:border-b-0', 'lg:border-r', 'border-border-primary', 'relative', 'overflow-hidden', 'lg:overflow-y-auto', 'custom-scrollbar', 'min-h-0', 'flex', 'flex-col')}>
                <div className={clsx('absolute', 'top-0', 'left-0', 'w-64', 'h-64', 'bg-accent/10', 'rounded-full', 'blur-[80px]', 'pointer-events-none')} />

                <div className={clsx('relative', 'z-10', 'flex-1', 'flex', 'flex-col')}>
                  <div className={clsx('flex', 'flex-wrap', 'gap-2', 'mb-4', 'lg:mb-6')}>
                    {activeProject.category.map((cat, i) => (
                      <span key={i} className={clsx('px-2.5', 'py-1', 'rounded-sm', 'bg-accent/10', 'text-accent', 'border', 'border-accent/20', 'text-[10px]', 'font-mono', 'tracking-wider', 'uppercase')}>
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm text-text-muted font-mono mb-2">{activeProject.company}</div>
                  <motion.h3 layoutId={`title-${activeProject.id}`} className={clsx('text-2xl', 'sm:text-3xl', 'lg:text-4xl', 'font-display', 'font-extrabold', 'text-text-primary', 'mb-3', 'lg:mb-4', 'leading-tight', 'tracking-tight')}>
                    {activeProject.title}
                  </motion.h3>
                  
                  {activeProject.websiteLink && (
                    <a href={activeProject.websiteLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-bg-secondary hover:bg-border-primary border border-border-primary rounded-md text-sm font-bold text-text-primary w-fit mb-6 transition-colors shadow-sm">
                      Visit Live Website <ArrowUpRight size={14} />
                    </a>
                  )}

                  <motion.p layoutId={`desc-${activeProject.id}`} className={clsx('text-sm', 'text-text-secondary', 'leading-relaxed', 'mb-8')}>
                    {activeProject.shortDesc}
                  </motion.p>

                  <div className={clsx('grid', 'grid-cols-2', 'gap-6', 'pt-6', 'border-t', 'border-border-primary/50', 'mb-auto', 'mt-2')}>
                    <div>
                      <span className={clsx('block', 'text-[9px]', 'uppercase', 'tracking-wider', 'text-text-muted', 'font-mono', 'mb-1.5')}>Timeline</span>
                      <span className={clsx('text-sm', 'font-semibold', 'text-text-primary', 'flex', 'items-center', 'gap-2')}><Clock size={14} className="text-accent" /> {activeProject.timeline}</span>
                    </div>
                    <div>
                      <span className={clsx('block', 'text-[9px]', 'uppercase', 'tracking-wider', 'text-text-muted', 'font-mono', 'mb-1.5')}>Platform</span>
                      <span className={clsx('text-sm', 'font-semibold', 'text-text-primary', 'flex', 'items-center', 'gap-2')}><Terminal size={14} className="text-accent" /> {activeProject.category[0]}</span>
                    </div>
                  </div>

                  <motion.div layoutId={`mockup-${activeProject.id}`} className="relative z-10 w-full mt-8 mb-4 h-48 sm:h-64 shadow-2xl">
                    <MediaViewer media={activeProject.media} title={activeProject.title} />
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Detailed Case Study Content */}
              <div data-lenis-prevent="true" className={clsx('w-full', 'shrink-0', 'lg:w-3/5', 'p-6', 'sm:p-8', 'lg:p-12', 'bg-bg-card', 'lg:overflow-y-auto', 'custom-scrollbar', 'min-h-0')}>

                {/* Project Stats Grid */}
                {activeProject.stats && (
                  <div className="grid grid-cols-3 gap-4 mb-10 mt-2 lg:mt-0">
                    {activeProject.stats.map((stat, idx) => (
                      <div key={idx} className="bg-bg-primary border border-border-primary rounded-lg p-4 shadow-sm">
                        <span className="block text-[9px] uppercase tracking-wider text-text-muted font-mono mb-1">{stat.label}</span>
                        <span className="block text-xl sm:text-2xl font-bold text-accent font-display">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Case details fields */}
                <div className={clsx('space-y-10', 'text-left', 'font-sans')}>
                  <div>
                    <h4 className={clsx('flex', 'items-center', 'gap-2', 'text-sm', 'font-bold', 'text-text-primary', 'uppercase', 'tracking-wider', 'mb-4', 'border-b', 'border-border-primary/50', 'pb-2')}>
                      <HelpCircle size={16} className="text-accent" />
                      <span>The Problem</span>
                    </h4>
                    <p className={clsx('text-sm', 'text-text-secondary', 'leading-relaxed', 'pl-2', 'border-l-2', 'border-border-primary')}>{activeProject.problem}</p>
                  </div>

                  <div>
                    <h4 className={clsx('flex', 'items-center', 'gap-2', 'text-sm', 'font-bold', 'text-text-primary', 'uppercase', 'tracking-wider', 'mb-4', 'border-b', 'border-border-primary/50', 'pb-2')}>
                      <Lightbulb size={16} className="text-accent" />
                      <span>Our Solution</span>
                    </h4>
                    <p className={clsx('text-sm', 'text-text-secondary', 'leading-relaxed', 'pl-2', 'border-l-2', 'border-border-primary')}>{activeProject.solution}</p>
                  </div>

                  <div>
                    <h4 className={clsx('flex', 'items-center', 'gap-2', 'text-sm', 'font-bold', 'text-text-primary', 'uppercase', 'tracking-wider', 'mb-4', 'border-b', 'border-border-primary/50', 'pb-2')}>
                      <Settings size={16} className="text-accent" />
                      <span>Technology Stack</span>
                    </h4>
                    <div className={clsx('flex', 'flex-wrap', 'gap-2')}>
                      {activeProject.techStack.map((tech, i) => (
                        <span key={i} className={clsx('px-3', 'py-1', 'bg-bg-secondary', 'text-text-primary', 'border', 'border-border-primary', 'rounded-sm', 'text-xs', 'font-mono', 'shadow-sm')}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={clsx('flex', 'items-center', 'gap-2', 'text-sm', 'font-bold', 'text-text-primary', 'uppercase', 'tracking-wider', 'mb-4', 'border-b', 'border-border-primary/50', 'pb-2')}>
                      <BarChart3 size={16} className="text-accent" />
                      <span>Business Impact</span>
                    </h4>
                    <div className="space-y-3">
                      {activeProject.impact.map((imp, i) => (
                        <div key={i} className={clsx('flex', 'gap-3', 'items-start', 'text-sm', 'text-text-secondary')}>
                          <CheckCircle2 size={16} className={clsx('text-highlight', 'shrink-0', 'mt-0.5')} />
                          <span>{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={clsx('pt-6', 'border-t', 'border-border-primary')}>
                    <h4 className={clsx('text-sm', 'font-bold', 'text-text-primary', 'uppercase', 'tracking-wider', 'mb-4', 'font-display')}>Closing Results</h4>
                    <p className={clsx('text-sm', 'text-text-secondary', 'leading-relaxed', 'bg-bg-primary/50', 'p-5', 'rounded-md', 'border', 'border-border-primary/50', 'italic')}>"{activeProject.results}"</p>
                  </div>
                </div>

                {/* Bottom Drawer CTA */}
                <div className={clsx('mt-12', 'pt-8', 'border-t', 'border-border-primary', 'flex', 'flex-col', 'sm:flex-row', 'gap-4')}>
                  <button
                    onClick={() => {
                      setActiveProject(null);
                      setTimeout(() => openModal(), 300); // Wait for modal to close before opening contact modal
                    }}
                    className={clsx('flex-1', 'py-4', 'px-6', 'rounded-sm', 'text-sm', 'font-bold', 'text-center', 'bg-accent', 'hover:bg-highlight', 'text-white', 'shadow-[0_0_20px_rgba(var(--color-accent),0.3)]', 'hover:shadow-[0_0_30px_rgba(var(--color-accent),0.5)]', 'transition-all', 'cursor-pointer', 'flex', 'items-center', 'justify-center', 'gap-2')}
                  >
                    Discuss a Similar Project <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global conversion section */}
      <section className={clsx('py-8', 'lg:py-12', 'relative', 'z-10', 'max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'w-full', 'mb-8', 'lg:mb-12')}>
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
                <ShieldCheck size={11} className={clsx('text-highlight', 'animate-pulse')} />
                100% CODE OWNERSHIP GUARANTEE
              </span>
              <h2 className={clsx('text-3xl', 'sm:text-4xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight', 'leading-tight')}>
                Ready to Build Your Own <br className={clsx('hidden', 'sm:inline')} /> Success Story?
              </h2>
              <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'max-w-xl', 'leading-relaxed', 'font-sans', 'font-light')}>
                Speak directly with our expert team. We'll listen to your challenges, suggest the best path forward, and provide a clear, detailed project roadmap—completely free of charge.
              </p>

              {/* Trust points */}
              <div className={clsx('flex', 'flex-wrap', 'gap-x-6', 'gap-y-3', 'pt-4', 'border-t', 'border-border-primary/50', 'text-[10px]', 'sm:text-xs', 'font-mono', 'text-text-secondary')}>
                <div className={clsx('flex', 'items-center', 'gap-1.5')}>
                  <CheckCircle2 size={12} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>Free Discovery Call</span>
                </div>
                <div className={clsx('flex', 'items-center', 'gap-1.5')}>
                  <CheckCircle2 size={12} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>Clear Project Roadmap</span>
                </div>
                <div className={clsx('flex', 'items-center', 'gap-1.5')}>
                  <CheckCircle2 size={12} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>Your Ideas Stay Yours (NDA Signed)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={openModal}
                  className={clsx('px-6', 'py-3.5', 'rounded-md', 'text-sm', 'font-bold', 'bg-accent', 'hover:bg-accent-hover', 'text-white', 'shadow-[0_0_20px_var(--accent-glow)]', 'transition-all', 'cursor-pointer', 'flex', 'items-center', 'gap-2', 'hover:-translate-y-0.5', 'transform', 'group')}
                >
                  <span>Book a Free Call</span>
                  <ArrowUpRight size={14} className={clsx('group-hover:translate-x-0.5', 'transition-transform')} />
                </button>
              </div>
            </div>

            {/* Right Column: Case study stats summary panel */}
            <div className={clsx('lg:col-span-5', 'w-full')}>
              <div className={clsx('bg-bg-secondary/40', 'border', 'border-white/[0.05]', 'rounded-lg', 'p-5', 'shadow-inner', 'relative', 'overflow-hidden', 'backdrop-blur-md')}>
                <span className={clsx('text-[9px]', 'font-mono', 'text-text-muted', 'uppercase', 'tracking-widest', 'block', 'mb-4')}>Quantixx Track Record</span>
                <div className={clsx('grid', 'grid-cols-2', 'gap-4')}>
                  <div className={clsx('bg-bg-primary/80', 'border', 'border-border-primary', 'p-3', 'rounded-lg', 'text-left')}>
                    <span className={clsx('text-[8px]', 'font-mono', 'text-text-muted', 'block', 'uppercase')}>TOTAL ROI SAVED</span>
                    <span className={clsx('text-lg', 'font-bold', 'text-text-primary', 'mt-1', 'block', 'font-display')}>₹1.2M+</span>
                  </div>
                  <div className={clsx('bg-bg-primary/80', 'border', 'border-border-primary', 'p-3', 'rounded-lg', 'text-left')}>
                    <span className={clsx('text-[8px]', 'font-mono', 'text-text-muted', 'block', 'uppercase')}>AVG TASK REDUCTION</span>
                    <span className={clsx('text-lg', 'font-bold', 'text-text-primary', 'mt-1', 'block', 'font-display')}>85%</span>
                  </div>
                  <div className={clsx('bg-bg-primary/80', 'border', 'border-border-primary', 'p-3', 'rounded-lg', 'text-left')}>
                    <span className={clsx('text-[8px]', 'font-mono', 'text-text-muted', 'block', 'uppercase')}>DELIVERED PIPELINES</span>
                    <span className={clsx('text-lg', 'font-bold', 'text-text-primary', 'mt-1', 'block', 'font-display')}>40+ Systems</span>
                  </div>
                  <div className={clsx('bg-bg-primary/80', 'border', 'border-border-primary', 'p-3', 'rounded-lg', 'text-left')}>
                    <span className={clsx('text-[8px]', 'font-mono', 'text-text-muted', 'block', 'uppercase')}>IP TRANSFER RATE</span>
                    <span className={clsx('text-lg', 'font-bold', 'text-emerald-400', 'mt-1', 'block', 'font-display')}>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
