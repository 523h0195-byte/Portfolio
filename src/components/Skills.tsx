import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { SkillsGrid } from './skills/SkillsGrid';
import type { SkillGroup } from '../data/skills';

const Skills = () => {
  const [skills, setSkills] = useState<SkillGroup[]>([]);

  useEffect(() => {
    fetch('/skills.json')
      .then((res) => res.ok ? res.json() : [])
      .then(setSkills)
      .catch(() => {});
  }, []);

  return (
    <Section id="skills">
      <SectionTitle subtitle="My technical toolkit">Technical Skills</SectionTitle>
      {skills.length > 0 ? (
        <SkillsGrid skills={skills} />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="bg-white/50 p-6 rounded-2xl border border-sand-100 animate-pulse">
              <div className="h-4 bg-sand-100 rounded w-24 mb-6"></div>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-6 bg-sand-100 rounded-full w-16"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Skills;