import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
}

export const SectionTitle = ({ children, subtitle }: SectionTitleProps) => (
  <div className="mb-16">
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-espresso-100 flex items-center gap-3 font-display"
    >
      <span className="w-2 h-8 bg-coffee-300 rounded-full inline-block"></span>
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-taupe-200 mt-4 ml-5 text-lg max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);