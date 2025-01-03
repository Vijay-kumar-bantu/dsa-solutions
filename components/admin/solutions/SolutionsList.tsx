"use client";

import { Solution } from "@/types";
import { SolutionCard } from "./SolutionCard";
import { Plus } from "lucide-react";

interface SolutionsListProps {
	solutions: Solution[];
	onAddSolution: () => void;
	onEditSolution: (solution: Solution) => void;
}

export const SolutionsList = ({
	solutions,
	onAddSolution,
	onEditSolution,
}: SolutionsListProps) => {
	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<h3 className="text-lg font-medium text-gray-900 dark:text-white">
					Solutions
				</h3>
				<div
					onClick={onAddSolution}
					className="flex items-center gap-2 px-3 py-1.5 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
				>
					<Plus className="w-4 h-4" />
					Add Solution
				</div>
			</div>

			<div className="space-y-3">
				{solutions?.map((solution, index) => (
					<SolutionCard
						key={index}
						solution={solution}
						onEdit={() => onEditSolution(solution)}
					/>
				))}
				{!solutions?.length && (
					<p className="text-gray-500 dark:text-gray-400 text-center py-4">
						No solutions added yet
					</p>
				)}
			</div>
		</div>
	);
};
