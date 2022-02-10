import React, { useEffect, useState } from 'react';

import './Datepicker.css';

interface IDatePickerProps
  extends Omit<
    React.HTMLProps<HTMLInputElement>,
    'value' | 'onChange' | 'type' | 'defaultValue'
  > {
  value?: string;
  label: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const Datepicker = ({
  value,
  defaultValue,
  onChange,
  label,
  ...props
}: IDatePickerProps) => {
  const [date, setDate] = useState(value ?? defaultValue ?? '');

  useEffect(() => {
    if (value !== undefined) {
      setDate(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setDate(value);
    onChange?.(value);
  };

  return (
    <label className="label-container">
      {label}
      <input
        className="datepicker"
        type="date"
        value={date}
        onChange={handleChange}
        {...props}
      />
    </label>
  );
};
