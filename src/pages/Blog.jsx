import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { AnimatedText } from '../components/animations/AnimatedText';
import { AnimatedSubText } from '../components/animations/AnimatedSubText';
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
    <div className="relative pt-24 pb-24 bg-bg-primary text-text-primary theme-transition min-h-screen overflow-hidden">
      
      {/* Premium Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 inset-x-0 h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(var(--color-accent-rgb),0.08)_0%,transparent_70%)]" />
        <div className="absolute top-64 right-0 lg:right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-highlight/5 rounded-full blur-[80px] sm:blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-40 left-0 lg:left-10 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-accent/5 rounded-full blur-[80px] sm:blur-[140px]" />
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pb-16 text-left sm:text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-secondary/80 border border-border-primary text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-accent font-mono mb-4 sm:mb-6 backdrop-blur-md">
          <Sparkles size={14} className="text-highlight animate-pulse" />
          Quantixx Insights
        </span>
        <AnimatedText 
          as="h1"
          segments={[
            { text: "Insights & " },
            { text: "Expert Resources", className: "text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-accent bg-300% animate-gradient-flow block mt-1 sm:mt-2" }
          ]}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-text-primary mt-2 leading-[1.1] tracking-tight px-2"
        />
        <AnimatedSubText 
          text="Helpful articles, guides, and stories from our team to help you make the best decisions for your business."
          className="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl sm:mx-auto mt-4 sm:mt-6 leading-relaxed font-sans font-medium px-4 text-left sm:text-center"
        />
      </section>

      {/* Search and Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 relative z-10">
        <div className="glass-card bg-bg-card/40 backdrop-blur-md border border-border-primary rounded-2xl p-3 sm:p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 shadow-xl">
          
          {/* Categories select tabs */}
          <div className="flex flex-wrap gap-2 order-2 lg:order-1 items-center w-full lg:w-auto">
            <span className="text-[10px] sm:text-xs font-mono font-bold text-text-muted uppercase tracking-widest mr-1 sm:mr-2 hidden md:block">Filter by:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold rounded-full transition-all cursor-pointer font-sans shadow-sm flex-1 sm:flex-none text-center active:scale-95 hover:-translate-y-0.5 ${
                  activeCategory === cat
                    ? 'bg-text-primary text-bg-primary shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.2)] border border-transparent'
                    : 'bg-bg-secondary/50 border border-border-primary text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box widget */}
          <div className="relative w-full lg:max-w-xs order-1 lg:order-2 group shrink-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-highlight rounded-full blur opacity-0 group-focus-within:opacity-30 transition duration-500"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg-primary/80 backdrop-blur-xl border border-border-primary focus:border-accent rounded-full py-2.5 sm:py-3 pl-10 sm:pl-12 pr-4 sm:pr-5 text-sm text-text-primary placeholder-text-muted/60 outline-none transition-all shadow-inner"
              />
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors" />
            </div>
          </div>

        </div>
      </section>

      {/* Blog Display Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {filteredPosts.length > 0 ? (
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            
            {/* Featured Post (Hero) */}
            <AnimatePresence mode="popLayout">
              {featuredPost && (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  onClick={() => navigate('/blog/' + featuredPost.id)}
                  className="glass-card border border-border-primary hover:border-accent/30 bg-bg-card/60 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 items-center relative overflow-hidden transition-colors duration-300 shadow-xl hover:shadow-[0_20px_60px_var(--shadow-heavy)] group cursor-pointer"
                >
                  {/* Internal Glow on Hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[80px] sm:blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

                  {/* Image for Mobile (Top) & Desktop (Right) */}
                  {featuredPost.image ? (
                    <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-[4/3] max-w-[400px] md:order-2 rounded-2xl border border-border-primary relative overflow-hidden shadow-inner group-hover:border-accent/40 transition-colors shrink-0">
                      <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card/60 to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-square max-w-[300px] md:order-2 rounded-2xl border border-border-primary bg-bg-secondary/50 relative overflow-hidden flex items-center justify-center shadow-inner group-hover:border-accent/30 transition-colors shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50" />
                      <BookOpen size={48} className="text-text-muted/30 group-hover:text-accent/40 transition-colors duration-700 group-hover:scale-110 sm:w-16 sm:h-16" />
                    </div>
                  )}

                  <div className="flex-1 space-y-4 sm:space-y-6 relative z-10 md:order-1 w-full">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] text-text-secondary font-mono">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent uppercase tracking-widest font-bold border border-accent/20">
                        <Tag size={12} /> {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1.5"><Calendar size={12} /> {featuredPost.date}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-extrabold text-text-primary tracking-tight leading-[1.2] group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-medium max-w-2xl line-clamp-3 sm:line-clamp-none">
                      {featuredPost.desc}
                    </p>

                    <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border-primary/50 mt-4 sm:mt-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border-primary bg-gradient-to-tr from-bg-secondary to-bg-elevated flex items-center justify-center font-display font-bold text-xs sm:text-sm text-text-primary backdrop-blur-md shadow-sm">
                          {featuredPost.author.split(' ').pop().charAt(0)}
                        </div>
                        <div>
                          <span className="block text-xs sm:text-sm font-bold text-text-primary">{featuredPost.author}</span>
                          <span className="block text-[9px] sm:text-[10px] text-text-muted font-mono uppercase tracking-wider flex items-center gap-1 mt-0.5">
                            <Clock size={10} /> {featuredPost.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-bg-secondary/50 border border-border-primary group-hover:bg-accent text-text-secondary group-hover:text-white font-bold text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2 transition-all shadow-md group-hover:shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.4)]">
                        Read Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform sm:w-3.5 sm:h-3.5" />
                      </span>
                    </div>
                  </div>

                </motion.article>
              )}
            </AnimatePresence>

            {/* Asymmetrical Bento Grid */}
            {gridPosts.length > 0 && (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left"
              >
                <AnimatePresence mode="popLayout">
                  {gridPosts.map((post, index) => {
                    const isWide = index === 0 && gridPosts.length % 2 !== 0;
                    return (
                      <GridPostCard key={post.id} post={post} index={index} isWide={isWide} navigate={navigate} />
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
            className="text-center py-16 sm:py-24 glass-card bg-bg-card/40 backdrop-blur-md border border-border-primary rounded-3xl max-w-2xl mx-auto font-sans shadow-xl px-4 sm:px-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-bg-secondary border border-border-primary flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-inner">
              <BookOpen size={28} className="text-text-muted sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary font-display tracking-tight">No insights matched your criteria</h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-2 sm:mt-3 font-medium">Try adjusting your category filter or searching for different tech keywords.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-6 sm:mt-8 px-5 sm:px-6 py-2 sm:py-2.5 bg-text-primary text-bg-primary font-bold rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </section>

    </div>
  );
}

function GridPostCard({ post, index, isWide, navigate }) {
  const ref = useRef(null);
  const isCentered = useInView(ref, { margin: "-35% 0px -35% 0px" });

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index < 3 ? index * 0.1 : 0 }}
      onClick={() => navigate('/blog/' + post.id)}
      className={clsx(
        "glass-card backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] hover:shadow-[0_20px_40px_var(--shadow-heavy)] transition-all duration-500 group font-sans relative overflow-hidden cursor-pointer",
        isWide ? 'sm:col-span-2 lg:col-span-2' : '',
        isCentered 
          ? 'border border-accent/40 shadow-[0_15px_35px_rgba(var(--color-accent-rgb),0.15)] bg-bg-card/60 sm:border-border-primary sm:bg-bg-card/40 sm:shadow-none' 
          : 'border border-border-primary bg-bg-card/40 opacity-70 scale-95 sm:opacity-100 sm:scale-100'
      )}
    >
      {/* Hover Ambient Glow */}
      <div className={clsx(
        "absolute -bottom-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-highlight/10 rounded-full blur-[60px] sm:blur-[80px] transition-opacity duration-500 pointer-events-none -z-10",
        isCentered ? "opacity-100 sm:opacity-0 group-hover:opacity-100" : "opacity-0 group-hover:opacity-100"
      )} />

      <div className="relative z-10 flex-1 flex flex-col">
        {post.image && (
          <div className={clsx(
            `w-full ${isWide ? 'h-48 sm:h-64 lg:h-72' : 'h-40 sm:h-48'} rounded-xl overflow-hidden mb-4 sm:mb-6 border relative transition-colors shrink-0`,
            isCentered ? "border-accent/40 sm:border-border-primary group-hover:border-accent/40" : "border-border-primary group-hover:border-accent/40"
          )}>
            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card/40 to-transparent pointer-events-none" />
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] sm:text-[10px] text-text-secondary mb-3 sm:mb-5 font-mono shrink-0">
          <span className={clsx(
            "flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-bg-secondary border uppercase tracking-wider font-bold transition-colors",
            isCentered ? "border-accent/30 text-accent sm:border-border-primary sm:text-text-primary group-hover:border-accent/30 group-hover:text-accent" : "border-border-primary text-text-primary group-hover:border-accent/30 group-hover:text-accent"
          )}>
            <Tag size={10} /> {post.category}
          </span>
          <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
        </div>

        <h3 className={clsx(
          `font-bold transition-colors leading-snug mb-2 sm:mb-3 font-display tracking-tight ${isWide ? 'text-xl sm:text-2xl lg:text-3xl line-clamp-2' : 'text-lg sm:text-xl line-clamp-3'}`,
          isCentered ? "text-accent sm:text-text-primary group-hover:text-accent" : "text-text-primary group-hover:text-accent"
        )}>
          {post.title}
        </h3>
        <p className={`text-xs sm:text-sm text-text-secondary leading-relaxed font-medium ${isWide ? 'line-clamp-3 max-w-xl' : 'line-clamp-3'}`}>
          {post.desc}
        </p>
      </div>

      {/* Footer metadata */}
      <div className="pt-4 sm:pt-6 border-t border-border-primary/50 flex items-center justify-between mt-4 sm:mt-6 relative z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-border-primary bg-bg-secondary flex items-center justify-center font-bold text-[9px] sm:text-[10px] text-text-primary">
            {post.author.split(' ').pop().charAt(0)}
          </div>
          <div className="text-[9px] sm:text-[10px]">
            <span className="block text-text-primary font-bold">{post.author}</span>
            <span className="block text-text-muted font-mono uppercase tracking-wider flex items-center gap-1 mt-0.5"><Clock size={8} sm:size={9} /> {post.readTime}</span>
          </div>
        </div>
        
        <span className={clsx(
          "w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border rounded-full transition-all shadow-sm group-hover:shadow-md group-hover:bg-accent group-hover:border-accent group-hover:text-white",
          isCentered ? "bg-accent border-accent text-white sm:bg-bg-secondary sm:border-border-primary sm:text-text-secondary" : "bg-bg-secondary border-border-primary text-text-secondary"
        )}>
          <ArrowRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform sm:w-3.5 sm:h-3.5" />
        </span>
      </div>
    </motion.article>
  );
}
