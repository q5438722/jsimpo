'use strict';
const common = require("../common");
if (!common["hasCrypto"]) {
  common["skip"]("missing crypto");
}
const assert = require("assert");
const http2 = require("http2");
const errCheck = common["expectsError"]({
  "name" : "Error",
  "code" : "ERR_STREAM_WRITE_AFTER_END",
  "message" : "write after end"
}, 1);
const {
  HTTP2_HEADER_PATH : HTTP2_HEADER_PATH,
  HTTP2_HEADER_METHOD : HTTP2_HEADER_METHOD,
  HTTP2_HEADER_STATUS : HTTP2_HEADER_STATUS,
  HTTP2_METHOD_HEAD : HTTP2_METHOD_HEAD
} = http2["constants"];
const server = http2["createServer"]();
server["on"]("stream", (response, headers) => {
  var incoming = {};
  assert["strictEqual"](headers[HTTP2_HEADER_METHOD], HTTP2_METHOD_HEAD);
  response["respond"]({
    [HTTP2_HEADER_STATUS]:200
  });
  response["on"](incoming["iHOYB"], errCheck);
  response["write"]("data");
});
server["listen"](0, () => {
  var incoming = {};
  const input = http2["connect"]("http://localhost:" + server["address"]()["port"]);
  const response = input["request"]({
    [HTTP2_HEADER_METHOD]:HTTP2_METHOD_HEAD,
    [HTTP2_HEADER_PATH]:"/"
  });
  response["on"]("response", common["mustCall"]((headers, a) => {
    assert["strictEqual"](headers[HTTP2_HEADER_STATUS], 200);
    assert["strictEqual"](a, 5);
  }));
  response["on"](incoming["VKMdX"], common["mustNotCall"]());
  response["on"]("end", common["mustCall"](() => {
    server["close"]();
    input["close"]();
  }));
});

