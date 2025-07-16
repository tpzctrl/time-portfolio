// src/InfoTabs.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// --- ICONS IMPORTED HERE ---
import { 
    FaHtml5, FaReact, FaCss3Alt, FaFigma, FaNodeJs, FaPython, 
    FaJava, FaUnity, FaFlag, FaMicrophone, FaBriefcase, FaTasks, FaBrain, FaCode 
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiFirebase, SiUnrealengine } from 'react-icons/si';


// --- YOUR DATA ---
const educationData = [
  { school: 'Tonkla Chiang Mai School', details: 'Elementary School', years: '2015 - 2021' },
  { school: 'Chiang Mai University Demonstration School', details: 'Middle & High School', years: '2021 - 2026' },
  { school: 'To be Concluded', details: "University", years: '2026 - ' },
];

const skillsData = [
    {
        category: "AI, Data & Business",
        skills: [
            { name: "Machine Learning", icon: <FaBrain className="text-pink-400" /> },
            { name: "Project Management", icon: <FaTasks className="text-blue-400" /> },
            { name: "Business", icon: <FaBriefcase className="text-amber-700" /> },
        ]
    },
    {
        category: "Frontend",
        skills: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
            { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        ]
    },

    {
        category: "Game Development",
        skills: [
            { name: "Unity", icon: <FaUnity /> },
            { name: "Unreal Engine", icon: <SiUnrealengine /> },
        ]
    },
    {
        category: "Programming Languages",
        skills: [
            { name: "Python", icon: <FaPython className="text-yellow-400" /> },
            { name: "Java", icon: <FaJava className="text-red-500" /> },
            { name: "C/C++", icon: <FaCode className="text-gray-400" /> },
        ]
    },
    {
        category: "Other Skills",
        skills: [
            { name: "CTF", icon: <FaFlag className="text-red-500" /> },
            { name: "Pitching", icon: <FaMicrophone className="text-blue-400" /> },
        ]
    }
];

const tabs = ['Education', 'Skills', 'About Me'];
// --- END OF YOUR DATA ---


export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Education':
        return (
          <div className="space-y-10 relative pt-4">
             <div className="absolute left-4 top-6 h-full border-l-2 border-dashed border-gray-700"></div>
            {educationData.map((item) => (
              <div key={item.school} className="relative pl-12">
                 <div className="absolute left-0 top-1">
                    <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                    </div>
                 </div>
                <div>
                  <p className="font-bold text-blue-400 mb-1">{item.years}</p>
                  <h4 className="font-semibold text-white text-xl mb-1">{item.school}</h4>
                  <p className="text-gray-400">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Skills':
        return (
            <div className="pt-4 space-y-8">
                {skillsData.map((categoryItem) => (
                    <div key={categoryItem.category}>
                        <h3 className="text-xl font-bold text-blue-400 mb-4">{categoryItem.category}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {categoryItem.skills.map(skill => (
                                <div key={skill.name} className="bg-gray-800/50 p-4 rounded-lg flex items-center gap-4 transition-transform hover:scale-105 hover:bg-gray-700/50">
                                    <div className="text-3xl">{skill.icon}</div>
                                    <span className="font-medium text-white">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
      case 'About Me':
        return (
            <div className="space-y-4 text-lg text-gray-300 pt-4 leading-relaxed">
                <p>
                I'm a high school student from Chiang Mai, and I'm genuinely passionate about all things tech. You'll usually find me at tech camps, hackathons, or startup competitions because I love to learn by doing. For me, it's the best way to gain real-world experience, build cool things with new friends, and push myself to get better. Everything I'm learning is paving the way for my future goal: building a career in AI, Data Science, or Project Management.
                </p>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-[#1E1E1E]/60 border border-gray-700 rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex space-x-2 p-1 bg-gray-900/50 rounded-xl mb-6">
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    // --- CHANGE IS ON THIS LINE ---
                    className={`flex-1 relative px-3 py-2.5 text-md font-semibold transition rounded-lg ${
                        activeTab === tab 
                        ? 'text-white' // Style for the active tab
                        : 'text-gray-400 hover:text-white border border-gray-700' // Style for inactive tabs (border added here)
                    }`}
                >
                    {activeTab === tab && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-blue-600"
                            style={{ borderRadius: 8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">{tab}</span>
                </button>
            ))}
        </div>

        <div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {renderContent()}
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
  );
}