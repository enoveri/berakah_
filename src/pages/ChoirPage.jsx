import React, { useState } from 'react';
import { FaDownload, FaMusic, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaBed, FaBookOpen } from 'react-icons/fa';
import Slider from 'react-slick';

const ChoirPage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

  // Slider settings for the carousels
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  // Images for Children's Choir section
  const choirImages = [
    '/photos/Berakhah-Choir-2024-1.jpg',
    '/photos/Berakhah-Choir-2024-8.jpg',
    '/photos/Berakhah-Choir-2024-12.jpg',
    '/photos/Berakhah-Choir-2024-17.jpg'
  ];

  // Images for Performing Locations section
  const performingImages = [
    '/photos/Berakhah-Choir-2024-10.jpg',
    '/photos/Berakhah-Choir-2024-11.jpg',
    '/photos/Berakhah-Choir-2024-13.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Choir Hero Section */}
      <div className="relative bg-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">BERAKHAH CHOIR</h1>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Who We Are Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Who we are</h2>
                <p className="text-gray-600 mb-6">
                  We are part of International Great Faith Ministries, a Ugandan indigenous Christian based organization founded by Pastor Paul Gidudu, serving both the spiritual and the physical needs of orphaned and vulnerable children.
                </p>
              </div>
            </div>

            {/* Our Home Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Home</h2>
                <p className="text-gray-600 mb-6">
                  We serve hundreds every week without discrimination at our Main Base in Busamaga SubCounty in Sironko District just 14km (9 miles) north of Mbale town, and 50 High School going youth at our Mbale youth home all in Eastern Uganda.
                </p>
              </div>
            </div>

            {/* Magazine Download Section */}
            <div className="bg-white border border-blue-200 text-gray-800 rounded-xl overflow-hidden shadow-lg mb-12">
              <div className="md:flex">
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-600">DOWNLOAD OUR MAGAZINE</h2>
                  <p className="mb-6">
                    Who we are, Our Home, Performing Locations, Restoring Hope and More
                  </p>
                  <a
                    href="/documents/Berakhah-Choir-Magazine-2024-gidudu.org_.pdf"
                    download="Berakhah-Choir-Magazine-2024.pdf"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center shadow-md"
                  >
                    <FaDownload className="mr-2" /> DOWNLOAD NOW
                  </a>
                </div>
                <div className="md:w-1/3 bg-gray-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src="/photos/magazine-3d-1-qjzk91q4buks27rrz4cbgqdv1aabtjo7llz9smky68.png"
                      alt="Magazine 3D"
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Children's Choir Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-4">Children's Choir</h2>
                  <p className="text-gray-600 mb-6">
                    We have an amazing Children's Choir that travels to different places performing unique cultural music and dances, sharing their life changing stories and testimonies. Each person in the choir has a unique story that will bless, inspire and encourage you.
                  </p>
                </div>
                <div className="md:w-1/2 h-80">
                  <Slider {...sliderSettings} className="h-full">
                    {choirImages.map((image, index) => (
                      <div key={index} className="h-80">
                        <img
                          src={image}
                          alt={`Choir Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            {/* Performing Locations Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/2 p-8">
                  <div className="flex items-start mb-4">
                    <FaMapMarkerAlt className="text-blue-600 text-2xl mr-4 mt-1" />
                    <div>
                      <h2 className="text-2xl font-semibold text-blue-600 mb-2">Performing Locations</h2>
                      <p className="text-gray-600">
                        We are actively seeking opportunities to sing and share our life changing stories in Churches, Schools, Nursing homes, Neighborhood events, Community centers and any other places we are invited.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 h-80">
                  <Slider {...sliderSettings} className="h-full">
                    {performingImages.map((image, index) => (
                      <div key={index} className="h-80">
                        <img
                          src={image}
                          alt={`Performance Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            {/* Performance Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Performance Duration */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <FaCalendarAlt className="text-blue-600 text-2xl mr-4 mt-1" />
                    <div>
                      <h2 className="text-xl font-semibold text-blue-600 mb-2">Performance Duration</h2>
                      <p className="text-gray-600">
                        Our full show is one hour but we can perform for any available time given to us. We have a number of different items that fit into any given amount of the time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Choir Size */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <FaUsers className="text-blue-600 text-2xl mr-4 mt-1" />
                    <div>
                      <h2 className="text-xl font-semibold text-blue-600 mb-2">Choir Size</h2>
                      <p className="text-gray-600">
                        While we can bring as many as possible, but due to logistical constraints, we have at least 15 members on our traveling choir both children and chaperones/caregivers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accommodation and Meals */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden md:col-span-2">
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <FaBed className="text-blue-600 text-2xl mr-4 mt-1" />
                    <div>
                      <h2 className="text-xl font-semibold text-blue-600 mb-2">Accommodation and Meals</h2>
                      <p className="text-gray-600">
                        We request where possible our hosts arrange accommodation and meals for the choir. But where necessary the choir can use air mattress or sleeping bags at any available location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book the Choir Section */}
            <div className="bg-white border border-blue-200 rounded-xl shadow-md overflow-hidden mb-12">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Book the Choir</h2>
                <p className="mb-6 text-gray-600">
                  We would love to minister to you, tap the button
                </p>
                <button
                  onClick={toggleBookingForm}
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors shadow-md"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* Booking Form */}
            {showBookingForm && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Choir Booking Form</h2>

                  <form className="space-y-8">
                    {/* Personal Details */}
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-4">Personal Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
                          <input
                            type="text"
                            id="lastName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your last name"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your email address"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                          <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Booking Information */}
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-4">Booking Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2" htmlFor="organization">Organization/Church</label>
                          <input
                            type="text"
                            id="organization"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your organization or church name"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2" htmlFor="eventDate">Preferred Date</label>
                          <input
                            type="date"
                            id="eventDate"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2" htmlFor="eventTime">Preferred Time</label>
                          <input
                            type="time"
                            id="eventTime"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2" htmlFor="location">Event Location</label>
                          <input
                            type="text"
                            id="location"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Address of the event"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 mb-2" htmlFor="additionalInfo">Additional Information</label>
                          <textarea
                            id="additionalInfo"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Any additional details about your event"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                      >
                        Submit Booking Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoirPage;
