"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { dictionary } from "@/lib/dictionary";

export function ContactSection() {
  const { title, subtitle, phone_number, phone_label } = dictionary.contact;

  return (
    <section id="contact" className="py-40 px-6 bg-background border-t border-border relative overflow-hidden">
      {/* Brand Background Glow */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brand/10 blur-[150px] rounded-full animate-pulse" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter leading-tight">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === 2 ? "text-brand" : "text-foreground"}>{word} </span>
            ))}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 font-medium">
            {subtitle}
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-1 bg-gradient-to-r from-brand/50 via-brand to-brand/50 rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(var(--brand),0.2)]"
          >
            <div className="bg-card px-8 md:px-16 py-8 md:py-12 rounded-[2.3rem] flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-white/10">
              <div className="text-right">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-2 block">
                  {phone_label}
                </span>
                <a 
                  href="tel:02188888888" 
                  className="text-3xl md:text-6xl font-bold text-foreground hover:text-brand transition-colors dir-ltr block"
                >
                  {phone_number}
                </a>
              </div>
              
              <a href="tel:02188888888">
                <Button size="lg" className="rounded-full w-20 h-20 md:w-24 md:h-24 bg-brand text-white hover:bg-brand/90 transition-all hover:rotate-12 shadow-xl shadow-brand/20">
                  <Phone className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}