import React from 'react';
import { Link } from 'react-router-dom';

const ConnectSection = () => {
  const connectLinks = [
    {
      id: 1,
      title: 'SPONSOR',
      link: '/sponsor',
      bgColor: 'bg-blue-600'
    },
    {
      id: 2,
      title: 'CELL GUIDE',
      link: '/cell-guide',
      bgColor: 'bg-green-600'
    },
    {
      id: 3,
      title: 'LOCATIONS',
      link: '/locations',
      bgColor: 'bg-purple-600'
    },
    {
      id: 4,
      title: 'GENEROSITY',
      link: '/give',
      bgColor: 'bg-yellow-600'
    },
    {
      id: 5,
      title: 'CONTACT',
      link: '/contact',
      bgColor: 'bg-red-600'
    },
    {
      id: 6,
      title: 'TESTIMONY',
      link: '/testimony',
      bgColor: 'bg-indigo-600'
    }
  ];

  const getInvolvedLinks = [
    {
      id: 1,
      title: 'JOIN THE TEAM',
      link: '/serve',
      bgColor: 'bg-teal-600'
    },
    {
      id: 2,
      title: 'EQUIP STREAMS',
      link: '/equip',
      bgColor: 'bg-amber-600'
    },
    {
      id: 3,
      title: 'BERAKAH MUSIC',
      link: '/music',
      bgColor: 'bg-pink-600'
    },
    {
      id: 4,
      title: 'NOW WHAT?',
      link: '/now-what',
      bgColor: 'bg-sky-600'
    },
    {
      id: 5,
      title: 'MEDIA',
      link: '/media',
      bgColor: 'bg-emerald-600'
    },
    {
      id: 6,
      title: 'PRAYER REQUEST',
      link: '/prayer',
      bgColor: 'bg-violet-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">CONNECT, GET INVOLVED</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Church is what everybody does everyday!
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {connectLinks.map((item) => (
              <Link 
                key={item.id}
                to={item.link}
                className={`${item.bgColor} text-white py-6 px-3 rounded-lg text-center font-medium hover:opacity-90 transition-opacity`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {getInvolvedLinks.map((item) => (
              <Link 
                key={item.id}
                to={item.link}
                className={`${item.bgColor} text-white py-6 px-3 rounded-lg text-center font-medium hover:opacity-90 transition-opacity`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* App Download Links */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Download Our App</h3>
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
            >
              <span>Download on the App Store</span>
            </a>
            <a 
              href="#" 
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
            >
              <span>Get it on Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
