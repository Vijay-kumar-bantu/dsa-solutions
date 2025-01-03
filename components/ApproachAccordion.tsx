import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Solution } from '../types';
import { CodeBlock } from './CodeBlock';
import { ComplexityBadge } from './ComplexityBadge';

interface ApproachAccordionProps {
  solution: Solution;
  isOpen: boolean;
  onToggle: () => void;
}

export const ApproachAccordion: React.FC<ApproachAccordionProps> = ({ solution, isOpen, onToggle }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');

  const handleCopy = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-50 dark:bg-gray-800 rounded-t-lg"
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">
          {solution.title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <div className="prose dark:prose-invert">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Approach Explanation
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {solution.explanation}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <ComplexityBadge label="Time Complexity" value={solution.timeComplexity} />
                  <ComplexityBadge label="Space Complexity" value={solution.spaceComplexity} />
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Implementation
                  </h4>
                  <CodeBlock
                    code={solution.implementations[selectedLanguage]}
                    language={selectedLanguage}
                    onCopy={handleCopy}
                    isCopied={copiedCode}
                    onLanguageChange={setSelectedLanguage}
                    availableLanguages={Object.keys(solution.implementations)}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};