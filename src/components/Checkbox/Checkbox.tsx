import React, { useEffect, useState } from 'react';

import { useGenerateId } from 'utils';

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

  const id = useGenerateId([]);

  return (
    <>
      <input
        className="checkbox"
        checked={checked}
        onChange={handleChange}
        type="checkbox"
        id={id}
        {...props}
      />
      <label htmlFor={id} className="label-container">
        {label}
      </label>
    </>
  );
};
