# 🏫 Adarsha Secondary School OS
### Ultra-Premium AI-Powered School Digital Platform

> *Empowering Students For A Better Tomorrow*

---

## 🚀 Quick Start (VS Code Setup)

### 1. Prerequisites
Make sure you have installed:
- **Node.js** v18+ → [nodejs.org](https://nodejs.org)
- **npm** v9+ (comes with Node)
- **VS Code** → [code.visualstudio.com](https://code.visualstudio.com)
- **Git** → [git-scm.com](https://git-scm.com)

### 2. Open in VS Code
```bash
# Unzip the project
unzip adarsha-vidyalaya-os.zip

# Open in VS Code
code adarsha-vidyalaya-os
```

### 3. Install Dependencies
Open the VS Code terminal (`Ctrl+`` `) and run:
```bash
npm install
```

### 4. Configure Environment Variables
Copy and edit the `.env.local` file:
```bash
# The file already exists — just fill in your keys:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_key
```
> ⚠️ The app works without API keys — the AI chatbot uses the local 100 Q&A knowledge base as fallback.

### 5. Run Development Server
```bash
npm run dev
```
Open → **http://localhost:3000**

---

## 📁 Project Structure

```
adarsha-vidyalaya-os/
├── .env.local                  # Environment variables
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── src/
    ├── app/
    │   ├── layout.tsx           # Root layout (Nav + Footer + Chatbot)
    │   ├── page.tsx             # Home page (3D Hero)
    │   ├── globals.css          # Design system & animations
    │   ├── api/
    │   │   └── chat/route.ts    # OpenAI API endpoint
    │   ├── routes/
    │   │   ├── about/           # About school
    │   │   ├── academics/       # Curriculum & subjects
    │   │   ├── admissions/      # Apply form + fee structure
    │   │   ├── achievements/    # Awards & toppers
    │   │   ├── ai-assistant/    # Full chatbot page
    │   │   ├── alumni/          # Success stories
    │   │   ├── contact/         # Contact form
    │   │   ├── developer/       # Developer profile
    │   │   ├── events/          # Events & notices
    │   │   ├── faculty/         # Teachers list
    │   │   ├── gallery/         # Masonry gallery
    │   │   ├── programs/        # Special programs
    │   │   └── results/         # SEE results + charts
    │   └── admin/
    │       ├── layout.tsx       # Admin sidebar
    │       └── dashboard/       # Admin dashboard
    ├── components/
    │   ├── canvas/
    │   │   └── Scene3D.tsx      # Three.js 3D scene
    │   ├── chatbot/
    │   │   └── ChatInterface.tsx # AI chatbot widget
    │   └── ui/
    │       └── glass-nav.tsx    # Glass navigation bar
    ├── data/
    │   └── chatbot-knowledge.ts # 100 Q&A knowledge base
    ├── hooks/
    │   └── useSmoothScroll.ts   # Lenis smooth scroll
    └── lib/
        ├── supabase.ts          # Supabase client
        └── utils.ts             # Utility functions
```

---

## 🌐 Pages

| Route | Page |
|-------|------|
| `/` | Home (3D Hero + Stats + Features) |
| `/routes/about` | About School |
| `/routes/academics` | Academics & Curriculum |
| `/routes/admissions` | Admissions Form |
| `/routes/faculty` | Faculty Directory |
| `/routes/results` | SEE Results & Charts |
| `/routes/gallery` | Photo Gallery |
| `/routes/events` | Events & Notices |
| `/routes/achievements` | Awards & Achievements |
| `/routes/alumni` | Alumni Stories |
| `/routes/programs` | Special Programs |
| `/routes/contact` | Contact Form |
| `/routes/ai-assistant` | AI Chatbot Page |
| `/routes/developer` | Developer Profile |
| `/admin/dashboard` | Admin Panel |

---

## 🤖 AI Chatbot

The chatbot works in **two modes**:

1. **Local Knowledge Base** (works without API key)
   - 100 curated Q&A in `src/data/chatbot-knowledge.ts`
   - Keyword-based smart search
   - English + Nepali support

2. **OpenAI Fallback** (requires `OPENAI_API_KEY`)
   - Uses `gpt-4o-mini` for questions not in the knowledge base
   - Configured with school context

---

## 🗄️ Database Setup (Supabase)

1. Create a free project at [supabase.com](https://supabase.com)
2. Run this SQL in Supabase SQL editor:

```sql
-- Teachers
create table teachers (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  role text,
  qualification text,
  experience int,
  bio text,
  image_url text,
  subjects text[],
  created_at timestamp default now()
);

-- Events
create table events (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  date date,
  type text,
  image_url text,
  created_at timestamp default now()
);

-- Gallery
create table gallery (
  id uuid default gen_random_uuid() primary key,
  title text,
  url text not null,
  type text default 'image',
  category text,
  created_at timestamp default now()
);

-- Admissions
create table admissions (
  id uuid default gen_random_uuid() primary key,
  student_name text not null,
  parent_name text,
  email text,
  phone text not null,
  grade_applying text,
  status text default 'pending',
  created_at timestamp default now()
);
```

3. Add your Supabase URL and anon key to `.env.local`

---

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel Dashboard → Settings → Environment Variables
```

Or simply push to GitHub and import on [vercel.com](https://vercel.com).

---

## 📌 Git Repository Setup

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "🏫 Initial commit — Adarsha Secondary School OS"

# Add your GitHub repo
git remote add origin https://github.com/YOUR_USERNAME/adarsha-vidyalaya-os.git

# Push
git push -u origin main
```

---

## 🔧 Customization

### Change School Name
Edit `src/app/layout.tsx` metadata and `src/components/ui/glass-nav.tsx`

### Add Chatbot Q&A
Edit `src/data/chatbot-knowledge.ts` — add entries to the `schoolKnowledge` array.

### Change Colors
Edit `tailwind.config.ts` — update the `brand` color palette.

### Add Real Images
Replace emoji placeholders in gallery/faculty with real `<Image>` components using Cloudinary or local `/public` folder.

---

## ⚡ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion + GSAP |
| 3D | React Three Fiber + Three.js |
| Scroll | Lenis Smooth Scroll |
| Database | Supabase / PostgreSQL |
| AI | OpenAI GPT-4o-mini |
| Deployment | Vercel |

---

## 📞 Support

For questions about this project, visit `/routes/developer` or open a GitHub issue.

---

*Built with ❤️ for Adarsha Secondary School, Nepal*
