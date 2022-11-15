'use strict';
var vip = "vip.v6";
var _0x550c = [vip, "R8O/KXhtw5E=", "wrdpE3PDnhXCuHYiw5XDrsK0", "VsOiwr3Ci1DCisKFLwgp", "wp4Xw4LCok3CpMKaYMKQJg==", "F8KKD8KMdcOIWcK6", "wqjCjMKbP8KZw78=", "wqEuAXrDi8K1OsKqZGhhUcKxZmpWDsO8wpZAJWDCi8Oi", "wrQKHsKvOMOlw5l/w7g=", "wpHDgFY=", "dSZUbQ==", "woDChyTCr2DCnHjDn8KXH8OVKQ==", "w63DpsOdw6FlwoPCvsKiOMKMwrQ1", "w6jDpsOc", "bcOMDWk=", "wowaBcKJDw==", "GMKWCsK+ARHCvy3CoSUIwqfCgVBRw5/DqD/DkMOlNcO+w43DuA==", "vip.rvBzcrkj6aPylTrXWFK=="];
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
          if (value && str["replace"](/[rBzcrkjaPylTrXWFK=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662124;
  };
  return fn(++count, long) >> count ^ long;
})(_0x550c, 486, 124416);
var _0x56ae = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x550c[a];
  if (_0x56ae["jCbSdM"] === undefined) {
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
    _0x56ae["yxJBFU"] = testcase;
    _0x56ae["ZylxIV"] = {};
    _0x56ae["jCbSdM"] = !![];
  }
  var A = _0x56ae["ZylxIV"][a];
  if (A === undefined) {
    if (_0x56ae["hblNTq"] === undefined) {
      _0x56ae["hblNTq"] = !![];
    }
    value = _0x56ae["yxJBFU"](value, opt_max);
    _0x56ae["ZylxIV"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var throwTypeErrorFunction = Object[_0x56ae("0", "H![Z")](Function[_0x56ae("1", "Hhh&")], "arguments")[_0x56ae("2", "OQcW")];
var nameDesc = Object["getOwnPropertyDescriptor"](throwTypeErrorFunction, _0x56ae("3", "e)XW"));
assertFalse(nameDesc[_0x56ae("4", "9Bak")], _0x56ae("5", "*%YH"));
assertFalse(nameDesc["enumerable"], "enumerable");
assertFalse(nameDesc["writable"], "writable");
assertThrows(function() {
  var _0x273d4d = {
    "HbtRX" : _0x56ae("6", "*%YH")
  };
  "use strict";
  throwTypeErrorFunction[_0x56ae("7", "RkN*")] = _0x273d4d[_0x56ae("8", "Hhh&")];
}, TypeError);
var lengthDesc = Object[_0x56ae("9", "!Xh)")](throwTypeErrorFunction, _0x56ae("a", "Gu[i"));
assertFalse(lengthDesc["configurable"], _0x56ae("b", "3F$k"));
assertFalse(lengthDesc[_0x56ae("c", "%t7N")], _0x56ae("d", "WvvC"));
assertFalse(lengthDesc[_0x56ae("e", "5Yi1")], "writable");
assertThrows(function() {
  throwTypeErrorFunction[_0x56ae("f", "kBhG")] = 42;
}, TypeError);
assertTrue(Object["isFrozen"](throwTypeErrorFunction));

