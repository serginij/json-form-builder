import React, { useEffect, useMemo, useState } from 'react';

import { generateId } from 'utils';

import './Radio.css';

interface IRadioItemProps
  extends Omit<
    React.HTMLProps<HTMLInputElement>,
    'onChange' | 'type' | 'name'
  > {
  label: string;
  checked: boolean;
  id: string;
  onChange?: (id: string) => void;
}

export const RadioItem = ({
  onChange,
  label,
  checked,
  id,
  ...props
}: IRadioItemProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;

    onChange?.(id);
  };

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
  label: string;
}

export const RadioGroup = <T extends string | boolean | number>({
  options,
  value,
  onChange,
  label,
}: IRadioGroupProps<T>) => {
  const [selected, setSelected] = useState('');

  const optionsById = useMemo(
    () =>
      new Map(
        options.map((option) => {
          const id = generateId();
          return [id, { ...option, id }];
        }),
      ),
    [options],
  );

  const optionsWithId = useMemo(
    () => Array.from(optionsById.values()),
    [optionsById],
  );

  useEffect(() => {
    if (value) {
      const option = optionsWithId.find((option) => option.value === value);
      option && setSelected(option.id);
    }
  }, [value, optionsWithId]);

  const handleSelect = (id: string) => {
    setSelected(id);
    onChange?.(optionsById.get(id)?.value ?? ('' as T));
  };

  return (
    <label className="label-container">
      {label}
      <div className="row">
        {optionsWithId.map(({ value, label, id }, index) => (
          <RadioItem
            key={id}
            id={id}
            value={value as any}
            label={label}
            checked={selected === id}
            onChange={handleSelect}
          />
        ))}
      </div>
    </label>
  );
};
