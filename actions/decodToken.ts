"use server";

import usePrisma from "@/hooks/usePrisma";
import jwt, { Secret } from "jsonwebtoken";

const decodToken = async (token: string) => {
	const prisma = usePrisma();
	try {
		const decode = await jwt.verify(
			token,
			process.env.JWT_SUPER_SECRET as Secret
		);
		if (decode) {
			const user = await prisma.user.findUnique({
				where: {
					id: decode as string,
				},
				include: {
					completedProblems: {
						select: {
							id: true,
						},
					},
				},
			});
			return user;
		}
	} catch (err) {
		return err;
	}
};

export default decodToken;
