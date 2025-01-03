"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
	return (
		<div className="min-h-[80vh] flex items-center justify-center px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="text-center"
			>
				<h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">
					404
				</h1>

				<h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
					Page Not Found
				</h2>

				<p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md mx-auto">
					{"The page you're looking for doesn't exist or has been moved."}
				</p>

				<Link
					href="/"
					className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
				>
					<Home className="w-5 h-5" />
					<span>Back to Home</span>
				</Link>
			</motion.div>
		</div>
	);
}
