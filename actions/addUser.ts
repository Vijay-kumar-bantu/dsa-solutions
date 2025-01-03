"use server";

import usePrisma from "@/hooks/usePrisma";
import bcrypt from "bcryptjs";

const addUser = async (username: string, email: string, password: string) => {
	const prisma = usePrisma();
	try {
		const salt = await bcrypt.genSalt(Number(process.env.SALT) as number);
		const hash = await bcrypt.hash(password, salt);
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
