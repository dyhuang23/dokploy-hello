const http = require("http");
const os = require("os");

const PORT = process.env.PORT || 8080;
const GREETING = process.env.GREETING || "Hello from Dokploy!";
const startedAt = new Date().toISOString();

http
  .createServer((req, res) => {
    if (req.url === "/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ status: "ok" }));
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<!doctype html>
<html><head><title>dokploy-hello</title>
<style>body{font-family:system-ui,sans-serif;max-width:560px;margin:80px auto;padding:0 20px;color:#222}
code{background:#f2f2f2;padding:2px 6px;border-radius:4px}</style></head>
<body>
  <h1>${GREETING}</h1>
  <p>Container: <code>${os.hostname()}</code></p>
  <p>Started: <code>${startedAt}</code></p>
  <p>Version: <code>v2</code></p>
</body></html>`);
  })
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
