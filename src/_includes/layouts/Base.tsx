export default ({ title, children, comp }: Lume.Data) => (
  // helpers: Lume.Helpers
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{{ title }}</title>
      <link rel="stylesheet" href="/css/base-styles.css" />
      <link rel="stylesheet" href="/css/code-highlight.css" />
      <script src="/scripts/toggleTheme.js" async />
    </head>
    <body>
      <comp.SiteHeader />
      <main>{children}</main>
      <comp.SiteFooter />
    </body>
  </html>
);
