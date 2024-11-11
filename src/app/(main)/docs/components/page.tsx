"use client";
import CodeBlock from "@/components/code-block";
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

const messages = [
  {
    message: "What kind of nonsense is this",
    variant: "outline" as const,
    position: "right" as const,
  },
  {
    message: "Put me on the Council and not make me a Master??",
    variant: "outline" as const,
    position: "left" as const,
  },
  {
    message:
      "That's never been done in the history of the Jedi. It's insulting!",
    variant: "outline" as const,
    position: "right" as const,
  },
];

const ChatBubblePage = () => {
  const [activeTab, setActiveTab] = useState<"CLI" | "Manual">("CLI");

  return (
    <div className="max-w-4xl mx-auto text-gray-200 ">
      {/* Basic Usage Header */}
      <h1 className="text-xl font-semibold mb-4 text-blue-400">Basic usage</h1>

      {/* Section: Chat Bubble Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Chat Bubble Variants</h2>
        <p className="text-gray-400 mb-4">
          Below are examples of different chat bubble variants to display
          messages in various styles, similar to popular messaging apps.
        </p>

        <div className="bg-code-bg p-8 border border-gray-800 rounded-lg mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {messages.map((msg, index) => (
            <ChatBubble
              key={index}
              message={msg.message}
              variant={msg.variant}
              position={msg.position}
            />
          ))}
        </div>

        <CodeBlock
          code={`<ChatBubble text="Hello! How are you?" alignment="left" color="blue" />\n<ChatBubble text="I'm good, thanks! And you?" alignment="right" color="green" />`}
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
            code="npm install @radix-ui/react-slot class-variance-authority"
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
        <h3 className="text-lg font-semibold mb-4">Add utility file</h3>
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
          code={`import React from 'react';\n\nexport default function ChatBubble() {\n  return (\n    <div className="p-3 rounded-lg bg-blue-500 text-white">\n      Hello! This is a chat bubble.\n    </div>\n  );\n}`}
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
                <td className="py-2 px-4 border-b border-gray-700">text</td>
                <td className="py-2 px-4 border-b border-gray-700">string</td>
                <td className="py-2 px-4 border-b border-gray-700">
                  The message text displayed inside the chat bubble.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-700">
                  alignment
                </td>
                <td className="py-2 px-4 border-b border-gray-700">
                  'left' | 'right'
                </td>
                <td className="py-2 px-4 border-b border-gray-700">
                  Sets the alignment of the chat bubble, either left or right.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-700">color</td>
                <td className="py-2 px-4 border-b border-gray-700">
                  'blue' | 'pink' | 'green' | 'yellow' | 'red'
                </td>
                <td className="py-2 px-4 border-b border-gray-700">
                  Defines the background color of the chat bubble.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ChatBubblePage;
