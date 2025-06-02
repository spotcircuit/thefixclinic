import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, className = '', ...props }) => {
  return (
    <label
      className={`block font-apfel text-sm text-gray-700 mb-1.5 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
