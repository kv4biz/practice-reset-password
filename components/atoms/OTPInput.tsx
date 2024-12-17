"use client";
import React, { useRef } from "react";

type OTPInputProps = {
  length?: number; // Default to 6 digits
  value: string; // The OTP value
  onChange: (otp: string) => void; // Callback when OTP changes
};

const OTPInput: React.FC<OTPInputProps> = ({ length = 6, value, onChange }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers

    if (newValue.length > 1) return; // Ignore invalid input

    // Build the new OTP string
    const otpArray = value.split("");
    otpArray[index] = newValue;
    const newOTP = otpArray.join("");

    onChange(newOTP);

    // Move to the next input if a digit is entered
    if (newValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      // Move focus to the previous input on Backspace
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    if (/^\d+$/.test(pasteData)) {
      onChange(pasteData);
    }
  };

  return (
    <div className="otp-container" style={{ display: "flex", gap: "10px" }}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            if (el) inputRefs.current[index] = el;
          }}
          type="text"
          value={value[index] || ""}
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="otp-input"
        />
      ))}
    </div>
  );
};

export default OTPInput;
