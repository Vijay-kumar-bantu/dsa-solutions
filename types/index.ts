export interface Problem {
	id: string;
	title: string;
	difficulty: "Easy" | "Medium" | "Hard";
	category: string;
	dataset: string[];
	description: string;
	leetcodeUrl: string;
	youtubeUrl: string;
	solutions: Solution[];
}

export interface Solution {
	title: string;
	explanation: string;
	timeComplexity: string;
	spaceComplexity: string;
	implementations: {
		[key: string]: string;
	};
}
