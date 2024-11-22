// src/components/Hello.tsx
import React from 'react';

const Hello: React.FC = () => {
  return (
    <section id="hello" className="flex items-center justify-center text-center 
    h-screen sm:h-3/5 md:h-1/2 px-5 gap-10
    dark:bg-dark-background bg-light-background bg-custompattern">
      {/* Text + buttons */}
      <div className='flex flex-col gap-6 py-6 mt-20'>

        {/* Text */}
        <div className='dark:text-dark-primary text-light-primary'>
          <h1 className="text-4xl font-bold mb-3
            bg-gradient-to-tl
            from-light-secondary
            to-light-accent/80
            bg-clip-text
            text-transparent"
          >
            <text className="text-light-primary text-xl break-before-auto block">
              Hello! 
            </text>
            Welcome to my portfolio!
          </h1>
          <p className="text-lg dark:text-dark-primary text-light-secondary px-2 sm:px-6 md:px-20 lg:px-52 2xl:px-96">
            <p>
              Am excited to share my journey in web development, and data analytics with you. Take a look around to discover my projects, skills, and vision for creating technology solutions.
            </p>
            Thanks for stopping by!
          </p>
        </div>

        {/* Buttons Resume and Projects*/}
        <div className="flex items-center justify-center space-x-4 ">
          <a 
            href="/path-to-your-resume.pdf"
            download 
            className="px-3 py-2 font-medium border focus:ring-2
                       dark:focus:ring-dark-accent dark:bg-transparent dark:border-dark-accent/70 dark:text-dark-accent/70 dark:hover:bg-dark-accent/60 dark:hover:text-dark-primary 
                       focus:ring-light-accent bg-transparent border-light-secondary text-light-secondary hover:border-light-primary hover:bg-light-accent/80 hover:text-light-background
                       rounded-sm shadow-md"
          >
            Resume   
          </a>
          <a 
            href="#projects" 
            className="px-3 py-2 font-medium border focus:ring-2
                      dark:focus:ring-dark-accent dark:bg-dark-accent dark:border-dark-secondary dark:text-dark-background dark:hover:bg-dark-secondary/60 dark:hover:text-dark-primary 
                      focus:ring-light-accent bg-light-accent border-light-accent text-light-secondary hover:border-light-accent hover:bg-light-primary hover:text-light-additional
                      rounded-sm shadow-md"
          >
            Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hello;
