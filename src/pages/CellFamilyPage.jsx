import React from 'react';
import { FaUsers, FaHome, FaPray, FaBookOpen, FaHandsHelping, FaUserFriends } from 'react-icons/fa';

const CellFamilyPage = () => {
  // Sample cell values
  const cellValues = [
    {
      id: 1,
      title: 'Community',
      description: 'We build meaningful relationships that provide support and encouragement.',
      icon: <FaUsers className="text-3xl" />
    },
    {
      id: 2,
      title: 'Discipleship',
      description: 'We help each other grow in our faith and become more like Jesus.',
      icon: <FaBookOpen className="text-3xl" />
    },
    {
      id: 3,
      title: 'Prayer',
      description: 'We pray for one another and see God work in powerful ways.',
      icon: <FaPray className="text-3xl" />
    },
    {
      id: 4,
      title: 'Outreach',
      description: 'We reach out to our neighborhoods and share the love of Christ.',
      icon: <FaHandsHelping className="text-3xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-2 text-center">Cell Family</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Life is better together
          </p>
          
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <FaHome className="text-blue-600 text-6xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">What is a Cell Family?</h2>
              <p className="text-gray-600 mb-6">
                Cell families are the heart of Berakah Church. They are small groups of people who meet 
                regularly in homes to connect, grow in their faith, and support one another. We believe 
                that meaningful Christian community happens best in these smaller settings.
              </p>
              <p className="text-gray-600">
                In a cell family, you'll find a place where you are known and loved, where you can ask 
                questions, share your struggles, celebrate your victories, and grow in your relationship 
                with Jesus alongside others who are on the same journey.
              </p>
            </div>
          </div>
          
          {/* Cell Values */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Cell Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {cellValues.map((value) => (
              <div key={value.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 text-blue-600">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* What Happens in a Cell */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">What Happens in a Cell?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-600">
                    <FaUserFriends />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Connect</h3>
                    <p className="text-gray-600">
                      We take time to catch up with each other, share our lives, and build relationships.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-600">
                    <FaPray />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Pray</h3>
                    <p className="text-gray-600">
                      We pray for one another's needs and see God work in our lives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-600">
                    <FaBookOpen />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Grow</h3>
                    <p className="text-gray-600">
                      We study the Bible together, discuss Sunday's message, and apply God's Word to our lives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-600">
                    <FaHandsHelping />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Serve</h3>
                    <p className="text-gray-600">
                      We look for opportunities to serve one another and our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* How to Join */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">How to Join a Cell Family</h2>
              
              <p className="mb-6 text-center">
                Joining a cell family is easy! You can:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                  <h3 className="font-medium mb-2">Fill out a Connect Card</h3>
                  <p className="text-sm">
                    Fill out a connect card at our Sunday service, and someone will contact you.
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                  <h3 className="font-medium mb-2">Visit our Information Desk</h3>
                  <p className="text-sm">
                    Speak to someone at our Information Desk after any Sunday service.
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                  <h3 className="font-medium mb-2">Contact Us Online</h3>
                  <p className="text-sm">
                    Fill out the form below, and we'll help you find a cell family near you.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="#contact-form" 
                  className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Find a Cell Near Me
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div id="contact-form" className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Connect with a Cell Family</h2>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
                    <select 
                      id="location" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select your area</option>
                      <option value="central">Mbale Central</option>
                      <option value="north">Mbale North</option>
                      <option value="east">Mbale East</option>
                      <option value="kampala">Kampala</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Additional Information</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us a bit about yourself and what you're looking for in a cell family"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellFamilyPage;
