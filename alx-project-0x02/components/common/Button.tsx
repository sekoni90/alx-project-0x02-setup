// components/common/Button.tsx
import React from 'react';
import  { type ButtonProps } from '../../interfaces';

const sizeMap: Record<ButtonProps['size'], string> = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
  // Use the typed map so TS knows this is always a string
  const sizeClasses: string = sizeMap[size] ?? 'px-4 py-2 text-base';
  const shapeClass: string = shape ?? 'rounded-md';

  return (
    <button
      onClick={onClick}
      className= "{bg-blue-600 text-white ${sizeClasses} ${shapeClass} hover:bg-blue-700 transition}"
      type= "button"
      >
      {children}
    </button>
  );
};

export default Button;