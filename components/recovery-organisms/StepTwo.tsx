"use client";

import React from "react";
import Button from "../atoms/Button";
import { FaRegEnvelope } from "react-icons/fa";

type StepTwoProps = {
  onBack: () => void;
  onContinue: () => void;
};

export default function StepTwo({ onBack, onContinue }: StepTwoProps) {
  return (
    <div className="step-container">
      <div className="email-message-container">
        <div className="email-message-icon">
          <FaRegEnvelope />
        </div>
        <div className="email-message">
          <p>OTP sent to your email.</p>
          <p>{/*email*/}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="step-buttons">
        <Button text="Back" onClick={onBack} variant="secondary" />
        <Button text="Continue" onClick={onContinue} variant="primary" />
      </div>
    </div>
  );
}
