import type { NavData } from "../_data/navigation.ts";

export const title = "Welcome to my page";

export default ({ navigation, comp }: Lume.Data & NavData) => (
	// nav-bg backdrop-blur
	<div
		id="nav-bar"
		className="transition-nav-border border-base-300 w-full sticky top-0 bg-base-100 z-10"
	>
		<header>
			<div className="max-w-screen-lg m-auto">
				<div className="navbar font-normal">
					<div className="navbar-start gap-4">
						<a
							href="/"
							title="Home"
							className="btn btn-ghost btn-circle text-lg"
						>
							<comp.Logo />
						</a>
						<div className="text-2xl">justice p. white</div>
					</div>
					<div className="navbar-end">
						<comp.ThemeToggle />
						<nav className="hidden md:flex">
							<ul className="menu menu-horizontal px-1">
								{navigation.main.map((nav) => (
									<li key={nav.name} className="text-lg">
										<a
											// class="nav-link"
											href={nav.path}
											// data-selected-page="{{ nav.path |> isActive(url, nav.path) }}"
										>
											{nav.name}
										</a>
									</li>
								))}
							</ul>
						</nav>
						<div className="dropdown dropdown-end md:hidden">
							<div tabIndex={0} role="button" className="btn btn-ghost">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<title>nav menu</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								// biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
								tabIndex={0}
								className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border-2"
							>
								{navigation.main.map((nav) => (
									<li key={`${nav.name}-ham`}>
										<a
											className="text-lg"
											// class="nav-link"
											href={nav.path}
											// data-selected-page="{{ nav.path |> isActive(url, nav.path) }}"
										>
											{nav.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
);
