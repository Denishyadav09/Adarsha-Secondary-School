import type { Metadata } from "next";
import "./globals.css";
import GlassNav from "@/components/ui/glass-nav";
import ChatInterface from "@/components/chatbot/ChatInterface";

export const metadata: Metadata = {
  title: {
    default: "Adarsha Secondary School — Empowering Students For A Better Tomorrow",
    template: "%s | Adarsha Secondary School",
  },
  description:
    "Adarsha Secondary School is a premier school in Nepal offering quality education from Grade 1-10, with strong SEE results, experienced faculty, and a vibrant learning environment.",
  keywords: ["Adarsha Secondary School", "school Nepal", "SEE", "admissions", "NEB", "education"],
  openGraph: {
    title: "Adarsha Secondary School",
    description: "Empowering Students For A Better Tomorrow",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise-bg">
        {/* Background orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="orb orb-blue w-[600px] h-[600px] top-[-200px] left-[10%] animate-float opacity-60" />
          <div className="orb orb-gold w-[400px] h-[400px] bottom-[10%] right-[5%] animate-float-delayed opacity-40" />
          <div className="orb orb-purple w-[300px] h-[300px] top-[40%] left-[60%] opacity-30" />
        </div>

        <GlassNav />

        <main className="relative z-10">
          {children}
        </main>

        {/* Floating AI chatbot */}
        <ChatInterface />

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/[0.06] py-12 mt-20">
          <div className="container-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Adarsha Secondary School
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                  Empowering students for a better tomorrow through quality education, dedicated teachers, and a nurturing environment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white/80 text-sm mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm text-white/50">
                  {["About", "Admissions", "Faculty", "Results", "Events"].map((l) => (
                    <li key={l}>
                      <a href={`/routes/${l.toLowerCase()}`} className="hover:text-brand-400 transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white/80 text-sm mb-3">Contact</h4>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>Nepal</li>
                  <li>+977-9700066243</li>
                  <li>info@adarshavid.edu.np</li>
                  <li>Sun–Fri: 10AM–4PM</li>
                </ul>
              </div>
            </div>
            <div className="glow-line my-8" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
              <p>© {new Date().getFullYear()} Adarsha Secondary School. All rights reserved.</p>
              <a href="/routes/developer" className="hover:text-brand-400 transition-colors">
                Built with ❤️ — Denish_yadav/Durgesh_sah/Aniket_sah
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
