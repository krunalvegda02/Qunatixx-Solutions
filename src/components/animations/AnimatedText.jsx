import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedText = ({ segments, className = "", as: Component = "h1", delay = 0.25 }) => {
  return (
    <Component className={className}>
      <motion.div
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
        className="inline-block"
      >
        {segments.map((seg, sIdx) => {
          const words = seg.text.split(" ");
          return (
            <span key={`s-${sIdx}`} className={`inline-block ${seg.className || ""}`}>
              {words.map((word, wIdx) => (
                <React.Fragment key={`w-${sIdx}-${wIdx}`}>
                  {word.length > 0 && (
                    <span className="inline-block whitespace-nowrap">
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
                  )}
                  {wIdx < words.length - 1 && " "}
                </React.Fragment>
              ))}
            </span>
          );
        })}
      </motion.div>
    </Component>
  );
};
