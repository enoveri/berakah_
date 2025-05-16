import React from 'react';

const LeadershipPage = () => {
  // Sample leadership team data
  const leadershipTeam = [
    {
      id: 1,
      name: 'Pastor John Doe',
      role: 'Lead Pastor',
      bio: 'Pastor John has been serving as the Lead Pastor of Berakah Church since 2010. He has a passion for teaching the Word of God and seeing people grow in their relationship with Jesus Christ.',
      image: '/placeholder-image.jpg'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      role: 'Worship Pastor',
      bio: 'Sarah leads our worship ministry with excellence and a heart for God\'s presence. She has been serving at Berakah Church since 2015.',
      image: '/placeholder-image.jpg'
    },
    {
      id: 3,
      name: 'David Johnson',
      role: 'Youth Pastor',
      bio: 'David has a passion for seeing young people encounter Jesus and grow in their faith. He leads our vibrant youth ministry with energy and vision.',
      image: '/placeholder-image.jpg'
    },
    {
      id: 4,
      name: 'Rebecca Williams',
      role: 'Children\'s Pastor',
      bio: 'Rebecca brings creativity and passion to our children\'s ministry. She believes in creating a fun and engaging environment where children can learn about Jesus.',
      image: '/placeholder-image.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-2 text-center">Our Leadership</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Meet the dedicated team that leads Berakah Church
          </p>
          
          {/* Leadership Vision Section */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leadership Vision</h2>
              <p className="text-gray-600 mb-6">
                Our leadership team is committed to serving the church and the community with integrity, 
                humility, and a passion for seeing lives transformed by the power of the Gospel. We believe 
                in equipping and empowering people to fulfill their God-given purpose and potential.
              </p>
              <p className="text-gray-600">
                Together, we strive to create a church culture that reflects the heart of Jesus – 
                welcoming everyone, loving unconditionally, and making disciples who make disciples.
              </p>
            </div>
          </div>
          
          {/* Leadership Team Section */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {leadershipTeam.map((leader) => (
              <div key={leader.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  {/* This would be replaced with an actual image */}
                  <span className="text-gray-500 font-medium">Leader Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="bg-blue-600 rounded-xl shadow-md overflow-hidden text-white">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Want to Learn More?</h2>
              <p className="mb-6">
                If you're interested in learning more about our leadership team or have any questions,
                please don't hesitate to contact us.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
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

export default LeadershipPage;
