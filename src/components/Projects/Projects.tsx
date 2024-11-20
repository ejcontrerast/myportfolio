import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { frameworkIcons } from "./frameworkIcons"; 
import { BiLogoGithub, BiLinkExternal } from "react-icons/bi";

// Import JSON and Types
import projectData from "./projects.json";

type Project = {
  title: string;
  description: string;
  image: string;
  frameworks: string[];
  link: string;
  github: string;
};

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  frameworks,
  link,
  github,
}) => (
  <div
    className={`
      h-auto m-2 relative max-w-80
      dark:bg-dark-additional/50 bg-light-background dark:bg-opacity-80 bg-opacity-90 
      backdrop-blur-lg shadow-md rounded-lg transform transition-transform hover:scale-100
    `}
  >
    {/* Image */}
    <div>
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover rounded flex justify-center"
      />
    </div>

    {/* Main Content */}
    <div className="m-3 h-56">
        <div className="relative">
          <div className="flex flex-row items-center relative mt-5 mb-3">
            {/* Title */}
            <h3 className="dark:text-dark-secondary text-light-primary text-xl font-semibold">
              {title}
            </h3>
            {/* Frameworks */}
            <div className="flex flex-wrap gap-2 absolute right-0">
              {frameworks.map((framework) => {
                const IconComponent = frameworkIcons[framework];
                return IconComponent ? (
                  <span key={framework} className="flex items-center dark:text-dark-primary text-light-secondary">
                    <IconComponent className="mr-1" size={20} />
                  </span>
                ) : (
                  <span key={framework} className="text-xs">{framework}</span>
                );
              })}
            </div>
          </div>
          {/* Description */}
          <p className="dark:text-dark-primary text-light-secondary mt-2">
            {description}
          </p>

      </div>

      {/* External Links */}
      <div className="inline-block absolute bottom-0 left-0 m-3">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark-accent mt-2 inline-block hover:text-dark-secondary"
        >
          <BiLinkExternal size={35} />
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark-accent mt-2 inline-block hover:text-dark-secondary"
        >
          <BiLogoGithub size={35} />
        </a>
      </div>
    </div>
  </div>
);

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:!text-dark-accent hover:!text-dark-secondary`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:!text-dark-accent hover:!text-dark-secondary`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Projects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots custom-dots",
    appendDots: (dots: any) => (
      <div>
        <ul className="!bottom-[-35px]"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-auto h-2 mx-1 rounded-full bg-dark-accent 
      hover:bg-dark-secondary transition-colors duration-200" />
    ),
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }

  return (
    <section
      id="projects"
      className=" 
      h-4/6 2xl:px-35 shadow-md
      dark:bg-dark-background bg-light-background bg-custompattern"
    >
      <div className="flex flex-col items-center justify-center">
        <h2
          className="text-4xl font-bold mb-3
          bg-gradient-to-tl from-light-secondary to-light-accent/80
          bg-clip-text text-transparent"
        >
          Projects
        </h2>
        
        <div className="w-5/6">
          <Slider {...settings}>
            {projectData.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;

