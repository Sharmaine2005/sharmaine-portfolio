import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="flex flex-col items-center gap-4">
        {/* Spinning Outer Ring */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-800 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Pulsing Text */}
        <h1 className="text-xl font-bold tracking-widest animate-pulse">
          SHARMAINE<span className="text-primary">.</span>
        </h1>
      </div>
    </div>
  );
};

export default Preloader;