"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Events", "Sports", "Cultural", "Science", "Classroom"];

const gallery = [
  { id: 1,  title: "Annual Function 2081",  category: "Cultural",   image: "/gallery/anual.jpg",       aspect: "tall" },
  { id: 2,  title: "Science Exhibition",    category: "Science",    image: "/gallery/science.jpg",     aspect: "wide" },
  { id: 3,  title: "Football Championship", category: "Sports",     image: "/gallery/footbal.jpg",     aspect: "square" },
  { id: 4,  title: "Scout Team",            category: "Cultural",   image: "/gallery/scout.jpg",       aspect: "tall" },
  { id: 5,  title: "Grade 10 Farewell",     category: "Events",     image: "/gallery/resulet.jpg",     aspect: "wide" },
  { id: 6,  title: "Computer Lab Session",  category: "Classroom",  image: "/gallery/computer.jpg",     aspect: "square" },
  { id: 7,  title: "Volunteerism and Social Responsibility", category: "Sports",     image: "/gallery/social.jpg",     aspect: "wide" },
  { id: 8,  title: "Prize Distribution",    category: "Events",     image: "/gallery/winemovement.jpg",   aspect: "square" },
  { id: 9,  title: "Art Competition",       category: "Cultural",   image: "/gallery/art2.jpg",             aspect: "tall" },
  { id: 10, title: "Library Reading",       category: "Classroom",  image: "/gallery/art.jpg",              aspect: "square" },
  { id: 11, title: "Teacher Capacity Development Training",          category: "Sports",     image: "/gallery/teacher.jpg", aspect: "wide" },
  { id: 12, title: "Saraswati Puja Celebration",                     category: "Science",    image: "/gallery/saraswatipuja.jpg",     aspect: "square" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? gallery : gallery.filter(g => g.category === activeCategory);
  const currentIndex = lightbox !== null ? filtered.findIndex(g => g.id === lightbox) : -1;

  function prev() {
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1].id);
  }
  function next() {
    if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1].id);
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        <div className="text-center mb-12">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-tag mb-4 inline-flex">
            <ImageIcon className="w-3.5 h-3.5" /> Gallery
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            School <span className="gradient-text">Memories</span>
          </motion.h1>
          <p className="text-white/50 max-w-md mx-auto">Moments from events, sports, cultural programs, and daily school life.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((c) => (
            <button key={c} onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                c === activeCategory
                  ? "bg-brand-500 text-white border-brand-500 shadow-glow-sm"
                  : "border-white/10 text-white/50 hover:border-brand-500/30 hover:text-white"
              }`}>
              {c}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} transition={{ delay: i * 0.05 }}
                onClick={() => setLightbox(item.id)}
                className={`break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group ${
                  item.aspect === "tall" ? "h-64" : item.aspect === "wide" ? "h-44" : "h-52"
                }`}>
                <div className="w-full h-full relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    {item.title}
                  </p>
                  <span className="absolute top-2 right-2 text-[10px] text-white/80 bg-black/40 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}>
              <button className="absolute top-4 right-4 p-2 glass rounded-xl text-white/70 hover:text-white" onClick={() => setLightbox(null)}>
                <X className="w-5 h-5" />
              </button>
              {currentIndex > 0 && (
                <button className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass rounded-xl text-white" onClick={(e) => { e.stopPropagation(); prev(); }}>
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              {currentIndex < filtered.length - 1 && (
                <button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass rounded-xl text-white" onClick={(e) => { e.stopPropagation(); next(); }}>
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
              {(() => {
                const item = filtered.find(g => g.id === lightbox);
                if (!item) return null;
                return (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                    className="w-full max-w-3xl rounded-2xl overflow-hidden relative"
                    onClick={(e) => e.stopPropagation()}>
                    <img src={item.image} alt={item.title} className="w-full max-h-[80vh] object-contain" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-3">
                      <p className="text-white font-bold text-lg">{item.title}</p>
                      <p className="text-white/60 text-sm">{item.category}</p>
                    </div>
                  </motion.div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}