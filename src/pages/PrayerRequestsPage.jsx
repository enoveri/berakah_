import React, { useState, useEffect } from 'react';
import { FaPrayingHands, FaHandHoldingHeart, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import useForm from '../hooks/useForm';
import ReCaptchaComponent from '../components/common/ReCaptcha';

const PrayerRequestsPage = () => {
  // Check localStorage for activeTab preference
  const getInitialTab = () => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      localStorage.removeItem('activeTab'); // Clear after using
      return savedTab;
    }
    return 'request';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());
  const [testimonies, setTestimonies] = useState([
    {
      id: 1,
      name: "Sarah M.",
      testimony: "I was diagnosed with a serious illness and our church family prayed for me continuously. After months of treatment and prayer, I'm now cancer-free! God is faithful!",
      date: "June 15, 2024",
      image: "/photos/Berakhah-Child-care-980x586.jpg"
    },
    {
      id: 2,
      name: "David K.",
      testimony: "My son had been away from the Lord for many years. Our prayer group kept him in prayer every week. Last month, he called to tell me he had returned to church and recommitted his life to Christ!",
      date: "May 22, 2024",
      image: "/photos/Berakhah-Choir-2024-17.jpg"
    },
    {
      id: 3,
      name: "Grace N.",
      testimony: "After praying for a job for 6 months, God opened a door that was better than anything I could have imagined. He truly does exceedingly abundantly above all we ask or think!",
      date: "April 10, 2024",
      image: "/photos/call2prayer.jpg"
    }
  ]);

  // Prayer request form
  const prayerRequestInitialValues = {
    name: '',
    email: '',
    phone: '',
    requestType: 'personal',
    prayerRequest: '',
    isPrivate: false
  };

  const handlePrayerRequestSubmit = async (values) => {
    return new Promise((resolve) => {
      console.log('Prayer request submitted:', values);
      setTimeout(resolve, 1000);
    });
  };

  const {
    values: prayerValues,
    errors: prayerErrors,
    isSubmitting: prayerIsSubmitting,
    submitMessage: prayerSubmitMessage,
    submitStatus: prayerSubmitStatus,
    recaptchaValue: prayerRecaptchaValue,
    resetRecaptcha: prayerResetRecaptcha,
    handleChange: handlePrayerChange,
    handleRecaptchaChange: handlePrayerRecaptchaChange,
    handleSubmit: submitPrayerForm
  } = useForm(prayerRequestInitialValues, handlePrayerRequestSubmit);

  // Testimony form
  const testimonyInitialValues = {
    name: '',
    email: '',
    phone: '',
    testimony: '',
    allowSharing: true
  };

  const handleTestimonySubmit = async (values) => {
    return new Promise((resolve) => {
      console.log('Testimony submitted:', values);
      // Add the testimony to the list (in a real app, this would come from the backend)
      const newTestimony = {
        id: testimonies.length + 1,
        name: values.name,
        testimony: values.testimony,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        image: "/photos/childrens_church-1-980x653.jpeg" // Default image
      };

      setTestimonies([newTestimony, ...testimonies]);
      setTimeout(resolve, 1000);
    });
  };

  const {
    values: testimonyValues,
    errors: testimonyErrors,
    isSubmitting: testimonyIsSubmitting,
    submitMessage: testimonySubmitMessage,
    submitStatus: testimonySubmitStatus,
    recaptchaValue: testimonyRecaptchaValue,
    resetRecaptcha: testimonyResetRecaptcha,
    handleChange: handleTestimonyChange,
    handleRecaptchaChange: handleTestimonyRecaptchaChange,
    handleSubmit: submitTestimonyForm
  } = useForm(testimonyInitialValues, handleTestimonySubmit);

  return (
    <div className="min-h-screen py-16" style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center" style={{ color: '#3B9AE1' }}>Prayer Requests & Testimonies</h1>
          <p className="text-xl mb-12 text-center" style={{ color: '#5D4BA0' }}>
            Share your prayer needs and stories of God's faithfulness
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex">
                <button
                  className={`px-6 py-3 font-medium ${activeTab === 'request' ? 'text-white' : 'bg-white hover:bg-blue-100'}`}
                  style={{
                    background: activeTab === 'request' ? 'linear-gradient(135deg, #1E3A8A 0%, #5D4BA0 100%)' : '',
                    color: activeTab === 'request' ? '#FFF8E6' : '#3B9AE1'
                  }}
                  onClick={() => setActiveTab('request')}
                >
                  Share Prayer Request
                </button>
                <button
                  className={`px-6 py-3 font-medium ${activeTab === 'testimony' ? 'text-white' : 'bg-white hover:bg-blue-100'}`}
                  style={{
                    background: activeTab === 'testimony' ? 'linear-gradient(135deg, #5D4BA0 0%, #1E3A8A 100%)' : '',
                    color: activeTab === 'testimony' ? '#FFF8E6' : '#3B9AE1'
                  }}
                  onClick={() => setActiveTab('testimony')}
                >
                  Share Your Testimony
                </button>
                <button
                  className={`px-6 py-3 font-medium ${activeTab === 'view' ? 'text-white' : 'bg-white hover:bg-blue-100'}`}
                  style={{
                    background: activeTab === 'view' ? 'linear-gradient(135deg, #2A9D8F 0%, #1E3A8A 100%)' : '',
                    color: activeTab === 'view' ? '#FFF8E6' : '#3B9AE1'
                  }}
                  onClick={() => setActiveTab('view')}
                >
                  View Testimonies
                </button>
              </div>
            </div>
          </div>

          {/* Prayer Request Form */}
          {activeTab === 'request' && (
            <div className="rounded-xl shadow-md overflow-hidden mb-12 glow-container prayer-container" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #5D4BA0 100%)' }}>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <FaPrayingHands className="text-6xl" style={{ color: '#FFAF60', filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' }} />
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#FFD8A8' }}>Submit Your Prayer Request</h2>

                {prayerSubmitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                    {prayerSubmitMessage || "Your prayer request has been submitted. Our prayer team will be praying for you."}
                  </div>
                )}

                <form onSubmit={submitPrayerForm}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={prayerValues.name}
                        onChange={handlePrayerChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                        required
                      />
                      {prayerErrors.name && <p className="text-red-300 text-sm mt-1">{prayerErrors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={prayerValues.email}
                        onChange={handlePrayerChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email"
                        required
                      />
                      {prayerErrors.email && <p className="text-red-300 text-sm mt-1">{prayerErrors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-white font-medium mb-1">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={prayerValues.phone}
                      onChange={handlePrayerChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-white font-medium mb-1">Request Type</label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="requestType"
                          value="personal"
                          checked={prayerValues.requestType === 'personal'}
                          onChange={handlePrayerChange}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-white">Personal</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="requestType"
                          value="family"
                          checked={prayerValues.requestType === 'family'}
                          onChange={handlePrayerChange}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-white">Family</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="requestType"
                          value="friend"
                          checked={prayerValues.requestType === 'friend'}
                          onChange={handlePrayerChange}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-white">Friend</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="requestType"
                          value="other"
                          checked={prayerValues.requestType === 'other'}
                          onChange={handlePrayerChange}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-white">Other</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="prayerRequest" className="block text-white font-medium mb-1">Prayer Request</label>
                    <textarea
                      id="prayerRequest"
                      name="prayerRequest"
                      rows="5"
                      value={prayerValues.prayerRequest}
                      onChange={handlePrayerChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please share your prayer request..."
                      required
                    ></textarea>
                    {prayerErrors.prayerRequest && <p className="text-red-300 text-sm mt-1">{prayerErrors.prayerRequest}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="isPrivate"
                        checked={prayerValues.isPrivate}
                        onChange={handlePrayerChange}
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-white">Keep this request private (only the prayer team will see it)</span>
                    </label>
                  </div>

                  {/* ReCAPTCHA */}
                  <div className="mb-6">
                    <ReCaptchaComponent
                      onChange={handlePrayerRecaptchaChange}
                      reset={prayerResetRecaptcha}
                      className="flex justify-center"
                    />
                    {prayerErrors.recaptcha && (
                      <p className="text-red-300 text-sm mt-1">{prayerErrors.recaptcha}</p>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={prayerIsSubmitting}
                      className="dreamy-button px-8 py-3 rounded-md font-bold transition-all"
                      style={{ background: 'linear-gradient(135deg, #E67E22 0%, #B54708 100%)', color: '#FFF8E6' }}
                    >
                      {prayerIsSubmitting ? 'Submitting...' : 'SUBMIT PRAYER REQUEST'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Testimony Form */}
          {activeTab === 'testimony' && (
            <div className="rounded-xl shadow-md overflow-hidden mb-12 glow-container" style={{ background: 'linear-gradient(135deg, #5D4BA0 0%, #1E3A8A 100%)' }}>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <FaHandHoldingHeart className="text-6xl" style={{ color: '#FFAF60', filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' }} />
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#FFD8A8' }}>Share Your Testimony</h2>

                {testimonySubmitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                    {testimonySubmitMessage || "Thank you for sharing your testimony! It has been submitted successfully."}
                  </div>
                )}

                <form onSubmit={submitTestimonyForm}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="testimony-name" className="block text-white font-medium mb-1">Your Name</label>
                      <input
                        type="text"
                        id="testimony-name"
                        name="name"
                        value={testimonyValues.name}
                        onChange={handleTestimonyChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                        required
                      />
                      {testimonyErrors.name && <p className="text-red-300 text-sm mt-1">{testimonyErrors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="testimony-email" className="block text-white font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="testimony-email"
                        name="email"
                        value={testimonyValues.email}
                        onChange={handleTestimonyChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email"
                        required
                      />
                      {testimonyErrors.email && <p className="text-red-300 text-sm mt-1">{testimonyErrors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="testimony-phone" className="block text-white font-medium mb-1">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="testimony-phone"
                      name="phone"
                      value={testimonyValues.phone}
                      onChange={handleTestimonyChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="testimony" className="block text-white font-medium mb-1">Your Testimony</label>
                    <textarea
                      id="testimony"
                      name="testimony"
                      rows="5"
                      value={testimonyValues.testimony}
                      onChange={handleTestimonyChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Share how God has worked in your life..."
                      required
                    ></textarea>
                    {testimonyErrors.testimony && <p className="text-red-300 text-sm mt-1">{testimonyErrors.testimony}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="allowSharing"
                        checked={testimonyValues.allowSharing}
                        onChange={handleTestimonyChange}
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-white">I give permission to share my testimony (we may edit for length and clarity)</span>
                    </label>
                  </div>

                  {/* ReCAPTCHA */}
                  <div className="mb-6">
                    <ReCaptchaComponent
                      onChange={handleTestimonyRecaptchaChange}
                      reset={testimonyResetRecaptcha}
                      className="flex justify-center"
                    />
                    {testimonyErrors.recaptcha && (
                      <p className="text-red-300 text-sm mt-1">{testimonyErrors.recaptcha}</p>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={testimonyIsSubmitting}
                      className="dreamy-button px-8 py-3 rounded-md font-bold transition-all"
                      style={{ background: 'linear-gradient(135deg, #E67E22 0%, #B54708 100%)', color: '#FFF8E6' }}
                    >
                      {testimonyIsSubmitting ? 'Submitting...' : 'SHARE YOUR TESTIMONY'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* View Testimonies */}
          {activeTab === 'view' && (
            <div className="space-y-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#3B9AE1' }}>Recent Testimonies</h2>

              {testimonies.map((testimony, index) => (
                <div key={testimony.id} className={`rounded-xl shadow-md overflow-hidden glow-container variant-${(index % 4) + 1}`}>
                  <div className="md:flex">
                    <div className="md:w-1/3 h-64 md:h-auto">
                      <img
                        src={testimony.image}
                        alt={`${testimony.name}'s Testimony`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center mb-4">
                        <FaQuoteLeft className="mr-2" style={{ color: '#FFAF60' }} />
                        <h3 className="text-xl font-bold" style={{ color: '#FFD8A8' }}>{testimony.name}</h3>
                      </div>
                      <p className="mb-4 italic" style={{ color: '#FFF8E6' }}>"{testimony.testimony}"</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm" style={{ color: '#FFF8E6' }}>{testimony.date}</span>
                        <FaQuoteRight style={{ color: '#FFAF60' }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrayerRequestsPage;
