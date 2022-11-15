'use strict';
const common = require("../common");
const http = require("http");
const server = http["createServer"](common["mustNotCall"]());
server["listen"](0, common["mustCall"](() => {
  var args = {};
  const obj = http["request"]({
    "method" : args["TTVxi"],
    "host" : args["fFVwB"],
    "port" : server["address"]()["port"]
  });
  obj["on"](args["zlHIZ"], common["mustCall"](() => {
    server["close"]();
  }));
  obj["on"](args["eWILA"], common["mustNotCall"]());
  obj["abort"]();
  obj["end"]();
}));

