"use client";
import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline"; // Styling variants
  className?: string; // For custom styles
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  text,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
}) => {
  // Dynamic class for styling based on variant
  const baseClass = "button-base";
  const variantClass = `button-${variant}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variantClass} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
