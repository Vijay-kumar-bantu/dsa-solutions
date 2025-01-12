"use client";

import { useState } from "react";
import { ProblemList } from "./ProblemList";
import { ProblemForm } from "./ProblemForm";
import { AdminHeader } from "./AdminHeader";

export const AdminDashboard = () => {
	const [isAddingProblem, setIsAddingProblem] = useState(false);
	const [editingProblem, setEditingProblem] = useState(null);

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
			<div className="max-w-6xl mx-auto">
				<AdminHeader onAddNew={() => setIsAddingProblem(true)} />

				<div className="mt-8">
					<div>
						<ProblemList onEdit={setEditingProblem} />
					</div>

					<div>
						{(isAddingProblem || editingProblem) && (
							<ProblemForm
								problem={editingProblem}
								isEditing={!!editingProblem}
								onClose={() => {
									setIsAddingProblem(false);
									setEditingProblem(null);
								}}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
