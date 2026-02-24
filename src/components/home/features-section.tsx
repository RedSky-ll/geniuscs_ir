"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, BarChart } from "lucide-react";
import { dictionary } from "@/lib/dictionary";

const icons = [CheckCircle, Zap, Shield, BarChart];

export function FeaturesSection() {
  const { title, subtitle, items } = dictionary.features;

  return (
    <section className="py-40 px-6 bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter leading-tight"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <div className="mb-8 w-20 h-20 rounded-2xl bg-accent border border-border flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--brand),0.3)] group-hover:scale-110">
                  <Icon className="w-10 h-10 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-semibold leading-relaxed text-lg group-hover:text-foreground transition-colors duration-500">
                  {item.description}
                </p>
                {/* Decorative Line */}
                <div className="mt-8 w-12 h-1 bg-brand/20 group-hover:w-full transition-all duration-700 rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
