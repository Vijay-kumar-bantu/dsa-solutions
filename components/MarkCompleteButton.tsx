import { useCompletion } from "@/contexts/CompletionContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Loader } from "./Loader";

function MarkCompleteButton({ problemId }: { problemId: string }) {
	const [checkLoading, setCheckLoading] = useState<boolean>(false);
	const { isCompleted, toggleCompletion } = useCompletion();
	const completed = isCompleted(problemId);

	if (checkLoading) {
		return <Loader size="medium" />;
	}

	const handleAction = async () => {
		setCheckLoading(true);
		try {
			await toggleCompletion(problemId);
		} finally {
			setCheckLoading(false);
		}
	};
	return (
		<motion.button
			onClick={handleAction}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className={`inline-flex items-center space-x-2 px-4 py-2 ${
				completed
					? "bg-red-600 hover:bg-red-700"
					: "bg-green-600 hover:bg-green-700"
			} text-white rounded-lg transition-colors`}
		>
			<span>{completed ? "Mark as Incomplete" : "Mark as Complete"}</span>
		</motion.button>
	);
}

export default MarkCompleteButton;
