// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import About from './components/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (

    <div className="h-screen bg-[#22323c] flex-col items-center justify-center">
      <Navbar />
      <Hello />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
