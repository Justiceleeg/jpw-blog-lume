export type Post = {
	title: string;
	tags: string[];
	url: string;
	date: string;
	excerpt: string;
	readingInfo: {
		words: number;
		minutes: number;
	};
};
