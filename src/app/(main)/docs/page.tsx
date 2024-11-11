"use client";
import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { ChatBubble } from "@/components/ui/chatbubble";
import React, { useState } from "react";

const TabButton = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-semibold ${
      active ? "border-b-2 border-white text-white" : "text-gray-400"
    }`}
  >
    {label}
  </button>
);

const DocsLayout = () => {
  const [activeTab, setActiveTab] = useState<"CLI" | "Manual">("CLI");

  return (
    <div className="max-w-4xl mx-auto text-gray-200 ">
      {/* Basic Usage Header */}
      <h1 className="text-xl font-semibold mb-4 text-blue-400">Basic usage</h1>

      {/* Section: Add Margin to a Single Side */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Button Variants</h2>
        <p className="text-gray-400 mb-4">
          Below are examples of different button variants you might use in a UI
          library, styled similarly to shadcn's design.
        </p>

        <div className="bg-code-bg p-8 border border-gray-800 rounded-lg mb-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button
            className="w-full py-2 px-4"
            variant="destructive"
            animate={"scale"}
          >
            Primary
          </Button>
        </div>

        <CodeBlock
          code={`<Button variant="destructive animate="scale">Destructive</Button>`}
          language="jsx"
        />
      </section>

      {/* Installation Section with Tabs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <div className="flex border-b border-gray-700 mb-4">
          <TabButton
            label="CLI"
            active={activeTab === "CLI"}
            onClick={() => setActiveTab("CLI")}
          />
          <TabButton
            label="Manual"
            active={activeTab === "Manual"}
            onClick={() => setActiveTab("Manual")}
          />
        </div>
        {activeTab === "CLI" ? (
          <CodeBlock
            code="npm i framer-motion clsx tailwind-merge"
            language="bash"
          />
        ) : (
          <CodeBlock
            code="Add your manual installation steps here."
            language="text"
          />
        )}
      </section>

      {/* Utility File Section */}
      <section className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Add util file</h3>
        <CodeBlock
          code={`// utils/twMerge.js\nimport { ClassValue, clsx } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}`}
          language="javascript"
        />
      </section>

      {/* Configuration Code Section */}
      <section className="mb-12">
        <h3 className="text-lg font-semibold mb-4">
          Add the following code in tailwind.config.js file
        </h3>
        <CodeBlock
          code={`const defaultTheme = require("tailwindcss/defaultTheme");\nconst colors = require("tailwindcss/colors");\nconst flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");\n\nmodule.exports = {\n  content: ["./src/**/*.{js,ts,jsx,tsx}"],\n  darkMode: "class",\n  theme: { /* rest of the code */ },\n  plugins: [\n    addVariablesForColors,\n  ],\n};\n\nfunction addVariablesForColors({ addBase, theme }) {\n  const colors = flattenColorPalette(theme("colors"));\n  const newVars = Object.fromEntries(\n    Object.entries(colors).map(([key, val]) => [\`--\${key}\`, val])\n  );\n}`}
          language="javascript"
        />
      </section>

      {/* Copy Source Code Section */}
      <section className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Copy the source code</h3>
        <CodeBlock
          code={`import React from 'react';\n\nexport default function Button() {\n  return (\n    <button className="px-4 py-2 bg-blue-600 text-white rounded">\n      Click me\n    </button>\n  );\n}`}
          language="javascript"
        />
      </section>

      {/* Props Table */}
      <section className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Props</h3>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <table className="w-full text-left text-gray-300">
            <thead className="bg-gray-800">
              <tr>
                <th className="py-2 px-4 border-b border-gray-700">Prop</th>
                <th className="py-2 px-4 border-b border-gray-700">Type</th>
                <th className="py-2 px-4 border-b border-gray-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-700">bgColor</td>
                <td className="py-2 px-4 border-b border-gray-700">string</td>
                <td className="py-2 px-4 border-b border-gray-700">
                  Defines the background color of the button.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-700">size</td>
                <td className="py-2 px-4 border-b border-gray-700">string</td>
                <td className="py-2 px-4 border-b border-gray-700">
                  Defines the size of the button (small, medium, large).
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-700">onClick</td>
                <td className="py-2 px-4 border-b border-gray-700">function</td>
                <td className="py-2 px-4 border-b border-gray-700">
                  Callback function to handle button click events.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-700">disabled</td>
                <td className="py-2 px-4 border-b border-gray-700">boolean</td>
                <td className="py-2 px-4 border-b border-gray-700">
                  Disables the button if true.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">variant</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">
                  Defines the visual style of the button (e.g., "outline",
                  "solid").
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DocsLayout;
