import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedText = ({ segments, className = "", as: Component = "h1", delay = 0.25 }) => {
  return (
    <Component className={className}>
      <motion.span
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.055,
              delayChildren: delay,
            }
          }
        }}
        initial="hidden"
        animate="visible"
      >
        {segments.map((seg, sIdx) => {
          const words = seg.text.split(" ");
          return (
            <span key={`s-${sIdx}`} className={seg.className || ""}>
              {words.map((word, wIdx) => (
                <span key={`w-${sIdx}-${wIdx}`} className="inline-block whitespace-nowrap mr-[0.25em]">
                  {word.split("").map((char, cIdx) => (
                    <motion.span
                      key={`c-${sIdx}-${wIdx}-${cIdx}`}
                      variants={{
                        hidden: { opacity: 0, y: 5 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
};
