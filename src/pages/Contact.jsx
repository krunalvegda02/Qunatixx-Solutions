import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText } from '../components/animations/AnimatedText';
import { AnimatedSubText } from '../components/animations/AnimatedSubText';
import { Loader2, Mail, Phone, MapPin, ChevronDown, CheckCircle, Clock, Zap, ArrowUpRight, HelpCircle } from 'lucide-react';
import clsx from 'clsx';


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '₹10,000 - ₹25,000',
    details: ''
  });

  const faqs = [
    {
      q: 'What is your typical project scope?',
      a: 'We generally partner with companies on projects starting around ₹5,000 up to ₹50,000+. This includes complete scoping documents, full engineering sprints, and code handover.'
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
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_cban87l',
        'template_8j2t6sn',
        form.current,
        'wswI1zm7UYCeCRg3_'
      )
      .then(
        () => {
          setIsLoading(false);
          setFormSubmitted(true);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setIsLoading(false);
          setFormSubmitted(true);
        }
      );
  };

  return (
    <motion.div
      className={clsx('relative', 'overflow-x-clip', 'bg-bg-primary', 'text-text-primary', 'theme-transition', 'pt-28', 'pb-0', 'min-h-screen')}
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
            <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-text-secondary border border-border-primary rounded-full bg-bg-primary mb-8 shadow-sm">
              <Zap size={14} className="text-highlight" />
              Get In Touch
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
            Let's Build Your <br className="hidden md:block" />
            <motion.span
              className="text-accent"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Next Big Idea.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mt-8 leading-relaxed"
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Reach out to discuss your project. We'll work with you to understand your goals and map out a clear plan to bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Main Layout */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-6', 'lg:py-10', 'text-left', 'relative', 'z-10')}>
        <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-8', 'lg:gap-12', 'items-start', 'font-sans')}>
          
          {/* Left Column: Bento Box Info */}
          <div className={clsx('lg:col-span-5', 'space-y-6', 'lg:sticky', 'lg:top-32')}>
            
            {/* Corporate Info Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={clsx('glass-card', 'border', 'border-border-primary', 'bg-bg-card', 'backdrop-blur-xl', 'rounded-3xl', 'p-6', 'sm:p-8', 'transition-colors', 'duration-300', 'shadow-lg', 'hover:shadow-xl', 'relative', 'overflow-hidden', 'group')}
            >
              <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-br', 'from-accent/5', 'to-transparent', 'pointer-events-none')} />
              <h3 className={clsx('text-2xl', 'font-bold', 'text-text-primary', 'font-display', 'mb-8', 'tracking-tight')}>Corporate Hub</h3>
              <div className={clsx('space-y-6', 'relative', 'z-10')}>

                <div className={clsx('flex', 'items-start', 'gap-4')}>
                  <div className={clsx('p-3', 'bg-bg-secondary', 'border', 'border-border-primary', 'rounded-xl', 'text-accent', 'shadow-sm')}><Mail size={20} /></div>
                  <div>
                    <span className={clsx('block', 'text-xs', 'font-mono', 'font-semibold', 'text-text-muted', 'uppercase', 'tracking-widest')}>Email Correspondence</span>
                    <a href="mailto:info@quantixx.solutions" className={clsx('block', 'text-sm', 'text-text-primary', 'hover:text-accent', 'mt-1', 'transition-colors', 'font-semibold')}>info@quantixx.solutions</a>
                  </div>
                </div>
                <div className={clsx('flex', 'items-start', 'gap-4')}>
                  <div className={clsx('p-3', 'bg-bg-secondary', 'border', 'border-border-primary', 'rounded-xl', 'text-accent', 'shadow-sm')}><Phone size={20} /></div>
                  <div>
                    <span className={clsx('block', 'text-xs', 'font-mono', 'font-semibold', 'text-text-muted', 'uppercase', 'tracking-widest')}>Phone Lines</span>
                    <a href="tel:+919427109237" className={clsx('block', 'text-sm', 'text-text-primary', 'hover:text-accent', 'mt-1', 'transition-colors', 'font-semibold')}>+91 9427109237 / +91 9023743914</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SLA Card */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className={clsx('glass-card', 'border', 'border-accent/30', 'bg-accent/5', 'backdrop-blur-md', 'rounded-2xl', 'p-5', 'sm:p-6', 'flex', 'flex-col', 'sm:flex-row', 'gap-4', 'items-start', 'sm:items-center', 'relative', 'overflow-hidden', 'group', 'hover:border-accent/50', 'transition-colors', 'duration-300', 'shadow-md', 'transform-gpu')}
            >
              <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-accent/0', 'via-accent/10', 'to-accent/0', 'translate-x-[-100%]', 'group-hover:translate-x-[100%]', 'transition-transform', 'duration-1000', 'pointer-events-none', 'transform-gpu')} />
              <div className={clsx('p-3', 'bg-accent/10', 'text-accent', 'rounded-xl', 'shrink-0', 'border', 'border-accent/20', 'shadow-[0_0_15px_var(--accent-glow)]')}>
                <Clock size={24} className="animate-pulse-slow" />
              </div>
              <div className={clsx('relative', 'z-10')}>
                <span className={clsx('block', 'text-sm', 'font-bold', 'text-text-primary', 'tracking-tight', 'font-display')}>4-Hour Response Guarantee</span>
                <span className={clsx('block', 'text-xs', 'text-text-secondary', 'mt-1', 'font-medium', 'leading-relaxed')}>Enterprise project inquiries receive immediate priority review.</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.4 }}
              className={clsx('border', 'border-border-primary', 'bg-bg-card/95', 'backdrop-blur-2xl', 'rounded-3xl', 'p-6', 'sm:p-12', 'relative', 'shadow-xl', 'overflow-hidden', 'transform-gpu')}
            >
              <div className={clsx('absolute', 'top-0', 'right-0', 'w-64', 'h-64', 'bg-accent/5', 'rounded-full', 'pointer-events-none', '-z-10', 'transform-gpu')} />
              
              {!formSubmitted ? (
                <div className={clsx('relative', 'z-10')}>
                  <h3 className={clsx('text-3xl', 'font-bold', 'font-display', 'text-text-primary', 'mb-3', 'tracking-tight')}>Project Scoping Inquiry</h3>
                  <p className={clsx('text-sm', 'text-text-secondary', 'mb-8', 'leading-relaxed', 'font-medium')}>
                    Provide parameters for your software build or cloud integration. Our engineering lead will prepare an agenda for the technical discovery session.
                  </p>

                  <form ref={form} onSubmit={handleFormSubmit} className={clsx('space-y-5', 'sm:space-y-6')}>
                    <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-5', 'sm:gap-6')}>
                      <div className="space-y-2">
                        <label className={clsx('block', 'text-sm', 'font-semibold', 'text-text-secondary', 'pl-1')}>Your Full Name</label>
                        <input
                          type="text"
                          required
                          name="user_name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={clsx('w-full', 'bg-bg-secondary', 'border', 'border-border-primary', 'focus:border-accent', 'focus:bg-bg-primary', 'rounded-xl', 'px-5', 'py-3.5', 'text-sm', 'text-text-primary', 'placeholder-text-muted', 'outline-none', 'transition-all', 'shadow-inner')}
                          placeholder="Bruce Wayne"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={clsx('block', 'text-sm', 'font-semibold', 'text-text-secondary', 'pl-1')}>Business Email</label>
                        <input
                          type="email"
                          required
                          name="user_email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={clsx('w-full', 'bg-bg-secondary', 'border', 'border-border-primary', 'focus:border-accent', 'focus:bg-bg-primary', 'rounded-xl', 'px-5', 'py-3.5', 'text-sm', 'text-text-primary', 'placeholder-text-muted', 'outline-none', 'transition-all', 'shadow-inner')}
                          placeholder="bruce@waynecorp.com"
                        />
                      </div>
                    </div>

                    <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-5', 'sm:gap-6')}>
                      <div className="space-y-2">
                        <label className={clsx('block', 'text-sm', 'font-semibold', 'text-text-secondary', 'pl-1')}>Company Name</label>
                        <input
                          type="text"
                          name="company_name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className={clsx('w-full', 'bg-bg-secondary', 'border', 'border-border-primary', 'focus:border-accent', 'focus:bg-bg-primary', 'rounded-xl', 'px-5', 'py-3.5', 'text-sm', 'text-text-primary', 'placeholder-text-muted', 'outline-none', 'transition-all', 'shadow-inner')}
                          placeholder="Wayne Enterprises"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={clsx('block', 'text-sm', 'font-semibold', 'text-text-secondary', 'pl-1')}>Budget Framework</label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className={clsx('w-full', 'bg-bg-secondary', 'border', 'border-border-primary', 'focus:border-accent', 'focus:bg-bg-primary', 'rounded-xl', 'px-5', 'py-3.5', 'text-sm', 'text-text-primary', 'outline-none', 'transition-all', 'shadow-inner', 'appearance-none', 'cursor-pointer')}
                          >
                            <option value="₹5,000 - ₹15,000" className={clsx('bg-bg-card', 'text-text-primary')}>₹5,000 - ₹15,000</option>
                            <option value="₹15,000 - ₹25,000" className={clsx('bg-bg-card', 'text-text-primary')}>₹15,000 - ₹25,000</option>
                            <option value="₹25,000 - ₹50,000" className={clsx('bg-bg-card', 'text-text-primary')}>₹25,000 - ₹50,000</option>
                            <option value="₹50,000+" className={clsx('bg-bg-card', 'text-text-primary')}>₹50,000+</option>
                          </select>
                          <ChevronDown size={16} className={clsx('absolute', 'right-5', 'top-1/2', '-translate-y-1/2', 'text-text-muted', 'pointer-events-none')} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className={clsx('block', 'text-sm', 'font-semibold', 'text-text-secondary', 'pl-1')}>Build Requirements & Targets</label>
                      <textarea
                        rows="5"
                        required
                        name="message"
                          value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className={clsx('w-full', 'bg-bg-secondary', 'border', 'border-border-primary', 'focus:border-accent', 'focus:bg-bg-primary', 'rounded-xl', 'px-5', 'py-4', 'text-sm', 'text-text-primary', 'placeholder-text-muted', 'outline-none', 'resize-none', 'transition-all', 'shadow-inner')}
                        placeholder="Tell us what you're planning to build (e.g. Next.js SaaS portal, AWS cloud cluster)..."
                      />
                    </div>

                    <motion.button
                      whileHover={isLoading ? {} : { scale: 1.02 }}
                      whileTap={isLoading ? {} : { scale: 0.95 }}
                      type="submit"
                      disabled={isLoading}
                      className={clsx('w-full', 'relative', 'overflow-hidden', 'group', 'inline-flex', 'items-center', 'justify-center', 'gap-2', 'py-4', 'rounded-xl', 'text-sm', 'font-bold', 'bg-accent', 'text-white', 'shadow-[0_4px_15px_var(--accent-glow)]', 'hover:shadow-[0_6px_25px_var(--accent-glow)]', 'transition-colors', 'duration-300', 'mt-4', isLoading ? 'opacity-80 cursor-wait' : 'cursor-pointer')}
                    >
                      <span className={clsx('relative', 'z-10')}>{isLoading ? 'Sending...' : 'Send Project Details'}</span>
                      {isLoading ? (
                        <Loader2 size={16} className="animate-spin relative z-10" />
                      ) : (
                        <ArrowUpRight size={16} className={clsx('relative', 'z-10', 'group-hover:translate-x-0.5', 'group-hover:-translate-y-0.5', 'transition-transform')} />
                      )}
                      {!isLoading && <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-transparent', 'via-white/20', 'to-transparent', '-translate-x-full', 'group-hover:translate-x-full', 'transition-transform', 'duration-700', 'pointer-events-none')} />}
                    </motion.button>
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
                  <p className={clsx('text-text-secondary', 'text-sm', 'sm:text-base', 'max-w-sm', 'mx-auto', 'mb-8', 'leading-relaxed', 'font-sans', 'font-medium')}>
                    Thanks, <span className={clsx('text-text-primary', 'font-bold')}>{formData.name}</span>. Our Senior Solution Engineer is reviewing your parameters for budget <span className={clsx('text-text-primary', 'font-bold')}>{formData.budget}</span>. We will follow up with scheduling links shortly.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFormSubmitted(false)}
                    className={clsx('px-8', 'py-3', 'rounded-xl', 'text-sm', 'font-bold', 'bg-bg-secondary', 'hover:bg-bg-primary', 'text-text-primary', 'border', 'border-border-primary', 'hover:border-accent/40', 'transition-colors', 'duration-300', 'cursor-pointer', 'shadow-sm')}
                  >
                    Submit Another Inquiry
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium FAQ Section */}
      <section className={clsx('max-w-4xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'text-left', 'relative', 'z-10', 'py-8', 'lg:py-12', 'mb-8', 'lg:mb-12')}>
        <div className={clsx('text-center', 'mb-12', 'sm:mb-16')}>
          <span className={clsx('inline-flex', 'items-center', 'gap-2', 'px-4', 'py-1.5', 'rounded-full', 'bg-bg-secondary/80', 'border', 'border-border-primary/80', 'text-sm', 'uppercase', 'tracking-[0.2em]', 'font-extrabold', 'text-accent', 'font-mono', 'mb-6', 'backdrop-blur-md', 'shadow-sm')}>
            <HelpCircle size={14} className={clsx('text-highlight', 'animate-pulse')} />
            Common Inquiries
          </span>
          <h2 className={clsx('text-3xl', 'sm:text-4xl', 'font-display', 'font-bold', 'text-text-primary', 'mt-4', 'tracking-tight')}>Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              className={`glass-card bg-bg-card backdrop-blur-md border rounded-2xl overflow-hidden font-sans transition-colors duration-300 shadow-sm ${openFaq === i ? 'border-accent/40 shadow-md' : 'border-border-primary hover:border-border-hover'}`}
            >
              <button
                onClick={() => toggleFaq(i)}
                className={clsx('w-full', 'flex', 'items-center', 'justify-between', 'p-5', 'sm:p-6', 'text-left', 'font-semibold', 'text-text-secondary', 'hover:text-text-primary', 'transition-colors', 'cursor-pointer', 'outline-none')}
              >
                <span className={clsx('text-sm', 'sm:text-base', 'flex', 'items-center', 'gap-3', 'sm:gap-4', 'font-display', 'tracking-tight', 'text-text-primary', 'font-bold', 'pr-4')}>
                  <span className={`p-2 rounded-lg transition-colors duration-300 ${openFaq === i ? 'bg-accent/10 text-accent' : 'bg-bg-secondary text-text-muted'}`}>
                    <HelpCircle size={18} />
                  </span>
                  {faq.q}
                </span>
                <div className={`p-1.5 rounded-full border transition-all duration-300 ${openFaq === i ? 'border-accent/30 bg-accent/10 text-accent' : 'border-transparent text-text-muted group-hover:border-border-primary bg-bg-secondary'}`}>
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
                    <div className={clsx('p-5', 'sm:p-6', 'pt-0', 'sm:pt-0', 'text-sm', 'sm:text-base', 'text-text-secondary', 'leading-relaxed', 'font-medium', 'border-t', 'border-border-primary', 'mt-2')}>
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

    </motion.div>
  );
}
