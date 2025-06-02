"use client";

import React, { SelectHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

const Select = ({ className, children, ...props }: SelectProps) => {
  return (
    <select
      className={cn(
        "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
        props.disabled && "bg-gray-100 cursor-not-allowed text-gray-500",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
