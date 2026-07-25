import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { SkillsGrid } from './skills/SkillsGrid';
import skillsData from '../data/skills.json';
import type { SkillGroup } from '../types';

const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle subtitle="My technical toolkit">Technical Skills</SectionTitle>
      <SkillsGrid skills={skillsData as SkillGroup[]} />
    </Section>
  );
};

export default Skills;