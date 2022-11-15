'use strict';
const common = require("../common");
const http = require("http");
const server = http.createServer(common.mustNotCall());
server.listen(0, common.mustCall(() => {
  const t = http.request({
    method : "GET",
    host : "127.0.0.1",
    port : server.address().port
  });
  t.on("abort", common.mustCall(() => {
    server.close();
  }));
  t.on("error", common.mustNotCall());
  t.abort();
  t.end();
}));

