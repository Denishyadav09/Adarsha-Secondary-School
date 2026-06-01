
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, BookOpen, Image, Calendar, Bell, GraduationCap, Settings, LogOut, Bot, Lock, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const ADMIN_USERNAME = "Denish-yadav";
const ADMIN_PASSWORD = "Denishyadav09"; // Change this to your password

const navItems = [
  { href: "/admin/dashboard",            icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/dashboard/teachers",   icon: Users,           label: "Teachers" },
  { href: "/admin/dashboard/students",   icon: GraduationCap,   label: "Students" },
  { href: "/admin/dashboard/results",    icon: BookOpen,        label: "Results" },
  { href: "/admin/dashboard/gallery",    icon: Image,           label: "Gallery" },
  { href: "/admin/dashboard/events",     icon: Calendar,        label: "Events" },
  { href: "/admin/dashboard/notices",    icon: Bell,            label: "Notices" },
  { href: "/admin/dashboard/chatbot",    icon: Bot,             label: "Chatbot KB" },
  { href: "/admin/dashboard/settings",   icon: Settings,        label: "Settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("admin_auth") === "true";
    setIsLoggedIn(loggedIn);
    setChecking(false);
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_auth", "true");
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_auth");
    setIsLoggedIn(false);
  }

  if (checking) return null;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="glass-card p-8">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h1 className="font-display text-2xl font-bold text-white">Admin Login</h1>
              <p className="text-white/40 text-sm mt-1">Adarsha Secondary School</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-white/60 text-sm mb-2 block">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-500/50 text-sm"
                  autoFocus
                />
              </div>

              <div>
                <label className="text-white/60 text-sm mb-2 block">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-500/50 text-sm pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 justify-center"
              >
                Login to Admin Panel
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                ← Back to Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="admin-sidebar w-64 fixed inset-y-0 left-0 flex flex-col z-40 hidden md:flex">
        <div className="p-5 border-b border-white/[0.07]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Admin Panel</p>
              <p className="text-white/30 text-[10px]">Adarsha Secondary School</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                pathname === item.href
                  ? "bg-brand-500/15 text-brand-400 border border-brand-500/20"
                  : "text-white/50 hover:text-white hover:bg-white/[0.05]"
              )}>
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/[0.07] space-y-1">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/[0.05] transition-colors"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/40 hover:text-white/70 transition-colors">
            <LogOut className="w-4 h-4" /> Back to Website
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}