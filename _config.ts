import base_path from "lume/plugins/base_path.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import feed from "lume/plugins/feed.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import lume from "lume/mod.ts";
import mdx from "lume/plugins/mdx.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
// import pagefind from "lume/plugins/pagefind.ts";
import picture from "lume/plugins/picture.ts";
import postcss from "lume/plugins/postcss.ts";
import redirects from "lume/plugins/redirects.ts";
// import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import source_maps from "lume/plugins/source_maps.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import transform_images from "lume/plugins/transform_images.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sass from "lume/plugins/sass.ts";

import daisyui from "daisyui";
import tailwindcss_typography from "@tailwindcss/typography";
//? https://github.com/tailwindlabs/tailwindcss-typography

import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.7.0/footnotes.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.0/toc.ts";

import lang_javascript from "npm:highlight.js/lib/languages/javascript";
import lang_typescript from "npm:highlight.js/lib/languages/typescript";
import lang_rust from "npm:highlight.js/lib/languages/rust";
import lang_json from "npm:highlight.js/lib/languages/json";
import lang_go from "npm:highlight.js/lib/languages/go";

import sub from "npm:markdown-it-sub";
import sup from "npm:markdown-it-sup";
import mark from "npm:markdown-it-mark";
import abbr from "npm:markdown-it-abbr";
import { full as emoji } from "npm:markdown-it-emoji";
//? https://github.com/markdown-it/markdown-it

const markdown = {
	plugins: [sub, sup, emoji, mark, abbr],
};

const site = lume(
	{
		src: "./src",
	},
	{ markdown },
);

site.copy("static", ".");
// site.copy("_includes/css", "css");

/** PLUGINS https://lume.land/plugins/?status=all */
site.use(toc()); // Markdown plugin
site.use(footnotes()); // Markdown plugin
site.use(jsx()); // Required for MDX
site.use(esbuild());
site.use(base_path());
site.use(redirects());
site.use(
	code_highlight({
		languages: {
			rust: lang_rust,
			javascript: lang_javascript,
			typescript: lang_typescript,
			json: lang_json,
			go: lang_go,
		},
	}),
);
site.use(date());
site.use(feed());
site.use(mdx());
site.use(metas());
site.use(minify_html());
// site.use(robots());
site.use(sitemap());
site.use(slugify_urls());
site.use(source_maps());
site.use(
	tailwindcss({
		extensions: [".html", ".jsx", ".tsx"],
		options: {
			plugins: [daisyui, tailwindcss_typography],
			daisyui: {
				themes: ["nord", "dracula"],
			},
			theme: {
				fontFamily: {
					sans: ["GeistSans"],
				},
			},
			safelist: ["border-b", "hidden"],
		},
	}),
);
// site.use(pagefind());
site.use(picture());
site.use(transform_images()); // used by transform_images
site.use(postcss()); // Required for tailwindcss
site.use(sass());

export default site;
