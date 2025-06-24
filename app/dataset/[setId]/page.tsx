import getAllDataSet from "@/actions/getAllDataSet";
import getAllDatasetProblems from "@/actions/getAllDatasetProblems";
import Blind75 from "@/components/pages/Blind75";
import { notFound } from "next/navigation";

//this is data set page

//revalidate every 3600 seconds
export const revalidate = 24 * 3600;

//dynamic params true -- "[id]"
export const dynamicParams = true;

export async function generateStaticParams() {
	const datasets = await getAllDataSet();
	return datasets;
}
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Page = async ({ params }: any) => {
	const { setId } = await params;

	const problems = await getAllDatasetProblems(setId);

	if (problems.length === 0) {
		return notFound();
	}

	return <Blind75 problems={problems} />;
};

export default Page;
