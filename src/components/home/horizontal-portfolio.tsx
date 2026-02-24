"use client";

import { motion } from "framer-motion";
import { dictionary } from "@/lib/dictionary";
import { Smartphone, Monitor, ShieldCheck, Cpu, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function HorizontalPortfolio() {
  const projects = [
    { id: 1, title: "پورتال بانکی هوشمند", type: "laptop", category: "طراحی وب‌سایت", icon: Monitor, color: "#ff7c17" },
    { id: 2, title: "اپلیکیشن تندرستی", type: "mobile", category: "اپلیکیشن موبایل", icon: Smartphone, color: "#3b82f6" },
    { id: 3, title: "داشبورد مدیریت هوش مصنوعی", type: "laptop", category: "سیستم‌های تحت وب", icon: Cpu, color: "#10b981" },
    { id: 4, title: "پلتفرم ارز دیجیتال", type: "mobile", category: "امنیت و بلاک‌چین", icon: ShieldCheck, color: "#8b5cf6" },
  ];

  return (
    <section className="relative py-40 bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight text-foreground">
            {dictionary.portfolio.title}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
             <div className="w-16 h-1 bg-brand rounded-full" />
             <p className="text-xl md:text-2xl text-muted-foreground font-bold italic">
               {dictionary.portfolio.subtitle}
             </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-40 md:gap-60">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Final Call to Action */}
      <div className="mt-60 text-center">
         <Link href="/portfolio">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-full bg-brand text-white flex items-center justify-center shadow-2xl shadow-brand/40 mb-8 transition-transform group-hover:-rotate-45">
                <ArrowLeft className="w-10 h-10" />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">{dictionary.home.view_all}</h3>
            </motion.div>
         </Link>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}
    >
      {/* Device Showcase Side */}
      <div className="flex-1 w-full perspective-1000">
        {project.type === "laptop" ? (
          <LaptopFrame color={project.color} />
        ) : (
          <MobileFrame color={project.color} />
        )}
      </div>

      {/* Info Side */}
      <div className="flex-1 text-center md:text-right space-y-6">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest border border-brand/20 mb-4">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">
            {project.title}
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-xl mx-auto md:mr-0">
            توضیحات اختصاصی برای هر پروژه که نشان‌دهنده تخصص ما در حل چالش‌های دیجیتال است.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function LaptopFrame({ color }: { color: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
      className="relative w-full max-w-[800px] mx-auto group"
    >
      <div className="relative border-[14px] border-zinc-800 rounded-t-[2.5rem] aspect-[16/10] overflow-hidden bg-card shadow-2xl transition-all duration-700 group-hover:shadow-brand/20">
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" style={{ backgroundColor: color }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-10">
           <Monitor className="w-24 h-24" />
        </div>
        {/* Animated Screen Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/10 pointer-events-none" />
      </div>
      <div className="h-5 bg-zinc-800 rounded-b-2xl w-[106%] -ml-[3%] relative z-10 shadow-2xl" />
    </motion.div>
  );
}

function MobileFrame({ color }: { color: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, rotateZ: -1, y: -10 }}
      className="relative w-[300px] md:w-[380px] mx-auto group"
    >
      <div className="relative border-[12px] border-zinc-800 rounded-[4rem] aspect-[9/19] overflow-hidden bg-card shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-all duration-700 group-hover:shadow-brand/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-zinc-800 rounded-b-[2rem] z-30" />
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" style={{ backgroundColor: color }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-10">
           <Smartphone className="w-20 h-24" />
        </div>
      </div>
      {/* Visual shadow under phone */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-brand/5 blur-3xl rounded-full" />
    </motion.div>
  );
}
