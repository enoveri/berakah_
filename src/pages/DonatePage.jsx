import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHandHoldingHeart,
  FaChild,
  FaHospital,
  FaGraduationCap,
  FaUsers,
  FaHeart,
  FaPrayingHands,
  FaChurch,
  FaHandsHelping
} from 'react-icons/fa';

const DonatePage = () => {
  return (
    <div className="dark-blue-bg py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold dark-blue-text-light mb-2 text-center">Ways to Give</h1>
          <p className="text-xl dark-blue-text-light mb-12 text-center">
            Support our work and help us make a difference
          </p>

          {/* Introduction */}
          <div className="dark-blue-section mb-12">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <FaHandHoldingHeart className="dark-blue-icon-highlight" style={{ fontSize: '4rem' }} />
              </div>
              <h2 className="text-2xl font-bold dark-blue-heading mb-4 text-center">Generosity</h2>
              <p className="dark-blue-text mb-6 text-center">
                "You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God."
              </p>
              <p className="dark-blue-text mb-6 text-center italic">2 Corinthians 9:11</p>
              <div className="flex justify-center">
                <Link
                  to="/sponsor-child"
                  className="dark-blue-button dark-blue-button-orange px-8 py-4 rounded-md font-bold transition-all transform hover:scale-105"
                >
                  GIVE BY CARD
                </Link>
              </div>
            </div>
          </div>

          {/* Introduction with Colorful Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="dark-blue-card p-6 transform transition-all duration-300 hover:scale-105 group">
              <div className="mb-4 flex justify-center transform transition-transform duration-300 group-hover:scale-110 icon-container">
                <div className="dark-blue-icon-highlight" style={{ fontSize: '2.5rem' }}>
                  <FaHeart className="dark-blue-icon-highlight" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center dark-blue-heading transform transition-all duration-300 group-hover:scale-110">Reach Lives</h3>
              <p className="mb-4 text-center dark-blue-text transition-all duration-300">
                Your donations help us reach thousands of lives with the love of God and provide care for orphaned and vulnerable children.
              </p>
            </div>

            <div className="dark-blue-card p-6 transform transition-all duration-300 hover:scale-105 group">
              <div className="mb-4 flex justify-center transform transition-transform duration-300 group-hover:scale-110 icon-container">
                <div className="dark-blue-icon-highlight" style={{ fontSize: '2.5rem' }}>
                  <FaPrayingHands className="dark-blue-icon-highlight" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center dark-blue-heading transform transition-all duration-300 group-hover:scale-110">Share the Gospel</h3>
              <p className="mb-4 text-center dark-blue-text transition-all duration-300">
                Your generosity enables us to share the Gospel in rural communities and give hope to those who need it most.
              </p>
            </div>

            <div className="dark-blue-card p-6 transform transition-all duration-300 hover:scale-105 group">
              <div className="mb-4 flex justify-center transform transition-transform duration-300 group-hover:scale-110 icon-container">
                <div className="dark-blue-icon-highlight" style={{ fontSize: '2.5rem' }}>
                  <FaHandsHelping className="dark-blue-icon-highlight" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center dark-blue-heading transform transition-all duration-300 group-hover:scale-110">Good Stewardship</h3>
              <p className="mb-4 text-center dark-blue-text transition-all duration-300">
                We are committed to being good stewards of every gift, ensuring resources advance God's Kingdom effectively.
              </p>
            </div>
          </div>

          {/* Donation Options */}
          <h2 className="text-3xl font-bold dark-blue-heading mb-8 text-center">Ways to Give</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Sponsor a Child */}
            <div className="dark-blue-card p-6 transform transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-4">
                <div className="mr-4 dark-blue-icon-highlight" style={{ fontSize: '2rem' }}>
                  <FaChild className="dark-blue-icon-highlight" />
                </div>
                <h3 className="text-xl font-bold dark-blue-heading">Sponsor a Child</h3>
              </div>
              <p className="mb-4 dark-blue-text">
                Make a lasting impact by sponsoring a child at Berakhah Childcare. Your monthly donation provides
                education, healthcare, nutrition, and a loving environment.
              </p>
              <div className="bg-white p-3 rounded-md mb-4 transition-all duration-300 group-hover:bg-gray-100 border border-gray-200">
                <p className="font-bold mb-2 text-lg text-black">Sponsorship Options:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-800">
                  <li className="font-medium">$20/month - Basic needs and education</li>
                  <li className="font-medium">$50/month - Comprehensive care package</li>
                  <li className="font-medium">$100/month - Premium support with additional benefits</li>
                </ul>
              </div>
              <Link
                to="/sponsor-child"
                className="dark-blue-button dark-blue-button-orange block w-full text-center px-4 py-2 rounded-md font-bold transition-all duration-300 hover:scale-105 transform"
              >
                SPONSOR A CHILD
              </Link>
            </div>

            {/* Ministry Needs */}
            <div className="dark-blue-card p-6 transform transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-4">
                <div className="mr-4 dark-blue-icon-highlight" style={{ fontSize: '2rem' }}>
                  <FaHandHoldingHeart className="dark-blue-icon-highlight" />
                </div>
                <h3 className="text-xl font-bold dark-blue-heading">Ministry Needs</h3>
              </div>
              <p className="mb-4 dark-blue-text">
                Support our various ministry initiatives and help us reach more people with the Gospel and humanitarian aid.
              </p>
              <div className="bg-white p-3 rounded-md mb-4 transition-all duration-300 group-hover:bg-gray-100 border border-gray-200">
                <p className="font-bold mb-2 text-lg text-black">Current Needs:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-800">
                  <li className="font-medium">Medical supplies for outreach programs</li>
                  <li className="font-medium">Food and clothing for vulnerable communities</li>
                  <li className="font-medium">Educational materials for children</li>
                  <li className="font-medium">Evangelism resources</li>
                </ul>
              </div>
              <Link
                to="/ministry-needs"
                className="dark-blue-button dark-blue-button-orange block w-full text-center px-4 py-2 rounded-md font-bold transition-all duration-300 hover:scale-105 transform"
              >
                SUPPORT MINISTRY NEEDS
              </Link>
            </div>
          </div>

          {/* Other Ways to Give */}
          <h2 className="text-3xl font-bold dark-blue-heading mb-8 text-center">Other Ways to Support</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="dark-blue-card p-6 transform transition-all duration-300 hover:scale-105 group">
              <div className="mb-4 flex justify-center transform transition-transform duration-300 group-hover:scale-110 icon-container">
                <div className="dark-blue-icon-highlight" style={{ fontSize: '2.5rem' }}>
                  <FaHospital className="dark-blue-icon-highlight" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center dark-blue-heading transform transition-all duration-300 group-hover:scale-110">Medical Outreach</h3>
              <p className="mb-4 text-center dark-blue-text transition-all duration-300">
                Support our medical outreach programs providing healthcare to rural communities.
              </p>
            </div>

            <div className="dark-blue-card p-6 transform transition-all duration-300 hover:scale-105 group">
              <div className="mb-4 flex justify-center transform transition-transform duration-300 group-hover:scale-110 icon-container">
                <div className="dark-blue-icon-highlight" style={{ fontSize: '2.5rem' }}>
                  <FaGraduationCap className="dark-blue-icon-highlight" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center dark-blue-heading transform transition-all duration-300 group-hover:scale-110">Education Support</h3>
              <p className="mb-4 text-center dark-blue-text transition-all duration-300">
                Help provide educational resources and scholarships for children in need.
              </p>
            </div>

            <div className="dark-blue-card p-6 transform transition-all duration-300 hover:scale-105 group">
              <div className="mb-4 flex justify-center transform transition-transform duration-300 group-hover:scale-110 icon-container">
                <div className="dark-blue-icon-highlight" style={{ fontSize: '2.5rem' }}>
                  <FaUsers className="dark-blue-icon-highlight" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center dark-blue-heading transform transition-all duration-300 group-hover:scale-110">Community Development</h3>
              <p className="mb-4 text-center dark-blue-text transition-all duration-300">
                Help us build stronger communities through various development initiatives.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="dark-blue-section">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 dark-blue-heading">Have Questions About Giving?</h2>
              <p className="mb-6 dark-blue-text">
                If you have any questions about donating or would like more information about how your
                contributions are being used, please don't hesitate to contact us.
              </p>
              <Link
                to="/contact"
                className="dark-blue-button dark-blue-button-orange inline-block px-6 py-3 rounded-md font-bold transition-all"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
