'use strict';
var vip = "vip.v6";
var _0x5494 = [vip, "w4haB8KzwrxWaTc=", "GxcDcUjDiMObHw==", "w5vCrBtIwoDDkcO4w4w=", "w4Rlw7I1dcOQ", "w4vCqRALZznCtRLCsQ==", "O28BXMOCw5k=", "OD3DuA5bZg==", "VVgdScOi", "EyMQQS7Cl8KPwoo=", "Ynoswr9TCsObw755", "wrjCjsKFTXM=", "w6rDpz9Xw7Jd", "KcKawqfDpcKawrvDjWrDm2VM", "bVAIwrHCv8Kvwrgqw4vCgMO1fHc=", "wr/DkyHDlS5C", "GhrDosO7w4fDtFlqIxNl", "woQHYMObZ8KeDsK1bsKwNcOK", "w5R5O8O8ZylANsOxS0M=", "w5MxHFTCi0drw4rDpMKrwrg=", "KjDDjQ==", "Lvirp.XNKvP6ofSHeyQebG=="];
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
          if (value && str["replace"](/[LrXNKPofSHeyQebG=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662060;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5494, 264, 67584);
var _0x2379 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5494[a];
  if (_0x2379["aozcvu"] === undefined) {
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
    _0x2379["nQHxzr"] = testcase;
    _0x2379["mrTozq"] = {};
    _0x2379["aozcvu"] = !![];
  }
  var A = _0x2379["mrTozq"][a];
  if (A === undefined) {
    if (_0x2379["mmQbFZ"] === undefined) {
      _0x2379["mmQbFZ"] = !![];
    }
    value = _0x2379["nQHxzr"](value, opt_max);
    _0x2379["mrTozq"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const common = require(_0x2379("0", "q411"));
const assert = require("assert");
const domain = require(_0x2379("1", "69nf"));
const d = new (domain[_0x2379("2", "vX]B")]);
d["on"](_0x2379("3", "e6Fi"), common[_0x2379("4", "*8F2")]((data) => {
  var callbackVals = _0x2379("5", "IMtl")[_0x2379("6", "s0vj")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        assert["strictEqual"](data["message"], _0x2379("7", "OihH"));
        continue;
      case "1":
        assert[_0x2379("8", "!Wz3")](data[_0x2379("9", "bu#5")], undefined);
        continue;
      case "2":
        assert["strictEqual"](data[_0x2379("a", "5z1e")], d);
        continue;
      case "3":
        assert[_0x2379("b", "Rj%Q")](data[_0x2379("c", "X*8u")], !![]);
        continue;
      case "4":
        assert[_0x2379("d", "2y#z")](data[_0x2379("e", "76Cl")], undefined);
        continue;
    }
    break;
  }
}));
d[_0x2379("f", "&F3h")](common[_0x2379("10", "9G&C")](() => {
  process[_0x2379("11", "B@k2")](common[_0x2379("12", "*$N7")](() => {
    throw new Error(_0x2379("13", "uonw"));
  }));
}));

