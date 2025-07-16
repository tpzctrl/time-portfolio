// src/InterestCard.jsx

import React from 'react';
// FaUtensils has been added for the new food item
import { FaGamepad, FaMusic, FaFutbol, FaBrain, FaUtensils } from 'react-icons/fa';

// --- EDIT YOUR HOBBIES, INTERESTS, AND FUN FACTS HERE ---
const interestsData = [
  {
    icon: <FaGamepad className="text-purple-400" />,
    category: 'Hobbies',
    text: 'Competitive Gaming',
  },
  {
    icon: <FaFutbol className="text-orange-400" />,
    category: 'Favourite Sports',
    text: 'Football, Basketball, Formula 1',
  },
  {
    icon: <FaBrain className="text-pink-400" />,
    category: 'Interest',
    text: 'Artificial Intelligence & Project Management',
  },
  {
    icon: <FaMusic className="text-green-400" />,
    category: 'Music',
    text: 'Pop, R&B, KPOP',
  },
  // --- NEW ITEM ADDED HERE ---
  {
    icon: <FaUtensils className="text-red-400" />,
    category: 'Food',
    text: 'East-Asian Cuisine',
  },
];
// --- END OF EDITABLE DATA ---

export default function InterestCard() { 
  return (
    <div className="w-full h-full rounded-2xl bg-[#1E1E1E]/60 border border-gray-700 p-6 shadow-lg flex flex-col justify-center">
        <div>
            <h3 className="text-2xl font-bold text-white mb-8">Facts</h3>
            {/* --- SPACING REDUCED HERE to fit the new item --- */}
            <div className="space-y-4">
                {interestsData.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl mt-1">{item.icon}</div>
                    <div className="flex-1">
                    <p className="font-semibold text-white">{item.text}</p>
                    <p className="text-sm text-gray-400">{item.category}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}