import React from 'react';
import htmlIcon from '../assets/logos/html.svg';
import cssIcon from '../assets/logos/css.svg';
import jsIcon from '../assets/logos/javascript.svg';
import tsIcon from '../assets/logos/typescript.svg';
import reactIcon from '../assets/logos/react.svg';
import tailwindcssIcon from '../assets/logos/tailwindcss.svg';
import javaIcon from '../assets/logos/java.svg';
import pythonIcon from '../assets/logos/python.svg';
import nodejsIcon from '../assets/logos/nodejs.svg';
import mongodbIcon from '../assets/logos/mongodb.svg';
import gitIcon from '../assets/logos/git.svg';
import githubIcon from '../assets/logos/github.svg';
import figmaIcon from '../assets/logos/figma.svg';
import vscodeIcon from '../assets/logos/vscode.svg';

type SkillProps = {
  name: string;
  icon: string; // Use the string type for img src
};

type SkillCategory = {
  category: string;
  skills: SkillProps[];
};

const Skill: React.FC<SkillProps> = ({ name, icon }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-transparent shadow-lg rounded-lg transition-transform transform hover:scale-110">
    <img src={icon} alt={`${name} logo`} className="w-12 h-12 mb-2" />
    <span className="text-sm font-medium dark:text-dark-primary text-light-primary">{name}</span>
  </div>
);

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'TypeScript', icon: tsIcon },
        { name: 'React', icon: reactIcon },
        { name: 'TailwindCSS', icon: tailwindcssIcon },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: nodejsIcon },
        { name: 'Java', icon: javaIcon },
        { name: 'Python', icon: pythonIcon },
        { name: 'MongoDB', icon: mongodbIcon },
      ],
    },
    {
      category: 'Tools and Frameworks',
      skills: [
        { name: 'VS Code', icon: vscodeIcon },
        { name: 'Figma', icon: figmaIcon },
      ],
    },
    {
      category: 'Version Control',
      skills: [
        { name: 'Git', icon: gitIcon },
        { name: 'GitHub', icon: githubIcon },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-20 
      dark:bg-gradient-to-t dark:from-dark-background dark:to-dark-secondary
      bg-gradient-to-b from-[#c0e0e0] via-light-additional to-light-background"
    >
      <h2
        className="text-4xl font-extrabold text-center  mb-6
        bg-gradient-to-tl outline-2
        from-light-primary/20
        to-light-accent
        bg-clip-text
        text-transparent"
      >
        Skills
      </h2>

      <div className="space-y-12 max-w-6xl w-full">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h3 className="text-2xl font-semibold text-center 
            text-light-primary dark:text-dark-accent mb-6">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.skills.map((skill) => (
                <Skill key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
