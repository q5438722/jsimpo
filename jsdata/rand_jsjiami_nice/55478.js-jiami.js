'use strict';
var vip = "vip.v6";
var _0x54b8 = [vip, "YcOQw4TDmEIeAcK0", "ZcOswrk6woHCsSU=", "w6lZw6LCtQ==", "wrfCvxvCn8K9Szpywq4lJ8O6Z8OF", "wo3DrTrCjzU=", "dcO7wq8owpzCuxjCo2LCl8KhJA==", "CMKew7zCqcOE", "wqQewroPw5jDqMKG", "PcKBw6fCk8KYbw==", "Nzp4I8OTw6jDucOQ", "fHE0woBsw71Lw5rCq8ObwoYpw4dnwpEXwpM=", "wpbCjX8Gw7QNdw==", "w6/DiMOhwq/CuQ==", "viKUpD.vQkU6CBGzEPtJoKs=="];
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
          if (value && str["replace"](/[KUDQkUCBGzEPtJoKs=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662067;
  };
  return fn(++count, long) >> count ^ long;
})(_0x54b8, 457, 116992);
var _0x3d7e = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x54b8[a];
  if (_0x3d7e["cKWDEB"] === undefined) {
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
    _0x3d7e["CsWbgA"] = testcase;
    _0x3d7e["oKsAXX"] = {};
    _0x3d7e["cKWDEB"] = !![];
  }
  var A = _0x3d7e["oKsAXX"][a];
  if (A === undefined) {
    if (_0x3d7e["ApWmJk"] === undefined) {
      _0x3d7e["ApWmJk"] = !![];
    }
    value = _0x3d7e["CsWbgA"](value, opt_max);
    _0x3d7e["oKsAXX"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const common = require("../common");
if (!common["hasCrypto"]) {
  common[_0x3d7e("0", "3i8U")](_0x3d7e("1", "kx2o"));
}
const Countdown = require("../common/countdown");
const http2 = require(_0x3d7e("2", "$Opk"));
const server = http2[_0x3d7e("3", "l)JA")]();
let session;
const countdown = new Countdown(2, () => {
  server[_0x3d7e("4", ")dGH")](common["mustSucceed"]());
  session[_0x3d7e("5", "6@[4")]();
});
server[_0x3d7e("6", "o8ke")](0, common[_0x3d7e("7", "3@gM")](() => {
  var PL$24 = {
    "hoNvI" : "connect"
  };
  const PL$28 = http2["connect"](_0x3d7e("8", "N0R%") + server[_0x3d7e("9", "Z3G9")]()["port"]);
  PL$28["on"](PL$24[_0x3d7e("a", "@E^z")], common[_0x3d7e("b", "08@l")](() => {
    return countdown["dec"]();
  }));
}));
server["on"](_0x3d7e("c", "l)JA"), common["mustCall"]((s) => {
  session = s;
  countdown["dec"]();
}));

