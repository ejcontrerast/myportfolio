import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// https://www.youtube.com/watch?v=vIBKSmWAdIA&t=36s


const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    // Set dark mode by default when the component mounts
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <nav className="w-screen flex justify-between items-center p-4 bg-dark-background dark:bg-light-background">
      {/* Logo Section */}
      <div className="text-xl font-bold text-dark-primary dark:text-light-primary">
        <img src="src/assets/logo.png" alt="Logo" className="w-auto h-4 mr-2 inline-block" />
      </div>

      {/* Internal Links */}
      <div className="space-x-4">
        <Link to="about" smooth={true} offset={-70} className="cursor-pointer text-dark-primary dark:text-light-primary hover:text-dark-accent dark:hover:text-light-accent">About</Link>
        <Link to="projects" smooth={true} offset={-70} className="cursor-pointer text-dark-primary dark:text-light-primary hover:text-dark-accent dark:hover:text-light-accent">Projects</Link>
        <Link to="contact" smooth={true} offset={-70} className="cursor-pointer text-dark-primary dark:text-light-primary hover:text-dark-accent dark:hover:text-light-accent">Contact</Link>
      </div>

      {/* External Links and Theme Toggle */}
      <div className="flex items-center space-x-4">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-dark-primary dark:text-light-primary hover:text-dark-accent dark:hover:text-light-accent hidden sm:block">
          LinkedIn
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-dark-primary dark:text-light-primary hover:text-dark-accent dark:hover:text-light-accent hidden sm:block">
          GitHub
        </a>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="focus:outline-none text-dark-primary dark:text-light-primary">
          {isDarkMode ? (
            // Night icon SVG
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.485-11.515l-.707.707M4.222 19.778l-.707-.707M18 12a6 6 0 11-12 0 6 6 0 0112 0zm1.415 7.071l.707-.707M4.222 4.222l.707.707M21 12h1M3 12H2" />
            </svg>
          ) : (
            // Day icon SVG
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.485-11.515l-.707.707M4.222 19.778l-.707-.707M18 12a6 6 0 11-12 0 6 6 0 0112 0zm1.415 7.071l.707-.707M4.222 4.222l.707.707M21 12h1M3 12H2" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;