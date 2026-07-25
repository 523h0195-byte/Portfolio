import React from 'react';
import { motion } from 'framer-motion';
import type { SkillGroup } from '../../data/skills';
import { SkillCategory } from './SkillCategory';

interface SkillsGridProps {
  skills: SkillGroup[];
}

export const SkillsGrid = ({ skills }: SkillsGridProps) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {skills.map((skillGroup, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className="bg-white/50 p-6 rounded-2xl border border-sand-100 hover:border-coffee-300/30 hover:bg-white transition-all group"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-cream-100 rounded-lg border border-sand-100 group-hover:border-coffee-300/30 transition-colors">
            {skillGroup.icon}
          </div>
          <h3 className="text-lg font-bold text-espresso-100">{skillGroup.category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skillGroup.items.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-cream-50 text-taupe-200 text-sm rounded-full border border-sand-100 group-hover:text-coffee-300 group-hover:border-coffee-300/20 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);