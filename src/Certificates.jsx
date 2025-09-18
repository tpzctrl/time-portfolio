// src/CertificatesSection.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

// --- EDIT YOUR CERTIFICATES DATA HERE ---
const certificatesData = [
  {
    title: '1st Runners Up CUD Hackathon',
    issuer: 'Chulalongkorn University Demonstration School',
    imageUrl: `${import.meta.env.BASE_URL}certs/IMG_7551.jpg`, // Replace with path to your certificate image
  },
  {
    title: 'BDI Hackathon Finalist',
    issuer: 'Big Data Institute & UP',
    imageUrl: `${import.meta.env.BASE_URL}certs/Screenshot 2568-07-14 at 18.08.40.png`,
  },
  {
    title: 'ComCamp 36 ',
    issuer: 'Computer Engineering, KMUTT',
    imageUrl: `${import.meta.env.BASE_URL}certs/BEC71410-F8C7-49F6-84DA-BC57243C0366.JPEG`,
  },
  {
    title: 'Young iOS Developer Challenge',
    issuer: 'Swift Coding Club TH',
    imageUrl: `${import.meta.env.BASE_URL}Screenshot 2568-07-14 at 17.09.46.png`,
  },
  {
    title: 'ITCAMP20 - Data Science',
    issuer: 'School of IT, KMITL',
    imageUrl: `${import.meta.env.BASE_URL}certs/BC7A7285-E675-45E4-B47F-ECC63D4F37AA.JPEG`,
  },
  {
    title: 'Zigma Camp #9',
    issuer: 'Statistics Dept, CU',
    imageUrl: `${import.meta.env.BASE_URL}6AA321BE-1868-47FC-A8E3-47F237C9818E.JPEG`,
  },
  {
    title: 'ITCAMP21 - Game',
    issuer: 'School of IT, KMITL',
    imageUrl: `${import.meta.env.BASE_URL}certs/9DFA9BE8-B177-4C7F-886D-3742DE06C856.JPEG`,
  },
  {
    title: 'CAMT Gifted School',
    issuer: 'CAMT , CMU',
    imageUrl: `${import.meta.env.BASE_URL}certs/C542F558-9B1D-4DE5-A5AE-6A73C9496F97.JPEG`,
  },
  {
    title: 'ClickCamp 15',
    issuer: 'Computer Engineering , MU',
    imageUrl: `${import.meta.env.BASE_URL}certs/Screenshot 2568-05-30 at 18.46.55.png`,
  },
  {
    title: 'ITCLASH (CyberSecurity Redteam) | Finalist',
    issuer: 'School of IT, KMITL',
    imageUrl: `${import.meta.env.BASE_URL}certs/Certificate-ธาม พัทธวรากร-IT CLASH กิจกรรมการแข่งขันทักษะเขียนโปรแกรมและไซเบอร์ (Red Team เข้าร่วม) (1).jpg`,
  },
  {
    title: "TobeIT'68'",
    issuer: 'School of IT, KMITL',
    imageUrl: `${import.meta.env.BASE_URL}certs/BD114376-DE43-4CD3-A435-F27CF885FF96.JPEG`,
  },
  {
    title: "2nd Runners up LOC AI Hackathon",
    issuer: 'HarbourSpace@UTCC',
    imageUrl: `${import.meta.env.BASE_URL}certs/IMG_FC6F65079460-1.jpeg`,
  },
  {
    title: "First Tech Challenge 2023",
    issuer: 'PRC & Engineering , CMU',
    imageUrl: `${import.meta.env.BASE_URL}certs/65A3BCF5-257F-442A-A332-887B06915AA5.JPEG`,
  },
  {
    title: "First Tech Challenge 2024",
    issuer: 'PRC & Engineering , CMU',
    imageUrl: `${import.meta.env.BASE_URL}certs/IMG_7601.jpg`,
  },
  {
    title: "Build Your Own AI",
    issuer: 'Global Technology Club , KMITL',
    imageUrl: `${import.meta.env.BASE_URL}certs/IMG_EF0D6FEE55FB-1.jpeg`,
  },
  {
    title: "Robot Conquer",
    issuer: 'CAMT , CMU',
    imageUrl: `${import.meta.env.BASE_URL}certs/F844E278-0046-4C0D-B59A-3A4BDF3B6499.JPEG`,
  },
  {
    title: "AI Camera",
    issuer: 'CAMT , CMU',
    imageUrl: `${import.meta.env.BASE_URL}certs/6846CDBB-AD2C-40BC-A702-4CD58CFF6BB2.JPEG`,
  },
  {
    title: "Certificate of Academic Excellence (Grade 10)",
    issuer: 'Chiang Mai University Demonstration School',
    imageUrl: `${import.meta.env.BASE_URL}certs/A5788899-ABCA-4054-B481-F5A86B945A44.JPEG`,
  },
  {
    title: "Certificate of Academic Excellence (Grade 11)",
    issuer: 'Chiang Mai University Demonstration School',
    imageUrl: `${import.meta.env.BASE_URL}certs/IMG_8619.JPG`,
  },
  {
    title: "KIBO Robot Programming Challenge",
    issuer: 'JAXA & NSTDA',
    imageUrl: `${import.meta.env.BASE_URL}certs/IMG_8767.jpg`,
  }
  
];
// --- END OF EDITABLE DATA ---

const CertificateCard = ({ cert, onClick }) => (
  <motion.div
    className="bg-[#1E1E1E]/60 border border-gray-700 rounded-2xl p-4 shadow-lg h-full flex flex-col items-center text-center cursor-pointer"
    whileHover={{ y: -8, borderColor: '#3b82f6' }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
  >
    <img 
      src={cert.imageUrl} 
      alt={cert.title} 
      className="w-full h-40 object-contain rounded-lg mb-4"
      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x200/1E1E1E/FFFFFF?text=Certificate'; }} 
    />
    <div className="flex-grow">
      <h3 className="text-lg font-bold text-white">{cert.title}</h3>
      <p className="text-sm text-gray-400">{cert.issuer}</p>
    </div>
  </motion.div>
);

const CertificateModal = ({ cert, onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="relative max-w-4xl max-h-[90vh]"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking on the image
    >
      <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-contain" />
      <button onClick={onClose} className="absolute -top-4 -right-4 bg-blue-500 text-white rounded-full p-2">
        <FaTimes />
      </button>
    </motion.div>
  </motion.div>
);

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section id="certificates" className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="w-full max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">My Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificatesData.map((cert, index) => (
              <CertificateCard key={index} cert={cert} onClick={() => setSelectedCert(cert)} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedCert && <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
      </AnimatePresence>
    </>
  );
}