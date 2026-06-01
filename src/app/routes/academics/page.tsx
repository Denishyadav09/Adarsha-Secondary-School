"use client";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Monitor, Calculator, Globe, Music } from "lucide-react";

const subjects = [
  { icon: BookOpen,    name: "Nepali",             grades: "1–10", desc: "Language, literature, grammar and creative writing in Nepali." },
  { icon: Globe,       name: "English",            grades: "1–10", desc: "Communication skills, grammar, comprehension and literature." },
  { icon: Calculator,  name: "Mathematics",        grades: "1–10", desc: "Core maths plus Optional Mathematics for Grades 9–10." },
  { icon: FlaskConical,name: "Science",            grades: "1–10", desc: "Physics, Chemistry, Biology with hands-on lab sessions." },
  { icon: Globe,       name: "Social Studies",     grades: "1–10", desc: "Nepal history, geography, civics and global awareness." },
  { icon: Monitor,     name: "Computer Science",   grades: "4–10", desc: "ICT fundamentals, programming basics, and digital literacy." },
  { icon: Music,       name: "Health & PE",        grades: "1–10", desc: "Physical fitness, sports, and health education." },
  { icon: BookOpen,    name: "Moral Science",      grades: "1–8",  desc: "Values, ethics and character development." },
];

const gradeGroups = [
  { range: "Grade 1–3",  title: "Primary",     desc: "Foundation literacy, numeracy and values.", color: "from-emerald-500 to-emerald-700" },
  { range: "Grade 4–5",  title: "Upper Primary", desc: "Deeper subject exploration and skills.", color: "from-blue-500 to-blue-700" },
  { range: "Grade 6–8",  title: "Middle School", desc: "Subject specialisation and lab work.",    color: "from-purple-500 to-purple-700" },
  { range: "Grade 9–10", title: "SEE Prep",     desc: "NEB board exam preparation and revision.", color: "from-brand-500 to-brand-700" },
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            <BookOpen className="w-3.5 h-3.5" /> Academics
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Our <span className="gradient-text">Curriculum</span>
          </motion.h1>
          <p className="text-white/50 max-w-xl mx-auto">
            A comprehensive NEB-aligned curriculum designed to develop academic excellence and life skills from Grade 1 to 10.
          </p>
        </div>

        {/* Grade Groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {gradeGroups.map((g, i) => (
            <motion.div key={g.range} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-5 text-center">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center mx-auto mb-3 text-white text-xs font-bold shadow-md`}>
                {g.range.split(" ")[1]}
              </div>
              <p className="text-white font-semibold text-sm">{g.title}</p>
              <p className="text-brand-400 text-xs mb-2">{g.range}</p>
              <p className="text-white/45 text-xs">{g.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Subjects */}
        <h2 className="font-display font-bold text-white text-2xl mb-6">Subjects Offered</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {subjects.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass-card p-5 group">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-3 group-hover:bg-brand-500/20 transition-colors">
                <s.icon className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{s.name}</h3>
              <p className="text-brand-400 text-xs mb-2">Grades {s.grades}</p>
              <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Exam System */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card p-8">
          <h2 className="font-display font-bold text-white text-2xl mb-6">Assessment System</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Continuous Assessment (CA)", value: "25%", desc: "Class tests, assignments, participation and projects throughout the year." },
              { title: "Half-Yearly Exam",           value: "25%", desc: "Written exams in Poush covering first half syllabus." },
              { title: "Annual / Board Exam",        value: "50%", desc: "Final exams in Chaitra — SEE for Grade 10 via NEB." },
            ].map((a) => (
              <div key={a.title} className="text-center">
                <p className="text-4xl font-display font-bold gradient-text mb-2">{a.value}</p>
                <p className="text-white font-semibold text-sm mb-2">{a.title}</p>
                <p className="text-white/50 text-xs">{a.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
