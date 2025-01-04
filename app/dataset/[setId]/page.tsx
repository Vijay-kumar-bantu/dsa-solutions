import Blind75 from "@/components/pages/Blind75";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Page = async ({ params }: any) => {
	const { setId } = await params;

	return <Blind75 setId={setId} />;
};

export default Page;
