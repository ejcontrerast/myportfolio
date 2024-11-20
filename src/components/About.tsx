import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-row items-center justify-center sm:h-1/2 h-screen w-auto
      px-5 sm:px-10 md:px-20 lg:px-30 xl:px-50 2xl:70 py-30 sm:py-20 md:py-20
      dark:bg-dark-background bg-light-background bg-custompattern"
    >

      {/* Text */}
      <div className="flex-initial text-center 
                      dark:text-dark-primary text-light-secondary">
        
        <h2 className="text-4xl font-bold
            bg-gradient-to-tl
            from-light-secondary
            to-light-accent/80
            bg-clip-text
            text-transparent"
        >
          About Me
        </h2>
        <div className="flex">

          { /* Paragraph */}
          <div className='mt-6'>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto px-2">
              I am a passionate and adaptable developer with a focus on creating modern, 
              user-friendly web applications that solve real-world problems. Leveraging 
              my background in <strong>computer information systems</strong>, I specialize in 
              both front-end and back-end development, bringing creative solutions to life.
            </p>
            <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto px-2">
              Beyond coding, I thrive in collaborative environments and am eager to contribute 
              to innovative projects that make a difference. My portfolio showcases my dedication 
              to clean code, performance optimization, and delivering exceptional user experiences.
            </p>
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
      </div>
    </section>
  );
};

export default About;
