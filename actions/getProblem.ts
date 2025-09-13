"use server";

import usePrisma from "@/hooks/usePrisma";
import { Problem } from "@/types";

const getProblem = async (id: string) => {
	const prisma = usePrisma();
	try {
		// Get the current problem
		const problem = await prisma.problem.findUnique({
			where: { id },
			include: { solutions: true },
		});

		if (!problem) return null;

		// Get all problems in the same category, ordered by name
		const problemsInCategory = await prisma.problem.findMany({
			where: { category: problem.category },
			orderBy: { category: "asc" },
			select: { id: true, title: true },
		});

		const currentIndex = problemsInCategory.findIndex((p) => p.id === id);

		const prev = currentIndex > 0 ? problemsInCategory[currentIndex - 1] : null;
		const next =
			currentIndex < problemsInCategory.length - 1
				? problemsInCategory[currentIndex + 1]
				: null;

		return {
			problem: problem as Problem,
			prev,
			next,
		};
	} catch (err) {
		return null;
	}
};

export default getProblem;
