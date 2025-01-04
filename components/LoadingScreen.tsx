"use client";

import { motion } from "framer-motion";
import { Loader } from "./Loader";

const LoadingScreen = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50"
		>
			<div className="text-center">
				<Loader size="large" />
				<p className="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
			</div>
		</motion.div>
	);
};

export default LoadingScreen;
