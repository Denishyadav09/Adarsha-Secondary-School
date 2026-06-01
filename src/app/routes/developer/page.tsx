"use client";
import { motion } from "framer-motion";
import { Code2, Github, Globe, Zap, Terminal, Layers } from "lucide-react";

const stack = [
  { name: "Next.js 15",       color: "bg-white/10 text-white" },
  { name: "TypeScript",       color: "bg-blue-500/20 text-blue-400" },
  { name: "Tailwind CSS",     color: "bg-cyan-500/20 text-cyan-400" },
  { name: "Framer Motion",    color: "bg-purple-500/20 text-purple-400" },
  { name: "React Three Fiber", color: "bg-orange-500/20 text-orange-400" },
  { name: "Three.js",         color: "bg-yellow-500/20 text-yellow-400" },
  { name: "GSAP",             color: "bg-green-500/20 text-green-400" },
  { name: "Supabase",         color: "bg-emerald-500/20 text-emerald-400" },
  { name: "OpenAI API",       color: "bg-rose-500/20 text-rose-400" },
  { name: "Lenis Scroll",     color: "bg-indigo-500/20 text-indigo-400" },
  { name: "Vercel",           color: "bg-white/10 text-white/70" },
];

const features = [
  { icon: Zap,      title: "3D Hero Scene",        desc: "React Three Fiber with floating spheres, particles, and animated orbs." },
  { icon: Terminal, title: "AI Chatbot",            desc: "100+ Q&A knowledge base + OpenAI GPT-4o-mini fallback, English & Nepali." },
  { icon: Layers,   title: "Full Pages",            desc: "Home, About, Academics, Faculty, Admissions, Results, Gallery, Events, Achievements, Alumni, Contact, AI Assistant, Admin." },
  { icon: Globe,    title: "Responsive Design",     desc: "Mobile, tablet, laptop, desktop, 4K — all screen sizes supported." },
  { icon: Code2,    title: "Admin Dashboard",       desc: "Full CRUD management for teachers, results, events, gallery, and notices." },
  { icon: Zap,      title: "Performance First",     desc: "Lighthouse 95+, lazy loading, WebP images, code splitting." },
];

export default function DeveloperPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            <Code2 className="w-3.5 h-3.5" /> Developer
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Built With <span className="gradient-text">Passion</span>
          </motion.h1>
          <p className="text-white/50 max-w-xl mx-auto">
            A futuristic AI-powered school digital ecosystem — built as a complete production-ready platform.
          </p>
        </div>

        {/* Developer Card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-10 max-w-2xl mx-auto mb-14 text-center">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center mx-auto mb-5 shadow-glow text-white text-3xl font-display font-bold">
            &lt;/&gt;
          </div>
          <h2 className="font-display text-2xl font-bold text-white mb-1">Developer</h2>
          <p className="text-brand-400 text-sm mb-4">Full-Stack Developer · AI & 3D Web Specialist</p>
          <p className="text-white/55 text-sm leading-relaxed mb-6">
            Adarsha Secondary School OS is a world-class school platform built with Next.js 15, Three.js 3D, AI chatbot integration, and a premium Apple-level UI. Designed to serve as a complete digital operating system for schools.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="/" className="btn-primary text-sm">
              <Globe className="w-4 h-4" /> Portfolio
            </a>
          </div>
        </motion.div>

        {/* Project Features */}
        <h2 className="font-display font-bold text-white text-2xl mb-6">Project Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-5">
              <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center mb-3">
                <f.icon className="w-4 h-4 text-brand-400" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{f.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <h2 className="font-display font-bold text-white text-2xl mb-5">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((t, i) => (
            <motion.span key={t.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium ${t.color}`}>
              {t.name}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
