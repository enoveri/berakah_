import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useForm from '../hooks/useForm';

const SponsorChildDetailPage = () => {
  const { childName } = useParams();
  const decodedChildName = decodeURIComponent(childName || '');
  
  // Form initial values
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    sponsorshipAmount: '50',
    paymentFrequency: 'monthly',
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
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link to="/sponsor-child" className="text-blue-600 hover:text-blue-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to All Children
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-blue-600 mb-4">Sponsor {decodedChildName}</h1>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <span className="text-gray-500">Child Photo</span>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{decodedChildName}</h2>
                    <p className="text-gray-600 mb-1">Age: [Child's Age]</p>
                    <p className="text-gray-600 mb-1">Location: Mbale, Uganda</p>
                    <p className="text-gray-600">Interests: [Child's Interests]</p>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-6">
                    By sponsoring {decodedChildName}, you'll be providing essential support for their education, 
                    healthcare, nutrition, and overall well-being. Your monthly contribution will make a significant 
                    difference in their life and future.
                  </p>
                  
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                      {submitMessage || `Thank you for sponsoring ${decodedChildName}! We'll be in touch with more information soon.`}
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
                    
                    <div className="mb-4">
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
                    
                    <div className="mb-4">
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
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-1">Sponsorship Amount <span className="text-red-500">*</span></label>
                      <div className="grid grid-cols-3 gap-4">
                        <label className="flex items-center">
                          <input 
                            type="radio" 
                            name="sponsorshipAmount" 
                            value="20"
                            checked={values.sponsorshipAmount === '20'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          $20/month
                        </label>
                        <label className="flex items-center">
                          <input 
                            type="radio" 
                            name="sponsorshipAmount" 
                            value="50"
                            checked={values.sponsorshipAmount === '50'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          $50/month
                        </label>
                        <label className="flex items-center">
                          <input 
                            type="radio" 
                            name="sponsorshipAmount" 
                            value="100"
                            checked={values.sponsorshipAmount === '100'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          $100/month
                        </label>
                      </div>
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
                        placeholder="Share why you're sponsoring this child..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                    >
                      {isSubmitting ? 'Processing...' : 'Sponsor Now'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorChildDetailPage;
