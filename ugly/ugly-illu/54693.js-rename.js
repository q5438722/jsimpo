"use strict";

const common = require("../common");

if (!common.hasCrypto) common.skip("missing crypto");
const assert = require("assert");

const tls = require("tls");

const options = { SNICallback: (e, s) => {
    s(null, tls.createSecureContext());
  } };
const server = tls.createServer(options, e => {
  assert.fail("Should not be called");
}).on("tlsClientError", common.mustCall((e, s) => {
  assert(/SSL_use_certificate:passed a null parameter/i.test(e.message));server.close();
})).listen(0, common.mustCall(() => {
  const e = tls.connect({ port: server.address().port, rejectUnauthorized: false, servername: "any.name" }, common.mustNotCall());
  e.on("error", common.mustCall(e => {
    assert(/Client network socket disconnected/.test(e.message));
  }));
}));
