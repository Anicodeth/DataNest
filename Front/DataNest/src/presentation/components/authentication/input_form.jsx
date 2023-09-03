import React from 'react';
import ErrorMessage from './error_message';

const InputField = ({ label, name, register, type, placeholder, disabled, error }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="block text-md font-semibold text-[#9415d2]" htmlFor={name}>
        {label}
      </label>
      <input
        {...register(name)}
        className="w-full px-5 py-4 text-gray-800 border rounded-xl bg-none focus:bg-none focus:outline-none focus:ring focus:ring-[#9415d2]"
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      <ErrorMessage message={error} />
    </div>
  );
};

export default InputField;
