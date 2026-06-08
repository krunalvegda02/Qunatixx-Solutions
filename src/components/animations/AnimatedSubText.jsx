import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedSubText = ({ text, className = "", delay = 0.5 }) => {
  const words = text.split(" ");
  
  return (
    <motion.p
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.035,
            delayChildren: delay,
          }
        }
      }}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, i) => (
        <span key={`w-${i}`} className="inline-block mr-1">
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 3 },
              visible: { opacity: 1, y: 0 }
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
};
