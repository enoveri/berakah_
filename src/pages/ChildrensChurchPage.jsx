import React from 'react';
import { FaChild, FaHeart, FaBook, FaPrayingHands, FaDonate } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ChildrensChurchPage = () => {
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
  const childrenImages = [
    './photos/childrens_church-1-980x653.jpeg',
    './photos/childrens_church-8-980x735.jpeg',
    './photos/Berakhah-Choir-2024-42-480x320.jpg'
  ];

  return (
    <div className="dark-blue-bg">
      {/* Hero Section with Background Image */}
      <div className="relative text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('./photos/childrens_church-8-980x735.jpeg')" }}
        ></div>
        {/* Semi-transparent overlay to ensure text readability */}
        <div className="absolute inset-0 dark-blue-overlay"></div>
        <div className="container mx-auto px-4 py-24 relative z-10 dark-blue-overlay-content">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 dark-blue-text-light" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>CHILDREN'S CHURCH</h1>
            <p className="text-xl dark-blue-text-light italic" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              "Let the children come to me. Don't stop them!" - Matthew 19:14
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
                  <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Our Mission Field</h2>
                  <p className="dark-blue-text mb-6">
                    At IGFM, we believe children are a major mission field where we have found by experience the harvest to be plenty yet the laborers are indeed few.
                  </p>
                  <p className="dark-blue-text mb-6">
                    In the communities we serve, we see a generation of children in need of guidance, love, and spiritual care. Now more than ever, it is crucial for us to provide a safe place where they can encounter the transformative power of God's love. It is our responsibility, as stewards of God's grace, to rise to this challenge and labor fervently to make sure every child is given an opportunity to hear the gospel.
                  </p>
                </div>
                <div className="md:w-1/2 h-80">
                  <Slider {...sliderSettings} className="h-full">
                    {childrenImages.map((image, index) => (
                      <div key={index} className="h-80">
                        <img
                          src={image}
                          alt={`Children's Church Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            {/* Our Programs */}
            <div className="dark-blue-section mb-12">
              <div className="p-8">
                <h2 className="text-2xl font-semibold dark-blue-heading mb-4 text-center">Our Programs</h2>
                <p className="dark-blue-text mb-6">
                  Our services and programs are designed to engage children at their level, using interactive lessons, creative activities, and meaningful worship experiences. We strive to create an environment where children feel loved, cared for, valued, accepted, and empowered to live out their faith boldly.
                </p>
                <p className="dark-blue-text mb-6">
                  We aim to equip them with the tools they need to navigate life's challenges and become confident disciples of Christ.
                </p>
              </div>
            </div>

            {/* Our Approach Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Interactive Learning */}
              <div className="dark-blue-container">
                <div className="flex items-start mb-4">
                  <FaBook className="dark-blue-icon text-2xl mr-4 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Interactive Learning</h2>
                    <p className="dark-blue-text mb-6">
                      We use age-appropriate, engaging lessons that make the Bible come alive for children, helping them understand and apply God's Word to their daily lives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Creative Activities */}
              <div className="dark-blue-container">
                <div className="flex items-start mb-4">
                  <FaChild className="dark-blue-icon text-2xl mr-4 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Creative Activities</h2>
                    <p className="dark-blue-text mb-6">
                      Through arts, crafts, music, and games, we help children express their faith and develop their God-given talents in a fun and supportive environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Spiritual Formation */}
              <div className="dark-blue-container">
                <div className="flex items-start mb-4">
                  <FaPrayingHands className="dark-blue-icon text-2xl mr-4 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Spiritual Formation</h2>
                    <p className="dark-blue-text mb-6">
                      We nurture children's spiritual growth through prayer, worship, and discipleship, helping them build a strong foundation in their relationship with Jesus Christ.
                    </p>
                  </div>
                </div>
              </div>

              {/* Loving Environment */}
              <div className="dark-blue-container">
                <div className="flex items-start mb-4">
                  <FaHeart className="dark-blue-icon text-2xl mr-4 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Loving Environment</h2>
                    <p className="dark-blue-text mb-6">
                      We create a safe, welcoming space where every child feels valued, accepted, and loved, reflecting God's unconditional love for them.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="dark-blue-section mb-12">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Our Vision</h2>
                <p className="dark-blue-text mb-6 text-xl italic">
                  "Together, let us sow seeds of faith, provide discipleship, and reap a bountiful harvest among children for the glory of God."
                </p>
              </div>
            </div>

            {/* Donate Section */}
            <div className="dark-blue-section mb-12">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-semibold dark-blue-heading mb-4">Donate Now</h2>
                <p className="dark-blue-text mb-6">
                  Your donation will go a long way in reaching out to children with the gospel of Christ.
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

export default ChildrensChurchPage;
