import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client (with service role for admin operations)
export function createServerClient() {
  return createClient(
    supabaseUrl,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}

// Database Types
export interface Teacher {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: number;
  bio: string;
  image_url: string;
  subjects: string[];
  created_at: string;
}

export interface Student {
  id: string;
  name: string;
  grade: string;
  roll_number: string;
  parent_contact: string;
  created_at: string;
}

export interface Result {
  id: string;
  student_name: string;
  year: number;
  gpa: number;
  grade: string;
  subjects: Record<string, number>;
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "academic" | "cultural" | "sports" | "holiday" | "notice";
  image_url?: string;
  created_at: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "image" | "video";
  category: string;
  created_at: string;
}

export interface Admission {
  id: string;
  student_name: string;
  parent_name: string;
  email: string;
  phone: string;
  grade_applying: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}
