import { motion } from 'framer-motion';
import { Target, Shield, Users, Flame, Cpu, ArrowUpRight, CheckCircle2, ShieldAlert, MessageSquare, Key, RefreshCw, Terminal, Globe } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import clsx from 'clsx';

export default function About() {
  const { openModal } = useModal();

  const values = [
    { title: 'Technical Integrity', desc: 'We do not build minimum viable code that breaks. We build clean, modular architectures designed to withstand extreme enterprise workloads.', icon: Cpu },
    { title: 'Absolute Transparency', desc: 'No developer black holes. Clients have direct access to staging servers, active repository commits, and dedicated Slack channels.', icon: Shield },
    { title: 'Security First', desc: 'From secure database VPC configurations to multi-factor auth integrations, compliance guidelines are embedded in our workflow.', icon: Key },
    { title: 'Founder Partnership', desc: 'We operate as direct technical advisors. You work directly with co-founders who write the code and manage setups.', icon: Users },
  ];

  const playbook = [
    { step: '01', title: 'Consultation & Mutual NDA', desc: 'We sign mutual NDAs to protect your proprietary ideas and IP. We review bottlenecks and deliver a free scope blueprint within 48 hours.' },
    { step: '02', title: 'Direct Slack Integration', desc: 'No project managers or sales middle-men. You communicate directly on Slack with the co-founders coding your systems, with daily updates.' },
    { step: '03', title: 'Continuous Commits & Deploy', desc: 'We work in rapid sprint cycles. You get access to staging branches and review code live as we build and launch updates.' },
    { step: '04', title: '100% IP & Handoff Ownership', desc: 'Upon deploy, we transition complete ownership of repository branches, servers, and configuration blueprints with clear documentation.' }
  ];

  const leadership = [
    {
      name: 'Arthur Sterling',
      role: 'Co-Founder & Systems Architect',
      bio: 'Arthur leads the system architecture and low-latency infrastructure design at Quantixx. Previously, he was a Lead Systems Architect designing payments engine internals at Stripe. He specializes in designing robust backend systems that handle billions of events per second with zero tolerance for downtime.',
      photo: '/arthur_sterling.png',
      initial: 'AS',
      accentColor: 'cyan',
      themeGradient: 'from-[#0EA5E9]/20 via-[#0EA5E9]/5 to-transparent',
      quote: "Uptime isn't a goal; it's a structural requirement of modern business.",
      focus: ["Distributed Architectures", "High-Availability Networking", "Rust & Go Development", "Stripe Engine Design"],
      stats: [
        { label: 'Latency SLA', value: '< 2.4ms' },
        { label: 'Active Cluster', value: 'AWS us-west-2' },
        { label: 'Primary Language', value: 'Rust / Go' }
      ]
    },
    {
      name: 'Meera Patel',
      role: 'Co-Founder & AI Operations Lead',
      bio: 'Meera spearheads the cloud infrastructure, automation, and serverless AI orchestration pipelines. Prior to co-founding Quantixx, she was a Senior Cloud Developer at AWS, helping enterprise partners implement scalable serverless VPCs and secure vector database deployments.',
      photo: '/meera_patel.png',
      initial: 'MP',
      accentColor: 'rose',
      themeGradient: 'from-[#E11D48]/20 via-[#E11D48]/5 to-transparent',
      quote: "We eliminate administrative drag to code directly with builders.",
      focus: ["Serverless VPCs", "Vector RAG Pipelines", "Infrastructure as Code", "Terraform & AWS IAM"],
      stats: [
        { label: 'Compute Setup', value: 'Serverless Auto-scale' },
        { label: 'Vector Engine', value: 'Pinecone / pgvector' },
        { label: 'Infrastructure', value: 'Terraform IaC' }
      ]
    }
  ];

  return (
    <div className={clsx('relative', 'overflow-hidden', 'bg-bg-primary', 'text-text-primary', 'theme-transition', 'bg-grid-tech', 'pt-28', 'pb-16', 'min-h-screen')}>

      {/* Ambient background glows */}
      <div className={clsx('absolute', 'top-[8%]', 'right-[-12%]', 'w-[500px]', 'h-[500px]', 'bg-gradient-to-br', 'from-accent/5', 'to-highlight/5', 'rounded-full', 'blur-[140px]', 'pointer-events-none', '-z-10', 'animate-pulse-slow')} />
      <div className={clsx('absolute', 'top-[45%]', 'left-[-15%]', 'w-[600px]', 'h-[600px]', 'bg-gradient-to-tr', 'from-highlight/5', 'to-accent/5', 'rounded-full', 'blur-[150px]', 'pointer-events-none', '-z-10')} />

      {/* 1. HERO HEADER FOLD */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-14', 'text-center', 'relative', 'z-10')}>
        <span className={clsx('text-xs', 'uppercase', 'tracking-[0.25em]', 'font-extrabold', 'text-accent', 'bg-accent/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'inline-block')}>
          Company Profile
        </span>
        <h1 className={clsx('text-4xl', 'sm:text-5xl', 'lg:text-6xl', 'font-display', 'font-extrabold', 'text-text-primary', 'mt-4', 'max-w-4xl', 'mx-auto', 'leading-tight', 'tracking-tight', 'text-balance')}>
          Senior Engineers Building for <span className="accent-text-gradient">Reliability & Scale</span>
        </h1>
        <p className={clsx('text-sm', 'sm:text-base', 'text-text-secondary', 'max-w-2xl', 'mx-auto', 'mt-5', 'leading-relaxed', 'font-light', 'font-sans', 'text-balance', 'text-center')}>
          We are a remote-first, virtual systems engineering studio. We partner with teams globally to deploy secure software architectures, cloud infrastructures, and automated AI workflows.
        </p>
      </section>

      {/* Story & Philosophy Section */}
      <section className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'mb-24', 'font-sans', 'relative', 'z-10')}>
        <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-12', 'items-center')}>

          <div className={clsx('text-left', 'space-y-6')}>
            <h2 className={clsx('text-2xl', 'sm:text-3xl', 'font-display', 'font-bold', 'text-text-primary')}>Our Story & Core Philosophy</h2>
            <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
              We founded Quantixx as a virtual, remote-first systems lab to solve the biggest bottleneck in product development: agency communication black holes and brittle architectures. By keeping our team lightweight and engineer-focused, we work directly on your codebase with zero administrative overhead.
            </p>
            <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
              We focus entirely on software craftsmanship, clean code architecture, and transparent communication. By operating virtually, we collaborate with builders and enterprises worldwide, delivering high-performance platforms that scale effortlessly.
            </p>
            <div className={clsx('bg-bg-secondary/60', 'border', 'border-border-primary', 'rounded-xl', 'p-4.5', 'flex', 'gap-4', 'items-center', 'backdrop-blur-sm')}>
              <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-accent/10', 'text-accent', 'flex', 'items-center', 'justify-center', 'shrink-0')}>
                <Flame size={18} />
              </div>
              <span className={clsx('text-xs', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                "Our mission is simple: design and engineer software that stands the test of high-traffic scale and operates securely under any load."
              </span>
            </div>
          </div>

          {/* Mission & Vision cards */}
          <div className="space-y-6">
            <div className={clsx('bg-bg-card', 'border', 'border-border-primary', 'rounded-xl', 'p-6', 'text-left', 'relative', 'overflow-hidden', 'group', 'hover:border-accent/30', 'transition-colors')}>
              <div className={clsx('absolute', 'top-0', 'right-0', 'w-24', 'h-24', 'bg-accent/5', 'rounded-bl-full', 'pointer-events-none', 'group-hover:bg-accent/8', 'transition-colors')} />
              <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-accent/10', 'text-accent', 'flex', 'items-center', 'justify-center', 'mb-4')}><Target size={20} /></div>
              <h3 className={clsx('text-lg', 'font-bold', 'text-text-primary', 'mb-2', 'font-display')}>Our Mission</h3>
              <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                To engineer custom software architectures and deploy integrations that accelerate enterprise operational speed, improve security barriers, and drive measurable revenue lifts.
              </p>
            </div>

            <div className={clsx('bg-bg-card', 'border', 'border-border-primary', 'rounded-xl', 'p-6', 'text-left', 'relative', 'overflow-hidden', 'group', 'hover:border-highlight/30', 'transition-colors')}>
              <div className={clsx('absolute', 'top-0', 'right-0', 'w-24', 'h-24', 'bg-highlight/5', 'rounded-bl-full', 'pointer-events-none', 'group-hover:bg-highlight/8', 'transition-colors')} />
              <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-highlight/10', 'text-highlight', 'flex', 'items-center', 'justify-center', 'mb-4')}><Shield size={20} /></div>
              <h3 className={clsx('text-lg', 'font-bold', 'text-text-primary', 'mb-2', 'font-display')}>Our Vision</h3>
              <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light')}>
                To be the primary global technology partner trusted by enterprise businesses to solve complex structural automation, software engineering, and AI integration tasks.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className={clsx('py-20', 'bg-bg-secondary/40', 'border-y', 'border-border-primary', 'mb-24', 'relative', 'z-10', 'backdrop-blur-sm')}>
        <div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'text-center')}>
          <div className="mb-16">
            <span className={clsx('text-xs', 'uppercase', 'tracking-wider', 'font-semibold', 'text-accent', 'font-mono')}>Commitment</span>
            <h2 className={clsx('text-3xl', 'font-display', 'font-bold', 'text-text-primary', 'mt-2')}>Our Code of Values</h2>
            <p className={clsx('text-sm', 'text-text-secondary', 'mt-2', 'font-sans', 'font-light')}>These guidelines dictate how we write files, coordinate sprints, and interface with partners.</p>
          </div>

          <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-6', 'text-left', 'font-sans')}>
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className={clsx('bg-bg-card', 'border', 'border-border-primary', 'hover:border-accent/20', 'rounded-xl', 'p-6', 'transition-all', 'group', 'shadow-sm', 'hover:shadow-md')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-bg-secondary', 'flex', 'items-center', 'justify-center', 'text-accent', 'mb-4', 'border', 'border-border-primary', 'group-hover:border-accent/30', 'group-hover:bg-accent/10', 'transition-colors')}><Icon size={18} /></div>
                  <h3 className={clsx('text-base', 'font-bold', 'text-text-primary', 'mb-2', 'font-display')}>{val.title}</h3>
                  <p className={clsx('text-xs', 'text-text-secondary', 'leading-relaxed', 'font-light')}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Guarantees Playbook */}
      <section className={clsx('max-w-5xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'mb-24', 'relative', 'z-10')}>
        <div className={clsx('text-center', 'mb-16')}>
          <span className={clsx('text-xs', 'uppercase', 'tracking-wider', 'font-semibold', 'text-accent', 'font-mono')}>Engagement Model</span>
          <h2 className={clsx('text-3xl', 'font-display', 'font-bold', 'text-text-primary', 'mt-2')}>How We Work with Clients</h2>
          <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'mt-2', 'font-light', 'max-w-xl', 'mx-auto')}>
            We operate under a transparent framework. Here is our client onboarding and development roadmap.
          </p>
        </div>

        {/* Playbook track */}
        <div className={clsx('relative', 'border-l', 'border-border-primary', 'pl-6', 'sm:pl-10', 'space-y-10', 'max-w-3xl', 'mx-auto', 'text-left', 'font-sans')}>
          {playbook.map((item, i) => (
            <div key={i} className={clsx('relative', 'group')}>
              {/* timeline node dot */}
              <div className={clsx('absolute', '-left-[31px]', 'sm:-left-[47px]', 'top-1.5', 'w-4', 'h-4', 'rounded-full', 'bg-bg-primary', 'border-[3px]', 'border-accent', 'group-hover:bg-accent', 'transition-all')} />
              <div className={clsx('bg-bg-card', 'border', 'border-border-primary', 'group-hover:border-accent/25', 'p-5', 'rounded-xl', 'transition-all', 'shadow-sm')}>
                <span className={clsx('text-[10px]', 'font-bold', 'font-mono', 'text-accent')}>STEP {item.step}</span>
                <h3 className={clsx('text-lg', 'font-bold', 'text-text-primary', 'mt-1', 'mb-2', 'font-display')}>{item.title}</h3>
                <p className={clsx('text-xs', 'text-text-secondary', 'leading-relaxed', 'font-light')}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className={clsx('max-w-6xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'mb-24', 'font-sans', 'relative', 'z-10')}>
        <div className={clsx('text-center', 'mb-20')}>
          <span className={clsx('text-xs', 'uppercase', 'tracking-[0.2em]', 'font-extrabold', 'text-accent', 'bg-accent/10', 'px-3.5', 'py-1.5', 'rounded-sm', 'inline-block')}>
            Our Leadership
          </span>
          <h2 className={clsx('text-3xl', 'sm:text-4xl', 'font-display', 'font-extrabold', 'text-text-primary', 'mt-4')}>
            Direct Access to Co-Founders
          </h2>
          <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'mt-3', 'font-light', 'max-w-xl', 'mx-auto', 'leading-relaxed')}>
            We operate as active developers and architects. You interface directly with the leaders writing the code and provisioning the servers.
          </p>
        </div>

        <div className={clsx('space-y-16', 'max-w-5xl', 'mx-auto')}>
          {leadership.map((lead, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={clsx('glass-card', 'border', 'border-white/[0.08]', 'hover:border-white/[0.15]', 'rounded-3xl', 'p-6', 'sm:p-8', 'lg:p-10', 'relative', 'overflow-hidden', 'group', 'shadow-2xl', 'transition-all', 'duration-500', 'bg-gradient-to-br', 'from-bg-card/50', 'via-bg-card/20', 'to-transparent')}
              >
                {/* Asymmetrical background glows specific to each founder */}
                <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-96 h-96 bg-gradient-to-br ${lead.themeGradient} rounded-full blur-[100px] pointer-events-none -z-10 transition-opacity duration-500 opacity-60 group-hover:opacity-100`} />
                <div className={`absolute bottom-0 ${isEven ? 'left-1/4' : 'right-1/4'} w-72 h-72 bg-accent/4 rounded-full blur-[80px] pointer-events-none -z-10`} />

                {/* Tech grid texture in card */}
                <div className={clsx('absolute', 'inset-0', 'bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)]', 'bg-[size:24px_24px]', 'pointer-events-none', 'opacity-30', '-z-10')} />

                <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-8', 'lg:gap-12', 'items-center', 'relative', 'z-10')}>
                  {/* Portrait side */}
                  <div className={`lg:col-span-5 flex justify-center ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                    <div className={clsx('relative', 'group/photo')}>
                      {/* Stylized Outer Glow Frame */}
                      <div className={clsx('absolute', '-inset-2', 'rounded-2xl', 'bg-gradient-to-tr', 'from-accent/20', 'to-highlight/20', 'opacity-0', 'group-hover/photo:opacity-100', 'blur-lg', 'transition', 'duration-700', '-z-10')} />

                      {/* Inner Photo Frame */}
                      <div className={clsx('w-56', 'h-56', 'sm:w-64', 'sm:h-64', 'rounded-2xl', 'overflow-hidden', 'border', 'border-white/[0.08]', 'bg-bg-secondary', 'flex', 'items-center', 'justify-center', 'relative', 'shadow-2xl', 'aspect-square')}>
                        {lead.photo ? (
                          <img
                            src={lead.photo}
                            alt={lead.name}
                            className={clsx('w-full', 'h-full', 'object-cover', 'grayscale', 'group-hover/photo:grayscale-0', 'transition-all', 'duration-700', 'scale-100', 'group-hover/photo:scale-105')}
                          />
                        ) : (
                          <span className={clsx('font-display', 'text-4xl', 'font-extrabold', 'text-text-primary')}>{lead.initial}</span>
                        )}

                        {/* Floating Status Indicator Badge */}
                        <div className={clsx('absolute', 'bottom-3', 'left-3', 'bg-bg-primary/90', 'backdrop-blur-md', 'border', 'border-white/[0.08]', 'px-3', 'py-1', 'rounded-full', 'flex', 'items-center', 'gap-1.5', 'shadow-md')}>
                          <span className={clsx('relative', 'flex', 'h-2', 'w-2')}>
                            <span className={clsx('animate-ping', 'absolute', 'inline-flex', 'h-full', 'w-full', 'rounded-full', 'bg-emerald-400', 'opacity-75')}></span>
                            <span className={clsx('relative', 'inline-flex', 'rounded-full', 'h-2', 'w-2', 'bg-emerald-500')}></span>
                          </span>
                          <span className={clsx('text-[9px]', 'font-mono', 'font-bold', 'text-text-primary', 'tracking-wider', 'uppercase')}>Active Staging</span>
                        </div>
                      </div>

                      {/* Tech Role Accent Strip */}
                      <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-lg text-[10px] font-mono font-bold tracking-widest uppercase border backdrop-blur-md shadow-lg ${lead.accentColor === 'cyan' ? 'bg-[#0EA5E9]/10 text-[#0EA5E9] border-[#0EA5E9]/20 shadow-[#0EA5E9]/5' : 'bg-[#E11D48]/10 text-[#E11D48] border-[#E11D48]/20 shadow-[#E11D48]/5'
                        }`}>
                        {lead.accentColor === 'cyan' ? 'Architect' : 'AI Engineer'}
                      </div>
                    </div>
                  </div>

                  {/* Info Details side */}
                  <div className={clsx('lg:col-span-7', 'text-left', 'space-y-6')}>
                    <div>
                      {/* Name & Socials */}
                      <div className={clsx('flex', 'flex-wrap', 'items-center', 'gap-4', 'justify-between')}>
                        <div>
                          <h3 className={clsx('text-2xl', 'sm:text-3xl', 'font-extrabold', 'font-display', 'text-text-primary', 'tracking-tight')}>
                            {lead.name}
                          </h3>
                          <span className={clsx('text-xs', 'sm:text-sm', 'font-semibold', 'text-accent', 'font-mono', 'block', 'mt-1', 'tracking-wider', 'uppercase')}>
                            {lead.role}
                          </span>
                        </div>

                        {/* Social Icons */}
                        <div className={clsx('flex', 'gap-2')}>
                          <a
                            href="#"
                            className="w-8 h-8 rounded-full border border-white/[0.06] hover:border-white/[0.2] hover:bg-white/[0.05] text-text-secondary hover:text-text-primary flex items-center justify-center transition-all cursor-pointer"
                            aria-label={`${lead.name} GitHub`}
                          >
                            <Terminal size={14} />
                          </a>
                          <a
                            href="#"
                            className="w-8 h-8 rounded-full border border-white/[0.06] hover:border-white/[0.2] hover:bg-white/[0.05] text-text-secondary hover:text-text-primary flex items-center justify-center transition-all cursor-pointer"
                            aria-label={`${lead.name} LinkedIn`}
                          >
                            <Globe size={14} />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Specialized Bio */}
                    <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'leading-relaxed', 'font-light', 'font-sans')}>
                      {lead.bio}
                    </p>

                    {/* Stylized Quote Banner */}
                    <div className={clsx('relative', 'pl-5', 'py-2', 'border-l-2', 'border-accent/40', 'bg-white/[0.01]', 'rounded-r-lg', 'pr-4', 'font-sans', 'italic', 'text-sm', 'sm:text-base', 'text-text-primary/95', 'leading-relaxed', 'font-light')}>
                      <span className={clsx('absolute', 'left-1.5', 'top-0', 'font-serif', 'text-3xl', 'text-accent/30', 'select-none')}>“</span>
                      {lead.quote}
                    </div>

                    {/* System Stats Block */}
                    <div className={clsx('grid', 'grid-cols-3', 'gap-4', 'bg-bg-secondary/40', 'border', 'border-white/[0.04]', 'p-4', 'rounded-xl', 'font-mono', 'text-[10px]')}>
                      {lead.stats.map((stat, idx) => (
                        <div key={idx} className="space-y-1">
                          <span className={clsx('text-text-muted', 'block', 'uppercase', 'tracking-wider', 'text-[8px]')}>{stat.label}</span>
                          <span className={clsx('text-text-primary', 'font-bold', 'block', 'truncate')}>{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Focus Badges */}
                    <div className="space-y-2">
                      <span className={clsx('text-[9px]', 'uppercase', 'tracking-widest', 'text-text-muted', 'font-mono', 'font-bold', 'block')}>Focus Domains</span>
                      <div className={clsx('flex', 'flex-wrap', 'gap-2')}>
                        {lead.focus.map((foc, idx) => (
                          <span
                            key={idx}
                            className={clsx('px-2.5', 'py-1', 'rounded-md', 'text-[10px]', 'font-mono', 'text-text-secondary', 'border', 'border-white/[0.05]', 'bg-white/[0.02]', 'hover:border-accent/20', 'hover:text-text-primary', 'transition-all', 'cursor-default')}
                          >
                            {foc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* About CTA */}
      <section className={clsx('py-10', 'relative', 'z-10', 'max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'w-full', 'mt-10')}>
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
                <Shield size={11} className={clsx('text-highlight', 'animate-pulse')} />
                100% SECURE VIRTUAL COLLABORATION
              </span>
              <h2 className={clsx('text-3xl', 'sm:text-4xl', 'font-display', 'font-extrabold', 'text-text-primary', 'tracking-tight', 'leading-tight')}>
                Ready to Map Out <br className={clsx('hidden', 'sm:inline')} /> Your Architecture?
              </h2>
              <p className={clsx('text-xs', 'sm:text-sm', 'text-text-secondary', 'max-w-xl', 'leading-relaxed', 'font-sans', 'font-light')}>
                Connect directly with our co-founders. We will discuss your system requirements, suggest integration roadmaps, and deliver a comprehensive technical blueprint at zero initial cost.
              </p>

              {/* Trust points */}
              <div className={clsx('flex', 'flex-wrap', 'gap-x-6', 'gap-y-3', 'pt-4', 'border-t', 'border-border-primary/50', 'text-[10px]', 'sm:text-xs', 'font-mono', 'text-text-secondary')}>
                <div className={clsx('flex', 'items-center', 'gap-1.5')}>
                  <CheckCircle2 size={12} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>Free Scoping Call</span>
                </div>
                <div className={clsx('flex', 'items-center', 'gap-1.5')}>
                  <CheckCircle2 size={12} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>Direct Slack Channels</span>
                </div>
                <div className={clsx('flex', 'items-center', 'gap-1.5')}>
                  <CheckCircle2 size={12} className={clsx('text-highlight', 'animate-pulse-slow')} />
                  <span>Mutual NDA Signed First</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={openModal}
                  className={clsx('px-6', 'py-3.5', 'rounded-md', 'text-sm', 'font-bold', 'bg-accent', 'hover:bg-accent-hover', 'text-white', 'shadow-[0_0_20px_var(--accent-glow)]', 'transition-all', 'cursor-pointer', 'flex', 'items-center', 'gap-2', 'hover:-translate-y-0.5', 'transform', 'group')}
                >
                  <span>Request Scoping Call</span>
                  <ArrowUpRight size={14} className={clsx('group-hover:translate-x-0.5', 'transition-transform')} />
                </button>
              </div>
            </div>

            {/* Right Column: Dynamic stats / trust values */}
            <div className={clsx('lg:col-span-5', 'w-full')}>
              <div className={clsx('bg-bg-secondary/40', 'border', 'border-white/[0.05]', 'rounded-lg', 'p-5', 'shadow-inner', 'relative', 'overflow-hidden', 'backdrop-blur-md')}>
                <span className={clsx('text-[9px]', 'font-mono', 'text-text-muted', 'uppercase', 'tracking-widest', 'block', 'mb-4')}>Our Guarantees</span>
                <div className={clsx('space-y-3.5', 'font-mono', 'text-[9px]', 'text-text-secondary', 'font-light')}>
                  <div className={clsx('flex', 'justify-between', 'border-b', 'border-border-primary/40', 'pb-1.5')}>
                    <span className="text-text-muted">Response SLA:</span>
                    <span className={clsx('text-text-primary', 'font-bold')}>&lt; 4 Hours</span>
                  </div>
                  <div className={clsx('flex', 'justify-between', 'border-b', 'border-border-primary/40', 'pb-1.5')}>
                    <span className="text-text-muted">Dev Channel:</span>
                    <span className="text-accent">Direct Slack with Founders</span>
                  </div>
                  <div className={clsx('flex', 'justify-between', 'border-b', 'border-border-primary/40', 'pb-1.5')}>
                    <span className="text-text-muted">Intellectual Property:</span>
                    <span className={clsx('text-highlight', 'font-bold')}>100% Transfer Guarantee</span>
                  </div>
                  <div className={clsx('flex', 'justify-between')}>
                    <span className="text-text-muted">Virtual Security:</span>
                    <span className={clsx('text-text-primary', 'font-bold')}>VPC & Cloud Encrypted</span>
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
