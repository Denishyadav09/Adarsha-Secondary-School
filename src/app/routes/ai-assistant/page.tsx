"use client";
import ChatInterface from "@/components/chatbot/ChatInterface";
import { motion } from "framer-motion";
import { Bot, Zap, Globe, MessageSquare } from "lucide-react";

const features = [
  { icon: Bot,           title: "AI-Powered",       desc: "Backed by OpenAI + local knowledge base" },
  { icon: Globe,         title: "Bilingual",         desc: "Answers in English & Nepali" },
  { icon: MessageSquare, title: "100+ Q&A",          desc: "School info, admissions, results & more" },
  { icon: Zap,           title: "Instant Replies",   desc: "No waiting, real-time responses" },
];

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center mx-auto mb-4 shadow-glow">
            <Bot className="w-8 h-8 text-white" />
          </motion.div>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            AI-Powered Assistant
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Adarsha <span className="gradient-text">AI Assistant</span>
          </motion.h1>
          <p className="text-white/50 max-w-md mx-auto">
            Ask anything about Adarsha Secondary School in English or Nepali. Instant, accurate answers 24/7.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }} className="glass-card p-4 text-center">
              <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-2">
                <f.icon className="w-4 h-4 text-brand-400" />
              </div>
              <p className="text-white text-sm font-semibold">{f.title}</p>
              <p className="text-white/40 text-xs mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto">
          <ChatInterface fullPage />
        </motion.div>
      </div>
    </div>
  );
}
