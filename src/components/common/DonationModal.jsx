import React, { useEffect, useRef, useState } from 'react';
import { FaHandHoldingHeart, FaTimes } from 'react-icons/fa';
import ReCaptchaComponent from './ReCaptcha';

/**
 * Modal component for donations
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {Function} props.onClose - Function to call when modal is closed
 * @param {Object} props.selectedNeed - The need that was selected
 * @param {Object} props.formState - Form state from useForm hook
 * @returns {JSX.Element} - Modal component
 */
const DonationModal = ({
  isOpen,
  onClose,
  selectedNeed,
  formState: {
    values,
    errors,
    isSubmitting,
    submitMessage,
    submitStatus,
    recaptchaValue,
    resetRecaptcha,
    handleChange,
    handleRecaptchaChange,
    handleSubmit
  }
}) => {
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open and scroll to top
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Scroll to the top of the page to ensure modal is visible
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Use a responsive approach for the modal
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  if (!isOpen) return null;

  // Update window size on resize
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine if we should use compact reCAPTCHA
  const useCompactRecaptcha = windowSize.width < 400;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-70 p-4 overflow-y-auto">
      <div
        ref={modalRef}
        className="dark-blue-section max-w-2xl w-full mt-0 md:mt-4 mb-4 md:mb-8 rounded-xl shadow-2xl"
        style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #5D4BA0 100%)' }}
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold dark-blue-heading">Support This Need</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Selected Need Info */}
          {selectedNeed && (
            <div className="mb-6 p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="flex items-center mb-3">
                <div className="mr-4 dark-blue-icon-highlight" style={{ fontSize: '2rem' }}>
                  {selectedNeed.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold dark-blue-heading">{selectedNeed.title}</h3>
                  <p className="text-sm dark-blue-text-light">{selectedNeed.amount}</p>
                </div>
              </div>
              <p className="dark-blue-text mb-2">{selectedNeed.description}</p>
              <p className="text-sm dark-blue-text-light italic">{selectedNeed.impact}</p>
            </div>
          )}

          {/* Form Status Messages */}
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

          {/* Donation Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block dark-blue-text-light mb-1">First Name <span className="text-red-300">*</span></label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  className={`dark-blue-form-control w-full px-4 py-2 rounded-md ${
                    errors.firstName ? 'border-red-500' : ''
                  }`}
                  required
                />
                {errors.firstName && (
                  <p className="text-red-300 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block dark-blue-text-light mb-1">Last Name <span className="text-red-300">*</span></label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  className={`dark-blue-form-control w-full px-4 py-2 rounded-md ${
                    errors.lastName ? 'border-red-500' : ''
                  }`}
                  required
                />
                {errors.lastName && (
                  <p className="text-red-300 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block dark-blue-text-light mb-1">Email <span className="text-red-300">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`dark-blue-form-control w-full px-4 py-2 rounded-md ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block dark-blue-text-light mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  className="dark-blue-form-control w-full px-4 py-2 rounded-md"
                />
                {errors.phone && (
                  <p className="text-red-300 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="donationAmount" className="block dark-blue-text-light mb-1">Donation Amount <span className="text-red-300">*</span></label>
              <input
                type="text"
                id="donationAmount"
                name="donationAmount"
                value={values.donationAmount || selectedNeed?.amount || ''}
                onChange={handleChange}
                placeholder="e.g., $50"
                className={`dark-blue-form-control w-full px-4 py-2 rounded-md ${
                  errors.donationAmount ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.donationAmount && (
                <p className="text-red-300 text-sm mt-1">{errors.donationAmount}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block dark-blue-text-light mb-1">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={values.message}
                onChange={handleChange}
                className="dark-blue-form-control w-full px-4 py-2 rounded-md"
                placeholder="Any additional information or special instructions..."
              ></textarea>
            </div>

            {/* ReCAPTCHA */}
            <div className="mb-6">
              <div className="flex justify-center overflow-x-auto">
                <ReCaptchaComponent
                  onChange={handleRecaptchaChange}
                  reset={resetRecaptcha}
                  className="recaptcha-responsive"
                  size={useCompactRecaptcha ? 'compact' : 'normal'}
                />
              </div>
              {errors.recaptcha && (
                <p className="text-red-300 text-sm mt-1 text-center">{errors.recaptcha}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="dreamy-button px-8 py-3 rounded-md font-bold transition-all"
                style={{ background: 'linear-gradient(135deg, #E67E22 0%, #B54708 100%)', color: '#FFF8E6' }}
              >
                {isSubmitting ? 'Processing...' : 'DONATE NOW'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
