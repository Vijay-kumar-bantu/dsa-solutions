'use client';

import { Plus } from 'lucide-react';

interface AdminHeaderProps {
  onAddNew: () => void;
}

export const AdminHeader = ({ onAddNew }: AdminHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Problem Management
      </h1>
      <button
        onClick={onAddNew}
        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        <Plus className="w-4 h-4" />
        Add Problem
      </button>
    </div>
  );
};