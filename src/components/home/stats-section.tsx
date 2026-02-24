"use client";

import { motion } from "framer-motion";
import { dictionary } from "@/lib/dictionary";

export function StatsSection() {
  const stats = Object.values(dictionary.stats);

  return (
    <section className="py-24 px-6 bg-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-7xl font-black tracking-tighter mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-lg font-bold opacity-80 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
