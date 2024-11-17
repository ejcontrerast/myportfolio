import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="
      flex flex-col items-center justify-center sm:h-3/5 h-1/2
      px-5 sm:px-10 md:px-20 lg:px-30 xl:px-50 2xl:70 py-30 sm:py-20 md:py-20
      dark:bg-gradient-to-b dark:from-dark-secondary dark:to-dark-background
      bg-gradient-to-t from-[#c0e0e0] via-light-additional to-light-background"
    >
      <h2 className="text-4xl font-bold
        bg-gradient-to-t
            from-light-primary
            to-light-accent/80
        bg-clip-text
        text-transparent"
      >
        Skills
      </h2>
      <div className="flex flex-wrap justify-center mt-4 space-x-4">
        <span className="p-2 bg-gray-300 rounded">React</span>
        <span className="p-2 bg-gray-300 rounded">TypeScript</span>
        <span className="p-2 bg-gray-300 rounded">Tailwind CSS</span>
        {/* Add more skills here */}
      </div>
    </section>
  );
};

export default Skills;
