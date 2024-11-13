// src/components/Blog.tsx
import React from 'react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="p-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">Blog</h2>
      <p className="mt-4">Here are some articles and thoughts on tech and development.</p>
      <div className="mt-4 flex flex-col items-center">
        <div className="p-4 m-2 bg-white shadow-md rounded w-3/4 md:w-1/2">
          <h3 className="text-xl font-semibold">My First Blog Post</h3>
          <p className="mt-2">A quick look at my journey into software development...</p>
        </div>
        {/* Add more blog post components as needed */}
      </div>
    </section>
  );
};

export default Blog;

