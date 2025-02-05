"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error" | "info">(
    "info"
  );
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the email is valid using the browser's built-in validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setAlertType("error");
      setAlertMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Simulate an API call that randomly returns success or failure
      const isSuccess = Math.random() > 0.5; // Randomly decide if it is successful or not (50% chance)

      if (isSuccess) {
        // Simulate a successful response
        setAlertType("success");
        setAlertMessage(
          "If the email address exists, a reset link has been sent."
        );
      } else {
        // Simulate a failure response
        setAlertType("error");
        setAlertMessage(
          "There was an issue with the email address. Please try again."
        );
      }
    } catch (error) {
      if (!error) return;
      setAlertType("error");
      setAlertMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="z-10 bg-black/80 mt-24 md:mt-0 px-6 md:px-14 py-10 rounded md:max-w-sm">
      <form onSubmit={handleSubmit}>
        <h1 className="font-semibold text-3xl text-white">Forgot Password</h1>
        <div className="space-y-4 mt-5">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <Input
            type="email"
            name="email"
            placeholder="mail@exam.com"
            className="inline-block bg-[#333] w-full text-white placeholder:text-gray-400 placeholder:text-xs"
            value={email}
            onChange={(e) => {
              const updatedEmail = e.target.value;
              setEmail(updatedEmail);

              // Check if email is valid, and clear error message if valid
              if (/\S+@\S+\.\S+/.test(updatedEmail)) {
                setAlertMessage(""); // Clear any error message when email is valid
              } else if (updatedEmail) {
                setAlertMessage("Please enter a valid email address.");
              }
            }}
            required
          />

          <Button
            type="submit"
            variant="destructive"
            className="bg-[#e50914] w-full font-medium text-base"
          >
            Reset Password
          </Button>
        </div>
      </form>
      <div className="mt-4 min-h-16">
        {/* Show a valid message if email is correctly formatted */}
        {!/\S+@\S+\.\S+/.test(email) && email && email.length > 3 && (
          <div className="text-red-500 text-sm">
            Please enter a valid email address.
          </div>
        )}
        {/* Alert message */}
        {/\S+@\S+\.\S+/.test(email) && email && alertMessage && (
          <div
            className={`text-left text-sm ${
              alertType === "success"
                ? "text-green-500"
                : alertType === "error"
                ? "text-red-500"
                : "text-blue-500"
            }`}
          >
            {alertMessage}
          </div>
        )}
      </div>

      <div className="text-right mt-4 text-gray-500 text-sm">
        <Link className="text-base text-white hover:underline" href="/login">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}
