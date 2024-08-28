import { Hono } from "hono";
import { serveStatic } from "hono/deno";
// import _daisyui from "daisyui";

const app = new Hono();

app.use(
  "/*",
  serveStatic({
    root: "./_site",
  })
);

export default app;
