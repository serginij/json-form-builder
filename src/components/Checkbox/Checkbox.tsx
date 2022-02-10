import React, { useEffect, useState } from 'react';

import './Checkbox.css';

interface ICheckboxProps
  extends Omit<
    React.HTMLProps<HTMLInputElement>,
    'value' | 'onChange' | 'defaultValue' | 'type'
  > {
  value?: boolean;
  label: string;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox = ({
  value,
  defaultValue,
  onChange,
  label,
  ...props
}: ICheckboxProps) => {
  const [checked, setChecked] = useState(value ?? defaultValue ?? false);

  useEffect(() => {
    setChecked(value ?? false);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;

    setChecked(value);
    onChange?.(value);
  };

  return (
    <label className="label-container">
      {label}
      <input
        className="checkbox"
        checked={checked}
        onChange={handleChange}
        type="checkbox"
        {...props}
      />
    </label>
  );
};
