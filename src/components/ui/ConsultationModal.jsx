import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, Calendar, Clock } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function ConsultationModal() {
  const { isModalOpen, closeModal } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web Development',
    budget: '$10,000 - $25,000',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'Web Development',
      budget: '$10,000 - $25,000',
      message: ''
    });
    closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-bg-primary/85 backdrop-blur-xs"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl h-full sm:h-auto max-h-[100dvh] sm:max-h-[90vh] bg-bg-elevated border-0 sm:border border-border-primary rounded-none sm:rounded-sm overflow-y-auto z-10 shadow-[0_30px_70px_var(--shadow-heavy)] theme-transition font-sans flex flex-col"
          >
            {/* Top Glow bar */}
            <div className="h-1.5 w-full bg-accent" />

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-text-secondary hover:text-text-primary rounded-sm bg-bg-secondary hover:bg-bg-elevated transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!isSubmitted ? (
              <div className="p-6 md:p-8 text-left">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-semibold bg-highlight/15 text-highlight border border-highlight/20 mb-2">
                    <Calendar size={12} /> Live Consulting
                  </span>
                  <h3 className="text-2xl font-display font-bold text-text-primary">
                    Book a Free Consultation
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    Discuss your project scope, engineering requirements, and budget framework with our tech leads.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary outline-none transition-all"
                      >
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>AI & Machine Learning</option>
                        <option>Business Automation</option>
                        <option>Cloud Infrastructure</option>
                        <option>Custom SaaS Solution</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Estimated Budget Range
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {['$10k - $25k', '$25k - $50k', '$50k - $100k+'].map((budgetOption) => (
                        <button
                          key={budgetOption}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: budgetOption })}
                          className={`py-2 px-3 text-xs font-medium rounded-sm border transition-all cursor-pointer ${
                            formData.budget === budgetOption
                              ? 'border-accent bg-accent/10 text-text-primary shadow-[0_0_15px_var(--accent-glow)]'
                              : 'border-border-primary bg-bg-secondary hover:bg-bg-elevated text-text-secondary hover:text-text-primary'
                          }`}
                        >
                          {budgetOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Project Goals & Details
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-all resize-none"
                      placeholder="Briefly describe what you're building..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border-primary">
                    <div className="flex items-center gap-2 text-xs text-text-secondary order-2 sm:order-1">
                      <Clock size={14} className="text-accent" />
                      <span>Response within 4 business hours</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold bg-accent hover:bg-accent-hover text-white shadow-[0_0_20px_var(--accent-glow)] transition-all cursor-pointer order-1 sm:order-2"
                    >
                      <span>Submit Request</span>
                      <Send size={14} />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <div className="flex justify-center mb-4 text-highlight">
                  <CheckCircle size={56} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-display font-bold text-text-primary mb-2">
                  Consultation Request Received!
                </h3>
                <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">
                  Thanks for reaching out, <span className="text-text-primary font-semibold">{formData.name}</span>. One of our Senior Technical Solutions Architects will review your details for <span className="text-text-primary font-semibold">{formData.service}</span> and reach out to schedule our session shortly.
                </p>
                <div className="bg-bg-secondary border border-border-primary rounded-sm p-4 max-w-sm mx-auto mb-6 text-left text-xs space-y-2 text-text-secondary">
                  <div className="flex justify-between"><span className="font-semibold text-text-primary">Name:</span> <span>{formData.name}</span></div>
                  <div className="flex justify-between"><span className="font-semibold text-text-primary">Service:</span> <span>{formData.service}</span></div>
                  <div className="flex justify-between"><span className="font-semibold text-text-primary">Budget:</span> <span>{formData.budget}</span></div>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-sm text-sm font-semibold bg-bg-secondary hover:bg-bg-elevated text-text-primary border border-border-primary transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
