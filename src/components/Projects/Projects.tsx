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
      h-[480px] min-w-[300px] m-4 relative max-w-80
      backdrop-blur-lg shadow-md rounded-lg transform transition-transform hover:scale-105
    `}
  >
    {/* Image */}
    <div>
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover rounded-t flex justify-center"
      />
    </div>
    {/* Main Content */}
    <div className="m-3 h-56 max-w-[280px] ml-4">
        <div className="relative">
          <div className="flex flex-row items-center relative mt-2">
            {/* Title */}
            <h3 className="text-secondary text-xl font-semibold">
              {title}
            </h3>
          
          </div>
          {/* Description */}
          <p className="text-primary text-sm">
            {description}
          </p>
        </div>
      </div>

      <div className="flex relative ">
          {/* External Links */}
          <div className="inline-block absolute bottom-0 left-0 m-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent mt-2 inline-block hover:text-secondary"
            >
              <BiLinkExternal size={35} />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent mt-2 inline-block hover:text-secondary"
            >
              <BiLogoGithub size={35} />
            </a>
          </div>
        </div>
        {/* Frameworks */}
        <div className="flex flex-wrap gap-2 absolute bottom-0 right-0 m-5">
          {frameworks.map((framework) => {
            const IconComponent = frameworkIcons[framework];
            return IconComponent ? (
              <span key={framework} className="flex items-center text-secondary fill-secondary">
                <IconComponent className="mr-1" size={23} />
              </span>
            ) : (
              <span key={framework} className="text-xs">{framework}</span>
            );
          })}
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
      className={`${className} before:!text-accent hover:!text-secondary`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:!text-accent hover:!text-secondary`}
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
      <div className="w-auto h-2 mx-1 rounded-full bg-accent 
      hover:bg-secondary transition-colors duration-200" />
    ),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
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
      h-fit sm:h-5/6 2xl:px-35 shadow-md py-50
      bg-background bg-custompattern"
    >
      <div className="flex flex-col items-center justify-center">
        <h2
          className="main-titles mt-10"
        >
          Projects
        </h2>
        
        <div className="w-5/6">
          <Slider {...settings}>
            {projectData.map((project, id) => (
              <ProjectCard key={id} {...project} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;

