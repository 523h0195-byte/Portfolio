import { Icon as LucideIcon } from 'lucide-react';

export interface SkillGroup {
  category: string;
  icon: string; // This will be the string name of the Lucide icon, e.g., "Brain", "Code2"
  items: string[];
}