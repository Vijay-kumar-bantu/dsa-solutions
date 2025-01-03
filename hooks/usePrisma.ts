import { PrismaClient } from "@prisma/client";

function usePrisma() {
	const prisma = new PrismaClient();
	return prisma;
}

export default usePrisma;
