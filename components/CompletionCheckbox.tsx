import React, { useState } from "react";
import { Check } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useCompletion } from "../contexts/CompletionContext";
import { Loader } from "./Loader";

interface CompletionCheckboxProps {
	problemId: string;
}

export const CompletionCheckbox: React.FC<CompletionCheckboxProps> = ({
	problemId,
}) => {
	const { isAuthenticated } = useAuth();
	const [checkLoading, setCheckLoading] = useState<boolean>(false);
	const { isCompleted, toggleCompletion } = useCompletion();
	const completed = isCompleted(problemId);

	if (!isAuthenticated) return null;

	if (checkLoading) {
		return <Loader size="medium" />;
	}

	const handleAction = async () => {
		setCheckLoading(true);
		await toggleCompletion(problemId);
		setCheckLoading(false);
	};

	return (
		<button
			onClick={handleAction}
			className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors
        ${
					completed
						? "bg-green-500 border-green-500 text-white"
						: "border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-500"
				}`}
		>
			{completed && <Check className="w-4 h-4" />}
		</button>
	);
};
