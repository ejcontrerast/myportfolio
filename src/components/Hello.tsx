// src/components/Hello.tsx
import React from 'react';
import {motion} from 'framer-motion';

const Hello: React.FC = () => {
  return (
    <section id="hello" className="flex items-center justify-center text-center 
    h-screen sm:h-4/5 lg:h-4/6 px-5 gap-10
    dark:bg-dark-background bg-light-background bg-custompattern">
      {/* Text + buttons */}
      <div className='flex flex-col gap-6 py-6 mt-20'>

        {/* Text */}
        <div className='dark:text-dark-primary text-light-primary'>
          <h1 className="main-titles"
          >
            <span className="text-light-primary text-xl break-before-auto block">
              Hello! 
            </span>
            Welcome to my portfolio!
          </h1>
          <p className="text-lg dark:text-dark-primary text-light-secondary px-2 sm:px-6 md:px-20 lg:px-52 2xl:px-96">
            <p>
              Am excited to share my journey in web development, and data analytics with you. Take a look around to discover my projects, skills, and vision for creating technology solutions.
            </p>
            Thanks for stopping by!
          </p>
        </div>

        {/* Button Resume*/}
        <div className="flex items-center justify-center space-x-4 ">
          <motion.button
            onClick={() => window.open("https://resume-seven-wine.vercel.app/")}
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
            Resume   
            </text>
            <span
             className="block absolute inset-0 rounded-md p-px linear-overlay"
             />
          </motion.button>

          {/* Button Projects*/}
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
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
            >Projects</text>
            <span
             className="block absolute inset-0 rounded-md p-px linear-overlay"
             />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hello;
