export default ({ comp }: Lume.Data) => (
	<div className="border-base-300 border-t text-lg bg-base-200">
		<div className="max-w-screen-lg m-auto">
			<footer className="footer text-base-content items-center p-4">
				<aside className="grid-flow-col items-center">
					<p>© {new Date().getFullYear()}, justice p. white</p>
				</aside>
				<nav className="flex flex-row gap-4 md:place-self-center md:justify-self-end">
					<comp.SocialList />
				</nav>
			</footer>
		</div>
	</div>
);
