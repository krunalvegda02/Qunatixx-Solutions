import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, CheckCircle, Clock } from 'lucide-react';

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
    <div className="relative pt-20 pb-20 bg-bg-primary text-text-primary theme-transition">
      
      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <span className="text-xs uppercase tracking-wider font-semibold text-accent">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mt-3 leading-tight">
          Let's Engineer Your <br />
          <span className="accent-text-gradient text-glow">Next Breakthrough</span>
        </h1>
        <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
          Request a scoping workshop with our technical leads. We will review your product parameters and deliver a structured initial architecture plan.
        </p>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-sans">
          
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-bg-card border border-border-primary rounded-sm p-6 space-y-6">
              <h3 className="text-lg font-bold text-text-primary font-display mb-2">Corporate Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-bg-secondary rounded-sm text-accent"><MapPin size={16} /></div>
                  <div>
                    <span className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">San Francisco HQ</span>
                    <span className="block text-sm text-text-secondary mt-1">Suite 500, 101 California St, San Francisco, CA 94111</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-bg-secondary rounded-sm text-accent"><Mail size={16} /></div>
                  <div>
                    <span className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">Email Correspondence</span>
                    <a href="mailto:solutions@quantixx.com" className="block text-sm text-text-secondary hover:text-text-primary mt-1">solutions@quantixx.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-bg-secondary rounded-sm text-accent"><Phone size={16} /></div>
                  <div>
                    <span className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">Phone Lines</span>
                    <a href="tel:+18005556272" className="block text-sm text-text-secondary hover:text-text-primary mt-1">+1 (800) 555-6272</a>
                  </div>
                </div>
              </div>

              {/* Response SLA Box */}
              <div className="bg-bg-primary border border-accent/25 rounded-sm p-4 flex gap-3.5 items-center">
                <div className="p-2 bg-accent/10 text-accent rounded-sm shrink-0">
                  <Clock size={16} className="animate-pulse" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-text-primary">4-Hour Response Guarantee</span>
                  <span className="block text-[10px] text-text-secondary mt-0.5">All enterprise project inquiry submissions receive responses during active Western business hours.</span>
                </div>
              </div>
            </div>

            {/* Stylized Dark Map Graphic */}
            <div className="bg-bg-card border border-border-primary rounded-sm p-6 aspect-[4/3] flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-center text-xs border-b border-border-primary pb-3">
                <span className="font-semibold text-text-secondary">Global Service Reach</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-highlight/15 text-highlight border border-highlight/20 text-[9px] font-bold">
                  Deploying Nodes Globally
                </span>
              </div>
              
              {/* Graphic background showing abstract nodes */}
              <div className="relative flex-1 flex items-center justify-center">
                <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="2 4" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="2 4" />
                </svg>
                
                {/* Node coordinates */}
                <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_var(--accent-glow)] animate-ping" />
                <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-accent rounded-full" />
                
                <div className="absolute top-[50%] right-[25%] w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_var(--accent-glow)] animate-ping" />
                <div className="absolute top-[50%] right-[25%] w-2 h-2 bg-accent rounded-full" />

                <div className="absolute bottom-[30%] left-[45%] w-2 h-2 bg-highlight rounded-full shadow-[0_0_10px_var(--color-highlight)] animate-ping" />
                <div className="absolute bottom-[30%] left-[45%] w-2 h-2 bg-highlight rounded-full" />

                <span className="text-[10px] text-text-muted font-mono absolute bottom-2 left-2">HQ: SF, California</span>
                <span className="text-[10px] text-text-muted font-mono absolute bottom-2 right-2">Nodes: SF, London, Tokyo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-bg-card border border-border-primary rounded-sm p-6 sm:p-8 backdrop-blur-md relative font-sans">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent pointer-events-none" />

            {!formSubmitted ? (
              <div>
                <h3 className="text-xl font-bold font-display text-text-primary mb-2">Project Scoping Inquiry</h3>
                <p className="text-xs text-text-secondary mb-6 leading-relaxed">
                  Provide brief details about your software build or cloud integration. Our engineering lead will prepare an agenda for our scoping session.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-all"
                        placeholder="Bruce Wayne"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-all"
                        placeholder="bruce@waynecorp.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-all"
                        placeholder="Wayne Enterprises"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Project Budget Framework</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary outline-none transition-all"
                      >
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000 - $100,000</option>
                        <option>$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Build Requirements & Targets</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none resize-none transition-all"
                      placeholder="Tell us what you're planning to build (e.g. Next.js SaaS portal, AWS cloud cluster, vector DB search engine)..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-sm text-sm font-bold bg-accent hover:bg-accent-hover text-white shadow-md hover:shadow-lg transition-all cursor-pointer mt-4 transition-colors"
                  >
                    <span>Send Project Details</span>
                    <Send size={14} />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-highlight/10 border border-highlight/30 flex items-center justify-center text-highlight mx-auto mb-6">
                  <CheckCircle size={30} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-primary mb-2">Scoping Inquiry Sent!</h3>
                <p className="text-text-secondary text-sm max-w-sm mx-auto mb-6 leading-relaxed font-sans">
                  Thanks, <span className="text-text-primary font-semibold">{formData.name}</span>. Our Senior Solution Engineer is reviewing your parameters for budget <span className="text-text-primary font-semibold">{formData.budget}</span>. We will follow up with scheduling links shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-sm text-xs font-bold bg-bg-secondary hover:bg-bg-elevated text-text-primary border border-border-primary transition-all cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-accent">Common Inquiries</span>
          <h2 className="text-3xl font-display font-bold text-text-primary mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-bg-card border border-border-primary rounded-sm overflow-hidden font-sans">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-text-secondary hover:text-text-primary transition-colors cursor-pointer outline-none"
              >
                <span className="text-sm sm:text-base flex items-center gap-2">
                  <HelpCircle size={16} className="text-accent" />
                  {faq.q}
                </span>
                <ChevronDown size={16} className={`text-text-secondary transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-accent' : ''}`} />
              </button>

              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-5 pt-0 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-primary">
                      {faq.a}
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
