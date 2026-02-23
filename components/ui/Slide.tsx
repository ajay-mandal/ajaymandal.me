"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const Slide = ({ children, className, delay }: props) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("stop");
    }
  }, [controls, isInview]);

  return (
    <motion.div
      ref={ref}
      variants={{
        start: { opacity: 0, y: 50 },
        stop: { opacity: 1, y: 0 },
      }}
      transition={{
        ease: [0.16, 1, 0.3, 1],
        duration: 0.65,
        delay: delay,
      }}
      animate={controls}
      initial="start"
      className={className}
    >
      {children}
    </motion.div>
  );
};
