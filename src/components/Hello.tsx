// src/components/Hello.tsx
import React from 'react';

const Hello: React.FC = () => {
  return (
    <section id="hello" className="flex flex-col items-center justify-center h-screen text-center p-8">
      <h1 className="text-4xl font-bold">Hello! Welcome to my portfolio!</h1>
      <p className="text-lg mt-4">I'm Ernesto, a developer passionate about building web applications with React and TypeScript.</p>
    </section>
  );
};

export default Hello;
