'use strict';
var vip = "vip.v6";
var _0x2d41 = [vip, "S8OiNcOBfcK6w6dG", "w701wovDlyM=", "wrvDqhDCoU8=", "wrpLwrTClGETwrfClw==", "JsK8wrYDGQ==", "woLCkHnChA==", "wZnvTnip.HGVhv6VJCsOay=="];
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
          if (value && str["replace"](/[wZnTnHGVhVJCsOay=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661771;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2d41, 318, 81408);
var _0x1e95 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2d41[a];
  if (_0x1e95["BzGyrs"] === undefined) {
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
    _0x1e95["UaFjKn"] = testcase;
    _0x1e95["KauOic"] = {};
    _0x1e95["BzGyrs"] = !![];
  }
  var A = _0x1e95["KauOic"][a];
  if (A === undefined) {
    if (_0x1e95["XOGjoe"] === undefined) {
      _0x1e95["XOGjoe"] = !![];
    }
    value = _0x1e95["UaFjKn"](value, opt_max);
    _0x1e95["KauOic"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
class Hello {
  [_0x1e95("0", "IK25")]() {
    return _0x1e95("1", "o*6d");
  }
}
class Outer extends Hello {
  constructor() {
    var _0x4f668f = {
      "uLbkw" : _0x1e95("2", "xOLQ")
    };
    super();
    class KeyringConnection {
      [super[_0x1e95("3", "63Z1")]()]() {
        return _0x4f668f["uLbkw"];
      }
    }
    return new KeyringConnection;
  }
}
expect((new Outer)[_0x1e95("4", "dB]B")]())[_0x1e95("5", "7LUC")]("hello");

