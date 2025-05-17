import React from 'react';
import { Link } from 'react-router-dom';

const LifeAtChurch = () => {
  // Church information sections
  const churchSections = [
    {
      id: 1,
      title: 'A Church after God\'s Heart',
      image: '/placeholder-image.jpg',
      description: 'Our Vision: A Church after God\'s heart committed to Evangelism, Loving People and Changing Lives\n\nOur Mission: Making Disciples, Equipping them for the work of the ministry.',
      link: '/about-call2prayer'
    },
    {
      id: 2,
      title: 'Our Choir',
      image: '/placeholder-image.jpg',
      description: 'We believe that lifting people\'s spirits to have an experience with Jesus Christ is the bond that drives to our vision.\n\nOur Mission is derived from the bible as our mandate. 2 Chronicles 5:13 – 14. Joining together as one team in the entire house of God with lifting up our voices and instruments in praise and worship filling the people with the Spirit of God.',
      link: '/choir'
    },
    {
      id: 3,
      title: 'Children\'s Church',
      image: '/placeholder-image.jpg',
      description: 'Every Sunday we always have a wonderful children\'s church where the children are given a good and strong foundation in the belief of our Lord Jesus Christ basing on the right doctrines of Christianity.',
      link: '/childrens-church'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">JOIN US FOR PRAYER</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            About Call To Prayer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {churchSections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow transform transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 bg-blue-200 flex items-center justify-center">
                {/* This would be replaced with an actual image */}
                <span className="text-blue-600 font-medium">Image Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{section.description}</p>
                <Link
                  to={section.link}
                  className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtChurch;
