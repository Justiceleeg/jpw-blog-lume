export const layout = "layouts/Posts.tsx";
export const title = "All Posts";
export const metas = {
	title: "All Posts • Justice P. White",
	description:
		"A collection of blog posts about web development, indie game dev, yoga, and art.",
};

export default function* ({ search, paginate }: Lume.Data) {
	const posts = search.pages("type=posts", "date=desc");

	for (const data of paginate(posts, { url, size: 10 })) {
		yield data;
	}
}

function url(n: number) {
	if (n === 1) {
		return "/posts/";
	}

	return `/posts/${n}/`;
}
