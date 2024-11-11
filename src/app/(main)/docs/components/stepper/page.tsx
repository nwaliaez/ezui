"use client";
import CodeBlock from "@/components/code-block";
import PropsTable from "@/components/props-table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import Stepper from "./stepper"; // Adjust the import path based on your project structure

const StepperPage = () => {
  const steps = [
    {
      label: "Step 1: Personal Information",
      content: <div>Enter your personal information here.</div>,
    },
    {
      label: "Step 2: Address Details",
      content: <div>Enter your address details here.</div>,
    },
    {
      label: "Step 3: Confirmation",
      content: <div>Review and confirm your details.</div>,
    },
  ];

  const handleComplete = () => {
    alert("All steps completed!");
  };

  const stepperProps = [
    {
      prop: "steps",
      type: "Step[]",
      description:
        "Array of step objects containing the label and content for each step.",
    },
    {
      prop: "onComplete",
      type: "function",
      description:
        "Callback function that is triggered when the user completes all steps.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto text-gray-200">
      <h1 className="text-xl font-semibold mb-4 text-blue-400">Basic Usage</h1>

      {/* Section: Stepper Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Stepper Variants</h2>
        <p className="text-gray-400 mb-4">
          Below is an example of how you can use the Stepper component to guide
          users through a series of steps.
        </p>

        <div className="bg-code-bg p-8 border border-gray-800 rounded-lg mb-4 max-w-full">
          <Stepper steps={steps} onComplete={handleComplete} />
        </div>

        <CodeBlock
          code={`<Stepper steps={steps} onComplete={handleComplete} />`}
          language="jsx"
        />
      </section>

      {/* Installation Section with Tabs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <Tabs defaultValue="CLI" className="border-b border-gray-700 mb-4">
          <TabsList>
            <TabsTrigger value="CLI">CLI</TabsTrigger>
            <TabsTrigger value="Manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="CLI">
            <CodeBlock
              code="npm install @radix-ui/react-slot class-variance-authority"
              language="bash"
            />
          </TabsContent>
          <TabsContent value="Manual">
            <div>
              <section className="mb-8">
                <h3 className="text-lg font-semibold mb-2">
                  Step 1: Add the Component Code
                </h3>
                <p className="text-gray-400 mb-2">
                  First, create a new file named
                  <code className="text-gray-200 bg-gray-800 px-1 rounded">
                    stepper.tsx
                  </code>
                  inside your
                  <code className="text-gray-200 bg-gray-800 px-1 rounded">
                    components/ui/
                  </code>
                  directory. Then, copy and paste the following code into that
                  file:
                </p>
                <CodeBlock
                  code={`import React, { useState } from 'react';

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
    <div className="max-w-4xl mx-auto text-gray-200">
      <div className="flex justify-between items-center mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={\`text-sm font-semibold \${index <= currentStep ? 'text-blue-400' : 'text-gray-500'}\`}
          >
            {step.label}
          </div>
        ))}
      </div>

      <div className="bg-code-bg p-6 border border-gray-800 rounded-lg mb-6">
        <div className="text-lg font-semibold mb-4">{steps[currentStep].label}</div>
        <div className="text-gray-400">{steps[currentStep].content}</div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          className={\`py-2 px-4 bg-gray-600 text-white rounded-lg \${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}\`}
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

export default Stepper;`}
                  language="typescript"
                />
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Import and Use the Component */}
      <section className="mb-12">
        <h3 className="text-lg font-semibold mb-2">
          Step 2: Import and Use the Component
        </h3>
        <p className="text-gray-400 mb-2">
          Now you can import and use the <strong>Stepper</strong> component in
          your application as shown below.
        </p>
        <CodeBlock
          code={`import { Stepper } from '@/components/ui/stepper';

export default function Example() {
  const steps = [
    { label: 'Step 1: Personal Information', content: <div>Enter your personal information.</div> },
    { label: 'Step 2: Address Details', content: <div>Enter your address details.</div> },
    { label: 'Step 3: Confirmation', content: <div>Review your details.</div> }
  ];

  const handleComplete = () => {
    alert('All steps completed!');
  };

  return (
    <div className="flex flex-col space-y-2">
      <Stepper steps={steps} onComplete={handleComplete} />
    </div>
  );
}`}
          language="javascript"
        />
      </section>

      {/* Props Table */}
      <section className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Props</h3>
        <PropsTable props={stepperProps} />
      </section>
    </div>
  );
};

export default StepperPage;
