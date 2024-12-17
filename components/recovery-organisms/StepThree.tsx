"use client";

import React, { useEffect, useState } from "react";
import OTPInput from "../atoms/OTPInput";
import Button from "../atoms/Button";

type StepThreeProps = {
  otp: string;
  setOtp: (otp: string) => void;
  onResend: () => void; // Resend OTP callback
  onContinue: () => void;
};

export default function StepThree({
  otp,
  setOtp,
  onResend,
  onContinue,
}: StepThreeProps) {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [resendDisabled, setResendDisabled] = useState(true); // Resend button state

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setResendDisabled(false); // Enable resend when timer hits 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Resend button click handler
  const handleResend = () => {
    onResend(); // Trigger resend callback
    setTimeLeft(15 * 60); // Reset timer to 15 minutes
    setResendDisabled(true); // Disable resend button again
  };

  // Format timeLeft to MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="step-container">
      <div className="otp-timer-container">
        <OTPInput length={6} value={otp} onChange={setOtp} />
        <div className="timer-container">
          <p>OTP code will expire in 15 minutes</p>
          {/* Timer */}
          <p className="timer">Time left: {formatTime(timeLeft)}</p>
        </div>
      </div>
      {/* Buttons */}
      <div className="step-buttons">
        <Button
          text="Resend OTP"
          onClick={handleResend}
          variant="secondary"
          disabled={resendDisabled} // Disabled until timer reaches 0
        />
        <Button
          text="Continue"
          onClick={onContinue}
          variant="primary"
          disabled={otp.length < 6}
        />
      </div>
    </div>
  );
}
