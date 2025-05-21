import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LifeAtChurch = () => {
  // Church information sections
  const churchSections = [
    {
      id: 1,
      title: 'A Church after God\'s Heart',
      image: './photos/call2prayer.jpg',
      description: 'Our Vision: A Church after God\'s heart committed to Evangelism, Loving People and Changing Lives.',
      link: '/about-call2prayer'
    },
    {
      id: 2,
      title: 'Our Choir',
      image: './photos/Berakhah-Choir-2024-8.jpg',
      description: 'We believe that lifting people\'s spirits to have an experience with Jesus Christ is the bond that drives our vision.',
      link: '/choir'
    },
    {
      id: 3,
      title: 'Children\'s Church',
      image: './photos/Berakhah-Child-care-980x586.jpg',
      description: 'Every Sunday we provide a wonderful children\'s church where children are given a strong foundation in the belief of our Lord Jesus Christ.',
      link: '/childrens-church'
    }
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-12 bg-white join-us-for-prayer-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">JOIN US FOR PRAYER</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            About Call To Prayer
          </p>
        </div>

        <div className="px-4">
          <Slider {...settings}>
            {churchSections.map((section) => (
              <div key={section.id} className="px-2">
                <div className={`content-box ${section.id === 1 ? 'container-blue' : section.id === 2 ? 'container-orange' : 'container-green'} rounded-lg overflow-hidden shadow-md h-full`}>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 group">
                    <h3 className="hover-swell text-xl font-semibold mb-2">{section.title}</h3>
                    <p>{section.description}</p>
                    <Link
                      to={section.link}
                      className="hover-swell mt-4 inline-block text-white font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LifeAtChurch;
