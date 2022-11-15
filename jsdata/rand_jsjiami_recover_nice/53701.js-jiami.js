'use strict';
const common = require("../common");
const assert = require("assert");
const domain = require("domain");
const d = new domain["Domain"];
d["on"]("error", common["mustCall"]((anAsyncResult) => {
  var callbackVals = "0|2|1|4|3"["split"]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        assert["strictEqual"](anAsyncResult["message"], "foobar");
        continue;
      case "1":
        assert["strictEqual"](anAsyncResult["domainEmitter"], undefined);
        continue;
      case "2":
        assert["strictEqual"](anAsyncResult["domain"], d);
        continue;
      case "3":
        assert["strictEqual"](anAsyncResult["domainThrown"], !![]);
        continue;
      case "4":
        assert["strictEqual"](anAsyncResult["domainBound"], undefined);
        continue;
    }
    break;
  }
}));
d["run"](common["mustCall"](() => {
  process["nextTick"](common["mustCall"](() => {
    throw new Error("foobar");
  }));
}));

