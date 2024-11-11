'use client';
import CodeBlock from '@/components/code-block';
import PropsTable from '@/components/props-table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // Ensure the path matches your setup
import React, { useState } from 'react';
import Image from 'next/image';
import { FadeOverlay } from '@/components/ui/fade-overlay';
import { Button } from '@/components/ui/button';

const FadeOverlayPage = () => {
  const [overlay, setOverlay] = useState<boolean>(true);
  const fadeOverlayProps = [
    {
      prop: 'visible',
      type: 'boolean',
      description: 'Controls the visibility of the fade overlay.',
    },
    {
      prop: 'gradient',
      type: "'default' | 'light' | 'dark'",
      description:
        'Defines the gradient background of the overlay for different visual effects.',
    },
    {
      prop: 'duration',
      type: "'short' | 'medium' | 'long'",
      description: 'Sets the duration of the fade transition effect.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto text-gray-200">
      <h1 className="text-xl font-semibold mb-4 text-blue-400">Basic usage</h1>

      {/* Section: Fade Overlay Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Fade Overlay Variants</h2>
        <p className="text-gray-400 mb-4">
          Below are examples of different fade overlay variants to create unique
          visual effects.
        </p>

        <div className="relative bg-code-bg rounded-lg mb-4 grid gap-4">
          <Image
            alt={'overlay example'}
            width={1000}
            height={300}
            className="object-cover w-full rounded-lg"
            src="/freepik.jpg"
          />

          <FadeOverlay />
        </div>

        <CodeBlock
          code={`<FadeOverlay visible gradient="dark" duration="short" />`}
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
                  Create a new file named{' '}
                  <code className="text-gray-200 bg-gray-800 px-1 rounded">
                    fade-overlay.tsx
                  </code>{' '}
                  in your{' '}
                  <code className="text-gray-200 bg-gray-800 px-1 rounded">
                    components/ui/
                  </code>{' '}
                  directory and add the following code:
                </p>
                <CodeBlock
                  code={`import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const fadeOverlayVariants = cva(
  'absolute inset-0 flex items-center justify-center p-2 ease-in-out',
  {
    variants: {
      visible: {
        true: 'opacity-100',
        false: 'opacity-0 pointer-events-none',
      },
      gradient: {
        default: 'bg-gradient-to-b from-transparent to-background',
        light: 'bg-gradient-to-b from-white/30 to-gray-100/90',
        dark: 'bg-gradient-to-b from-zinc-700/30 to-zinc-950/90',
      },
      duration: {
        none: '', // No transition by default
        short: 'transition-opacity duration-300',
        medium: 'transition-opacity duration-500',
        long: 'transition-opacity duration-700',
      },
    },
    defaultVariants: {
      visible: true,
      gradient: 'default',
      duration: 'none', // Default to no animation
    },
  }
);

export interface FadeOverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fadeOverlayVariants> {
  asChild?: boolean;
}

const FadeOverlay = React.forwardRef<HTMLDivElement, FadeOverlayProps>(
  (
    {
      className,
      visible,
      gradient,
      duration,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className={cn(
          fadeOverlayVariants({ visible, gradient, duration, className })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
FadeOverlay.displayName = 'FadeOverlay';

export { FadeOverlay, fadeOverlayVariants };

`}
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
          Now you can import and use the <strong>FadeOverlay</strong> component
          in your Next.js application as shown below.
        </p>
        <CodeBlock
          code={`import { FadeOverlay } from '@/components/ui/fade-overlay';

export default function Example() {
  return (
    <div className="relative bg-gray-800">
      <FadeOverlay visible gradient="default" duration="medium" />
    </div>
  );
}`}
          language="javascript"
        />
      </section>

      {/* Props Table */}
      <section className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Props</h3>
        <PropsTable props={fadeOverlayProps} />
      </section>
    </div>
  );
};

export default FadeOverlayPage;
