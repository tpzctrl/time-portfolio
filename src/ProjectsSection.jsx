// src/ProjectsSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// --- EDIT YOUR PROJECTS DATA HERE ---
const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'The very website you are looking at! A responsive personal portfolio built with React and Tailwind CSS, featuring smooth animations with Framer Motion.',
    imageUrl: '/public/Screenshot 2568-07-09 at 17.20.24.png', // Replace with a screenshot of your portfolio
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/yourusername/your-repo-name',
    liveUrl: null,
  },
  {
    title: 'ThaiSign4All',
    description: 'A hackathon project used in Leagues of Code AI Hackathon where we developed an AI that can translate Thai Sign Language into text',
    imageUrl: '/public/Screenshot 2568-07-09 at 17.24.29.png', // Replace with an image of your project
    techStack: ['Python', 'OpenCV', 'MediaPipe'],
    githubUrl: 'https://github.com/kanpizzzz/ThaiSign4All',
    liveUrl: null, // Use null if there's no live demo
  },
  {
    title: 'SongthaewCNX',
    description: 'A MVP webapp for the project used in BDI Hackathon offering 3 features to help tourists use songthaews in Chiang Mai efficiently. ',
    imageUrl: '/public/Screenshot 2568-07-09 at 17.22.11.png', // Replace with an image of your project
    techStack: ['Vue', 'Git'],
    githubUrl: 'https://github.com/P-cy/SongthaewFinal_Vue',
    liveUrl: 'https://songthaew-final-vue.vercel.app/',
  },
  {
    title: 'AI Mental Disorder Detection',
    description: 'Developed an AI model to predict Depression , Bipolar 1 , Bipolar 2 from symptoms using Decision Tree , Naive Bayes and KNN. This project was made in ITCAMP20',
    imageUrl: '/public/DSC01850.jpg', // Replace with an image of your project
    techStack: ['Unity', 'C#'],
    githubUrl: 'https://github.com/tpzctrl/ITCAMP20-DAITA',
    liveUrl: null,
  },
  {
    title: 'SportsDay Live Update Feed',
    description: 'Web for the staff to update remaining slots for each team and show live updates on the big screen in sportsday color selection.',
    imageUrl: '/public/462638730_1071665214607216_132972447292963855_n.png', // Replace with an image of your project
    techStack: ['HTML', 'CSS' , 'JavaScript' , 'FireBase'],
    githubUrl: 'https://github.com/tpzctrl/sportsday',
    liveUrl: 'https://sportsday53-4a5dc.web.app/',
  },
  {
    title: 'Christmas Murder',
    description: 'A 3D FPS Game where an elf needs to fight monsters and collect keys. This project was made in ITCAMP21',
    imageUrl: '/public/Screenshot 2568-07-10 at 18.11.04.png', // Replace with an image of your project
    techStack: ['Unreal Engine 5'],
    githubUrl: null,
    liveUrl: 'https://www.canva.com/design/DAGmEsfm6Yg/C4j4Q7OZCSObOVn7kp8c1w/edit?utm_content=DAGmEsfm6Yg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    title: 'Premier League Predictor',
    description: 'Mini data science project made in my free time to predict EPL matches outcome from different factors. Following a youtube tutorial by Dataquest.',
    imageUrl: '/public/YfcLFQhjH3dBhA2tGqs8Qf.jpg', // Replace with an image of your project
    techStack: ['Python'],
    githubUrl: 'https://github.com/tpzctrl/Premier-League-Predictor',
    liveUrl: null,
  }
];
// --- END OF EDITABLE DATA ---

const ProjectCard = ({ project }) => (
  <motion.div 
    className="bg-[#1E1E1E]/60 border border-gray-700 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col"
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1E1E1E/FFFFFF?text=Project+Image'; }} />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map(tech => (
          <span key={tech} className="bg-gray-800 text-teal-400 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 text-gray-400">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
          <FaGithub />
          Code
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaExternalLinkAlt />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
