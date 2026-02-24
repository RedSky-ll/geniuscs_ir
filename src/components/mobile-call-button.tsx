"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { dictionary } from "@/lib/dictionary";

export function MobileCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[60] md:hidden"
        >
          <a href="tel:02188888888" className="block w-full">
            <motion.div
              whileTap={{ scale: 0.98 }}
              className="bg-brand text-white h-20 flex items-center justify-center gap-6 px-6 border-t border-white/10 shadow-[0_-10px_40px_rgba(var(--brand-rgb),0.2)]"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-6 h-6 fill-current animate-bounce" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight leading-none mb-1">
                  {dictionary.contact.cta}
                </span>
                <span className="text-xs font-bold opacity-70 dir-ltr">
                  {dictionary.contact.phone_number}
                </span>
              </div>
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}