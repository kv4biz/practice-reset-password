"use client";

import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

type StepFourProps = {
  onBack: () => void;
  onFinish: () => void;
};

export default function StepFour({ onBack, onFinish }: StepFourProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Validate inputs before finishing
  const handleFinish = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError(""); // Clear any previous error
    onFinish(); // Proceed with the final step
  };

  return (
    <div className="step-container">
      <p>Please set your new password and confirm it.</p>

      {/* Password Input */}
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="New Password"
      />

      {/* Confirm Password Input */}
      <Input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Re-enter Password"
      />

      {/* Error Message */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Buttons */}
      <div className="step-buttons" style={{ marginTop: "20px" }}>
        <Button text="Back" onClick={onBack} variant="secondary" />
        <Button
          text="Finish"
          onClick={handleFinish}
          variant="primary"
          disabled={!password || !confirmPassword} // Disable until inputs are filled
        />
      </div>
    </div>
  );
}
