"use server";

import usePrisma from "@/hooks/usePrisma";

const handleCompletion = async (
	id: string,
	problemId: string,
	variant: "add" | "remove"
) => {
	const prisma = usePrisma();

	try {
		if (variant === "add") {
			await prisma.user.update({
				where: {
					id: id,
				},
				data: {
					completedProblems: {
						connect: {
							id: problemId,
						},
					},
				},
			});
		} else {
			await prisma.user.update({
				where: {
					id: id,
				},
				data: {
					completedProblems: {
						disconnect: {
							id: problemId,
						},
					},
				},
			});
		}
		return true;
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	} catch (err) {
		return false;
	}
};

export default handleCompletion;
