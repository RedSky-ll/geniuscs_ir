import { Navbar } from "@/components/navbar";
import { ServiceCard } from "@/components/home/service-card";
import { Code, Layout, Smartphone, ShieldCheck, BrainCircuit } from "lucide-react";
import { dictionary } from "@/lib/dictionary";

export default function ServicesPage() {
  const dict = dictionary;

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
              {dict.services.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              {dict.services.subtitle} ما تخصص فنی بین‌المللی GeniusCS کانادا را با خلاقیت تیم اجرایی ایران ترکیب می‌کنیم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
      
      <footer className="py-12 px-6 border-t border-border text-center text-muted-foreground font-mono text-xs tracking-widest uppercase font-black">
        <p>&copy; 2026 GENIUS CS AGENCY / OFFICIAL REPRESENTATIVE OF GENIUSCS.CA</p>
      </footer>
    </main>
  );
}
