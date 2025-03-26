import React from "react";

const Input = ({ type = "text", placeholder, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border p-2 rounded-md ${className}`}
      {...props}
    />
  );
};

export default Input;
 
