import React, { useEffect, useState } from 'react';

import { useGenerateId } from 'utils';

import './Radio.css';

interface IRadioItemProps
  extends Omit<
    React.HTMLProps<HTMLInputElement>,
    'onChange' | 'type' | 'name'
  > {
  label: string;
  checked: boolean;
  onChange?: (value: any) => void;
}

export const RadioItem = ({
  onChange,
  label,
  checked,
  ...props
}: IRadioItemProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    try {
      const parsed = JSON.parse(value);

      onChange?.(parsed);
    } catch {
      onChange?.(value);
    }
  };

  const id = useGenerateId([]);

  return (
    <>
      <input
        className="radio"
        type="radio"
        onChange={handleChange}
        checked={checked}
        id={id}
        {...props}
      />
      <label className="radio-label" htmlFor={id}>
        {label}
      </label>
    </>
  );
};

interface IRadioGroupProps<T> {
  options: { value: T; label: string }[];
  onChange?: (value: T) => void;
  value?: T;
}

export const RadioGroup = <T extends string | boolean | number>({
  options,
  value,
  onChange,
}: IRadioGroupProps<T>) => {
  const [selected, setSelected] = useState<T>(value as T);

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  const handleSelect = (value: T) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="row">
      {options.map(({ value, label }, index) => (
        <RadioItem
          key={(value ?? index) as any}
          value={value as any}
          label={label}
          checked={selected === value}
          onChange={handleSelect}
        />
      ))}
    </div>
  );
};
