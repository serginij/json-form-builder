import React, { useEffect, useState } from 'react';

import './Textarea.css';

interface ITextareaProps
  extends Omit<
    React.HTMLProps<HTMLTextAreaElement>,
    'value' | 'onChange' | 'defaultValue'
  > {
  value?: string;
  label?: string;
  defaultValue?: string;
  className?: string;

  onChange?: (value: string) => void;
}

export const Textarea = ({
  value,
  defaultValue,
  onChange,
  label,
  type = 'text',
  className = '',
  ...props
}: ITextareaProps) => {
  const [text, setText] = useState(value ?? defaultValue ?? '');

  useEffect(() => {
    if (value !== undefined) {
      setText(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setText(value);
    onChange?.(value);
  };

  return (
    <label className="label-container">
      {label}
      <textarea
        className={`textarea ${className}`}
        value={text}
        onChange={handleChange}
        {...props}
      />
    </label>
  );
};
