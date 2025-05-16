// Common utility functions for the church website

/**
 * Format a date to a readable string
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string
 */
export const formatDate = (date) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Truncate text to a specified length and add ellipsis if needed
 * @param {string} text - The text to truncate
 * @param {number} length - The maximum length
 * @returns {string} - Truncated text
 */
export const truncateText = (text, length = 100) => {
  if (!text || text.length <= length) return text;
  return `${text.substring(0, length)}...`;
};

/**
 * Validate email format
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
export const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Validate phone number format
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - Whether the phone number is valid
 */
export const isValidPhone = (phone) => {
  const re = /^\+?[0-9]{10,15}$/;
  return re.test(String(phone).replace(/[\s-]/g, ''));
};

/**
 * Get the current year for copyright notice
 * @returns {number} - The current year
 */
export const getCurrentYear = () => {
  return new Date().getFullYear();
};

/**
 * Handle form submission for contact forms
 * @param {Event} e - The form submit event
 * @param {Object} formData - The form data
 * @param {Function} onSuccess - Success callback
 * @param {Function} onError - Error callback
 */
export const handleFormSubmit = (e, formData, onSuccess, onError) => {
  e.preventDefault();
  
  // Basic validation
  if (!formData.name || !formData.email) {
    onError('Please fill in all required fields');
    return;
  }
  
  if (!isValidEmail(formData.email)) {
    onError('Please enter a valid email address');
    return;
  }
  
  if (formData.phone && !isValidPhone(formData.phone)) {
    onError('Please enter a valid phone number');
    return;
  }
  
  // Simulate form submission (in a real app, this would send data to a server)
  setTimeout(() => {
    console.log('Form submitted:', formData);
    onSuccess('Your message has been sent successfully!');
  }, 1000);
};
