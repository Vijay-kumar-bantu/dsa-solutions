import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface LeetCodeButtonProps {
	url: string;
	variant?: "leetcode" | "youtube";
}

export const LeetCodeButton: React.FC<LeetCodeButtonProps> = ({
	url,
	variant = "leetcode",
}) => {
	return (
		<motion.a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className={`inline-flex items-center space-x-2 px-4 py-2 ${
				variant === "leetcode"
					? "bg-[#FFA116] hover:bg-[#FF9000]"
					: "bg-red-600 hover:bg-red-700"
			} text-white rounded-lg transition-colors`}
		>
			<span>
				{variant === "leetcode"
					? "Solve on LeetCode"
					: "Explanation on YouTube"}
			</span>
			<ExternalLink className="w-4 h-4" />
		</motion.a>
	);
};
