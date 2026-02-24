"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { dictionary } from "@/lib/dictionary";

export function ScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["var(--background)", "var(--brand)", "var(--background)"]
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ backgroundColor }}
      className="py-60 px-6 overflow-hidden transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          style={{ scale, rotate }}
          className="bg-card p-12 md:p-32 rounded-[4rem] border border-border shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <motion.h2 
              className="text-5xl md:text-9xl font-black tracking-tighter mb-12"
            >
              {dictionary.partnership.title}
            </motion.h2>
            <p className="text-xl md:text-4xl font-medium leading-tight opacity-80 max-w-4xl mx-auto">
              {dictionary.partnership.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
