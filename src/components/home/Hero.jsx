import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden leaf-bg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509099652299-30938b0aeb63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-20">
        <div className="bg-blue-100 bg-opacity-90 py-10 px-6 rounded-lg shadow-lg max-w-5xl mx-auto border border-blue-300 glow-blue">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-3">
            LOVING GOD.
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-3">
            LOVING PEOPLE...
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6">
            CHANGING LIVES...
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 mb-6 max-w-4xl mx-auto">
            IGFM brings the love of God and the gospel of our Lord and savior Jesus Christ by
            serving people's spiritual and physical needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <Link to="/sponsor" className="leaf-button px-12 py-5 bg-blue-700 text-white text-2xl rounded-md font-bold hover:bg-blue-800 transition-colors shadow-xl border-2 border-white transform hover:scale-105">
            SPONSOR
          </Link>
          <Link to="/donate" className="leaf-button px-12 py-5 bg-blue-600 text-white text-2xl rounded-md font-bold hover:bg-blue-700 transition-colors shadow-xl border-2 border-white transform hover:scale-105">
            DONATE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
