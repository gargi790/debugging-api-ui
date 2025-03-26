import React from "react";

const Textarea = ({ placeholder, className, ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`border p-2 rounded-md ${className}`}
      {...props}
    />
  );
};

export default Textarea;
 
