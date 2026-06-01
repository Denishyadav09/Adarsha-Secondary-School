"use client";
import { motion } from "framer-motion";
import { Trophy, Star, Medal, Award, Zap, Users } from "lucide-react";

const achievements = [
  { icon: "🥇", name: "Aarav Sharma",    year: "2081", title: "SEE District Topper",        gpa: "3.95", category: "Academic" },
  { icon: "🥇", name: "Priya Thapa",     year: "2081", title: "Mathematics Excellence",     gpa: "3.92", category: "Academic" },
  { icon: "🏆", name: "Rohan Adhikari",  year: "2080", title: "National Science Olympiad",  gpa: "3.90", category: "Science" },
  { icon: "⚽", name: "Football Team",   year: "2081", title: "District Football Champions", gpa: "—",    category: "Sports" },
  { icon: "🏐", name: "Volleyball Team", year: "2080", title: "Inter-School Champions",     gpa: "—",    category: "Sports" },
  { icon: "🎭", name: "Drama Club",      year: "2081", title: "Best Cultural Program",      gpa: "—",    category: "Cultural" },
  { icon: "🔬", name: "Science Team",    year: "2081", title: "Zonal Science Exhibition",   gpa: "—",    category: "Science" },
  { icon: "📚", name: "Debate Team",     year: "2080", title: "District Debate Champions",  gpa: "—",    category: "Academic" },
];

const stats = [
  { icon: Trophy, label: "SEE Toppers",        value: "50+",  color: "text-gold-400" },
  { icon: Medal,  label: "Sports Medals",       value: "80+",  color: "text-brand-400" },
  { icon: Award,  label: "Scholarships Won",    value: "30+",  color: "text-emerald-400" },
  { icon: Star,   label: "National Awards",     value: "12+",  color: "text-purple-400" },
  { icon: Zap,    label: "Science Olympiads",   value: "20+",  color: "text-cyan-400" },
  { icon: Users,  label: "Alumni Abroad",       value: "100+", color: "text-orange-400" },
];

const catColors: Record<string, string> = {
  Academic: "bg-brand-500/15 text-brand-400 border-brand-500/20",
  Science:  "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Sports:   "bg-orange-500/15 text-orange-400 border-orange-500/20",
  Cultural: "bg-pink-500/15 text-pink-400 border-pink-500/20",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            <Trophy className="w-3.5 h-3.5" /> Achievements
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Our <span className="gradient-text">Pride & Glory</span>
          </motion.h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Celebrating the remarkable achievements of our students, teams, and school community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass-card p-4 text-center">
              <s.icon className={`w-5 h-5 mx-auto mb-2 ${s.color}`} />
              <p className={`text-2xl font-display font-bold ${s.color}`}>{s.value}</p>
              <p className="text-white/40 text-xs mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievement cards */}
        <h2 className="font-display font-bold text-white text-2xl mb-6">Notable Achievers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {achievements.map((a, i) => (
            <motion.div key={`${a.name}-${i}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="glass-card p-6 text-center group">
              <div className="text-4xl mb-3">{a.icon}</div>
              <h3 className="text-white font-semibold mb-1">{a.name}</h3>
              <p className="text-brand-400 text-xs font-medium mb-2">{a.title}</p>
              {a.gpa !== "—" && (
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                  <span className="text-gold-400 text-sm font-bold">GPA {a.gpa}</span>
                </div>
              )}
              <div className="flex items-center justify-center gap-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${catColors[a.category]}`}>
                  {a.category}
                </span>
                <span className="text-white/30 text-xs">{a.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scholarships Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-br from-amber-900/30 to-transparent p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 to-transparent" />
          <div className="relative z-10">
            <div className="text-5xl mb-4">🎓</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Scholarship Winners
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-2">
              Over 30 of our graduates have secured government and private scholarships for higher education in Nepal and abroad — including India, Australia, and the USA.
            </p>
            <p className="text-gold-400 font-semibold text-sm">
              Merit scholarships available for top SEE performers. Ask at the admissions office.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
