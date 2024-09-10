export const layout = "layouts/Base.tsx";

export default ({ comp, search }: Lume.Data) => {
	const latestPosts = search.pages("type=posts", "date=desc", 5);
	return (
		<div>
			<div className="max-w-screen-lg m-auto p-4 pb-8 md:px-4">
				<div className="flex flex-col items-center">
					<div className="flex flex-col md:flex-row">
						<div className="order-1 md:order-2 md:w-1/3 md:mt-6 banner-bg bg-base-300 flex flex-col justify-center">
							<div className="text-center banner-text flex flex-col gap-2 mt-4 p-14 md:p-8">
								<h1 className="text-2xl basis-1/2 font-medium">
									engineer & yogi
								</h1>
								<h2>
									inner peace through clean code and <br /> mindful movement 
								</h2>
								<div className="flex flex-row gap-4 justify-center pl-1">
									<comp.SocialList />
								</div>
							</div>
						</div>
						<comp.SVGRocketBoy className="order-2 md:order-1" />
					</div>
				</div>
			</div>
			<div className="bg-base-300">
				<div className="max-w-screen-lg m-auto py-16">
					<div className="flex justify-center">
						<div className="basis-2/3 flex flex-col gap-4">
							<h2 className="text-center text-2xl font-medium">
								hi! i'm justice.
							</h2>
							<div className="flex flex-col gap-2 text-center text-xl">
								<p>
									i'm passionate about crafting unique experiences with flexible
									coding and systems design.
								</p>
								<p>
									i focus on building robust, type-safe, and well-tested
									applications.
								</p>
								<p>
									i'm driven, meticulous, and constantly working to expanding my
									skillset.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-screen-lg m-auto py-16 px-4">
				<comp.InterestsBar />
				<div className="w-2/3 m-auto flex flex-col gap-12">
					<h2 className="text-2xl text-center font-medium">
						latest from the blog
					</h2>
					{latestPosts.map((p) => (
						<comp.PostList post={p} key={p.title} />
					))}
				</div>
			</div>
		</div>
	);
};

// my experience spans various
// 							organization sizes and projects, including admin dashboards,
// 							product pages, and complex wizards.
