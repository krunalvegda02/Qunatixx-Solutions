import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText } from '../components/animations/AnimatedText';
import { AnimatedSubText } from '../components/animations/AnimatedSubText';
import { Counter } from '../components/animations/Counter';
import { 
  Filter, Calendar, BarChart3, Settings, ShieldCheck, ArrowUpRight, X, Clock, 
  HelpCircle, Lightbulb, CheckCircle2, Search, Cpu, Database, Terminal, 
  Activity, Sparkles, TrendingUp
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

const ProjectMockup = ({ projectId }) => {
  return (
    <>
      {/* LogiRoute Mockup */}
      {projectId === 'logiroute' && (
        <div className="p-2 sm:p-3 bg-bg-secondary/60 border border-border-primary rounded-lg flex flex-col justify-between h-24 sm:h-36 overflow-hidden relative w-full group-hover/card:border-accent/40 transition-colors duration-500">
          <div className="flex items-center gap-1 border-b border-border-primary/50 pb-1.5 shrink-0">
            <span className="w-1 h-1 rounded-full bg-highlight/60" />
            <span className="w-1 h-1 rounded-full bg-yellow-500/60" />
            <span className="w-1 h-1 rounded-full bg-green-500/60" />
            <div className="ml-2 bg-bg-primary border border-border-primary/80 rounded-sm text-[6px] sm:text-[7px] font-mono text-text-muted px-2 py-0.5 flex-1 max-w-[120px] truncate text-left select-none">
              logiroute.io/dispatch
            </div>
          </div>
          <div className="flex-1 my-auto flex flex-col gap-1.5 py-1 text-[7px] font-mono">
            <div className="bg-bg-primary border border-border-primary p-1.5 rounded-sm flex items-center justify-between shadow-sm">
              <span className="text-text-primary font-bold">TRK-980 // Rotterdam</span>
              <span className="text-[6px] text-yellow-500 font-bold bg-yellow-500/10 px-1.5 py-0.25 rounded-sm flex items-center gap-0.5">
                <span className="w-0.5 h-0.5 rounded-full bg-yellow-500 animate-pulse" /> IN TRANSIT
              </span>
            </div>
            <div className="bg-bg-primary border border-border-primary p-1.5 rounded-sm flex items-center justify-between shadow-sm">
              <span className="text-text-primary font-bold">TRK-402 // Hamburg</span>
              <span className="text-[6px] text-emerald-500 font-bold bg-emerald-500/10 px-1.5 py-0.25 rounded-sm flex items-center gap-0.5">
                <span className="w-0.5 h-0.5 rounded-full bg-emerald-500" /> DELIVERED
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Finova Wallet Mockup */}
      {projectId === 'finova' && (
        <div className="p-2 bg-bg-secondary/60 border border-border-primary rounded-lg flex items-center justify-center h-36 overflow-hidden relative w-full">
          <div className="w-40 h-[130%] border border-border-hover bg-bg-primary rounded-xl p-1.5 flex flex-col justify-between shadow-md relative">
            <div className="w-10 h-1 bg-border-primary rounded-sm mx-auto mb-1 shrink-0" />
            <div className="flex-1 rounded-md bg-bg-secondary/40 border border-border-primary p-1.5 flex flex-col justify-between text-[7px] font-mono">
              <div className="text-center my-auto space-y-0.5">
                <span className="block text-[5px] text-text-muted uppercase tracking-wider">BALANCE</span>
                <span className="block text-[11px] font-extrabold text-text-primary font-display">$8,450.00</span>
                <span className="inline-block text-[6px] text-emerald-400 font-bold bg-emerald-400/10 px-1.5 py-0.25 rounded-sm mt-0.5">+35% Conversion</span>
              </div>
              <div className="border-t border-border-primary/50 pt-1.5 flex justify-between items-center text-[5px] text-text-muted">
                <span>KYC Audit</span>
                <span className="text-emerald-500 font-bold flex items-center gap-0.5">🟢 PASSED</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OptimaFlow Mockup */}
      {projectId === 'optimaflow' && (
        <div className="p-3 bg-bg-secondary/60 border border-border-primary rounded-lg flex flex-col justify-between h-36 overflow-hidden relative w-full">
          <div className="flex justify-between items-center text-[8px] font-mono text-text-muted border-b border-border-primary/50 pb-1 shrink-0">
            <span>AI DATA EXTRACTION</span>
            <span className="flex items-center gap-1 text-emerald-500">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" /> ACTIVE
            </span>
          </div>
          <div className="flex items-center justify-between my-auto py-1 text-[7px] font-mono relative">
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-border-primary -z-10" />
            <div className="absolute left-[30%] right-[30%] top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-accent to-highlight -z-10" />
            
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-7 h-7 rounded-md bg-bg-primary border border-border-primary flex items-center justify-center text-xs">
                📄
              </div>
              <span className="text-[5px] text-text-muted">invoice.pdf</span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shadow-sm animate-pulse">
                <Cpu size={12} />
              </div>
              <span className="text-[5px] text-text-primary font-bold">GPT-4</span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <div className="w-7 h-7 rounded-md bg-bg-primary border border-border-primary flex items-center justify-center text-xs">
                ⚙️
              </div>
              <span className="text-[5px] text-text-muted">Salesforce</span>
            </div>
          </div>
        </div>
      )}

      {/* ApexCloud Mockup */}
      {projectId === 'apexcloud' && (
        <div className="p-3 bg-bg-secondary/60 border border-border-primary rounded-lg flex flex-col justify-between h-36 overflow-hidden relative w-full">
          <div className="flex justify-between items-center text-[8px] font-mono text-text-muted border-b border-border-primary/50 pb-1 shrink-0">
            <span>AWS SERVERLESS NODES</span>
            <span className="flex items-center gap-1 text-emerald-500">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" /> ONLINE
            </span>
          </div>
          <div className="flex flex-col gap-1 my-auto py-1 font-mono text-[7px]">
            <div className="bg-bg-primary border border-border-primary p-1.5 rounded-sm flex items-center justify-between shadow-sm">
              <span className="text-text-secondary font-bold">Lambda Cluster</span>
              <span className="text-accent font-bold">Cost -40%</span>
            </div>
            <div className="bg-bg-primary border border-border-primary p-1.5 rounded-sm flex items-center justify-between shadow-sm">
              <span className="text-text-secondary font-bold">DynamoDB Table</span>
              <span className="text-emerald-500 font-bold">Latency 3ms</span>
            </div>
          </div>
        </div>
      )}

      {/* MediSync Mockup */}
      {projectId === 'medisync' && (
        <div className="p-3 bg-bg-secondary/60 border border-border-primary rounded-lg flex flex-col justify-between h-36 overflow-hidden relative w-full">
          <div className="flex justify-between items-center text-[8px] font-mono text-text-muted border-b border-border-primary/50 pb-1 shrink-0">
            <span>CALENDAR SCHEDULER</span>
            <span className="text-highlight font-mono flex items-center gap-0.5 text-[6px]">HIPAA SECURE</span>
          </div>
          <div className="grid grid-cols-3 gap-1 my-auto py-1 text-[7px] font-mono">
            <div className="bg-bg-primary border border-border-primary p-1 rounded-sm text-center">
              <span className="block text-text-muted text-[5px]">MON 8</span>
              <span className="text-text-secondary font-bold">Filled</span>
            </div>
            <div className="bg-bg-primary border border-accent/25 bg-accent/5 p-1 rounded-sm text-center">
              <span className="block text-accent text-[5px] font-bold">TUE 9</span>
              <span className="text-text-primary font-bold">10:30A</span>
            </div>
            <div className="bg-bg-primary border border-border-primary p-1 rounded-sm text-center opacity-60">
              <span className="block text-text-muted text-[5px]">WED 10</span>
              <span className="text-text-secondary font-bold">Open</span>
            </div>
          </div>
        </div>
      )}
    </>
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

  const projects = [
    {
      id: 'logiroute',
      title: 'LogiRoute Portal',
      category: ['Web Apps', 'Automation', 'SaaS'],
      metric: 'Reduced manual work by 80%',
      shortDesc: 'Automated global cargo dispatch schedule tracking and vendor invoicing.',
      problem: 'LogiRoute was managing cargo schedules using shared Excel spreadsheets and email chains, resulting in critical scheduling errors and billing delays.',
      solution: 'Designed and built a real-time dispatch dashboard featuring auto-allocation scripts, carrier GPS integrations, and automated PDF invoice generation.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'TailwindCSS'],
      impact: [
        'Automated 80% of manual scheduling tasks',
        'Saved $150k in yearly administrative overhead',
        'Reduced invoicing cycle from 14 days to instant'
      ],
      timeline: '3 Months',
      results: 'Operational bottleneck solved completely. Dispatch speeds increased from hours to minutes, with zero lost cargo reports recorded in the first quarter of deployment.'
    },
    {
      id: 'finova',
      title: 'Finova Mobile Wallet',
      category: ['Mobile Apps', 'SaaS', 'Enterprise'],
      metric: 'Increased conversion rate by 35%',
      shortDesc: 'Next-generation biometric payments wallet with streamlined onboarding.',
      problem: 'Finova experienced a 54% customer drop-off during the KYC registration phase on their mobile landing pages due to a cumbersome verification process.',
      solution: 'Created a cross-platform React Native wallet app with integrated OCR photo scanning, biometric sign-ins, and a 4-step user onboarding layout.',
      techStack: ['React Native', 'TypeScript', 'Node.js', 'Supabase', 'Stripe'],
      impact: [
        'Increased user conversion rates by 35%',
        'KYC approval times reduced from 2 days to under 5 mins',
        '4.8★ aggregate score on App Store & Google Play'
      ],
      timeline: '4 Months',
      results: 'User growth accelerated by 300% post-launch, allowing Finova to successfully secure their Series-A funding round ahead of projection.'
    },
    {
      id: 'optimaflow',
      title: 'OptimaFlow Automator',
      category: ['Automation', 'SaaS'],
      metric: 'Automated 90% of repetitive tasks',
      shortDesc: 'AI email parsing engine and automated CRM routing system.',
      problem: 'Customer service staff spent over 20 hours per week manually reading attachment invoices and copying billing data fields into their Salesforce CRM system.',
      solution: 'Developed an automated pipeline utilizing LLMs that extracts structured JSON data from incoming documents and routes records directly to CRM endpoints.',
      techStack: ['Python', 'LangChain', 'OpenAI GPT-4', 'Docker', 'FastAPI'],
      impact: [
        '90% of intake clerical work automated',
        'Reduced entry error rate to absolute 0%',
        'Freed 3 full-time employees to focus on client care'
      ],
      timeline: '2 Months',
      results: 'Billing data entry bottleneck eliminated. Response time to user inquiries dropped from 18 hours to immediate confirmation emails.'
    },
    {
      id: 'apexcloud',
      title: 'Apex Serverless Infrastructure',
      category: ['Cloud', 'Enterprise'],
      metric: 'Reduced server costs by 40%',
      shortDesc: 'Refactored monolithic hosting into highly scalable serverless nodes.',
      problem: 'Apex operated an oversized virtual machine cluster that stayed idle 70% of the day, resulting in high hosting costs.',
      solution: 'Refactored their monolithic core into an event-driven serverless architecture using AWS Lambda and automated infrastructure orchestration via Terraform.',
      techStack: ['AWS Lambda', 'Terraform', 'DynamoDB', 'API Gateway', 'Docker'],
      impact: [
        'Reduced monthly cloud hosting billing by 40%',
        'Achieved 99.99% system availability with automated failovers',
        'Scale response times dropped under 250 milliseconds'
      ],
      timeline: '2.5 Months',
      results: 'System successfully handled a 4x traffic surge during black-friday sales with zero manual developer intervention and zero performance lag.'
    },
    {
      id: 'medisync',
      title: 'MediSync Platform',
      category: ['Web Apps', 'Enterprise'],
      metric: 'Scheduling speeds improved by 70%',
      shortDesc: 'Compliance-ready patient medical portal and appointment router.',
      problem: 'Clinic staff spent an average of 12 minutes per call verifying insurance coverage and coordinating doctor calendars.',
      solution: 'Engineered a secure scheduling platform that integrates direct insurance API checks and routes appointments to specialists.',
      techStack: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker', 'TailwindCSS'],
      impact: [
        '70% faster patient onboarding and scheduling',
        '30% increase in daily clinic calendar utilization',
        'Fully HIPAA compliance-ready infrastructure configuration'
      ],
      timeline: '5 Months',
      results: 'Clinic operational capacity expanded instantly, allowing medical professionals to treat more patients daily with lower administrative drag.'
    }
  ];

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

  return (
    <div className="relative overflow-hidden bg-bg-primary text-text-primary theme-transition bg-grid-tech pt-28 pb-16 min-h-screen">
      
      {/* Ambient background glows */}
      <div className="absolute top-[8%] right-[-12%] w-[500px] h-[500px] bg-gradient-to-br from-accent/5 to-highlight/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-[45%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-tr from-highlight/5 to-accent/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* 1. HERO HEADER FOLD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-accent bg-accent/10 px-3.5 py-1.5 rounded-sm inline-block">
          Case Studies
        </span>
        <AnimatedText 
          as="h1"
          segments={[
            { text: "Enterprise Systems Built for " },
            { text: "Real Business Impact", className: "accent-text-gradient" }
          ]}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-text-primary mt-4 max-w-4xl mx-auto leading-tight tracking-tight text-balance"
        />
        <AnimatedSubText 
          text="Explore the tangible business outcomes, technical architectures, and metrics behind our successful digital transformations."
          className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto mt-5 leading-relaxed font-light font-sans text-balance text-center"
        />
      </section>

      {/* Search & Filter Controls Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center bg-bg-card/25 backdrop-blur-md p-3 rounded-xl border border-border-primary shadow-lg">
          {/* Filters List */}
          <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start w-full lg:w-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-md border transition-all cursor-pointer select-none flex items-center gap-1.5 shadow-sm ${
                  selectedFilter === filter
                    ? 'border-accent bg-accent/10 text-text-primary shadow-[0_0_12px_var(--accent-glow)]'
                    : 'border-border-primary bg-bg-secondary/40 text-text-secondary hover:text-text-primary hover:border-border-hover'
                }`}
              >
                <span>{filter}</span>
                <span className="text-[9px] opacity-60 bg-bg-primary/60 px-1.5 py-0.25 rounded-full font-mono">
                  {getFilterCount(filter)}
                </span>
              </button>
            ))}
          </div>

          {/* Live Search */}
          <div className="relative w-full lg:w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted">
              <Search size={14} />
            </span>
            <input
              type="text"
              placeholder="Search projects, tech, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-bg-secondary/30 border border-border-primary rounded-md pl-9 pr-8 py-2 text-xs font-sans text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-2.5 text-text-muted hover:text-text-primary transition-colors text-xs font-mono font-bold"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000"
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
                className={`bg-bg-card border border-border-primary rounded-xl p-5 lg:p-6 flex flex-col justify-between min-h-[320px] lg:min-h-[420px] cursor-pointer group/card transition-all duration-500 ease-out overflow-visible relative ${isHovered ? 'z-50 scale-[1.03] -translate-y-4 border-accent shadow-[0_0_80px_rgba(var(--color-accent),0.4)]' : 'z-0'} ${isOtherHovered ? 'opacity-30 blur-[4px]' : 'opacity-100 blur-none'}`}
              >
                {/* Background & Glows (Contained) */}
                <div className="absolute inset-0 bg-gradient-to-b from-bg-card to-bg-card/95 rounded-xl overflow-hidden pointer-events-none -z-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent group-hover/card:from-accent/20 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                </div>

                {/* Extreme Hover Out-of-Bounds Points */}
                <div className="absolute inset-0 pointer-events-none z-50">
                  {project.impact.map((imp, i) => {
                    const transforms = [
                      "group-hover/card:-translate-y-12 lg:group-hover/card:-translate-x-16 lg:group-hover/card:-translate-y-12",
                      "group-hover/card:-translate-y-4 lg:group-hover/card:translate-x-20 lg:group-hover/card:translate-y-2",
                      "group-hover/card:translate-y-12 lg:group-hover/card:-translate-x-10 lg:group-hover/card:translate-y-16"
                    ];
                    const origins = [
                      "top-[-10px] left-4 lg:left-0",
                      "top-1/3 right-4 lg:right-0",
                      "bottom-[-10px] left-4 lg:left-0"
                    ];
                    return (
                      <div 
                        key={i} 
                        className={`absolute ${origins[i]} opacity-0 group-hover/card:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform scale-50 group-hover/card:scale-100 ${transforms[i]} w-max max-w-[240px] sm:max-w-[280px]`}
                        style={{ transitionDelay: `${100 + i * 150}ms` }}
                      >
                        <div className="bg-bg-primary/80 backdrop-blur-2xl border border-border-primary p-4 rounded-xl shadow-[0_20px_50px_var(--shadow-heavy)]">
                          <span className="text-base sm:text-lg font-display font-black bg-clip-text text-transparent bg-gradient-to-br from-text-primary to-accent leading-tight">
                            {imp}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div>
                  {/* Category Pill */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.category.map((cat, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-sm text-[8px] font-mono tracking-wider uppercase bg-bg-secondary text-text-secondary border border-border-primary">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <motion.h3 layoutId={`title-${project.id}`} className="text-lg lg:text-xl font-display font-bold text-text-primary group-hover/card:text-accent transition-colors duration-500 mb-1 lg:mb-2 relative z-10 transform group-hover/card:translate-x-1">
                    {project.title}
                  </motion.h3>

                  <div className="grid [grid-template-areas:'stack'] mb-3 lg:mb-4 h-14 lg:h-16">
                    {/* Default Description */}
                    <motion.p layoutId={`desc-${project.id}`} className="[grid-area:stack] text-[11px] lg:text-xs text-text-secondary leading-relaxed font-sans font-light relative z-10 transform transition-all duration-500 group-hover/card:opacity-0 group-hover/card:-translate-y-2 line-clamp-2 lg:line-clamp-none">
                      {project.shortDesc}
                    </motion.p>

                    {/* Hover Highlight Data Reveal */}
                    <div className="[grid-area:stack] z-10 opacity-0 pointer-events-none group-hover/card:opacity-100 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-500 delay-100 flex flex-col justify-center gap-1.5 lg:gap-2">
                      {project.impact.slice(0, 2).map((imp, i) => (
                        <div key={i} className="flex items-start gap-1.5 lg:gap-2 text-[9px] lg:text-[10px] font-bold text-text-primary bg-highlight/5 border border-highlight/20 px-2 lg:px-2.5 py-1 lg:py-1.5 rounded-sm shadow-[0_0_15px_rgba(var(--color-highlight),0.1)] backdrop-blur-sm">
                          <TrendingUp size={12} className="text-highlight shrink-0 mt-0.5" />
                          <span className="leading-tight">{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High-Fidelity UI Graphic Mockups ("Screenshots") */}
                  <motion.div layoutId={`mockup-${project.id}`} className="transform group-hover/card:scale-[1.02] group-hover/card:-translate-y-1 transition-all duration-500 delay-100 relative z-10">
                    <ProjectMockup projectId={project.id} />
                  </motion.div>
                </div>

                {/* Outcome Badge */}
                <div className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-border-primary flex flex-col justify-between gap-3 lg:gap-4 group-hover/card:border-accent/30 transition-colors duration-500">
                  <div className="bg-bg-primary border border-highlight/20 rounded-md p-2 lg:p-2.5 text-left transform group-hover/card:-translate-y-1 group-hover/card:border-highlight/60 group-hover/card:shadow-[0_0_20px_rgba(var(--color-highlight),0.2)] transition-all duration-500 delay-150">
                    <span className="block text-[7px] lg:text-[8px] uppercase tracking-wider text-highlight font-bold font-mono">Business Outcome</span>
                    <span className="block text-[10px] lg:text-xs font-bold text-text-primary mt-0.5 group-hover/card:text-highlight transition-colors duration-500 truncate">
                      <Counter value={project.metric} />
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] lg:text-xs font-semibold text-text-secondary group-hover/card:text-accent transition-colors duration-500 relative z-10 transform group-hover/card:translate-x-1 delay-200">
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} className="group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform" />
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-hidden pointer-events-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-bg-primary/90 backdrop-blur-xl pointer-events-auto"
            />

            {/* Expanding Fullscreen Card */}
            <motion.div
              layoutId={`card-${activeProject.id}`}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl h-full max-h-[90vh] bg-bg-card border border-border-primary rounded-2xl overflow-y-auto lg:overflow-hidden shadow-[0_0_80px_var(--shadow-heavy)] z-10 flex flex-col lg:flex-row pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 lg:top-6 lg:right-6 z-50 p-2 lg:p-2.5 text-text-secondary hover:text-white rounded-full bg-bg-primary/50 hover:bg-black/60 backdrop-blur-md transition-colors cursor-pointer border border-border-primary hover:border-white/20"
                aria-label="Close panel"
              >
                <X size={18} />
              </button>

              {/* Left Column: Visuals & Core Info */}
              <div className="w-full lg:w-2/5 bg-bg-elevated p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border-primary relative overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                    {activeProject.category.map((cat, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-sm bg-accent/10 text-accent border border-accent/20 text-[10px] font-mono tracking-wider uppercase">
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <motion.h3 layoutId={`title-${activeProject.id}`} className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-text-primary mb-3 lg:mb-4 leading-tight tracking-tight">
                    {activeProject.title}
                  </motion.h3>
                  
                  <motion.p layoutId={`desc-${activeProject.id}`} className="text-sm text-text-secondary leading-relaxed mb-8">
                    {activeProject.shortDesc}
                  </motion.p>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border-primary/50 mb-auto mt-2">
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-text-muted font-mono mb-1.5">Timeline</span>
                      <span className="text-sm font-semibold text-text-primary flex items-center gap-2"><Clock size={14} className="text-accent" /> {activeProject.timeline}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-text-muted font-mono mb-1.5">Platform</span>
                      <span className="text-sm font-semibold text-text-primary flex items-center gap-2"><Terminal size={14} className="text-accent" /> {activeProject.category[0]}</span>
                    </div>
                  </div>

                  <motion.div layoutId={`mockup-${activeProject.id}`} className="relative z-10 w-full mt-12 mb-4">
                     <div className="w-full scale-110 sm:scale-125 origin-bottom">
                       <ProjectMockup projectId={activeProject.id} />
                     </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Detailed Case Study Content */}
              <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12 bg-bg-card h-auto lg:h-full lg:overflow-y-auto custom-scrollbar">
                
                {/* Metric Box */}
                <div className="bg-gradient-to-br from-bg-primary to-accent/5 border border-accent/20 rounded-lg p-6 mb-10 shadow-lg mt-2 lg:mt-0">
                  <span className="block text-[10px] uppercase tracking-wider text-accent font-bold font-mono">Business Outcome</span>
                  <span className="block text-2xl font-bold text-text-primary mt-2 font-display">
                    <Counter value={activeProject.metric} />
                  </span>
                </div>

                {/* Case details fields */}
                <div className="space-y-10 text-left font-sans">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-text-primary uppercase tracking-wider mb-4 border-b border-border-primary/50 pb-2">
                      <HelpCircle size={16} className="text-accent" />
                      <span>The Problem</span>
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed pl-2 border-l-2 border-border-primary">{activeProject.problem}</p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-text-primary uppercase tracking-wider mb-4 border-b border-border-primary/50 pb-2">
                      <Lightbulb size={16} className="text-accent" />
                      <span>Our Solution</span>
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed pl-2 border-l-2 border-border-primary">{activeProject.solution}</p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-text-primary uppercase tracking-wider mb-4 border-b border-border-primary/50 pb-2">
                      <Settings size={16} className="text-accent" />
                      <span>Technology Stack</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-bg-secondary text-text-primary border border-border-primary rounded-sm text-xs font-mono shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-text-primary uppercase tracking-wider mb-4 border-b border-border-primary/50 pb-2">
                      <BarChart3 size={16} className="text-accent" />
                      <span>Business Impact</span>
                    </h4>
                    <div className="space-y-3">
                      {activeProject.impact.map((imp, i) => (
                        <div key={i} className="flex gap-3 items-start text-sm text-text-secondary">
                          <CheckCircle2 size={16} className="text-highlight shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border-primary">
                    <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 font-display">Closing Results</h4>
                    <p className="text-sm text-text-secondary leading-relaxed bg-bg-primary/50 p-5 rounded-md border border-border-primary/50 italic">"{activeProject.results}"</p>
                  </div>
                </div>

                {/* Bottom Drawer CTA */}
                <div className="mt-12 pt-8 border-t border-border-primary flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      setActiveProject(null);
                      setTimeout(() => openModal(), 300); // Wait for modal to close before opening contact modal
                    }}
                    className="flex-1 py-4 px-6 rounded-sm text-sm font-bold text-center bg-accent hover:bg-highlight text-white shadow-[0_0_20px_rgba(var(--color-accent),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-accent),0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
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
      <section className="py-10 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="glass-card border border-white/[0.08] rounded-xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group w-full bg-gradient-to-br from-bg-card/45 via-bg-card/20 to-accent/4 backdrop-blur-xl">
          {/* Inner ambient glows */}
          <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-accent/8 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />
          <div className="absolute bottom-0 right-10 w-[250px] h-[250px] bg-highlight/8 rounded-full blur-[80px] pointer-events-none -z-10" />
          
          {/* Inner Grid Visualizer */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-40 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Core Pitch */}
            <div className="lg:col-span-7 text-left space-y-5">
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1.5 rounded-sm border border-accent/20 inline-flex items-center gap-1.5">
                <ShieldCheck size={11} className="text-highlight animate-pulse" /> 
                100% IP & CODE OWNERSHIP HANDOVER
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-text-primary tracking-tight leading-tight">
                Have a Similar System <br className="hidden sm:inline" /> to Implement?
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary max-w-xl leading-relaxed font-sans font-light">
                Speak directly with our systems architects. We will analyze your operational bottlenecks, suggest integration roadmaps, and provide a comprehensive technical blueprint at zero initial cost.
              </p>
              
              {/* Trust points */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-border-primary/50 text-[10px] sm:text-xs font-mono text-text-secondary">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-highlight animate-pulse-slow" />
                  <span>Free Scoping Consultation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-highlight animate-pulse-slow" />
                  <span>48hr Blueprint Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-highlight animate-pulse-slow" />
                  <span>NDA Safeguards Signed First</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={openModal}
                  className="px-6 py-3.5 rounded-md text-sm font-bold bg-accent hover:bg-accent-hover text-white shadow-[0_0_20px_var(--accent-glow)] transition-all cursor-pointer flex items-center gap-2 hover:-translate-y-0.5 transform group"
                >
                  <span>Request Scoping Call</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Case study stats summary panel */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-bg-secondary/40 border border-white/[0.05] rounded-lg p-5 shadow-inner relative overflow-hidden backdrop-blur-md">
                <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest block mb-4">Quantixx Track Record</span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-bg-primary/80 border border-border-primary p-3 rounded-lg text-left">
                    <span className="text-[8px] font-mono text-text-muted block uppercase">TOTAL ROI SAVED</span>
                    <span className="text-lg font-bold text-text-primary mt-1 block font-display">$1.2M+</span>
                  </div>
                  <div className="bg-bg-primary/80 border border-border-primary p-3 rounded-lg text-left">
                    <span className="text-[8px] font-mono text-text-muted block uppercase">AVG TASK REDUCTION</span>
                    <span className="text-lg font-bold text-text-primary mt-1 block font-display">85%</span>
                  </div>
                  <div className="bg-bg-primary/80 border border-border-primary p-3 rounded-lg text-left">
                    <span className="text-[8px] font-mono text-text-muted block uppercase">DELIVERED PIPELINES</span>
                    <span className="text-lg font-bold text-text-primary mt-1 block font-display">40+ Systems</span>
                  </div>
                  <div className="bg-bg-primary/80 border border-border-primary p-3 rounded-lg text-left">
                    <span className="text-[8px] font-mono text-text-muted block uppercase">IP TRANSFER RATE</span>
                    <span className="text-lg font-bold text-emerald-400 mt-1 block font-display">100%</span>
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
