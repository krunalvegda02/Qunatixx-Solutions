import clsx from 'clsx';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Globe, BookOpen, Gift, Briefcase, ChevronRight, X, Send, Paperclip, MapPin, Clock, DollarSign } from 'lucide-react';


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Careers() {
  const [activeRole, setActiveRole] = useState(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    role: '',
    coverLetter: ''
  });

  const benefits = [
    { title: 'Remote-First Culture', desc: 'Work from anywhere in the world. We coordinate via async pipelines so you manage your own hours.', icon: Globe },
    { title: 'Health & Wellness', desc: 'Complete premium medical, dental, and vision coverages, alongside annual gym/fitness allowances.', icon: Heart },
    { title: 'Continuous Learning', desc: '₹2,000 annual budget for books, courses, code bootcamps, and technical conference tickets.', icon: BookOpen },
    { title: 'Premium Gear Setup', desc: 'We ship a brand new MacBook Pro, high-resolution monitor, and ergonomic desk gear stipend.', icon: Gift },
  ];

  const positions = [
    {
      id: 'sr-react',
      title: 'Senior React / Next.js Engineer',
      department: 'Frontend Engineering',
      location: 'Remote (US / Europe)',
      type: 'Full-time',
      salary: '₹130k - ₹160k + Equity',
      requirements: [
        '5+ years professional JavaScript/TypeScript and React experience.',
        'Deep understanding of Next.js server actions, routing models, and TailwindCSS.',
        'Experience building enterprise SaaS interfaces with complex client-side state managers.',
        'High familiarity with CSS variables and performance tuning strategies.'
      ]
    },
    {
      id: 'cloud-arch',
      title: 'Solutions Cloud Architect (AWS)',
      department: 'DevOps & Systems',
      location: 'Remote (Global)',
      type: 'Full-time',
      salary: '₹140k - ₹175k + Equity',
      requirements: [
        '4+ years architecting secure AWS infrastructure setups.',
        'Expert-level automation in Terraform, Kubernetes, and Docker environments.',
        'Proven track record preparing backend environments for SOC2/ISO audit compliance.',
        'Strong network topology skills (VPC, CIDR blocks, secure IAM settings).'
      ]
    },
    {
      id: 'ai-dev',
      title: 'AI Platform Engineer (Python)',
      department: 'AI & Data Systems',
      location: 'Remote (Global)',
      type: 'Full-time',
      salary: '₹150k - ₹185k + Equity',
      requirements: [
        '3+ years implementing Large Language Model APIs (OpenAI, HuggingFace).',
        'Strong production coding skills in Python, FastAPI, and LangChain.',
        'Experience constructing vector database indices (Pinecone, pgvector) for RAG networks.',
        'Background evaluating accuracy metrics and token billing optimizations.'
      ]
    },
    {
      id: 'product-designer',
      title: 'UI/UX Product Designer',
      department: 'Design System',
      location: 'Remote (US / Europe)',
      type: 'Full-time',
      salary: '₹110k - ₹140k',
      requirements: [
        '4+ years designing high-fidelity dashboards and desktop portals in Figma.',
        'Proven skill drafting structured, reusable Figma design libraries.',
        'Strong understanding of design tokens, contrast accessibilities, and web grids.',
        'Portfolio displaying sleek, futuristic, minimalist aesthetics.'
      ]
    }
  ];

  const handleApplyClick = (position) => {
    setActiveRole(position);
    setFormData({
      ...formData,
      role: position.title
    });
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <motion.div
      className={clsx('relative', 'overflow-hidden', 'bg-bg-primary', 'text-text-primary', 'theme-transition', 'pt-28', 'pb-0', 'min-h-screen')}
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
              <Briefcase size={14} className="text-highlight" />
              Join Our Mission
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
            Build the Future With Us <br className="hidden md:block" />
            <motion.span
              className="text-accent"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Join Our Team.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mt-8 leading-relaxed"
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            We are a passionate team of builders, designers, and problem-solvers. We value creativity, collaboration, and the freedom to work from anywhere.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 text-center">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-accent">Why Quantixx</span>
          <h2 className="text-3xl font-display font-bold text-text-primary mt-2">Work Culture & Benefits</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left font-sans">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div key={i} className="bg-bg-card border border-border-primary rounded-sm p-6 relative overflow-hidden hover:border-accent/25 transition-all">
                <div className="w-10 h-10 rounded-sm bg-bg-secondary flex items-center justify-center text-accent mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Positions Accordion Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 text-left">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-accent">Hiring Board</span>
          <h2 className="text-3xl font-display font-bold text-text-primary mt-2">Active Open Positions</h2>
        </div>

        <div className="space-y-4 font-sans">
          {positions.map((pos) => (
            <div key={pos.id} className="bg-bg-card border border-border-primary hover:border-border-hover rounded-sm p-6 transition-all">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold text-text-primary font-display">{pos.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-text-secondary">
                    <span className="flex items-center gap-1"><Briefcase size={12} className="text-accent" /> {pos.department}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-accent" /> {pos.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} className="text-accent" /> {pos.type}</span>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleApplyClick(pos)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-sm text-xs font-bold bg-accent/10 hover:bg-accent text-accent hover:text-white border border-accent/20 hover:border-transparent transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Apply Role</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply slide-out form drawer */}
      <AnimatePresence>
        {activeRole && (
          <div className="fixed inset-0 z-100 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveRole(null)}
              className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-xl bg-bg-elevated border-l border-border-primary h-full overflow-y-auto p-6 sm:p-10 shadow-2xl z-10 text-left theme-transition font-sans"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveRole(null)}
                className="absolute top-6 right-6 p-2 text-text-secondary hover:text-text-primary rounded-full bg-bg-secondary hover:bg-bg-elevated transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {!formSubmitted ? (
                <div className="pt-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-sm border border-accent/20">
                    Application Form
                  </span>
                  <h2 className="text-2xl font-display font-bold text-text-primary mt-3">{activeRole.title}</h2>
                  <div className="text-xs text-text-secondary space-y-1.5 mt-2 mb-6">
                    <div className="flex items-center gap-1.5"><MapPin size={12} className="text-accent" /> <span>Location: {activeRole.location}</span></div>
                    <div className="flex items-center gap-1.5"><DollarSign size={12} className="text-highlight" /> <span>Compensation: {activeRole.salary}</span></div>
                  </div>

                  {/* Requirements details */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Role Requirements:</h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-text-secondary">
                      {activeRole.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t border-border-primary">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none"
                        placeholder="Sarah Connor"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none"
                        placeholder="sarah@terminal.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">GitHub or Portfolio URL *</label>
                      <input
                        type="url"
                        required
                        value={formData.github}
                        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none"
                        placeholder="https://github.com/username"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Cover Letter / Technical Background *</label>
                      <textarea
                        rows="4"
                        required
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none resize-none"
                        placeholder="Briefly state your technical achievements and experience with React or Node..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Upload Resume (PDF format)</label>
                      <div className="border border-dashed border-border-primary rounded-sm p-4 text-center cursor-pointer hover:border-accent/30 transition-all flex flex-col items-center justify-center bg-bg-primary/50">
                        <Paperclip size={18} className="text-text-muted mb-1" />
                        <span className="text-xs text-text-secondary">Click to choose files or drag PDF here</span>
                        <span className="text-[9px] text-text-muted mt-1">Max file size 5MB</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-sm text-sm font-bold bg-accent hover:bg-accent-hover text-white shadow-md cursor-pointer mt-4 transition-colors"
                    >
                      <span>Submit Application</span>
                      <Send size={14} />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-highlight/15 border border-highlight/20 flex items-center justify-center text-highlight mb-6">
                    <Heart size={30} className="animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-2">Application Received!</h3>
                  <p className="text-text-secondary text-sm max-w-sm mb-6 leading-relaxed">
                    Thank you for applying for the <span className="text-text-primary font-semibold">{activeRole.title}</span> role. Our engineering recruitment team will review your Github repos and profile details, and reach out to coordinate steps under 3 business days.
                  </p>
                  <button
                    onClick={() => setActiveRole(null)}
                    className="px-6 py-2.5 rounded-sm text-xs font-bold bg-bg-secondary hover:bg-bg-elevated text-text-primary border border-border-primary transition-all cursor-pointer"
                  >
                    Return to Careers Board
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
