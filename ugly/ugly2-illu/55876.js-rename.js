"use strict";

const common = require("../common");

const assert = require("assert");

const dgram = require("dgram");

const message_to_send = "A message to send";
const server = dgram.createSocket("udp4");
server.on("message", common.mustCall((s, e) => {
  assert.strictEqual(e.address, common.localhostIPv4);assert.strictEqual(s.toString(), message_to_send.toString());server.send(s, 0, s.length, e.port, e.address);
}));server.on("listening", common.mustCall(() => {
  const t = dgram.createSocket("udp4");
  const o = server.address().port;
  t.on("message", common.mustCall((s, e) => {
    assert.strictEqual(e.address, common.localhostIPv4);assert.strictEqual(e.port, o);assert.strictEqual(s.toString(), message_to_send.toString());t.close();server.close();
  }));t.send(message_to_send, 0, 17, o, "localhost");t.on("close", common.mustCall());
}));server.on("close", common.mustCall());server.bind(0);