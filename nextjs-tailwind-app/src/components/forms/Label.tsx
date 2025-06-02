"use client";

import React, { LabelHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label 
      className={cn(
        "block text-sm font-medium text-gray-700 mb-1",
        className
      )} 
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
