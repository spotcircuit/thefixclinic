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
  const baseStyles = 'py-3 px-6 rounded-md transition-colors duration-300 ease-in-out font-apfel focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-primary text-background hover:bg-opacity-90 focus:ring-primary',
    secondary: 'bg-background text-primary border border-primary hover:bg-primary hover:text-background focus:ring-primary',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

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
    <Button variant="primary" href="/about">
      Primary Link
    </Button>
    <Button variant="secondary" href="/contact" className="mt-2">
      Secondary Link with extra margin
    </Button>
  </div>
);
*/
