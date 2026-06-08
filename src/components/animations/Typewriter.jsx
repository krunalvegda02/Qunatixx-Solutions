import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Typewriter = ({ text, delay = 0, className = "", as: Component = "span" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const typeChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeChar, 30 + Math.random() * 50);
      } else {
        setIsTyping(false);
        setIsComplete(true);
      }
    };

    timeout = setTimeout(() => {
      setIsTyping(true);
      typeChar();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <Component className={className}>
      {displayedText}
      {(!isComplete || isComplete) && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
          className="inline-block w-[0.1em] h-[0.9em] bg-accent ml-1 align-middle -mt-1"
          style={{ opacity: isTyping ? 1 : undefined }}
        />
      )}
    </Component>
  );
};
