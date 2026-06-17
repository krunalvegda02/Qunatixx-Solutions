import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import clsx from "clsx";

/**
 * Utility to wrap a value between a min and max range.
 */
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const VelocityScroll = ({ children, baseVelocity = 20, className = "" }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 15,
    stiffness: 20
  });
  
  // The velocity factor increases the speed when scrolling. 
  // Tuned down the max multiplier to 15 to eliminate jitter and ensure buttery smoothness.
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 15], {
    clamp: false
  });

  useAnimationFrame((t, delta) => {
    // 1. A very slow, constant idle crawl
    let moveBy = baseVelocity * (delta / 1000);

    // 2. A powerful speed boost derived strictly from scrolling speed.
    // We map smoothVelocity [0, 1000] to [0, 50] to get a strong additive boost.
    const scrollMomentum = Math.abs(velocityFactor.get());

    // 3. Add the scroll momentum in the direction of the baseVelocity.
    // This allows the base crawl to be incredibly slow, while the scroll boost is still fast and responsive.
    if (baseVelocity < 0) {
      moveBy -= scrollMomentum * (delta / 1000);
    } else {
      moveBy += scrollMomentum * (delta / 1000);
    }

    baseX.set(baseX.get() + moveBy);
  });

  // We duplicate the children multiple times so that we can wrap it seamlessly.
  // Since we render the children 4 times, the total width is 4x.
  // Wrapping from 0 to -50% ensures we cycle exactly half the track before looping back.
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const renderChildren = (suffix) => 
    React.Children.map(children, child => 
      React.isValidElement(child) ? React.cloneElement(child, { key: `${child.key}-${suffix}` }) : child
    );

  return (
    <div className={clsx("overflow-hidden flex flex-nowrap w-full", className)}>
      <motion.div className={clsx('flex', 'flex-nowrap', 'shrink-0', 'w-max', 'will-change-transform')} style={{ x }}>
        <div className="flex gap-6 pr-6 shrink-0">{renderChildren("1")}</div>
        <div className="flex gap-6 pr-6 shrink-0">{renderChildren("2")}</div>
        <div className="flex gap-6 pr-6 shrink-0">{renderChildren("3")}</div>
        <div className="flex gap-6 pr-6 shrink-0">{renderChildren("4")}</div>
      </motion.div>
    </div>
  );
};
