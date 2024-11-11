// components/ui/TabButton.tsx
import React from 'react';

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-semibold ${
      active ? 'border-b-2 border-white text-white' : 'text-gray-400'
    }`}
  >
    {label}
  </button>
);

export default TabButton;
