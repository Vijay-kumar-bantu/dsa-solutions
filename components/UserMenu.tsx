"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, LogIn, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { ThemeToggle } from "./ThemeToggle";
import { LoginModal } from "./LoginModal";
import { useTheme } from "@/hooks/useTheme";

export const UserMenu = () => {
	const { theme, toggleTheme } = useTheme();
	const { user, logout, isAuthenticated } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);

	return (
		<div className="relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
			>
				<User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						className="absolute right-0 mt-2 min-w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
					>
						{isAuthenticated ? (
							<>
								<div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
									<p className="text-sm text-gray-600 dark:text-gray-400">
										Hi,
									</p>
									<p className="font-medium text-gray-900 dark:text-white">
										{user?.username}
									</p>
								</div>
								<button
									onClick={logout}
									className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
								>
									<LogOut className="w-4 h-4" />
									<span>Logout</span>
								</button>
							</>
						) : (
							<button
								onClick={() => {
									setShowLoginModal(true);
									setIsOpen(false);
								}}
								className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
							>
								<LogIn className="w-4 h-4" />
								<span>Login</span>
							</button>
						)}
						<div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2 px-4">
							<ThemeToggle theme={theme} toggleTheme={toggleTheme} />
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<LoginModal
				isOpen={showLoginModal}
				onClose={() => setShowLoginModal(false)}
			/>
		</div>
	);
};
