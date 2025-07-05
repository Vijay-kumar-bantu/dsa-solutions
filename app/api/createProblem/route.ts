import { PrismaClient } from "@prisma/client";

const Get = async () => {
	return new Response("Hello World!", { status: 200 });
};

const Post = async (req: Request) => {
	const body = await req.json();

	const {
		id,
		title,
		category,
		dataset,
		description,
		difficulty,
		leetcodeUrl,
		youtubeUrl,
		solutions,
	} = body;

	const prisma = new PrismaClient();

	try {
		await prisma.problem.create({
			data: {
				id,
				title,
				category,
				dataset,
				description,
				difficulty,
				leetcodeUrl,
				youtubeUrl,
				solutions: {
					createMany: {
						data: solutions,
					},
				},
			},
		});
	} catch (err) {
		return new Response(err as string, { status: 500 });
	}

	return new Response("Problem created successfully", { status: 200 });
};

export { Get as GET, Post as POST };
