import React from 'react';
import { Problem } from '../types';

interface ProblemHeaderProps {
  problem: Problem;
}

export const ProblemHeader: React.FC<ProblemHeaderProps> = ({ problem }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {problem.title}
      </h1>
      <span className={`
        px-3 py-1 rounded-full text-sm font-medium
        ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
          problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}
      `}>
        {problem.difficulty}
      </span>
    </div>
  );
};