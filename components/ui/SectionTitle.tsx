import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  alignment,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  variant = 'secondary',
}) => {
  // Production typography styles matching Elementor CSS
  const titleVariants = {
    primary: 'heading-primary', // V E R S A I L L E S, 85px
    secondary: 'heading-secondary', // V E R S A I L L E S, 48px  
    tertiary: 'heading-tertiary', // Cormorant Garamond, 30px
  };

  // Determine text alignment from props
  let textAlignment = '';
  if (alignment === 'center' || center) {
    textAlignment = 'text-center';
  } else if (alignment === 'right') {
    textAlignment = 'text-right';
  } else if (alignment === 'left') {
    textAlignment = 'text-left';
  }

  return (
    <div className={`mb-8 ${textAlignment} ${className}`}>
      <h2 className={`${titleVariants[variant]} ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <h3 className={`mt-4 body-large ${subtitleClassName}`}>
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default SectionTitle;