import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Development', 'AI', 'Automation', 'Cloud', 'Business Growth', 'Technology Trends'];

  const posts = [
    {
      id: 'serverless-databases',
      title: 'The Shift to Serverless Database Clusters: Scaling and Costs',
      category: 'Cloud',
      readTime: '6 Min Read',
      date: 'June 05, 2026',
      desc: 'An in-depth review comparing traditional VMs with AWS Aurora Serverless and DynamoDB architectures for fluctuating enterprise workloads.',
      author: 'Jason Vance'
    },
    {
      id: 'rag-crm-integration',
      title: 'Integrating Custom Retrieval-Augmented Generation (RAG) Models into CRMs',
      category: 'AI',
      readTime: '8 Min Read',
      date: 'May 28, 2026',
      desc: 'How utilizing semantic vector databases allows corporate support agents to query internal documentation safely and eliminate 90% of support tickets.',
      author: 'Arthur Sterling'
    },
    {
      id: 'mobile-performance-tuning',
      title: 'Maximizing Mobile Conversion: React Native Performance Audits',
      category: 'Development',
      readTime: '5 Min Read',
      date: 'May 14, 2026',
      desc: 'Practical strategies to optimize JS thread load, eliminate memory leaks, and configure fast biometric authentication routes.',
      author: 'Meera Patel'
    },
    {
      id: 'brittle-monolith-cost',
      title: 'Why Enterprise Software Fails: The Hidden Cost of Brittle Monoliths',
      category: 'Business Growth',
      readTime: '7 Min Read',
      date: 'April 29, 2026',
      desc: 'Evaluating structural code rot and technical debt bottlenecks. Why investing in modular software engineering saves 3x development costs.',
      author: 'Arthur Sterling'
    },
    {
      id: 'document-automation-pipelines',
      title: 'Automating Administrative Workflows Using AI Agent Scripts',
      category: 'Automation',
      readTime: '6 Min Read',
      date: 'April 12, 2026',
      desc: 'Step-by-step walkthrough mapping document parses, invoice metadata extraction, and Salesforce API syncing routines.',
      author: 'Jason Vance'
    },
    {
      id: 'nextjs-speed-optimizations',
      title: 'Optimizing Next.js Loading Speeds for High Traffic SaaS Platforms',
      category: 'Development',
      readTime: '4 Min Read',
      date: 'March 24, 2026',
      desc: 'Leveraging Server Actions, Edge runtimes, and optimized script loads to drop aggregate PageSpeed index durations under 1.2s.',
      author: 'Meera Patel'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative pt-20 pb-20 bg-bg-primary text-text-primary theme-transition min-h-screen">
      
      {/* Decorative Blur */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 text-center">
        <span className="text-xs uppercase tracking-wider font-semibold text-accent">
          Quantixx Insights
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mt-3 leading-tight">
          Technology & Architecture Trends
        </h1>
        <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
          Stay updated on the latest engineering best practices, AI pipeline blueprints, cloud costs optimization, and design system workflows.
        </p>
      </section>

      {/* Search and Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border-primary pb-8">
          
          {/* Categories select tabs */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-accent/10 border border-accent/40 text-accent shadow-md'
                    : 'bg-bg-secondary border border-transparent text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box widget */}
          <div className="relative w-full md:max-w-xs order-1 md:order-2">
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-bg-primary border border-border-primary focus:border-accent focus:ring-1 focus:ring-accent rounded-sm py-2.5 pl-10 pr-4 text-xs text-text-primary placeholder-text-muted outline-none transition-all"
            />
            <Search size={14} className="absolute left-3.5 top-3.5 text-text-muted" />
          </div>

        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={post.id}
                  className="bg-bg-card border border-border-primary hover:border-accent/20 rounded-sm p-6 flex flex-col justify-between min-h-[320px] hover:shadow-[0_15px_35px_var(--shadow-heavy)] transition-all group font-sans"
                >
                  <div>
                    {/* Header tags */}
                    <div className="flex items-center justify-between text-[10px] text-text-secondary mb-4 font-mono">
                      <span className="flex items-center gap-1 text-accent uppercase tracking-wider font-semibold">
                        <Tag size={10} /> {post.category}
                      </span>
                      <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors line-clamp-2 leading-snug mb-2.5 font-display">
                      {post.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-6">
                      {post.desc}
                    </p>
                  </div>

                  {/* Footer metadata */}
                  <div className="pt-4 border-t border-border-primary flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-accent to-accent-hover flex items-center justify-center font-bold text-[10px] text-white">
                        {post.author.split(' ').pop().charAt(0)}
                      </div>
                      <div className="text-[10px]">
                        <span className="block text-text-primary font-semibold">{post.author}</span>
                        <span className="block text-text-muted font-mono flex items-center gap-1"><Clock size={9} /> {post.readTime}</span>
                      </div>
                    </div>
                    
                    <span className="p-1.5 bg-bg-secondary group-hover:bg-accent/10 text-text-secondary group-hover:text-accent rounded-sm transition-all">
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-bg-card border border-border-primary rounded-sm max-w-xl mx-auto font-sans">
            <BookOpen size={40} className="text-text-muted mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-text-primary font-display">No articles matched your search</h3>
            <p className="text-xs text-text-secondary mt-2">Try clearing your filters or testing other tech keywords.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-bg-secondary hover:bg-bg-elevated text-text-primary rounded-sm text-xs border border-border-primary transition-colors cursor-pointer"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
