'use strict';
MongoInternals["RemoteCollectionDriver"] = function(summary, url) {
  var sortCalEvents = this;
  sortCalEvents["mongo"] = new MongoConnection(summary, url);
};
_["extend"](MongoInternals["RemoteCollectionDriver"]["prototype"], {
  "open" : function(context) {
    var _0x31c9ce = {};
    var $ = this;
    var result = {};
    _["each"]([_0x31c9ce["QsPph"], "findOne", "insert", _0x31c9ce["iGsck"], _0x31c9ce["PXnVr"], _0x31c9ce["lcSZI"], _0x31c9ce["HkFYQ"], "_dropIndex", _0x31c9ce["QZVwT"], _0x31c9ce["UsJZX"], _0x31c9ce["fzlZD"]], function(name) {
      result[name] = _["bind"]($["mongo"][name], $["mongo"], context);
    });
    return result;
  }
});
MongoInternals["defaultRemoteCollectionDriver"] = _["once"](function() {
  var ret = {};
  var callbackVals = ret["roXdy"]["split"]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        if (!_0x49582d) {
          throw new Error(ret["meexY"]);
        }
        continue;
      case "1":
        var _0xb2ced5 = {};
        continue;
      case "2":
        var _0x49582d = process["env"]["MONGO_URL"];
        continue;
      case "3":
        if (process["env"]["MONGO_OPLOG_URL"]) {
          _0xb2ced5["oplogUrl"] = process["env"]["MONGO_OPLOG_URL"];
        }
        continue;
      case "4":
        return new MongoInternals["RemoteCollectionDriver"](_0x49582d, _0xb2ced5);
    }
    break;
  }
});

