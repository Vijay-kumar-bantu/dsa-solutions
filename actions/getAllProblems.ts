"use server";

import usePrisma from "@/hooks/usePrisma";

const getAllProblems = async () => {
	const prisma = usePrisma();
	return await prisma.problem.findMany({
		select: {
			id: true,
			title: true,
			description: true,
			dataset: true,
			category: true,
			difficulty: true,
			leetcodeUrl: true,
			youtubeUrl: true,
			solutions: {
				select: {
					title: true,
					explanation: true,
					timeComplexity: true,
					spaceComplexity: true,
					implementations: true,
				},
			},
		},
	});
};

export default getAllProblems;
