export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  desc: string;
  verifyUrl: string;
  imageUrl: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  org: string;
  desc: string;
}

export interface SkillGroup {
  category: string;
  icon: string; // Lucide icon name as string
  items: string[];
}
