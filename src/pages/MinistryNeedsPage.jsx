import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHandHoldingHeart, FaHospital, FaGraduationCap, FaChurch, FaUsers,
  FaHome, FaUtensils, FaPrayingHands, FaBus, FaMusic, FaLaptop,
  FaDesktop, FaCamera, FaVideo, FaCog, FaSchool, FaHammer,
  FaMapMarkedAlt, FaBook, FaTshirt, FaCarSide, FaFirstAid,
  FaChild, FaBicycle, FaGamepad, FaPuzzlePiece, FaFilm,
  FaFemale, FaBuilding, FaCut, FaTools
} from 'react-icons/fa';
import useForm from '../hooks/useForm';

const MinistryNeedsPage = () => {
  const [activeTab, setActiveTab] = useState('priority');

  // Form initial values
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    donationAmount: '',
    donationPurpose: '',
    message: ''
  };

  // Mock submit function (would connect to backend in a real app)
  const handleSubmit = async (values) => {
    // Simulate API call
    return new Promise((resolve) => {
      console.log('Form submitted with values:', values);
      setTimeout(resolve, 1000);
    });
  };

  const {
    values,
    errors,
    isSubmitting,
    submitMessage,
    submitStatus,
    handleChange,
    handleSubmit: submitForm
  } = useForm(initialValues, handleSubmit);

  // High Priority Needs
  const priorityNeeds = [
    {
      id: 1,
      title: "Mini Bus (Van) Uganda",
      description: "Help provide transportation for ministry activities and outreach in Uganda.",
      icon: <FaBus size={40} />,
      amount: "$15,000",
      impact: "Enables transportation for ministry teams and supplies"
    },
    {
      id: 2,
      title: "Sound/Music Equipment",
      description: "Support our worship and outreach with quality sound equipment.",
      icon: <FaMusic size={40} />,
      amount: "$5,000",
      impact: "Provides essential equipment for church services and events"
    },
    {
      id: 3,
      title: "New Laptop Computers (4)",
      description: "Help equip our team with the technology needed for ministry work.",
      icon: <FaLaptop size={40} />,
      amount: "$4,000",
      impact: "Provides 4 laptops for ministry administration and outreach"
    },
    {
      id: 4,
      title: "Desktop Computers (4)",
      description: "Support our administrative needs with desktop computers.",
      icon: <FaDesktop size={40} />,
      amount: "$3,200",
      impact: "Equips our office with 4 desktop computers"
    },
    {
      id: 5,
      title: "Digital Cameras (3)",
      description: "Help document our ministry work and share stories of impact.",
      icon: <FaCamera size={40} />,
      amount: "$1,500",
      impact: "Provides 3 digital cameras for ministry documentation"
    },
    {
      id: 6,
      title: "Professional Video Cameras (3)",
      description: "Support our media ministry with professional video equipment.",
      icon: <FaVideo size={40} />,
      amount: "$6,000",
      impact: "Equips our media team with 3 professional video cameras"
    },
    {
      id: 7,
      title: "VA Generators (2)",
      description: "Help provide reliable power for ministry activities.",
      icon: <FaCog size={40} />,
      amount: "$3,000",
      impact: "Provides 2 generators for reliable power supply"
    },
    {
      id: 8,
      title: "School and Children's Home (Busamaga)",
      description: "Support the development of our school and children's home in Busamaga.",
      icon: <FaSchool size={40} />,
      amount: "$25,000",
      impact: "Helps build and maintain facilities for children's education and care"
    },
    {
      id: 9,
      title: "Roofing Material for Rural Village Churches",
      description: "Help provide roofing materials for churches in rural villages.",
      icon: <FaHammer size={40} />,
      amount: "$5,000",
      impact: "Provides roofing for multiple village churches"
    },
    {
      id: 10,
      title: "Land",
      description: "Support the acquisition of land for ministry expansion.",
      icon: <FaMapMarkedAlt size={40} />,
      amount: "$20,000",
      impact: "Helps secure land for future ministry development"
    },
    {
      id: 11,
      title: "Projectors (4)",
      description: "Help equip our teaching and outreach with visual tools.",
      icon: <FaVideo size={40} />,
      amount: "$2,000",
      impact: "Provides 4 projectors for teaching and presentations"
    }
  ];

  // Monthly Ongoing Needs
  const monthlyNeeds = [
    {
      id: 1,
      title: "Rent for Buildings",
      description: "Help cover the monthly rent for our ministry buildings and facilities.",
      icon: <FaBuilding size={40} />,
      amount: "$1,200/month",
      impact: "Provides secure facilities for ministry operations"
    },
    {
      id: 2,
      title: "Bibles",
      description: "Support the distribution of Bibles to pastors, village churches, and prison inmates.",
      icon: <FaBook size={40} />,
      amount: "$500/month",
      impact: "Provides Bibles for spiritual growth and evangelism"
    },
    {
      id: 3,
      title: "Food and Clothes for Orphaned Children",
      description: "Help provide for the basic needs of children at Berakhah Child Care.",
      icon: <FaTshirt size={40} />,
      amount: "$1,000/month",
      impact: "Provides food and clothing for orphaned children"
    },
    {
      id: 4,
      title: "Transportation and Mission Support",
      description: "Support our outreach efforts with transportation and resources.",
      icon: <FaCarSide size={40} />,
      amount: "$800/month",
      impact: "Enables regular outreach to communities in need"
    },
    {
      id: 5,
      title: "Medical Supplies and Mosquito Nets",
      description: "Help provide essential medical supplies and insecticide-treated mosquito nets.",
      icon: <FaFirstAid size={40} />,
      amount: "$600/month",
      impact: "Provides medical care and malaria prevention"
    },
    {
      id: 6,
      title: "Child Sponsorship",
      description: "Support the monthly sponsorship of vulnerable and orphaned children.",
      icon: <FaChild size={40} />,
      amount: "$50/child/month",
      impact: "Provides comprehensive care for a child in need"
    },
    {
      id: 7,
      title: "Village Pastor Support",
      description: "Help support and sponsor pastors serving in village communities.",
      icon: <FaPrayingHands size={40} />,
      amount: "$100/pastor/month",
      impact: "Supports a pastor's ministry in a rural community"
    }
  ];

  // Children's Toys Needs
  const childrenToys = [
    {
      id: 1,
      title: "Small Bicycles (100)",
      description: "Help provide bicycles for children's recreation and transportation.",
      icon: <FaBicycle size={40} />,
      amount: "$5,000",
      impact: "Provides 100 bicycles for children"
    },
    {
      id: 2,
      title: "Swings (100)",
      description: "Support children's play areas with swing sets.",
      icon: <FaChild size={40} />,
      amount: "$3,000",
      impact: "Provides 100 swings for children's recreation"
    },
    {
      id: 3,
      title: "Legos (All Sizes)",
      description: "Help provide educational and fun building toys for children.",
      icon: <FaPuzzlePiece size={40} />,
      amount: "$1,000",
      impact: "Provides various Lego sets for creative play"
    },
    {
      id: 4,
      title: "Cars/Trucks (Large Sizes - 100)",
      description: "Support children's play with toy vehicles.",
      icon: <FaCarSide size={40} />,
      amount: "$1,500",
      impact: "Provides 100 large toy vehicles for children"
    },
    {
      id: 5,
      title: "Bead Table",
      description: "Help provide educational toys for fine motor skill development.",
      icon: <FaGamepad size={40} />,
      amount: "$300",
      impact: "Provides bead tables for educational play"
    },
    {
      id: 6,
      title: "Puzzles",
      description: "Support children's cognitive development with puzzles.",
      icon: <FaPuzzlePiece size={40} />,
      amount: "$500",
      impact: "Provides various puzzles for educational play"
    },
    {
      id: 7,
      title: "Games for Children",
      description: "Help provide games for children's recreation and learning.",
      icon: <FaGamepad size={40} />,
      amount: "$800",
      impact: "Provides various games for children"
    },
    {
      id: 8,
      title: "Videos, Bibles and Books",
      description: "Support children's church with educational and spiritual resources.",
      icon: <FaFilm size={40} />,
      amount: "$1,200",
      impact: "Provides resources for children's spiritual growth"
    }
  ];

  // Women's Ministry Needs
  const womenMinistry = [
    {
      id: 1,
      title: "Land and Building for Women's Training Center",
      description: "Help establish a training center for women's empowerment.",
      icon: <FaBuilding size={40} />,
      amount: "$30,000",
      impact: "Provides a dedicated space for women's training and development"
    },
    {
      id: 2,
      title: "Sewing Machines",
      description: "Support women's vocational training with sewing equipment.",
      icon: <FaTools size={40} />,
      amount: "$2,000",
      impact: "Provides sewing machines for skills training"
    },
    {
      id: 3,
      title: "Hair Dressing Salon Equipment",
      description: "Help equip a salon for women's vocational training.",
      icon: <FaCut size={40} />,
      amount: "$3,500",
      impact: "Provides salon equipment for skills training"
    },
    {
      id: 4,
      title: "Computers for Training Women",
      description: "Support women's digital literacy with computer training.",
      icon: <FaLaptop size={40} />,
      amount: "$4,000",
      impact: "Provides computers for women's education"
    },
    {
      id: 5,
      title: "4WD Van for Village Outreaches",
      description: "Help provide transportation for women's ministry outreach.",
      icon: <FaBus size={40} />,
      amount: "$25,000",
      impact: "Enables outreach to women in remote villages"
    }
  ];

  // Determine which needs to display based on active tab
  const getActiveNeeds = () => {
    switch(activeTab) {
      case 'priority':
        return priorityNeeds;
      case 'monthly':
        return monthlyNeeds;
      case 'toys':
        return childrenToys;
      case 'women':
        return womenMinistry;
      default:
        return priorityNeeds;
    }
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-2 text-center">Ministry Needs</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Support our work and help us make a difference
          </p>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <FaHandHoldingHeart className="text-blue-600 text-6xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Current Ministry Needs</h2>
              <p className="text-gray-600 mb-6">
                International Great Faith Ministries has several ongoing projects and initiatives that need your support.
                Your generous donations help us continue our work in spreading the Gospel, providing humanitarian aid,
                and caring for orphaned and vulnerable children.
              </p>
              <p className="text-gray-600">
                Below are some of our current needs. You can choose to support any of these specific areas or make a
                general donation that will be allocated where it's needed most.
              </p>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            <button
              onClick={() => setActiveTab('priority')}
              className={`px-6 py-3 mx-2 mb-2 rounded-md font-medium transition-colors ${
                activeTab === 'priority'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              High Priority Needs
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-6 py-3 mx-2 mb-2 rounded-md font-medium transition-colors ${
                activeTab === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Monthly Ongoing Needs
            </button>
            <button
              onClick={() => setActiveTab('toys')}
              className={`px-6 py-3 mx-2 mb-2 rounded-md font-medium transition-colors ${
                activeTab === 'toys'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Children's Toys
            </button>
            <button
              onClick={() => setActiveTab('women')}
              className={`px-6 py-3 mx-2 mb-2 rounded-md font-medium transition-colors ${
                activeTab === 'women'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Women's Ministry
            </button>
          </div>

          {/* Category Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600">
              {activeTab === 'priority' && 'High Priority Needs'}
              {activeTab === 'monthly' && 'Monthly Ongoing Needs'}
              {activeTab === 'toys' && 'Children\'s Toys'}
              {activeTab === 'women' && 'Women\'s Ministry Needs'}
            </h2>
            <p className="text-gray-600 mt-2">
              {activeTab === 'priority' && 'These are our most urgent needs to continue and expand our ministry work.'}
              {activeTab === 'monthly' && 'These ongoing needs help sustain our daily ministry operations.'}
              {activeTab === 'toys' && 'Help bring joy to children through educational and recreational toys.'}
              {activeTab === 'women' && 'Support our initiatives to empower and equip women in our communities.'}
            </p>
          </div>

          {/* Ministry Needs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {getActiveNeeds().map((need) => (
              <div
                key={need.id}
                className={`${need.id % 4 === 1 ? 'container-green' : need.id % 4 === 2 ? 'container-purple' : need.id % 4 === 3 ? 'container-blue' : 'container-orange'} rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow transform transition-all duration-300 hover:scale-105 group`}
              >
                <div className="text-white mb-4 flex justify-center transform transition-transform duration-300 group-hover:scale-110">
                  {need.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center transform transition-all duration-300 group-hover:scale-110">{need.title}</h3>
                <p className="mb-4 text-center transition-all duration-300">
                  {need.description}
                </p>
                <div className="bg-gray-50 p-3 rounded-md mb-4 transition-all duration-300 group-hover:bg-blue-50">
                  <p className="font-medium text-gray-700 text-center transition-all duration-300 group-hover:text-blue-700 group-hover:scale-105 transform">{need.amount}</p>
                  <p className="text-sm text-gray-600 text-center transition-all duration-300 group-hover:text-blue-600">{need.impact}</p>
                </div>
                <a
                  href="#donate-form"
                  className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform"
                >
                  Support This Need
                </a>
              </div>
            ))}
          </div>

          {/* Donation Form */}
          <div id="donate-form" className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Make a Donation</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                  {submitMessage || "Thank you for your generous donation! Your support makes a difference."}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={submitForm}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="donationAmount" className="block text-gray-700 mb-1">Donation Amount <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="donationAmount"
                    name="donationAmount"
                    value={values.donationAmount}
                    onChange={handleChange}
                    placeholder="e.g., $50"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.donationAmount ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.donationAmount && (
                    <p className="text-red-500 text-sm mt-1">{errors.donationAmount}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="donationPurpose" className="block text-gray-700 mb-1">Purpose of Donation</label>
                  <select
                    id="donationPurpose"
                    name="donationPurpose"
                    value={values.donationPurpose}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Where Needed Most</option>
                    <optgroup label="High Priority Needs">
                      <option value="Mini Bus">Mini Bus (Van) Uganda</option>
                      <option value="Sound Equipment">Sound/Music Equipment</option>
                      <option value="Laptops">New Laptop Computers</option>
                      <option value="Desktop Computers">Desktop Computers</option>
                      <option value="Digital Cameras">Digital Cameras</option>
                      <option value="Video Cameras">Professional Video Cameras</option>
                      <option value="Generators">VA Generators</option>
                      <option value="School and Children's Home">School and Children's Home</option>
                      <option value="Roofing Material">Roofing Material for Churches</option>
                      <option value="Land">Land</option>
                      <option value="Projectors">Projectors</option>
                    </optgroup>
                    <optgroup label="Monthly Needs">
                      <option value="Rent">Rent for Buildings</option>
                      <option value="Bibles">Bibles</option>
                      <option value="Food and Clothes">Food and Clothes for Children</option>
                      <option value="Transportation">Transportation and Mission Support</option>
                      <option value="Medical Supplies">Medical Supplies and Mosquito Nets</option>
                      <option value="Child Sponsorship">Child Sponsorship</option>
                      <option value="Pastor Support">Village Pastor Support</option>
                    </optgroup>
                    <optgroup label="Children's Toys">
                      <option value="Bicycles">Small Bicycles</option>
                      <option value="Swings">Swings</option>
                      <option value="Legos">Legos</option>
                      <option value="Toy Vehicles">Cars/Trucks</option>
                      <option value="Children's Games">Games and Toys</option>
                    </optgroup>
                    <optgroup label="Women's Ministry">
                      <option value="Women's Training Center">Women's Training Center</option>
                      <option value="Sewing Machines">Sewing Machines</option>
                      <option value="Salon Equipment">Hair Dressing Salon Equipment</option>
                      <option value="Women's Computers">Computers for Women's Training</option>
                      <option value="Women's Outreach Van">4WD Van for Women's Outreach</option>
                    </optgroup>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-1">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={values.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any additional information or special instructions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                  {isSubmitting ? 'Processing...' : 'Donate Now'}
                </button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white border border-blue-200 rounded-xl shadow-md overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Other Ways to Support</h2>
              <p className="mb-6 text-gray-600">
                In addition to financial donations, we also welcome volunteers, prayer partners, and in-kind donations.
                Contact us to learn more about how you can get involved.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryNeedsPage;
