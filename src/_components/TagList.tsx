const tagMap: Record<string, string> = {
	"game-development": "primary",
	"web-development": "secondary",
	coding: "accent",
	yoga: "info",
	art: "success",
	// "blah": "warning"
};

type Size = "xs" | "base" | "lg" | "xl";

export default ({
	tags,
	size,
}: Lume.Data & { tags: string[]; size?: Size }) => (
	<>
		{tags.sort().map((t) => (
			<>
				<span
					className={`text-${size || "base"} badge badge-outline badge-${tagMap[t.replace(/ /g, "-")]}`}
					key={t}
				>
					{t}
				</span>{" "}
			</>
		))}
	</>
);
