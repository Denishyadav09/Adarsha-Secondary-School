"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bot, Bell } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/routes/about", label: "About" },
  { href: "/routes/academics", label: "Academics" },
  { href: "/routes/faculty", label: "Faculty" },
  { href: "/routes/admissions", label: "Admissions" },
  { href: "/routes/results", label: "Results" },
  { href: "/routes/gallery", label: "Gallery" },
  { href: "/routes/events", label: "Events" },
  { href: "/routes/achievements", label: "Achievements" },
  { href: "/routes/alumni", label: "Alumni" },
  { href: "/routes/contact", label: "Contact" },
];

export default function GlassNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[rgba(8,8,14,0.85)] backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="container-xl h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-glow-sm group-hover:shadow-glow transition-all duration-300 bg-white flex items-center justify-center">
              <Image src="/logo.jpg" alt="Adarsha Secondary School" width={40} height={40} className="object-contain w-full h-full" />
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-bold text-white text-base leading-tight">
                Adarsha Secondary School
              </p>
              <p className="text-[10px] text-brand-400 font-mono tracking-widest uppercase">
                Est. Nepal
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-brand-400 bg-brand-500/10"
                    : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Extra buttons without function */}
            <button className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200 border border-white/[0.08]">
              <Bell className="w-4 h-4" />
              <span className="hidden lg:inline">Notices</span>
            </button>
            <button className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200 border border-white/[0.08]">
              <span className="hidden lg:inline">Student Portal</span>
              <span className="lg:hidden">Portal</span>
            </button>

            <Link
              href="/routes/ai-assistant"
              className="hidden sm:flex btn-primary text-sm py-2 px-4"
            >
              <Bot className="w-4 h-4" />
              AI Chat
            </Link>

            <Link
              href="/admin/dashboard"
              className="hidden md:flex btn-secondary text-sm py-2 px-4"
            >
              Admin
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg glass text-white/70 hover:text-white transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 lg:hidden bg-[rgba(8,8,14,0.97)] backdrop-blur-xl border-b border-white/[0.08]"
          >
            <div className="container-xl py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    pathname === link.href
                      ? "text-brand-400 bg-brand-500/10"
                      : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-white/[0.08] flex flex-col gap-2">
                <Link href="/routes/ai-assistant" onClick={() => setMobileOpen(false)} className="btn-primary text-sm text-center justify-center">
                  <Bot className="w-4 h-4" /> AI Assistant
                </Link>
                <Link href="/admin/dashboard" onClick={() => setMobileOpen(false)} className="btn-secondary text-sm text-center justify-center">
                  Admin Dashboard
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
