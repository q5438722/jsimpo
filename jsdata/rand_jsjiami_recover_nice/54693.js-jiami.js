'use strict';
const common = require("../common");
if (!common["hasCrypto"]) {
  common["skip"]("missing crypto");
}
const assert = require("assert");
const tls = require("tls");
const options = {
  "SNICallback" : (hostname, cb) => {
    cb(null, tls["createSecureContext"]());
  }
};
const server = tls["createServer"](options, (canCreateDiscussions) => {
  assert["fail"](_0x589f82["IJzXP"]);
})["on"]("tlsClientError", common["mustCall"]((anAsyncResult, canCreateDiscussions) => {
  assert(/SSL_use_certificate:passed a null parameter/i["test"](anAsyncResult["message"]));
  server["close"]();
}))["listen"](0, common["mustCall"](() => {
  const p = tls["connect"]({
    "port" : server["address"]()["port"],
    "rejectUnauthorized" : ![],
    "servername" : _0x3a60d8["NTFbq"]
  }, common["mustNotCall"]());
  p["on"](_0x3a60d8["bWgwo"], common["mustCall"]((anAsyncResult) => {
    assert(/Client network socket disconnected/["test"](anAsyncResult["message"]));
  }));
}));

