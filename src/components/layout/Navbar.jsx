import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { MoreHorizontal, X, ChevronDown, Cpu, Globe, Database, Smartphone, Palette, ArrowUpRight, Zap, Sun, Moon } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { useTheme } from '../../context/ThemeContext';
import { motion as motionFramer, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredPath, setHoveredPath] = useState(null);
  const { openModal } = useModal();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const servicesList = [
    { name: 'Custom Software', desc: 'Enterprise applications tailored to your business needs.', icon: Cpu, href: '/services#custom-software' },
    { name: 'Web Applications', desc: 'High-performance interactive web portals and SaaS platforms.', icon: Globe, href: '/services#web-apps' },
    { name: 'Mobile App Dev', desc: 'Native iOS & Android apps built for performance and scale.', icon: Smartphone, href: '/services#mobile-apps' },
    { name: 'AI Solutions', desc: 'Predictive analytics, custom LLMs, and intelligent search.', icon: Zap, href: '/services#ai' },
    { name: 'Cloud Engineering', desc: 'Highly secure AWS, Azure, & Google Cloud infrastructure.', icon: Database, href: '/services#cloud' },
    { name: 'UI/UX Design', desc: 'Bespoke interfaces and customer journey optimization.', icon: Palette, href: '/services#ui-ux' },
  ];

  const navLinks = [
    { name: 'Portfolio', desc: 'Case studies & work', href: '/portfolio' },
    { name: 'About Us', desc: 'Engineering culture', href: '/about' },
    { name: 'Insights', desc: 'Technical articles', href: '/blog' },
    { name: 'Contact', desc: 'Get in touch with us', href: '/contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motionFramer.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
        className={clsx('fixed', 'top-4', 'left-0', 'w-full', 'z-[9999]', 'px-4', 'sm:px-6', 'pointer-events-none')}
      >
        <nav className={clsx('mx-auto', 'max-w-7xl', 'w-full', 'glass', 'border', 'border-border-primary', 'rounded-full', 'shadow-2xl', 'backdrop-blur-xl', 'theme-transition', 'px-6', 'pointer-events-auto', isOpen ? 'bg-bg-primary/95 border-transparent shadow-none' : '')}>
          <div className={clsx('flex', 'justify-between', 'items-center', 'h-16', 'sm:h-18')}>

            {/* Logo */}
            <motionFramer.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={clsx('flex', 'items-center')}
            >
              <Link to="/" className={clsx('flex', 'items-center', 'group')}>
                <img 
                  src="/logo/horizon_logo.png" 
                  alt="Quantixx Solutions" 
                  className={clsx('h-7', 'sm:h-9', 'w-auto', 'object-contain', 'transition-transform', 'duration-300', 'group-hover:scale-[1.02]')} 
                />
              </Link>
            </motionFramer.div>

            {/* Desktop Nav Links */}
            <motionFramer.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className={clsx('hidden', 'lg:flex', 'items-center', 'gap-2')}
            >

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setActiveDropdown('services');
                  setHoveredPath('/services');
                }}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setHoveredPath(null);
                }}
              >
                <button className={clsx('relative', 'px-4', 'py-2', 'flex', 'items-center', 'gap-1.5', 'text-sm', 'font-semibold', 'text-text-secondary', 'hover:text-text-primary', 'transition-colors', 'cursor-pointer')}>
                  {hoveredPath === '/services' && (
                    <motionFramer.span
                      layoutId="nav-hover-pill"
                      className={clsx('absolute', 'inset-0', 'bg-accent/8', 'dark:bg-accent/12', 'rounded-full', '-z-10')}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span>Services</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180 text-accent' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motionFramer.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className={clsx('absolute', 'left-1/2', '-translate-x-1/2', 'mt-3', 'w-[600px]', 'bg-bg-glass', 'border', 'border-border-primary', 'rounded-2xl', 'p-5', 'shadow-[0_20px_50px_var(--shadow-heavy)]', 'grid', 'grid-cols-2', 'gap-3', 'backdrop-blur-3xl')}
                    >
                      {servicesList.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={idx}
                            to={service.href}
                            className={clsx('flex', 'gap-4', 'p-2.5', 'hover:bg-bg-secondary', 'rounded-xl', 'transition-all', 'group')}
                          >
                            <div className={clsx('flex', 'items-center', 'justify-center', 'w-9', 'h-9', 'rounded-lg', 'bg-bg-primary', 'border', 'border-border-primary', 'group-hover:border-accent/30', 'group-hover:bg-accent/10', 'text-text-secondary', 'group-hover:text-accent', 'transition-all', 'shrink-0')}>
                              <Icon size={16} />
                            </div>
                            <div>
                              <span className={clsx('block', 'text-xs', 'sm:text-sm', 'font-bold', 'text-text-primary', 'group-hover:text-accent', 'transition-colors')}>
                                {service.name}
                              </span>
                              <span className={clsx('block', 'text-[11px]', 'text-text-muted', 'mt-0.5', 'line-clamp-2')}>
                                {service.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </motionFramer.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Standard Links */}
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={({ isActive }) => `relative px-4 py-2 text-sm font-semibold transition-colors ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  {({ isActive }) => (
                    <>
                      {hoveredPath === link.href && (
                        <motionFramer.span
                          layoutId="nav-hover-pill"
                          className={clsx('absolute', 'inset-0', 'bg-accent/8', 'dark:bg-accent/12', 'rounded-full', '-z-10')}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                      {link.name}
                    </>
                  )}
                </NavLink>
              ))}
            </motionFramer.div>

            {/* Desktop CTAs */}
            <motionFramer.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className={clsx('hidden', 'lg:flex', 'items-center', 'gap-3')}
            >
              <button
                onClick={toggleTheme}
                className={clsx('p-2.5', 'rounded-full', 'border', 'border-border-primary', 'hover:border-border-hover', 'bg-bg-secondary/40', 'hover:bg-bg-elevated', 'text-text-secondary', 'hover:text-text-primary', 'transition-all', 'cursor-pointer', 'flex', 'items-center', 'justify-center')}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={openModal}
                className={clsx('inline-flex', 'items-center', 'gap-1.5', 'px-5', 'py-2.5', 'rounded-full', 'text-xs', 'font-extrabold', 'bg-accent', 'hover:bg-accent-hover', 'text-white', 'shadow-[0_0_15px_var(--accent-glow)]', 'transition-all', 'cursor-pointer', 'transform', 'hover:-translate-y-0.5')}
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={13} />
              </button>
            </motionFramer.div>

            {/* Mobile Controls */}
            <div className={clsx('flex', 'items-center', 'gap-1.5', 'lg:hidden')}>
              <button
                onClick={toggleTheme}
                className={clsx('p-2', 'rounded-full', 'border', 'border-border-primary', 'bg-bg-secondary/40', 'text-text-secondary', 'hover:text-text-primary', 'outline-none', 'cursor-pointer', 'flex', 'items-center', 'justify-center')}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={clsx('inline-flex', 'items-center', 'justify-center', 'p-2', 'rounded-full', 'text-text-primary', 'hover:bg-bg-secondary', 'outline-none', 'cursor-pointer', 'transition-colors')}
              >
                {isOpen ? <X size={20} /> : <MoreHorizontal size={24} />}
              </button>
            </div>

          </div>
        </nav>
      </motionFramer.div>

      {/* Premium Floating Bento Box Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Subtle Glass Backdrop */}
            <motionFramer.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className={clsx('fixed', 'inset-0', 'z-[9998]', 'bg-bg-primary/60', 'backdrop-blur-md', 'lg:hidden')}
            />

            {/* Floating Glass Bento Box */}
            <motionFramer.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className={clsx('fixed', 'top-24', 'left-4', 'right-4', 'max-h-[80vh]', 'z-[9999]', 'bg-bg-card/90', 'backdrop-blur-3xl', 'border', 'border-border-primary/80', 'rounded-[32px]', 'shadow-[0_30px_80px_rgba(0,0,0,0.2)]', 'lg:hidden', 'flex', 'flex-col', 'overflow-y-auto')}
            >
              {/* Ambient Inner Glow */}
              <div className={clsx('absolute', 'top-0', 'inset-x-0', 'h-40', 'bg-gradient-to-b', 'from-accent/10', 'to-transparent', 'pointer-events-none')} />

              <div className={clsx('relative', 'z-10', 'p-5', 'flex', 'flex-col', 'gap-5')}>
                
                {/* Bento Grid: Main Links */}
                <div className={clsx('grid', 'grid-cols-2', 'gap-3')}>
                  {navLinks.map((link, i) => (
                    <motionFramer.div
                      key={link.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <NavLink
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => clsx('group', 'relative', 'flex', 'flex-col', 'justify-between', 'h-28', 'p-4', 'rounded-2xl', 'bg-bg-secondary/60', 'border', 'border-border-primary/50', 'transition-all', 'duration-300', 'overflow-hidden', isActive ? 'bg-accent/10 border-accent/40 shadow-[0_0_20px_var(--accent-glow)]' : 'hover:bg-bg-secondary hover:border-border-hover hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]')}
                      >
                        {({ isActive }) => (
                          <>
                            {/* Hover Ambient Glow */}
                            <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-br', 'from-accent/5', 'to-transparent', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-500', 'pointer-events-none')} />
                            
                            <div className={clsx('flex', 'justify-between', 'items-start', 'relative', 'z-10')}>
                              <span className={clsx('font-display', 'font-extrabold', 'text-xl', 'tracking-tight', isActive ? 'text-accent' : 'text-text-primary')}>{link.name}</span>
                              <ArrowUpRight size={16} className={clsx('transition-all', 'duration-300', 'group-hover:translate-x-0.5', 'group-hover:-translate-y-0.5', isActive ? 'text-accent' : 'text-text-muted group-hover:text-text-primary')} />
                            </div>
                            <span className={clsx('text-xs', 'font-medium', 'tracking-wide', 'relative', 'z-10', isActive ? 'text-accent/80' : 'text-text-muted')}>{link.desc}</span>
                          </>
                        )}
                      </NavLink>
                    </motionFramer.div>
                  ))}
                </div>

                {/* Horizontal Bento Item: Services */}
                <motionFramer.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className={clsx('rounded-2xl', 'bg-bg-secondary/40', 'border', 'border-border-primary/50', 'p-5')}
                >
                  <div className={clsx('flex', 'items-center', 'justify-between', 'mb-4')}>
                    <span className={clsx('text-xs', 'font-bold', 'uppercase', 'tracking-widest', 'text-text-muted')}>Capabilities</span>
                    <Cpu size={14} className="text-accent" />
                  </div>
                  <div className={clsx('grid', 'grid-cols-2', 'gap-y-4', 'gap-x-2')}>
                    {servicesList.map((service, idx) => (
                      <Link
                        key={idx}
                        to={service.href}
                        onClick={() => setIsOpen(false)}
                        className={clsx('text-sm', 'font-semibold', 'text-text-secondary', 'hover:text-accent', 'transition-colors')}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motionFramer.div>

                {/* Bottom CTA Card */}
                <motionFramer.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      openModal();
                    }}
                    className={clsx('w-full', 'relative', 'overflow-hidden', 'group', 'flex', 'justify-center', 'items-center', 'gap-2', 'py-4', 'rounded-2xl', 'text-sm', 'font-bold', 'bg-accent', 'text-white', 'shadow-[0_10px_30px_var(--accent-glow)]')}
                  >
                    <span className={clsx('relative', 'z-10')}>Book Technical Consultation</span>
                    <ArrowUpRight size={16} className={clsx('relative', 'z-10', 'group-hover:translate-x-0.5', 'group-hover:-translate-y-0.5', 'transition-transform')} />
                    <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-transparent', 'via-white/20', 'to-transparent', '-translate-x-full', 'group-hover:translate-x-full', 'transition-transform', 'duration-700', 'pointer-events-none')} />
                  </button>
                </motionFramer.div>

              </div>
            </motionFramer.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
