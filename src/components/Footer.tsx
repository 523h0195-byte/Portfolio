import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-taupe-200 text-sm border-t border-sand-100 bg-cream-100">
      <p>© {new Date().getFullYear()} Duong Quoc Vinh. Built with React, Vite, Tailwind & Framer Motion.</p>
    </footer>
  );
};

export default Footer;