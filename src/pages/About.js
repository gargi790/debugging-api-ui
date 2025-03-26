import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">About This App</h1>
      <p className="text-lg text-gray-300 mb-6">This is a debugging API UI project.</p>
      
      <Link to="/">
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default About;
