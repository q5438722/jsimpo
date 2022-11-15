'use strict';
const path = require("path");
const http = require("http");
const server = http.createServer(async(err, n) => {
  const e = async(n) => {
    const options = require(`./${path.join(".next/serverless/pages/", n)}`);
    try {
      return await (options.render || options.default || options)(err, n);
    } catch (e) {
      n.statusCode = 500;
      return n.end("internal error");
    }
  };
  try {
    await e("/[[...slug]].js");
  } catch (e) {
    console.error("failed to render", e);
    n.statusCode = 500;
    n.end("Internal Error");
  }
});
const port = process.env.PORT || 3e3;
server.listen(port, () => {
  console.log("ready on", port);
});

