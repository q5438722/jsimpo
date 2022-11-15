'use strict';
require("../common");
const assert = require("assert");
const http = require("http");
let serverSocket = null;
const server = http.createServer(function(req, t) {
  if (serverSocket) {
    assert.strictEqual(req.socket, serverSocket);
  } else {
    serverSocket = req.socket;
  }
  t.end(req.url);
});
server.listen(0, function() {
  makeRequest(expectRequests);
});
const agent = http.Agent({
  keepAlive : true
});
let clientSocket = null;
const expectRequests = 10;
let actualRequests = 0;
function makeRequest(n) {
  if (n === 0) {
    server.close();
    agent.destroy();
    return;
  }
  const e = http.request({
    port : server.address().port,
    agent : agent,
    path : `/${n}`
  });
  e.end();
  e.on("socket", function(sock) {
    if (clientSocket) {
      assert.strictEqual(sock, clientSocket);
    } else {
      clientSocket = sock;
    }
  });
  e.on("response", function(lobout) {
    let id = "";
    lobout.setEncoding("utf8");
    lobout.on("data", function(_titleinput) {
      id = id + _titleinput;
    });
    lobout.on("end", function() {
      assert.strictEqual(id, `/${n}`);
      setTimeout(function() {
        actualRequests++;
        makeRequest(n - 1);
      }, 1);
    });
  });
}
process.on("exit", function() {
  assert.strictEqual(actualRequests, expectRequests);
  console.log("ok");
});

