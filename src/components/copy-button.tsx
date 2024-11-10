import React from 'react';
import { Copy } from 'lucide-react';

const CopyButton = ({ text }: { text: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };
  return (
    <button onClick={handleCopy} className="text-gray-400 hover:text-white">
      <Copy className="h-4 w-4" />
    </button>
  );
};

export default CopyButton;
