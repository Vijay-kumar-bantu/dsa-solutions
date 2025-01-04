"use client";

import { motion } from "framer-motion";

interface LoaderProps {
	size?: "small" | "medium" | "large";
	className?: string;
}

export const Loader = ({ size = "medium", className = "" }: LoaderProps) => {
	const sizeClasses = {
		small: "w-4 h-4",
		medium: "w-8 h-8",
		large: "w-12 h-12",
	};

	return (
		<div className={`flex justify-center items-center ${className}`}>
			<motion.div
				className={`${sizeClasses[size]} border-4 border-primary-200 border-t-primary-600 dark:border-gray-700 dark:border-t-primary-400 rounded-full`}
				animate={{ rotate: 360 }}
				transition={{
					duration: 1,
					repeat: Infinity,
					ease: "linear",
				}}
			/>
		</div>
	);
};
