import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Container component for consistent max-width and horizontal padding
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
}) => {
  return (
    <Component className={`container mx-auto px-6 ${className}`}>
      {children}
    </Component>
  );
};
