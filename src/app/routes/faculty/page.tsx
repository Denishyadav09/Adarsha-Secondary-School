"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Star } from "lucide-react";

const faculty = [
  {
    name: "Santosh Pokharel",
    role: "Principal",
    qualification: "M.Ed. in Education Management",
    experience: 20,
    subjects: ["School Management", "Education Policy"],
    bio: "Mr. Pokharel has dedicated over two decades to shaping academic excellence at Adarsha Secondary School. Under his leadership, the school has achieved consistent top results in SEE.",
    image: "/faculty/santosh.jpg",
    initials: "SP",
    color: "from-brand-500 to-brand-700",
  },
  {
    name: "Bhagirath Pokhrel ",
    role: "Vice Principal",
    qualification: "PHD in English",
    experience: 15,
    subjects: ["Academic Coordination", "Student Affairs"],
    bio: "Oversees academic operations and student discipline, ensuring a structured and supportive learning environment for all students.",
    image: "/faculty/santosh.jpg",
    initials: "VP",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Sarin Shakya ",
    role: "Mathematics Teacher",
    qualification: "B.Sc., B.Ed. Mathematics",
    experience: 12,
    subjects: ["Mathematics", "Optional Mathematics"],
    bio: "An enthusiastic math educator known for making complex topics simple and accessible. His students consistently score high in SEE mathematics.",
    image: "/faculty/sarin.jpg",
    initials: "RS",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Hiran Dhakal ",
    role: "Science Teacher",
    qualification: "M.Sc. Physics, B.Ed.",
    experience: 10,
    subjects: ["Science", "Physics", "Chemistry"],
    bio: "Brings the world of science to life with interactive experiments and real-world examples that inspire curiosity and critical thinking.",
    image: "/faculty/Hiran.jpg",
    initials: "SA",
    color: "from-rose-500 to-rose-700",
  },
  {
    name: "Ishwar Dahal ",
    role: "Social Studies Teacher",
    qualification: "M.A. History, B.Ed.",
    experience: 14,
    subjects: ["Social Studies", "Nepali History"],
    bio: "Passionate about Nepalese history and culture, Mr. Thapa helps students connect with their heritage while building strong analytical skills.",
    image: "/faculty/Ishwar.jpg",
    initials: "HT",
    color: "from-amber-500 to-amber-700",
  },
  {
    name: "Bhagirath Pokhrel",
    role: "English Teacher",
    qualification: "M.A. English Literature, B.Ed.",
    experience: 8,
    subjects: ["English Language", "English Literature"],
    bio: "An engaging communicator who brings creative writing and spoken English skills to the forefront, preparing students for global opportunities.",
    image: "/faculty/priya.jpg",
    initials: "PB",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    name: "Sita",
    role: "Nepali Teacher",
    qualification: "M.A. Nepali, B.Ed.",
    experience: 16,
    subjects: ["Nepali Language", "Nepali Literature"],
    bio: "A seasoned educator who nurtures a deep love for the Nepali language and literature while ensuring students master grammar and expression.",
    image: "/faculty/krishna.jpg",
    initials: "KK",
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "Sunita Gurung",
    role: "Computer Science Teacher",
    qualification: "B.Sc. Computer Science, B.Ed.",
    experience: 6,
    subjects: ["Computer Science", "ICT"],
    bio: "Brings modern technology education to students with hands-on lab sessions, coding basics, and digital literacy programs.",
    image: "/faculty/sunita.jpg",
    initials: "SG",
    color: "from-indigo-500 to-indigo-700",
  },
  {
  name: "Suman Shrestha",
  role: "Optional Mathematics Teacher",
  qualification: "B.Sc. Mathematics, B.Ed.",
  experience: 9,
  subjects: ["Optional Mathematics", "Mathematics"],
  bio: "Mr. Shrestha is a dedicated Optional Mathematics teacher known for his clear explanations and problem-solving techniques. His students consistently achieve excellent results in SEE.",
  image: "/faculty/Suman.jpg",
  initials: "SS",
  color: "from-green-500 to-green-700",
},
];

function FacultyAvatar({ member, size = "md" }: { member: typeof faculty[0]; size?: "lg" | "md" }) {
  const sizeClass = size === "lg"
    ? "w-24 h-24 md:w-32 md:h-32 rounded-2xl text-3xl"
    : "w-14 h-14 rounded-xl text-lg";

  return (
    <div className={`${sizeClass} flex-shrink-0 overflow-hidden shadow-md`}>
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to initials if image not found
          const target = e.currentTarget;
          target.style.display = "none";
          const parent = target.parentElement!;
          parent.classList.add(`bg-gradient-to-br`, ...member.color.split(" "));
          parent.innerHTML = `<span class="text-white font-bold flex items-center justify-center w-full h-full">${member.initials}</span>`;
        }}
      />
    </div>
  );
}

export default function FacultyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag mb-4 inline-flex"
          >
            <GraduationCap className="w-3.5 h-3.5" /> Our Faculty
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4"
          >
            Meet Our <span className="gradient-text">Dedicated Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto"
          >
            Our experienced educators bring passion, expertise, and dedication to every classroom.
          </motion.p>
        </div>

        {/* Principal featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 md:p-10 mb-8 flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto"
        >
          <FacultyAvatar member={faculty[0]} size="lg" />
          <div className="text-center md:text-left">
            <div className="section-tag mb-3 inline-flex">Principal</div>
            <h2 className="font-display text-2xl font-bold text-white mb-1">{faculty[0].name}</h2>
            <p className="text-brand-400 text-sm mb-3">{faculty[0].qualification} · {faculty[0].experience} Years Experience</p>
            <p className="text-white/60 leading-relaxed">{faculty[0].bio}</p>
          </div>
        </motion.div>

        {/* Rest of faculty grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {faculty.slice(1).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass-card p-6 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <FacultyAvatar member={member} size="md" />
                <div>
                  <h3 className="font-semibold text-white text-base">{member.name}</h3>
                  <p className="text-brand-400 text-xs">{member.role}</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {member.subjects.map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-xs text-white/40 pt-3 border-t border-white/[0.06]">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> {member.qualification}
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-white/40">
                <Star className="w-3 h-3 text-gold-400" />
                <span>{member.experience} years experience</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}