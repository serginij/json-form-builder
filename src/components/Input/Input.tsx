import React, { useEffect, useState } from 'react';

import './Input.css';

interface IInputProps
  extends Omit<
    React.HTMLProps<HTMLInputElement>,
    'value' | 'onChange' | 'type' | 'defaultValue'
  > {
  value?: string | number;
  label: string;
  defaultValue?: string | number;
  type?: Extract<
    React.HTMLInputTypeAttribute,
    'text' | 'number' | 'file' | 'password' | 'email'
  >;
  onChange?: (value: string | number) => void;
}

export const Input = ({
  value,
  defaultValue,
  onChange,
  label,
  type = 'text',
  ...props
}: IInputProps) => {
  const [text, setText] = useState(value ?? defaultValue ?? '');

  useEffect(() => {
    if (value !== undefined) {
      setText(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setText(value);
    onChange?.(value);
  };

  return (
    <label className="label-container">
      {label}
      <input
        className="input"
        type={type}
        value={text}
        onChange={handleChange}
        {...props}
      />
    </label>
  );
};
