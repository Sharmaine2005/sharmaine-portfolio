import React, { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // SCROLL SPY LOGIC
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'education', 'contact'];
      
      // Loop through sections to see which one is currently in view
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport (within 150px)
          if (rect.top >= -200 && rect.top <= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper class for links
  const getLinkClass = (section) => 
    `transition duration-300 ${activeSection === section ? 'text-primary font-bold' : 'hover:text-primary'}`;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-red-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0 z-50">
            <a href="#hero">
              {/* Added 'dark:invert' and 'dark:brightness-200' to make the black logo white in Night Mode */}
              <img 
                src={logo} 
                alt="Logo" 
                className="h-10 w-auto object-contain dark:invert dark:brightness-200 transition-all duration-300" 
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-medium">
             {/* Note: Ensure your other components (Hero, Projects etc) have id="hero", id="projects" etc */}
            <a href="#hero" className={getLinkClass('hero')}>Home</a>
            <a href="#projects" className={getLinkClass('projects')}>Projects</a>
            <a href="#skills" className={getLinkClass('skills')}>Skills</a>
            <a href="#education" className={getLinkClass('education')}>Education</a>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition text-primary"
              aria-label="Toggle Theme"
            >
              {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
            </button>
          </div>

          {/* Mobile Hamburger Logic */}
          <div className="md:hidden z-50 flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-primary">
              {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
            </button>
            <button onClick={toggleMenu} className="text-2xl focus:outline-none dark:text-white">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 right-0 h-full w-2/3 bg-white dark:bg-black shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-bold">
          <a href="#hero" onClick={toggleMenu} className={activeSection === 'hero' ? 'text-primary' : ''}>Home</a>
          <a href="#projects" onClick={toggleMenu} className={activeSection === 'projects' ? 'text-primary' : ''}>Projects</a>
          <a href="#skills" onClick={toggleMenu} className={activeSection === 'skills' ? 'text-primary' : ''}>Skills</a>
          <a href="#education" onClick={toggleMenu} className={activeSection === 'education' ? 'text-primary' : ''}>Education</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;