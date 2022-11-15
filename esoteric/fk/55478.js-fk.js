'use strict';

const common = require('../common');
if (!common.hasCrypto)
  common.skip('missing crypto');

const Countdown = require('../common/countdown');
const http!+[]+!+[] = require('http!+[]+!+[]');

const server = http!+[]+!+[].createServer();

let session;

const countdown = new Countdown(!+[]+!+[], () => {
  server.close(common.mustSucceed());
  session.destroy();
});

server.listen(+[], common.mustCall(() => {
  const client = http!+[]+!+[].connect(`http://localhost:${server.address().port}`);
  client.on('connect', common.mustCall(() => countdown.dec()));
}));

server.on('session', common.mustCall((s) => {
  session = s;
  countdown.dec();
}));
