import React from 'react';

import './Button.css';

interface IButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'value' | 'type'> {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'contained' | 'outlined';
}

export const Button = ({
  text,
  type = 'button',
  children,
  variant,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={`button ${variant === 'outlined' ? 'button_outlined' : ''}`}
      type={type}
      {...props}
    >
      {children ?? text}
    </button>
  );
};
