import React, { useState } from "react";

interface Step {
  label: string;
  content: React.ReactNode;
}

interface StepperProps {
  steps: Step[];
  onComplete?: () => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    if (onComplete) onComplete();
  };

  return (
    <div className="mx-auto text-gray-200 max-w-full">
      {/* Step labels */}
      <div className="flex justify-between items-center mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-sm font-semibold ${
              index <= currentStep ? "text-blue-400" : "text-gray-500"
            } flex-1 text-center`} // flex-1 for dynamic width and text-center for centered labels
          >
            {step.label}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-code-bg p-6 border border-gray-800 rounded-lg mb-6">
        <div className="text-lg font-semibold mb-4">
          {steps[currentStep].label}
        </div>
        <div className="text-gray-400">{steps[currentStep].content}</div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-6 space-x-4">
        <button
          className={`py-2 px-4 bg-gray-600 text-white rounded-lg ${
            currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={currentStep === 0}
        >
          Previous
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-lg"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="py-2 px-4 bg-green-500 text-white rounded-lg"
            onClick={handleComplete}
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
