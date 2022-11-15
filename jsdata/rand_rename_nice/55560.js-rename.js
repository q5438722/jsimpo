'use strict';
const common = require("../common");
if (!common.hasCrypto) {
  common.skip("missing crypto");
}
const assert = require("assert");
const tls = require("tls");
const fixtures = require("../common/fixtures");
const options = {
  key : fixtures.readKey("agent2-key.pem"),
  cert : fixtures.readKey("agent2-cert.pem")
};
const messageUtf8 = "x\u221aab c";
const messageAscii = "xb\b\u001aab c";
const server = tls.Server(options, common.mustCall(function(u) {
  console.log("server: on secureConnection", u.getProtocol());
  u.end(messageUtf8);
}));
server.listen(0, function() {
  const socket = tls.connect({
    port : this.address().port,
    rejectUnauthorized : false
  });
  let result = "";
  socket.setEncoding("ascii");
  socket.on("data", function(e) {
    console.log("client: on data", e);
    assert.ok(typeof e === "string");
    result = result + e;
  });
  socket.on("secureConnect", common.mustCall(() => {
    console.log("client: on secureConnect");
  }));
  socket.on("close", common.mustCall(function() {
    console.log("client: on close");
    assert.strictEqual(socket.readyState, "closed");
    assert.notStrictEqual(messageUtf8, result);
    assert.strictEqual(messageAscii, result);
    server.close();
  }));
});

