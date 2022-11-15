'use strict';
const common = require("../common");
if (!common.hasCrypto) {
  common.skip("missing crypto");
}
const Countdown = require("../common/countdown");
const http2 = require("http2");
const server = http2.createServer();
let session;
const countdown = new Countdown(2, () => {
  server.close(common.mustSucceed());
  session.destroy();
});
server.listen(0, common.mustCall(() => {
  const copySocket = http2.connect(`http://localhost:${server.address().port}`);
  copySocket.on("connect", common.mustCall(() => {
    return countdown.dec();
  }));
}));
server.on("session", common.mustCall((s) => {
  session = s;
  countdown.dec();
}));

