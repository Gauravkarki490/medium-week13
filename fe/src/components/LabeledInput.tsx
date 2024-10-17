import React from "react";

interface LabeledInputProps {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledInput = ({
  label,
  placeholder,
  onChange,
  type,
}: LabeledInputProps) => {
  return (
    <div className="mt-2">
      <label htmlFor={label} className="block mb-2 text-md  font-semibold ">
        {label}
      </label>
      <input
        type={type || "text"}
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default LabeledInput;
