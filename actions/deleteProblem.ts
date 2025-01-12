"use server";
import usePrisma from "@/hooks/usePrisma";

const deleteProblem = async (id: string) => {
	const prisma = usePrisma();
	try {
		await prisma.problem.delete({
			where: {
				id,
			},
		});
	} catch (err) {
		return false;
	}

	return true;
};

export default deleteProblem;
