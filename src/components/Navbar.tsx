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
    <nav className="fixed top-0 z-50 shadow-lg w-full flex justify-between items-center p-3 
                  dark:bg-dark-background bg-light-background dark:bg-opacity-60 bg-opacity-60 backdrop-blur-sm sm:px-10 lg:px-16 2xl:px-24">
      {/* Logo Section */}
      <Link to="hello" smooth={true} offset={-70} className="cursor-pointer">
        <div className="font-thin flex  dark:text-dark-accent text-light-accent">
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
              x="121"
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


        {/* Logo - Ernesto Contreras */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 140 50"
            className="w-auto h-6 dark:text-dark-accent text-light-accent sm:block hidden"
          >
            {/* ERNESTO Text */}
            <text
              className="fill-current"
              style={{
                fontSize: '22px', // Matches original size.
                textAnchor: 'start', // Aligns text to start from x coordinate.
              }}
            >
              <tspan
                x="4"
                y="24"
                style={{
                  fontFamily: 'sans-serif', // Myanmar Text with fallback.
                  fontWeight: 400,
                }}
              >
                ERNESTO
              </tspan>
            </text>

            {/* CONTRERAS Text */}
            <text
              className="fill-current"
              style={{
                fontSize: '23px', // Matches original size.
                textAnchor: 'start', // Aligns text to start.
                transform: 'scale(0.86, 1.16)', // Applies scaling transformation.
              }}
            >
              <tspan
                x="5"
                y="38"
                style={{
                  fontFamily: 'sans-serif', // Myanmar Text with fallback.
                  fontWeight: 600,
                }}
              >
                CONTRERAS
              </tspan>
            </text>
          </svg>
        </div>
      </Link>

      {/* Internal Links */}
      <div className="space-x-6 font-sans">
        <Link to="about" smooth={true} offset={-70} className="cursor-pointer dark:text-dark-primary text-light-primary hover:text-dark-accent dark:hover:text-light-accent">About</Link>
        <Link to="projects" smooth={true} offset={-70} className="cursor-pointer dark:text-dark-primary text-light-primary hover:text-dark-accent dark:hover:text-light-accent">Projects</Link>
        <Link to="contact" smooth={true} offset={-70} className="cursor-pointer dark:text-dark-primary text-light-primary hover:text-dark-accent dark:hover:text-light-accent">Contact</Link>
      </div>

      {/* External Links and Theme Toggle */}
      <div className="flex items-center space-x-3">
        {/* LInkedIn Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-143 145 512 512"
          className="h-6 cursor-pointer dark:fill-dark-primary fill-light-primary hidden sm:block dark:hover:fill-dark-accent hover:fill-light-accent"
        >
          <path d="M329 145h-432a40 40 0 0 0-40 40v432a40 40 0 0 0 40 40h432a40 40 0 0 0 40-40V185a40 40 0 0 0-40-40zm10 472a10 10 0 0 1-10 10h-432a10 10 0 0 1-10-10V185a10 10 0 0 1 10-10h432a10 10 0 0 1 10 10v432z" />
          <path d="M-8.5 348.4h49.9v159.7H-8.5zM177.7 346.9c-28.6 0-46.5 15.6-49.8 26.6v-25.1H71.8c.7 13.3 0 159.7 0 159.7h56.1v-86.3c0-4.9-.2-9.7 1.2-13.1 3.8-9.6 12.1-19.6 27-19.6 19.5 0 28.3 14.8 28.3 36.4v82.6H241v-88.8c0-49.4-27.8-72.4-63.3-72.4zM15.4 273c-18.4 0-30.5 11.9-30.5 27.7 0 15.5 11.7 27.7 29.8 27.7h.4c18.8 0 30.5-12.3 30.4-27.7-.4-15.8-11.7-27.7-30.1-27.7z" />
        </svg>
        {/* Github Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-143 145 512 512"
          className="h-6 cursor-pointer dark:fill-dark-primary fill-light-primary hidden sm:block dark:hover:fill-dark-accent hover:fill-light-accent"
        >
          <path d="M329 145h-432a40 40 0 0 0-40 40v432a40 40 0 0 0 40 40h432a40 40 0 0 0 40-40V185a40 40 0 0 0-40-40zm10 472a10 10 0 0 1-10 10h-432a10 10 0 0 1-10-10V185a10 10 0 0 1 10-10h432a10 10 0 0 1 10 10v432z" />
          <path d="M224.5 351.2c.9-20.1-1.8-39.6-8.6-58.6-.9-2.4-2-3.3-4.5-2.6-5.6 1.7-11.4 3-16.9 5a213 213 0 0 0-42.6 22.2 8 8 0 0 1-5.2 1.2 203.3 203.3 0 0 0-66.5-.3c-2.2.3-5-.2-6.8-1.3-15.7-10.2-31.7-20.2-50-25-15.1-4-12-4.8-16.3 8.9a139.6 139.6 0 0 0-6 50.6c.1 1.2-.8 2.7-1.6 3.8a77.4 77.4 0 0 0-14.8 26.4c-6 19-4.8 38.2-1 57.3 7.5 37.5 32.8 63.8 70.2 70.3 19.3 3.4 39.2 3.7 57.3 5.2 20.2-1.5 38.9-1.6 57.1-4.5 31.8-5.1 55.8-22 67.8-52.7 4.2-10.7 6.5-22.4 7.9-33.8 3.1-25.2-1.2-48.8-18.4-68.7a6.3 6.3 0 0 1-1.1-3.4zm-16.4 107.9a40.8 40.8 0 0 1-27.6 31.8 160 160 0 0 1-45.4 8.6c-7.5.5-15 .1-22.5.1a195 195 0 0 1-59.9-6.2c-24.5-7.3-35.5-21.9-36.2-47.5-.3-9.1.7-17.9 5-26.1 8.5-16.5 23.2-22.3 40.6-22.6 9.5-.1 19.1.7 28.7 1.6 20.1 1.8 40-.1 60-1.2 8.8-.5 17.8-.7 26.4.8 18.5 3.2 32.5 21.6 32.8 42.3a95 95 0 0 1-1.9 18.4z" />
          <path d="M56.1 424.8a29.2 29.2 0 0 0-7.7 19.3c0 9.6 2.8 17.3 7.7 22.3 6.8 6.9 16.1 6.7 22.6-.3a32.4 32.4 0 0 0 0-41c-6.5-7.1-16-7.2-22.6-.3zM148.2 424c-11.2 10.3-11.2 33 0 43.2a14.8 14.8 0 0 0 21.4-.7 30 30 0 0 0 7.8-21 29.4 29.4 0 0 0-7.9-20.9 14.7 14.7 0 0 0-21.3-.6z" />
        </svg>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="bg-transparent cursor-pointer focus:outline-none hover:ring-2 hover:ring-light-accent/80 rounded-sm p-1">
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


