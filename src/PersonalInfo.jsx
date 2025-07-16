// src/PersonalInfo.jsx

import React from 'react';
import { FaRegHeart, FaRegSmile, FaBirthdayCake, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

// --- EDIT YOUR DETAILS HERE ---
const details = [
    { icon: <FaRegHeart />, label: 'Name', value: 'Time Pattavarakorn' },
    { icon: <FaRegSmile />, label: 'Nickname', value: 'Time' },
    { icon: <FaBirthdayCake />, label: 'Birth date', value: '06/07/2008' },
    { icon: <FaUser />, label: 'Age', value: '17' },
    { icon: <FaMapMarkerAlt />, label: 'Living', value: 'ChiangMai, Thailand' }
];

export default function PersonalInfo() {
  return (
    <div className="w-full h-full rounded-2xl bg-[#1E1E1E]/60 border border-gray-700 p-6 shadow-lg flex flex-col">
        
        {/* --- NEW LAYOUT WRAPPER FOR IMAGE AND BIO --- */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-6 mb-6">
            <img 
                src="/public/IMG_7373 copy.jpeg"
                alt="Profile"
                className="w-32 h-32 rounded-2xl object-cover flex-shrink-0" // Removed bottom margin
            />
            <p className="text-gray-300 text-center md:text-left">
            I'm a high school student who loves bringing ideas to life. My passion lies at the intersection of tech and business—whether I'm coding or strategizing. I'm driven to build things that are functional and also engaging
            </p>
        </div>
        
        {/* Details list remains below */}
        <div className="border-t border-gray-700 pt-6 space-y-4">
            {details.map(item => (
                <div key={item.label} className="flex items-center space-x-4">
                    <div className="text-blue-400 text-xl">
                        {item.icon}
                    </div>
                    <p className="text-gray-400 w-24">{item.label}</p>
                    <div className="border-l border-gray-600 h-6 mx-2"></div>
                    <p className="text-white font-medium">{item.value}</p>
                </div>
            ))}
        </div>
    </div>
  );
}