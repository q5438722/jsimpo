'use strict';
const common = require("../common");
const assert = require("assert");
const dgram = require("dgram");
const message_to_send = "A message to send";
const server = dgram.createSocket("udp4");
server.on("message", common.mustCall((message, rinfo) => {
  assert.strictEqual(rinfo.address, common.localhostIPv4);
  assert.strictEqual(message.toString(), message_to_send.toString());
  server.send(message, 0, message.length, rinfo.port, rinfo.address);
}));
server.on("listening", common.mustCall(() => {
  const client = dgram.createSocket("udp4");
  const uExpected = server.address().port;
  client.on("message", common.mustCall((s, e) => {
    assert.strictEqual(e.address, common.localhostIPv4);
    assert.strictEqual(e.port, uExpected);
    assert.strictEqual(s.toString(), message_to_send.toString());
    client.close();
    server.close();
  }));
  client.send(message_to_send, 0, message_to_send.length, uExpected, "localhost");
  client.on("close", common.mustCall());
}));
server.on("close", common.mustCall());
server.bind(0);

