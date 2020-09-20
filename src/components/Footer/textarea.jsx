import React from 'react';

const TextAreaGroup = ({
  id,
  label,
  name,
  value,
  required,
  handleChange,
}) => (
  <p>
    <label htmlFor={id}>
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      required={required}
      onChange={handleChange}
    />
  </p>
);

export default TextAreaGroup;