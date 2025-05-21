import { useState } from 'react';
import { isValidEmail, isValidPhone } from '../utils/helpers';

/**
 * Custom hook for form handling
 * @param {Object} initialValues - Initial form values
 * @param {Function} onSubmit - Submit handler function
 * @param {Function} validate - Optional validation function
 * @returns {Object} - Form state and handlers
 */
const useForm = (initialValues, onSubmit, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [resetRecaptcha, setResetRecaptcha] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  // Handle reCAPTCHA change
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  // Basic validation
  const validateForm = () => {
    let formErrors = {};

    // Check if custom validation function was provided
    if (validate) {
      formErrors = validate(values);
    } else {
      // Default validation
      if (!values.name?.trim()) {
        formErrors.name = 'Name is required';
      }

      if (!values.email?.trim()) {
        formErrors.email = 'Email is required';
      } else if (!isValidEmail(values.email)) {
        formErrors.email = 'Email is invalid';
      }

      if (values.phone && !isValidPhone(values.phone)) {
        formErrors.phone = 'Phone number is invalid';
      }

      if (values.message && values.message.trim().length < 10) {
        formErrors.message = 'Message must be at least 10 characters';
      }

      // Validate reCAPTCHA
      if (!recaptchaValue) {
        formErrors.recaptcha = 'Please complete the reCAPTCHA verification';
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    const isValid = validateForm();

    if (isValid) {
      try {
        // Include recaptcha value with form data
        const formData = {
          ...values,
          recaptchaToken: recaptchaValue
        };

        await onSubmit(formData);
        setSubmitMessage('Your submission was successful!');
        setSubmitStatus('success');

        // Reset form if submission was successful
        setValues(initialValues);
        setRecaptchaValue(null);
        setResetRecaptcha(prev => !prev); // Toggle to trigger reset
      } catch (error) {
        setSubmitMessage(error.message || 'There was an error with your submission. Please try again.');
        setSubmitStatus('error');
      }
    }

    setIsSubmitting(false);
  };

  // Reset the form
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitMessage('');
    setSubmitStatus('');
    setRecaptchaValue(null);
    setResetRecaptcha(prev => !prev); // Toggle to trigger reset
  };

  return {
    values,
    errors,
    isSubmitting,
    submitMessage,
    submitStatus,
    recaptchaValue,
    resetRecaptcha,
    handleChange,
    handleRecaptchaChange,
    handleSubmit,
    resetForm
  };
};

export default useForm;
