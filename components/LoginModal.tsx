import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
	const { login, register, loading } = useAuth();
	const [isLogin, setIsLogin] = useState(true);
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");

	useEffect(() => {
		setFormData({
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		});

		setError("");
	}, [isOpen, isLogin]);

	useEffect(() => {
		if (loading) {
			setError(
				isLogin
					? "Please wait, authentication in progress..."
					: "Please wait, registration in progress..."
			);
		}
	}, [loading]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		try {
			if (isLogin) {
				await login(formData.email, formData.password);
				onClose();
			} else {
				if (formData.password !== formData.confirmPassword) {
					setError("Passwords do not match");
					return;
				}
				await register(formData.username, formData.email, formData.password);
				setIsLogin(true);
			}
			// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message || "Authentication failed. Please try again.");
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md overflow-hidden"
					>
						<div className="p-6">
							<div className="flex justify-between items-center mb-6">
								<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
									{isLogin ? "Welcome back" : "Create account"}
								</h2>
								<button
									onClick={onClose}
									className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
								>
									<X className="w-5 h-5 text-gray-500" />
								</button>
							</div>

							{error && (
								<div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
									{error}
								</div>
							)}

							<form onSubmit={handleSubmit} className="space-y-4">
								{!isLogin && (
									<div>
										<label
											htmlFor="username"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
										>
											Username
										</label>
										<input
											type="text"
											id="username"
											name="username"
											value={formData.username}
											onChange={handleInputChange}
											className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
											required
										/>
									</div>
								)}

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
										required
									/>
								</div>

								<div>
									<label
										htmlFor="password"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
									>
										Password
									</label>
									<input
										type="password"
										id="password"
										name="password"
										value={formData.password}
										onChange={handleInputChange}
										className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
										required
									/>
								</div>

								{!isLogin && (
									<div>
										<label
											htmlFor="confirmPassword"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
										>
											Confirm Password
										</label>
										<input
											type="password"
											id="confirmPassword"
											name="confirmPassword"
											value={formData.confirmPassword}
											onChange={handleInputChange}
											className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
											required
										/>
									</div>
								)}

								<button
									type="submit"
									className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
								>
									{isLogin ? "Sign In" : "Create Account"}
								</button>
							</form>

							<div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
								{isLogin
									? "Don't have an account?"
									: "Already have an account?"}{" "}
								<button
									onClick={() => setIsLogin(!isLogin)}
									className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium"
								>
									{isLogin ? "Sign up" : "Sign in"}
								</button>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};
