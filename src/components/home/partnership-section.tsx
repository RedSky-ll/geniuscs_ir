"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe } from "lucide-react";
import { dictionary } from "@/lib/dictionary";

export function PartnershipSection() {
  const { title, description, features } = dictionary.partnership;

  return (
    <section className="py-40 px-6 bg-accent border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none overflow-hidden">
         <div className="text-[20rem] font-black text-brand leading-none rotate-12 translate-y-1/2">CANADA</div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
           <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 text-brand font-black tracking-widest uppercase text-sm mb-12"
              >
                <Globe className="w-5 h-5" />
                OFFICIAL REPRESENTATIVE
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter leading-tight"
              >
                {title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-16"
              >
                {description}
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {features.map((feature, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.3 + (i * 0.1) }}
                       className="flex items-center gap-4 group"
                    >
                       <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                          <CheckCircle2 className="w-5 h-5" />
                       </div>
                       <span className="text-lg font-bold group-hover:text-brand transition-colors">{feature}</span>
                    </motion.div>
                 ))}
              </div>
           </div>
           
           <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end"
           >
              <div className="relative group">
                 <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full group-hover:bg-brand/30 transition-all duration-700" />
                 <div className="relative bg-card p-12 md:p-20 rounded-[3rem] border border-border flex flex-col items-center text-center shadow-2xl">
                    <div className="w-24 h-16 bg-red-600 rounded-lg mb-10 flex items-center justify-center overflow-hidden shadow-lg border-2 border-white/20">
                       {/* Simplified Canadian Flag Icon */}
                       <div className="w-1/4 h-full bg-red-600" />
                       <div className="w-2/4 h-full bg-white flex items-center justify-center">
                          <div className="w-8 h-8 bg-red-600 rotate-45" />
                       </div>
                       <div className="w-1/4 h-full bg-red-600" />
                    </div>
                    <h3 className="text-3xl font-black mb-4">GeniusCS.ca</h3>
                    <p className="text-muted-foreground font-bold tracking-widest text-xs uppercase">MONTREAL / TORONTO / TEHRAN</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
