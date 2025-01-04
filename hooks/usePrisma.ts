import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | undefined;

// Ensures a single PrismaClient instance is reused
function usePrisma() {
	if (!prisma) {
		prisma = new PrismaClient();
	}
	return prisma;
}

export default usePrisma;
