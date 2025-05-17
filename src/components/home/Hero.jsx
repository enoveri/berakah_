import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509099652299-30938b0aeb63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
          }}
        ></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-20">
        <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-2">
          LOVING GOD.
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-green-500 mb-2">
          LOVING PEOPLE...
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-blue-500 mb-6">
          CHANGING LIVES...
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl">
          IGFM brings the love of God and the gospel of our Lord and savior Jesus Christ by
          serving people's spiritual and physical needs.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/sponsor" className="px-8 py-4 bg-blue-600 text-white text-xl rounded-md font-medium hover:bg-blue-700 transition-colors">
            SPONSOR
          </Link>
          <Link to="/donate" className="px-8 py-4 bg-green-600 text-white text-xl rounded-md font-medium hover:bg-green-700 transition-colors">
            DONATE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
