import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedEvents = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl overflow-hidden shadow-lg">
          <div className="md:flex">
            {/* Image/Content Side */}
            <div className="md:w-1/2 h-64 md:h-auto bg-gray-300 flex items-center justify-center">
              {/* This would be replaced with an actual image */}
              <span className="text-gray-700 font-medium">Featured Event Image</span>
            </div>
            
            {/* Text Content Side */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">SPECIAL CHURCH EVENT</h2>
              <div className="mb-6">
                <p className="text-xl font-medium">June 5th-11th, Mbale</p>
                <p className="text-xl font-medium">June 15th-18th, Kampala</p>
              </div>
              <Link 
                to="/events" 
                className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Prayer Requests & Testimonies */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">PRAYER REQUESTS & TESTIMONIES</h3>
              <div className="space-y-3">
                <a 
                  href="#"
                  className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  SHARE PRAYER REQUESTS
                </a>
                <a 
                  href="#"
                  className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  SHARE YOUR TESTIMONY
                </a>
              </div>
            </div>
          </div>
          
          {/* Current Teaching Series */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">CURRENT TEACHING SERIES</h3>
              <div className="space-y-3">
                <a 
                  href="#"
                  className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  WATCH THE VIDEO
                </a>
                <a 
                  href="#"
                  className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  LISTEN TO THE AUDIO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
