import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="p-8 text-center">
      <h2 className="text-3xl font-bold">Skills</h2>
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
