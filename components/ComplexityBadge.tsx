import React from 'react';

interface ComplexityBadgeProps {
  label: string;
  value: string;
}

export const ComplexityBadge: React.FC<ComplexityBadgeProps> = ({ label, value }) => {
  return (
    <div className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg">
      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{label}:</span>
      <span className="text-sm font-mono text-primary-600 dark:text-primary-400">{value}</span>
    </div>
  );
};