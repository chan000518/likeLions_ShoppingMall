import React from "react";
export const Button = ({children, className = '', ...props}) => {
  return(<button
          className={`bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md ${className}`}
          {...props}
>
    {children}
  </button>);
};
