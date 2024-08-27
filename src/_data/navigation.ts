export type NavLink = { name: string; path: string };
export type NavMain = { main: NavLink[] };

export const main: NavLink[] = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/posts" },
];

export const posts: NavLink[] = [
  { name: "About", path: "/about" },
  { name: "About", path: "/about" },
];

export type NavData = { navigation: NavMain; posts: NavLink[] };
