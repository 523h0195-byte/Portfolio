import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react'; // Import all Lucide icons

interface SkillCategoryProps {
  skillGroup: {
    category: string;
    icon: string; // Lucide icon name as string
    items: string[];
  };
  delay: number;
}

const SkillCategory = ({ skillGroup, delay }: SkillCategoryProps) => {
  // Dynamically get the Lucide icon component based on its string name
  const IconComponent = LucideIcons[skillGroup.icon as keyof typeof LucideIcons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay }}
      className="bg-white/50 p-6 rounded-2xl border border-sand-100 hover:border-coffee-300/30 hover:bg-white transition-all group"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-cream-50 rounded-lg border border-sand-100 group-hover:border-coffee-300/30 transition-colors">
          {IconComponent && <IconComponent size={24} className="text-coffee-300" />}
          {!IconComponent && <LucideIcons.HelpCircle size={24} className="text-taupe-200" />} {/* Fallback icon */}
        </div>
        <h3 className="text-lg font-bold text-espresso-100 font-display">{skillGroup.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillGroup.items.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-cream-50 text-taupe-200 text-sm rounded-full border border-sand-100 group-hover:text-coffee-300 group-hover:border-coffee-300/20 transition-all">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;