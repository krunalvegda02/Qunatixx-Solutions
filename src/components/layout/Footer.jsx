import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Mail, Phone, MapPin, Send, ShieldCheck, Activity } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useModal } from '../../context/ModalContext';

export default function Footer() {
  const { openModal } = useModal();
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Subscription received! Thank you for staying tuned with Quantixx Solutions.');
    e.target.reset();
  };

  return (
    <footer className={clsx('relative', 'bg-bg-secondary/50', 'backdrop-blur-2xl', 'border-t', 'border-border-primary', 'pt-16', 'sm:pt-20', 'pb-10', 'sm:pb-12', 'overflow-hidden', 'theme-transition', 'font-sans')}>

      {/* Subtle Grid overlay */}
      <div className={clsx('absolute', 'inset-0', 'bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)]', 'bg-[size:40px_40px]', 'pointer-events-none', 'opacity-35')} />

      {/* Background radial glow accents */}
      <div className={clsx('absolute', 'top-0', 'left-1/4', 'w-[500px]', 'h-[500px]', 'bg-accent/5', 'rounded-full', 'blur-[130px]', 'pointer-events-none', '-z-10', 'animate-pulse-slow')} />
      <div className={clsx('absolute', 'bottom-0', 'right-1/4', 'w-[600px]', 'h-[600px]', 'bg-highlight/3', 'rounded-full', 'blur-[150px]', 'pointer-events-none', '-z-10')} />

      <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'relative', 'z-10')}>

        {/* Upper Footer: Main Sitemap Columns */}
        <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-12', 'gap-10', 'lg:gap-12', 'pb-12', 'sm:pb-16', 'border-b', 'border-border-primary/60')}>

          {/* Column 1: Brand Info & Compliance Badges (col-span-5) */}
          <div className={clsx('lg:col-span-5', 'space-y-6')}>
            <Link to="/" className={clsx('flex', 'items-center', 'group')}>
              <img 
                src="/logo/horizon_logo.png" 
                alt="Quantixx Solutions" 
                className={clsx('h-8', 'sm:h-10', 'w-auto', 'object-contain', 'transition-transform', 'duration-300', 'group-hover:scale-[1.02]')} 
              />
            </Link>

            <p className={clsx('text-base', 'text-text-secondary', 'max-w-sm', 'leading-relaxed', 'font-sans')}>
              Engineering enterprise-grade software products, bespoke cloud infrastructures, and custom digital platforms built under compliance-ready structures.
            </p>

            {/* Compliance & Audit Badges */}
            <div className={clsx('space-y-2.5', 'pt-2')}>
              <span className={clsx('block', 'text-xs', 'font-mono', 'text-text-muted', 'uppercase', 'tracking-widest', 'font-semibold')}>
                Compliance & Security Framework
              </span>
              <div className={clsx('flex', 'flex-nowrap', 'sm:flex-wrap', 'gap-2', 'overflow-x-auto', 'sm:overflow-visible', 'pb-3', 'sm:pb-0', 'scrollbar-hide', '-mx-4', 'px-4', 'sm:mx-0', 'sm:px-0', 'mask-linear-fade-right')}>
                {[
                  { name: 'SOC2 Type II', active: true },
                  { name: 'ISO 27001', active: true },
                  { name: 'GDPR Compliant', active: true },
                  { name: 'HIPAA Ready', active: false }
                ].map((badge, idx) => (
                  <span
                    key={idx}
                    className={`shrink-0 px-3 py-1.5 rounded-sm text-xs font-mono font-medium border flex items-center gap-2 ${badge.active
                        ? 'bg-bg-secondary/60 border-border-primary/80 text-text-secondary'
                        : 'bg-transparent border-dashed border-border-primary/40 text-text-muted'
                      }`}
                  >
                    <ShieldCheck size={12} className={badge.active ? 'text-highlight' : 'text-text-muted'} />
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Columns 2 & 3: Services and Company (Grouped for side-by-side mobile layout) */}
          <div className={clsx('lg:col-span-4', 'grid', 'grid-cols-2', 'gap-8', 'lg:pl-4')}>
            {/* Column 2: Services */}
            <div>
              <h4 className={clsx('text-xs', 'sm:text-sm', 'font-bold', 'uppercase', 'tracking-wider', 'text-text-primary', 'mb-5', 'sm:mb-6', 'font-display', 'flex', 'items-center', 'gap-2')}>
                <span className={clsx('w-1.5', 'h-1.5', 'sm:w-2', 'sm:h-2', 'rounded-full', 'bg-accent')} />
                Services
              </h4>
              <ul className="space-y-3.5">
                {[
                  { name: 'Custom Software', href: '/services#custom-software' },
                  { name: 'Web Applications', href: '/services#web-apps' },
                  { name: 'Mobile App Dev', href: '/services#mobile-apps' },
                  { name: 'AI Engineering', href: '/services#ai' },
                  { name: 'Cloud & DevOps', href: '/services#cloud' },
                  { name: 'UI/UX Design', href: '/services#ui-ux' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.href} className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'hover:text-accent', 'hover:translate-x-1', 'transition-all', 'inline-block', 'font-medium')}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className={clsx('text-xs', 'sm:text-sm', 'font-bold', 'uppercase', 'tracking-wider', 'text-text-primary', 'mb-5', 'sm:mb-6', 'font-display', 'flex', 'items-center', 'gap-2')}>
                <span className={clsx('w-1.5', 'h-1.5', 'sm:w-2', 'sm:h-2', 'rounded-full', 'bg-highlight')} />
                Company
              </h4>
              <ul className="space-y-3.5">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Insights Blog', href: '/blog' },
                  { name: 'Contact Architects', href: '/contact' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.href} className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'hover:text-accent', 'hover:translate-x-1', 'transition-all', 'inline-flex', 'items-center', 'gap-2', 'font-medium')}>
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className={clsx('px-2', 'py-0.5', 'rounded-sm', 'text-[9px]', 'sm:text-[10px]', 'font-mono', 'font-bold', 'bg-highlight/10', 'text-highlight', 'border', 'border-highlight/25')}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Newsletter & Contact Widget (col-span-3) */}
          <div className={clsx('lg:col-span-3', 'space-y-6')}>
            <div className="space-y-2">
              <h4 className={clsx('text-sm', 'font-bold', 'uppercase', 'tracking-wider', 'text-text-primary', 'font-display', 'flex', 'items-center', 'gap-2')}>
                <span className={clsx('w-2', 'h-2', 'rounded-full', 'bg-accent')} />
                Stay Connected
              </h4>
              <p className={clsx('text-sm', 'text-text-secondary', 'leading-relaxed')}>
                Subscribe to receive our technical blueprints and quarterly industry reports.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className={clsx('relative', 'flex', 'items-center')}>
              <input
                type="email"
                required
                placeholder="work@company.com"
                className={clsx('w-full', 'bg-bg-primary/50', 'border', 'border-border-primary', 'focus:border-accent', 'rounded-sm', 'py-3', 'pl-4', 'pr-12', 'text-sm', 'text-text-primary', 'placeholder-text-muted', 'outline-none', 'transition-all', 'focus:ring-1', 'focus:ring-accent')}
              />
              <button
                type="submit"
                className={clsx('absolute', 'right-1.5', 'p-2', 'bg-accent/10', 'text-accent', 'hover:bg-accent', 'hover:text-white', 'rounded-sm', 'transition-all', 'cursor-pointer', 'flex', 'items-center', 'justify-center', 'border', 'border-accent/20')}
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>

            {/* Social Channels with Hover Glows */}
            <div className="space-y-2">
              <span className={clsx('block', 'text-xs', 'font-mono', 'text-text-muted', 'uppercase', 'tracking-widest', 'font-semibold', 'mt-8')}>
                Secure Communication Nodes
              </span>
              <div className={clsx('flex', 'items-center', 'gap-2.5')}>
                {[
                  { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: FaGithub, url: 'https://github.com/QuantixxSolutions', label: 'GitHub' },
                  { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
                  { icon: FaInstagram, url: 'https://www.instagram.com/quantixx.solutions?igsh=MXc3NnR5Y2dzeDNteg==', label: 'Instagram' }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx('p-2.5', 'bg-bg-secondary/40', 'hover:bg-accent/10', 'border', 'border-border-primary', 'hover:border-accent/40', 'text-text-secondary', 'hover:text-accent', 'rounded-sm', 'transition-all', 'flex', 'items-center', 'justify-center', 'shadow-sm')}
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Lower Footer: Copyright, Status Indicator, Legal Links */}
        <div className={clsx('flex', 'flex-col', 'lg:flex-row', 'justify-between', 'items-center', 'gap-6', 'pt-10', 'sm:pt-12', 'text-xs', 'sm:text-sm', 'text-text-secondary/80')}>

          {/* Copyright & Core Location */}
          <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'items-center', 'gap-4', 'text-center', 'lg:text-left', 'order-3', 'lg:order-1')}>
            <span>
              &copy; {currentYear} Quantixx Solutions Inc. All rights reserved.
            </span>
          </div>

       

          {/* Quick Legal links */}
          <div className={clsx('flex', 'flex-wrap', 'justify-center', 'gap-4', 'sm:gap-6', 'font-medium', 'text-xs', 'sm:text-sm', 'order-2', 'lg:order-3')}>
            <a href="#" className={clsx('hover:text-accent', 'transition-colors')}>Privacy Policy</a>
            <a href="#" className={clsx('hover:text-accent', 'transition-colors')}>Terms of Service</a>
            <a href="#" className={clsx('hover:text-accent', 'transition-colors')}>Security</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
