"use server";

import usePrisma from "@/hooks/usePrisma";
import bcrypt from "bcryptjs";

const addUser = async (username: string, email: string, password: string) => {
	const hash = await bcrypt.hash(password, 10);
	const prisma = usePrisma();
	try {
		await prisma.user.create({
			data: {
				username: username,
				email: email,
				password: hash,
			},
		});
	} catch (err) {
		return false;
	}
	return true;
};

export default addUser;
