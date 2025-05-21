import React from 'react';
import { FaHandshake, FaBook, FaUsers, FaLaptop, FaHandHoldingHeart } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PastorsNetworkPage = () => {
  // Slider settings for the image carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true
  };

  // Pastor images
  const pastorImages = [
    './photos/pastors-1.jpg',
    './photos/pastors-2.jpg'
  ];

  return (
    <div className="dark-blue-bg">
      {/* Hero Section with Background Image */}
      <div className="relative text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('./photos/pastors-1.jpg')" }}
        ></div>
        {/* Semi-transparent overlay to ensure text readability */}
        <div className="absolute inset-0 dark-blue-overlay"></div>
        <div className="container mx-auto px-4 py-24 relative z-10 dark-blue-overlay-content">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 dark-blue-text-light" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>PASTORS NETWORK - UGANDA</h1>
            <p className="text-xl dark-blue-text-light" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Supporting and empowering pastors in rural Uganda
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction Section with Images */}
            <div className="dark-blue-section mb-12">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Our Vision</h2>
                  <p className="dark-blue-text mb-6">
                    Pastors Network- Uganda is a dream and Ministry by Paul Gidudu the Ministry team leader, to help provide the much needed help and resources to Pastors and their families, through honourable Relationships, Trainings, Encouragement, Empowerment, Exposure and Sponsorship.
                  </p>
                  <p className="dark-blue-text mb-6">
                    Majority of the pastors and their families go through a lot and are faced with so many pressing needs as they serve and Minister to many needy people with many of them going without any support for the Pastor and the family.
                  </p>
                </div>
                <div className="md:w-1/2 h-80">
                  <Slider {...sliderSettings} className="h-full">
                    {pastorImages.map((image, index) => (
                      <div key={index} className="h-80">
                        <img
                          src={image}
                          alt={`Pastors Network Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            {/* Rural Focus Section */}
            <div className="dark-blue-container mb-12">
              <div className="flex items-start mb-4">
                <FaUsers className="dark-blue-icon text-2xl mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Rural Focus</h2>
                  <p className="dark-blue-text mb-6">
                    We know that Pastors in Urban areas have more opportunities for training in form of Seminars and conference as compared to Pastors in Rural areas that is why we at International Great Faith Ministries plan events like Retreats, Seminars, workshop and conferences that mainly benefit rural area Pastors.
                  </p>
                </div>
              </div>
            </div>

            {/* Financial Support Section */}
            <div className="dark-blue-container mb-12">
              <div className="flex items-start mb-4">
                <FaHandHoldingHeart className="dark-blue-icon text-2xl mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Financial Support</h2>
                  <p className="dark-blue-text mb-6">
                    We also realize that by providing a little help financially to these rural Pastors we enable them to do a lot of work in their communities and more people are reached with the Gospel of our Lord Jesus.
                  </p>
                </div>
              </div>
            </div>

            {/* Conferences Section */}
            <div className="dark-blue-container mb-12">
              <div className="flex items-start mb-4">
                <FaHandshake className="dark-blue-icon text-2xl mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Pastors Network Conferences</h2>
                  <p className="dark-blue-text mb-6">
                    Along with other events that mainly benefit Pastors, we host Pastors Network Conferences to encourage, train and equip Pastors from rural and urban areas in ministry and also create a conducive environment for networking, these are a must attend events.
                  </p>
                </div>
              </div>
            </div>

            {/* Resource Center Section */}
            <div className="dark-blue-container mb-12">
              <div className="flex items-start mb-4">
                <FaLaptop className="dark-blue-icon text-2xl mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Resource Center</h2>
                  <p className="dark-blue-text mb-6">
                    As God provides, We plan to put together a Resource centre with Internet Services for Pastors and Church leaders to study and prepare for ministry.
                  </p>
                </div>
              </div>
            </div>

            {/* Partnership Call to Action */}
            <div className="dark-blue-section mb-12">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Partner With Us</h2>
                <p className="dark-blue-text mb-6">
                  Your partnership helps us to minister to these Pastors and if you are not a partner with us yet please become one today.
                </p>
                <a
                  href="/donate"
                  className="dark-blue-button dark-blue-button-orange inline-block px-6 py-3 rounded-md font-medium transition-all"
                >
                  BECOME A PARTNER
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastorsNetworkPage;
