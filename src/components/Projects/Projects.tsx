import React, { useState } from "react";
import projectData from "./projects.json";
import { frameworkIcons } from "./frameworkIcons"; // Import the icon map
import {BiLogoGithub} from "react-icons/bi"
import {BiLinkExternal} from "react-icons/bi"

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProjects = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  React.useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - visibleProjects : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleProjects >= projectData.length ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          aria-label="Previous projects"
          className="absolute left-0 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
        >
          &lt;
        </button>
        <div className="flex overflow-hidden space-x-4 w-full">
          {projectData
            .slice(currentIndex, currentIndex + visibleProjects)
            .map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 min-w-1/3 justify-center items-center bg-white shadow-lg rounded-lg p-4 transform transition-transform hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(project.frameworks ?? []).map((framework, idx) => {
                    const IconComponent = frameworkIcons[framework];
                    return IconComponent ? (
                      <span
                        key={idx}
                        className="flex items-center bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                      >
                        <IconComponent className="mr-1" size={20}/>
                      </span>
                    ) : (
                      <span key={idx} className="text-xs">{framework}</span>
                    );
                  })}
                </div>
                <div className="flex flex-row w-full h-10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mt-4 inline-block hover:underline"
                  >
                    <BiLinkExternal className=" text-gray-800" size={35}/>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mt-4 inline-block hover:underline"
                  >
                    <BiLogoGithub className="  text-gray-800" size={35}/>
                  </a>
                </div>
              </div>
            ))}
        </div>
        <button
          onClick={handleNext}
          aria-label="Next projects"
          className="absolute right-0 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
        >
          &gt;
        </button>
      </div>
      <div className="text-center mt-4">
        <span>
          {Math.ceil((currentIndex + 1) / visibleProjects)}/
          {Math.ceil(projectData.length / visibleProjects)}
        </span>
      </div>
    </section>
  );
};

export default Projects;
