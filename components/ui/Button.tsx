import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  target,
  rel,
  fullWidth = false,
  disabled = false,
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-white focus:ring-primary-dark',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    text: 'text-primary hover:text-primary-dark underline focus:ring-primary',
  };
  
  // Combined styles
  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  // If disabled
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const finalStyles = `${combinedStyles} ${disabledStyles}`;
  
  // Render link or button
  if (href) {
    return (
      <Link
        href={href}
        className={finalStyles}
        target={target}
        rel={rel}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={finalStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;