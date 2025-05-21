import React from 'react';
import { FaChurch, FaHammer, FaHome, FaHandHoldingHeart, FaDonate, FaCheckCircle } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ChurchPlantingPage = () => {
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
  const churchImages = [
    '/photos/church-planting-1-980x653.jpeg',
    '/photos/church-planting-10-980x551.jpeg',
    '/photos/church-planting-12-980x735.jpeg'
  ];

  return (
    <div className="dark-blue-bg">
      {/* Hero Section with Background Image */}
      <div className="relative text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/photos/church-planting-12-980x735.jpeg')" }}
        ></div>
        {/* Semi-transparent overlay to ensure text readability */}
        <div className="absolute inset-0 dark-blue-overlay"></div>
        <div className="container mx-auto px-4 py-24 relative z-10 dark-blue-overlay-content">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 dark-blue-text-light" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>CHURCH PLANTING</h1>
            <p className="text-xl dark-blue-text-light" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              "Go therefore and make disciples of all nations..." - Matthew 28:19
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
                  <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Our Commitment</h2>
                  <p className="dark-blue-text mb-6">
                    We as IGFM are passionate and greatly committed to the Great commission of making disciples (Matt 28:19) partnering with over 1000 rural village Pastors to plant new Churches in Uganda and beyond. The vigorous, continual planting of new Churches in Rural Villages beyond roads and bridges is the single most crucial strategy for reaching every unreached people group while providing for the spiritual and numerical growth of the body of Christ especially for the new believers, it is at these New Church plants that new believes find a new family, encouragement, corporate worship and discipleship class. It's our commitment to continue planting Churches that Plant Churches.
                  </p>
                  <p className="dark-blue-text mb-6">
                    It's our passion to reach every unreached people group and Village communities in Uganda with the Gospel. For the people in these communities to grow in the grace and knowledge of our Lord and Savior Jesus Christ they need a place of worship.
                  </p>
                </div>
                <div className="md:w-1/2 h-80">
                  <Slider {...sliderSettings} className="h-full">
                    {churchImages.map((image, index) => (
                      <div key={index} className="h-80">
                        <img
                          src={image}
                          alt={`Church Planting Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            {/* Church Construction Section */}
            <div className="dark-blue-container mb-12">
              <div className="flex items-start mb-4">
                <FaHammer className="dark-blue-icon text-2xl mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Church Construction</h2>
                  <p className="dark-blue-text mb-6">
                    Working together with the village communities we make bricks and build wall by wall but we need help to put a real roof to finish the buildings so we can put them to use during the week as community centres and for weekend worship services.
                  </p>
                </div>
              </div>
            </div>

            {/* Roof a Church Section */}
            <div className="dark-blue-container mb-12">
              <div className="flex items-start mb-4">
                <FaHome className="dark-blue-icon text-2xl mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Roof a Church in Uganda</h2>
                  <p className="dark-blue-text mb-6">
                    We at International Great Faith Ministries believe a little investment can make so much difference in the lives of pastors, believers and the community at large, so putting a roof on a church building is such blessing in its self with tremendous impact.
                  </p>
                </div>
              </div>
            </div>

            {/* The Impact Section */}
            <div className="dark-blue-container mb-12">
              <div className="flex items-start mb-4">
                <FaHandHoldingHeart className="dark-blue-icon text-2xl mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold dark-blue-heading mb-4">The Impact</h2>
                  <p className="dark-blue-text mb-6">
                    The investment into a roof for a village Church makes so much difference in the life of a local Church. These structures will serve remote villages as places of worship and as a community centre for 50 years, or even longer. A Finished building results in a doubled attendance for worship service.
                  </p>
                </div>
              </div>
            </div>

            {/* Roof Cost Section */}
            <div className="dark-blue-container mb-12">
              <div className="flex items-start mb-4">
                <FaChurch className="dark-blue-icon text-2xl mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Roof Cost</h2>
                  <p className="dark-blue-text mb-6">
                    $5000 will help us Purchase the Timber, Nails and the Iron Sheets for roofing a village Church. These buildings are also used as class rooms for the orphaned and underprivileged children in the villages.
                  </p>
                  <p className="dark-blue-text mb-6">
                    You can help us today using our very secure online donation giving.
                  </p>
                </div>
              </div>
            </div>

            {/* Donate Section */}
            <div className="dark-blue-section mb-12">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Donate Now</h2>
                <p className="dark-blue-text mb-6">
                  <strong>$5000</strong> will help us roof a church and make a lasting impact in rural communities.
                </p>
                <p className="dark-blue-text mb-6">
                  Help us reach our goal! Your donation today will provide shelter for worship and community gatherings.
                </p>
                <a
                  href="/donate"
                  className="dark-blue-button dark-blue-button-orange inline-block px-6 py-3 rounded-md font-medium transition-all"
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

export default ChurchPlantingPage;
