import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';

const About = () => (
  <Section id="about" className="bg-[#FFFEF0]">
    <SectionTitle subtitle="Get to know me better">About Me</SectionTitle>
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8 text-lg text-[#0A0A0A] leading-loose"
      >
        <p>
          I am a second-year Computer Science student at the{' '}
          <span className="text-[#654321] font-medium">Ton Duc Thang University</span>,
          specializing in <span className="text-[#654321] font-medium">Artificial Intelligence</span>.
        </p>
        <p>
          My journey began with a curiosity about how machines learn. Today, I&apos;m building
          neural networks and exploring the frontiers of Computer Vision and NLP.
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            { label: 'Major', value: 'Computer Science (AI)' },
            { label: 'Focus', value: 'Deep Learning & MLOps' },
            { label: 'Location', value: 'Ho Chi Minh City' },
          ].map((item) => (
            <div key={item.label} className="px-5 py-3 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="text-[#0A0A0A] font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-8"
      >
        <div className="relative group w-full max-w-md">
          <div className="absolute inset-0 bg-gradient-to-tr from-coffee-300 to-gold-300 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative aspect-square rounded-2xl bg-white border border-sand-100 flex items-center justify-center overflow-hidden shadow-2xl hover:border-coffee-300/30 transition-all">
            <div className="text-center p-8">
              <div className="text-coffee-300/50 mx-auto mb-4">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                </svg>
              </div>
              <p className="text-sand-200 text-sm">Profile Image Placeholder</p>
            </div>
          </div>
        </div>

        <a
          href="/duongquocvinh_resume.pdf"
          download="duongquocvinh_resume.pdf"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-coffee-300 to-gold-400 hover:from-coffee-400 hover:to-gold-300 text-white rounded-lg font-semibold transition-all shadow-lg shadow-coffee-300/25 hover:shadow-gold-300/40 hover:-translate-y-1 relative z-10"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          My Resume
        </a>
      </motion.div>
    </div>
  </Section>
);

export default About;