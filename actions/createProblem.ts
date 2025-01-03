"use server";

import usePrisma from "@/hooks/usePrisma";
import { Problem } from "@/types";

const createProblem = async (data: Problem) => {
	const prisma = usePrisma();
	try {
		await prisma.problem.create({
			data: {
				id: data.id,
				title: data.title,
				category: data.category,
				dataset: data.dataset,
				description: data.description,
				difficulty: data.difficulty,
				leetcodeUrl: data.leetcodeUrl,
				youtubeUrl: data.youtubeUrl,
				solutions: {
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

export default createProblem;
