// import getAllProblemId from "@/actions/getAllProblemId";
import getProblem from "@/actions/getProblem";
import ProblemPage from "@/components/pages/problemPage";
import { notFound } from "next/navigation";

// revalidate every 3600 seconds
// export const revalidate = 24 * 3600;

//dynamic params true -- "[id]"
export const dynamicParams = true;

export async function generateStaticParams() {
	// const Ids = await getAllProblemId();
	return [{ id: "two-sum" }];
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Page = async ({ params }: any) => {
	const { id } = await params;
	const data = await getProblem(id);

	if (!data) {
		return notFound();
	}
	return (
		<ProblemPage problem={data.problem} prev={data.prev} next={data.next} />
	);
};

export default Page;
