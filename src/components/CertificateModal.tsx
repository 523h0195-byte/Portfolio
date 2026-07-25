import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Award } from 'lucide-react';

interface CertificateModalProps {
  cert: {
    title: string;
    issuer: string;
    date: string;
    desc: string;
    verifyUrl: string;
    imageUrl: string;
  } | null;
  onClose: () => void;
}

export const CertificateModal = ({ cert, onClose }: CertificateModalProps) => {
  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-espresso-100/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-cream-100 rounded-2xl border border-sand-100 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-sand-100 bg-cream-50/50">
          <h3 className="text-xl font-bold text-espresso-100 font-display">{cert.title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-sand-100 text-taupe-200 hover:text-espresso-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-auto bg-cream-50 p-4 sm:p-8 flex items-center justify-center">
          {cert.imageUrl ? (
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="max-w-full max-h-full object-contain rounded shadow-lg"
            />
          ) : (
            <div className="flex flex-col items-center text-taupe-200 gap-4">
              <Award size={64} className="opacity-20" />
              <p>No image available for this certificate.</p>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-sand-100 bg-cream-50/50 flex justify-between items-center">
          <span className="text-sm text-taupe-200">Issued by {cert.issuer}</span>
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-coffee-300 hover:bg-gold-300 text-white rounded-full font-medium transition-colors text-sm"
          >
            Verify Credential <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};