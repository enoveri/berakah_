import React from 'react';
import { FaHandHoldingHeart, FaMobileAlt, FaMoneyBillWave, FaCreditCard, FaGlobe } from 'react-icons/fa';

const GenerosityPage = () => {
  // Sample giving options
  const givingOptions = [
    {
      id: 1,
      title: 'Mobile Money',
      description: 'Send your offering or tithe via Mobile Money to our church account.',
      icon: <FaMobileAlt className="text-3xl" />,
      details: [
        'Account Name: Berakah Church',
        'Phone Number: +256 700 000000',
        'Reference: Your Name + Purpose (e.g., "John Doe - Tithe")'
      ]
    },
    {
      id: 2,
      title: 'Bank Transfer',
      description: 'Make a direct bank transfer to our church account.',
      icon: <FaMoneyBillWave className="text-3xl" />,
      details: [
        'Bank Name: Example Bank',
        'Account Name: Berakah Church',
        'Account Number: 1234567890',
        'Reference: Your Name + Purpose (e.g., "John Doe - Offering")'
      ]
    },
    {
      id: 3,
      title: 'Credit Card',
      description: 'Give securely online using your credit or debit card.',
      icon: <FaCreditCard className="text-3xl" />,
      details: [
        'Secure online payment system',
        'One-time or recurring giving options',
        'Receipt sent directly to your email'
      ]
    },
    {
      id: 4,
      title: 'International Giving',
      description: 'Support our mission from anywhere in the world.',
      icon: <FaGlobe className="text-3xl" />,
      details: [
        'Visit our secure online giving portal',
        'Use international wire transfer options',
        'Contact us for specific instructions for your country'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-2 text-center">Generosity</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Giving with a cheerful heart
          </p>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <FaHandHoldingHeart className="text-blue-600 text-6xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Why We Give</h2>
              <p className="text-gray-600 mb-6">
                At Berakah Church, we believe that giving is an act of worship. When we give, we acknowledge
                that everything we have comes from God, and we express our gratitude for His provision in our lives.
              </p>
              <p className="text-gray-600 mb-6">
                Your generosity enables us to share the love of Jesus through various ministries, community
                outreach programs, and missions work both locally and globally. Together, we can make a
                difference in the lives of many people.
              </p>
              <p className="text-gray-600">
                We are committed to being good stewards of every gift, ensuring that resources are used
                effectively to advance God's Kingdom and bring glory to His name.
              </p>
            </div>
          </div>

          {/* Scripture */}
          <div className="bg-white border border-blue-200 rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8 text-center">
              <p className="text-xl italic mb-4 text-gray-700">
                "Each of you should give what you have decided in your heart to give, not reluctantly
                or under compulsion, for God loves a cheerful giver."
              </p>
              <p className="font-semibold text-blue-600">2 Corinthians 9:7</p>
            </div>
          </div>

          {/* Giving Options */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Ways to Give</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {givingOptions.map((option) => (
              <div key={option.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 text-blue-600">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{option.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-medium text-gray-700 mb-2">Details:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      {option.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-white border border-blue-200 rounded-xl shadow-md overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Have Questions About Giving?</h2>
              <p className="mb-6 text-gray-600">
                If you have any questions about giving or would like more information about how your
                donations are being used, please don't hesitate to contact us.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerosityPage;
