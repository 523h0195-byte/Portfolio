import React from 'react';

interface SkillCategoryProps {
  category: string;
  icon: React.ReactNode;
  items: string[];
}

export const SkillCategory = ({ category, icon, items }: SkillCategoryProps) => (
  <div className="bg-white/50 p-6 rounded-2xl border border-sand-100 hover:border-coffee-300/30 hover:bg-white transition-all group">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-cream-100 rounded-lg border border-sand-100 group-hover:border-coffee-300/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-espresso-100">{category}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-cream-50 text-taupe-200 text-sm rounded-full border border-sand-100 group-hover:text-coffee-300 group-hover:border-coffee-300/20 transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);