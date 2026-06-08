import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Tag, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { categories, posts } from '../data/blogData';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="relative pt-24 pb-24 bg-bg-primary text-text-primary theme-transition min-h-screen">
      
      {/* Premium Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 inset-x-0 h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-64 right-1/4 w-[600px] h-[600px] bg-highlight/5 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px]" />
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm uppercase tracking-[0.2em] font-extrabold text-accent font-mono mb-6 backdrop-blur-md">
          <Sparkles size={14} className="text-highlight animate-pulse" />
          Quantixx Insights
        </span>
        <h1 className="text-5xl sm:text-7xl font-display font-bold text-text-primary mt-3 leading-[1.1] tracking-tight">
          Technology & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-accent bg-300% animate-gradient-flow">Architecture Trends</span>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-sans font-light">
          In-depth technical analysis, system blueprints, and architectural strategies from our senior engineering team.
        </p>
      </section>

      {/* Search and Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="glass-card bg-white/[0.01] backdrop-blur-md border border-white/[0.08] rounded-2xl p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl">
          
          {/* Categories select tabs */}
          <div className="flex flex-wrap gap-2 order-2 lg:order-1 items-center">
            <span className="text-xs font-mono font-bold text-text-muted uppercase tracking-widest mr-2 hidden sm:block">Filter by:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer font-sans shadow-sm ${
                  activeCategory === cat
                    ? 'bg-text-primary text-bg-primary shadow-[0_0_15px_rgba(var(--color-accent),0.2)]'
                    : 'bg-white/[0.03] border border-border-primary text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box widget */}
          <div className="relative w-full lg:max-w-xs order-1 lg:order-2 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-highlight rounded-full blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg-card/50 backdrop-blur-xl border border-white/[0.1] focus:border-accent rounded-full py-3 pl-12 pr-5 text-sm text-text-primary placeholder-text-muted/60 outline-none transition-all shadow-inner"
              />
              <Search size={16} className="absolute left-4 top-3.5 text-text-muted group-focus-within:text-accent transition-colors" />
            </div>
          </div>

        </div>
      </section>

      {/* Blog Display Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            
            {/* Featured Post (Hero) */}
            <AnimatePresence mode="popLayout">
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                onClick={() => navigate('/blog/' + featuredPost.id)}
                className="glass-card border border-white/[0.08] hover:border-white/[0.2] bg-bg-card/40 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row gap-8 sm:gap-12 items-center relative overflow-hidden transition-all shadow-2xl group cursor-pointer"
              >
                {/* Internal Glow on Hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10 opacity-30 group-hover:opacity-60 transition-opacity" />

                <div className="flex-1 space-y-6 relative z-10">
                  <div className="flex items-center gap-4 text-[10px] text-text-secondary font-mono">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent uppercase tracking-widest font-bold border border-accent/20">
                      <Tag size={12} /> {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {featuredPost.date}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight leading-[1.15] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-highlight transition-all">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light max-w-2xl">
                    {featuredPost.desc}
                  </p>

                  <div className="pt-6 flex items-center justify-between border-t border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-white/[0.1] bg-gradient-to-tr from-accent/20 to-highlight/20 flex items-center justify-center font-display font-bold text-sm text-text-primary backdrop-blur-md">
                        {featuredPost.author.split(' ').pop().charAt(0)}
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-text-primary">{featuredPost.author}</span>
                        <span className="block text-[10px] text-text-muted font-mono uppercase tracking-wider flex items-center gap-1 mt-0.5">
                          <Clock size={10} /> {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <span className="px-4 py-2 rounded-full bg-white/[0.03] border border-border-primary group-hover:bg-accent text-text-secondary group-hover:text-white font-bold text-xs flex items-center gap-2 transition-all shadow-lg group-hover:shadow-[0_0_20px_rgba(var(--color-accent),0.3)]">
                      Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Image or Abstract Graphic for Featured Post */}
                {featuredPost.image ? (
                  <div className="hidden md:flex w-1/3 aspect-[4/3] max-w-[320px] rounded-2xl border border-white/[0.05] relative overflow-hidden shadow-inner group-hover:border-accent/30 transition-colors">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card/40 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="hidden md:flex w-1/3 aspect-square max-w-[300px] rounded-2xl border border-white/[0.05] bg-bg-secondary/50 relative overflow-hidden items-center justify-center shadow-inner group-hover:border-accent/20 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50" />
                    <BookOpen size={64} className="text-white/[0.1] group-hover:text-accent/40 transition-colors duration-700 group-hover:scale-110" />
                    <div className="absolute bottom-4 left-4 right-4 h-1/2 bg-gradient-to-t from-bg-secondary/80 to-transparent" />
                  </div>
                )}
              </motion.article>
            </AnimatePresence>

            {/* Asymmetrical Bento Grid */}
            {gridPosts.length > 0 && (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
              >
                <AnimatePresence mode="popLayout">
                  {gridPosts.map((post, index) => {
                    // Make the first item in the grid occasionally span 2 columns if on large screens to create asymmetry
                    const isWide = index === 0 && gridPosts.length % 2 !== 0;

                    return (
                      <motion.article
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        key={post.id}
                        onClick={() => navigate('/blog/' + post.id)}
                        className={`glass-card border border-white/[0.05] hover:border-white/[0.15] bg-bg-card/20 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between min-h-[340px] hover:shadow-[0_20px_40px_var(--shadow-heavy)] transition-all group font-sans relative overflow-hidden cursor-pointer ${isWide ? 'md:col-span-2 lg:col-span-2' : ''}`}
                      >
                        {/* Hover Ambient Glow */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-highlight/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

                        <div className="relative z-10 flex-1 flex flex-col">
                          {post.image && (
                            <div className={`w-full ${isWide ? 'h-64 lg:h-72' : 'h-48'} rounded-xl overflow-hidden mb-6 border border-white/[0.05] relative group-hover:border-accent/30 transition-colors shrink-0`}>
                              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-gradient-to-t from-bg-card/20 to-transparent pointer-events-none" />
                            </div>
                          )}

                          <div className="flex items-center justify-between text-[10px] text-text-secondary mb-5 font-mono shrink-0">
                            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] text-text-primary uppercase tracking-wider font-bold border border-white/[0.05] group-hover:border-accent/30 group-hover:text-accent transition-colors">
                              <Tag size={10} /> {post.category}
                            </span>
                            <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                          </div>

                          <h3 className={`font-bold text-text-primary group-hover:text-accent transition-colors leading-snug mb-3 font-display tracking-tight ${isWide ? 'text-2xl sm:text-3xl line-clamp-2' : 'text-xl line-clamp-3'}`}>
                            {post.title}
                          </h3>
                          <p className={`text-sm text-text-secondary leading-relaxed font-light ${isWide ? 'line-clamp-3 max-w-xl' : 'line-clamp-3'}`}>
                            {post.desc}
                          </p>
                        </div>

                        {/* Footer metadata */}
                        <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between mt-6 relative z-10">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full border border-white/[0.1] bg-white/[0.03] flex items-center justify-center font-bold text-[10px] text-text-primary">
                              {post.author.split(' ').pop().charAt(0)}
                            </div>
                            <div className="text-[10px]">
                              <span className="block text-text-primary font-bold">{post.author}</span>
                              <span className="block text-text-muted font-mono uppercase tracking-wider flex items-center gap-1 mt-0.5"><Clock size={9} /> {post.readTime}</span>
                            </div>
                          </div>
                          
                          <span className="w-8 h-8 flex items-center justify-center bg-white/[0.03] border border-white/[0.05] group-hover:bg-accent group-hover:border-accent text-text-secondary group-hover:text-white rounded-full transition-all shadow-md">
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </span>
                        </div>
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 glass-card bg-bg-card/20 backdrop-blur-md border border-white/[0.08] rounded-3xl max-w-2xl mx-auto font-sans shadow-xl"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mx-auto mb-6">
              <BookOpen size={32} className="text-text-muted" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary font-display tracking-tight">No insights matched your criteria</h3>
            <p className="text-sm text-text-secondary mt-3 font-light">Try adjusting your category filter or searching for different tech keywords.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-8 px-6 py-2.5 bg-white text-bg-primary font-bold rounded-xl text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </section>

    </div>
  );
}
