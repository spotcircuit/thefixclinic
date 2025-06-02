import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode; // To pass <option> elements
  className?: string;
}

const Select: React.FC<SelectProps> = ({ children, className = '', ...props }) => {
  return (
    <select
      className={`w-full font-apfel text-base text-gray-800 bg-white py-3 px-4 border border-gray-300 rounded-md 
                 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30
                 transition-colors duration-200 ease-in-out appearance-none pr-8 
                 bg-no-repeat bg-right px-4 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
