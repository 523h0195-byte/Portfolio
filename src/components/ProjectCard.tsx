import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ExternalLink } from 'lucide-react';

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative bg-white rounded-2xl border border-sand-100 overflow-hidden hover:border-sand-200 transition-all ${
        previewMode ? 'row-span-2 col-span-1 md:col-span-2 h-[600px]' : 'hover:-translate-y-1'
      }`}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>

      {!previewMode ? (
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-espresso-100 group-hover:text-coffee-300 transition-colors font-display">
              {project.title}
            </h3>
            <div className="flex items-center gap-3">
              {project.link && (
                <button
                  onClick={() => setPreviewMode(true)}
                  className="text-xs bg-sand-100 hover:bg-sand-200 text-taupe-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors"
                >
                  <Terminal size={14} /> Live Sandbox
                </button>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-taupe-200 hover:text-espresso-100 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
          <p className="text-taupe-200 mb-8 leading-relaxed flex-1">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-mono font-medium text-coffee-300 bg-coffee-300/10 px-3 py-1.5 rounded-md border border-coffee-300/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full relative">
          <div className="bg-cream-50 border-b border-sand-100 p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-gold-300/80"></div>
                <div className="w-3 h-3 rounded-full bg-coffee-300/80"></div>
              </div>
              <span className="text-sm font-mono text-taupe-200 font-medium">Sandbox: {project.title}</span>
            </div>
            <button
              onClick={() => setPreviewMode(false)}
              className="text-taupe-200 hover:text-espresso-100 bg-white hover:bg-sand-50 p-1.5 rounded-md transition-colors"
            >
              Close Preview
            </button>
          </div>
          <div className="flex-1 bg-white relative">
            <iframe
              src={project.link}
              className="w-full h-full border-none"
              title={`Sandbox - ${project.title}`}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;