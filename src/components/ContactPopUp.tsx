import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    trigger: boolean;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
    }

function ContactPopUp({trigger, setTrigger}: Props  ) {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);
    
        formData.append("access_key", "5fd85473-bd76-4bd4-94d4-b01ebd39f964");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          (event.target as HTMLFormElement).reset();
            toast.success("Form Submitted Successfully", {
                position: "bottom-right"
                });
          setTrigger(false);
        } else {
          console.log("Error", data);
          setResult(data.message);
          toast.success("Error", {
            position: "bottom-right"
        });
        }
    };

    return (trigger) ? (
    


    <div className="fixed inset-0 
                    flex items-center justify-center 
                    w-full h
                    bg-gray-800 
                    bg-opacity-50 z-50
                    ">
          <div className="bg-background text-accent p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-secondary mb-4">Let's work together!</h2>
            {/* Contact Form */}
            <form onSubmit={onSubmit} className='outline-accent caret-accent'>
              <div className="mb-4">
                <label className="block font-medium text-primary mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name='name'
                  className="w-full px-3 py-2 bg-additional text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name" 
                  required />
              </div>

              <div className="mb-4">
                <label className="block font-medium text-primary mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name='email'
                  className="w-full px-3 py-2 bg-additional text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email" 
                  required />
              </div>

              <div className="mb-4">
                <label className="block font-medium text-primary mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name='message'
                  rows={4}
                  className="w-full px-3 py-2 bg-additional text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Message" 
                  required />
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button 
                  type="button" 
                  onClick={() => setTrigger(false)}
                  className="text-secondary hover:text-accent">
                  Close
                </button>
                <button 
                  type="submit" 
                  className="text-primary hover:text-accent px-4 py-2 rounded-md hover:bg-secondary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
  ) : "";
}

export default ContactPopUp