const path = require("path");

const http = require("http");

const server = http.createServer(async (t, n) => {
  const e = async e => {
    const r = require(`./${path.join(".next/serverless/pages/", e)}`);

    try {
      return await (r.render || r.default || r)(t, n);
    } catch (e) {
      n.statusCode = 500;return n.end("internal error");
    }
  };

  try {
    await e("/[[...slug]].js");
  } catch (e) {
    console.error("failed to render", e);n.statusCode = 500;n.end("Internal Error");
  }
});
const port = process.env.PORT || 3e3;
server.listen(port, () => {
  console.log("ready on", port);
});