import React from 'react';
import ContactPopUp from './ContactPopUp';
import { FaGithubSquare , FaLinkedin } from 'react-icons/fa';
import { FaSquareEnvelope } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Contact: React.FC = () => {
  const [trigger, setTrigger] = React.useState(false);

  return (
    <section
      id="contact"
      className="h-4/5 sm:h-5/6 md:h-1/2 lg:1/3 p-8 flex flex-col justify-center items-center
       bg-background bg-custompattern"
    >
      <h2 className="main-titles text-center">
      Let's work together!
      </h2>
      <p className="mt-4 text-lg text-primary">
        Contact me:
      </p>

      <div className="mt-6 flex justify-center gap-6">
      <Tooltip id="my-tooltip" />
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Send me an email"
          href="mailto:ejcontrerast@outlook.com"
          aria-label="Send me an email"
          className="btns transition-transform transform hover:scale-110"
        >
          <FaSquareEnvelope size={30} />
        </a>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="My GitHub Profile"
          href="https://github.com/ejcontrerast"
          aria-label="Visit my GitHub profile"
          className="btns transition-transform transform hover:scale-110"
        >
          <FaGithubSquare size={30} />
        </a>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="My LinkedIn Profile"
          href="www.linkedin.com/in/ejcontrerast"
          aria-label="Visit my LinkedIn profile"
          className="btns transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={30} />
        </a>
        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Contact Form"
          onClick={() => setTrigger(true)}
          aria-label="Contact Form"
          className="btns mb-1 transition-transform transform hover:scale-110"
        >
          <SiImessage size={28} />
        </button>
      </div>
      <ContactPopUp trigger={trigger} setTrigger={setTrigger}/>
        <ToastContainer 
           toastClassName={() => 
            "bg-background text-primary border-accent shadow-sm p-4 relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
          }
        />
    </section>
  );
};

export default Contact;
