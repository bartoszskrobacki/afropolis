import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'white' | 'gray';
  padding?: 'default' | 'large' | 'none';
}

/**
 * Section component for consistent vertical spacing and backgrounds
 */
export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  variant = 'white',
  padding = 'default',
}) => {
  const bgClass = variant === 'gray' ? 'bg-gray-50' : 'bg-white';
  const paddingClass = {
    none: '',
    default: 'py-16 md:py-24',
    large: 'py-24 md:py-32',
  }[padding];

  return (
    <section id={id} className={`${bgClass} ${paddingClass} ${className}`}>
      {children}
    </section>
  );
};
