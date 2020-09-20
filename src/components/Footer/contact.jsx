import React, { useState } from 'react';
import ContactForm from './form';

const Contact = ({ className }) => {
  const encode = (data) => Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  const initialFormState = {
    formName: 'contact',
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => (
    Object.values(formData).every(Boolean)
  );

  const handleSubmit = (event) => {
    if (isFormValid()) {
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({
          'form-name': initialFormState.formName,
          ...formData,
        }),
      })
        .then(() => setStatus('Form Submission Successful!'))
        .catch((error) => setStatus(`Form Submission Failed! ${error}`));
    }

    event.preventDefault();
  };

  return (
    <>
      <ContactForm
        id="contactForm"
        status={status}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        className={className}
        formData={formData}
      />
    </>
  );
};
export default Contact;