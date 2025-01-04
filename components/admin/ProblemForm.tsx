"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Problem, Solution } from "@/types";
import { SolutionsList } from "./solutions/SolutionsList";
import { SolutionForm } from "./solutions/SolutionForm";
import createProblem from "@/actions/createProblem";

interface ProblemFormProps {
	problem?: Problem | null;
	onClose: () => void;
}

export const ProblemForm = ({ problem, onClose }: ProblemFormProps) => {
	const [formData, setFormData] = useState<Problem>({
		id: problem?.id || "",
		title: problem?.title || "",
		difficulty: problem?.difficulty || "Easy",
		category: problem?.category || "",
		dataset: problem?.dataset || [],
		description: problem?.description || "",
		leetcodeUrl: problem?.leetcodeUrl || "",
		youtubeUrl: problem?.youtubeUrl || "",
		solutions: problem?.solutions || [],
	});

	const [showSolutionForm, setShowSolutionForm] = useState(false);
	const [editingSolution, setEditingSolution] = useState<Solution | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission

		if (!problem) {
			if (await createProblem(formData)) {
				alert("Problem created successfully");
				onClose();
			} else {
				alert("Failed to create problem");
			}
		}
	};

	const handleSolutionSubmit = (solution: Solution) => {
		if (editingSolution) {
			// Update existing solution
			setFormData({
				...formData,
				solutions: formData.solutions.map((s) =>
					s === editingSolution ? solution : s
				),
			});
		} else {
			// Add new solution
			setFormData({
				...formData,
				solutions: [...formData.solutions, solution],
			});
		}
		setShowSolutionForm(false);
		setEditingSolution(null);
	};

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
			<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-[90vw] max-h-[90vh] overflow-y-auto lg:w-1/2">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
						{problem ? "Edit Problem" : "Add New Problem"}
					</h2>
					<button
						onClick={onClose}
						className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
					>
						<X className="w-5 h-5 text-gray-500" />
					</button>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Existing form fields */}
					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								Title
							</label>
							<input
								type="text"
								value={formData.title}
								onChange={(e) =>
									setFormData({ ...formData, title: e.target.value })
								}
								className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								Identifier
							</label>
							<input
								type="text"
								value={formData.id}
								onChange={(e) =>
									setFormData({ ...formData, id: e.target.value })
								}
								className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								Difficulty
							</label>
							<select
								value={formData.difficulty}
								onChange={(e) =>
									setFormData({
										...formData,
										difficulty: e.target.value as "Easy" | "Medium" | "Hard",
									})
								}
								className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
							>
								<option value="Easy">Easy</option>
								<option value="Medium">Medium</option>
								<option value="Hard">Hard</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								Category
							</label>
							<input
								type="text"
								value={formData.category}
								onChange={(e) =>
									setFormData({ ...formData, category: e.target.value })
								}
								className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								Dataset
							</label>
							<input
								type="text"
								value={formData.dataset.join(",")}
								onChange={(e) =>
									setFormData({
										...formData,
										dataset: e.target.value.split(","),
									})
								}
								className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								Description
							</label>
							<textarea
								value={formData.description}
								onChange={(e) =>
									setFormData({ ...formData, description: e.target.value })
								}
								rows={4}
								className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								Youtoube URL
							</label>
							<input
								type="url"
								value={formData.youtubeUrl}
								onChange={(e) =>
									setFormData({ ...formData, youtubeUrl: e.target.value })
								}
								className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								LeetCode URL
							</label>
							<input
								type="url"
								value={formData.leetcodeUrl}
								onChange={(e) =>
									setFormData({ ...formData, leetcodeUrl: e.target.value })
								}
								className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
								required
							/>
						</div>
					</div>

					{/* Solutions section */}
					<div className="border-t border-gray-200 dark:border-gray-700 pt-6">
						<SolutionsList
							solutions={formData.solutions}
							onAddSolution={() => {
								setEditingSolution(null);
								setShowSolutionForm(true);
							}}
							onEditSolution={(solution) => {
								setEditingSolution(solution);
								setShowSolutionForm(true);
							}}
						/>
					</div>

					<div className="flex justify-end gap-3">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
						>
							{problem ? "Update" : "Create"}
						</button>
					</div>
				</form>

				{showSolutionForm && (
					<SolutionForm
						solution={editingSolution || undefined}
						onClose={() => {
							setShowSolutionForm(false);
							setEditingSolution(null);
						}}
						onSubmit={handleSolutionSubmit}
					/>
				)}
			</div>
		</div>
	);
};
