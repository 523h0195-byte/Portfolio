import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, FileText } from 'lucide-react';

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
  useEffect(() => {
    if (!cert) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return createPortal(
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-espresso-100/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-cream-100 rounded-2xl border border-sand-100 overflow-hidden shadow-2xl z-[10000]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 sm:p-5 border-b border-sand-100 bg-cream-50/80">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-coffee-300/10 text-coffee-300">
                <Award size={22} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-espresso-100 font-display">{cert.title}</h3>
                <p className="text-xs text-taupe-200">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-sand-100 text-taupe-200 hover:text-espresso-100 transition-colors"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-auto bg-cream-50 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[400px]">
            {cert.imageUrl ? (
              cert.imageUrl.endsWith('.pdf') ? (
                <div className="w-full h-full min-h-[500px] flex flex-col items-center">
                  <iframe
                    src={cert.imageUrl}
                    title={cert.title}
                    className="w-full h-[520px] border-none rounded-xl shadow-sm bg-white"
                  />
                  <a
                    href={cert.imageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 text-xs text-coffee-300 hover:text-espresso-100 flex items-center gap-1.5 font-medium transition-colors bg-white/80 px-3 py-1.5 rounded-full border border-sand-100 shadow-sm"
                  >
                    <FileText size={14} /> Mở file PDF trong tab mới <ExternalLink size={12} />
                  </a>
                </div>
              ) : (
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="max-w-full max-h-[65vh] object-contain rounded-xl shadow-lg"
                />
              )
            ) : (
              <div className="flex flex-col items-center text-taupe-200 gap-4 py-12">
                <Award size={64} className="opacity-20" />
                <p>Chưa có hình ảnh xem thực tế cho chứng chỉ này.</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-sand-100 bg-cream-50/80 flex justify-between items-center">
            <span className="text-xs sm:text-sm text-taupe-200">Issued by <strong>{cert.issuer}</strong></span>
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-coffee-300 hover:bg-gold-300 text-white rounded-full font-medium transition-colors text-sm shadow-md hover:shadow-lg"
            >
              Verify Credential <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};