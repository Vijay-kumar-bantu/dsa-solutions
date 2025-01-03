"use server";

import usePrisma from "@/hooks/usePrisma";
import bcrypt from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";

const checkUser = async (email: string, password: string) => {
	try {
		const prisma = usePrisma();
		const user = await prisma.user.findFirst({
			where: {
				email: email,
			},
			include: {
				completedProblems: {
					select: {
						id: true,
					},
				},
			},
		});

		if (user) {
			if (await bcrypt.compare(password, user.password)) {
				const token = jwt.sign(user.id, process.env.JWT_SUPER_SECRET as Secret);
				return { user, token };
			} else {
				return "Invalid credentials" as string;
			}
		} else {
			return "user not found, please check the email correctly" as string;
		}
	} catch (err) {
		return "Internal server error,please try again later" as string;
	}
};

export default checkUser;
