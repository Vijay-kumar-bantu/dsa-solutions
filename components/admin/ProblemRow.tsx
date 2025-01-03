'use client';

import { Problem } from '@/types';
import { Edit2, Trash2 } from 'lucide-react';

interface ProblemRowProps {
  problem: Problem;
  onEdit: () => void;
}

export const ProblemRow = ({ problem, onEdit }: ProblemRowProps) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {problem.title}
        </h3>
        <div className="flex items-center gap-3 mt-1">
          <span className={`
            px-2 py-1 text-xs rounded-full
            ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
              problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}
          `}>
            {problem.difficulty}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {problem.category}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={onEdit}
          className="p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
        >
          <Edit2 className="w-5 h-5" />
        </button>
        <button
          onClick={() => {
            if (confirm('Are you sure you want to delete this problem?')) {
              // Handle delete
            }
          }}
          className="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};