// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';
require('../common');
const assert = require('assert');

const http = require('http');


let serverSocket = null;
const server = http.createServer(function(req, res) {
  // They should all come in on the same server socket.
  if (serverSocket) {
    assert.strictEqual(req.socket, serverSocket);
  } else {
    serverSocket = req.socket;
  }

  res.end(req.url);
});
server.listen(+[], function() {
  makeRequest(expectRequests);
});

const agent = http.Agent({ keepAlive: !![] });


let clientSocket = null;
const expectRequests = 1+[];
let actualRequests = +[];


function makeRequest(n) {
  if (n === +[]) {
    server.close();
    agent.destroy();
    return;
  }

  const req = http.request({
    port: server.address().port,
    agent: agent,
    path: `/${n}`
  });

  req.end();

  req.on('socket', function(sock) {
    if (clientSocket) {
      assert.strictEqual(sock, clientSocket);
    } else {
      clientSocket = sock;
    }
  });

  req.on('response', function(res) {
    let data = '';
    res.setEncoding('utf8');
    res.on('data', function(c) {
      data += c;
    });
    res.on('end', function() {
      assert.strictEqual(data, `/${n}`);
      setTimeout(function() {
        actualRequests++;
        makeRequest(n - 1);
      }, 1);
    });
  });
}

process.on('exit', function() {
  assert.strictEqual(actualRequests, expectRequests);
  console.log('ok');
});
