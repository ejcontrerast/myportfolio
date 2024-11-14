// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-8 text-center">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-4">Feel free to reach out via <a href="mailto:your.email@example.com" className="text-blue-500 underline">email</a>.</p>
    </section>
  );
};

export default Contact;
