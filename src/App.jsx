import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import ParticlesBackground from './components/ParticlesBackground';
import Footer from './components/Footer';
import Preloader from './components/Preloader'; // Import Preloader
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  // NEW: Loading State
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Save theme preference
    localStorage.setItem('theme', JSON.stringify(darkMode));

    // 2. Initialize AOS
    AOS.init({ duration: 1000, once: true });

    // 3. Simulate Loading Delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Refresh AOS after loading is done to ensure animations trigger correctly
      setTimeout(() => AOS.refresh(), 100); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [darkMode]);

  return (
    <>
      {/* Show Preloader if loading, otherwise show App */}
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={`${darkMode ? "dark" : ""}`}>
          <ParticlesBackground darkMode={darkMode} />
          
          {/* Main Content with Fade-In Effect */}
          <div className="bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300 animate-fade-in">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero darkMode={darkMode} /> {/* Pass darkMode here */}
            <Skills />
            <Projects />
            <Education />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;