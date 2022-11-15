'use strict';
const common = require("../common");
const fixtures = require("../common/fixtures");
if (!common["hasCrypto"]) {
  common["skip"]("missing crypto");
}
const h2 = require("http2");
const tls = require("tls");
const server = h2["createSecureServer"]({
  "key" : fixtures["readKey"]("rsa_private.pem"),
  "cert" : fixtures["readKey"]("rsa_cert.crt"),
  "unknownProtocolTimeout" : 500,
  "allowHalfOpen" : !![]
});
server["on"]("connection", (p) => {
  var info = {};
  p["on"](info["QbcXe"], common["mustCall"](() => {
    server["close"]();
  }));
});
server["listen"](0, function() {
  var _0x1a1040 = {};
  tls["connect"]({
    "port" : server["address"]()["port"],
    "rejectUnauthorized" : ![],
    "ALPNProtocols" : [_0x1a1040["uojrX"]]
  });
});

