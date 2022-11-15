'use strict';
MongoInternals[_0x4324ae(179)] = function(summary, url) {
  var sortCalEvents = this;
  sortCalEvents["mongo"] = new MongoConnection(summary, url);
}, _[_0x4324ae(180)](MongoInternals["RemoteCollectionDriver"][_0x4324ae(181)], {
  "open" : function(context) {
    var now = _0x4324ae;
    var rpm_traffic = {
      "jDbgo" : now(182),
      "COgSB" : now(183),
      "wEvNu" : now(184),
      "dTFkx" : now(185),
      "ZWyTa" : now(186),
      "TRRYj" : now(187),
      "NzkBH" : now(188),
      "QLKnJ" : now(189),
      "IFAmN" : now(190),
      "avnPs" : now(191)
    };
    var $ = this;
    var deps = {};
    return _[now(192)]([rpm_traffic[now(193)], now(194), rpm_traffic[now(195)], rpm_traffic[now(196)], rpm_traffic[now(197)], rpm_traffic[now(198)], rpm_traffic["TRRYj"], rpm_traffic["NzkBH"], rpm_traffic[now(199)], rpm_traffic["IFAmN"], rpm_traffic[now(200)]], function(name) {
      var then = now;
      deps[name] = _["bind"]($[then(201)][name], $["mongo"], context);
    }), deps;
  }
}), MongoInternals[_0x4324ae(202)] = _[_0x4324ae(203)](function() {
  var now = _0x4324ae;
  var rpm_traffic = {
    "KcmBx" : "3|1|4|0|2"
  };
  var callbackVals = rpm_traffic[now(204)]["split"]("|");
  var callbackCount = 1 * -8804 + 62 * 1 + 8742;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        if (!_0xd1f4b0) {
          throw new Error(now(205));
        }
        continue;
      case "1":
        var _0xd1f4b0 = process["env"][now(206)];
        continue;
      case "2":
        return new (MongoInternals[now(179)])(_0xd1f4b0, rpm_traffic);
      case "3":
        var rpm_traffic = {};
        continue;
      case "4":
        if (process[now(207)][now(208)]) {
          rpm_traffic[now(209)] = process["env"][now(208)];
        }
        continue;
    }
    break;
  }
});

