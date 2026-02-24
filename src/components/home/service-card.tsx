"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="bg-card border-border backdrop-blur-md h-full hover:border-brand/50 transition-all duration-500 group overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Animated Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

        <CardHeader className="relative z-10">
          <div className="mb-6 bg-accent w-16 h-16 rounded-2xl flex items-center justify-center border border-border group-hover:bg-brand group-hover:border-brand transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(var(--brand),0.4)]">
            <div className="group-hover:scale-110 group-hover:text-white transition-transform duration-500 text-foreground">
              {icon}
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-brand transition-colors duration-500">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-muted-foreground leading-relaxed text-md font-medium group-hover:text-foreground transition-colors duration-500">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}