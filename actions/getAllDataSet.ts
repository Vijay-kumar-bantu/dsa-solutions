import usePrisma from "@/hooks/usePrisma";

const getAllDataSet = async () => {
	const prisma = usePrisma();
	const datasets = await prisma.problem.findMany({
		select: {
			dataset: true,
		},
	});
	const data = new Set();
	datasets.map((dataset) => dataset.dataset.map((d) => data.add(d)));
	return Array.from(data).map((d) => {
		return {
			setId: d as string,
		};
	});
};

export default getAllDataSet;
