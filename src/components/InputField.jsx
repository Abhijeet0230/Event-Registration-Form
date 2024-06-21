import React from "react";

const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="w-full px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
      <label htmlFor={name} className="block text-sm font-medium text-black">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-200"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default InputField;
