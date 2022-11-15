'use strict';
var vip = "vip.v6";
var _0x1a5e = [vip, "VG7DqDrDkw==", "wrROwpzCjA==", "wp8QQ8OIYmTDk8KOw6V8ew==", "wrPCnDTDgMOM", "w4XCugo=", "wpvDtVHCsA==", "w4cLEw==", "HB1qBQ==", "YcKYQsKq", "w5rCmMOHAEnCmjEyw4PDqRbCskR/woZ+w6vCsMKWYz0=", "wr3DoMKHQMKIw6TDtQ==", "OcK2Bk1f", "Uvizp.vNR6oNkJFJQWosHG=="];
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
          if (value && str["replace"](/[UzNRoNkJFJQWosHG=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662419;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1a5e, 184, 47104);
var _0x5409 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1a5e[a];
  if (_0x5409["gxFwaf"] === undefined) {
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
    _0x5409["gYCCKV"] = testcase;
    _0x5409["XhMCzl"] = {};
    _0x5409["gxFwaf"] = !![];
  }
  var A = _0x5409["XhMCzl"][a];
  if (A === undefined) {
    if (_0x5409["DisXnY"] === undefined) {
      _0x5409["DisXnY"] = !![];
    }
    value = _0x5409["gYCCKV"](value, opt_max);
    _0x5409["XhMCzl"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var mkdirp = require(_0x5409("0", "6t@m"));
var path = require(_0x5409("1", "6t@m"));
var fs = require("fs");
var test = require(_0x5409("2", "*co&"))[_0x5409("3", "!Lkt")];
var _0755 = parseInt(_0x5409("4", "JVU1"), 8);
test("root", function(data) {
  var MajorityMethods = {
    "oaORW" : _0x5409("5", "$&yO"),
    "hjkQt" : function(require, load, callback, id) {
      return require(load, callback, id);
    }
  };
  var base = path[_0x5409("6", "!8i@")]("/");
  MajorityMethods[_0x5409("7", "lfQV")](mkdirp, base, _0755, function(canCreateDiscussions) {
    var sortKeys = {
      "sNdSA" : MajorityMethods[_0x5409("8", "^nU1")]
    };
    if (canCreateDiscussions) {
      throw canCreateDiscussions;
    }
    fs[_0x5409("9", "6#l*")](base, function(canCreateDiscussions, types) {
      if (canCreateDiscussions) {
        throw canCreateDiscussions;
      }
      data["ok"](types[_0x5409("a", "qtU#")](), sortKeys[_0x5409("b", "l5Vs")]);
      data["end"]();
    });
  });
});

