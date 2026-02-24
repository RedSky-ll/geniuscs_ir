"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { dictionary } from "@/lib/dictionary";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dict = dictionary.hero;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={containerRef} className="relative h-[110vh] flex flex-col items-center justify-start px-6 pt-[25vh] overflow-hidden bg-background">
      
      {/* Animated Graphical Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-brand/5 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [0, -120, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -100, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-[20%] w-[40%] h-[40%] rounded-full bg-brand/10 blur-[100px]"
        />

        {/* Dynamic Grid Illustration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        style={{ opacity: mounted ? opacity : 1, scale: mounted ? scale : 1 }}
        className="z-10 text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
           variants={itemVariants}
           className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand font-black text-xs uppercase mb-12 backdrop-blur-md"
        >
           <ShieldCheck className="w-4 h-4" />
           {dict.badge}
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent leading-tight"
        >
          {dict.title}
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          {dict.subtitle}
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold bg-brand text-white hover:bg-brand/90 transition-all shadow-[0_20px_40px_rgba(var(--brand-rgb),0.2)]">
              {dict.cta}
              <ArrowLeft className="mr-3 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        style={{ opacity: mounted ? opacity : 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-24 bg-gradient-to-b from-brand to-transparent" />
        <span className="text-[10px] font-black tracking-[0.3em] text-muted-foreground uppercase vertical-lr">{dict.scroll}</span>
      </motion.div>
    </section>
  );
}