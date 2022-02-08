import React, { useState } from 'react';

import './Input.css';

interface IInputProps {
  value?: string | number;
  label: string;
  placeholder?: string;
  defaultValue?: string | number;
  type?: 'text' | 'string';
  onChange?: (value: string | number) => void;
}

export const Input = ({
  value,
  defaultValue,
  onChange,
  placeholder,
  label,
  type = 'text',
}: IInputProps) => {
  const [text, setText] = useState(value ?? defaultValue ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setText(value);
    onChange?.(value);
  };

  return (
    <label className="container">
      {label}
      <input
        className="input"
        type={type}
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </label>
  );
};
