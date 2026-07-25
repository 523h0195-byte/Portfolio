import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Github, Linkedin, Facebook } from 'lucide-react';

const SocialContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-coffee-300 hover:bg-gold-300 text-white rounded-full shadow-lg shadow-coffee-300/30 hover:shadow-gold-300/40 transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Quick contact"
      >
        <Mail size={22} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-100/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-md w-full bg-cream-100 rounded-2xl border border-sand-100 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-sand-100 bg-cream-50">
                <h3 className="text-lg font-bold text-espresso-100 font-display">Contact Me</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-sand-100 text-taupe-200 hover:text-espresso-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-taupe-200 text-sm">
                  I&apos;m currently looking for internship opportunities or collaboration on AI projects.
                </p>
                <a
                  href="mailto:email@example.com"
                  className="flex items-center gap-3 px-5 py-3 bg-white border border-sand-100 rounded-xl hover:border-coffee-300 transition-colors group"
                >
                  <Mail size={18} className="text-coffee-300" />
                  <span className="text-espresso-100">email@example.com</span>
                </a>
                <div className="flex justify-center gap-4 pt-2">
                  <a
                    href="https://github.com/vinh9029"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white border border-sand-100 rounded-full hover:border-coffee-300 transition-colors text-taupe-200 hover:text-coffee-300"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white border border-sand-100 rounded-full hover:border-coffee-300 transition-colors text-taupe-200 hover:text-coffee-300"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="https://www.facebook.com/8129029sng"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white border border-sand-100 rounded-full hover:border-coffee-300 transition-colors text-taupe-200 hover:text-coffee-300"
                  >
                    <Facebook size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SocialContactPopup;