import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
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
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 text-blue-600">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Address</h3>
                      <p className="text-gray-600">Mbale City</p>
                      <p className="text-gray-600">P.O.BOX 123, Mbale</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 text-blue-600">
                      <FaPhone size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Phone</h3>
                      <p className="text-gray-600">+256 700 000000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 text-blue-600">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <p className="text-gray-600">connect@berakahchurch.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium text-gray-800 mb-2">Service Times</h3>
                  <p className="text-gray-600">Sunday: 9:00 AM & 11:00 AM</p>
                  <p className="text-gray-600">Wednesday: 6:00 PM (Prayer Service)</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>

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
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
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
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
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
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
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
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
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
                    className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h2>
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
                  <FaMapMarkerAlt className="text-red-600 animate-pulse" size={50} />
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-blue-600 font-medium">Call2Prayer Church Mbale</p>
                <p className="text-gray-600">Mbale, Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
