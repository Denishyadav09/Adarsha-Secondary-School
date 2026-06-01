"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, GraduationCap, BookOpen, Calendar, Bell, Image, Bot, TrendingUp, Activity, ArrowRight } from "lucide-react";

const stats = [
  { label: "Total Students",   value: "500+",  icon: GraduationCap, color: "from-brand-500 to-brand-700",    href: "/admin/dashboard/students" },
  { label: "Teachers",         value: "30+",   icon: Users,         color: "from-purple-500 to-purple-700",  href: "/admin/dashboard/teachers" },
  { label: "Upcoming Events",  value: "10",    icon: Calendar,      color: "from-emerald-500 to-emerald-700",href: "/admin/dashboard/events" },
  { label: "Notices",          value: "4",     icon: Bell,          color: "from-orange-500 to-orange-700",  href: "/admin/dashboard/notices" },
  { label: "Gallery Items",    value: "120+",  icon: Image,         color: "from-pink-500 to-pink-700",      href: "/admin/dashboard/gallery" },
  { label: "Chatbot Q&A",      value: "100",   icon: Bot,           color: "from-cyan-500 to-cyan-700",      href: "/admin/dashboard/chatbot" },
];

const recentActivity = [
  { action: "New admission enquiry",  from: "Ram Prasad",    time: "2 min ago",  type: "admission" },
  { action: "Event added",            from: "Admin",         time: "1 hr ago",   type: "event" },
  { action: "Gallery updated",        from: "Admin",         time: "3 hrs ago",  type: "gallery" },
  { action: "Result published",       from: "Admin",         time: "1 day ago",  type: "result" },
  { action: "Teacher profile added",  from: "Admin",         time: "2 days ago", type: "teacher" },
];

const quickLinks = [
  { label: "Manage Teachers",   href: "/admin/dashboard/teachers",  icon: Users },
  { label: "SEE Results",       href: "/admin/dashboard/results",   icon: BookOpen },
  { label: "Events & Notices",  href: "/admin/dashboard/events",    icon: Calendar },
  { label: "Gallery",           href: "/admin/dashboard/gallery",   icon: Image },
  { label: "AI Chatbot KB",     href: "/admin/dashboard/chatbot",   icon: Bot },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 md:p-8 pt-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">Admin Dashboard</h1>
            <p className="text-white/40 text-sm">Welcome back — Adarsha Secondary School Control Center</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/40 text-xs">System Online</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}>
            <Link href={s.href} className="glass-card p-5 flex items-center gap-4 group block">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xl font-display font-bold text-white">{s.value}</p>
                <p className="text-white/40 text-xs">{s.label}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Activity */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="glass-card p-6">
          <div className="flex items-center gap-2 mb-5">
            <Activity className="w-4 h-4 text-brand-400" />
            <h2 className="text-white font-semibold">Recent Activity</h2>
          </div>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-white/[0.05] last:border-0">
                <div className="w-7 h-7 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-medium truncate">{a.action}</p>
                  <p className="text-white/30 text-[10px]">by {a.from}</p>
                </div>
                <span className="text-white/25 text-[10px] flex-shrink-0">{a.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="glass-card p-6">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-4 h-4 text-brand-400" />
            <h2 className="text-white font-semibold">Quick Actions</h2>
          </div>
          <div className="space-y-2">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center justify-between px-4 py-3 rounded-xl glass hover:bg-white/[0.08] transition-all group">
                <div className="flex items-center gap-3">
                  <link.icon className="w-4 h-4 text-brand-400" />
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">{link.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-brand-400 transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* SEE Results Summary */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="glass-card p-6">
        <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-brand-400" /> SEE Results Overview
        </h2>
        <div className="flex items-end gap-4 h-24">
          {[
            { year: "2077", pass: 85 }, { year: "2078", pass: 88 },
            { year: "2079", pass: 90 }, { year: "2080", pass: 92 }, { year: "2081", pass: 95 },
          ].map((y, i) => (
            <div key={y.year} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[10px] text-brand-400 font-bold">{y.pass}%</span>
              <div className="w-full rounded-t-lg" style={{
                height: `${(y.pass / 100) * 60}px`,
                background: i === 4 ? "linear-gradient(180deg,#38bdf8,#0284c7)" : "rgba(14,165,233,0.25)",
              }} />
              <span className="text-[9px] text-white/30">{y.year}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
