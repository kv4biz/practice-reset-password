"use client";
import React from "react";

type ProgressBarProps = {
  step: number; // Active step, starting from 1
  totalSteps?: number; // Default is 4
};

const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps = 4 }) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className="progress-bar-container">
      <div className="step-label">
        Step {step} of {totalSteps}
      </div>
      <div className="progress-bar">
        {steps.map((current) => (
          <div
            key={current}
            className={`progress-step ${current <= step ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
