import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt'; 
import { FaExternalLinkAlt, FaTrophy, FaHistory, FaChevronDown, FaAward, FaEye, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PROJECTS, VISIBLE_AWARDS, HIDDEN_AWARDS } from '../constants';

const Projects = () => {
  // --- STATE FOR LIGHTBOX GALLERY ---
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open the modal with the first image
  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close the modal
  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Next Image Logic (Looping)
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  // Previous Image Logic (Looping)
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

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
      <div className="grid lg:grid-cols-2 gap-10 mb-24">
        {PROJECTS.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.005} className="h-full">
            <div 
              className="h-full flex flex-col p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm shadow-xl dark:shadow-none hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block pointer-events-none z-0"></div>

              {/* --- TOP SECTION: IMAGE + TEXT --- */}
              <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                
                {/* IMAGE CONTAINER WITH HOVER EFFECT */}
                <div 
                  className="shrink-0 relative group/image cursor-pointer w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800"
                  onClick={() => openGallery(project)}
                >
                  {/* The Image (Shows the first one in the array) */}
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                  />
                  
                  {/* HOVER OVERLAY: Eye Icon */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                    <FaEye size={20} className="mb-1" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">View Gallery</span>
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white leading-tight">{project.title}</h3>
                  <p className="text-xs text-primary mb-3 uppercase tracking-widest font-bold">{project.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </div>

              </div>

              {/* --- FOOTER SECTION --- */}
              <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
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
                  className="group/btn relative flex items-center justify-center p-[2px] overflow-hidden rounded-full w-10 h-10 hover:w-32 transition-all duration-500 ease-in-out shadow-lg hover:shadow-primary/50 cursor-pointer ml-4 shrink-0"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0000_0%,transparent_50%,#ff0000_100%)] opacity-100" />
                  <span className="relative flex items-center justify-center h-full w-full bg-white dark:bg-gray-900 rounded-full transition-colors z-10">
                    <FaExternalLinkAlt size={12} className="text-primary shrink-0" />
                    <span className="whitespace-nowrap w-0 overflow-hidden group-hover/btn:w-auto group-hover/btn:ml-2 opacity-0 group-hover/btn:opacity-100 transition-all duration-500 text-[10px] font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                      View Work
                    </span>
                  </span>
                </a>
              </div>

            </div>
          </Tilt>
        ))}
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={closeGallery}>
          
          {/* Close Button */}
          <button 
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
          >
            <FaTimes size={30} />
          </button>

          {/* Modal Content Container */}
          <div className="relative w-full max-w-5xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            
            {/* Left Arrow */}
            <button 
              onClick={prevImage}
              className="absolute left-2 md:-left-12 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all z-10"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl max-h-[85vh]">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain"
              />
              
              {/* Image Counter Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextImage}
              className="absolute right-2 md:-right-12 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all z-10"
            >
              <FaChevronRight size={24} />
            </button>

          </div>
        </div>
      )}

      {/* --- AWARDS SECTION (Unchanged) --- */}
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        {/* RECENT HONORS */}
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

        {/* ACADEMIC ARCHIVE */}
        <div className="group relative rounded-2xl border border-dashed border-gray-400 dark:border-gray-700 hover:border-primary/50 transition-colors duration-500 bg-gray-50 dark:bg-black/20 overflow-hidden">
          
          <div className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
              <FaHistory />
              <span className="font-bold tracking-widest text-sm uppercase">Academic History (High School & Elementary)</span>
            </div>
            <FaChevronDown className="text-gray-400 dark:text-gray-500 transform group-hover:rotate-180 transition-transform duration-500" />
          </div>

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