"use client";
import React, { useState } from "react";

// Define props for the Input component
type InputProps = {
  type?: "text" | "password" | "email"; // Allow common input types
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Determine input type (toggle between "password" and "text")
  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <div
      className={`input-container ${className}`}
      style={{ position: "relative" }}
    >
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
      {/* Show toggle icon only for password type */}
      {type === "password" && (
        <button
          type="button"
          onClick={() => setIsPasswordVisible((prev) => !prev)}
          className="password-toggle"
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isPasswordVisible ? "👁️" : "🔒"}
        </button>
      )}
    </div>
  );
};

export default Input;
