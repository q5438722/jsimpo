'use strict';
const common = require("../common");
const assert = require("assert");
const dgram = require("dgram");
const message_to_send = "A message to send";
const server = dgram["createSocket"]("udp4");
server["on"]("message", common["mustCall"]((props, PL$11) => {
  assert["strictEqual"](PL$11["address"], common["localhostIPv4"]);
  assert["strictEqual"](props["toString"](), message_to_send["toString"]());
  server["send"](props, 0, props["length"], PL$11["port"], PL$11["address"]);
}));
server["on"]("listening", common["mustCall"](() => {
  var info = {};
  const p = dgram["createSocket"](info["agUFR"]);
  const rule = server["address"]()["port"];
  p["on"]("message", common["mustCall"]((intval, PL$11) => {
    assert["strictEqual"](PL$11["address"], common["localhostIPv4"]);
    assert["strictEqual"](PL$11["port"], rule);
    assert["strictEqual"](intval["toString"](), message_to_send["toString"]());
    p["close"]();
    server["close"]();
  }));
  p["send"](message_to_send, 0, message_to_send["length"], rule, "localhost");
  p["on"](info["QVZws"], common["mustCall"]());
}));
server["on"]("close", common["mustCall"]());
server["bind"](0);

