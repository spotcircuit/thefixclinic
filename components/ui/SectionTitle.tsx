import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  return (
    <div className={`mb-8 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-primary ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <h3 className={`mt-2 text-xl text-dark-light ${subtitleClassName}`}>
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default SectionTitle;