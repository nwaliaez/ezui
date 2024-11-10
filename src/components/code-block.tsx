import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyButton from './copy-button';

interface CodeBlockProps {
  code: string;
  language: string;
}

// Reusable CodeBlock Component with "JetBrains Mono" font, enhanced border, and increased font size
const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => (
  <div className="relative bg-code-bg border border-gray-800 rounded-lg overflow-hidden mb-4 shadow-lg">
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        background: 'transparent',
        padding: '16px', // Slightly increased padding for better readability
        fontSize: '0.9rem', // Increased font size
        lineHeight: '1.5rem', // Adjusted line height for larger font
        fontFamily: '"JetBrains Mono", monospace', // Apply JetBrains Mono font
      }}
      showLineNumbers={false}
    >
      {code}
    </SyntaxHighlighter>
    <div className="absolute top-2 right-2">
      <CopyButton text={code} />
    </div>
  </div>
);

export default CodeBlock;
