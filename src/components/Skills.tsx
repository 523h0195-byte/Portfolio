import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { SkillsGrid } from './skills/SkillsGrid';
import skills from '../data/skills.json';

const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle subtitle="My technical toolkit">Technical Skills</SectionTitle>
      <SkillsGrid skills={skills} />
    </Section>
  );
};

export default Skills;