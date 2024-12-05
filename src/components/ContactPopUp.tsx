import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
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
        const formData = new FormData(event.currentTarget as unknown as HTMLFormElement);

        formData.append("access_key", "5fd85473-bd76-4bd4-94d4-b01ebd39f964");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data: { success: boolean; message: string } = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset();
            /* setTrigger(false); */
            toast.success( result , {
                position: 'bottom-left',
                autoClose: 3000,         
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,                                                          
                theme: 'dark',      
            });
        } else {
            console.log("Error", data);
            setResult(data.message);
            toast.error( result , {
                position: 'bottom-left',
                autoClose: 3000,         
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,                                                          
                theme: 'dark',      
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
          <div className="dark:bg-dark-background bg-light-background dark:text-dark-accent text-light-accent p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-primary mb-4">Let's work together!</h2>
            {/* Contact Form */}
            <form onSubmit={() => onSubmit} >
              <div className="mb-4">
                <label className="block font-medium dark:text-dark-primary text-light-secondary mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name='name'
                  className="w-full px-3 py-2 dark:bg-dark-additional bg-light-additional dark:text-dark-primary text-light-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name" 
                  required />
              </div>

              <div className="mb-4">
                <label className="block font-medium dark:text-dark-primary text-light-secondary mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name='email'
                  className="w-full px-3 py-2 dark:bg-dark-additional bg-light-additional dark:text-dark-primary text-light-secondary  rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email" 
                  required />
              </div>

              <div className="mb-4">
                <label className="block font-medium dark:text-dark-primary text-light-secondary mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name='message'
                  rows={4}
                  className="w-full px-3 py-2 dark:bg-dark-additional bg-light-additional dark:text-dark-primary text-light-secondary  rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Message" 
                  required />
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button 
                  type="button" 
                  /* onClick={() => setTrigger(false)}  */
                  className="dark:text-dark-secondary text-light-primary/90 hover:text-dark-accent hover:dark:text-dark-accent">
                  Close
                </button>
                <button 
                  type="submit" 
                  className="bg-primary dark:text-dark-primary text-light-secondary hover:text-dark-accent hover:dark:text-dark-accent px-4 py-2 rounded-md hover:bg-secondary">
                  Send
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
  ) : "";
}

export default ContactPopUp