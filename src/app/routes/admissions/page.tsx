"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, ClipboardList, Send, GraduationCap } from "lucide-react";

const steps = [
  { icon: FileText,      title: "Collect Form",  desc: "Visit our office or download the form. Available from Baisakh 1, 2082." },
  { icon: ClipboardList, title: "Fill & Submit", desc: "Complete the form with required documents: birth cert, mark sheets, character cert, 4 photos." },
  { icon: CheckCircle2,  title: "Entrance Test", desc: "Written test in Nepali, English & Maths. Date communicated after form submission." },
  { icon: Send,          title: "Enrollment",    desc: "Selected students receive admission letters. Complete fee payment to begin your journey!" },
];

const docs = [
  "Birth Certificate (original + photocopy)",
  "Previous school mark sheet / SEE certificate",
  "Character Certificate from previous school",
  "4 recent passport-size photographs",
  "Parent/Guardian citizenship photocopy",
  "Migration certificate (if from another district)",
];

const fees = [
  { grade: "Grade 1–3",  admission: "Rs. 3,000", monthly: "Rs. 800/mo" },
  { grade: "Grade 4–6",  admission: "Rs. 3,500", monthly: "Rs. 900/mo" },
  { grade: "Grade 7–8",  admission: "Rs. 4,000", monthly: "Rs. 1,000/mo" },
  { grade: "Grade 9–10", admission: "Rs. 5,000", monthly: "Rs. 1,200/mo" },
];

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", cls: "Grade 1", phone: "", email: "", address: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            <GraduationCap className="w-3.5 h-3.5" /> Admissions 2082
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Join Our <span className="gradient-text">School Family</span>
          </motion.h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Begin your child's journey toward excellence. Admissions open for B.S. 2082, Grade 1–10.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} className="glass-card p-6 relative">
              <div className="absolute -top-3 -left-1 w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-sm shadow-glow-sm">
                {i + 1}
              </div>
              <s.icon className="w-7 h-7 text-brand-400 mb-4 mt-3" />
              <h3 className="text-white font-semibold mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Fee Structure */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card p-6 mb-14">
          <h2 className="font-display font-bold text-white text-2xl mb-6">Fee Structure</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left text-white/50 font-medium pb-3">Grade</th>
                  <th className="text-left text-white/50 font-medium pb-3">Admission Fee</th>
                  <th className="text-left text-white/50 font-medium pb-3">Monthly Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {fees.map((f) => (
                  <tr key={f.grade}>
                    <td className="py-3 text-white font-medium">{f.grade}</td>
                    <td className="py-3 text-brand-400">{f.admission}</td>
                    <td className="py-3 text-white/60">{f.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Documents */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-white text-2xl mb-6">Required Documents</h2>
            <div className="space-y-3">
              {docs.map((d) => (
                <div key={d} className="flex items-start gap-3 glass-card p-4">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{d}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-white text-2xl mb-6">Submit Enquiry</h2>
            {submitted ? (
              <div className="glass-card p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-white font-bold text-xl mb-2">Enquiry Submitted!</p>
                <p className="text-white/50 text-sm">We will contact you within 2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: "Student's Full Name", key: "name", type: "text", placeholder: "Enter full name" },
                  { label: "Phone Number",        key: "phone", type: "tel",  placeholder: "98XXXXXXXX" },
                  { label: "Email (Optional)",    key: "email", type: "email", placeholder: "your@email.com" },
                  { label: "Address",             key: "address", type: "text", placeholder: "City, District" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-brand-400 text-xs font-semibold uppercase tracking-wider block mb-2">
                      {field.label}
                    </label>
                    <input
                      required={field.key !== "email"}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-brand-500/50 focus:bg-white/[0.07] transition-all text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-brand-400 text-xs font-semibold uppercase tracking-wider block mb-2">
                    Grade Applying For
                  </label>
                  <select
                    value={form.cls}
                    onChange={(e) => setForm({ ...form, cls: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-500/50 transition-all text-sm cursor-pointer"
                  >
                    {Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`).map((c) => (
                      <option key={c} value={c} className="bg-[#0A1628]">{c}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  Submit Enquiry <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
