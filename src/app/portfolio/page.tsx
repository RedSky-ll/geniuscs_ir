import { Navbar } from "@/components/navbar";
import { ArrowUpLeft, Code } from "lucide-react";
import { dictionary } from "@/lib/dictionary";

export default function PortfolioPage() {
  const dict = dictionary;

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
              {dict.portfolio.title}
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              {dict.portfolio.subtitle} پروژه‌های اخیر ما در زمینه‌های توسعه وب، اپلیکیشن‌های موبایل و طراحی دیجیتال را مشاهده کنید.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative aspect-[16/10] bg-card rounded-[2.5rem] border border-border overflow-hidden transition-all hover:border-brand/50 hover:shadow-2xl hover:shadow-brand/5 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity z-10" />
                
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-background flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-700">
                      <Code className="w-8 h-8" />
                   </div>
                </div>

                <div className="absolute inset-0 p-12 flex flex-col justify-end z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold mb-3 tracking-tight">نام پروژه 0{i}</h3>
                      <p className="text-brand font-black tracking-wide uppercase text-xs">{dict.portfolio.view_project}</p>
                    </div>
                    <div className="w-14 h-14 rounded-full glass border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowUpLeft className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border text-center text-muted-foreground font-mono text-xs tracking-widest uppercase font-black">
        <p>&copy; 2026 GENIUS CS AGENCY</p>
      </footer>
    </main>
  );
}