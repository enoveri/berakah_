import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrayerSection = () => {
  // Church information sections
  const churchSections = [
    {
      id: 1,
      title: 'A Church after God\'s Heart',
      image: '/photos/call2prayer.jpg',
      description: 'Our Vision: A Church after God\'s heart committed to Evangelism, Loving People and Changing Lives.',
      link: '/about-call2prayer'
    },
    {
      id: 2,
      title: 'Our Choir',
      image: '/photos/Berakhah-Choir-2024-8.jpg',
      description: 'We believe that lifting people\'s spirits to have an experience with Jesus Christ is the bond that drives our vision.',
      link: '/choir'
    },
    {
      id: 3,
      title: 'Children\'s Church',
      images: [
        '/photos/childrens_church-1-980x653.jpeg',
        '/photos/childrens_church-8-980x735.jpeg',
        '/photos/Berakhah-Choir-2024-42-480x320.jpg'
      ],
      description: 'Every Sunday we provide a wonderful children\'s church where children are given a strong foundation in the belief of our Lord Jesus Christ.',
      link: '/childrens-church',
      hasSlideshow: true
    },
    {
      id: 4,
      title: 'Berakhah Childcare',
      images: [
        '/photos/Berakhah-Child-care-980x586.jpg',
        '/photos/Berakhah-Choir-2024-8.jpg',
        '/photos/call2prayer.jpg'
      ],
      description: 'Providing love, care, and education to orphaned and vulnerable children in Uganda\'s rural villages, empowering them to become future leaders.',
      link: '/berakhah-childcare',
      hasSlideshow: true
    },
    {
      id: 5,
      title: 'Pastors Network - Uganda',
      images: [
        '/photos/pastors-1.jpg',
        '/photos/pastors-2.jpg'
      ],
      description: 'Helping provide much needed resources to Pastors and their families through relationships, training, encouragement, empowerment, exposure and sponsorship.',
      link: '/pastors-network',
      hasSlideshow: true
    },
    {
      id: 6,
      title: 'Widows and Elderly Care',
      images: [
        '/photos/widows_elderly_care-1-480x320.jpeg',
        '/photos/widows_elderly_care-7-1024x683.jpeg',
        '/photos/widows_elderly_care-8-980x653.jpeg'
      ],
      description: 'Supporting widows and elderly in the community with essential needs, companionship, and spiritual encouragement to improve their quality of life.',
      link: '/widows-elderly-care',
      hasSlideshow: true
    },
    {
      id: 7,
      title: 'Church Planting',
      images: [
        '/photos/church-planting-1-980x653.jpeg',
        '/photos/church-planting-10-980x551.jpeg',
        '/photos/church-planting-12-980x735.jpeg'
      ],
      description: 'Committed to the Great Commission, partnering with over 1000 rural village Pastors to plant new Churches in Uganda and beyond.',
      link: '/church-planting',
      hasSlideshow: true
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

  // Slideshow settings for the image carousel within a container
  const slideshowSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    fade: true
  };

  // Component for the image slideshow
  const ImageSlideshow = ({ images, title }) => {
    return (
      <div className="h-48 overflow-hidden">
        <Slider {...slideshowSettings}>
          {images.map((image, index) => (
            <div key={index} className="h-48">
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <section className="py-12 bg-blue-50 leaf-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 py-8 bg-blue-200 shadow-lg rounded-lg max-w-5xl mx-auto border border-blue-300 glow-blue">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">JOIN US FOR PRAYER</h2>
          <p className="text-xl text-blue-800 max-w-4xl mx-auto px-4">
            About Call To Prayer
          </p>
        </div>

        <div className="px-4">
          <Slider {...settings}>
            {churchSections.map((section) => (
              <div key={section.id} className="px-2">
                <div className="content-box bg-blue-200 rounded-lg overflow-hidden shadow-lg h-full border border-blue-300 glow-blue">
                  {section.hasSlideshow ? (
                    <ImageSlideshow images={section.images} title={section.title} />
                  ) : (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 group">
                    <h3 className="hover-swell text-xl font-semibold mb-2 text-blue-900">{section.title}</h3>
                    <p className="text-blue-800">{section.description}</p>
                    <Link
                      to={section.link}
                      className="hover-swell mt-4 inline-block text-blue-600 font-medium"
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

export default PrayerSection;
