import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { ServiceCard } from "@/components/home/service-card";
import { ProcessSection } from "@/components/home/process-section";
import { ContactSection } from "@/components/home/contact-section";
import { StatsSection } from "@/components/home/stats-section";
import { FeaturesSection } from "@/components/home/features-section";
import { PartnershipSection } from "@/components/home/partnership-section";
import { ScrollSection } from "@/components/home/scroll-section";
import { HorizontalPortfolio } from "@/components/home/horizontal-portfolio";
import { Code, Smartphone, ShieldCheck, BrainCircuit, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dictionary } from "@/lib/dictionary";

export default function IndexPage() {
  const dict = dictionary;

  return (
    <main className="min-h-screen relative overflow-hidden bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Preview */}
      <section className="relative z-10 py-40 px-6 border-t border-border bg-background overflow-hidden">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-brand/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-foreground">
                {dict.services.title}
              </h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                {dict.services.subtitle}
              </p>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="text-brand hover:text-brand/80 p-0 h-auto text-xl font-black group transition-all">
                {dict.home.view_all} <ArrowLeft className="mr-3 w-6 h-6 transition-transform group-hover:-translate-x-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <ServiceCard 
              icon={<Code className="w-8 h-8" />}
              title={dict.services.web_design.title}
              description={dict.services.web_design.description}
            />
            <ServiceCard 
              icon={<Smartphone className="w-8 h-8" />}
              title={dict.services.mobile_app.title}
              description={dict.services.mobile_app.description}
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-8 h-8" />}
              title={dict.services.cybersecurity.title}
              description={dict.services.cybersecurity.description}
            />
            <ServiceCard 
              icon={<BrainCircuit className="w-8 h-8" />}
              title={dict.services.ai.title}
              description={dict.services.ai.description}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Scroll-driven Section */}
      <ScrollSection />

      {/* Partnership Section */}
      <PartnershipSection />

      {/* Horizontal Portfolio Showcase */}
      <HorizontalPortfolio />

      {/* Process Section */}
      <ProcessSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between gap-24 mb-24 text-right">
              <div className="max-w-sm">
                 <Link href="/" className="text-5xl font-black tracking-tighter mb-8 block group">
                   GENIUS<span className="text-brand group-hover:text-foreground transition-colors">CS</span>
                 </Link>
                 <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                   آژانس طراحی و توسعه حرفه‌ای برای تجربه‌های دیجیتال برتر.
                 </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
                 <div className="flex flex-col gap-6">
                    <h4 className="text-sm font-black uppercase tracking-widest text-zinc-500">{dict.footer.navigation}</h4>
                    <Link href="/services" className="text-xl font-bold hover:text-brand transition-colors">{dict.navigation.services}</Link>
                    <Link href="/portfolio" className="text-xl font-bold hover:text-brand transition-colors">{dict.navigation.portfolio}</Link>
                    <Link href="/process" className="text-xl font-bold hover:text-brand transition-colors">{dict.navigation.process}</Link>
                 </div>
                 <div className="flex flex-col gap-6">
                    <h4 className="text-sm font-black uppercase tracking-widest text-zinc-500">{dict.navigation.contact}</h4>
                    <Link href="/contact" className="text-xl font-bold hover:text-brand transition-colors">{dict.home.start_project}</Link>
                    <p className="text-xl font-bold text-muted-foreground">تهران، ایران</p>
                 </div>
                 <div className="flex flex-col gap-6">
                    <h4 className="text-sm font-black uppercase tracking-widest text-zinc-500">{dict.footer.social}</h4>
                    <Link href="#" className="text-xl font-bold hover:text-brand transition-colors">اینستاگرام</Link>
                    <Link href="#" className="text-xl font-bold hover:text-brand transition-colors">لینکدین</Link>
                 </div>
              </div>
           </div>
           
           <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-muted-foreground font-mono text-xs tracking-widest uppercase font-black">
              <p>&copy; 2026 GENIUS CS AGENCY / {dict.footer.rights}</p>
              <div className="flex gap-12">
                 <span>{dict.footer.privacy}</span>
                 <span>{dict.footer.terms}</span>
              </div>
           </div>
        </div>
      </footer>
    </main>
  );
}