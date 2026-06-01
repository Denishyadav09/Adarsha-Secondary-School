"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Phone, Mail, Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Eye,    title: "Vision",    color: "from-brand-500 to-brand-700",   desc: "Empowering Students For A Better Tomorrow through quality education and holistic development." },
  { icon: Target, title: "Mission",   color: "from-purple-500 to-purple-700", desc: "To provide a nurturing, inclusive environment where every student can achieve their full potential." },
  { icon: Heart,  title: "Values",    color: "from-rose-500 to-rose-700",     desc: "Integrity, Discipline, Excellence, Respect, and Community — the pillars of our school culture." },
];

const milestones = [
  { year: "Est.", event: "School Founded", desc: "Adarsha Secondary School was established to serve the community with quality education." },
  { year: "2060", event: "Library Expansion", desc: "Modern library wing added with 5,000+ books and reading resources." },
  { year: "2070", event: "Computer Lab", desc: "State-of-the-art computer lab set up with 40 computers and internet." },
  { year: "2075", event: "Science Labs", desc: "Dedicated Physics, Chemistry, and Biology labs inaugurated." },
  { year: "2081", event: "AI Integration", desc: "Launched AI-powered school platform and digital learning tools." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            <GraduationCap className="w-3.5 h-3.5" /> About Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            About <span className="gradient-text">Adarsha Secondary School</span>
          </motion.h1>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            Adarsha Secondary School is a premier educational institution in Nepal committed to delivering quality education from Grade 1 to Grade 10, shaping the leaders and innovators of tomorrow.
          </p>
        </div>

        {/* Vision / Mission / Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-7 text-center">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                <v.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">{v.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Principal Message */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card p-8 md:p-12 mb-16 max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center mx-auto mb-6 shadow-glow text-white font-display font-bold text-2xl">
            SP
          </div>
          <blockquote className="font-display text-xl md:text-2xl text-white/85 italic leading-relaxed mb-6">
            &ldquo;Education is not just about textbooks — it is about building character, fostering curiosity, and preparing young minds to face the world with confidence and compassion.&rdquo;
          </blockquote>
          <p className="font-bold text-white">Santosh Pokharel</p>
          <p className="text-brand-400 text-sm">Principal, Adarsha Secondary School</p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-10">Our Journey</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="timeline-line" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`flex gap-6 items-start ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="flex-1 glass-card p-5">
                    <span className="text-brand-400 text-xs font-mono font-bold">{m.year}</span>
                    <h4 className="text-white font-semibold mt-1 mb-1">{m.event}</h4>
                    <p className="text-white/50 text-sm">{m.desc}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-brand-500 border-2 border-brand-300 flex-shrink-0 mt-4 shadow-glow-sm z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card p-8 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-white text-2xl mb-6 text-center">Contact Information</h2>
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Address",   value: "Nepal — Visit Contact page for full address" },
              { icon: Phone,  label: "Phone",     value: "+977-9700066243" },
              { icon: Mail,   label: "Email",     value: "info@adarshavid.edu.np" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs">{c.label}</p>
                  <p className="text-white text-sm">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
