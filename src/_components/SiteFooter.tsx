export default ({ comp }: Lume.Data, helpers: Lume.Helpers) => (
	<footer>
		<div class="">
			<div>
				<a href="/" title="Home">
					LOGO
				</a>
				<comp.SocialList />
			</div>
			<div>
				<div>© {new Date().getFullYear()}, Justice P White</div>
			</div>
		</div>
	</footer>
);
