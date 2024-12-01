// components/HowToUseAPI4Forms.tsx
"use client";

import { TextGenerateEffect } from "./text-generate-effect"; // Import the TextGenerateEffect component

export default function HowToUseAPI4Forms() {
  const steps = [
    "Generate your unique API key using Email.",
    "Copy the API key into your HTML form integration.",
    "View form submissions directly in your email inbox.",
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Animated Title */}
      <TextGenerateEffect
        words="HOW TO USE API4FORMS"
        className="text-center mt-8" // Added margin-top here
        filter={true}
        duration={0.6}
      />

      {/* Steps List with Transition Effect */}
      <div className="mt-5 space-y-4">
        {steps.map((step, index) => (
          <TextGenerateEffect
            key={index}
            words={step}
            className="text-xs font-medium text-center" // Centering the text
            filter={true}
            duration={0.6}
          />
        ))}
      </div>
    </div>
  );
}
