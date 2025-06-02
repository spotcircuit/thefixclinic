import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = '', type = 'text', ...props }) => {
  return (
    <input
      type={type}
      className={`w-full font-apfel text-base text-gray-800 bg-white py-3 px-4 border border-gray-300 rounded-md 
                 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30
                 transition-colors duration-200 ease-in-out ${className}`}
      {...props}
    />
  );
};

export default Input;
