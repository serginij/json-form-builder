import React, { useState } from 'react';

import './Textarea.css';

interface ITextareaProps
  extends Omit<
    React.HTMLProps<HTMLTextAreaElement>,
    'value' | 'onChange' | 'defaultValue'
  > {
  value?: string;
  label: string;
  defaultValue?: string;

  onChange?: (value: string) => void;
}

export const Textarea = ({
  value,
  defaultValue,
  onChange,
  label,
  type = 'text',
  ...props
}: ITextareaProps) => {
  const [text, setText] = useState(value ?? defaultValue ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setText(value);
    onChange?.(value);
  };

  return (
    <label className="label-container">
      {label}
      <textarea
        className="textarea"
        value={text}
        onChange={handleChange}
        {...props}
      />
    </label>
  );
};
