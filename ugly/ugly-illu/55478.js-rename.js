"use strict";

const common = require("../common");

if (!common.hasCrypto) common.skip("missing crypto");
const Countdown = require("../common/countdown");

const http2 = require("http2");

const server = http2.createServer();
var session;
const countdown = new Countdown(2, () => {
  server.close(common.mustSucceed());session.destroy();
});
server.listen(0, common.mustCall(() => {
  const o = http2.connect(`http://localhost:${server.address().port}`);
  o.on("connect", common.mustCall(() => countdown.dec()));
}));server.on("session", common.mustCall(o => {
  session = o;countdown.dec();
}));
