'use strict';
var vip = "vip.v6";
var _0x3fe2 = [vip, "w7t5w7bCpSg=", "w6LCpQnDqsKm", "wqIjdcOAXV8Qw5DCmw==", "wqHDgE0/w6E=", "woN3DFHDqQ==", "w7ZGZQdv", "w79cfg==", "YMKWwqo=", "FCHDoFrClg==", "wrnDrMK9w4HCnA==", "ooSvisp.vQ6uyAnQGYnRJjO=="];
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
          if (value && str["replace"](/[ooSsQuyAnQGYnRJjO=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662962;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3fe2, 345, 88320);
var _0x2a8b = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x3fe2[a];
  if (_0x2a8b["iVUAfV"] === undefined) {
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
    _0x2a8b["NxffXm"] = testcase;
    _0x2a8b["VHLrqn"] = {};
    _0x2a8b["iVUAfV"] = !![];
  }
  var A = _0x2a8b["VHLrqn"][a];
  if (A === undefined) {
    if (_0x2a8b["DPdIpH"] === undefined) {
      _0x2a8b["DPdIpH"] = !![];
    }
    value = _0x2a8b["NxffXm"](value, opt_max);
    _0x2a8b["VHLrqn"][a] = value;
  } else {
    value = A;
  }
  return value;
};
describe(_0x2a8b("0", "t[JI"), () => {
  var storage_types = {
    "LXVYL" : _0x2a8b("1", "t[JI"),
    "Ryceg" : _0x2a8b("2", "X9eb"),
    "ygYca" : "some test"
  };
  return describe(storage_types[_0x2a8b("3", "0dqr")], () => {
    var zlib = {
      "LeRpc" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "dxgwJ" : storage_types[_0x2a8b("4", "R9(l")],
      "Wxlxn" : storage_types[_0x2a8b("5", "w0(E")],
      "frIja" : function(require, load, callback) {
        return require(load, callback);
      },
      "DEzmc" : function(saveNotifs) {
        return saveNotifs();
      }
    };
    return context("some test", () => {
      return zlib[_0x2a8b("6", "$V8p")](it, _0x2a8b("7", "8uLc"), () => {
        return zlib["LeRpc"](expect, zlib["dxgwJ"])["to"]["eq"](zlib[_0x2a8b("8", "*xIG")]);
      });
      return zlib[_0x2a8b("9", "77^M")](someFn);
    });
  });
});

