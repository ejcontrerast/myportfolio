// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">Ernesto's Portfolio</div>
      <div className="space-x-4">
        <Link to="hello" smooth={true} offset={-70} className="cursor-pointer">Home</Link>
        <Link to="about" smooth={true} offset={-70} className="cursor-pointer">About</Link>
        <Link to="skills" smooth={true} offset={-70} className="cursor-pointer">Skills</Link>
        <Link to="projects" smooth={true} offset={-70} className="cursor-pointer">Projects</Link>
        <Link to="blog" smooth={true} offset={-70} className="cursor-pointer">Blog</Link>
        <a href="mailto:your.email@example.com?subject=Hello!" className="cursor-pointer">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

