import React from 'react';
// Standard safe icons
import { 
  FaCode, FaDatabase, FaGithub, FaServer, FaEdit, FaSitemap, 
  FaUsers, FaHandshake, FaLightbulb, FaBrain, FaComments, FaClock, 
  FaMicrochip, FaUserTie, FaBullseye, FaEye 
} from 'react-icons/fa';

const Skills = () => {
  // --- UPDATED DATA SECTIONS ---
  
  const MISSION = "To develop impactful systems that go beyond meeting tasks, driving positive change and betterment for society with unwavering integrity and a heart for helping others.";
  
  const VISION = "To become a successful innovator who builds transformative solutions that elevate lives, remaining steadfast in my commitment to integrity and serving the greater good.";

  const TECHNICAL_SKILLS = [
    "UI/UX Designing", "Wireframing & Prototyping", "PHP", "MySQL", "GitHub", "XAMPP", "Visual Studio Code"
  ];

  const SOFT_SKILLS = [
    "Teamwork", "Collaboration", "Problem Solving", "Adaptability", "Communication", "Time Management"
  ];
  
  const getIcon = (skillName) => {
    const icons = {
      "UI/UX Designing": <FaEdit />,
      "Wireframing & Prototyping": <FaSitemap />,
      "PHP": <FaCode />,
      "MySQL": <FaDatabase />,
      "GitHub": <FaGithub />,
      "XAMPP": <FaServer />,
      "Visual Studio Code": <FaCode />,
      "Teamwork": <FaUsers />,
      "Collaboration": <FaHandshake />,
      "Problem Solving": <FaLightbulb />,
      "Adaptability": <FaBrain />,
      "Communication": <FaComments />,
      "Time Management": <FaClock />,
    };
    return icons[skillName] || <FaMicrochip />;
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Elements - Crucial for the glass effect */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* --- ROW 1: MISSION & VISION (IPHONE GLASS EFFECT) --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
        
        {/* MISSION CARD */}
        <div 
          data-aos="fade-up" 
          className="backdrop-blur-md bg-white/40 dark:bg-black/30 border border-white/20 dark:border-white/10 shadow-lg p-8 rounded-2xl transition-all duration-300 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-red-100/80 dark:bg-red-900/50 rounded-full text-primary">
              <FaBullseye size={22} />
            </div>
            <h3 className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white uppercase drop-shadow-sm">Mission</h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm md:text-base font-medium drop-shadow-sm">
            {MISSION}
          </p>
        </div>

        {/* VISION CARD */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="100"
          className="backdrop-blur-md bg-white/40 dark:bg-black/30 border border-white/20 dark:border-white/10 shadow-lg p-8 rounded-2xl transition-all duration-300 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100/80 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400">
              <FaEye size={22} />
            </div>
            <h3 className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white uppercase drop-shadow-sm">Vision</h3>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm md:text-base font-medium drop-shadow-sm">
            {VISION}
          </p>
        </div>

      </div>


      {/* --- ROW 2: TECHNICAL & PROFESSIONAL SKILLS (ORIGINAL DESIGN) --- */}   
      <div className="grid md:grid-cols-2 gap-8 items-start relative z-10">
        
        {/* TECHNICAL ARSENAL */}
        <div 
          data-aos="fade-right" 
          className="bg-white dark:bg-black/20 shadow-xl dark:shadow-none border border-gray-200 dark:border-white/10 p-8 rounded-2xl transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
             <FaCode className="text-primary text-xl" />
             <h3 className="text-xl font-bold tracking-wide text-gray-800 dark:text-white">Technical Arsenal</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {TECHNICAL_SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="group flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
              >
                <span className="text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors text-sm">
                  {getIcon(skill)}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PROFESSIONAL TRAITS */}
        <div 
          data-aos="fade-left" 
          className="bg-white dark:bg-black/20 shadow-xl dark:shadow-none border border-gray-200 dark:border-white/10 p-8 rounded-2xl transition-colors duration-300"
        >
           <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
             <FaUserTie className="text-primary text-xl" />
             <h3 className="text-xl font-bold tracking-wide text-gray-800 dark:text-white">Professional Traits</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {SOFT_SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="group flex items-center gap-2 px-3 py-2 border border-dashed border-gray-400 dark:border-gray-600 rounded-lg hover:border-primary hover:border-solid hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <span className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors text-sm">
                  {getIcon(skill)}
                </span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;