import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer id="contact" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-transparent transition-colors duration-300">
      
      {/* BACKGROUND ELEMENTS (Dark Mode Only) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-gray-900/0 dark:from-black dark:via-[#050505] dark:to-transparent z-0 opacity-0 dark:opacity-100 transition-opacity duration-300"></div>
      
      {/* Cyber Grid (Dark Mode Only) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 dark:opacity-20 z-0 transition-opacity duration-300"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* BIG HEADER */}
        <div className="mb-16 text-center md:text-left">
           <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
             Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Together.</span>
           </h2>
           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
             Have a project in mind or looking for a UI/UX Lead? I'm currently open to new opportunities.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: Contact Cards */}
          <div className="flex flex-col gap-6">
             
             {/* Card 1: Email */}
             <a href="mailto:sharmainehannahvalenzuela2005@gmail.com" 
                className="group flex items-center gap-6 p-6 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-none hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-lg md:text-xl font-medium break-all text-gray-900 dark:text-gray-200 group-hover:text-primary transition-colors">
                    sharmainehannahvalenzuela2005@gmail.com
                  </p>
                </div>
             </a>

             {/* Card 2: Phone & Location Grid */}
             <div className="grid md:grid-cols-2 gap-6">
                <div className="group p-6 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-none hover:border-primary/50 transition-all duration-300">
                    <div className="p-3 bg-primary/10 w-fit rounded-full text-primary mb-4 group-hover:scale-110 transition-transform">
                      <FaPhone size={20} />
                    </div>
                    <p className="text-sm text-gray-500 uppercase font-bold">Call Me</p>
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-200">09978993339</p>
                </div>

                <div className="group p-6 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-none hover:border-primary/50 transition-all duration-300">
                    <div className="p-3 bg-primary/10 w-fit rounded-full text-primary mb-4 group-hover:scale-110 transition-transform">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <p className="text-sm text-gray-500 uppercase font-bold">Location</p>
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-200">Bacoor City, Cavite</p>
                </div>
             </div>

             {/* Social Links Row */}
             <div className="flex gap-4 mt-4">
               <a href="#" className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-primary hover:text-white hover:border-primary dark:hover:border-primary transition shadow-lg text-gray-700 dark:text-gray-300"><FaGithub size={24} /></a>
               <a href="#" className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:border-blue-600 transition shadow-lg text-gray-700 dark:text-gray-300"><FaLinkedin size={24} /></a>
             </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="w-full">
            <ContactForm />
          </div>

        </div>

        <div className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-500 dark:text-gray-600 text-sm">
          <p>© 2025 Sharmaine Hannah P. Valenzuela | Designed & Built with React.js</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;