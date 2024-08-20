export const title = "Welcome to my page";

export default ({ navigation }: Lume.Data, helpers: Lume.Helpers) => (
	<header>
		<div>
			<a href="/" title="Home" class="">
				LOGO
			</a>
			<div>
				{/* TODO: theme switch goes here */}
				<nav>
					<ul className="">
						{navigation.main.map((nav) => (
							<li key={nav.name}>
								<a
									class="nav-link"
									href="{{ nav.path }}"
									data-selected-page="{{ nav.path |> isActive(url, nav.path) }}"
								>
									{nav.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	</header>
);
