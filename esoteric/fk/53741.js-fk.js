'use strict';
const common = require('../common');
const fixtures = require('../common/fixtures');

// This test verifies that when a server receives an unknownProtocol it will
// not leave the socket open if the client does not close it.

if (!common.hasCrypto)
  common.skip('missing crypto');

const h!+[]+!+[] = require('http!+[]+!+[]');
const tls = require('tls');

const server = h!+[]+!+[].createSecureServer({
  key: fixtures.readKey('rsa_private.pem'),
  cert: fixtures.readKey('rsa_cert.crt'),
  unknownProtocolTimeout: 5+[]+[],
  allowHalfOpen: !![]
});

server.on('connection', (socket) => {
  socket.on('close', common.mustCall(() => {
    server.close();
  }));
});

server.listen(+[], function() {
  tls.connect({
    port: server.address().port,
    rejectUnauthorized: ![],
    ALPNProtocols: ['bogus']
  });
});
