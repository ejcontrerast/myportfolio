import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-900 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Ernesto's Portfolio</p>
    </footer>
  );
};

export default Footer;
