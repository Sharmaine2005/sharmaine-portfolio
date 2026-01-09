import React, { useState } from 'react';
import { ReactTyped } from "react-typed";
import { FaGithub, FaEnvelope, FaLinkedin, FaCheck } from 'react-icons/fa';
import profileDay from '../assets/profile-day.png'; 
import profileNight from '../assets/profile-night.png'; 

const Hero = ({ darkMode }) => {
  const [copied, setCopied] = useState(false);
  const email = "sharmainehannahvalenzuela2005@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    // Show the "Copied" message for 2.5 seconds
    setTimeout(() => setCopied(false), 2500);

    // Still attempts to open mail app for those who have it configured
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: Text Content */}
        <div className="text-left order-2 md:order-1" data-aos="fade-right">
          <h2 className="text-xl font-light mb-2 text-primary tracking-widest uppercase">
            Future IT Professional
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter text-gray-900 dark:text-white">
            Sharmaine Hannah
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

          <div className="flex gap-4 items-center relative z-20">
            
            {/* --- EMAIL ICON WITH ENHANCED TOOLTIP (BELOW) --- */}
            <div className="relative flex items-center justify-center">
               
               {/* Notification Bubble: Moved to bottom (top-14) and animates downwards */}
               <div className={`absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${copied ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-50 pointer-events-none'}`}>
                 <div className="bg-primary text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-xl relative">
                    {/* Arrow pointing UP towards the icon */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-primary rotate-45"></div>
                    COPIED!
                 </div>
               </div>

              <button 
                onClick={handleCopy}
                className="p-3 border border-gray-400 dark:border-gray-500 rounded-full hover:border-primary hover:text-primary transition-all duration-300 shadow-lg text-gray-700 dark:text-gray-300 bg-transparent active:scale-90"
                title="Click to copy email"
              >
                {/* Icon swaps with a smooth rotation effect */}
                <div className={`transition-transform duration-300 ${copied ? 'rotate-[360deg] scale-110' : ''}`}>
                    {copied ? <FaCheck size={24} className="text-primary" /> : <FaEnvelope size={24} />}
                </div>
              </button>
            </div>
            {/* --------------------------------------- */}


            {/* LINKEDIN */}
            <a 
              href="https://www.linkedin.com/in/sharmaine-hannah-valenzuela-238609383/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 border border-gray-400 dark:border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500 transition shadow-lg text-gray-700 dark:text-gray-300 hover:-translate-y-1"
            >
              <FaLinkedin size={24} />
            </a>

            {/* GITHUB */}
            <a 
              href="https://github.com/Sharmaine2005" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 border border-gray-400 dark:border-gray-500 rounded-full hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition shadow-lg text-gray-700 dark:text-gray-300 hover:-translate-y-1"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Portrait Image */}
        <div className="order-1 md:order-2 flex justify-center" data-aos="fade-left">
          <div className="relative group">
            <div className="absolute -inset-10 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl opacity-50 transition-opacity duration-1000"></div>
            <div className="relative w-72 h-[28rem] md:w-[28rem] md:h-[38rem] overflow-hidden">
              <img 
                src={darkMode ? profileNight : profileDay} 
                alt="Sharmaine Hannah" 
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  WebkitMaskImage: `linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)`,
                  maskImage: `linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)`,
                  WebkitMaskComposite: 'source-in',
                  maskComposite: 'intersect'
                }}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white dark:from-darkBg dark:to-darkBg transition-colors duration-300 opacity-20"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;