"use strict";

const common = require("../common");

if (!common.hasCrypto) common.skip("missing crypto");
const assert = require("assert");

const http2 = require("http2");

const errCheck = common.expectsError({ name: "Error", code: "ERR_STREAM_WRITE_AFTER_END", message: "write after end" }, 1);
var { HTTP2_HEADER_PATH, HTTP2_HEADER_METHOD, HTTP2_HEADER_STATUS, HTTP2_METHOD_HEAD } = http2.constants;
const server = http2.createServer();
server.on("stream", (t, e) => {
  assert.strictEqual(e[HTTP2_HEADER_METHOD], HTTP2_METHOD_HEAD);t.respond({ [HTTP2_HEADER_STATUS]: 200 });t.on("error", errCheck);t.write("data");
});server.listen(0, () => {
  const t = http2.connect(`http://localhost:${server.address().port}`);
  const e = t.request({ [HTTP2_HEADER_METHOD]: HTTP2_METHOD_HEAD, [HTTP2_HEADER_PATH]: "/" });
  e.on("response", common.mustCall((t, e) => {
    assert.strictEqual(t[HTTP2_HEADER_STATUS], 200);assert.strictEqual(e, 5);
  }));e.on("data", common.mustNotCall());e.on("end", common.mustCall(() => {
    server.close();t.close();
  }));
});