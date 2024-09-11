import type { Post } from "../_includes/types/index.ts";

export default (
	{ post, comp }: Lume.Data & { post: Post },
	helpers: Lume.Helpers,
) => (
	<div className="flex flex-col gap-2">
		<h2>
			<a href={post.url} className="text-xl font-medium hover:text-secondary">
				{post.title.toLowerCase()}
			</a>
		</h2>
		<div className="flex flex-row gap-2 items-center text-xs opacity-80">
			<p>
				<time datetime={helpers.date(post.date, "DATETIME")}>
					{helpers.date(post.date, "HUMAN_DATE")}
				</time>
			</p>
			•<p>{post.readingInfo.minutes} minute read</p> •
			<p className="flex flex-row gap-2">
				<comp.TagList tags={post.tags} size="xs" />
			</p>
		</div>
		<div className="text-base">
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<div dangerouslySetInnerHTML={{ __html: helpers.md(post.excerpt) }} />
		</div>
		<a
			href={post.url}
			style={{ transition: "all .2s ease-in-out" }}
			className="hover:text-secondary underline decoration-secondary hover:decoration-2 underline-offset-4 text-sm"
		>
			continue reading →
		</a>
	</div>
);
