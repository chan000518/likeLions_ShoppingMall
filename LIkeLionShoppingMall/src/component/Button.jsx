import React from 'react';
export const Button = ({ children, className = '', onClick, ...props }) => {
  return (
    <button
      className={`group bg-amber-500 cursor-pointer text-white py-2 px-4 rounded-md ${className} `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
