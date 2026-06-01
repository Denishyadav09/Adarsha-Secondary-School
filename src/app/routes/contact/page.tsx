"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            <MessageSquare className="w-3.5 h-3.5" /> Contact Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <p className="text-white/50 max-w-md mx-auto">
            Have a question? We&apos;d love to hear from you. Send a message or visit us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="font-display font-bold text-white text-2xl mb-6">School Information</h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: MapPin, label: "Address",      value: "Adarsha Secondary School, Nepal\nContact office for full address" },
                { icon: Phone,  label: "Phone",        value: "+977-9700066243" },
                { icon: Mail,   label: "Email",        value: "info@adarshavid.edu.np" },
                { icon: Clock,  label: "Office Hours", value: "Sunday – Friday\n10:00 AM – 4:00 PM" },
              ].map((c) => (
                <div key={c.label} className="glass-card p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <c.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{c.label}</p>
                    <p className="text-white text-sm whitespace-pre-line">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="glass-card p-0 rounded-2xl overflow-hidden h-48 flex items-center justify-center border-dashed border border-white/10">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-brand-400 mx-auto mb-2" />
                <p className="text-white/40 text-sm">Google Map will appear here</p>
                <p className="text-white/25 text-xs">Add your coordinates to .env.local</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="font-display font-bold text-white text-2xl mb-6">Send a Message</h2>
            {sent ? (
              <div className="glass-card p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-white font-bold text-xl mb-2">Message Sent!</p>
                <p className="text-white/50 text-sm">We&apos;ll get back to you within 1–2 business days.</p>
                <button onClick={() => setSent(false)} className="btn-secondary mt-6 text-sm">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: "Your Name",   key: "name",    type: "text",  placeholder: "Full name" },
                  { label: "Email",       key: "email",   type: "email", placeholder: "your@email.com" },
                  { label: "Subject",     key: "subject", type: "text",  placeholder: "What is this about?" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-brand-400 text-xs font-semibold uppercase tracking-wider block mb-2">{f.label}</label>
                    <input required type={f.type} placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-brand-500/50 transition-all text-sm" />
                  </div>
                ))}
                <div>
                  <label className="text-brand-400 text-xs font-semibold uppercase tracking-wider block mb-2">Message</label>
                  <textarea required rows={5} placeholder="Write your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-brand-500/50 transition-all text-sm resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
