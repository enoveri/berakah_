import React from 'react';
import { Link } from 'react-router-dom';
import { FaPrayingHands, FaHandHoldingHeart, FaPlay, FaHeadphones } from 'react-icons/fa';
import '../../styles/themes.css';
import '../../styles/containers.css';

const FeaturedEvents = () => {
  return (
    <section className="py-12 dreamy-bg border-t border-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Connect With Us</h2>
          <p className="text-xl max-w-3xl mx-auto text-white">
            Join our community and be part of what God is doing through International Great Faith Ministries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Prayer Requests & Testimonies */}
          <div className="bg-blue-500 rounded-xl shadow-lg overflow-hidden border border-blue-400">
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <FaPrayingHands className="text-blue-100 text-5xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-100 text-center">PRAYER REQUESTS & TESTIMONIES</h3>
              <div className="space-y-3">
                <Link
                  to="/prayer-requests"
                  className="block w-full px-4 py-3 bg-blue-700 text-white text-center rounded-md font-semibold text-lg shadow-md hover:bg-[#FFF8E6] hover:text-blue-800 transition-colors"
                >
                  SHARE PRAYER REQUESTS
                </Link>
                <Link
                  to="/prayer-requests"
                  onClick={() => localStorage.setItem('activeTab', 'testimony')}
                  className="block w-full px-4 py-3 bg-blue-700 text-white text-center rounded-md font-semibold text-lg shadow-md hover:bg-[#FFF8E6] hover:text-blue-800 transition-colors"
                >
                  SHARE YOUR TESTIMONY
                </Link>
              </div>
            </div>
          </div>

          {/* Current Teaching Series */}
          <div className="bg-blue-500 rounded-xl shadow-lg overflow-hidden border border-blue-400">
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <FaHandHoldingHeart className="text-blue-100 text-5xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-100 text-center">CURRENT TEACHING SERIES</h3>
              <div className="space-y-3">
                <Link
                  to="/teaching-series"
                  className="flex items-center justify-center w-full px-4 py-3 bg-blue-700 text-white text-center rounded-md font-semibold text-lg shadow-md hover:bg-[#FFF8E6] hover:text-blue-800 transition-colors"
                >
                  <FaPlay className="mr-2" /> WATCH THE VIDEO
                </Link>
                <Link
                  to="/teaching-series"
                  className="flex items-center justify-center w-full px-4 py-3 bg-blue-700 text-white text-center rounded-md font-semibold text-lg shadow-md hover:bg-[#FFF8E6] hover:text-blue-800 transition-colors"
                >
                  <FaHeadphones className="mr-2" /> LISTEN TO THE AUDIO
                </Link>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default FeaturedEvents;
