// src/components/Hello.tsx
import React from 'react';

const Hello: React.FC = () => {
  return (
    <section id="hello" className="flex flex-row items-center justify-center h-3/4 text-center p-8 gap-10 dark:bg-dark-background bg-light-background">
      <div className="w-40 h-40 mb-6 rounded-full overflow-hidden shadow-lg hidden sm:block">
        <img src="src\assets\Photo.png" className='w-full h-full object-cover'></img>
      </div>
      <div className='flex flex-col gap-6 py-6 mt-20'>
        <div className='dark:text-dark-primary text-light-primary'>
          <h1 className="text-4xl font-bold dark:text-dark-primary text-light-primary">Hello! Welcome to my portfolio!</h1>
          <p className="text-lg mt-4 dark:text-dark-secondary text-light-secondary"><p>I’m excited to share my journey in IT, web development, and data analytics with you. Take a look around to discover my projects, skills, and vision for creating impactful technology solutions.</p>
          Thanks for stopping by!</p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center space-x-4 ">
          <a 
            href="/path-to-your-resume.pdf" 
            download 
            className="px-6 py-3 dark:bg-dark-secondary dark:hover:bg-dark-accent dark:hover:text-dark-additional dark:text-dark-primary bg-light-accent text-light-secondary font-medium rounded-md shadow-md hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Resume
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 dark:bg-dark-accent bg-light-accent dark:text-dark-background text-light-secondary bg-secondary text-background font-medium rounded-md shadow-md hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hello;
