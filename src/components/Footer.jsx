import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCopy, FaCheck, FaFileDownload } from 'react-icons/fa';
import ContactForm from './ContactForm';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "sharmainehannahvalenzuela2005@gmail.com";

  const handleCopy = (e) => {
    e.preventDefault(); 
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer id="contact" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-transparent transition-colors duration-300">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-gray-900/0 dark:from-black dark:via-[#050505] dark:to-transparent z-0 opacity-0 dark:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 dark:opacity-20 z-0 transition-opacity duration-300"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16 text-center md:text-left">
           <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
             Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Together.</span>
           </h2>
           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
             Have a project in mind? I'm currently open to new opportunities.
           </p>
        </div>

        {/* Removed items-start so columns stretch */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* LEFT SIDE: Social Cards */}
          <div className="flex flex-col gap-4">
             
             {/* Card 1: Email */}
             <button 
                onClick={handleCopy}
                className="group flex items-center gap-4 p-4 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-none hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer w-full text-left"
              >
                <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {copied ? <FaCheck size={20} /> : <FaEnvelope size={20} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                    {copied && <span className="text-[10px] font-bold text-primary animate-pulse">COPIED!</span>}
                  </div>
                  <p className="text-sm md:text-base font-medium break-all text-gray-900 dark:text-gray-200 group-hover:text-primary transition-colors">
                    {email}
                  </p>
                </div>
                <FaCopy className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
             </button>

             {/* Card 2: LinkedIn */}
             <a href="https://www.linkedin.com/in/sharmaine-hannah-valenzuela-238609383/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-none hover:border-blue-500/50 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
             >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">LinkedIn</p>
                  <p className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-200 group-hover:text-blue-600 transition-colors">
                    View Professional Profile
                  </p>
                </div>
             </a>

             {/* Card 3: GitHub */}
             <a href="https://github.com/Sharmaine2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-none hover:border-gray-500/50 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
             >
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 group-hover:bg-gray-700 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-gray-900 transition-colors">
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">GitHub</p>
                  <p className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-200 group-hover:text-gray-700 dark:group-hover:text-white transition-colors">
                    Check My Repositories
                  </p>
                </div>
             </a>

             {/* Card 4: Location */}
             <div className="group p-4 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-none hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Location</p>
                    <p className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-200">Bacoor City, Cavite</p>
                  </div>
                </div>
             </div>

             {/* Card 5: Resume Download */}
             <a href="/resume.pdf" 
                download="Sharmaine_Hannah_Valenzuela_Resume.pdf"
                className="group flex items-center gap-4 p-4 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-none hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
             >
                <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaFileDownload size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Resume</p>
                  <p className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-200 group-hover:text-primary transition-colors">
                    Download My CV
                  </p>
                </div>
             </a>

          </div>

          {/* RIGHT SIDE: Contact Form (Full Height) */}
          <div className="w-full h-full">
            <ContactForm />
          </div>

        </div>

        {/* FOOTER BOTTOM SECTION */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* LEFT SIDE: Copyright & Legal */}
          <div className="text-center md:text-left">
             <p className="text-base font-bold text-gray-900 dark:text-white">
               Sharmaine Hannah P. Valenzuela
             </p>
             <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 tracking-wide">
               © 2025. All Rights Reserved.
             </p>
          </div>

          {/* RIGHT SIDE: Tech Stack Attribution */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
               Designed & Built with 
               <span className="text-primary font-bold">React.js</span>
            </span>
            <span className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="flex items-center gap-2">
               Powered by 
               <span className="text-primary font-bold">Tailwind CSS</span>
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;