import React from 'react';
import Tilt from 'react-parallax-tilt'; 
import { FaExternalLinkAlt, FaTrophy, FaHistory, FaChevronDown, FaAward } from 'react-icons/fa';
import { PROJECTS, VISIBLE_AWARDS, HIDDEN_AWARDS } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Works & <span className="text-primary">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {PROJECTS.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01}>
            <div 
              className="h-full p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm shadow-xl dark:shadow-none hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Subtle Gradient Overlay (Dark Mode Only) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block"></div>

              <h3 className="text-2xl font-bold mb-2 relative z-10 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-xs text-primary mb-4 uppercase tracking-widest font-bold relative z-10">{project.role}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed relative z-10">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono border border-primary/30 bg-primary/5 px-2 py-1 rounded text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-primary transition-colors relative z-10"
              >
                VIEW WORK <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </Tilt>
        ))}
      </div>

      {/* --- AWARDS SECTION --- */}
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        
        {/* 1. RECENT HONORS (Always Visible) */}
        <div className="relative mb-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <FaTrophy size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Honors & Recognition</h3>
          </div>

          <div className="md:columns-2 gap-8 space-y-4">
            {VISIBLE_AWARDS.map((award, i) => (
              <div 
                key={i} 
                className="break-inside-avoid mb-4 group p-4 rounded-lg bg-white dark:bg-white/5 border-l-4 border-transparent hover:border-primary shadow-sm dark:shadow-none hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-3">
                  <FaAward className="mt-1 text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-sm md:text-base">
                    {award}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. ACADEMIC ARCHIVE (Hover Reveal) */}
        <div className="group relative rounded-2xl border border-dashed border-gray-400 dark:border-gray-700 hover:border-primary/50 transition-colors duration-500 bg-gray-50 dark:bg-black/20 overflow-hidden">
          
          {/* TRIGGER HEADER */}
          <div className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
              <FaHistory />
              <span className="font-bold tracking-widest text-sm uppercase">Academic History (High School & Elementary)</span>
            </div>
            <FaChevronDown className="text-gray-400 dark:text-gray-500 transform group-hover:rotate-180 transition-transform duration-500" />
          </div>

          {/* HIDDEN CONTENT */}
          <div className="max-h-0 opacity-0 group-hover:max-h-[800px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
            <div className="p-6 pt-0 border-t border-gray-200 dark:border-gray-800">
              
              <div className="mt-6 md:columns-2 gap-8 space-y-3">
                {HIDDEN_AWARDS.map((award, i) => (
                  <div key={i} className="break-inside-avoid mb-3 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                    {award}
                  </div>
                ))}
              </div>

            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Projects;