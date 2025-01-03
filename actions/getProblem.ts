"use server";

import usePrisma from "@/hooks/usePrisma";
import { Problem } from "@/types";

const getProblem = async (id: string) => {
	const prisma = usePrisma();
	try {
		const problem = await prisma.problem.findUnique({
			where: {
				id: id,
			},
			include: {
				solutions: true,
			},
		});

		return problem as Problem;
	} catch (err) {
		return null;
	}
};

export default getProblem;
