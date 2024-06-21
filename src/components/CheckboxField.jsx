import React from "react";

const CheckboxField = ({ label, name, checked, onChange }) => {
  return (
    <label htmlFor={name} className="flex items-center space-x-2">
      <input
        id={name}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 accent-blue-500 focus:ring-offset-0 focus:ring-blue-500 focus:ring-2 "
      />
      <div className="pl-1">{label}</div>
    </label>
  );
};

export default CheckboxField;
