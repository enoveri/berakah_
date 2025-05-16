import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for hero image - we'll replace with an actual image when you have one */}
        <div className="w-full h-full bg-gradient-to-r from-blue-900 to-purple-900"></div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          VISION
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
          We are an English-speaking, cell-based community church, celebrating Christ,
          growing and multiplying as each one reaches one; touching those around us with the
          love of Jesus, bringing healing to the cities and the nations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/leadership" className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
            LEADERSHIP
          </Link>
          <Link to="/online" className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
            ONLINE
          </Link>
          <Link to="/cell-family" className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
            CELL FAMILY
          </Link>
          <Link to="/locations" className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
            LOCATIONS
          </Link>
          <Link to="/generosity" className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
            GENEROSITY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
