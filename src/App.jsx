// App.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import InterestCard from './InterestCard'; 
import PersonalInfo from './PersonalInfo';
import InfoTabs from './InfoTabs'; 
import ProjectsSection from './ProjectsSection';
import ActivitiesSection from './ActivitiesSection'; // 1. Import the new component
import CertificatesSection from './Certificates';

export default function App() {
  const navItems = ['Profile', 'Info', 'Projects', 'Activities', 'Certificates'];

  return (
    <div className="bg-[#121212] text-white font-sans min-h-screen scroll-smooth bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <nav
        className="sticky top-0 z-50 w-full bg-[#121212]/50 backdrop-blur-lg relative"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto px-8 py-4">
          
          <div>
            <Link to="profile" smooth duration={500} className="cursor-pointer">
              <h1 className="text-2xl font-bold text-white">
                Time :)
              </h1>
            </Link>
          </div>

          <div>
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth
                    duration={500}
                    offset={-90}
                    activeClass="active-link"
                    className="relative group cursor-pointer !text-white hover:opacity-75 transition-opacity duration-300 !font-semibold text-lg"
                  >
                    {item}
                    <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 group-[.active-link]:scale-x-100 transition-transform origin-center duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </nav>

      <section
        id="profile"
        className="flex items-center justify-center min-h-screen px-6"
      >
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:gap-12 mt-[-5rem]">
            <motion.img
              src="/IMG_7373 copy.jpeg"
              alt="Profile"
              className="w-64 h-64 object-cover rounded-3xl shadow-xl mb-6 md:mb-0"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2">
                <span className="text-blue-500">Time Pattavarakorn</span>
              </h1>
              <div className="text-2xl md:text-4xl font-bold leading-tight mb-2 text-gray-300">
                <Typewriter
                  options={{
                    strings: ['High School Student', 'Tech Enthusiast' , 'Start Up Guy'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 50,
                  }}
                />
              </div>
              <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start mt-6">
                <div className="flex items-center">
                  <a href=" " download className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium shadow text-white !text-white mb-0" style={{ color: 'white' }}>Download Portfolio</a>
                </div>

                <div className="flex items-center gap-4 text-xl">
                    <a href="mailto:tubetime6@gmail.com" aria-label="Email" className="group transition"><FaEnvelope className="text-white group-hover:text-blue-400" /></a>
                    <a href="https://github.com/tpzctrl" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub className="text-white group-hover:text-blue-400" /></a>
                    <a href="https://instagram.com/tpzzzzzz._" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="text-white group-hover:text-blue-400" /></a>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

      <section id="info" className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="w-full max-w-5xl space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PersonalInfo />
                <InterestCard />
            </div>
            
            <InfoTabs />
        </div>
      </section>

      <ProjectsSection />

      {/* 2. Add the new Activities section here */}
      <ActivitiesSection />

      <CertificatesSection />

    </div>
  );
}
