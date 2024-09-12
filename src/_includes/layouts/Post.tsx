import type { Post } from "../types/index.ts";

export const layout = "layouts/Base.tsx";

export default (
	{ title, date, readingInfo, tags, children, excerpt, comp }: Lume.Data & Post,
	helpers: Lume.Helpers,
) => (
	<div data-pagefind-body className="max-w-screen-md m-auto py-8 px-4 sm:px-4">
		<div className="flex flex-col">
			<div className="flex flex-col gap-2">
				<h1 className="text-4xl font-medium">{title}</h1>
				<div className="flex flex-row gap-2 items-center text-xs opacity-80">
					<p>
						<time datetime={helpers.date(date, "DATETIME")}>
							{helpers.date(date, "HUMAN_DATE")}
						</time>
					</p>
					•<p>{readingInfo.minutes} minute read</p> •
					<p className="flex flex-row gap-2">
						<comp.TagList tags={tags} size="xs" />
					</p>
				</div>
			</div>
			<div className="prose">{children}</div>
		</div>
	</div>
);
