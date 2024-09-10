export const layout = "layouts/Base.tsx";

export default ({ children, title, imageAlt, image, comp }: Lume.Data) => (
	<div className="flex flex-col md:flex-row gap-8 max-w-screen-lg m-auto py-8 px-4 sm:px-4">
		<div className="order-2 md:order-1 basis-3/5">
			<h1 className="text-4xl mb-8 font-medium">{title}</h1>
			<div className="prose">{children}</div>
		</div>
		<div className="md:order-2 order-1">
			<img
				src={`/img/${image}.webp`}
				alt={imageAlt}
				width="600"
				height="900"
				loading="eager"
				decoding="async"
				className="max-w-72"
			/>
			<nav className="mt-4 flex flex-row gap-4 md:place-self-center md:justify-self-end">
				<comp.SocialList />
			</nav>
		</div>
	</div>
);
