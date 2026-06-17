import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

export const Counter = ({ value, className = "", duration = 2, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  // Safety check if value is undefined or not a string
  const strValue = String(value || "");
  
  // Extract prefix (e.g. + or $), number (e.g. 99.99 or 150), and suffix (e.g. % or k)
  const match = strValue.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);

  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView && match) {
      const timer = setTimeout(() => {
        springValue.set(parseFloat(match[2]));
      }, delay * 1000);
      return () => clearTimeout(timer);
    } else if (!isInView && match) {
      springValue.jump(0);
    }
  }, [isInView, match, springValue, delay]);

  if (!match) {
    return (
      <motion.span 
        ref={ref} 
        initial={{ opacity: 0, y: 10 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        className={className}
      >
        {strValue}
      </motion.span>
    );
  }

  const prefix = match[1];
  const numberStr = match[2];
  const suffix = match[3];
  const decimals = numberStr.includes('.') ? numberStr.split('.')[1].length : 0;

  const displayValue = useTransform(springValue, (current) => {
    return prefix + current.toFixed(decimals) + suffix;
  });

  return <motion.span ref={ref} className={className}>{displayValue}</motion.span>;
};
