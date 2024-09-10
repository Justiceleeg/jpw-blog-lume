export type NavLink = { name: string; path: string };
export type NavMain = { main: NavLink[] };

export const main: NavLink[] = [
	{ name: "about", path: "/about" },
	// { name: "projects", path: "/projects" },
	{ name: "yoga", path: "/yoga" },
	{ name: "blog", path: "/posts" },
];

// export const posts: NavLink[] = [
// 	{ name: "about", path: "/about" },
// 	{ name: "about", path: "/about" },
// ];

export type NavData = {
	navigation: NavMain;
	// posts: NavLink[]
};
