import React from 'react';
import { FaHandHoldingHeart, FaUsers, FaPrayingHands, FaGlobe, FaChild, FaHeart } from 'react-icons/fa';
import useForm from '../hooks/useForm';

const PartnersPage = () => {
  // Form initial values
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
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

  return (
    <div className="min-h-screen bg-white">
      {/* Partner Hero Section with Background Image */}
      <div className="sponsor-hero-section">
        <div
          className="bg-image"
          style={{ backgroundImage: "url('/photos/pastors-2.jpg')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <div className="container mx-auto">
            <h1>PARTNER WITH US</h1>
            <h2>JOIN OUR MISSION. MAKE A DIFFERENCE.</h2>
            <p>
              Our Friends and Partners help us greatly to take the love of God and the Gospel
              of our Lord Jesus Christ to many rural communities in Uganda and beyond. Your
              prayers, support, and love uphold this ministry as we reach villages, schools,
              prisons, and nations.
            </p>
            <p>
              Your partnership provides the much-needed love, care, and hope for orphaned
              and vulnerable children at Berakhah Childcare. As the needs continue to grow,
              we're challenged to increase our outreach efforts in the communities we serve.
            </p>
            <a href="#/sponsor-child" className="cta-button">
              SPONSOR A CHILD
            </a>
          </div>
        </div>
      </div>

      {/* Sponsorship Options */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">Ways You Can Partner With Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="partner-box rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow transform transition-all duration-300 hover:scale-105">
                <div className="mb-4">
                  <FaChild size={48} color="black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Child Sponsorship</h3>
                <p className="mb-4">
                  Sponsor a child at Berakhah Childcare and provide education, healthcare, and a loving environment.
                </p>
                <a
                  href="/sponsor-child"
                  className="inline-block px-6 py-3 bg-blue-700 text-white rounded-md font-semibold text-lg hover:bg-blue-800 transition-colors shadow-md"
                >
                  View Children
                </a>
              </div>

              <div className="partner-box rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow transform transition-all duration-300 hover:scale-105">
                <div className="mb-4">
                  <FaPrayingHands size={48} color="black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ministry Support</h3>
                <p>
                  Support our outreach efforts in villages, schools, and prisons to spread the Gospel.
                </p>
              </div>

              <div className="partner-box rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow transform transition-all duration-300 hover:scale-105">
                <div className="mb-4">
                  <FaHandHoldingHeart size={48} color="black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Humanitarian Aid</h3>
                <p>
                  Help provide medical supplies, food, and other essential needs to vulnerable communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner With Us Form Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Partner With Us</h2>
              <p className="text-xl text-gray-700">
                Join Us – Partner for Change!
              </p>
              <p className="text-gray-700 mt-4">
                Make a lasting impact on less privileged communities, vulnerable and orphaned children by partnering with Us. Together we rewrite stories, restore hope for the hopeless, eternally changing lives.
              </p>
            </div>

            {/* Partner Form */}
            <div className="rounded-xl shadow-md overflow-hidden glow-container" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #5D4BA0 100%)' }}>
              <div className="p-8">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                    {submitMessage}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                    {submitMessage}
                  </div>
                )}

                <div className="flex justify-center mb-6">
                  <FaHandHoldingHeart className="text-6xl" style={{ color: '#FFAF60', filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' }} />
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#FFD8A8' }}>Partner With Us</h2>

                <form onSubmit={submitForm}>
                  {/* Name Fields */}
                  <div className="mb-6">
                    <label className="block text-white font-medium mb-2">Name <span className="text-red-300">*</span></label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="First"
                        />
                        {errors.firstName && (
                          <p className="text-red-300 text-sm mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Last"
                        />
                        {errors.lastName && (
                          <p className="text-red-300 text-sm mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email <span className="text-red-300">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-white font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-300 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Address */}
                  <div className="mb-6">
                    <label htmlFor="address" className="block text-white font-medium mb-2">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Address"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="addressLine1" className="block text-white font-medium mb-2">Address Line 1</label>
                    <input
                      type="text"
                      id="addressLine1"
                      name="addressLine1"
                      value={values.addressLine1}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Address Line 1"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="addressLine2" className="block text-white font-medium mb-2">Address Line 2</label>
                    <input
                      type="text"
                      id="addressLine2"
                      name="addressLine2"
                      value={values.addressLine2}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Address Line 2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="city" className="block text-white font-medium mb-2">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-white font-medium mb-2">State / Province / Region</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="State / Province / Region"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="postalCode" className="block text-white font-medium mb-2">Postal Code</label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={values.postalCode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Postal Code"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-white font-medium mb-2">Country</label>
                      <select
                        id="country"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">--- Select country ---</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="UG">Uganda</option>
                        <option value="KE">Kenya</option>
                        <option value="TZ">Tanzania</option>
                        <option value="RW">Rwanda</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white font-medium mb-2">Comment or Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={values.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  {/* reCAPTCHA placeholder */}
                  <div className="mb-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="human"
                        className="mr-2"
                      />
                      <label htmlFor="human" className="text-white">I am human</label>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="dreamy-button px-8 py-3 rounded-md font-bold transition-all"
                      style={{ background: 'linear-gradient(135deg, #E67E22 0%, #B54708 100%)', color: '#FFF8E6' }}
                    >
                      {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
