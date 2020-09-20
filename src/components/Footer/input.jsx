import React from 'react';

const InputGroup = ({
  id,
  type,
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
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      required={required}
      onChange={handleChange}
    />
  </p>
);

export default InputGroup;