import { Navbar } from "@/components/navbar";
import { ContactSection } from "@/components/home/contact-section";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <div className="pt-20">
        <ContactSection />
      </div>

      <section className="py-20 px-6 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">ایمیل</h4>
            <p className="text-xl font-bold">hello@geniuscs.com</p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">استودیو</h4>
            <p className="text-xl font-bold">تهران، ایران</p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">تلفن</h4>
            <p className="text-xl font-bold font-mono">۰۲۱-۸۸۸۸۸۸۸۸</p>
          </div>
        </div>
      </section>
      
      <footer className="py-12 px-6 border-t border-border text-center text-muted-foreground font-mono text-xs tracking-widest uppercase font-black">
        <p>&copy; 2026 GENIUS CS AGENCY</p>
      </footer>
    </main>
  );
}
