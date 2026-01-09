import React from 'react';

const Education = () => {
  // DATA INLINED (SAFE MODE)
  const SCHOOLS = [
    { 
      name: "Technological University of the Philippines", 
      period: "2023-Present", 
      loc: "Ermita, Manila", 
      degree: "Bachelor of Science in Information Technology" 
    },
    { 
      name: "St. Mary Magdalene School", 
      period: "2021-2023", 
      loc: "Kawit, Cavite", 
      degree: "Senior High School" 
    },
    { 
      name: "General Emilio Aguinaldo National HS", 
      period: "2017-2021", 
      loc: "Imus, Cavite", 
      degree: "Junior High School" 
    }
  ];

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 dark:via-red-900/50 to-transparent -translate-y-1/2 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-20 text-center text-gray-900 dark:text-white" data-aos="fade-down">
          My <span className="text-primary">Journey</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 relative">
          
          {/* THE CONNECTING LINE (Desktop Only) */}
          <div className="absolute top-[20px] left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 hidden md:block rounded-full overflow-hidden">
             <div className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 animate-pulse"></div>
          </div>

          {SCHOOLS.map((school, index) => (
            <div 
              key={index} 
              className="relative w-full md:w-1/3 group" 
              data-aos="fade-up" 
              data-aos-delay={index * 200}
            >
              {/* 1. THE NODE (Glowing Dot) */}
              <div className="hidden md:flex justify-center mb-6 relative">
                 {/* Outer Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary/20 rounded-full blur-md group-hover:bg-primary/50 transition duration-500"></div>
                 {/* The Core */}
                 <div className="w-4 h-4 bg-white dark:bg-gray-900 border-2 border-primary rounded-full relative z-10 group-hover:scale-150 transition duration-300 shadow-[0_0_10px_#FF0000]"></div>
              </div>

              {/* 2. THE CARD (Day Mode: White & Shadow | Dark Mode: Glass & Glow) */}
              <div className="bg-white dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-white/5 p-6 rounded-xl shadow-lg dark:shadow-none hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                
                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/10 to-transparent -mr-6 -mt-6 rounded-full blur-xl group-hover:bg-primary/20 transition-colors"></div>

                {/* Period Badge */}
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-3">
                  {school.period}
                </span>

                {/* School Name */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 leading-tight group-hover:text-primary transition-colors">
                  {school.name}
                </h3>

                {/* Location */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide flex items-center gap-2">
                   <span className="w-1 h-1 bg-primary rounded-full"></span> {school.loc}
                </p>

                {/* Degree */}
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 italic border-l-2 border-primary/30 pl-3 group-hover:border-primary transition-colors">
                  {school.degree}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;