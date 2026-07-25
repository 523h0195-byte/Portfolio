import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink, Award } from 'lucide-react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { CertificateModal } from './CertificateModal'; // Keep type import for CertificateModal
import certificatesData from '../data/certificates.json';
import type { Certificate } from '../types';

const certificates = certificatesData as Certificate[];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <Section id="certificates">
      <SectionTitle subtitle="Professional certifications and achievements">Certificates</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {certificates.length > 0 ? ( // Ensure certificates is an array
          certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/50 rounded-2xl border border-sand-100 hover:border-coffee-300/30 transition-all group overflow-hidden flex flex-col"
            >
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative h-48 bg-cream-50 block overflow-hidden group-hover:opacity-90 transition-opacity cursor-pointer"
              >
                {cert.imageUrl ? (
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-taupe-200 bg-cream-50">
                    <Award size={48} className="opacity-20" />
                  </div>
                )}
                <span className="absolute bottom-3 right-3 bg-white/80 text-coffee-300 text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm border border-sand-100">
                  <CheckCircle size={12} /> Verified
                </span>
                <div className="absolute inset-0 bg-cream-50/0 group-hover:bg-cream-50/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/80 text-espresso-100 text-sm px-4 py-2 rounded-full font-medium backdrop-blur-md border border-sand-100 shadow-lg flex items-center gap-2">
                    <Award size={16} className="text-coffee-300" /> View Certificate
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-espresso-100 group-hover:text-coffee-300 transition-colors font-display">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-mono text-taupe-200 border border-sand-100 px-2 py-1 rounded bg-cream-50">
                    {cert.date}
                  </span>
                </div>
                <div className="text-coffee-300/80 text-sm font-medium mb-4">{cert.issuer}</div>
                <p className="text-taupe-200 leading-relaxed text-sm mb-4">{cert.desc}</p>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto text-sm text-taupe-200 hover:text-espresso-100 inline-flex items-center gap-1 transition-colors"
                >
                  Verify Credential <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))
        ) : (
          Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="bg-white/50 rounded-2xl border border-sand-100 overflow-hidden animate-pulse">
              <div className="h-48 bg-sand-100"></div>
              <div className="p-6">
                <div className="h-6 bg-sand-100 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-sand-100 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-sand-100 rounded w-full mb-4"></div>
                <div className="h-4 bg-sand-100 rounded w-1/3"></div>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedCert && (
        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </Section>
  );
};

export default Certificates;