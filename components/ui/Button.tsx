import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'header' | 'text' | 'cta-inverted-pill';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
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
  // Base styles for layout, transitions, and accessibility
  const baseUiStyles = 'inline-block text-center no-underline transition-all duration-300 ease-in-out select-none focus:outline-none';

  // Specific variant classes from production.css or Tailwind for others
  let variantClass = '';
  switch (variant) {
    case 'primary':
      variantClass = 'btn-primary';
      break;
    case 'secondary':
      variantClass = 'btn-secondary';
      break;
    case 'outline': 
      variantClass = 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white font-apfel font-semibold uppercase tracking-wide';
      break;
    case 'header':
      variantClass = 'btn-header';
      break;
    case 'text':
      variantClass = 'bg-transparent text-primary border-0 hover:text-primary-light underline font-apfel font-semibold uppercase tracking-wide';
      break;
    case 'cta-inverted-pill':
      variantClass = 'btn-cta-inverted-pill';
      break;
    default:
      variantClass = 'btn-primary'; // Default to primary
  }

  // Size styles - these will primarily affect 'outline' and 'text' variants if not overridden by btn-primary/secondary
  // For btn-primary and btn-secondary, padding and font-size are in production.css
  const sizeSpecificStyles = {
    sm: 'py-2 px-6 text-sm',
    md: 'py-3 px-10 text-base', // Adjusted for non btn-primary/secondary
    lg: 'py-4 px-12 text-lg',
  };

  let appliedSizeStyles = '';
  if (variant !== 'primary' && variant !== 'secondary' && variant !== 'header' && variant !== 'cta-inverted-pill') {
    appliedSizeStyles = sizeSpecificStyles[size];
  }

  // Combine styles
  // Note: Order matters. Custom className should come last to allow overrides.
  // For 'primary' and 'secondary', most styling comes from the CSS class.
  const combinedStyles = `${baseUiStyles} ${variantClass} ${appliedSizeStyles} ${fullWidth ? 'w-full' : ''} ${className}`.trim().replace(/\s+/g, ' ');

  // If disabled
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
  const finalStyles = `${combinedStyles} ${disabledStyles}`.trim().replace(/\s+/g, ' ');
  
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