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
import supabase from '../assets/logos/supabase.svg';
import '../App.css';

type SkillProps = {
  name: string;
  icon: string;
};

const Skill: React.FC<SkillProps> = ({ name, icon }) => (
  <div className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 p-2">
    <img src={icon} alt={`${name} logo`} className="h-7 mb-2" />
    <span className="text-sm font-medium dark:text-dark-primary text-light-primary">{name}</span>
  </div>
);

const Skills: React.FC = () => {
  const skills: SkillProps[] = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'TypeScript', icon: tsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'TailwindCSS', icon: tailwindcssIcon },
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'VSCode', icon: vscodeIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Supabase', icon: supabase },
  ];

  const loopedSkills = Array(3).fill(skills).flat();

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-20 
      dark:bg-dark-background bg-light-background bg-custompattern overflow-hidden"
    >
      <div className="w-full">
        <div className="flex space-x-8 overflow-hidden group">
          <div className="flex animate-loop-scroll space-x-8 grayscale hover:grayscale-0 group-hover:paused">
            {loopedSkills.map((skill, index) => (
              <Skill key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
          <div className="flex animate-loop-scroll space-x-8 grayscale hover:grayscale-0 group-hover:paused" aria-hidden="true">
            {loopedSkills.map((skill, index) => (
              <Skill key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
