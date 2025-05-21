import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaHandHoldingHeart, FaWater, FaGraduationCap, FaChurch, FaUsers } from 'react-icons/fa';

// Import our new styles
import '../../styles/themes.css';
import '../../styles/containers.css';

const DreamyThemeShowcase = () => {
  // Sample ministry data
  const ministries = [
    {
      id: 1,
      title: "Orphan Care",
      description: "We care for 320 orphaned and vulnerable children across 6 locations, with 50 staying at our Berakhah home in Busamaga, Uganda.",
      icon: <FaHeart size={40} />,
      color: "card-orange",
      link: "/orphan-care"
    },
    {
      id: 2,
      title: "Health Care",
      description: "We organize mobile clinics with volunteer doctors to provide essential medical services to children and communities without access to proper healthcare.",
      icon: <FaHandHoldingHeart size={40} />,
      color: "card-blue",
      link: "/health-care"
    },
    {
      id: 3,
      title: "Clean Water Project",
      description: "We provide safe, clean water to communities, preventing water-borne diseases and improving community health and productivity.",
      icon: <FaWater size={40} />,
      color: "card-teal",
      link: "/clean-water"
    },
    {
      id: 4,
      title: "Education",
      description: "We provide quality education to children in need, helping them build a better future through knowledge and skills.",
      icon: <FaGraduationCap size={40} />,
      color: "card-purple",
      link: "/education"
    },
    {
      id: 5,
      title: "Church Planting",
      description: "We partner with local pastors to establish churches in underserved communities, spreading the Gospel message.",
      icon: <FaChurch size={40} />,
      color: "card-green",
      link: "/church-planting"
    },
    {
      id: 6,
      title: "Community Outreach",
      description: "We engage with local communities through various outreach programs, addressing both spiritual and physical needs.",
      icon: <FaUsers size={40} />,
      color: "card-pink",
      link: "/community-outreach"
    }
  ];

  return (
    <div className="dreamy-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Ministries</h1>
          <p className="text-xl max-w-3xl mx-auto">
            International Great Faith Ministries serves communities through various initiatives, 
            bringing hope, care, and the love of Christ to those in need.
          </p>
        </div>

        {/* Ministry Cards Grid */}
        <div className="container-grid">
          {ministries.map((ministry) => (
            <div key={ministry.id} className={`card-container ${ministry.color}`}>
              <div className="card-header">
                {ministry.icon}
              </div>
              <div className="card-body">
                <h3 className="card-title">{ministry.title}</h3>
                <p className="card-text">{ministry.description}</p>
                <Link to={ministry.link} className="learn-more">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Work</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your generous donations help us continue our mission to serve those in need.
            Join us in making a difference in the lives of children and communities.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              to="/donate" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Donate Now
            </Link>
            <Link 
              to="/sponsor-child" 
              className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-600 hover:to-teal-500 transition-all transform hover:scale-105 shadow-lg"
            >
              Sponsor a Child
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamyThemeShowcase;
