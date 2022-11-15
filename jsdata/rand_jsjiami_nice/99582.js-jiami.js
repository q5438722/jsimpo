'use strict';
var vip = "vip.v6";
var _0x3c82 = [vip, "SyZ8wqbDlw==", "w7FgB8KJGMObMhQCw6TDlMOOw7LCrcKy", "Tyogw5E7Fg==", "fgpI", "wqJzTQYOPMKm", "wroyeA7DqFU=", "w5HDiMKkAcOGwrnDjsOAWmfCjF8zw593wqLDvsKhMsKkwrtvR8Ktw6Vi", "bsO1w7HClgFcwqAyZDM=", "wocuwr8NwozDvcKQKQ1TYR5ockVsw6jCo8K0w7RjwoEfUhfDnMOUw5cmwrgaw7QH", "Yx/DtMKFU8O2e8OMSic8KMOIwoPDlA==", "WMKHwpbDncOCw4w=", "TcOyYw==", "w6kAEg5o", "w4bChEcWwpLDlWXDrkIkw7FdwoFFwqR0wr99w7nDtcKYQF5PwowIEsKEw5fDssKow7zDhcKmw7PDpQ==", "EviszAp.Yv6sRLVmqoNScC=="];
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
          if (value && str["replace"](/[EszAYsRLVmqoNScC=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662992;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3c82, 299, 76544);
var _0xa087 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x3c82[a];
  if (_0xa087["LRhjWh"] === undefined) {
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
    _0xa087["LFynZq"] = testcase;
    _0xa087["IHNIbt"] = {};
    _0xa087["LRhjWh"] = !![];
  }
  var A = _0xa087["IHNIbt"][a];
  if (A === undefined) {
    if (_0xa087["ZCrUZE"] === undefined) {
      _0xa087["ZCrUZE"] = !![];
    }
    value = _0xa087["LFynZq"](value, opt_max);
    _0xa087["IHNIbt"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const assert = require(_0xa087("0", "ucK2"));
const request = require(_0xa087("1", "4Won"))["request"];
describe(_0xa087("2", "bWCP"), () => {
  var obj = {
    "ICEAQ" : function(saveNotifs) {
      return saveNotifs();
    },
    "AVWat" : _0xa087("3", "PIFI"),
    "hlwgo" : "should return the request header object",
    "kSmbt" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  it(obj["hlwgo"], () => {
    const payload = request();
    assert[_0xa087("4", "avkp")](payload[_0xa087("5", "ovpO")], payload[_0xa087("6", "dnYP")]["headers"]);
  });
  obj[_0xa087("7", "4]io")](it, _0xa087("8", "97k["), () => {
    const d = obj["ICEAQ"](request);
    d["header"] = {
      "X-Custom-Headerfield" : obj[_0xa087("9", "bVk3")]
    };
    assert[_0xa087("a", "a2Ad")](d[_0xa087("b", "582k")], d[_0xa087("c", "paqU")][_0xa087("d", "1L5Y")]);
  });
});

