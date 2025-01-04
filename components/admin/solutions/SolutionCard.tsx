"use client";

import { Solution } from "@/types";
import { Edit2 } from "lucide-react";

interface SolutionCardProps {
	solution: Solution;
	onEdit: () => void;
}

export const SolutionCard = ({ solution, onEdit }: SolutionCardProps) => {
	return (
		<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
			<div className="flex justify-between items-start">
				<h4 className="font-medium text-gray-900 dark:text-white">
					{solution.title}
				</h4>
				<div
					onClick={onEdit}
					className="p-1 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 cursor-pointer"
				>
					<Edit2 className="w-4 h-4" />
				</div>
			</div>

			<div className="mt-2 space-y-2">
				<div className="flex items-center gap-2 text-sm">
					<span className="text-gray-600 dark:text-gray-300">Time:</span>
					<code className="text-primary-600 dark:text-primary-400">
						{solution.timeComplexity}
					</code>
				</div>
				<div className="flex items-center gap-2 text-sm">
					<span className="text-gray-600 dark:text-gray-300">Space:</span>
					<code className="text-primary-600 dark:text-primary-400">
						{solution.spaceComplexity}
					</code>
				</div>
			</div>
		</div>
	);
};
