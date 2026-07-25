import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import experienceData from '../data/experience.json';
import type { ExperienceItem } from '../types';

const experience = experienceData as ExperienceItem[];

const Experience = () => {
  return (
    <Section id="experience" style={{ backgroundImage: "url('/homepage1.png')" }}>
      <SectionTitle subtitle="My academic and professional journey">Experience</SectionTitle>
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-sand-100 ml-3 md:ml-6 space-y-12 pb-4">
          {experience.length > 0 ? (
            experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cream-100 rounded-full border-2 border-coffee-300 shadow-[0_0_10px_rgba(200,150,62,0.5)]"></div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-sm font-mono text-coffee-300 bg-coffee-300/10 px-2 py-0.5 rounded border border-coffee-300/20 w-fit">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-espresso-100 font-display">{item.role}</h3>
                </div>
                <div className="text-taupe-200 font-medium mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-taupe-200 rounded-full"></span>
                  {item.org}
                </div>
                <p className="text-taupe-200 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))
          ) : (
            <>
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cream-100 rounded-full border-2 border-sand-100"></div>
                  <div className="h-5 bg-sand-100 rounded w-20 mb-2"></div>
                  <div className="h-6 bg-sand-100 rounded w-48 mb-4"></div>
                  <div className="h-4 bg-sand-100 rounded w-full mb-2"></div>
                  <div className="h-4 bg-sand-100 rounded w-3/4"></div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Experience;