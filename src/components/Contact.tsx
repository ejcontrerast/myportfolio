import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="h-1/3 p-8 flex flex-col justify-center items-center
       bg-light-background dark:bg-dark-background bg-custompattern"
    >
      <h2 className="main-titles">
        Contact
      </h2>
      <p className="mt-4 text-lg text-light-secondary dark:text-dark-primary">
        Let's work together!
      </p>

      <div className="mt-6 flex justify-center gap-6">
        <a
          href="mailto:ejcontrerast@outlook.com"
          aria-label="Send me an email"
          className="btns transition-transform transform hover:scale-110"
        >
          <FaEnvelope size={30} />
        </a>
        <a
          href="https://github.com/ejcontrerast"
          aria-label="Visit my GitHub profile"
          className="btns transition-transform transform hover:scale-110"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="www.linkedin.com/in/ejcontrerast"
          aria-label="Visit my LinkedIn profile"
          className="btns transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
