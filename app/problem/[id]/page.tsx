import getProblem from "@/actions/getProblem";
import ProblemPage from "@/components/pages/problemPage";
import { notFound } from "next/navigation";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Page = async ({ params }: any) => {
	const { id } = await params;
	const problem = await getProblem(id);

	if (!problem) {
		return notFound();
	}
	return <ProblemPage problem={problem} />;
};

export default Page;
