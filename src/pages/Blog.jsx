import { useState, useRef, useEffect } from 'react';
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
  
  const featuredRef = useRef(null);
  const isFeaturedInView = useInView(featuredRef, { margin: "-30% 0px -30% 0px" });
  const [isTouch, setIsTouch] = useState(false);
  
  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="relative pt-28 pb-16 bg-bg-primary text-text-primary theme-transition min-h-screen overflow-hidden bg-grid-tech">
      
      {/* Premium Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[8%] right-[-12%] w-[500px] h-[500px] bg-gradient-to-br from-accent/5 to-highlight/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
        <div className="absolute top-[45%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-tr from-highlight/5 to-accent/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      {/* HERO HEADER FOLD */}
      <div className="relative w-full bg-gradient-to-b from-bg-primary to-bg-secondary/30 pt-14 pb-32 sm:pb-48 border-b border-border-primary/50">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left sm:text-center relative z-10">
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

      </div> {/* End Hero Header Fold */}

      {/* Search and Category Filters (Overlap) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16 sm:-mt-24 mb-12 sm:mb-16">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 relative z-10">
        {filteredPosts.length > 0 ? (
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            
            {/* Featured Post (Hero) */}
            <AnimatePresence mode="popLayout">
              {featuredPost && (
                <motion.article 
                  ref={featuredRef}
                  data-in-view={isTouch && isFeaturedInView}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => navigate('/blog/' + featuredPost.id)}
                  className="group relative w-full border border-border-primary overflow-hidden cursor-pointer hover:shadow-2xl data-[in-view=true]:shadow-2xl transition-all duration-500 bg-bg-card flex flex-col"
                >
                  {/* Top: Massive Cinematic Hero Image */}
                  <div className="w-full aspect-video md:aspect-[21/9] lg:aspect-[2.5/1] overflow-hidden relative border-b border-border-primary group-hover:border-accent/30 group-data-[in-view=true]:border-accent/30 transition-colors">
                    {featuredPost.image ? (
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title} 
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 group-data-[in-view=true]:grayscale-0 group-data-[in-view=true]:opacity-100 group-data-[in-view=true]:scale-105 transition-all duration-1000" 
                      />
                    ) : (
                      <div className="w-full h-full bg-bg-secondary flex items-center justify-center">
                        <BookOpen size={64} className="text-border-primary" />
                      </div>
                    )}
                    {/* Vignette / Fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Meta Tag on Image */}
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center gap-4">
                      <span className="px-4 py-1.5 bg-accent text-white text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold shadow-2xl">
                        Featured Insight
                      </span>
                      <span className="text-white/80 font-mono text-[10px] sm:text-xs uppercase tracking-widest backdrop-blur-md px-3 py-1 bg-black/40 border border-white/10">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Massive Typography Block */}
                  <div className="p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start bg-bg-card relative">
                     {/* Title & Desc */}
                     <div className="flex-1 max-w-4xl space-y-6">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-text-primary tracking-tight leading-[1.1] group-hover:text-accent group-data-[in-view=true]:text-accent transition-colors duration-500">
                          {featuredPost.title}
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed font-sans max-w-3xl">
                          {featuredPost.desc}
                        </p>
                     </div>

                     {/* Author & Meta Sidebar */}
                     <div className="w-full lg:w-64 shrink-0 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-6 border-t lg:border-t-0 lg:border-l border-border-primary pt-6 lg:pt-0 lg:pl-10">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-none bg-bg-secondary border border-border-primary flex items-center justify-center font-display font-bold text-lg text-text-primary">
                             {featuredPost.author.split(' ').pop().charAt(0)}
                           </div>
                           <div>
                              <div className="text-sm font-bold text-text-primary">{featuredPost.author}</div>
                              <div className="text-xs text-text-muted font-mono mt-1 flex items-center gap-1.5">
                                 <Calendar size={12} /> {featuredPost.date}
                              </div>
                           </div>
                        </div>
                        
                        <div className="hidden lg:flex flex-col gap-4">
                           <div className="text-xs text-text-muted font-mono uppercase tracking-widest flex items-center gap-2">
                              <Clock size={12} /> {featuredPost.readTime}
                           </div>
                           <div className="h-px w-8 bg-border-primary" />
                           <div className="flex items-center gap-2 text-text-secondary group-hover:text-accent group-data-[in-view=true]:text-accent font-bold text-xs uppercase tracking-widest font-mono transition-colors">
                              Read Article <ArrowRight size={14} className="group-hover:translate-x-2 group-data-[in-view=true]:translate-x-2 transition-transform duration-300" />
                           </div>
                        </div>
                     </div>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>

            {/* Professional List View */}
            {gridPosts.length > 0 && (
              <motion.div 
                layout
                className="flex flex-col text-left divide-y divide-border-primary border-t border-border-primary mt-12"
              >
                <AnimatePresence mode="popLayout">
                  {gridPosts.map((post, index) => (
                    <IndexPostRow key={post.id} post={post} index={index} navigate={navigate} />
                  ))}
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

function IndexPostRow({ post, index, navigate }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });
  const [isTouch, setIsTouch] = useState(false);
  
  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  return (
    <motion.article
      ref={ref}
      data-in-view={isTouch && isInView}
      layout
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index < 5 ? index * 0.05 : 0 }}
      onClick={() => navigate('/blog/' + post.id)}
      className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 md:py-8 cursor-pointer border-b border-border-primary hover:bg-white/[0.02] data-[in-view=true]:bg-white/[0.02] transition-colors px-4 -mx-4 relative overflow-hidden"
    >
      {/* Date Col */}
      <div className="w-full md:w-32 lg:w-40 shrink-0 flex items-center gap-2 text-[11px] font-mono text-text-muted uppercase tracking-widest group-hover:text-text-secondary group-data-[in-view=true]:text-text-secondary transition-colors z-10">
        <Calendar size={12} className="hidden md:block" />
        {post.date}
      </div>

      {/* Title & Desc Col */}
      <div className="flex-1 z-10 pr-4">
        <h3 className="text-xl sm:text-2xl font-display font-medium text-text-primary tracking-tight mb-2 group-hover:text-accent group-data-[in-view=true]:text-accent transition-colors">
          {post.title}
        </h3>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest border border-border-primary text-text-secondary group-hover:border-accent/40 group-hover:text-accent group-data-[in-view=true]:border-accent/40 group-data-[in-view=true]:text-accent transition-colors bg-bg-secondary">
            {post.category}
          </span>
          <p className="text-sm text-text-secondary font-sans line-clamp-1 max-w-xl">
            {post.desc}
          </p>
        </div>
      </div>

      {/* Cinematic Image Col (Right Side) */}
      {post.image && (
        <div className="hidden md:block w-48 lg:w-72 aspect-[21/9] shrink-0 border border-border-primary overflow-hidden relative z-10 bg-bg-secondary group-hover:border-accent/40 group-data-[in-view=true]:border-accent/40 transition-colors">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 group-data-[in-view=true]:grayscale-0 group-data-[in-view=true]:opacity-100 group-data-[in-view=true]:scale-105 transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-bg-primary/40 group-hover:bg-transparent group-data-[in-view=true]:bg-transparent transition-colors duration-500 pointer-events-none" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-data-[in-view=true]:opacity-100 transition-opacity duration-500 z-20">
             <div className="w-8 h-8 bg-bg-primary/80 backdrop-blur-md border border-accent/50 text-accent flex items-center justify-center">
                <ArrowRight size={14} className="-rotate-45" />
             </div>
          </div>
        </div>
      )}
      
      {/* Mobile Image Fallback */}
      {post.image && (
         <div className="block md:hidden w-full aspect-video mt-2 border border-border-primary overflow-hidden relative group-hover:border-accent/40 group-data-[in-view=true]:border-accent/40 transition-colors">
            <img src={post.image} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-data-[in-view=true]:grayscale-0 group-data-[in-view=true]:opacity-100 transition-all duration-700" />
         </div>
      )}
    </motion.article>
  );
}
