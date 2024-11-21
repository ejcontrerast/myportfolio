import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="sm:h-1/2 h-screen w-auto
      px-5 sm:px-10 md:px-20 lg:px-30 xl:px-50 2xl:70 py-30 sm:py-20 md:py-20
      dark:bg-dark-background bg-light-background bg-custompattern"
    >

      {/* Text */}
        <div className='flex text-center justify-center'>    
          <h2 className="text-4xl font-bold
              bg-gradient-to-tl
              from-light-secondary
              to-light-accent/80
              bg-clip-text
              text-transparent"
          >
            About Me
          </h2>
        </div>  
        <div className="flex flex-row justify-center text-center">

          { /* Paragraph */}
          <div className='flex flex-col mt-6'>
            <div className='mt-1 dark:text-dark-primary text-light-primary'>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto px-2 text-left ">
                As a 
                <span className="dark:text-dark-secondary text-light-secondary"> front-end developer </span> 
                passionate about creating responsive, user-friendly web applications with modern tools like 
                <span className="dark:text-dark-secondary text-light-secondary"> HTML, CSS, JavaScript, React, </span> and 
                <span className="dark:text-dark-secondary text-light-secondary"> Tailwind. </span> 
                My understanding of back-end technologies, including 
                <span className="dark:text-dark-secondary text-light-secondary0"> Node.js </span> 
                and databases, enhances my ability to collaborate on full-stack projects.
              </p>
            </div>
            <div className="text-left px-2 mt-2 gap-2 leading-relaxed">
              <p className="text-lg dark:text-dark-primary text-light-primary">
                💻 <span className="text-white font-semibold">Specialties:</span> Front-end development, UI/UX integration
              </p>
              <p className="text-lg dark:text-dark-primary text-light-primary">
                🎯 <span className="text-white font-semibold">Passion:</span> Crafting clean, scalable code and engaging interfaces
              </p>
              <p className="text-lg dark:text-dark-primary text-light-primary">
                🚀 <span className="text-white font-semibold">Collaboration:</span> Excelling in team-oriented, innovative environments
              </p>
            </div>
          </div>
          
          {/* Photo */}
          <div className="items-center justify-center rounded-full overflow-hidden mt-6 shadow-dark-accent drop-shadow-lg md:block hidden 
                          w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
              style={{ filter: 'drop-shadow(4px 4px 6px rgb(38 218 138 / 0.8))' }}>
            <img
              src="src/assets/Photo.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-4">
          <a 
            href="#projects"
            download 
            className="px-3 py-2 font-medium border focus:ring-2
                       dark:focus:ring-dark-accent dark:bg-transparent dark:border-dark-accent/70 dark:text-dark-accent/70 dark:hover:bg-dark-accent/60 dark:hover:text-dark-primary 
                       focus:ring-light-accent bg-transparent border-light-secondary text-light-secondary hover:border-light-primary hover:bg-light-accent/80 hover:text-light-background
                       rounded-sm shadow-md"
          >
            Projects   
          </a>
          <a 
            href="#contact" 
            className="px-3 py-2 font-medium border focus:ring-2
                      dark:focus:ring-dark-accent dark:bg-dark-accent dark:border-dark-secondary dark:text-dark-background dark:hover:bg-dark-secondary/60 dark:hover:text-dark-primary 
                      focus:ring-light-accent bg-light-accent border-light-accent text-light-secondary hover:border-light-accent hover:bg-light-primary hover:text-light-additional
                      rounded-sm shadow-md"
          >
            Contact
          </a>
        </div>
      
    </section>
  );
};

export default About;
