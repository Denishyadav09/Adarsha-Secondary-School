"use client";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Music, Dumbbell, Monitor, Palette } from "lucide-react";

const programs = [
  {
    icon: BookOpen,     title: "Academic Excellence Program",
    color: "from-brand-500 to-brand-700",
    desc: "Intensive preparation for SEE with extra classes, mock tests, and personal mentoring for Grade 9–10 students.",
    tags: ["Grade 9–10", "SEE Prep", "Mock Tests"],
  },
  {
    icon: FlaskConical, title: "Science Club",
    color: "from-emerald-500 to-emerald-700",
    desc: "Hands-on experiments, science exhibitions, and olympiad preparation for students passionate about science.",
    tags: ["All Grades", "Lab Work", "Olympiad"],
  },
  {
    icon: Monitor,      title: "Digital Literacy Program",
    color: "from-cyan-500 to-cyan-700",
    desc: "Computer fundamentals, coding basics, internet safety, and digital skills for 21st century readiness.",
    tags: ["Grade 4–10", "Coding", "ICT"],
  },
  {
    icon: Dumbbell,     title: "Sports Development",
    color: "from-orange-500 to-orange-700",
    desc: "Football, volleyball, athletics coaching with district and national competition participation.",
    tags: ["All Grades", "Football", "Athletics"],
  },
  {
    icon: Music,        title: "Cultural Arts Program",
    color: "from-pink-500 to-pink-700",
    desc: "Dance, music, drama and visual arts training for the annual function and inter-school cultural competitions.",
    tags: ["All Grades", "Dance", "Drama"],
  },
  {
    icon: Palette,      title: "Creative Arts Club",
    color: "from-purple-500 to-purple-700",
    desc: "Drawing, painting, and crafts classes that build creativity and fine motor skills in young learners.",
    tags: ["Grade 1–8", "Art", "Craft"],
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            <BookOpen className="w-3.5 h-3.5" /> Programs
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Special <span className="gradient-text">Programs</span>
          </motion.h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Beyond the classroom — specialized programs designed to unlock every student's unique potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-7 group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                <p.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-3">{p.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.07] border border-white/10 text-white/50">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
