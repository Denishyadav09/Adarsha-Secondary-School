"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap, Users, Trophy, BookOpen, ArrowRight,
  Star, ChevronDown, Award, Calendar, Zap, Video, ClipboardList
} from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const stats = [
  { value: "500+", label: "Students", icon: Users },
  { value: "98%", label: "SEE Pass Rate", icon: Trophy },
  { value: "30+", label: "Expert Faculty", icon: GraduationCap },
  { value: "15+", label: "Years of Excellence", icon: Star },
];

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "Curriculum aligned with NEB standards, taught by experienced educators.",
  },
  {
    icon: Zap,
    title: "Modern Facilities",
    desc: "Computer lab, library, science lab, and spacious playground.",
  },
  {
    icon: Trophy,
    title: "Award-Winning Results",
    desc: "Consistently topping district SEE results year after year.",
  },
  {
    icon: Users,
    title: "Holistic Development",
    desc: "Sports, cultural events, and co-curricular activities for all students.",
  },
  {
    icon: Award,
    title: "Scholarships",
    desc: "Merit-based scholarships and financial assistance for deserving students.",
  },
  {
    icon: Calendar,
    title: "Active Community",
    desc: "Regular events, parent-teacher meetings, and alumni programs.",
  },
];

const notices = [
  { label: "Admissions Open", text: "Grade 1–10 admissions now open for 2081 B.S.", type: "hot" },
  { label: "SEE Results", text: "Class 10 SEE results announced — 98% pass rate!", type: "success" },
  { label: "Annual Function", text: "Annual function scheduled for Falgun 15, 2081.", type: "info" },
  { label: "Holiday Notice", text: "School closed on upcoming national holidays.", type: "neutral" },
];

export default function HomePage() {
  useSmoothScroll();

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgb(8,8,14)] z-[2]" />
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6"
          >
            <span className="section-tag">
              <GraduationCap className="w-3.5 h-3.5" />
              Welcome to Nepal&apos;s Premier School
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Adarsha
            <br />
            <span className="gradient-text">Secondary School</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg sm:text-xl text-white/60 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Empowering Students For A Better Tomorrow
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/routes/admissions" className="btn-primary text-base px-7 py-3.5">
              Apply for Admission
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/routes/about" className="btn-secondary text-base px-7 py-3.5">
              Explore School
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 relative">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-brand-400" />
                </div>
                <p className="stat-number">{stat.value}</p>
                <p className="text-white/50 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTICES TICKER ── */}
      <section className="py-4 border-y border-white/[0.06] overflow-hidden">
        <div className="flex items-center gap-4 container-xl mb-2">
          <span className="section-tag flex-shrink-0">
            <Zap className="w-3 h-3" /> Live Notices
          </span>
        </div>
        <div className="flex gap-8 overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...notices, ...notices].map((n, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-white/60">
                <span className={`px-2 py-0.5 rounded text-xs font-semibold ${n.type === "hot" ? "bg-red-500/20 text-red-400" :
                  n.type === "success" ? "bg-emerald-500/20 text-emerald-400" :
                    n.type === "info" ? "bg-brand-500/20 text-brand-400" :
                      "bg-white/10 text-white/50"
                  }`}>
                  {n.label}
                </span>
                {n.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="page-section">
        <div className="container-xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag mb-4 inline-flex"
            >
              Why Adarsha Secondary School
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4"
            >
              Education That{" "}
              <span className="gradient-text">Shapes Futures</span>
            </motion.h2>
            <p className="text-white/50 max-w-xl mx-auto">
              We combine academic rigour with holistic development to prepare students for life&apos;s challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-700/10 border border-brand-500/20 flex items-center justify-center mb-4 group-hover:shadow-glow-sm transition-all">
                  <f.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPAL MESSAGE ── */}
      <section className="page-section">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 shadow-glow bg-white flex items-center justify-center">
              <img src="/logo.jpg" alt="Adarsha Secondary School" className="w-full h-full object-contain" />
            </div>
            <blockquote className="font-display text-xl md:text-2xl text-white/90 italic leading-relaxed mb-6">
              &ldquo;At Adarsha Secondary School, we believe every child has the potential to excel. Our mission is to provide the guidance, environment, and tools they need to unlock that potential and build a better tomorrow.&rdquo;
            </blockquote>
            <p className="font-semibold text-white">Santosh Pokharel</p>
            <p className="text-brand-400 text-sm">Principal, Adarsha Secondary School</p>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK ACCESS ── */}
      <section className="page-section">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-glow-blue opacity-10" />
            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-tag mb-4 inline-flex"
              >
                <Zap className="w-3.5 h-3.5" /> Online Tools
              </motion.span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
                Quick Access
              </h2>
              <p className="text-white/60 max-w-md mx-auto mb-8">
                Join your online class or mark your attendance — everything you need, one click away.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://adarsha-secondary-school-meeting-pn.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-3.5 text-base inline-flex items-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  Adarsha Meeting
                </a>
                <a
                  href="https://adarsha-secondary-school-attendance.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-8 py-3.5 text-base inline-flex items-center gap-2"
                >
                  <ClipboardList className="w-4 h-4" />
                  Attendance
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-section">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-900/40 to-transparent p-10 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-glow-blue opacity-20" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join Adarsha Secondary School?
              </h2>
              <p className="text-white/60 max-w-md mx-auto mb-8">
                Admissions for the 2081 B.S. academic year are now open. Secure your child&apos;s future today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/routes/admissions" className="btn-primary px-8 py-3.5 text-base inline-flex items-center gap-2">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/routes/contact" className="btn-secondary px-8 py-3.5 text-base">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}