import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ className = '', rows = 4, ...props }) => {
  return (
    <textarea
      rows={rows}
      className={`w-full font-apfel text-base text-gray-800 bg-white py-3 px-4 border border-gray-300 rounded-md 
                 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30
                 transition-colors duration-200 ease-in-out resize-y ${className}`} // Added resize-y, can be resize-none or resize
      {...props}
    />
  );
};

export default Textarea;
