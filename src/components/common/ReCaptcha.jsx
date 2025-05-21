import React, { useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

/**
 * ReCaptcha component for form validation
 * @param {Object} props - Component props
 * @param {Function} props.onChange - Function to call when reCAPTCHA value changes
 * @param {boolean} props.reset - Flag to reset the reCAPTCHA
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.size - Size of the reCAPTCHA widget (normal or compact)
 * @returns {JSX.Element} - ReCaptcha component
 */
const ReCaptchaComponent = ({ onChange, reset, className = '', size = 'normal' }) => {
  // Use a temporary site key for development
  // Replace with your actual site key in production
  const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Google's test key

  const recaptchaRef = useRef(null);

  // Reset reCAPTCHA when reset prop changes
  useEffect(() => {
    if (reset && recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }, [reset]);

  return (
    <div className={`recaptcha-container ${className}`}>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={onChange}
        theme="light"
        size={size}
      />
    </div>
  );
};

export default ReCaptchaComponent;
