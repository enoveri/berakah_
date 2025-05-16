import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">About Berakah Church</h1>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="h-64 bg-blue-200 flex items-center justify-center">
              {/* This would be replaced with an actual image */}
              <span className="text-blue-600 font-medium">Church Image Placeholder</span>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                We are an English-speaking, cell-based community church, celebrating Christ,
                growing and multiplying as each one reaches one; touching those around us with the
                love of Jesus, bringing healing to the cities and the nations.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To be a loving family sharing Christ with the world, by:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Expressing God's love through worship and service</li>
                <li>Experiencing transformation through discipleship</li>
                <li>Expanding God's Kingdom through evangelism and church planting</li>
                <li>Extending compassion through community development and social justice initiatives</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Bible-based teaching:</strong> We are committed to the Word of God as our foundation and guide.</li>
                <li><strong>Cell-based community:</strong> We believe in close-knit family units where discipleship happens.</li>
                <li><strong>Passionate worship:</strong> We express our love for God through vibrant, authentic worship.</li>
                <li><strong>Intentional discipleship:</strong> We help each other grow to spiritual maturity.</li>
                <li><strong>Generous living:</strong> We give freely of our time, talents, and treasures.</li>
                <li><strong>Compassionate outreach:</strong> We demonstrate God's love through practical care.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
