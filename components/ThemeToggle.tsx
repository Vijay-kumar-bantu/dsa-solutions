import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = ({
	theme,
	toggleTheme,
}: {
	theme: string;
	toggleTheme: () => void;
}) => {
	return (
		<div className="flex gap-2 items-center">
			<p className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 flex items-center space-x-2">
				Theme
			</p>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={toggleTheme}
				className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
				aria-label="Toggle theme"
			>
				{theme === "dark" ? (
					<Sun className="w-5 h-5 text-yellow-500" />
				) : (
					<Moon className="w-5 h-5 text-gray-700" />
				)}
			</motion.button>
		</div>
	);
};
