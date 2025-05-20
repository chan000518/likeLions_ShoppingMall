import React from "react";

export const Input = ({
  label,
  placeholder,
  type= 'text',
  name,
  value,
  onChange,
  className= '',
  ...props
}) => {
  return(
    <div className={`mb-4 ${className}`}>
      <label className="block mb-1 text-sm font-medium text-amber-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-amber-400 rounded-md placeholder-amber-300 focus:outline-none text-amber-500 caret-amber-500"
        {...props}
      />
    </div>  
  );
}