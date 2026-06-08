import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, CheckCircle, Clock, Zap, Shield, ArrowUpRight, Terminal } from 'lucide-react';
import clsx from 'clsx';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$25,000 - $50,000',
    details: ''
  });

  const faqs = [
    {
      q: 'What is your typical project scope?',
      a: 'We generally partner with companies on projects starting around $10,000 up to $100,000+. This includes complete scoping documents, full engineering sprints, and code handover.'
    },
    {
      q: 'How long does a custom web or mobile development project take?',
      a: 'A standard custom web application or MVP takes 8 to 12 weeks. Large enterprise cloud architectures or generative AI integrations are delivered in phases, with initial deployments ready in 6 weeks.'
    },
    {
      q: 'Do we own the full intellectual property rights?',
      a: 'Yes. Upon completion and settlement of milestones, the client receives 100% ownership of the Git repositories, database scripts, custom design assets, and deploy tokens.'
    },
    {
      q: 'What is your support and service level agreement (SLA)?',
      a: 'We offer standard post-launch support contracts that guarantee immediate response to server issues within 1 hour, alongside routine packages for framework security updates.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <div className={clsx('relative', 'pt-24', 'pb-20', 'bg-bg-primary', 'text-text-primary', 'theme-transition')}>
      
      {/* Premium Ambient Background Effects */}
      <div className={clsx('absolute', 'inset-0', 'overflow-hidden', 'pointer-events-none', '-z-10')}>
        <div className={clsx('absolute', 'top-0', 'inset-x-0', 'h-[800px]', 'bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.1)_0%,transparent_70%)]')} />
        <div className={clsx('absolute', 'top-40', 'left-1/4', 'w-[600px]', 'h-[600px]', 'bg-accent/5', 'rounded-full', 'blur-[140px]', 'animate-pulse-slow')} />
        <div className={clsx('absolute', 'bottom-20', 'right-10', 'w-[500px]', 'h-[500px]', 'bg-highlight/5', 'rounded-full', 'blur-[140px]')} />
      </div>

      {/* Hero Section */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'pt-12', 'pb-20', 'text-center', 'relative', 'z-10')}>
        <span className={clsx('inline-flex', 'items-center', 'gap-2', 'px-4', 'py-1.5', 'rounded-full', 'bg-white/[0.03]', 'border', 'border-white/[0.08]', 'text-sm', 'uppercase', 'tracking-[0.2em]', 'font-extrabold', 'text-accent', 'font-mono', 'mb-6', 'backdrop-blur-md')}>
          <Zap size={14} className={clsx('text-highlight', 'animate-pulse')} />
          Get In Touch
        </span>
        <h1 className={clsx('text-5xl', 'sm:text-7xl', 'font-display', 'font-bold', 'text-text-primary', 'mt-3', 'leading-[1.1]', 'tracking-tight')}>
          Let's Engineer Your <br />
          <span className={clsx('text-transparent', 'bg-clip-text', 'bg-gradient-to-r', 'from-accent', 'via-highlight', 'to-accent', 'bg-300%', 'animate-gradient-flow')}>Next Breakthrough</span>
        </h1>
        <p className={clsx('text-text-secondary', 'text-base', 'sm:text-lg', 'max-w-2xl', 'mx-auto', 'mt-6', 'leading-relaxed', 'font-sans', 'font-light')}>
          Request a scoping workshop with our technical leads. We will review your product parameters and deliver a structured initial architecture plan.
        </p>
      </section>

      {/* Main Layout */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'mb-32', 'text-left', 'relative', 'z-10')}>
        <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-8', 'lg:gap-12', 'items-start', 'font-sans')}>
          
          {/* Left Column: Bento Box Info */}
          <div className={clsx('lg:col-span-5', 'space-y-6', 'sticky', 'top-32')}>
            
            {/* Corporate Info Card */}
            <div className={clsx('glass-card', 'border', 'border-white/[0.08]', 'hover:border-white/[0.15]', 'bg-bg-card/40', 'backdrop-blur-xl', 'rounded-3xl', 'p-8', 'transition-all', 'shadow-xl', 'relative', 'overflow-hidden', 'group')}>
              <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-br', 'from-white/[0.02]', 'to-transparent', 'pointer-events-none')} />
              <h3 className={clsx('text-2xl', 'font-bold', 'text-text-primary', 'font-display', 'mb-6', 'tracking-tight')}>Corporate Hub</h3>
              <div className="space-y-6">
                <div className={clsx('flex', 'items-start', 'gap-4')}>
                  <div className={clsx('p-3', 'bg-white/[0.04]', 'border', 'border-white/[0.05]', 'rounded-xl', 'text-accent', 'shadow-sm')}><MapPin size={20} /></div>
                  <div>
                    <span className={clsx('block', 'text-xs', 'font-mono', 'font-semibold', 'text-text-muted', 'uppercase', 'tracking-widest')}>Global Virtual HQ</span>
                    <span className={clsx('block', 'text-sm', 'text-text-secondary', 'mt-1', 'font-light', 'leading-relaxed')}>100% Remote Operation<br />Async & Borderless</span>
                  </div>
                </div>
                <div className={clsx('flex', 'items-start', 'gap-4')}>
                  <div className={clsx('p-3', 'bg-white/[0.04]', 'border', 'border-white/[0.05]', 'rounded-xl', 'text-accent', 'shadow-sm')}><Mail size={20} /></div>
                  <div>
                    <span className={clsx('block', 'text-xs', 'font-mono', 'font-semibold', 'text-text-muted', 'uppercase', 'tracking-widest')}>Email Correspondence</span>
                    <a href="mailto:solutions@quantixx.com" className={clsx('block', 'text-sm', 'text-text-primary', 'hover:text-accent', 'mt-1', 'transition-colors', 'font-medium')}>solutions@quantixx.com</a>
                  </div>
                </div>
                <div className={clsx('flex', 'items-start', 'gap-4')}>
                  <div className={clsx('p-3', 'bg-white/[0.04]', 'border', 'border-white/[0.05]', 'rounded-xl', 'text-accent', 'shadow-sm')}><Phone size={20} /></div>
                  <div>
                    <span className={clsx('block', 'text-xs', 'font-mono', 'font-semibold', 'text-text-muted', 'uppercase', 'tracking-widest')}>Phone Lines</span>
                    <a href="tel:+18005556272" className={clsx('block', 'text-sm', 'text-text-primary', 'hover:text-accent', 'mt-1', 'transition-colors', 'font-medium')}>+1 (800) 555-6272</a>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Card */}
            <div className={clsx('glass-card', 'border', 'border-accent/20', 'bg-accent/5', 'backdrop-blur-md', 'rounded-2xl', 'p-6', 'flex', 'gap-4', 'items-center', 'relative', 'overflow-hidden', 'group', 'hover:border-accent/40', 'transition-colors', 'shadow-lg')}>
              <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-accent/0', 'via-accent/5', 'to-accent/0', 'translate-x-[-100%]', 'group-hover:translate-x-[100%]', 'transition-transform', 'duration-1000', 'pointer-events-none')} />
              <div className={clsx('p-3', 'bg-accent/20', 'text-accent', 'rounded-xl', 'shrink-0', 'border', 'border-accent/20', 'shadow-[0_0_15px_var(--accent-glow)]')}>
                <Clock size={24} className="animate-pulse-slow" />
              </div>
              <div>
                <span className={clsx('block', 'text-sm', 'font-bold', 'text-text-primary', 'tracking-tight', 'font-display')}>4-Hour Response Guarantee</span>
                <span className={clsx('block', 'text-xs', 'text-text-secondary', 'mt-1', 'font-light', 'leading-relaxed')}>Enterprise project inquiries receive immediate review during Western business hours.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className={clsx('glass-card', 'border', 'border-white/[0.08]', 'bg-bg-card/30', 'backdrop-blur-2xl', 'rounded-3xl', 'p-8', 'sm:p-12', 'relative', 'shadow-2xl', 'overflow-hidden', 'group')}>
              <div className={clsx('absolute', 'top-0', 'right-0', 'w-64', 'h-64', 'bg-accent/5', 'rounded-full', 'blur-[80px]', 'pointer-events-none', '-z-10', 'group-hover:bg-accent/10', 'transition-colors', 'duration-700')} />
              
              {!formSubmitted ? (
                <div className={clsx('relative', 'z-10')}>
                  <h3 className={clsx('text-3xl', 'font-bold', 'font-display', 'text-text-primary', 'mb-3', 'tracking-tight')}>Project Scoping Inquiry</h3>
                  <p className={clsx('text-sm', 'text-text-secondary', 'mb-8', 'leading-relaxed', 'font-light')}>
                    Provide parameters for your software build or cloud integration. Our engineering lead will prepare an agenda for the technical discovery session.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-6')}>
                      <div className="space-y-2">
                        <label className={clsx('block', 'text-xs', 'font-mono', 'font-semibold', 'text-text-muted', 'uppercase', 'tracking-widest', 'pl-1')}>Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={clsx('w-full', 'bg-white/[0.02]', 'hover:bg-white/[0.04]', 'border', 'border-white/[0.08]', 'focus:border-accent', 'focus:bg-white/[0.06]', 'rounded-xl', 'px-5', 'py-3.5', 'text-sm', 'text-text-primary', 'placeholder-text-muted/50', 'outline-none', 'transition-all', 'shadow-inner')}
                          placeholder="Bruce Wayne"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={clsx('block', 'text-xs', 'font-mono', 'font-semibold', 'text-text-muted', 'uppercase', 'tracking-widest', 'pl-1')}>Business Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={clsx('w-full', 'bg-white/[0.02]', 'hover:bg-white/[0.04]', 'border', 'border-white/[0.08]', 'focus:border-accent', 'focus:bg-white/[0.06]', 'rounded-xl', 'px-5', 'py-3.5', 'text-sm', 'text-text-primary', 'placeholder-text-muted/50', 'outline-none', 'transition-all', 'shadow-inner')}
                          placeholder="bruce@waynecorp.com"
                        />
                      </div>
                    </div>

                    <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-6')}>
                      <div className="space-y-2">
                        <label className={clsx('block', 'text-xs', 'font-mono', 'font-semibold', 'text-text-muted', 'uppercase', 'tracking-widest', 'pl-1')}>Company Name</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className={clsx('w-full', 'bg-white/[0.02]', 'hover:bg-white/[0.04]', 'border', 'border-white/[0.08]', 'focus:border-accent', 'focus:bg-white/[0.06]', 'rounded-xl', 'px-5', 'py-3.5', 'text-sm', 'text-text-primary', 'placeholder-text-muted/50', 'outline-none', 'transition-all', 'shadow-inner')}
                          placeholder="Wayne Enterprises"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={clsx('block', 'text-xs', 'font-mono', 'font-semibold', 'text-text-muted', 'uppercase', 'tracking-widest', 'pl-1')}>Budget Framework</label>
                        <div className="relative">
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className={clsx('w-full', 'bg-white/[0.02]', 'hover:bg-white/[0.04]', 'border', 'border-white/[0.08]', 'focus:border-accent', 'focus:bg-white/[0.06]', 'rounded-xl', 'px-5', 'py-3.5', 'text-sm', 'text-text-primary', 'outline-none', 'transition-all', 'shadow-inner', 'appearance-none', 'cursor-pointer')}
                          >
                            <option value="$10,000 - $25,000" className={clsx('bg-bg-card', 'text-text-primary')}>$10,000 - $25,000</option>
                            <option value="$25,000 - $50,000" className={clsx('bg-bg-card', 'text-text-primary')}>$25,000 - $50,000</option>
                            <option value="$50,000 - $100,000" className={clsx('bg-bg-card', 'text-text-primary')}>$50,000 - $100,000</option>
                            <option value="$100,000+" className={clsx('bg-bg-card', 'text-text-primary')}>$100,000+</option>
                          </select>
                          <ChevronDown size={16} className={clsx('absolute', 'right-5', 'top-1/2', '-translate-y-1/2', 'text-text-muted', 'pointer-events-none')} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className={clsx('block', 'text-xs', 'font-mono', 'font-semibold', 'text-text-muted', 'uppercase', 'tracking-widest', 'pl-1')}>Build Requirements & Targets</label>
                      <textarea
                        rows="5"
                        required
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className={clsx('w-full', 'bg-white/[0.02]', 'hover:bg-white/[0.04]', 'border', 'border-white/[0.08]', 'focus:border-accent', 'focus:bg-white/[0.06]', 'rounded-xl', 'px-5', 'py-4', 'text-sm', 'text-text-primary', 'placeholder-text-muted/50', 'outline-none', 'resize-none', 'transition-all', 'shadow-inner')}
                        placeholder="Tell us what you're planning to build (e.g. Next.js SaaS portal, AWS cloud cluster, vector DB search engine)..."
                      />
                    </div>

                    <button
                      type="submit"
                      className={clsx('w-full', 'relative', 'overflow-hidden', 'group', 'inline-flex', 'items-center', 'justify-center', 'gap-2', 'py-4', 'rounded-xl', 'text-sm', 'font-bold', 'bg-white', 'text-bg-primary', 'shadow-[0_0_30px_rgba(255,255,255,0.1)]', 'hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]', 'transition-all', 'cursor-pointer', 'mt-4')}
                    >
                      <span className={clsx('relative', 'z-10')}>Send Project Details</span>
                      <ArrowUpRight size={16} className={clsx('relative', 'z-10', 'group-hover:translate-x-0.5', 'group-hover:-translate-y-0.5', 'transition-transform')} />
                      <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-white', 'via-gray-200', 'to-white', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-300', 'pointer-events-none')} />
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={clsx('text-center', 'py-16', 'relative', 'z-10')}
                >
                  <div className={clsx('w-20', 'h-20', 'rounded-2xl', 'bg-highlight/10', 'border', 'border-highlight/30', 'flex', 'items-center', 'justify-center', 'text-highlight', 'mx-auto', 'mb-6', 'shadow-[0_0_30px_var(--color-highlight)]')}>
                    <CheckCircle size={36} className="animate-pulse" />
                  </div>
                  <h3 className={clsx('text-3xl', 'font-display', 'font-extrabold', 'text-text-primary', 'mb-3', 'tracking-tight')}>Inquiry Received</h3>
                  <p className={clsx('text-text-secondary', 'text-sm', 'sm:text-base', 'max-w-sm', 'mx-auto', 'mb-8', 'leading-relaxed', 'font-sans', 'font-light')}>
                    Thanks, <span className={clsx('text-text-primary', 'font-semibold')}>{formData.name}</span>. Our Senior Solution Engineer is reviewing your parameters for budget <span className={clsx('text-text-primary', 'font-semibold')}>{formData.budget}</span>. We will follow up with scheduling links shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className={clsx('px-8', 'py-3', 'rounded-xl', 'text-sm', 'font-bold', 'bg-white/[0.05]', 'hover:bg-white/[0.1]', 'text-text-primary', 'border', 'border-white/[0.1]', 'hover:border-white/[0.2]', 'transition-all', 'cursor-pointer', 'backdrop-blur-md')}
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Premium FAQ Section */}
      <section className={clsx('max-w-4xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'text-left', 'relative', 'z-10', 'mb-20')}>
        <div className={clsx('text-center', 'mb-16')}>
          <span className={clsx('text-xs', 'uppercase', 'tracking-[0.2em]', 'font-extrabold', 'text-accent', 'bg-accent/10', 'px-3.5', 'py-1.5', 'rounded-full', 'inline-block', 'font-mono', 'border', 'border-accent/20')}>
            Common Inquiries
          </span>
          <h2 className={clsx('text-4xl', 'font-display', 'font-bold', 'text-text-primary', 'mt-6', 'tracking-tight')}>Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`glass-card bg-bg-card/20 backdrop-blur-md border rounded-2xl overflow-hidden font-sans transition-all duration-300 ${openFaq === i ? 'border-accent/40 shadow-[0_0_30px_var(--accent-glow)]' : 'border-white/[0.08] hover:border-white/[0.15]'}`}
            >
              <button
                onClick={() => toggleFaq(i)}
                className={clsx('w-full', 'flex', 'items-center', 'justify-between', 'p-6', 'text-left', 'font-semibold', 'text-text-secondary', 'hover:text-text-primary', 'transition-colors', 'cursor-pointer', 'outline-none')}
              >
                <span className={clsx('text-sm', 'sm:text-base', 'flex', 'items-center', 'gap-4', 'font-display', 'tracking-tight', 'text-text-primary')}>
                  <span className={`p-2 rounded-lg transition-colors duration-300 ${openFaq === i ? 'bg-accent/20 text-accent' : 'bg-white/[0.04] text-text-muted'}`}>
                    <HelpCircle size={18} />
                  </span>
                  {faq.q}
                </span>
                <div className={`p-1.5 rounded-full border transition-all duration-300 ${openFaq === i ? 'border-accent/30 bg-accent/10 text-accent' : 'border-transparent text-text-muted group-hover:border-white/[0.1]'}`}>
                  <ChevronDown size={18} className={`transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className={clsx('p-6', 'pt-0', 'text-sm', 'sm:text-base', 'text-text-secondary', 'leading-relaxed', 'font-light', 'border-t', 'border-white/[0.05]', 'mt-2')}>
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
