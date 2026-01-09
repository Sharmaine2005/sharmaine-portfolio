import React, { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; 

const Navbar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);

  // 1. UPDATED ORDER: Skills first, then Projects
  const links = [
    { id: 1, link: 'hero', text: 'Home' },
    { id: 2, link: 'skills', text: 'Skills' },
    { id: 3, link: 'projects', text: 'Projects' },
    { id: 4, link: 'education', text: 'education' }, 
    { id: 5, link: 'contact', text: 'Contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-red-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO SECTION */}
          <div className="flex-shrink-0 cursor-pointer">
            <a href="#hero">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-10 w-auto object-contain dark:invert dark:brightness-200 transition-all duration-300" 
              />
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ id, link, text }) => (
              <a
                key={id}
                href={`#${link}`}
                className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {text}
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <BsSun size={20} className="text-yellow-400" />
              ) : (
                <BsMoon size={20} className="text-gray-600" />
              )}
            </button>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="md:hidden flex items-center z-50">
             <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 mr-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <BsSun size={20} className="text-yellow-400" />
              ) : (
                <BsMoon size={20} className="text-gray-600" />
              )}
            </button>

            <div onClick={() => setNav(!nav)} className="cursor-pointer text-gray-800 dark:text-gray-200">
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 z-40 transition-all duration-300">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl hover:text-primary transition-colors duration-300"
            >
              <a onClick={() => setNav(false)} href={`#${link}`}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;