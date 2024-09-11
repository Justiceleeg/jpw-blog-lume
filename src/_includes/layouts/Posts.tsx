export const layout = "layouts/Base.tsx";

export default ({ search, comp }: Lume.Data) => {
	const latestPosts = search.pages("type=posts", "date=desc", 5);

	return (
		<div className="flex flex-col gap-8 max-w-screen-md m-auto py-8 px-4 sm:px-4">
			<header class="w-full">
				<h1 className="text-4xl mb-8 font-medium">blog</h1>

				<div className="search" id="search" />
			</header>
			<div className="flex flex-col gap-8">
				<h2 className="text-2xl font-medium">latest</h2>
				{latestPosts.map((p) => (
					<comp.PostList post={p} key={p.title} />
				))}
			</div>
		</div>
	);
};
