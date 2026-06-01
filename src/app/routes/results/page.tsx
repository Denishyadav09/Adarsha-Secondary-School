"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, TrendingUp, Star } from "lucide-react";

const years = [
  {
    year: "2081", pass: 95, total: 280, toppers: 18, distinctions: 22,
    students: [
      { name: "Aarav Sharma",   gpa: 3.95, note: "Distinction in all subjects" },
      { name: "Priya Thapa",    gpa: 3.92, note: "Perfect in Mathematics" },
      { name: "Rohan Adhikari", gpa: 3.90, note: "Distinction in Science" },
      { name: "Suman Karki",    gpa: 3.88, note: "Excellence in English" },
      { name: "Nisha Poudel",   gpa: 3.85, note: "Outstanding Performance" },
    ],
  },
  {
    year: "2080", pass: 92, total: 265, toppers: 15, distinctions: 18,
    students: [
      { name: "Binod Rai",      gpa: 3.92, note: "School Topper 2080" },
      { name: "Sita Limbu",     gpa: 3.88, note: "Excellence in Science" },
      { name: "Kiran Shrestha", gpa: 3.85, note: "Math District Rank #2" },
      { name: "Anita Gurung",   gpa: 3.82, note: "Distinction in English" },
      { name: "Dipak Magar",    gpa: 3.80, note: "Outstanding in Social" },
    ],
  },
  {
    year: "2079", pass: 90, total: 255, toppers: 12, distinctions: 15,
    students: [
      { name: "Manish Koirala", gpa: 3.90, note: "School Topper 2079" },
      { name: "Puja Bhandari",  gpa: 3.85, note: "Excellence in Math" },
      { name: "Suraj Basnet",   gpa: 3.82, note: "Science Distinction" },
      { name: "Rita Tamang",    gpa: 3.80, note: "English Excellence" },
    ],
  },
  {
    year: "2078", pass: 88, total: 248, toppers: 10, distinctions: 12,
    students: [
      { name: "Hari Bhattarai",   gpa: 3.88, note: "School Topper 2078" },
      { name: "Sunita Chaudhary", gpa: 3.84, note: "Math Distinction" },
      { name: "Ramesh Yadav",     gpa: 3.80, note: "Science Excellence" },
    ],
  },
  {
    year: "2077", pass: 85, total: 240, toppers: 8, distinctions: 10,
    students: [
      { name: "Gita Subedi",    gpa: 3.86, note: "School Topper 2077" },
      { name: "Nabin Pokharel", gpa: 3.82, note: "Math Excellence" },
      { name: "Laxmi Devi",     gpa: 3.78, note: "Science Distinction" },
    ],
  },
];

export default function ResultsPage() {
  const [active, setActive] = useState(0);
  const current = years[active];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            <Trophy className="w-3.5 h-3.5" /> Academic Results
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            SEE Results — <span className="gradient-text">Past 5 Years</span>
          </motion.h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Consistent excellence in board examinations with outstanding student performance year after year.
          </p>
        </div>

        {/* Trend Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-brand-400" />
            <span className="text-white font-semibold">5-Year Pass Rate Trend</span>
          </div>
          <div className="flex items-end gap-3 h-36">
            {years.slice().reverse().map((y, i) => (
              <div key={y.year} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs font-bold text-brand-400">{y.pass}%</span>
                <div className="w-full rounded-t-lg transition-all duration-500"
                  style={{
                    height: `${(y.pass / 100) * 96}px`,
                    background: i === 4
                      ? "linear-gradient(180deg,#38bdf8,#0284c7)"
                      : "rgba(14,165,233,0.2)",
                  }} />
                <span className="text-[10px] text-white/40">BS {y.year}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Year Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {years.map((y, i) => (
            <button key={y.year} onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                i === active
                  ? "bg-gradient-to-r from-brand-400 to-brand-600 text-white border-transparent shadow-glow-sm"
                  : "border-white/10 text-white/50 hover:border-brand-500/30 hover:text-white"
              }`}>
              B.S. {y.year} {i === 0 && "★"}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Pass Rate",          value: `${current.pass}%`,    color: "text-brand-400" },
            { label: "Total Appeared",     value: current.total,         color: "text-blue-400" },
            { label: "GPA 3.8+ Students",  value: current.toppers,       color: "text-gold-400" },
            { label: "Distinctions",       value: current.distinctions,  color: "text-purple-400" },
          ].map((s) => (
            <motion.div key={s.label} layout className="glass-card p-5 text-center">
              <p className={`text-3xl font-display font-bold ${s.color} mb-1`}>{s.value}</p>
              <p className="text-white/40 text-xs">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Toppers */}
        <h3 className="text-white font-display font-bold text-xl mb-5 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-gold-400" /> Top Achievers — B.S. {current.year}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.students.map((s, i) => (
            <motion.div key={s.name} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }} className="glass-card p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-xl flex-shrink-0">
                {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : s.name[0]}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{s.name}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                  <span className="text-gold-400 font-bold text-sm">GPA {s.gpa}</span>
                </div>
                <p className="text-white/40 text-xs mt-0.5">{s.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
