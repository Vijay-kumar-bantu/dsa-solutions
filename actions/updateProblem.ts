"use server";

import usePrisma from "@/hooks/usePrisma";
import { Problem } from "@/types";

const updateProblem = async (data: Problem) => {
	const prisma = usePrisma();
	try {
		await prisma.problem.update({
			where: {
				id: data.id,
			},
			data: {
				title: data.title,
				category: data.category,
				dataset: data.dataset,
				description: data.description,
				difficulty: data.difficulty,
				leetcodeUrl: data.leetcodeUrl,
				youtubeUrl: data.youtubeUrl,
				solutions: {
					deleteMany: {},
					createMany: {
						data: data.solutions,
					},
				},
			},
		});
	} catch (err) {
		return false;
	}

	return true;
};

export default updateProblem;
