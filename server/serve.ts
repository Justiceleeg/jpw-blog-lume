import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

app.use(
	"/*",
	serveStatic({
		root: "./_site",
	}),
);

export default app;
