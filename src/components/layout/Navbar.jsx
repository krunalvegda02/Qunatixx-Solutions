import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Menu, X, ChevronDown, Cpu, Globe, Database, Smartphone, Palette, ArrowUpRight, Zap, Sun, Moon } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { useTheme } from '../../context/ThemeContext';
import { motion as motionFramer, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredPath, setHoveredPath] = useState(null);
  const { openModal } = useModal();
  const { theme, toggleTheme } = useTheme();

  const servicesList = [
    { name: 'Custom Software', desc: 'Enterprise applications tailored to your business needs.', icon: Cpu, href: '/services#custom-software' },
    { name: 'Web Applications', desc: 'High-performance interactive web portals and SaaS platforms.', icon: Globe, href: '/services#web-apps' },
    { name: 'Mobile App Dev', desc: 'Native iOS & Android apps built for performance and scale.', icon: Smartphone, href: '/services#mobile-apps' },
    { name: 'AI Solutions', desc: 'Predictive analytics, custom LLMs, and intelligent search.', icon: Zap, href: '/services#ai' },
    { name: 'Cloud Engineering', desc: 'Highly secure AWS, Azure, & Google Cloud infrastructure.', icon: Database, href: '/services#cloud' },
    { name: 'UI/UX Design', desc: 'Bespoke interfaces and customer journey optimization.', icon: Palette, href: '/services#ui-ux' },
  ];

  const navLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/about' },
    // { name: 'Careers', href: '/careers' },
    { name: 'Insights', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motionFramer.div 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
      className={clsx('fixed', 'top-4', 'left-0', 'w-full', 'z-50', 'px-4', 'sm:px-6', 'pointer-events-none')}
    >
      <nav className={clsx('mx-auto', 'max-w-7xl', 'w-full', 'glass', 'border', 'border-border-primary', 'rounded-full', 'shadow-2xl', 'backdrop-blur-xl', 'theme-transition', 'px-6', 'pointer-events-auto')}>
        <div className={clsx('flex', 'justify-between', 'items-center', 'h-16', 'sm:h-18')}>
          
          {/* Logo with Slide-in */}
          <motionFramer.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={clsx('flex', 'items-center')}
          >
            <Link to="/" className={clsx('flex', 'items-center', 'gap-2.5', 'group')}>
              <div className={clsx('relative', 'flex', 'items-center', 'justify-center', 'w-9.5', 'h-9.5', 'rounded-xl', 'bg-gradient-to-br', 'from-accent', 'to-highlight', 'shadow-[0_0_15px_var(--accent-glow)]')}>
                <span className={clsx('font-bold', 'text-base', 'text-white', 'font-display')}>Q</span>
                <div className={clsx('absolute', 'inset-0', 'rounded-xl', 'bg-gradient-to-br', 'from-accent', 'to-highlight', 'opacity-0', 'group-hover:opacity-100', 'blur', 'transition-opacity', 'duration-300', 'pointer-events-none')} />
              </div>
              <div>
                <span className={clsx('font-display', 'font-extrabold', 'text-lg', 'tracking-tight', 'text-text-primary', 'group-hover:text-accent', 'transition-colors')}>QUANTIXX</span>
                <span className={clsx('block', 'text-[8px]', 'uppercase', 'tracking-[0.28em]', 'text-highlight', 'font-bold', '-mt-0.5')}>Solutions</span>
              </div>
            </Link>
          </motionFramer.div>

          {/* Desktop Nav Links with Sliding Hover Highlight & Staggered Reveal */}
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
                    className={clsx('absolute', 'left-1/2', '-translate-x-1/2', 'mt-3', 'w-[600px]', 'bg-bg-elevated', 'border', 'border-border-primary', 'rounded-2xl', 'p-5', 'shadow-[0_20px_50px_var(--shadow-heavy)]', 'grid', 'grid-cols-2', 'gap-3', 'backdrop-blur-xl')}
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

          {/* Theme Toggle & Consultation CTA with Slide-in */}
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

          {/* Mobile menu button & Theme Toggle */}
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
              className={clsx('inline-flex', 'items-center', 'justify-center', 'p-2', 'rounded-full', 'text-text-secondary', 'hover:text-text-primary', 'hover:bg-bg-secondary', 'outline-none', 'cursor-pointer')}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Slide-out */}
        <AnimatePresence>
          {isOpen && (
            <motionFramer.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={clsx('lg:hidden', 'bg-bg-primary/95', 'border-t', 'border-border-primary', 'overflow-hidden', 'theme-transition')}
            >
              <div className={clsx('pt-2', 'pb-6', 'space-y-1.5')}>
                <span className={clsx('block', 'text-[10px]', 'font-bold', 'uppercase', 'tracking-wider', 'text-text-muted', 'px-3', 'py-1.5')}>
                  Services
                </span>
                <div className={clsx('grid', 'grid-cols-2', 'gap-2', 'px-3', 'pb-3')}>
                  {servicesList.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.href}
                      onClick={() => setIsOpen(false)}
                      className={clsx('text-xs', 'text-text-secondary', 'hover:text-accent', 'py-1', 'block', 'transition-colors')}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                
                <div className={clsx('h-px', 'bg-border-primary', 'my-1')} />

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx('block', 'px-3', 'py-2', 'rounded-md', 'text-sm', 'font-bold', 'text-text-secondary', 'hover:text-text-primary', 'hover:bg-bg-secondary', 'transition-all')}
                  >
                    {link.name}
                  </Link>
                ))}
 
                <div className={clsx('pt-4', 'px-3')}>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      openModal();
                    }}
                    className={clsx('w-full', 'flex', 'justify-center', 'items-center', 'gap-1.5', 'py-2.5', 'rounded-full', 'text-xs', 'font-bold', 'bg-accent', 'text-white', 'hover:bg-accent-hover', 'transition-colors')}
                  >
                    <span>Book Consultation</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motionFramer.div>
          )}
        </AnimatePresence>
      </nav>
    </motionFramer.div>
  );
}
