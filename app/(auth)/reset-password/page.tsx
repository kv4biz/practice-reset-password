"use client";

import ProgressBar from "@/components/atoms/ProgressBar";
import StepFour from "@/components/recovery-organisms/StepFour";
import StepOne from "@/components/recovery-organisms/StepOne";
import StepThree from "@/components/recovery-organisms/StepThree";
import StepTwo from "@/components/recovery-organisms/StepTwo";
import React, { useState } from "react";

const page = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const stepText: { [key in 1 | 2 | 3 | 4]: string } = {
    1: "Hi admin, kindly fill in the information below to help us get you back in.",
    2: " Kindly check on your device for the OTP code we sent to you",
    3: " Kindly check on your device for the OTP code we sent to you",
    4: "Please set your new password and confirm it.",
  };

  const handleBack = () => {
    console.log("Back button clicked");
    setStep((prev) => Math.max(prev - 1, 1));
  };
  const handleResend = () => {
    console.log("Resending OTP...");
    // Add your logic here to resend the OTP (e.g., call an API)
  };
  const handleContinue = () => {
    console.log("Continue button clicked");
    setStep((prev) => Math.min(prev + 1, 4));
  };
  const handleFinish = () => {
    console.log("Password reset successfully");
    alert("Your password has been reset successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Password Recovery</h2>

      <div>
        <p>{stepText[step as 1 | 2 | 3 | 4]}</p>
      </div>
      <div className="border"></div>
      <div>
        <ProgressBar step={step} totalSteps={4} />
      </div>

      {/* Dynamic Step Rendering */}
      <div>
        {step === 1 && (
          <StepOne
            email={email}
            setEmail={setEmail}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        )}
        {step === 2 && (
          <StepTwo onBack={handleBack} onContinue={handleContinue} />
        )}
        {step === 3 && (
          <StepThree
            otp={otp}
            setOtp={setOtp}
            onResend={handleResend}
            onContinue={handleContinue}
          />
        )}
        {step === 4 && <StepFour onBack={handleBack} onFinish={handleFinish} />}
      </div>
    </div>
  );
};

export default page;
