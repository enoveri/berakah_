import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import useForm from '../hooks/useForm';

const ContactPage = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
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
    <div className="min-h-screen py-16" style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: '#3B9AE1' }}>Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="rounded-xl shadow-md overflow-hidden glow-container contact-container" style={{ background: 'linear-gradient(135deg, #2A9D8F 0%, #1E3A8A 100%)' }}>
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-6" style={{ color: '#FFD8A8' }}>Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <FaMapMarkerAlt size={24} style={{ color: '#FFAF60' }} />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: '#FFD8A8' }}>Uganda Office</h3>
                      <p style={{ color: '#FFF8E6' }}>P.O. BOX 28501, Kampala, Uganda</p>
                      <h3 className="font-medium mt-2" style={{ color: '#FFD8A8' }}>USA Office</h3>
                      <p style={{ color: '#FFF8E6' }}>P.O. Box 722102, Houston, TX 77272 USA</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4">
                      <FaPhone size={24} style={{ color: '#FFAF60' }} />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: '#FFD8A8' }}>Uganda Phone</h3>
                      <p style={{ color: '#FFF8E6' }}>+256 788 365 566</p>
                      <p style={{ color: '#FFF8E6' }}>+256 781 849 038</p>
                      <p style={{ color: '#FFF8E6' }}>+256 770 369 912</p>
                      <h3 className="font-medium mt-2" style={{ color: '#FFD8A8' }}>USA Phone</h3>
                      <p style={{ color: '#FFF8E6' }}>+1 281 617 9943</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4">
                      <FaEnvelope size={24} style={{ color: '#FFAF60' }} />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: '#FFD8A8' }}>Email</h3>
                      <p style={{ color: '#FFF8E6' }}>igfm@gidudu.org</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-2" style={{ color: '#FFD8A8' }}>Service Times</h3>
                  <p style={{ color: '#FFF8E6' }}>Sunday: 9:00 AM & 11:00 AM</p>
                  <p style={{ color: '#FFF8E6' }}>Wednesday: 6:00 PM (Prayer Service)</p>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-3" style={{ color: '#FFD8A8' }}>Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/gidudu" target="_blank" rel="noopener noreferrer" style={{ color: '#7FCDFF' }} className="hover:opacity-80">
                      <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com/paulgidudu" target="_blank" rel="noopener noreferrer" style={{ color: '#7FCDFF' }} className="hover:opacity-80">
                      <FaTwitter size={24} />
                    </a>
                    <a href="https://www.instagram.com/igfmuganda" target="_blank" rel="noopener noreferrer" style={{ color: '#FFAF60' }} className="hover:opacity-80">
                      <FaInstagram size={24} />
                    </a>
                    <a href="http://www.youtube.com/user/PaulGidudu" target="_blank" rel="noopener noreferrer" style={{ color: '#FFAF60' }} className="hover:opacity-80">
                      <FaYoutube size={24} />
                    </a>
                    <a href="https://www.linkedin.com/company/international-great-faith-ministries" target="_blank" rel="noopener noreferrer" style={{ color: '#7FCDFF' }} className="hover:opacity-80">
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl shadow-md overflow-hidden glow-container variant-2">
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-6" style={{ color: '#FFD8A8' }}>Send Us a Message</h2>

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

                <form onSubmit={submitForm}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2" style={{ color: '#FFF8E6' }}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2" style={{ color: '#FFF8E6' }}>Email</label>
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
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block mb-2" style={{ color: '#FFF8E6' }}>Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={values.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2" style={{ color: '#FFF8E6' }}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={values.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your message"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="dreamy-button w-full py-3 rounded-md font-medium transition-all disabled:opacity-70"
                    style={{ background: 'linear-gradient(135deg, #E67E22 0%, #B54708 100%)', color: '#FFF8E6' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-xl shadow-md overflow-hidden glow-container variant-3">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-6" style={{ color: '#FFD8A8' }}>Our Location</h2>
              <div className="h-96 w-full rounded-lg overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7575146396247!2d34.1719521!3d1.0865938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177fa0d6c74d65c5%3A0xb72f20a1b2b322e3!2sCall2Prayer%20Church%20Mbale!5e0!3m2!1sen!2sus!4v1716152825673!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Call2Prayer Church Mbale Location"
                  className="rounded-lg"
                ></iframe>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <FaMapMarkerAlt style={{ color: '#E67E22' }} className="animate-pulse" size={50} />
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-medium" style={{ color: '#FFD8A8' }}>Call2Prayer Church Mbale</p>
                <p style={{ color: '#FFF8E6' }}>Mbale, Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
