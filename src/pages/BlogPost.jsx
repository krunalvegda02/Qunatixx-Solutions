import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Link, Send, ArrowUpRight, Bookmark } from 'lucide-react';
import clsx from 'clsx';
import { posts } from '../data/blogData';

// Simple lightweight markdown parser for the mock content
const renderContent = (content) => {
  const blocks = content.trim().split('\n\n');
  
  return blocks.map((block, index) => {
    const text = block.trim();
    if (!text) return null;

    if (text.startsWith('> ')) {
      return (
        <blockquote key={index} className="my-10 pl-6 border-l-4 border-accent relative bg-gradient-to-r from-accent/10 to-transparent py-6 pr-4 rounded-r-2xl font-display text-xl text-text-primary italic leading-relaxed shadow-[inset_4px_0_0_0_rgba(var(--color-accent),1)]">
          {text.replace('> ', '')}
        </blockquote>
      );
    }

    if (text.startsWith('### ')) {
      return <h3 key={index} className="text-2xl font-display font-bold text-text-primary mt-10 mb-4">{text.replace('### ', '')}</h3>;
    }
    if (text.startsWith('## ')) {
      const headingText = text.replace('## ', '');
      const slug = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return <h2 id={slug} key={index} className="text-3xl font-display font-extrabold text-text-primary mt-12 mb-6 tracking-tight">{headingText}</h2>;
    }
    if (text.startsWith('- ')) {
      const items = text.split('\n').map(item => item.replace('- ', ''));
      return (
        <ul key={index} className="space-y-3 my-6 pl-4 border-l-2 border-accent/30">
          {items.map((item, i) => (
            <li key={i} className="text-text-secondary leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>
                {/* Basic bold parsing */}
                {item.split(/(\*\*.*?\*\*)/g).map((part, j) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j} className="text-text-primary font-semibold">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </span>
            </li>
          ))}
        </ul>
      );
    }
    if (text.match(/^\d+\.\s/)) {
      const items = text.split('\n').map(item => item.replace(/^\d+\.\s/, ''));
      return (
        <ol key={index} className="space-y-4 my-6 list-decimal list-inside text-text-secondary leading-relaxed">
          {items.map((item, i) => (
            <li key={i} className="marker:text-accent font-semibold marker:font-bold">
              <span className="font-normal">
                {item.split(/(\*\*.*?\*\*)/g).map((part, j) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j} className="text-text-primary font-semibold">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </span>
            </li>
          ))}
        </ol>
      );
    }
    
    // Paragraph with inline bold parsing
    return (
      <p key={index} className="text-text-secondary leading-relaxed text-lg mb-6 font-light">
        {text.split(/(\*\*.*?\*\*)/g).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="text-text-primary font-semibold">{part.slice(2, -2)}</strong>;
          }
          if (part.startsWith('\`') && part.endsWith('\`')) {
            return <code key={j} className="bg-bg-secondary px-1.5 py-0.5 rounded font-mono text-sm text-accent">{part.slice(1, -1)}</code>;
          }
          return part;
        })}
      </p>
    );
  });
};

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-highlight z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <div className="relative pt-32 pb-32 bg-bg-primary text-text-primary theme-transition min-h-screen">
      
      {/* Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.05)_0%,transparent_70%)]" />
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px]" />
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation & Actions */}
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white/[0.03] border border-border-primary hover:bg-bg-secondary text-text-secondary hover:text-text-primary transition-all font-semibold text-sm group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </button>
        </div>

        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card border border-white/[0.05] bg-bg-card/30 backdrop-blur-2xl rounded-sm p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-highlight/10 rounded-full blur-[80px] pointer-events-none -z-10" />

          {post.image && (
            <div className="w-full aspect-[21/9] sm:aspect-[3/1] rounded-sm overflow-hidden mb-10 border border-white/[0.05] shadow-lg relative group">
               <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-bg-card/40 to-transparent pointer-events-none" />
            </div>
          )}

          <div className="flex items-center gap-4 text-xs text-text-secondary mb-6 font-mono">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-sm bg-accent/10 text-accent uppercase tracking-widest font-bold border border-accent/20">
              <Tag size={12} /> {post.category}
            </span>
            <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-text-primary tracking-tight leading-[1.15] mb-8">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pt-8 border-t border-border-primary/50">
            <div className="w-12 h-12 rounded-sm border border-border-primary bg-gradient-to-tr from-accent/20 to-highlight/20 flex items-center justify-center font-display font-bold text-lg text-text-primary">
              {post.author.split(' ').pop().charAt(0)}
            </div>
            <div>
              <span className="block text-base font-bold text-text-primary">{post.author}</span>
              <span className="block text-xs text-text-muted font-mono uppercase tracking-wider flex items-center gap-1 mt-1">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content & Sidebar Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 relative">
          
          {/* Sticky Executive Summary Sidebar (Left) */}
          <div className="hidden lg:block lg:col-span-3 relative">
            <div className="sticky top-32 glass-card border border-white/[0.05] bg-bg-card/20 backdrop-blur-xl rounded-sm p-6 shadow-xl relative overflow-hidden group">
              {/* Subtle ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] pointer-events-none -z-10 group-hover:bg-accent/20 transition-colors duration-700" />
              
              <div className="flex items-center gap-2 mb-6 border-b border-border-primary/50 pb-4">
                <Bookmark size={16} className="text-accent" />
                <span className="text-xs uppercase tracking-widest text-text-primary font-bold">Quick Summary</span>
              </div>
              
              {/* Short summary text */}
              <p className="text-xs text-text-secondary leading-relaxed mb-6 font-light">
                {post.desc}
              </p>

              <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-3 block">Key Sections</span>
              
              <ul className="flex flex-col gap-3">
                {post.content && post.content.split('\n').filter(line => line.startsWith('## ')).map((heading, i) => {
                  const headingText = heading.replace('## ', '');
                  const slug = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <li key={i} className="flex items-start gap-2 relative group/link">
                      <span className="w-1 h-1 rounded-sm bg-accent/30 mt-1.5 group-hover/link:bg-accent group-hover/link:scale-150 shrink-0 transition-all duration-300" />
                      <a href={`#${slug}`} className="text-sm text-text-secondary group-hover/link:text-text-primary group-hover/link:translate-x-1 transition-all py-0.5 leading-snug font-medium">
                        {headingText}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Article Body (Right) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-9 font-sans max-w-4xl"
          >
            {/* Intro description */}
            <p className="text-xl text-text-primary font-light leading-relaxed mb-12 pb-12 border-b border-border-primary/50">
              {post.desc}
            </p>

            {/* Parsed Content */}
            <div className="prose-container">
              {renderContent(post.content || '')}
            </div>

            {/* Footer Lead Capture CTA */}
            <div className="mt-20 glass-card border border-accent/20 bg-gradient-to-br from-bg-card/40 to-accent/5 backdrop-blur-xl rounded-sm p-10 text-center relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary mb-4">Ready to upgrade your infrastructure?</h3>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto leading-relaxed">Book a technical consultation with our engineering team to see how these modern architectures can accelerate your specific use case.</p>
              <button className="px-8 py-4 rounded-sm bg-accent text-white font-bold inline-flex items-center gap-2 hover:bg-highlight hover:shadow-[0_0_30px_rgba(var(--color-accent),0.4)] transition-all cursor-pointer relative z-10">
                Book Consultation <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </motion.div>
        </div>

      </article>
    </div>
    </>
  );
}
