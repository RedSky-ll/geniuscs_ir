"use client";

import { motion } from "framer-motion";
import { dictionary } from "@/lib/dictionary";

export function ProcessSection() {
  const { title, subtitle, steps } = dictionary.process;

  return (
    <section id="process" className="py-40 px-6 bg-background border-t border-border relative overflow-hidden">
      {/* Decorative Brand Circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">{title}</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">{subtitle}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-14 left-10 right-10 h-[2px] bg-muted z-0 overflow-hidden">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-brand/20 via-brand to-brand/20 origin-right"
            />
          </div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 text-center group"
            >
              <div className="w-28 h-28 rounded-full bg-background border border-border flex items-center justify-center mx-auto mb-10 text-4xl font-black font-mono text-muted-foreground transition-all duration-700 group-hover:bg-brand group-hover:border-brand group-hover:text-white group-hover:shadow-[0_0_30px_rgba(var(--brand),0.35)] group-hover:scale-110">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-brand transition-colors duration-500">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-semibold text-lg max-w-[280px] mx-auto group-hover:text-foreground transition-colors duration-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
