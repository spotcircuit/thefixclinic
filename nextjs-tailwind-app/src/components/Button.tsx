import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  className = '', 
  ...props
}) => {
  const baseStyles = 'font-apfel font-medium tracking-wide leading-none rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-primary text-background border border-primary hover:bg-opacity-90 focus:ring-primary focus:ring-offset-background', // Added border-primary for consistency, can be border-transparent if truly no border
    secondary: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-background focus:ring-primary focus:ring-offset-background',
  };
  
  // Default padding and text size for base button.
  // Specific instances like Hero CTA or main CTA section buttons can override this via `className`.
  const defaultSizingClasses = 'py-3 px-6 text-sm sm:text-base';

  // Simple check if className prop likely contains padding or text-size utilities.
  // This is a basic check; for more complex scenarios, clsx or similar might be better.
  const hasSizingOverride = /p[xy]?-|p-|text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)/.test(className);

  const combinedClassName = `${baseStyles} ${hasSizingOverride ? '' : defaultSizingClasses} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${combinedClassName} inline-block text-center`} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;

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
    <Button variant="primary" href="/about" className="text-lg py-4 px-8"> {/* Example of overriding size */}
      Primary Link - Large
    </Button>
    <Button variant="secondary" href="/contact" className="mt-2">
      Secondary Link - Default
    </Button>
  </div>
);
*/
