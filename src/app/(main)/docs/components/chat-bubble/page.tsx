// app/components/ChatBubblePage.tsx
'use client';
import CodeBlock from '@/components/code-block';
import PropsTable from '@/components/props-table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // Ensure the path matches your setup
import { ChatBubble } from '@/components/ui/chatbubble';
import React from 'react';

const ChatBubblePage = () => {
  const chatBubbleProps = [
    {
      prop: 'message',
      type: 'string',
      description: 'The message text displayed inside the chat bubble.',
    },
    {
      prop: 'position',
      type: "'left' | 'right'",
      description:
        'Sets the alignment of the chat bubble, either left or right.',
    },
    {
      prop: 'variant',
      type: "'default' | 'outline' | 'destructive' | 'secondary' | 'ghost' | 'link'",
      description: 'Defines the background color of the chat bubble.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto text-gray-200">
      <h1 className="text-xl font-semibold mb-4 text-blue-400">Basic usage</h1>

      {/* Section: Chat Bubble Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Chat Bubble Variants</h2>
        <p className="text-gray-400 mb-4">
          Below are examples of different chat bubble variants to display
          messages in various styles, similar to popular messaging apps.
        </p>

        <div className="bg-code-bg p-8 border border-gray-800 rounded-lg mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChatBubble
            message="Hello! How are you?"
            position="left"
            variant="outline"
          />
          <ChatBubble
            message="I'm good, thanks! And you?"
            position="right"
            variant="default"
          />
          <ChatBubble
            message="Just working on a project."
            position="left"
            variant="destructive"
          />
          <ChatBubble
            message="Sounds great!"
            position="right"
            variant="secondary"
          />
        </div>

        <CodeBlock
          code={`<ChatBubble message="Hello! How are you?" position="left" variant="outline" />\n<ChatBubble message="I'm good, thanks! And you?" position="right" variant="default" />`}
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
                  First, create a new file named{' '}
                  <code className="text-gray-200 bg-gray-800 px-1 rounded">
                    chat-bubble.tsx
                  </code>{' '}
                  inside your{' '}
                  <code className="text-gray-200 bg-gray-800 px-1 rounded">
                    components/ui/
                  </code>{' '}
                  directory. Then, copy and paste the following code into that
                  file:
                </p>
                <CodeBlock
                  code={`import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const chatBubbleVariants = cva(
  'relative max-w-[80%] rounded-2xl px-4 py-2 text-sm',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      position: {
        left: 'rounded-bl-none self-start',
        right: 'rounded-br-none self-end',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'left',
    },
  }
);

export interface ChatBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleVariants> {
  message: string;
}

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant, position, message, ...props }, ref) => {
    return (
      <div
        className={cn(chatBubbleVariants({ variant, position, className }))}
        ref={ref}
        {...props}
      >
        {message}
      </div>
    );
  }
);
ChatBubble.displayName = 'ChatBubble';

export { ChatBubble, chatBubbleVariants };
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
          Now you can import and use the <strong>ChatBubble</strong> component
          in your Next.js application as shown below.
        </p>
        <CodeBlock
          code={`import { ChatBubble } from '@/components/ui/chat-bubble';

export default function Example() {
  return (
    <div className="flex flex-col space-y-2">
      <ChatBubble message="Hello! How are you?" position="left" variant="outline" />
      <ChatBubble message="I'm good, thanks! And you?" position="right" variant="default" />
    </div>
  );
}`}
          language="javascript"
        />
      </section>

      {/* Props Table */}
      <section className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Props</h3>
        <PropsTable props={chatBubbleProps} />
      </section>
    </div>
  );
};

export default ChatBubblePage;
