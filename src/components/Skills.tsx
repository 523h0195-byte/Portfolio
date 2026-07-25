import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { SkillsGrid } from './skills/SkillsGrid';
import skillsData from '../data/skills.json';
import type { SkillGroup } from '../types';

const BASE_URL = import.meta.env.BASE_URL;
const SKILLS_BG = `${BASE_URL}hero_image3.png`;

const Skills = () => {
  return (
    <Section id="skills" style={{ backgroundImage: `url(${SKILLS_BG})` }}>
      <SectionTitle subtitle="My technical toolkit">Technical Skills</SectionTitle>
      <SkillsGrid skills={skillsData as SkillGroup[]} />
    </Section>
  );
};

export default Skills;