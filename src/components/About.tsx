import React from 'react';
import Skills from './Skills';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="h-screen w-auto
      px-5 sm:px-10 md:px-20 lg:px-30 xl:px-50 2xl:70 py-30 sm:py-20 md:py-20
      dark:bg-dark-background bg-light-background bg-custompattern"
    >

      {/* Text */}
          <div className='flex text-center justify-center'>    
            <h2 className="main-titles mt-14"
            >
              About Me
            </h2>
          </div>  
          <div className="flex flex-row justify-center text-center">

            { /* Paragraph */}
            <div className='flex flex-col mt-6'>
              <div className='mt-1 dark:text-dark-primary text-light-secondary'>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto px-2 text-left ">
                  As a 
                  <span className="dark:text-dark-secondary text-light-primary font-semibold"> front-end developer </span> 
                  passionate about creating responsive, user-friendly web applications with modern tools like 
                  <span className="dark:text-dark-secondary text-light-primary font-semibold"> HTML, CSS, JavaScript, React, </span> and 
                  <span className="dark:text-dark-secondary text-light-primary font-semibold"> Tailwind, </span> 
                  I bring an understanding of back-end technologies, including 
                  <span className="dark:text-dark-secondary text-light-primary font-semibold"> Node.js </span> 
                  and databases, which enhances my ability to contribute effectively on full-stack projects.
                </p>
              </div>
              <div className="text-left px-2 mt-2 gap-2 leading-relaxed">
                <p className="text-lg dark:text-dark-primary text-light-secondary">
                  💻 <span className="dark:text-dark-primary text-light-secondary font-semibold">Specialties:</span> Front-end development, UI/UX integration
                </p>
                <p className="text-lg dark:text-dark-primary text-light-secondary">
                  🎯 <span className="dark:text-dark-primary text-light-secondary font-semibold">Passion:</span> Crafting clean, scalable code and engaging interfaces
                </p>
                <p className="text-lg dark:text-dark-primary text-light-secondary">
                  🚀 <span className="dark:text-dark-primary text-light-secondary font-semibold">Collaboration:</span> Excelling in team-oriented, innovative environments
                </p>
              </div>
            </div>
            
            {/* Photo */}
            <div className="items-center justify-center rounded-full overflow-hidden mt-6 shadow-dark-accent drop-shadow-lg md:block hidden 
                            w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
                style={{ filter: 'drop-shadow(4px 4px 6px rgb(38 218 138 / 0.8))' }}>
              <img
                src="/static/images/Photo.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
                initial={{"--x": "100%", scale: 1}}
                animate={{"--x": "-100%"}}
                whileTap={{scale: 0.97}}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  repearDelay: 1,
                  type: "spring",
                  stiffness: 20,
                  damping: 15,
                  mass: 2,
                  scale:{
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1
                  }
                }}
              >
              <text 
              className="btn-primary-text"
              >
                Projects   
              </text>
              <span
                className="block absolute inset-0 rounded-md p-px linear-overlay"
              />
          </motion.button>
          
          <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
                initial={{"--x": "100%", scale: 1}}
                animate={{"--x": "-100%"}}
                whileTap={{scale: 0.97}}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  repearDelay: 1,
                  type: "spring",
                  stiffness: 20,
                  damping: 15,
                  mass: 2,
                  scale:{
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1
                  }
                }}
            >
              <text 
                className="btn-secondary-text"
              >
                Contact
              </text>
              <span
                className="block absolute inset-0 rounded-md p-px linear-overlay"
                />
            </motion.button>
          </div>
        <Skills />
    </section>
  );
};

export default About;
