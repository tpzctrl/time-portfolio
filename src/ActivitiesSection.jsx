// src/ActivitiesSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaBuilding, FaCalendarAlt, FaUsers, FaInfoCircle, FaFilePowerpoint } from 'react-icons/fa';

// --- EDIT YOUR ACTIVITIES DATA HERE ---
const activitiesData = [
  {
    title: 'ITCAMP20 | The Royal Gambits',
    organizer: "School of Information Technology , KMITL",
    description: 'In this camp I got to learn more about Data Science and AI through doing a data science project on predicting mental disorders',
    achievement: '1st Runner up for DATA',
    imageUrl: '/itcamp20.jpg', 
    date: 'April 2024',
    icon: <FaTrophy/>,
    infoUrl: 'https://www.facebook.com/itcampKMITL',
    pitchDeckUrl: "https://www.canva.com/design/DAGDYiIyarw/eKukHgjV6t9bNUPg2NNu5g/view?utm_content=DAGDYiIyarw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h057bc544e1",
  },
  {
    title: 'CUD Hackathon 2024',
    organizer: 'Chulalongkorn University Demonstration School',
    description: 'Got matched with teammates from other schools and created a project that focuses on equitable education.',
    achievement: '1st Runner up',
    imageUrl: '/476021988_122207232086076198_3124634391724588324_n.jpg',
    date: 'August 2024',
    icon: <FaTrophy />,
    infoUrl: 'https://www.cudhackathon.com/',
    pitchDeckUrl: 'https://www.canva.com/design/DAGdcSyOo_Q/yDNQ6snpo4vRhXlbN7GWYA/view?utm_content=DAGdcSyOo_Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h75683e194a',
  },
  {
    title: "TobeIT'68 | The Golden Mist",
    organizer: 'School of Information Technology , KMITL',
    description: 'In this Camp I got matched with 10 random teammates to create a project about transportation',
    achievement: 'Every day Impact Award',
    imageUrl: '/IMG_5641.JPG',
    date: 'November 2024',
    icon: <FaTrophy />,
    infoUrl: 'https://www.facebook.com/tobeitkmitl',
    pitchDeckUrl: 'https://www.canva.com/design/DAGWRk3No7I/8hI0EGHBZ5wxA3_BDNg8uw/view?utm_content=DAGWRk3No7I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he6c4ef39b2',
  },
  {
    title: "ClickCamp15",
    organizer: 'Computer Engineering , Mahidol University',
    description: 'In this camp i got to learn more about Cyber Security and Web Development.',
    achievement: 'Certificate of Completion',
    imageUrl: '/IMG_5675.JPG',
    date: 'December 2024',
    icon: <FaBuilding />,
    infoUrl: 'https://www.facebook.com/clickcamp.official',
    pitchDeckUrl: null,
  },
  {
    title: "First Tech Challenge 2023 & 2024 ",
    organizer: 'FIRST',
    description: 'Competed in the First Tech Challenge Thailand Robotic Competition which I took the responsibility of being the robot controller and project manager',
    achievement: 'Certificate of Participation',
    imageUrl: '/470148971_1091013362819664_8930066189706641213_n.png',
    date: 'December 2023 & 2024',
    icon: <FaBuilding />,
    infoUrl: 'https://www.facebook.com/FIRSTTechChallengeTHAILAND',
    pitchDeckUrl: null,
  },
  {
    title: "ComCamp 36",
    organizer: 'Computer Engineering , KMUTT',
    description: 'Completed an intensive 5 days 4 nights bootcamp covering web development , game development , data science , and C programming also getting to do a project.',
    achievement: 'Best Project',
    imageUrl: '/DSC02637.jpg',
    date: 'April 2025',
    icon: <FaTrophy />,
    infoUrl: 'https://www.facebook.com/KMUTTcomcamp',
    pitchDeckUrl: 'https://www.canva.com/design/DAGkHlLf_Sg/cja9ItUJhrV2xZSr2CZfXQ/view?utm_content=DAGkHlLf_Sg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbafdca9ea8',
  },
  {
    title: "ITCAMP21 | The Glacial Horizon",
    organizer: 'School of Information Technology , KMITL',
    description: 'In this camp I got to learn more about game develpment using unreal engine 5 through creating my own fps game.',
    achievement: 'Certificate of Completion',
    imageUrl: '/491894110_18001234460772957_4312844521818363711_n.jpeg',
    date: 'April 2025',
    icon: <FaBuilding />,
    infoUrl: 'https://www.facebook.com/itcampKMITL',
    pitchDeckUrl: 'https://www.canva.com/design/DAGmEsfm6Yg/C4j4Q7OZCSObOVn7kp8c1w/edit?utm_content=DAGmEsfm6Yg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    title: "Leagues of Code AI Hackathon",
    organizer: 'HarbourSpace@UTCC',
    description: 'Competed in the Accesibility AI category where we developed an AI to train thai sign language to text.',
    achievement: '2nd Runner up',
    imageUrl: '/500322916_690067347110079_2424517049806760822_n.jpg',
    date: 'May 2025',
    icon: <FaTrophy />,
    infoUrl: 'https://www.th-leaguesofcode.com/loc-hackathon',
    pitchDeckUrl: 'https://www.canva.com/design/DAGnHqu-jos/SSH1TBF3iIyYMWrAalS-Cw/view?utm_content=DAGnHqu-jos&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h57df82396b',
  },
  {
    title: "ITCLASH | Cybersecurity Redteam",
    organizer: 'School of Information Technology , KMITL',
    description: 'I got to use my Cryptography , Forensics , Web Exploitation and Reverse Engineering to qualify for the final .',
    achievement: 'Finalist',
    imageUrl: '/Certificate-ธาม พัทธวรากร-IT CLASH กิจกรรมการแข่งขันทักษะเขียนโปรแกรมและไซเบอร์ (Red Team เข้าร่วม) (1).jpg',
    date: 'May 2025',
    icon: <FaTrophy />,
    infoUrl: 'https://www.facebook.com/itclash.kmitl',
    pitchDeckUrl: null,
  },
  {
    title: "Young iOS Developer Challenge (Regional Level)",
    organizer: 'Swift Coding Club TH',
    description: 'Competed in the regional round where we made our project proposal and low-fidelity for our iOS App.',
    achievement: 'Certificate of Participation',
    imageUrl: '/Screenshot 2568-07-14 at 17.09.46.png',
    date: 'February 2023',
    icon: <FaBuilding />,
    infoUrl: 'https://www.facebook.com/swiftcodingclub',
    pitchDeckUrl: null,
  },
  {
    title: "CAMT GIFTED SCHOOL | E-Business" ,
    organizer: 'College of Arts , Media , and Technology , CMU',
    description: 'Completed an intensive 16-week bootcamp covering Business Foundations, Logistics and Supplychain, Excel , and UX/UI Design.',
    achievement: 'Certificate of Completion',
    imageUrl: '/476236125_122219679386208716_5373561161018695659_n.jpg',
    date: '2024',
    icon: <FaBuilding />,
    infoUrl: 'https://www.facebook.com/CAMTACT',
    pitchDeckUrl: null,
  },
  {
    title: "Zigma Camp #9",
    organizer: 'Statistics Department Chulalongkorn University',
    description: 'In this camp I got to learn more about Data Science and Stats, Business in Information Technology, and Insurance.',
    achievement: 'Certificate of Completion',
    imageUrl: '/6AA321BE-1868-47FC-A8E3-47F237C9818E.JPEG',
    date: 'January 2025',
    icon: <FaBuilding />,
    infoUrl: 'https://www.facebook.com/ZigmaCamp/',
    pitchDeckUrl: null,
  },
  {
    title: "Student Council",
    organizer: 'Chiangmai University Demonstration School',
    description: 'Took part in being student council taking many responsibilities in many departments.',
    achievement: 'Certificate of Completion',
    imageUrl: '/490944539_1185889303547334_1278444058196333623_n.jpg',
    date: '2024 - 2025',
    icon: <FaUsers />,
    infoUrl: 'https://www.instagram.com/demon53official/',
    pitchDeckUrl: null,
  },
  {
    title: "BDI Hackathon",
    organizer: 'University of Phayao and Big Data Institute',
    description: 'Competed in the final round building an idea focusing on developing smart tourism in ChiangMai',
    achievement: 'Finalist',
    imageUrl: '/DSC01895.JPG',
    date: 'June 2025',
    icon: <FaTrophy />,
    infoUrl: 'https://www.facebook.com/bdithailand',
    pitchDeckUrl: 'https://www.canva.com/design/DAGrhgrThrw/kQ2JVzGq1wmzfaUCN0VAAA/view?utm_content=DAGrhgrThrw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7405ff7c6c',
  },
];
// --- END OF EDITABLE DATA ---

const ActivityCard = ({ activity }) => (
  <motion.div 
    className="bg-[#1E1E1E]/60 border border-gray-700 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col"
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    <img 
      src={activity.imageUrl} 
      alt={activity.title} 
      className="w-full h-48 object-cover" 
      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1E1E1E/FFFFFF?text=Activity'; }} 
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
      
      {/* --- NEW DESCRIPTION FIELD ADDED HERE --- */}
      <p className="text-gray-400 mb-4 text-sm">{activity.description}</p>
      
      <div className="space-y-3 text-gray-400 mb-4 flex-grow">
        <div className="flex items-center gap-3">
          <FaBuilding className="text-blue-400 flex-shrink-0" />
          <span>{activity.organizer}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-yellow-400 flex-shrink-0 text-lg">{activity.icon}</div>
          <span>{activity.achievement}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <FaCalendarAlt />
          <span>{activity.date}</span>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-4 text-gray-400 border-t border-gray-700 pt-4">
        {activity.infoUrl && (
          <a href={activity.infoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaInfoCircle />
            More Info
          </a>
        )}
        {activity.pitchDeckUrl && (
          <a href={activity.pitchDeckUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaFilePowerpoint />
            Pitch Deck
          </a>
        )}
      </div>
      
    </div>
  </motion.div>
);

export default function ActivitiesSection() {
  return (
    <section id="activities" className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">Activities & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesData.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
