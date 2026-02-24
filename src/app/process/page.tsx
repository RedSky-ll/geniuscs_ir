import { Navbar } from "@/components/navbar";
import { ProcessSection } from "@/components/home/process-section";

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <div className="pt-20">
        <ProcessSection />
      </div>
      
      <footer className="py-12 px-6 border-t border-border text-center text-muted-foreground font-mono text-xs tracking-widest uppercase font-black">
        <p>&copy; 2026 GENIUS CS AGENCY</p>
      </footer>
    </main>
  );
}