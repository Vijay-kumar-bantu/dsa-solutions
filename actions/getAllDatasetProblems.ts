"use server";

import usePrisma from "@/hooks/usePrisma";

const getAllDatasetProblems = async (dataset: string) => {
	const prisma = usePrisma();
	try {
		const problems = await prisma.problem.findMany({
			where: {
				dataset: { has: dataset },
			},
			select: {
				id: true,
				title: true,
				category: true,
				difficulty: true,
				completedBy: true,
			},
		});
		return problems;
	} catch (err) {
		return [];
	}
};

export default getAllDatasetProblems;
