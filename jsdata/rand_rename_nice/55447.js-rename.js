'use strict';
const common = require("../common");
const fixtures = require("../common/fixtures");
if (!common.hasCrypto) {
  common.skip("missing crypto");
}
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
common.expectWarning("Warning", "Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' " + "makes TLS connections and HTTPS requests insecure by disabling " + "certificate verification.");
const assert = require("assert");
const https = require("https");
function read(db) {
  return fixtures.readKey(db);
}
const key1 = read("agent1-key.pem");
const cert1 = read("agent1-cert.pem");
const key2 = read("agent2-key.pem");
const cert2 = read("agent2-cert.pem");
const key3 = read("agent3-key.pem");
const cert3 = read("agent3-cert.pem");
const ca1 = read("ca1-cert.pem");
const ca2 = read("ca2-cert.pem");
const agent0 = new https.Agent;
const agent1 = new https.Agent({
  ca : [ca1]
});
const agent2 = new https.Agent({
  ca : [ca2]
});
const agent3 = new https.Agent({
  ca : [ca1, ca2]
});
const options1 = {
  key : key1,
  cert : cert1
};
const options2 = {
  key : key2,
  cert : cert2
};
const options3 = {
  key : key3,
  cert : cert3
};
const server1 = server(options1);
const server2 = server(options2);
const server3 = server(options3);
let listenWait = 0;
server1.listen(0, listening());
server2.listen(0, listening());
server3.listen(0, listening());
const responseErrors = {};
let pending = 0;
function server(options) {
  const server = https.createServer(options, handler);
  server.requests = [];
  server.expectCount = 0;
  return server;
}
function handler(d, t) {
  this.requests.push(d.url);
  t.statusCode = 200;
  t.setHeader("foo", "bar");
  t.end("hello, world\n");
}
function listening() {
  listenWait++;
  return () => {
    listenWait--;
    if (listenWait === 0) {
      allListening();
    }
  };
}
function makeReq(path, port, error, host, ca) {
  pending++;
  const options = {
    port : port,
    path : path,
    ca : ca
  };
  if (!ca) {
    options.agent = agent0;
  } else {
    if (!Array.isArray(ca)) {
      ca = [ca];
    }
    if (ca.includes(ca1) && ca.includes(ca2)) {
      options.agent = agent3;
    } else {
      if (ca.includes(ca1)) {
        options.agent = agent1;
      } else {
        if (ca.includes(ca2)) {
          options.agent = agent2;
        } else {
          options.agent = agent0;
        }
      }
    }
  }
  if (host) {
    options.headers = {
      host : host
    };
  }
  const newReponses = https.get(options);
  const s = port === server1.address().port ? server1 : port === server2.address().port ? server2 : port === server3.address().port ? server3 : null;
  if (!s) {
    throw new Error(`invalid port: ${port}`);
  }
  s.expectCount++;
  newReponses.on("response", common.mustCall((response) => {
    assert.strictEqual(response.connection.authorizationError, error);
    responseErrors[path] = response.connection.authorizationError;
    pending--;
    if (pending === 0) {
      server1.close();
      server2.close();
      server3.close();
    }
    response.resume();
  }));
}
function allListening() {
  const sendPort = server1.address().port;
  const path = server2.address().port;
  const next = server3.address().port;
  makeReq("/inv1", sendPort, "UNABLE_TO_VERIFY_LEAF_SIGNATURE");
  makeReq("/inv1-ca1", sendPort, "ERR_TLS_CERT_ALTNAME_INVALID", null, ca1);
  makeReq("/inv1-ca1ca2", sendPort, "ERR_TLS_CERT_ALTNAME_INVALID", null, [ca1, ca2]);
  makeReq("/val1-ca1", sendPort, null, "agent1", ca1);
  makeReq("/val1-ca1ca2", sendPort, null, "agent1", [ca1, ca2]);
  makeReq("/inv1-ca2", sendPort, "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "agent1", ca2);
  makeReq("/inv2", path, "DEPTH_ZERO_SELF_SIGNED_CERT");
  makeReq("/inv2-ca1", path, "DEPTH_ZERO_SELF_SIGNED_CERT", "agent2", ca1);
  makeReq("/inv2-ca1ca2", path, "DEPTH_ZERO_SELF_SIGNED_CERT", "agent2", [ca1, ca2]);
  makeReq("/inv3", next, "UNABLE_TO_VERIFY_LEAF_SIGNATURE");
  makeReq("/inv3-ca2", next, "ERR_TLS_CERT_ALTNAME_INVALID", null, ca2);
  makeReq("/inv3-ca1ca2", next, "ERR_TLS_CERT_ALTNAME_INVALID", null, [ca1, ca2]);
  makeReq("/val3-ca2", next, null, "agent3", ca2);
  makeReq("/val3-ca1ca2", next, null, "agent3", [ca1, ca2]);
  makeReq("/inv3-ca1", next, "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "agent1", ca1);
}
process.on("exit", () => {
  assert.strictEqual(server1.requests.length, server1.expectCount);
  assert.strictEqual(server2.requests.length, server2.expectCount);
  assert.strictEqual(server3.requests.length, server3.expectCount);
});

