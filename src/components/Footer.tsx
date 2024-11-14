import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Ernesto's Portfolio</p>
    </footer>
  );
};

export default Footer;
