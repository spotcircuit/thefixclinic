"use client";

import Link from 'next/link';
import React from 'react';

// Base styling utility function
const getButtonStyles = (variant: 'primary' | 'secondary', extraClassName: string = '') => {
  const baseStyles = 'py-3 px-6 rounded-md transition-colors duration-300 ease-in-out font-apfel focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary text-background hover:bg-opacity-90 focus:ring-primary',
    secondary: 'bg-background text-primary border border-primary hover:bg-primary hover:text-background focus:ring-primary',
  };
  
  return `${baseStyles} ${variantStyles[variant]} ${extraClassName}`;
};

// Button component for regular buttons
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

function ButtonElement({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const combinedClassName = getButtonStyles(variant, className);
  
  return (
    <button type="button" className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

// LinkButton component for links styled as buttons
type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

function LinkButton({
  children,
  href,
  variant = 'primary',
  className = '',
}: LinkButtonProps) {
  const combinedClassName = getButtonStyles(variant, `${className} inline-block text-center`);
  
  // Use React.createElement instead of JSX to bypass ReactNode type issues
  return React.createElement(
    Link,
    { href, className: combinedClassName },
    children
  );
}

// Exported Button component that decides whether to render a button or link
export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}: ButtonProps & { href?: string }) {
  if (href) {
    return (
      <LinkButton href={href} variant={variant} className={className}>
        {children}
      </LinkButton>
    );
  }
  
  return (
    <ButtonElement variant={variant} className={className} {...props}>
      {children}
    </ButtonElement>
  );
}

/*
// Example Usage:
const App = () => (
  <div className="p-4 space-y-2">
    <Button variant="primary" onClick={() => alert('Primary Clicked!')}>
      Primary Button
    </Button>
    <Button variant="secondary" onClick={() => alert('Secondary Clicked!')}>
      Secondary Button
    </Button>
    <Button variant="primary" href="/about">
      Primary Link
    </Button>
    <Button variant="secondary" href="/contact" className="mt-2">
      Secondary Link with extra margin
    </Button>
  </div>
);
*/
