import React, { useState } from "react";

interface Props {
  value: string;
  setValue: (name: string) => void;
  id: string;
  placeholder: string;
  type: string;
}

const FormInput: React.FC<Props> = ({
  value,
  setValue,
  id,
  placeholder,
  type,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 relative">
      <label htmlFor={id} className="block text-lg font-medium mb-2"></label>
      <input
        type={type === "password" && showPassword ? "text" : type}
        id={id}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-3xl placeholder-gray-700 italic focus:outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-800 font-semibold py-2 px-4"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
};

export default FormInput;
