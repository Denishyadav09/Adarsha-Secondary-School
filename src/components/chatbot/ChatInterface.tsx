"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, X, Minimize2, Maximize2 } from "lucide-react";
import { searchKnowledge, suggestedQuestions } from "@/data/chatbot-knowledge";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  fullPage?: boolean;
}

const FALLBACK_ANSWER =
  "I'm not sure about that specific question. Please visit the relevant page on our website or contact the school office directly. I'm happy to help with admissions, teachers, results, events, and other school information!";

export default function ChatInterface({ fullPage = false }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "ai",
      content:
        "🙏 Namaste! I'm the **Adarsha AI Assistant**. I can help you with school information, admissions, faculty, results, events, and more. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  async function handleSend(text?: string) {
    const query = (text ?? input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate processing delay
    await new Promise((r) => setTimeout(r, 600 + Math.random() * 600));

    const entry = searchKnowledge(query);
    const aiContent = entry?.answer ?? FALLBACK_ANSWER;

    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "ai",
      content: aiContent,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, aiMsg]);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  const renderContent = (text: string) => {
    return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold text-brand-300">
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  if (minimized && !fullPage) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setMinimized(false)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full btn-primary shadow-glow flex items-center justify-center"
      >
        <Bot className="w-6 h-6" />
      </motion.button>
    );
  }

  const containerClass = fullPage
    ? "flex flex-col h-[calc(100vh-200px)] max-h-[800px]"
    : "fixed bottom-6 right-6 z-50 flex flex-col w-[380px] h-[560px] rounded-2xl shadow-glass-lg border border-white/10 bg-[rgba(8,8,14,0.95)] backdrop-blur-xl overflow-hidden";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={containerClass}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-gradient-to-r from-brand-900/50 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-glow-sm">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-semibold text-sm text-white">Adarsha AI Assistant</p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-[10px] text-white/50">Online • Ready to help</p>
            </div>
          </div>
        </div>
        {!fullPage && (
          <div className="flex gap-1">
            <button
              onClick={() => setMinimized(true)}
              className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div
              className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs ${
                msg.role === "ai"
                  ? "bg-gradient-to-br from-brand-400 to-brand-600"
                  : "bg-gradient-to-br from-gold-400 to-gold-600"
              }`}
            >
              {msg.role === "ai" ? <Bot className="w-3.5 h-3.5 text-white" /> : <User className="w-3.5 h-3.5 text-white" />}
            </div>
            <div
              className={`text-sm leading-relaxed max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.role === "user"
                  ? "chat-bubble-user text-white"
                  : "chat-bubble-ai text-white/90"
              }`}
            >
              {renderContent(msg.content)}
            </div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex gap-2.5"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="chat-bubble-ai flex items-center gap-1.5 px-4 py-3">
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={bottomRef} />
      </div>

      {/* Suggested questions */}
      {messages.length <= 2 && (
        <div className="px-4 pb-2">
          <p className="text-[10px] text-white/30 mb-2 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Suggested
          </p>
          <div className="flex flex-wrap gap-1.5">
            {suggestedQuestions.slice(0, 4).map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-white/60 hover:text-brand-300 hover:border-brand-500/30 hover:bg-brand-500/10 transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-3 border-t border-white/[0.06]">
        <div className="flex items-center gap-2 glass rounded-xl px-4 py-2.5">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about admissions, teachers, results..."
            className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
            className="w-7 h-7 rounded-lg bg-brand-500 hover:bg-brand-400 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
          >
            <Send className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
