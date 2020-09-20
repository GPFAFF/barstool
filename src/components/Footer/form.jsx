import React from 'react';
import InputGroup from './input';
import TextAreaGroup from './textarea';

const ContactForm = ({
  className,
  formData,
  handleChange,
  handleSubmit,
  status,
  id,
}) => {
  const {
    formName,
    name,
    email,
    message,
  } = formData;

  return (
    <section id={id} className={className}>
      <div className="primary-color">
        {status ? (
          <h2>{status}</h2>
        ) : (
          <form
            name={formName}
            data-netlify="true"
            onSubmit={handleSubmit}
            data-netlify-honeypot="bot-field"
            id="contact-form"
            noValidate
            method="POST"
          >
            <input type="hidden" name={formName} value="contact" />
            <InputGroup
              id="name"
              type="text"
              name="name"
              label="Your Name:"
              value={name}
              required
              handleChange={handleChange}
            />
            <InputGroup
              id="email"
              type="email"
              name="email"
              label="Your Email:"
              value={email}
              required
              handleChange={handleChange}
            />
            <TextAreaGroup
              id="message"
              name="message"
              label="Your Message:"
              value={message}
              required
              handleChange={handleChange}
            />
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;