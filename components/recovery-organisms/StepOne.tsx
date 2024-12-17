"use client";

import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

type StepOneProps = {
  email: string;
  setEmail: (email: string) => void;
  onBack: () => void;
  onContinue: () => void;
};

export default function StepOne({
  email,
  setEmail,
  onBack,
  onContinue,
}: StepOneProps) {
  return (
    <div className="step-container">
      {/* Email Input */}
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      {/* Buttons */}
      <div className="step-buttons">
        <Button text="Back" onClick={onBack} variant="secondary" />
        <Button text="Continue" onClick={onContinue} variant="primary" />
      </div>
    </div>
  );
}
