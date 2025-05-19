import React from 'react';
import { FaHeart, FaHandHoldingHeart, FaPrayingHands, FaUsers, FaDonate } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WidowsElderlyCarePage = () => {
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

  // Images for the slideshow
  const careImages = [
    '/photos/widows_elderly_care-1-480x320.jpeg',
    '/photos/widows_elderly_care-7-1024x683.jpeg',
    '/photos/widows_elderly_care-8-980x653.jpeg'
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">WIDOWS AND ELDERLY CARE</h1>
            <p className="text-xl">
              Bringing hope and dignity to those who need it most
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction Section with Images */}
            <div className="bg-blue-200 rounded-xl shadow-md overflow-hidden mb-12 border border-blue-300 glow-blue">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h2 className="text-2xl font-semibold text-blue-900 mb-4">A Cause Close to Our Hearts</h2>
                  <p className="text-blue-800 mb-6">
                    Widows and Elderly care is a cause that is incredibly close to our hearts here at IGFM and Berakhah. In many communities where we work, access to social services is nonexistent. This leaves widows and vulnerable elderly individuals without the most basic necessities, such as medical care and even food. It's a heartbreaking reality that some are left to starve to death simply because there are no support systems in place.
                  </p>
                  <p className="text-blue-800 mb-6">
                    At IGM and Berakhah, we refuse to stand idly by in the face of such suffering. Currently, we are reaching out to over 700 widows and vulnerable elderly individuals, providing them with the care and support they so desperately need. From ensuring they have access to medical assistance to conducting regular home visits to check on their well-being, we are committed to making a tangible difference in their lives.
                  </p>
                </div>
                <div className="md:w-1/2 h-80">
                  <Slider {...sliderSettings} className="h-full">
                    {careImages.map((image, index) => (
                      <div key={index} className="h-80">
                        <img
                          src={image}
                          alt={`Widows and Elderly Care Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-blue-200 rounded-xl shadow-md overflow-hidden mb-12 border border-blue-300 glow-blue">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h2>
                <p className="text-blue-800 mb-6 text-xl italic">
                  "Our mission is to bring hope and dignity to those who need it most."
                </p>
                <p className="text-blue-800 mb-6">
                  But we can't do it alone. We need your help to continue this vital work. Your support can mean the difference between life and death for someone in need. Together, we can ensure that no widow or vulnerable elderly person is left behind, without the care and compassion they deserve.
                </p>
              </div>
            </div>

            {/* How We Help Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Medical Care */}
              <div className="bg-blue-200 rounded-xl shadow-md overflow-hidden border border-blue-300 glow-blue">
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <FaHandHoldingHeart className="text-blue-600 text-2xl mr-4 mt-1" />
                    <div>
                      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Medical Care</h2>
                      <p className="text-blue-800 mb-6">
                        We provide access to essential medical care for widows and elderly who would otherwise go without treatment, ensuring their health needs are addressed with dignity and compassion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Home Visits */}
              <div className="bg-blue-200 rounded-xl shadow-md overflow-hidden border border-blue-300 glow-blue">
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <FaHeart className="text-blue-600 text-2xl mr-4 mt-1" />
                    <div>
                      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Regular Home Visits</h2>
                      <p className="text-blue-800 mb-6">
                        Our team conducts regular home visits to check on the well-being of widows and elderly, providing companionship and ensuring their basic needs are met while monitoring their health and living conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Food Security */}
              <div className="bg-blue-200 rounded-xl shadow-md overflow-hidden border border-blue-300 glow-blue">
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <FaPrayingHands className="text-blue-600 text-2xl mr-4 mt-1" />
                    <div>
                      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Food Security</h2>
                      <p className="text-blue-800 mb-6">
                        We work to ensure that no widow or elderly person goes hungry by providing nutritious food and sustainable solutions to address food insecurity in the communities we serve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Support */}
              <div className="bg-blue-200 rounded-xl shadow-md overflow-hidden border border-blue-300 glow-blue">
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <FaUsers className="text-blue-600 text-2xl mr-4 mt-1" />
                    <div>
                      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Community Support</h2>
                      <p className="text-blue-800 mb-6">
                        We build support networks within communities to ensure widows and elderly individuals are integrated, valued, and cared for by those around them, fostering a sense of belonging and purpose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Donate Section */}
            <div className="bg-blue-200 rounded-xl shadow-md overflow-hidden mb-12 border border-blue-300 glow-blue">
              <div className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <FaDonate className="text-blue-600 text-3xl mr-3" />
                  <h2 className="text-2xl font-semibold text-blue-900">Donate Now</h2>
                </div>
                <p className="text-blue-800 mb-6">
                  Your donation will go a long way in reaching out to widows and the elderly.
                </p>
                <a
                  href="/donate"
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-md font-bold text-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  DONATE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidowsElderlyCarePage;
