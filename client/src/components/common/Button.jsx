import React from 'react';

function Button({ children, primary, className, ...props }) {
  return (
    <button
      className={`
        px-4 py-2 rounded-full font-medium text-sm transition-colors
        ${primary 
          ? 'bg-green-500 text-white hover:bg-green-600' 
          : 'bg-white text-green-500 border border-green-500 hover:bg-green-50'}
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;