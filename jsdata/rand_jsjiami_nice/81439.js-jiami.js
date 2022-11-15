'use strict';
var vip = "vip.v6";
var _0x35dd = [vip, "W8KFegrClQE=", "CMOAF3w=", "PsO3CSzCgkcdGMKew5bDksOzwqrDq2jCpsKxcsKCw4jDvAJo", "bAV0wp7DgC07w7TCkiZuw4zDosK+X8KFwr/CpMKXYxMzb0gdwrfCpMOI", "OhUkLsKLwr7Dig==", "wrU3csObwoRowq51w5rDg0jCnw==", "ecKMwo7CtyM=", "woUoDsKkw5HDoMO4BWjCisKn", "Rk8+w5hKw7nDrA==", "wqjCkVvDr8OJ", "CnTCnzVZwr0NXlHCnHXDksKw", "T8KMbwzCsQ==", "viUp.Fjvl6SNKCTBgXICw=="];
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
          if (value && str["replace"](/[UFjlSNKCTBgXICw=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662891;
  };
  return fn(++count, long) >> count ^ long;
})(_0x35dd, 194, 49664);
var _0x1fbd = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x35dd[a];
  if (_0x1fbd["kvIfOO"] === undefined) {
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
    _0x1fbd["QUxRMB"] = testcase;
    _0x1fbd["ugGITg"] = {};
    _0x1fbd["kvIfOO"] = !![];
  }
  var A = _0x1fbd["ugGITg"][a];
  if (A === undefined) {
    if (_0x1fbd["wRTsbB"] === undefined) {
      _0x1fbd["wRTsbB"] = !![];
    }
    value = _0x1fbd["QUxRMB"](value, opt_max);
    _0x1fbd["ugGITg"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const i18n = require(_0x1fbd("0", "hD7x"));
const errors = require("@tryghost/errors");
const urlUtils = require(_0x1fbd("1", "@7pb"));
module[_0x1fbd("2", "BT[k")] = function deprecated(fnName, params, fn, name) {
  var filters = {
    "ptJOW" : function(require, load, callback) {
      return require(load, callback);
    },
    "ItOHE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "dhggI" : "errors.errors.pageNotFound"
  };
  const artistTrack = new RegExp(_0x1fbd("3", "WhYu"));
  name = filters[_0x1fbd("4", "dI1(")](parseInt, name, 10);
  if (name === 1) {
    return urlUtils["redirect301"](params, fnName[_0x1fbd("5", "vBcH")][_0x1fbd("6", "WgN1")](artistTrack, "/"));
  } else {
    if (name < 1 || filters[_0x1fbd("7", "UY4d")](isNaN, name)) {
      return filters["ItOHE"](fn, new (errors[_0x1fbd("8", "UA2E")])({
        "message" : i18n["t"](filters[_0x1fbd("9", "t#XI")])
      }));
    } else {
      fnName[_0x1fbd("a", "t#XI")][_0x1fbd("b", "l(B@")] = name;
      return fn();
    }
  }
};

