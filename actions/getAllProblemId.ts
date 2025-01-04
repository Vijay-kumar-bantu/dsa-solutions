"use server";

import usePrisma from "@/hooks/usePrisma";

const getAllProblemId = async () => {
	const prisma = usePrisma();
	const problems = await prisma.problem.findMany({
		select: {
			id: true,
		},
	});
	return problems;
};

export default getAllProblemId;
