"use client";

import { useState } from "react";
import { problems } from "@/data/problems";
import { ProblemRow } from "./ProblemRow";
import { Search } from "lucide-react";

interface ProblemListProps {
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	onEdit: (problem: any) => void;
}

export const ProblemList = ({ onEdit }: ProblemListProps) => {
	const [search, setSearch] = useState("");

	const filteredProblems = problems.filter((problem) =>
		problem.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow">
			<div className="p-4 border-b border-gray-200 dark:border-gray-700">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
					<input
						type="text"
						placeholder="Search problems..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
					/>
				</div>
			</div>

			<div className="divide-y divide-gray-200 dark:divide-gray-700">
				{filteredProblems.map((problem) => (
					<ProblemRow
						key={problem.id}
						problem={problem}
						onEdit={() => onEdit(problem)}
					/>
				))}
			</div>
		</div>
	);
};
