"use server";

import usePrisma from "@/hooks/usePrisma";
import bcrypt from "bcryptjs";

const addUser = async (username: string, email: string, password: string) => {
	const prisma = usePrisma();
	try {
		const salt = await bcrypt.genSalt(Number(process.env.SALT) as number);
		const hash = await bcrypt.hash(password, salt);
		if (await prisma.user.findFirst({ where: { email: email } }))
			return "Email already registered" as string;
		await prisma.user.create({
			data: {
				username: username,
				email: email,
				password: hash,
			},
		});
	} catch (err: any) {
		return err.message as string;
	}
	return true;
};

export default addUser;
