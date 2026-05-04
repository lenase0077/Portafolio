import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = ({ isCozy }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX,
        background: 'var(--accent-gradient)',
        boxShadow: isCozy
          ? '0 0 12px rgba(230, 57, 70, 0.4)'
          : '0 0 12px rgba(232, 93, 4, 0.4)',
      }}
    />
  );
};

export default ScrollProgress;
