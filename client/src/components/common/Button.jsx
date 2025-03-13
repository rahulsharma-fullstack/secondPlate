import React from 'react';

function Button({ children, primary, className, ...props }) {
  return (
    <button
      className={`
        px-4 py-2 rounded-full font-medium text-sm transition-colors
        ${primary 
          ? 'bg-primary text-white hover:bg-primary-dark' 
          : 'bg-white text-primary border border-primary hover:bg-primary-light'}
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;