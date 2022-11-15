'use strict';
var vip = "vip.v6";
var _0x4305 = [vip, "w5rCuF5HOy4=", "w4rDt8K4w70=", "HUDDucKnwo1oOhRCfcOBGyA=", "bMOkwoxqb8ONXGducsOPSFTCrwoewo3CnA==", "G8OgwrRBw4I9w5g8woDDvcKDBgZ5wq9MBhg=", "w5PDk8KoGcO2PcO5XcK4F8KQI8OnVsK8w6g=", "ZWXCsU3CtS97w4w=", "wpDCvcKvw6jDrsK+", "fcOHA8OJwp1JIg==", "IzTDmMKJExfDpcKeaMO2", "sviEsp.v6FNZLJyRWYMHeVGY=="];
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
          if (value && str["replace"](/[sEsFNZLJyRWYMHeVGY=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662096;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4305, 456, 116736);
var _0x5a8f = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4305[a];
  if (_0x5a8f["uuChFr"] === undefined) {
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
    _0x5a8f["sDlADx"] = testcase;
    _0x5a8f["YnGsae"] = {};
    _0x5a8f["uuChFr"] = !![];
  }
  var A = _0x5a8f["YnGsae"][a];
  if (A === undefined) {
    if (_0x5a8f["OTsAul"] === undefined) {
      _0x5a8f["OTsAul"] = !![];
    }
    value = _0x5a8f["sDlADx"](value, opt_max);
    _0x5a8f["YnGsae"][a] = value;
  } else {
    value = A;
  }
  return value;
};
define([_0x5a8f("0", "96iU"), "./string", _0x5a8f("1", "jt%Q"), _0x5a8f("2", "49nb"), _0x5a8f("3", "Qve&"), _0x5a8f("4", "fO@H"), "./xhr"], function(p, canCreateDiscussions, dontForceConstraints) {
  function val(value) {
    return data[_0x5a8f("5", "jt%Q")](value);
  }
  var data;
  data = /^define|^prevent|descriptor$/i;
  p[_0x5a8f("6", "P(&)")](val);
  canCreateDiscussions[_0x5a8f("7", "00jy")]("\\s");
  return {
    "failIfShimmed" : p["failIfShimmed"],
    "setWhitespaceChars" : canCreateDiscussions[_0x5a8f("8", "eJFC")],
    "setIsoCompatTest" : dontForceConstraints[_0x5a8f("9", "GRjN")]
  };
});

