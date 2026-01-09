import React from 'react';
// Standard safe icons
import { 
  FaCode, FaDatabase, FaGithub, FaServer, FaEdit, FaSitemap, 
  FaUsers, FaHandshake, FaLightbulb, FaBrain, FaComments, FaClock, 
  FaMicrochip, FaUserTie 
} from 'react-icons/fa';

const Skills = () => {
  // DATA INLINED (SAFE MODE)
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
      
      {/* Background Elements - Adjusted to be subtle in both modes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10" data-aos="fade-up">
         <h2 className="text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
          My <span className="text-primary">Capabilities</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-start relative z-10">
        
        {/* 1. TECHNICAL ARSENAL */}
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

        {/* 2. PROFESSIONAL TRAITS */}
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