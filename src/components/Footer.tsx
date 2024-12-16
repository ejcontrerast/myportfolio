import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-custompattern bg-background"
    >
      <div
        className="flex flex-col items-center justify-center gap-1 
          shadow-inner shadow-[#26da8952] w-full py-3
          bg-background bg-opacity-60 backdrop-blur-sm
          text-secondary"
      >
        <p className="text-sm md:text-base font-light italic text-primary">
          Thanks for scrolling!
        </p>

        <div className="flex justify-center gap-2">
          <a
        href="#top"
        aria-label="Back to top of the page"
        className="text-accent font-semibold 
              transition-transform transform hover:scale-110 hover:underline hover:text-secondary"
          >
        Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
