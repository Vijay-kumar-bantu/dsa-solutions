"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { CompletionCheckbox } from "../CompletionCheckbox";
import getAllProblems from "@/actions/getAllProblems";
import { notFound } from "next/navigation";
import LoadingScreen from "../LoadingScreen";

interface PageProps {
	setId: string;
}

interface Problem {
	id: string;
	title: string;
	difficulty: string;
	category: string;
}

const Blind75 = ({ setId }: PageProps) => {
	const [problems, setProblems] = useState<Problem[]>([]);
	const [loading, setLoading] = useState(true);
	const categories = Array.from(new Set(problems.map((p) => p.category)));
	const [openCategory, setOpenCategory] = useState<string | null>(null);

	useEffect(() => {
		getAllProblems(setId).then((data) => {
			setProblems(data);
			setLoading(false);
		});
	}, [setId]);

	if (loading) {
		return <LoadingScreen />;
	}

	if (problems.length === 0) {
		return notFound();
	}

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
			<div className="container mx-auto px-4">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
					Blind 75 Solutions
				</h1>

				<div className="space-y-4">
					{categories.map((category) => (
						<motion.div
							key={category}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="bg-white dark:bg-gray-800 rounded-lg shadow-sm"
						>
							<button
								onClick={() =>
									setOpenCategory(openCategory === category ? null : category)
								}
								className="w-full px-6 py-4 flex items-center justify-between text-left"
							>
								<span className="text-lg font-medium text-gray-900 dark:text-white">
									{category}
								</span>
								{openCategory === category ? (
									<ChevronUp className="w-5 h-5 text-gray-500" />
								) : (
									<ChevronDown className="w-5 h-5 text-gray-500" />
								)}
							</button>

							<AnimatePresence>
								{openCategory === category && (
									<motion.div
										initial={{ height: 0 }}
										animate={{ height: "auto" }}
										exit={{ height: 0 }}
										className="overflow-hidden"
									>
										<div className="px-6 pb-4 space-y-2">
											{problems
												?.filter((p) => p.category === category)
												.map((problem, index) => (
													<div className="flex gap-4 items-center" key={index}>
														<CompletionCheckbox problemId={problem.id || ""} />
														<Link
															key={problem.id}
															href={`/problem/${problem.id}`}
															className="block p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex-1"
														>
															<div className="flex items-center justify-between">
																<span className="text-gray-900 dark:text-white">
																	{problem.title}
																</span>
																<span
																	className={`
                                px-2 py-1 text-sm rounded
                                ${
																	problem.difficulty === "Easy"
																		? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
																		: problem.difficulty === "Medium"
																		? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
																		: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
																}
                              `}
																>
																	{problem.difficulty}
																</span>
															</div>
														</Link>
													</div>
												))}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blind75;
