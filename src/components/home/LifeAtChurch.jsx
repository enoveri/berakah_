import React from 'react';

const LifeAtChurch = () => {
  // Sample church life events/activities
  const churchActivities = [
    {
      id: 1,
      title: 'Sunday Services',
      image: '/placeholder-image.jpg',
      description: 'Join us for worship every Sunday at 9:00 AM and 11:00 AM'
    },
    {
      id: 2,
      title: 'Cell Groups',
      image: '/placeholder-image.jpg',
      description: 'Connect with others in small groups throughout the week'
    },
    {
      id: 3,
      title: 'Youth Fellowship',
      image: '/placeholder-image.jpg',
      description: 'Friday nights are for our vibrant youth community'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">LIFE AT BERAKAH</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Church is not an event we go to, it's a family we belong to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {churchActivities.map((activity) => (
            <div 
              key={activity.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-blue-200 flex items-center justify-center">
                {/* This would be replaced with an actual image */}
                <span className="text-blue-600 font-medium">Image Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
                <a 
                  href="#" 
                  className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtChurch;
