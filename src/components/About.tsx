import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="p-8 text-center">
      <div>
        {/* Photo */}
        <div className="w-40 h-40 mb-6 rounded-full overflow-hidden shadow-lg hidden sm:block">
          <img src="src\assets\Photo.png" className='w-full h-full object-cover'></img>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            I’m a developer dedicated to creating modern, user-friendly web applications...
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
