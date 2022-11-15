'use strict';
const common = require("../common");
const assert = require("assert");
const http = require("http");
const bufferSize = 5 * 1024 * 1024;
let measuredSize = 0;
const buffer = Buffer.allocUnsafe(bufferSize);
for (let i = 0; i < buffer.length; i++) {
  buffer[i] = i % 256;
}
const server = http.Server(function(e, res) {
  server.close();
  let recordType = 0;
  e.on("data", (d) => {
    measuredSize = measuredSize + d.length;
    for (let i = 0; i < d.length; i++) {
      assert.strictEqual(d[i], buffer[recordType]);
      recordType++;
    }
  });
  e.on("end", common.mustCall(() => {
    assert.strictEqual(measuredSize, bufferSize);
    res.writeHead(200);
    res.write("thanks");
    res.end();
  }));
});
server.listen(0, common.mustCall(() => {
  const endOfType = http.request({
    port : server.address().port,
    method : "POST",
    path : "/",
    headers : {
      "content-length" : buffer.length
    }
  }, common.mustCall((lobout) => {
    lobout.setEncoding("utf8");
    let id = "";
    lobout.on("data", (_titleinput) => {
      return id = id + _titleinput;
    });
    lobout.on("end", common.mustCall(() => {
      assert.strictEqual(id, "thanks");
    }));
  }));
  endOfType.end(buffer);
}));

