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
    <nav className="w-screen flex justify-between items-center pl-3 py-3 dark:bg-dark-background bg-light-background px-6 backdrop-blur-3xl">
      {/* Logo Section */}
      <div className="font-thin dark:text-dark-primary text-light-primary pb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 190 110"
          className="w-auto h-6"
        >
          {/* Left Angle Bracket */}
          <text
            x="20"
            y="85"
            fontSize="100"
            fontFamily="Algerian"
            fill="#26DA8A"
            transform="scale(0.72 1.4)"
          >
            &lt;
          </text>

          {/* "e" Letter */}
          <text
            x="72"
            y="95"
            fontSize="230"
            fontFamily="Freestyle Script"
            fill="#26DA8A"
            transform="scale(0.88 1.13)"
          >
            e
          </text>

          {/* "c" Letter */}
          <text
            x="125"
            y="92"
            fontSize="225"
            fontFamily="Freestyle Script"
            fill="#26DA8A"
            transform="scale(0.89 1.13)"
          >
            c
          </text>

          {/* Right Angle Bracket */}
          <text
            x="200"
            y="85"
            fontSize="100"
            fontFamily="Algerian"
            fill="#26DA8A"
            transform="scale(0.75 1.34)"
          >
            &gt;
          </text>
        </svg>
      </div>

      {/* Internal Links */}
      <div className="space-x-6 font-sans">
        <Link to="about" smooth={true} offset={-70} className="cursor-pointer dark:text-dark-primary text-light-primary hover:text-dark-accent dark:hover:text-light-accent">About</Link>
        <Link to="projects" smooth={true} offset={-70} className="cursor-pointer dark:text-dark-primary text-light-primary hover:text-dark-accent dark:hover:text-light-accent">Projects</Link>
        <Link to="contact" smooth={true} offset={-70} className="cursor-pointer dark:text-dark-primary text-light-primary hover:text-dark-accent dark:hover:text-light-accent">Contact</Link>
      </div>

      {/* External Links and Theme Toggle */}
      <div className="flex items-center space-x-1">
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="cursor-pointer dark:text-dark-primary text-light-primary hover:text-dark-accent dark:hover:text-light-accent hidden sm:block">
          GitHub
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-143 145 512 512"
          className="w-6 h-6 dark:fill-dark-primary fill-light-primary hidden sm:block dark:hover:fill-dark-accent hover:fill-light-accent"
        >
          <path d="M329 145h-432a40 40 0 0 0-40 40v432a40 40 0 0 0 40 40h432a40 40 0 0 0 40-40V185a40 40 0 0 0-40-40zm10 472a10 10 0 0 1-10 10h-432a10 10 0 0 1-10-10V185a10 10 0 0 1 10-10h432a10 10 0 0 1 10 10v432z" />
          <path d="M-8.5 348.4h49.9v159.7H-8.5zM177.7 346.9c-28.6 0-46.5 15.6-49.8 26.6v-25.1H71.8c.7 13.3 0 159.7 0 159.7h56.1v-86.3c0-4.9-.2-9.7 1.2-13.1 3.8-9.6 12.1-19.6 27-19.6 19.5 0 28.3 14.8 28.3 36.4v82.6H241v-88.8c0-49.4-27.8-72.4-63.3-72.4zM15.4 273c-18.4 0-30.5 11.9-30.5 27.7 0 15.5 11.7 27.7 29.8 27.7h.4c18.8 0 30.5-12.3 30.4-27.7-.4-15.8-11.7-27.7-30.1-27.7z" />
        </svg>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="bg-light-background dark:bg-dark-background cursor-pointer focus:outline-none hover:ring-2 hover:ring-light-accent/80 rounded-lg p-1">
          {isDarkMode ? (
            // Night icon SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              viewBox="0 0 512 512"
              className="w-auto h-4"
            >
              <path
                d="M504.864 323.637a24.137 24.137 0 0 0-26.487-5.158c-26.92 11.402-55.471 17.185-84.859 17.185-50.762 0-98.865-17.292-137.581-49.088a221.303 221.303 0 0 1-16.035-14.542c-62.92-62.921-81.149-156.528-46.443-238.475A24.142 24.142 0 0 0 161.81 1.915c-31.493 13.343-59.786 32.433-84.093 56.741-103.537 103.537-103.534 272.01.006 375.554 47.9 47.898 110.871 75.229 178.214 77.603 3.185.111 6.377.188 9.581.188 70.925 0 137.61-27.624 187.766-77.78 24.308-24.311 43.4-52.605 56.738-84.094a24.144 24.144 0 0 0-5.158-26.49z"
                fill="#f6e27d"
              />
              <path
                d="M504.864 323.637a24.137 24.137 0 0 0-26.487-5.158c-26.92 11.402-55.471 17.185-84.859 17.185-50.762 0-98.865-17.292-137.581-49.088v225.235c3.185.111 6.377.188 9.581.188 70.925 0 137.61-27.624 187.766-77.78 24.308-24.311 43.4-52.605 56.738-84.094a24.142 24.142 0 0 0-5.158-26.488z"
                fill="#f2d23d"
              />
            </svg>
          ) : (
            // Day icon SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-auto h-4"
            >
              <path
                fill="#FFC10A"
                d="M26 16c0 5.5-4.5 10-10 10S6 21.5 6 16 10.5 6 16 6s10 4.5 10 10z"
              />
              <g fill="#F44236">
                <path d="M16 1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1V2c0-.6-.4-1-1-1zM16 27c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1zM30 15h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zM4 15H2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zM25.2 5.4l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0zM6.8 23.8l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0zM6.8 5.4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.8 5.4zM25.2 23.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4z"/>
              </g>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


