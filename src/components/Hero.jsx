import React from 'react';
import { ReactTyped } from "react-typed";
import { FaGithub, FaEnvelope } from 'react-icons/fa';
// Import both image versions
import profileDay from '../assets/profile-day.png'; 
import profileNight from '../assets/profile-night.png'; 

const Hero = ({ darkMode }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: Text Content */}
        <div className="text-left order-2 md:order-1" data-aos="fade-right">
          <h2 className="text-xl font-light mb-2 text-primary tracking-widest uppercase">
            Future IT Professional
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter text-gray-900 dark:text-white">
            Sharmaine Hannah Valenzuela
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
            I specialize in{" "}
            <ReactTyped
              strings={["Web Development", "UI/UX Design", "System Development"]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="text-primary"
            />
          </div>

          <p className="max-w-lg text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
            Passionate and detail-oriented IT student specializing in creating interactive, user-friendly interfaces.
          </p>

          <div className="flex gap-4">
            <a href="mailto:sharmainehannahvalenzuela2005@gmail.com" className="p-3 border border-gray-400 dark:border-gray-500 rounded-full hover:border-primary hover:text-primary transition shadow-lg text-gray-700 dark:text-gray-300">
              <FaEnvelope size={24} />
            </a>
            <a href="#" className="p-3 border border-gray-400 dark:border-gray-500 rounded-full hover:border-primary hover:text-primary transition shadow-lg text-gray-700 dark:text-gray-300">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Portrait with Seamless Fading Edges */}
        <div className="order-1 md:order-2 flex justify-center" data-aos="fade-left">
          <div className="relative group">
            
            {/* External Ambient Glow - Increased size to match bigger image */}
            <div className="absolute -inset-16 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl opacity-50 transition-opacity duration-1000"></div>
            
            {/* Image Container - ADJUST THESE VALUES TO CHANGE SIZE */}
            {/* Mobile: w-72 h-[28rem] | Desktop: md:w-[28rem] md:h-[38rem] */}
            <div className="relative w-72 h-[28rem] md:w-[28rem] md:h-[38rem] overflow-hidden">
              
              {/* THE IMAGE WITH QUAD-DIRECTIONAL FADE */}
              <img 
                src={darkMode ? profileNight : profileDay} 
                alt="Sharmaine Hannah Valenzuela" 
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  WebkitMaskImage: `
                    linear-gradient(to bottom, transparent, black 15%, black 85%, transparent),
                    linear-gradient(to right, transparent, black 15%, black 85%, transparent)
                  `,
                  maskImage: `
                    linear-gradient(to bottom, transparent, black 15%, black 85%, transparent),
                    linear-gradient(to right, transparent, black 15%, black 85%, transparent)
                  `,
                  WebkitMaskComposite: 'source-in',
                  maskComposite: 'intersect'
                }}
              />

              {/* Top/Bottom Soft Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white dark:from-darkBg dark:to-darkBg transition-colors duration-300 opacity-20"></div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;