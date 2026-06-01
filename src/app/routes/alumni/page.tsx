"use client";
import { motion } from "framer-motion";
import { Users, Star, Globe, Briefcase } from "lucide-react";

const alumni = [
  { name: "Dr. Ramesh Sharma",     batch: "2060", career: "MBBS Doctor",         org: "B.P. Koirala Institute",   country: "🇳🇵", quote: "Adarsha Secondary School gave me the discipline and foundation that made my medical career possible." },
  { name: "Anjali Rai",            batch: "2065", career: "Software Engineer",    org: "Microsoft, USA",           country: "🇺🇸", quote: "The teachers here never gave up on me. I owe my success to their patience and dedication." },
  { name: "Bikash Limbu",          batch: "2063", career: "Civil Engineer",       org: "Nepal Government",         country: "🇳🇵", quote: "The value of hard work I learned at this school has been my biggest asset throughout life." },
  { name: "Sunita Gurung",         batch: "2068", career: "IAS Officer",          org: "Government of India",      country: "🇮🇳", quote: "Adarsha Secondary School shaped my thinking and love for service — I'm proud to be an alumna." },
  { name: "Nabin Pokharel",        batch: "2070", career: "Data Scientist",       org: "Google, Australia",        country: "🇦🇺", quote: "The strong maths foundation from here helped me excel in computer science and AI." },
  { name: "Priya Bhandari",        batch: "2072", career: "Business Owner",       org: "Nepal Enterprises",        country: "🇳🇵", quote: "The entrepreneurship mindset was always encouraged at Adarsha. I started my business at 24." },
];

const stats = [
  { value: "5000+", label: "Total Alumni",      color: "text-brand-400" },
  { value: "20+",   label: "Countries",         color: "text-emerald-400" },
  { value: "100+",  label: "Abroad Graduates",  color: "text-purple-400" },
  { value: "30+",   label: "Years of Legacy",   color: "text-gold-400" },
];

export default function AlumniPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            <Users className="w-3.5 h-3.5" /> Alumni
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Our <span className="gradient-text">Success Stories</span>
          </motion.h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Thousands of Adarsha Secondary School graduates are now leading impactful lives across Nepal and the world.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-5 text-center">
              <p className={`text-3xl font-display font-bold ${s.color}`}>{s.value}</p>
              <p className="text-white/40 text-xs mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Alumni Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {alumni.map((a, i) => (
            <motion.div key={a.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {a.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{a.name}</h3>
                  <p className="text-brand-400 text-xs">{a.career}</p>
                  <p className="text-white/40 text-xs">{a.country} {a.org}</p>
                </div>
              </div>
              <blockquote className="text-white/60 text-sm italic leading-relaxed border-l-2 border-brand-500/40 pl-3">
                &ldquo;{a.quote}&rdquo;
              </blockquote>
              <div className="mt-3 flex items-center gap-1">
                <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                <span className="text-white/30 text-xs">Batch {a.batch}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card p-8 text-center max-w-2xl mx-auto">
          <Globe className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h2 className="font-display font-bold text-white text-2xl mb-2">Are You an Alumnus?</h2>
          <p className="text-white/50 text-sm mb-6">
            Join our alumni network, share your story, and help inspire current students.
          </p>
          <a href="/routes/contact" className="btn-primary inline-flex">
            <Briefcase className="w-4 h-4" /> Connect with Alumni Network
          </a>
        </motion.div>
      </div>
    </div>
  );
}
