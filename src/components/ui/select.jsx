import React from "react";

const Select = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="GET">GET</option>
      <option value="POST">POST</option>
      <option value="PUT">PUT</option>
      <option value="DELETE">DELETE</option>
    </select>
  );
};

export default Select;
