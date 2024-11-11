"use client";
import CodeBlock from "@/components/code-block";
import PropsTable from "@/components/props-table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React, { useState } from "react";
import RatingStar from "./rating-star";

const RatingStarPage = () => {
  const [rating, setRating] = useState(3);

  const ratingStarProps = [
    {
      prop: "initialRating",
      type: "number",
      description: "The initial rating value when the component is loaded.",
    },
    {
      prop: "onChange",
      type: "(rating: number) => void",
      description:
        "Callback function that gets triggered when the rating changes.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto text-gray-200">
      <h1 className="text-xl font-semibold mb-4 text-blue-400">Basic Usage</h1>

      {/* Section: Rating Star Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Rating Star Variants</h2>
        <p className="text-gray-400 mb-4">
          Below is an example of how you can use the RatingStar component to
          allow users to rate an item.
        </p>

        <div className="bg-code-bg p-8 border border-gray-800 rounded-lg mb-4">
          <RatingStar initialRating={rating} onChange={setRating} />
        </div>

        <CodeBlock
          code={`<RatingStar initialRating={3} onChange={setRating} />`}
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
                  First, create a new file named{" "}
                  <code className="text-gray-200 bg-gray-800 px-1 rounded">
                    rating-star.tsx
                  </code>{" "}
                  inside your{" "}
                  <code className="text-gray-200 bg-gray-800 px-1 rounded">
                    components/ui/
                  </code>{" "}
                  directory. Then, copy and paste the following code into that
                  file:
                </p>
                <CodeBlock
                  code={`import React, { useState } from 'react';

interface RatingStarProps {
  initialRating: number;
  onChange: (rating: number) => void;
}

const RatingStar: React.FC<RatingStarProps> = ({ initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (newRating: number) => {
    setRating(newRating);
    onChange(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          className={\`p-1 \${i <= rating ? "text-yellow-500" : "text-gray-300"}\`}
          onClick={() => handleClick(i)}
          aria-label={\`Rate \${i} star\${i > 1 ? 's' : ''}\`}
        >
          ★
        </button>
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center space-x-1">
      {renderStars()}
    </div>
  );
};

export default RatingStar;`}
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
          Now you can import and use the <strong>RatingStar</strong> component
          in your application as shown below.
        </p>
        <CodeBlock
          code={`import { RatingStar } from '@/components/ui/rating-star';

export default function Example() {
  const [rating, setRating] = useState(3);

  return (
    <div className="flex flex-col space-y-2">
      <RatingStar initialRating={rating} onChange={setRating} />
      <p>Your rating: {rating}</p>
    </div>
  );
}`}
          language="javascript"
        />
      </section>

      {/* Props Table */}
      <section className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Props</h3>
        <PropsTable props={ratingStarProps} />
      </section>
    </div>
  );
};

export default RatingStarPage;
