import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = "https://wa.me/1234567890?text=Hi%20Quantixx%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project!";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'fixed', 'bottom-6', 'right-6', 'z-50', 'flex', 'items-center', 
        'bg-bg-card/90', 'backdrop-blur-xl', 'border', 'border-border-primary', 
        'rounded-full', 'shadow-[0_10px_30px_rgba(0,0,0,0.4)]', 'overflow-hidden',
        isHovered ? 'border-accent/40 shadow-[0_15px_40px_rgba(124,58,237,0.15)]' : ''
      )}
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <motion.div
        className="flex items-center"
        initial={false}
        animate={{ width: isHovered ? 180 : 56 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="w-[56px] h-[56px] flex items-center justify-center shrink-0">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/15">
            <span className="absolute inset-0 w-full h-full rounded-full bg-[#25D366]/25 animate-ping pointer-events-none" />
            <MessageCircle className="w-5 h-5 text-[#25D366] relative z-10" />
          </div>
        </div>
        
        <motion.span 
          className={clsx('text-sm', 'font-semibold', 'whitespace-nowrap', 'pl-1', isHovered ? 'text-accent' : 'text-text-primary')}
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          Chat with Experts
        </motion.span>
      </motion.div>
    </motion.a>
  );
}
