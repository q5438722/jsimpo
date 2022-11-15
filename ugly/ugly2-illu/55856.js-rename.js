"use strict";

const common = require("../common");

const assert = require("assert");

const http = require("http");

const bufferSize = 5242880;
var measuredSize = 0;
const buffer = Buffer.allocUnsafe(bufferSize);
// Unevaluable loop test expression
for (let e = 0; e < buffer.length; e++) {
  buffer[e] = e % 256;
}const server = http.Server(function (e, t) {
  server.close();var r = 0;
  e.on("data", t => {
    measuredSize += t.length;for (let e = 0; e < t.length; e++) {
      assert.strictEqual(t[e], buffer[r]);r++;
    }
  });e.on("end", common.mustCall(() => {
    assert.strictEqual(measuredSize, bufferSize);t.writeHead(200);t.write("thanks");t.end();
  }));
});
server.listen(0, common.mustCall(() => {
  const e = http.request({ port: server.address().port, method: "POST", path: "/", headers: { "content-length": buffer.length } }, common.mustCall(e => {
    e.setEncoding("utf8");var t = "";
    e.on("data", e => t += e);e.on("end", common.mustCall(() => {
      assert.strictEqual(t, "thanks");
    }));
  }));
  e.end(buffer);
}));
