import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ExternalLink, X } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    desc: string;
    link?: string;
    tags: string[];
    color: string;
    image?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    if (previewMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [previewMode]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sand-100 bg-white transition-all hover:-translate-y-1 hover:border-sand-200"
      >
        <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${project.color}`}></div>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-display text-2xl font-bold text-espresso-100 transition-colors group-hover:text-coffee-300">
              {project.title}
            </h3>
            <div className="flex items-center gap-3">
              {project.link && (
                <button
                  onClick={() => setPreviewMode(true)}
                  className="flex items-center gap-1.5 rounded-full bg-sand-100 px-3 py-1.5 text-xs text-taupe-200 transition-colors hover:bg-sand-200"
                >
                  <Terminal size={14} /> Live Sandbox
                </button>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-taupe-200 transition-colors hover:text-espresso-100"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
          <p className="flex-1 mb-8 leading-relaxed text-taupe-200">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-md border border-coffee-300/20 bg-coffee-300/10 px-3 py-1.5 font-mono text-xs font-medium text-coffee-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {previewMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-espresso-100/50 backdrop-blur-sm"
            onClick={() => setPreviewMode(false)} // Đóng pop-up khi click ra ngoài nội dung modal
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative flex flex-col w-full h-full max-w-[90vw] max-h-[90vh] md:max-w-[70vw] md:max-h-[70vh] bg-cream-100 rounded-2xl border border-sand-100 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Ngăn chặn đóng pop-up khi click vào nội dung modal
            >
              <div className="flex items-center justify-between border-b border-sand-100 bg-cream-100 p-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-rose-400/80"></div>
                    <div className="h-3 w-3 rounded-full bg-gold-300/80"></div>
                    <div className="h-3 w-3 rounded-full bg-coffee-300/80"></div>
                  </div>
                  <span className="font-mono text-sm font-medium text-taupe-200">Sandbox: {project.title}</span>
                </div>
                <button
                  onClick={() => setPreviewMode(false)}
                  className="flex items-center gap-2 rounded-full bg-white p-2 text-taupe-200 transition-colors hover:bg-sand-50 hover:text-espresso-100"
                >
                  <X size={18} />
                  <span className="hidden pr-2 text-sm font-medium sm:inline">Close Preview</span>
                </button>
              </div>
              <div className="relative flex-1 bg-white">
                <iframe
                  src={project.link}
                  className="h-full w-full border-none"
                  title={`Sandbox - ${project.title}`}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;