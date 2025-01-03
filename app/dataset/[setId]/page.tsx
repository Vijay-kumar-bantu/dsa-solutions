import getAllProblems from "@/actions/getAllProblems";
import Blind75 from "@/components/pages/Blind75";
import { notFound } from "next/navigation";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Page = async ({ params }: any) => {
	const { setId } = await params;
	const problems = await getAllProblems(setId);

	if (problems.length === 0) {
		return notFound();
	}

	return <Blind75 problems={problems} />;
};

export default Page;
