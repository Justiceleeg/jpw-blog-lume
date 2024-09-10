export const layout = "layouts/Base.tsx";

export default ({ children, title, imageAlt, image, comp }: Lume.Data) => (
	<div className="flex flex-col md:flex-row gap-8 max-w-screen-lg m-auto py-8 px-4 sm:px-4">
		<p>Single Post</p>
	</div>
);
