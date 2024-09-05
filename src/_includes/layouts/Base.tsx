export default ({ docTitle, title, children, comp }: Lume.Data) => (
	// helpers: Lume.Helpers
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>{docTitle ? docTitle : title}</title>
			<link rel="icon" href="favicon.svg" />
			<link rel="stylesheet" href="/css/base-styles.css" />
			<link rel="stylesheet" href="/css/code-highlight.css" />
			<link rel="stylesheet" href="/css/font-styles.css" />
			<script src="/scripts/toggleTheme.js" async />
			<script src="/scripts/scrollEvents.js" async />
		</head>
		<body>
			<comp.SiteHeader />
			<main>
				<div className="max-w-screen-lg m-auto p-4">{children}</div>
			</main>
			<comp.SiteFooter />
		</body>
	</html>
);
