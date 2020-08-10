import React, { FunctionComponent } from 'react';

import './Button.scss';

const Button: FunctionComponent<ButtonProps> = ({
  label,
  onClick,
}: ButtonProps) => {
  const className = 'button';

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default Button;
