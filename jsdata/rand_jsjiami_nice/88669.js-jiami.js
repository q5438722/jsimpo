'use strict';
var vip = "vip.v6";
var _0x2f28 = [vip, "ABbCrFRzw7M2", "w43DpMOXw5DCpA==", "CUXCl8K8woI=", "wqDDqTJxOQ==", "w60hBsKCwrvCuj4PEsKP", "w7XDucOyw4TCmw==", "wovCoQnDijA=", "wo3CoQsH", "woXDrRpPBw==", "w5d1w4LCjsK7G8KBb8KB", "FGXCg8OqGw14EMODw4M8w6vCnEhOw4LCqkZnYMOED8KhwoE8OkNAw6wFYwHDhlUZbA==", "w71qanXDhg==", "wo3DrAI=", "w4FoXcOnWMO5w6JyaA==", "w6zCkcOTw6fDmMKbw5FBdGkhwrJbWkM=", "wpDCk0bDhcKow7taLw==", "FGXCg8OqGw1iEsODwqwWw4HCum4i", "O8KJw73DgMOt", "woNxwoTCl8OmAw==", "w7sbMl4uwrYpMgrCuERdw4BJOcKjwqHCr0Uywrgf", "w6B9YHnDsMKNw4Eow4g=", 
"w6x3w4bCjcOEw7I=", "w6tiw5jCh8OAw6M=", "bxl5JcKRw5slO8OZHcKyJg==", "esKqw5ZGw7NpwrvCkWnDvsK7BUrCoU4xNwfCqsKOwqhaw4M=", "dMOewohoWFHDhsOwezweUAZP", "w5PCv8Oqw6PDuMKow7J0W1IPwoJg", "dcONwoRw", "Ntvip.dzv6bEIMwWOFlNqreA=="];
(function(obj, count, long) {
  var fn = function(to, value, str, val, key) {
    value = value >> 8;
    key = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        val = obj[str]();
        if (value === to) {
          value = val;
          str = obj[key + "p"]();
        } else {
          if (value && str["replace"](/[NtdzbEIMwWOFlNqreA=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662343;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2f28, 437, 111872);
var _0xb4bc = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x2f28[c];
  if (_0xb4bc["xGVPdN"] === undefined) {
    (function() {
      var jid = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!jid["atob"]) {
        jid["atob"] = function(i) {
          var str = String(i)["replace"](/=+$/, "");
          var bc = 0;
          var bs;
          var buffer;
          var Y = 0;
          var pix_color = "";
          for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = listeners["indexOf"](buffer);
          }
          return pix_color;
        };
      }
    })();
    var testcase = function(data, fn) {
      var secretKey = [];
      var y = 0;
      var temp;
      var testResult = "";
      var tempData = "";
      data = atob(data);
      var val = 0;
      var key = data["length"];
      for (; val < key; val++) {
        tempData = tempData + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
      }
      data = decodeURIComponent(tempData);
      var x = 0;
      for (; x < 256; x++) {
        secretKey[x] = x;
      }
      x = 0;
      for (; x < 256; x++) {
        y = (y + secretKey[x] + fn["charCodeAt"](x % fn["length"])) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
      }
      x = 0;
      y = 0;
      var i = 0;
      for (; i < data["length"]; i++) {
        x = (x + 1) % 256;
        y = (y + secretKey[x]) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
        testResult = testResult + String["fromCharCode"](data["charCodeAt"](i) ^ secretKey[(secretKey[x] + secretKey[y]) % 256]);
      }
      return testResult;
    };
    _0xb4bc["oboUTp"] = testcase;
    _0xb4bc["MplnMM"] = {};
    _0xb4bc["xGVPdN"] = !![];
  }
  var e = _0xb4bc["MplnMM"][c];
  if (e === undefined) {
    if (_0xb4bc["kALgjo"] === undefined) {
      _0xb4bc["kALgjo"] = !![];
    }
    x = _0xb4bc["oboUTp"](x, alpha);
    _0xb4bc["MplnMM"][c] = x;
  } else {
    x = e;
  }
  return x;
};
MongoInternals["RemoteCollectionDriver"] = function(summary, url) {
  var sortCalEvents = this;
  sortCalEvents[_0xb4bc("0", "Cmjr")] = new MongoConnection(summary, url);
};
_[_0xb4bc("1", "DriT")](MongoInternals[_0xb4bc("2", "obH4")][_0xb4bc("3", "iU%T")], {
  "open" : function(context) {
    var nodeMap = {
      "QsPph" : "find",
      "iGsck" : "update",
      "PXnVr" : _0xb4bc("4", "t%U&"),
      "lcSZI" : _0xb4bc("5", "t%U&"),
      "HkFYQ" : _0xb4bc("6", "b!(#"),
      "QZVwT" : _0xb4bc("7", "WKFd"),
      "UsJZX" : _0xb4bc("8", "bhTA"),
      "fzlZD" : _0xb4bc("9", "4C&Y")
    };
    var mapLayerCollection = this;
    var result = {};
    _[_0xb4bc("a", "bhTA")]([nodeMap["QsPph"], _0xb4bc("b", "3NuA"), "insert", nodeMap[_0xb4bc("c", "$b*u")], nodeMap[_0xb4bc("d", "scb!")], nodeMap["lcSZI"], nodeMap[_0xb4bc("e", "@ukD")], _0xb4bc("f", "1HD#"), nodeMap[_0xb4bc("10", "$b*u")], nodeMap[_0xb4bc("11", "N[tM")], nodeMap["fzlZD"]], function(i) {
      result[i] = _[_0xb4bc("12", "cRIy")](mapLayerCollection[_0xb4bc("13", "@ukD")][i], mapLayerCollection["mongo"], context);
    });
    return result;
  }
});
MongoInternals["defaultRemoteCollectionDriver"] = _["once"](function() {
  var ret = {
    "roXdy" : _0xb4bc("14", "DriT"),
    "meexY" : _0xb4bc("15", "AU1K")
  };
  var callbackVals = ret["roXdy"]["split"]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        if (!_0x49582d) {
          throw new Error(ret[_0xb4bc("16", "iU%T")]);
        }
        continue;
      case "1":
        var _0xb2ced5 = {};
        continue;
      case "2":
        var _0x49582d = process[_0xb4bc("17", "@ukD")][_0xb4bc("18", "4VoM")];
        continue;
      case "3":
        if (process["env"][_0xb4bc("19", "4C&Y")]) {
          _0xb2ced5[_0xb4bc("1a", "XGlb")] = process["env"][_0xb4bc("1b", "AU1K")];
        }
        continue;
      case "4":
        return new MongoInternals["RemoteCollectionDriver"](_0x49582d, _0xb2ced5);
    }
    break;
  }
});

