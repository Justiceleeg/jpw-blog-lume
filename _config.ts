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

import daisyui from "daisyui";

import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.7.0/footnotes.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.0/toc.ts";

import lang_javascript from "npm:highlight.js/lib/languages/javascript";
import lang_typescript from "npm:highlight.js/lib/languages/typescript";
import lang_rust from "npm:highlight.js/lib/languages/rust";

const site = lume({
  src: "./src",
});

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
    },
  })
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
      plugins: [daisyui],
      daisyui: {
        themes: ["cmyk", "dracula"],
      },
    },
  })
);
// site.use(pagefind());
site.use(picture());
site.use(transform_images()); // used by transform_images
site.use(postcss()); // Required for tailwindcss

export default site;
