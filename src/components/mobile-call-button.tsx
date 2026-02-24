"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { dictionary } from "@/lib/dictionary";

export function MobileCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // دکمه بعد از ۱۰۰ پیکسل اسکرول ظاهر شود
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[60] md:hidden"
        >
          <a href="tel:02188888888" className="block">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="bg-brand text-white h-16 rounded-2xl shadow-[0_20px_40px_rgba(var(--brand-rgb),0.4)] flex items-center justify-center gap-4 px-6 border border-white/20"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <span className="text-lg font-black tracking-tight">
                {dictionary.contact.cta}
              </span>
              <span className="text-sm font-bold opacity-80 border-r border-white/20 pr-4 mr-2 dir-ltr">
                ۰۲۱-۸۸۸۸۸۸۸۸
              </span>
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
