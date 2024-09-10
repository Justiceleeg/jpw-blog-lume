// this file is purely to get the Tailwindcss extension to work
// must be manually synced to _config.ts tailwindcss options

import daisyui from "daisyui";

export default {
	content: ["./src/**/*.{tsx,jsx,js}"],
	safelist: [],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["GeistSans"],
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["nord", "business"],
	},
};
