"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  as: Component = "p"
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
} 