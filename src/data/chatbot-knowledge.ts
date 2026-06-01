// ============================================================
// 🤖 Adarsha Secondary School - AI Chatbot Knowledge Base
// 100 Q&A covering school info, academics, admissions & more
// ============================================================

export interface KnowledgeEntry {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

export const schoolKnowledge: KnowledgeEntry[] = [

  // ─────────────────────────────────────────
  // 🏫 SECTION 1: SCHOOL INFORMATION (1–15)
  // ─────────────────────────────────────────
  {
    question: "Who is the principal of Adarsha Secondary School?",
    answer: "The principal of Adarsha Secondary School is Mr. Santosh Pokharel. He has dedicated many years to shaping the school's academic excellence and student development.",
    category: "school_info",
    keywords: ["principal", "head", "santosh", "pokharel", "who runs"],
  },
  {
    question: "Where is Adarsha Secondary School located?",
    answer: "Adarsha Secondary School is located in Koish-province-Biratnagar-7,Morang Nepal. Please contact the school office at +977-9700066243 or visit our Contact page for the exact address and directions.",
    category: "school_info",
    keywords: ["location", "address", "where", "situated", "place", "find"],
  },
  {
    question: "When was Adarsha Secondary School established?",
    answer: "Adarsha Secondary School has a proud history of serving the community for many years. For the exact establishment year, please visit our About page or contact the school office.",
    category: "school_info",
    keywords: ["established", "founded", "started", "history", "year", "old"],
  },
  {
    question: "What is the school's contact number?",
    answer: "You can reach Adarsha Secondary School at our office phone number listed on the Contact page. Our staff are available Sunday to Friday, 10:00 AM to 4:00 PM.",
    category: "school_info",
    keywords: ["contact", "phone", "number", "call", "telephone", "reach"],
  },
  {
    question: "What is the school's email address?",
    answer: "Our official email address is available on the Contact page. You can also use the contact form on our website to send us a message directly.",
    category: "school_info",
    keywords: ["email", "mail", "message", "write", "contact"],
  },
  {
    question: "What are the school's office hours?",
    answer: "The school office is open Sunday to Friday from 10:00 AM to 4:00 PM. We are closed on Saturdays and public holidays.",
    category: "school_info",
    keywords: ["office hours", "timing", "open", "close", "time", "working hours"],
  },
  {
    question: "What is the vision of Adarsha Secondary School?",
    answer: "Our vision is 'Empowering Students For A Better Tomorrow.' We aim to nurture academically strong, morally upright, and socially responsible individuals.",
    category: "school_info",
    keywords: ["vision", "mission", "goal", "aim", "purpose", "motto"],
  },
  {
    question: "What is the mission of Adarsha Secondary School?",
    answer: "Our mission is to provide quality education through experienced teachers, modern facilities, and a holistic learning environment that prepares students for future challenges.",
    category: "school_info",
    keywords: ["mission", "objective", "purpose", "target"],
  },
  {
    question: "How many students are enrolled at Adarsha Secondary School?",
    answer: "Adarsha Secondary School has a growing student community. For the latest enrollment numbers, please contact the school office or visit our About page.",
    category: "school_info",
    keywords: ["students", "enrolled", "total", "how many", "strength", "count"],
  },
  {
    question: "How many teachers does Adarsha Secondary School have?",
    answer: "We have a dedicated team of qualified and experienced teachers across all subjects. Visit our Faculty page to meet our complete teaching staff.",
    category: "school_info",
    keywords: ["teachers", "faculty", "staff", "how many teachers"],
  },
  {
    question: "Does Adarsha Secondary School have a library?",
    answer: "Yes! Adarsha Secondary School has a well-stocked library with books, reference materials, and learning resources for students of all grades.",
    category: "school_info",
    keywords: ["library", "books", "reading", "resources"],
  },
  {
    question: "Does the school have a computer lab?",
    answer: "Yes, we have a modern computer lab equipped with up-to-date computers and internet access to support digital literacy and ICT education.",
    category: "school_info",
    keywords: ["computer lab", "ICT", "computers", "technology", "digital"],
  },
  {
    question: "Does Adarsha Secondary School have a playground?",
    answer: "Yes, we have a spacious playground where students can participate in sports, physical education, and recreational activities.",
    category: "school_info",
    keywords: ["playground", "sports field", "ground", "outdoor", "play area"],
  },
  {
    question: "Is Adarsha Secondary School a government or private school?",
    answer: "Adarsha Secondary School is a community-focused institution committed to quality education. For details on its affiliation and recognition, please visit the About page.",
    category: "school_info",
    keywords: ["government", "private", "public", "community", "type"],
  },
  {
    question: "Which board does Adarsha Secondary School follow?",
    answer: "Adarsha Secondary School follows the curriculum set by the National Examination Board (NEB) of Nepal, preparing students for the SEE examinations.",
    category: "school_info",
    keywords: ["board", "curriculum", "NEB", "syllabus", "Nepal", "national"],
  },

  // ─────────────────────────────────────────
  // 🎓 SECTION 2: ACADEMICS (16–30)
  // ─────────────────────────────────────────
  {
    question: "What grades does Adarsha Secondary School offer?",
    answer: "Adarsha Secondary School offers classes from Grade 1 through Grade 10, providing a complete basic schooling journey for students.",
    category: "academics",
    keywords: ["grades", "classes", "levels", "from", "to", "standard"],
  },
  {
    question: "What subjects are taught at Adarsha Secondary School?",
    answer: "We offer a comprehensive curriculum including Nepali, English, Mathematics, Science, Social Studies, Health & Physical Education, Computer Science, and Optional Mathematics for higher grades.",
    category: "academics",
    keywords: ["subjects", "courses", "taught", "curriculum", "study"],
  },
  {
    question: "What is SEE?",
    answer: "SEE stands for Secondary Education Examination. It is the national board exam conducted at the end of Grade 10 in Nepal, equivalent to the old SLC exam.",
    category: "academics",
    keywords: ["SEE", "secondary education exam", "grade 10 exam", "board exam", "SLC"],
  },
  {
    question: "What is the school's SEE pass percentage?",
    answer: "Adarsha Secondary School consistently achieves strong SEE results. Visit our Results page for detailed year-wise data, GPA charts, and top student profiles.",
    category: "academics",
    keywords: ["SEE result", "pass percentage", "pass rate", "result"],
  },
  {
    question: "Does the school offer extra classes?",
    answer: "Yes, we offer extra classes and tutoring support especially for Grade 9 and 10 students preparing for SEE. Contact the office for the schedule.",
    category: "academics",
    keywords: ["extra class", "tutoring", "tuition", "additional", "support class"],
  },
  {
    question: "What are the school timings?",
    answer: "School timings are Sunday to Friday, 10:00 AM to 4:00 PM. Morning assembly begins at 10:00 AM sharp.",
    category: "academics",
    keywords: ["school time", "start time", "end time", "hours", "schedule", "timing"],
  },
  {
    question: "Does the school follow NEB grading?",
    answer: "Yes, we follow the NEB grading system. Students are assessed using GPA (Grade Point Average) on a scale of 1.6 to 4.0.",
    category: "academics",
    keywords: ["grading", "NEB", "GPA", "marks", "grade point"],
  },
  {
    question: "How are students evaluated?",
    answer: "Students are evaluated through continuous assessment (CA), half-yearly exams, and annual exams. Internal marks and final board exams together determine the overall grade.",
    category: "academics",
    keywords: ["evaluation", "assessment", "exam", "test", "marks", "grading system"],
  },
  {
    question: "Does the school have science and computer classes?",
    answer: "Yes! Science with practical lab sessions and Computer Science with hands-on lab time are core parts of our curriculum from the lower grades.",
    category: "academics",
    keywords: ["science", "computer", "lab", "practical", "experiment"],
  },
  {
    question: "Are there any co-curricular activities?",
    answer: "Absolutely! We have debate clubs, science exhibitions, cultural programs, sports events, art competitions, and annual functions to support holistic student development.",
    category: "academics",
    keywords: ["co-curricular", "extracurricular", "activities", "clubs", "sports", "debate"],
  },
  {
    question: "Does the school have Optional Mathematics?",
    answer: "Yes, Optional Mathematics is available for Grade 9 and 10 students who wish to strengthen their mathematical skills for future studies.",
    category: "academics",
    keywords: ["optional maths", "optional math", "mathematics", "grade 9", "grade 10"],
  },
  {
    question: "Is English medium instruction available?",
    answer: "Yes, English is a medium of instruction for Science, Mathematics, and Computer subjects. Nepali is used for social and language subjects.",
    category: "academics",
    keywords: ["english medium", "language of instruction", "nepali medium", "teaching language"],
  },
  {
    question: "What is the academic calendar?",
    answer: "The academic year follows the Nepal government calendar, typically starting in Baisakh (April) and ending in Chaitra (March). Key exam and holiday dates are posted on the Events page.",
    category: "academics",
    keywords: ["academic calendar", "year", "session", "schedule", "holidays"],
  },
  {
    question: "Does the school provide home assignments?",
    answer: "Yes, regular homework and assignments are given to reinforce classroom learning. Parents are encouraged to ensure students complete their assignments.",
    category: "academics",
    keywords: ["homework", "assignment", "home work", "tasks"],
  },
  {
    question: "What happens if a student fails an exam?",
    answer: "Students who do not meet the passing criteria are given a chance to appear in supplementary or re-exams. Teachers also provide additional academic support.",
    category: "academics",
    keywords: ["fail", "supplementary", "re-exam", "back", "failed"],
  },

  // ─────────────────────────────────────────
  // 📝 SECTION 3: ADMISSIONS (31–45)
  // ─────────────────────────────────────────
  {
    question: "How can I apply for admission?",
    answer: "You can apply online through our Admissions page, or visit the school office to collect a physical form. Our friendly staff will guide you through the process.",
    category: "admissions",
    keywords: ["apply", "admission", "enroll", "join", "register", "application"],
  },
  {
    question: "What documents are required for admission?",
    answer: "Required documents include: birth certificate, character certificate from previous school, previous grade marksheet, passport-size photos, and parent/guardian ID copy.",
    category: "admissions",
    keywords: ["documents", "required", "needed", "papers", "certificate"],
  },
  {
    question: "What is the admission fee?",
    answer: "Admission fees vary by grade. Please visit the Admissions page or contact the office for the current fee structure. We strive to keep education affordable.",
    category: "admissions",
    keywords: ["admission fee", "cost", "charge", "price", "fees"],
  },
  {
    question: "Is there an entrance exam for admission?",
    answer: "Some grades require a basic entrance assessment to place students at the right level. Contact the school to know if your preferred grade requires an entry test.",
    category: "admissions",
    keywords: ["entrance exam", "entry test", "admission test", "assessment"],
  },
  {
    question: "When does the admission process open?",
    answer: "Admissions typically open at the beginning of the academic year in Baisakh (April). Mid-year admissions may also be considered depending on seat availability.",
    category: "admissions",
    keywords: ["admission open", "when", "start", "date", "season"],
  },
  {
    question: "Is there a fee scholarship available?",
    answer: "Yes, we offer merit-based scholarships and financial support for deserving students. Visit the Admissions page or speak to the principal for more details.",
    category: "admissions",
    keywords: ["scholarship", "financial aid", "fee waiver", "discount", "free"],
  },
  {
    question: "What grades are open for new admissions?",
    answer: "We welcome students from Grade 1 to Grade 10. Availability may vary by grade. Contact the admissions office for current seat availability.",
    category: "admissions",
    keywords: ["open grades", "available", "seats", "vacancy"],
  },
  {
    question: "Can mid-term admissions be taken?",
    answer: "Mid-term admissions are considered on a case-by-case basis depending on seat availability and the student's academic records. Contact the office for assessment.",
    category: "admissions",
    keywords: ["mid-term", "mid year", "during year", "transfer"],
  },
  {
    question: "What is the age requirement for Grade 1 admission?",
    answer: "Students must be at least 5–6 years old to apply for Grade 1. Please bring the child's birth certificate for age verification.",
    category: "admissions",
    keywords: ["age", "requirement", "grade 1", "minimum age", "eligibility age"],
  },
  {
    question: "Is transport facility available?",
    answer: "The school is working on expanding transport facilities. Please contact the office to inquire about current transport routes available in your area.",
    category: "admissions",
    keywords: ["transport", "bus", "vehicle", "pick up", "drop"],
  },
  {
    question: "Does the school provide uniforms?",
    answer: "Yes, Adarsha Secondary School has a prescribed uniform. Details about the uniform and where to purchase it are provided at the time of admission.",
    category: "admissions",
    keywords: ["uniform", "dress", "clothes", "school dress"],
  },
  {
    question: "Is there a hostel facility?",
    answer: "Currently, Adarsha Secondary School does not have an in-house hostel. We can recommend nearby accommodation options if needed.",
    category: "admissions",
    keywords: ["hostel", "boarding", "stay", "dorm", "residence"],
  },
  {
    question: "How can I check my admission status?",
    answer: "You can check your admission application status through the online portal on our Admissions page, or call the school office directly.",
    category: "admissions",
    keywords: ["admission status", "check", "application status", "track"],
  },
  {
    question: "Are there any fees for the admission form?",
    answer: "A nominal form fee may be charged. Please visit the Admissions page or contact the office for the current form fee details.",
    category: "admissions",
    keywords: ["form fee", "application form", "cost of form"],
  },
  {
    question: "Can parents visit the school before admission?",
    answer: "Absolutely! We encourage parents to visit the school, meet the teachers, and tour the facilities before making an admission decision. Contact us to schedule a visit.",
    category: "admissions",
    keywords: ["visit", "tour", "school visit", "before admission", "see school"],
  },

  // ─────────────────────────────────────────
  // 👨‍🏫 SECTION 4: FACULTY & STAFF (46–55)
  // ─────────────────────────────────────────
  {
    question: "Who is the vice principal?",
    answer: "Our Vice Principal leads academic coordination and student discipline. Visit the Faculty page to learn more about our school leadership team.",
    category: "faculty",
    keywords: ["vice principal", "deputy principal", "second in charge"],
  },
  {
    question: "How experienced are the teachers?",
    answer: "Our teaching staff are highly qualified and experienced professionals. Each teacher holds relevant educational qualifications and has years of classroom experience.",
    category: "faculty",
    keywords: ["teacher experience", "qualified", "experienced", "expertise"],
  },
  {
    question: "How can I contact a specific teacher?",
    answer: "You can contact teachers through the school office, or after school hours during parent-teacher meetings. Contact details are available from the school administration.",
    category: "faculty",
    keywords: ["contact teacher", "meet teacher", "speak to teacher", "reach teacher"],
  },
  {
    question: "Are parent-teacher meetings held?",
    answer: "Yes, parent-teacher meetings are scheduled periodically, especially after major exams. Dates are announced on the Events page and through school notices.",
    category: "faculty",
    keywords: ["parent teacher meeting", "PTM", "parent meeting", "guardian meeting"],
  },
  {
    question: "Does the school have a counselor?",
    answer: "Yes, we have academic counselors to support students with educational guidance, career counseling, and personal development.",
    category: "faculty",
    keywords: ["counselor", "counselling", "guidance", "support", "career"],
  },
  {
    question: "What qualifications do teachers have?",
    answer: "Our teachers hold Bachelor's or Master's degrees in their respective subjects, along with B.Ed. or teaching certifications. Many also have advanced training.",
    category: "faculty",
    keywords: ["qualification", "degree", "BEd", "masters", "education qualification"],
  },
  {
    question: "How many staff members does the school have?",
    answer: "We have a dedicated team including teaching staff, administrative staff, support staff, and lab assistants. Visit the Faculty page for a full listing.",
    category: "faculty",
    keywords: ["staff", "team", "employees", "total staff"],
  },
  {
    question: "Is there a physical education teacher?",
    answer: "Yes, we have a dedicated Physical Education teacher who oversees sports, fitness activities, and health education classes.",
    category: "faculty",
    keywords: ["PE teacher", "physical education", "sports teacher", "HPE"],
  },
  {
    question: "Are there female teachers at the school?",
    answer: "Yes, Adarsha Secondary School has both male and female teachers to create an inclusive and balanced learning environment.",
    category: "faculty",
    keywords: ["female teacher", "woman teacher", "lady teacher", "gender"],
  },
  {
    question: "Does the school hire new teachers?",
    answer: "The school periodically hires qualified teachers. For current vacancies, please contact the school office or check our website for job announcements.",
    category: "faculty",
    keywords: ["job", "vacancy", "hire", "teaching job", "career"],
  },

  // ─────────────────────────────────────────
  // 🏆 SECTION 5: ACHIEVEMENTS & RESULTS (56–65)
  // ─────────────────────────────────────────
  {
    question: "What are some notable achievements of the school?",
    answer: "Adarsha Secondary School has produced many SEE toppers, scholarship winners, sports champions, and community leaders. Visit our Achievements page for full details.",
    category: "achievements",
    keywords: ["achievements", "awards", "success", "notable", "proud", "recognition"],
  },
  {
    question: "Has the school produced any SEE toppers?",
    answer: "Yes! Our students have consistently ranked among the district toppers in SEE. Check the Achievements and Results pages for details on our star students.",
    category: "achievements",
    keywords: ["topper", "SEE topper", "top student", "rank", "first"],
  },
  {
    question: "Does the school participate in national competitions?",
    answer: "Yes, our students actively participate in district and national level competitions in academics, sports, and cultural events, often bringing home awards.",
    category: "achievements",
    keywords: ["national competition", "district", "inter-school", "olympiad", "contest"],
  },
  {
    question: "Are there sports achievements?",
    answer: "Our sports teams have won medals and trophies in football, volleyball, athletics, and other sports at inter-school and district levels.",
    category: "achievements",
    keywords: ["sports", "medal", "trophy", "football", "volleyball", "athletics"],
  },
  {
    question: "Have students won scholarships?",
    answer: "Yes, many of our graduates have secured government and private scholarships for higher education both within Nepal and abroad.",
    category: "achievements",
    keywords: ["scholarship winner", "abroad", "higher education", "merit"],
  },
  {
    question: "Does the school have any awards or recognitions?",
    answer: "Adarsha Secondary School has received recognition for academic excellence and community service from local education bodies. Details are available on the About page.",
    category: "achievements",
    keywords: ["awards", "recognition", "certification", "honor"],
  },
  {
    question: "What was the highest GPA achieved in SEE?",
    answer: "Our students have achieved GPA 4.0 (A+) in SEE examinations. Visit the Results page for year-wise top scorer data.",
    category: "achievements",
    keywords: ["highest GPA", "4.0", "A plus", "best result", "top grade"],
  },
  {
    question: "Are there science olympiad achievers?",
    answer: "Yes, our students have participated and placed in science olympiads and exhibitions at the district and zonal levels.",
    category: "achievements",
    keywords: ["science olympiad", "science exhibition", "science competition"],
  },
  {
    question: "Has the school won any cultural awards?",
    answer: "Yes, our cultural programs and student performances have won appreciation and awards at various inter-school cultural competitions.",
    category: "achievements",
    keywords: ["cultural award", "dance", "music", "drama", "cultural program"],
  },
  {
    question: "Are alumni success stories available?",
    answer: "Yes! Visit our Alumni page to read inspiring success stories from former students who are now excelling in various fields locally and internationally.",
    category: "achievements",
    keywords: ["alumni", "success story", "former student", "graduate"],
  },

  // ─────────────────────────────────────────
  // 📅 SECTION 6: EVENTS & NOTICES (66–75)
  // ─────────────────────────────────────────
  {
    question: "Where can I see upcoming school events?",
    answer: "All upcoming events, programs, and important notices are listed on our Events page. You can also check the school notice board.",
    category: "events",
    keywords: ["events", "upcoming", "schedule", "program", "calendar"],
  },
  {
    question: "When is the annual function held?",
    answer: "The annual function is typically held in Falgun or Chaitra (February–March). Exact dates are announced on the Events page well in advance.",
    category: "events",
    keywords: ["annual function", "annual day", "celebration", "annual event"],
  },
  {
    question: "Does the school celebrate festivals?",
    answer: "Yes, we celebrate major Nepali festivals including Dashain, Tihar, and national holidays. Cultural events are organized to foster unity and values.",
    category: "events",
    keywords: ["festival", "dashain", "tihar", "celebrate", "holiday"],
  },
  {
    question: "When are school exams held?",
    answer: "Half-yearly exams are usually in Poush (December) and annual exams in Chaitra (March). SEE follows the NEB schedule. Check the Events page for exact dates.",
    category: "events",
    keywords: ["exam date", "when exam", "exam schedule", "test date"],
  },
  {
    question: "Is there a sports day event?",
    answer: "Yes! Our annual Sports Day is a grand event with track and field competitions, team sports, and prizes. It is usually held in winter.",
    category: "events",
    keywords: ["sports day", "athletic meet", "sports event", "games"],
  },
  {
    question: "How can parents stay updated about notices?",
    answer: "Parents can check the Events page on our website, follow our school notice board, or ensure their contact number is registered with the school for SMS updates.",
    category: "events",
    keywords: ["notice", "update", "inform", "parents", "notification"],
  },
  {
    question: "Is there a science exhibition event?",
    answer: "Yes, our annual Science Exhibition showcases creative science projects by students. It is a highlight of the academic year and open to parents and guests.",
    category: "events",
    keywords: ["science exhibition", "science fair", "project"],
  },
  {
    question: "Does the school organize field trips?",
    answer: "Yes, educational field trips and excursions are organized periodically to enrich students' learning experience outside the classroom.",
    category: "events",
    keywords: ["field trip", "excursion", "tour", "educational trip", "outing"],
  },
  {
    question: "Is there a prize distribution ceremony?",
    answer: "Yes, we hold a Prize Distribution Ceremony at the end of each academic year to honor academic achievers, sports champions, and students with exemplary conduct.",
    category: "events",
    keywords: ["prize", "award ceremony", "prize distribution", "honor"],
  },
  {
    question: "Are there debate or quiz competitions held?",
    answer: "Yes, inter-class and inter-school debate competitions and quiz contests are organized regularly to sharpen students' critical thinking and communication skills.",
    category: "events",
    keywords: ["debate", "quiz", "competition", "contest", "speaking"],
  },

  // ─────────────────────────────────────────
  // 💰 SECTION 7: FEES & FINANCIALS (76–82)
  // ─────────────────────────────────────────
  {
    question: "What is the monthly fee?",
    answer: "Monthly fees vary by grade. Please visit the Admissions page or contact the school office for the latest fee structure.",
    category: "fees",
    keywords: ["monthly fee", "fee", "payment", "monthly charge", "tuition"],
  },
  {
    question: "When is the fee due?",
    answer: "Monthly fees are typically due within the first two weeks of each month. Late fees may apply after the due date.",
    category: "fees",
    keywords: ["fee due", "due date", "payment date", "when to pay"],
  },
  {
    question: "Can fees be paid online?",
    answer: "Online fee payment options are being set up. Currently, fees can be paid in cash or via bank transfer at the school office. Contact us for bank details.",
    category: "fees",
    keywords: ["online payment", "pay online", "bank transfer", "digital payment"],
  },
  {
    question: "Is there a late fee penalty?",
    answer: "Yes, a late fee charge may be applied if monthly fees are not paid within the stipulated time. Please refer to the fee policy shared at admission.",
    category: "fees",
    keywords: ["late fee", "penalty", "fine", "overdue"],
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees. All charges including admission, tuition, exam fees, and extra-curricular fees are clearly communicated at the time of admission.",
    category: "fees",
    keywords: ["hidden fees", "extra charges", "additional fees", "transparent"],
  },
  {
    question: "Is there a fee concession for siblings?",
    answer: "Sibling fee concessions may be available. Please speak to the school administration directly to inquire about this benefit.",
    category: "fees",
    keywords: ["sibling", "concession", "discount", "brother", "sister fee"],
  },
  {
    question: "What is the annual exam fee?",
    answer: "Annual and SEE exam fees are as per NEB guidelines and school policy. These are communicated to students at the start of each academic year.",
    category: "fees",
    keywords: ["exam fee", "annual fee", "SEE fee", "examination charge"],
  },

  // ─────────────────────────────────────────
  // 💬 SECTION 8: GREETINGS & GENERAL (83–100)
  // ─────────────────────────────────────────
  {
    question: "Hello",
    answer: "Hello! Welcome to Adarsha Secondary School's AI Assistant. I'm here to help you with admissions, teacher info, results, events, and more. What can I do for you today?",
    category: "greeting",
    keywords: ["hello", "hi", "hey", "greet"],
  },
  {
    question: "Hi there",
    answer: "Hi there! Great to see you here. Ask me anything about Adarsha Secondary School — admissions, academics, faculty, results, or events!",
    category: "greeting",
    keywords: ["hi", "hello", "hey", "howdy"],
  },
  {
    question: "Good morning",
    answer: "Good morning! Hope you have a wonderful day. How can I assist you with information about Adarsha Secondary School today?",
    category: "greeting",
    keywords: ["good morning", "morning"],
  },
  {
    question: "Good afternoon",
    answer: "Good afternoon! I'm ready to help. Whether it's admissions, academics, or school events — just ask!",
    category: "greeting",
    keywords: ["good afternoon", "afternoon"],
  },
  {
    question: "Good evening",
    answer: "Good evening! Thank you for visiting Adarsha Secondary School's website. How can I help you this evening?",
    category: "greeting",
    keywords: ["good evening", "evening"],
  },
  {
    question: "What can you help me with?",
    answer: "I can help you with: school info, admissions, fees, faculty details, SEE results, upcoming events, achievements, gallery, alumni stories, and navigation help. Just ask!",
    category: "general",
    keywords: ["help", "what can you do", "capabilities", "features", "assist"],
  },
  {
    question: "I don't know what to ask",
    answer: "No worries! Here are some popular topics: 🏫 About the school | 📝 Admissions | 👨‍🏫 Faculty | 📊 SEE Results | 📅 Events | 🏆 Achievements. Which interests you?",
    category: "general",
    keywords: ["don't know", "unsure", "help me", "suggest", "what to ask"],
  },
  {
    question: "Why should I choose Adarsha Secondary School?",
    answer: "Adarsha Secondary School offers quality education, experienced teachers, a safe and nurturing environment, strong SEE results, and a focus on all-round student development. We truly care about every child's future.",
    category: "general",
    keywords: ["why choose", "best school", "reason", "recommend", "good school"],
  },
  {
    question: "Is this a good school?",
    answer: "Adarsha Secondary School is highly regarded in the community for its academic discipline, caring teachers, and consistent results. Many successful professionals are proud alumni of this institution.",
    category: "general",
    keywords: ["good school", "quality", "reputation", "feedback", "review"],
  },
  {
    question: "How can I navigate to the admissions page?",
    answer: "Click on 'Admissions' in the navigation menu at the top of the page, or click any 'Apply Now' button to go directly to the admissions section.",
    category: "navigation",
    keywords: ["navigate", "admissions page", "where to apply", "find admissions"],
  },
  {
    question: "How do I find the faculty page?",
    answer: "Click 'Faculty' in the top navigation bar to view all our teachers and staff with their qualifications and experience.",
    category: "navigation",
    keywords: ["faculty page", "teacher page", "navigate", "staff page"],
  },
  {
    question: "Where can I see the school gallery?",
    answer: "Visit the Gallery section from the navigation menu to browse photos and videos from events, sports, cultural programs, and daily school life.",
    category: "navigation",
    keywords: ["gallery", "photos", "pictures", "images", "videos"],
  },
  {
    question: "Namaste",
    answer: "🙏 Namaste! Adarsha Secondary School मा स्वागत छ। म तपाईंलाई विद्यालयको जानकारी, भर्ना, शिक्षक, परिणाम, र कार्यक्रमहरूमा सहयोग गर्न तयार छु। कसरी मद्दत गर्न सक्छु?",
    category: "greeting",
    keywords: ["namaste", "नमस्ते", "namaskar", "nepali greeting"],
  },
  {
    question: "School ko bare ma bataunu",
    answer: "Adarsha Secondary School Nepal ma avosthit ek gunaatmak vidyalaya ho. Haami Grade 1 dekhi Grade 10 samma padhai garaunchham. Hamro principal Santosh Pokharel ji hunuhuncha. Hami students ko ujjwal bhavishya ko lagi pratibadhha chhau!",
    category: "general",
    keywords: ["school ko bare", "school info nepali", "school bataunu"],
  },
  {
    question: "Bharna kaise kare",
    answer: "Admission lina haami ko Admissions page ma jaanus ya school office aaunu hola. Required documents — birth certificate, marksheet, ra photos — lyayera aaunu hola. Hamro team le full support garneha.",
    category: "admissions",
    keywords: ["bharna", "admission nepali", "admission kaise", "apply garne"],
  },
  {
    question: "Thank you",
    answer: "You're very welcome! 😊 It was my pleasure to help. Feel free to ask anything else about Adarsha Secondary School anytime. Have a great day!",
    category: "general",
    keywords: ["thank you", "thanks", "dhanyabad", "shukriya", "appreciate"],
  },
  {
    question: "Bye",
    answer: "Goodbye! 👋 Thank you for visiting Adarsha Secondary School's website. We hope to see you soon — either online or in person at our school!",
    category: "general",
    keywords: ["bye", "goodbye", "see you", "farewell", "later"],
  },
{
  "question": "Who created this web page?",
  "answer": "This web page was developed by Denish Yadav, Durgesh Sha, and Aniket Sha.",
  "category": "general",
  "keywords": ["creator", "developer", "coder", "maker"]
},

];

// ─────────────────────────────────────────────────
// 🔍 Smart search function with keyword matching
// ─────────────────────────────────────────────────
export function searchKnowledge(query: string): KnowledgeEntry | null {
  const q = query.toLowerCase().trim();

  // 1. Exact question match
  const exact = schoolKnowledge.find(
    (e) => e.question.toLowerCase() === q
  );
  if (exact) return exact;

  // 2. Keyword match (score-based)
  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of schoolKnowledge) {
    let score = 0;

    // Check keywords
    for (const kw of entry.keywords) {
      if (q.includes(kw.toLowerCase())) score += 2;
    }

    // Check question words
    const qWords = entry.question.toLowerCase().split(/\s+/);
    for (const word of qWords) {
      if (word.length > 3 && q.includes(word)) score += 1;
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestScore >= 2 ? bestMatch : null;
}

// ─────────────────────────────────────────────────
// 💡 Suggested questions for the chatbot UI
// ─────────────────────────────────────────────────
export const suggestedQuestions: string[] = [
  "How can I apply for admission?",
  "Who is the principal?",
  "What grades does the school offer?",
  "What are the school timings?",
  "What documents are needed for admission?",
  "What subjects are taught here?",
  "How can I see SEE results?",
  "Are there scholarships available?",
  "Where is the school located?",
  "When is the annual function?",
];

export default schoolKnowledge;
