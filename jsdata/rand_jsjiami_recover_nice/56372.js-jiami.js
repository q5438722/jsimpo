'use strict';
const {
  mustCall : mustCall
} = require("../common");
const assert = require("assert");
const http = require("http");
const net = require("net");
net["createServer"](mustCall(function(options) {
  options["write"](_0x2000c9["UjtPF"] + "Connection: upgrade\r\n" + _0x2000c9["lpUbV"] + _0x2000c9["PaeNP"] + "\r\n" + "\u0080", _0x2000c9["ewtMW"]);
  this["close"]();
}))["listen"](0, mustCall(function() {
  http["get"]({
    "host" : this["address"]()["host"],
    "port" : this["address"]()["port"],
    "headers" : {
      "Connection" : _0x22ba6c["FPJvJ"],
      "Upgrade" : _0x22ba6c["dCUsK"]
    }
  })["on"](_0x22ba6c["FPJvJ"], mustCall((canCreateDiscussions, PL$22, shapePathsCollection) => {
    assert["strictEqual"](shapePathsCollection["length"], 1);
    assert["strictEqual"](shapePathsCollection[0], 128);
    PL$22["destroy"]();
  }));
}));

