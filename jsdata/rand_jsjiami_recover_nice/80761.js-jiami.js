'use strict';
var request = require("supertest");
var app = require("../../examples/ejs");
describe("ejs", function() {
  describe(_0x239425["PocbT"], function() {
    it(_0x239425["qxFVh"], function(mmCoreSplitViewBlock) {
      request(app)["get"]("/")["expect"]("Content-Type", _0x239425["GuJUH"])["expect"](/<li>tobi &lt;tobi@learnboost\.com&gt;<\/li>/)["expect"](/<li>loki &lt;loki@learnboost\.com&gt;<\/li>/)["expect"](/<li>jane &lt;jane@learnboost\.com&gt;<\/li>/)["expect"](200, mmCoreSplitViewBlock);
    });
  });
});

