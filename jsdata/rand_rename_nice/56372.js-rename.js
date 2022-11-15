'use strict';
const {
  mustCall : mustCall
} = require("../common");
const assert = require("assert");
const http = require("http");
const net = require("net");
net.createServer(mustCall(function(sub) {
  sub.write("HTTP/1.1 101 Switching Protocols\r\n" + "Connection: upgrade\r\n" + "Transfer-Encoding: chunked\r\n" + "Upgrade: websocket\r\n" + "\r\n" + "\u0080", "latin1");
  this.close();
})).listen(0, mustCall(function() {
  http.get({
    host : this.address().host,
    port : this.address().port,
    headers : {
      Connection : "upgrade",
      Upgrade : "websocket"
    }
  }).on("upgrade", mustCall((canCreateDiscussions, FeedsService, r) => {
    assert.strictEqual(r.length, 1);
    assert.strictEqual(r[0], 128);
    FeedsService.destroy();
  }));
}));

