import React from 'react';
import SkillCategory from './SkillCategory';
import type { SkillGroup } from '../../types';

interface SkillsGridProps {
  skills: SkillGroup[];
}

const SkillsGrid = ({ skills }: SkillsGridProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((skillGroup, idx) => (
        <SkillCategory key={skillGroup.category} skillGroup={skillGroup} delay={idx * 0.1} />
      ))}
    </div>
  );
};

export { SkillsGrid }; // Export named, as used in Skills.tsx