"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProblemHeader } from "@/components/ProblemHeader";
import { LeetCodeButton } from "@/components/LeetCodeButton";
import { ApproachAccordion } from "@/components/ApproachAccordion";
import { Problem } from "@/types";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkCompleteButton from "../MarkCompleteButton";
import { useAuth } from "@/contexts/AuthContext";
import { useCompletion } from "@/contexts/CompletionContext";

interface PageProps {
	problem: Problem;
	prev: { id: string; title: string } | null;
	next: { id: string; title: string } | null;
}

const ProblemPage = ({ problem, prev, next }: PageProps) => {
	const [openApproachIndex, setOpenApproachIndex] = useState<number | null>(
		null
	);

	const { isAuthenticated } = useAuth();
	const { isCompleted } = useCompletion();
	const completed = isCompleted(problem.id);

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
			<div className="container mx-auto px-4 max-w-4xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 lg:p-8"
				>
					{completed && (
						<div className="mb-4 p-2 bg-green-100 text-green-950 dark:text-green-800 rounded-lg">
							<p className="font-semibold">You have completed this problem!</p>
						</div>
					)}
					<ProblemHeader problem={problem} />

					<div className="prose dark:prose-invert max-w-none">
						<h2>Problem Description</h2>
						<p>{problem.description}</p>

						<div className="mt-8 flex gap-5">
							{/* <LeetCodeButton url={problem.youtubeUrl} variant="youtube" /> */}
							<LeetCodeButton url={problem.leetcodeUrl} />
						</div>

						<h2 className="mt-8">Solution Approaches</h2>
						{problem.solutions.map((solution, index) => (
							<ApproachAccordion
								key={index}
								solution={solution}
								isOpen={openApproachIndex === index}
								onToggle={() =>
									setOpenApproachIndex(
										openApproachIndex === index ? null : index
									)
								}
							/>
						))}
					</div>

					<div className="mt-6 flex justify-end space-x-4">
						{isAuthenticated && <MarkCompleteButton problemId={problem.id} />}
					</div>
				</motion.div>
				<div className="mt-4 flex gap-5 justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
					<Link
						href={`/problem/${prev?.id ?? ""}`}
						className="flex items-center"
					>
						{prev && <ChevronLeft className="text-black dark:text-white" />}
						<p className="text-sm text-black dark:text-white font-bold">
							{prev?.title ?? ""}
						</p>
					</Link>

					<Link
						href={`/problem/${next?.id ?? ""}`}
						className="flex items-center"
					>
						<p className="text-sm text-black font-bold dark:text-white">
							{next?.title ?? ""}
						</p>
						{next && <ChevronRight className="text-black dark:text-white" />}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProblemPage;
