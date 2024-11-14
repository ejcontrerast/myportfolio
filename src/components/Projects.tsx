import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-8 text-center">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="flex flex-wrap justify-center mt-4">
        <div className="p-4 m-2 bg-gray-200 rounded w-64">Project 1</div>
        <div className="p-4 m-2 bg-gray-200 rounded w-64">Project 2</div>
        {/* Add more projects here */}
      </div>
    </section>
  );
};

export default Projects;
