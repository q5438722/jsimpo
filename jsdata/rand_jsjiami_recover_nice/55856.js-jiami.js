'use strict';
const common = require("../common");
const assert = require("assert");
const http = require("http");
const bufferSize = 5 * 1024 * 1024;
let measuredSize = 0;
const buffer = Buffer["allocUnsafe"](bufferSize);
for (let i = 0; i < buffer["length"]; i++) {
  buffer[i] = i % 256;
}
const server = http["Server"](function(messages, options) {
  server["close"]();
  let bufidx = 0;
  messages["on"]("data", (sections) => {
    var incoming = {
      "laqOw" : _0x21b931["PkDhH"],
      "TqixG" : _0x21b931["vQkcS"]
    };
    measuredSize = measuredSize + sections["length"];
    for (let i = 0; i < sections["length"]; i++) {
      if ("SNVzb" === _0x21b931["ZkUDX"]) {
        assert["strictEqual"](sections[i], buffer[bufidx]);
        bufidx++;
      } else {
        const obj = http["request"]({
          "port" : server["address"]()["port"],
          "method" : _0x21b931["BTxvg"],
          "path" : "/",
          "headers" : {
            "content-length" : buffer["length"]
          }
        }, common["mustCall"]((response) => {
          var _0x288ca2 = {
            "kRysr" : incoming["laqOw"]
          };
          response["setEncoding"](incoming["TqixG"]);
          let expected = "";
          response["on"](incoming["BGmKb"], (stdout) => {
            return expected = expected + stdout;
          });
          response["on"](incoming["nKOVe"], common["mustCall"](() => {
            assert["strictEqual"](expected, _0x288ca2["kRysr"]);
          }));
        }));
        obj["end"](buffer);
      }
    }
  });
  messages["on"](_0x21b931["miXju"], common["mustCall"](() => {
    assert["strictEqual"](measuredSize, bufferSize);
    options["writeHead"](200);
    options["write"](_0x21b931["PkDhH"]);
    options["end"]();
  }));
});
server["listen"](0, common["mustCall"](() => {
  var incoming = {};
  const obj = http["request"]({
    "port" : server["address"]()["port"],
    "method" : "POST",
    "path" : "/",
    "headers" : {
      "content-length" : buffer["length"]
    }
  }, common["mustCall"]((response) => {
    response["setEncoding"](incoming["LCInt"]);
    let expected = "";
    response["on"](incoming["VoYyI"], (stdout) => {
      return expected = expected + stdout;
    });
    response["on"](incoming["agRWI"], common["mustCall"](() => {
      assert["strictEqual"](expected, incoming["YbOAY"]);
    }));
  }));
  obj["end"](buffer);
}));

