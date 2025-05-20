import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaChild, FaHospital, FaGraduationCap, FaUsers } from 'react-icons/fa';

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-2 text-center">Donate</h1>
          <p className="text-xl text-blue-600 mb-12 text-center">
            Support our ministry and make a difference
          </p>

          {/* Introduction */}
          <div className="bg-blue-500 rounded-xl shadow-md overflow-hidden mb-12 glow-container">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <FaHandHoldingHeart className="text-white text-6xl" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Your Gift Makes a Difference</h2>
              <p className="text-white mb-6">
                At International Great Faith Ministries, your donations help us reach thousands of lives with the love of God
                and provide care for orphaned and vulnerable children through our various initiatives.
              </p>
              <p className="text-white mb-6">
                Your generosity enables us to share the Gospel in rural communities, provide medical supplies,
                offer humanitarian aid, and give hope to those who need it most.
              </p>
              <p className="text-white">
                We are committed to being good stewards of every gift, ensuring that resources are used
                effectively to advance God's Kingdom and bring glory to His name.
              </p>
            </div>
          </div>

          {/* Scripture */}
          <div className="bg-blue-500 rounded-xl shadow-md overflow-hidden mb-12 glow-container">
            <div className="p-8 text-center">
              <p className="text-xl italic mb-4 text-white font-medium">
                "Each of you should give what you have decided in your heart to give, not reluctantly
                or under compulsion, for God loves a cheerful giver."
              </p>
              <p className="font-bold text-white">2 Corinthians 9:7</p>
            </div>
          </div>

          {/* Donation Options */}
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Ways to Give</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Sponsor a Child */}
            <div className="bg-blue-500 rounded-xl shadow-md overflow-hidden glow-container donate-container">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-white">
                    <FaChild className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Sponsor a Child</h3>
                </div>
                <p className="text-white mb-4">
                  Make a lasting impact by sponsoring a child at Berakhah Childcare. Your monthly donation provides
                  education, healthcare, nutrition, and a loving environment.
                </p>
                <div className="bg-blue-600 p-4 rounded-md mb-4 border border-blue-300">
                  <p className="font-medium text-white mb-2">Sponsorship Options:</p>
                  <ul className="list-disc pl-5 text-white space-y-1">
                    <li>$20/month - Basic needs and education</li>
                    <li>$50/month - Comprehensive care package</li>
                    <li>$100/month - Premium support with additional benefits</li>
                  </ul>
                </div>
                <Link
                  to="/sponsor-child"
                  className="inline-block w-full text-center px-6 py-3 bg-blue-700 text-white rounded-md font-bold hover:bg-blue-800 transition-colors border-2 border-blue-300"
                >
                  SPONSOR A CHILD
                </Link>
              </div>
            </div>

            {/* Ministry Needs */}
            <div className="bg-blue-500 rounded-xl shadow-md overflow-hidden glow-container donate-container">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-white">
                    <FaHandHoldingHeart className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Ministry Needs</h3>
                </div>
                <p className="text-white mb-4">
                  Support our various ministry initiatives and help us reach more people with the Gospel and humanitarian aid.
                </p>
                <div className="bg-blue-600 p-4 rounded-md mb-4 border border-blue-300">
                  <p className="font-medium text-white mb-2">Current Needs:</p>
                  <ul className="list-disc pl-5 text-white space-y-1">
                    <li>Medical supplies for outreach programs</li>
                    <li>Food and clothing for vulnerable communities</li>
                    <li>Educational materials for children</li>
                    <li>Evangelism resources</li>
                  </ul>
                </div>
                <Link
                  to="/ministry-needs"
                  className="inline-block w-full text-center px-6 py-3 bg-blue-700 text-white rounded-md font-bold hover:bg-blue-800 transition-colors border-2 border-blue-300"
                >
                  SUPPORT MINISTRY NEEDS
                </Link>
              </div>
            </div>
          </div>

          {/* Other Ways to Give */}
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Other Ways to Support</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-500 rounded-lg p-6 shadow-md glow-container donate-container animate">
              <div className="text-white mb-4 flex justify-center">
                <FaHospital size={40} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Medical Outreach</h3>
              <p className="text-white text-center">
                Support our medical outreach programs providing healthcare to rural communities.
              </p>
            </div>

            <div className="bg-blue-500 rounded-lg p-6 shadow-md glow-container donate-container animate">
              <div className="text-white mb-4 flex justify-center">
                <FaGraduationCap size={40} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Education Support</h3>
              <p className="text-white text-center">
                Help provide educational resources and scholarships for children in need.
              </p>
            </div>

            <div className="bg-blue-500 rounded-lg p-6 shadow-md glow-container donate-container animate">
              <div className="text-white mb-4 flex justify-center">
                <FaUsers size={40} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Community Development</h3>
              <p className="text-white text-center">
                Help us build stronger communities through various development initiatives.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-500 rounded-xl shadow-md overflow-hidden glow-container">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Have Questions About Giving?</h2>
              <p className="mb-6 text-white">
                If you have any questions about donating or would like more information about how your
                contributions are being used, please don't hesitate to contact us.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-blue-700 text-white rounded-md font-bold hover:bg-blue-800 transition-colors shadow-md border-2 border-blue-300"
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
