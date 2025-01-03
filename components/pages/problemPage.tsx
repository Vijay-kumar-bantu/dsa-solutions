"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProblemHeader } from "@/components/ProblemHeader";
import { LeetCodeButton } from "@/components/LeetCodeButton";
import { ApproachAccordion } from "@/components/ApproachAccordion";
import { Problem } from "@/types";

interface PageProps {
	problem: Problem;
}

const ProblemPage = ({ problem }: PageProps) => {
	const [openApproachIndex, setOpenApproachIndex] = useState<number | null>(
		null
	);

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
			<div className="container mx-auto px-4 max-w-4xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8"
				>
					<ProblemHeader problem={problem} />

					<div className="prose dark:prose-invert max-w-none">
						<h2>Problem Description</h2>
						<p>{problem.description}</p>

						<div className="mt-8 flex gap-5">
							<LeetCodeButton url={problem.youtubeUrl} variant="youtube" />
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
				</motion.div>
			</div>
		</div>
	);
};

export default ProblemPage;
