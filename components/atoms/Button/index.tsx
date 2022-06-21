import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      className={`w-auto h-10 ${
        disabled ? 'bg-gray-600' : 'bg-iris-100'
      } text-white py-2 px-4 rounded`}
    >
      {label}
    </button>
  );
};

export default Button;
