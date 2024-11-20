import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-custompattern dark:bg-dark-background bg-light-background"
    >
      <div
        className="flex flex-col items-center justify-center gap-1 
          shadow-inner shadow-[#26da8952] w-full py-3
          dark:bg-dark-background bg-light-primary dark:bg-opacity-60 bg-opacity-95 backdrop-blur-sm
          text-light-secondary dark:text-dark-primary"
      >
        <p className="text-sm md:text-base font-light italic text-light-additional">
          Thanks for scrolling!
        </p>

        <div className="flex justify-center gap-2">
          <a
        href="#top"
        aria-label="Back to top of the page"
        className="text-light-accent dark:text-dark-accent font-semibold 
              transition-transform transform hover:scale-110 hover:underline dark:hover:text-dark-secondary hover:text-light-primary"
          >
        Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
