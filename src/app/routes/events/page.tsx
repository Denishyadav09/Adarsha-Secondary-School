"use client";
import { motion } from "framer-motion";
import { Calendar, Bell, Star, Zap } from "lucide-react";

const events = [
  { date: "Baisakh 1, 2082",  title: "New Academic Year Begins",   type: "academic",  desc: "Welcome ceremony for new and returning students. Orientation for Grade 1 students." },
  { date: "Baisakh 15, 2082", title: "Admissions Entrance Test",   type: "admission", desc: "Entrance examination for new admission seekers for Grades 1–10." },
  { date: "Jestha 5, 2082",   title: "Parent-Teacher Meeting",     type: "meeting",   desc: "First PTM of the year. Parents meet class teachers to discuss student progress." },
  { date: "Ashadh 10, 2082",  title: "Science Exhibition",         type: "academic",  desc: "Annual inter-class science project exhibition open to parents and guests." },
  { date: "Shrawan 20, 2082", title: "Sports Week",                type: "sports",    desc: "Week-long sports competitions including football, volleyball, and athletics." },
  { date: "Bhadra 1, 2082",   title: "Half-Yearly Exams Begin",   type: "exam",      desc: "First terminal examinations for all grades." },
  { date: "Ashwin 5, 2082",   title: "Dashain Holidays Begin",    type: "holiday",   desc: "School closed for Dashain festival. Resumes after Tika." },
  { date: "Kartik 15, 2082",  title: "Tihar Holidays",            type: "holiday",   desc: "School closed for Tihar and Chhath celebrations." },
  { date: "Poush 10, 2082",   title: "Annual Function",           type: "cultural",  desc: "Grand annual day celebration with cultural programs, prize distribution and performances." },
  { date: "Magh 1, 2082",     title: "Annual Exams Begin",        type: "exam",      desc: "Final annual examinations for all grades. SEE batch on NEB schedule." },
];

const notices = [
  { title: "Admissions Open 2082",          date: "2082-01-01", tag: "Hot",     content: "Grade 1–10 admissions now open. Limited seats available." },
  { title: "SEE Result 2081 Published",     date: "2081-11-15", tag: "Result",  content: "SEE result 2081 published. 95% pass rate. Check Results page for details." },
  { title: "Holiday Notice — Dashain",      date: "2081-09-28", tag: "Holiday", content: "School will remain closed from Ashwin 28 to Kartik 5 for Dashain." },
  { title: "Fee Payment Reminder",          date: "2082-01-10", tag: "Notice",  content: "Monthly fee for Baisakh is due by Baisakh 15. Late fee applies after." },
];

const typeColors: Record<string, string> = {
  academic:  "bg-brand-500/15 text-brand-400 border-brand-500/20",
  admission: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  meeting:   "bg-purple-500/15 text-purple-400 border-purple-500/20",
  sports:    "bg-orange-500/15 text-orange-400 border-orange-500/20",
  exam:      "bg-red-500/15 text-red-400 border-red-500/20",
  holiday:   "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  cultural:  "bg-pink-500/15 text-pink-400 border-pink-500/20",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            <Calendar className="w-3.5 h-3.5" /> Events & Notices
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            School <span className="gradient-text">Calendar 2082</span>
          </motion.h1>
          <p className="text-white/50 max-w-xl mx-auto">Stay updated with all upcoming events, exams, holidays, and important notices.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Events List */}
          <div className="lg:col-span-2">
            <h2 className="font-display font-bold text-white text-xl mb-5 flex items-center gap-2">
              <Star className="w-5 h-5 text-gold-400" /> Upcoming Events
            </h2>
            <div className="space-y-4">
              {events.map((e, i) => (
                <motion.div key={e.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="glass-card p-5 flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-brand-500/10 flex flex-col items-center justify-center flex-shrink-0 border border-brand-500/20">
                    <Calendar className="w-4 h-4 text-brand-400 mb-1" />
                    <span className="text-[9px] text-white/50 text-center leading-tight">{e.date.split(",")[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h3 className="text-white font-semibold text-sm">{e.title}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold capitalize flex-shrink-0 ${typeColors[e.type]}`}>
                        {e.type}
                      </span>
                    </div>
                    <p className="text-white/40 text-xs mt-0.5 mb-1">{e.date}</p>
                    <p className="text-white/55 text-xs">{e.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notices */}
          <div>
            <h2 className="font-display font-bold text-white text-xl mb-5 flex items-center gap-2">
              <Bell className="w-5 h-5 text-brand-400" /> Notice Board
            </h2>
            <div className="space-y-4">
              {notices.map((n, i) => (
                <motion.div key={n.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-semibold text-sm leading-tight">{n.title}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${
                      n.tag === "Hot"    ? "bg-red-500/20 text-red-400" :
                      n.tag === "Result" ? "bg-emerald-500/20 text-emerald-400" :
                      "bg-white/10 text-white/50"
                    }`}>
                      {n.tag}
                    </span>
                  </div>
                  <p className="text-white/40 text-xs mb-2">{n.date}</p>
                  <p className="text-white/55 text-xs">{n.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="glass-card p-5 mt-4">
              <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-400" /> Academic Year 2082
              </h3>
              {[
                { label: "School Days",   value: "220+" },
                { label: "Holidays",      value: "40+" },
                { label: "Exam Days",     value: "30+" },
                { label: "Events",        value: "15+" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between py-2 border-b border-white/[0.05] last:border-0">
                  <span className="text-white/50 text-xs">{s.label}</span>
                  <span className="text-brand-400 text-xs font-bold">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
