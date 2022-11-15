"use strict";

const common = require("../common");

if (!common.hasCrypto) common.skip("missing crypto");
const assert = require("assert");

const tls = require("tls");

const fixtures = require("../common/fixtures");

const options = { key: fixtures.readKey("rsa_private.pem"), cert: fixtures.readKey("rsa_cert.crt") };
const server = tls.createServer(options, function (o) {
  o.pipe(o);o.on("end", () => o.end());
}).listen(0, common.mustCall(function () {
  console.log("connect unauthorized");var o = tls.connect({ port: server.address().port, servername: "localhost", rejectUnauthorized: false }, common.mustCall(function () {
    var e;
    assert(!o.authorized);o.on("data", common.mustCall(o => {
      assert.strictEqual(o.toString(), "ok");e = o;
    }));o.on("end", common.mustCall(() => {
      assert(e, "data failed to echo!");
    }));o.on("end", () => rejectUnauthorized());
  }));
  o.once("session", common.mustCall(() => {}));o.on("error", common.mustNotCall());o.end("ok");
}));
function unauthorized() {
  console.log("connect unauthorized");const o = tls.connect({ port: server.address().port, servername: "localhost", rejectUnauthorized: false }, common.mustCall(function () {
    var e;
    assert(!o.authorized);o.on("data", common.mustCall(o => {
      assert.strictEqual(o.toString(), "ok");e = o;
    }));o.on("end", common.mustCall(() => {
      assert(e, "data failed to echo!");
    }));o.on("end", () => rejectUnauthorized());
  }));
  o.once("session", common.mustCall(() => {}));o.on("error", common.mustNotCall());o.end("ok");
}function rejectUnauthorized() {
  console.log("reject unauthorized");const o = tls.connect(server.address().port, { servername: "localhost" }, common.mustNotCall());
  o.on("data", common.mustNotCall());o.on("error", common.mustCall(function (o) {
    console.log("reject unauthorized undefined");const o = tls.connect(server.address().port, { servername: "localhost", rejectUnauthorized: undefined }, common.mustNotCall());
    o.on("data", common.mustNotCall());o.on("error", common.mustCall(function (o) {
      console.log("connect authorized");const o = tls.connect(server.address().port, { ca: [fixtures.readKey("rsa_cert.crt")], servername: "localhost" }, common.mustCall(function () {
        console.log("... authorized");assert(o.authorized);o.on("data", common.mustCall(o => {
          assert.strictEqual(o.toString(), "ok");
        }));o.on("end", () => server.close());
      }));
      o.on("error", common.mustNotCall());o.end("ok");
    }));o.end("ng");
  }));o.end("ng");
}function rejectUnauthorizedUndefined() {
  console.log("reject unauthorized undefined");const o = tls.connect(server.address().port, { servername: "localhost", rejectUnauthorized: undefined }, common.mustNotCall());
  o.on("data", common.mustNotCall());o.on("error", common.mustCall(function (o) {
    console.log("connect authorized");const o = tls.connect(server.address().port, { ca: [fixtures.readKey("rsa_cert.crt")], servername: "localhost" }, common.mustCall(function () {
      console.log("... authorized");assert(o.authorized);o.on("data", common.mustCall(o => {
        assert.strictEqual(o.toString(), "ok");
      }));o.on("end", () => server.close());
    }));
    o.on("error", common.mustNotCall());o.end("ok");
  }));o.end("ng");
}function authorized() {
  console.log("connect authorized");const o = tls.connect(server.address().port, { ca: [fixtures.readKey("rsa_cert.crt")], servername: "localhost" }, common.mustCall(function () {
    console.log("... authorized");assert(o.authorized);o.on("data", common.mustCall(o => {
      assert.strictEqual(o.toString(), "ok");
    }));o.on("end", () => server.close());
  }));
  o.on("error", common.mustNotCall());o.end("ok");
}
