'use strict';
var vip = "vip.v6";
var _0x4b73 = [vip, "aMOIGMKcwo0=", "wo3DhgDChg==", "ZMOEY30IYDNC", "RMOOwqMEw4bDnMK2wqDCig==", "w781w61x", "w4zCk8OKw6cw", "wrnDnzvDkg==", "QsO2woY=", "wqp5wpnCjQ==", "wqDDnMOlXEkuw6o=", "wrbDkMOnWlU9w6rChGvDusORwo/DmwPCisOvw5I5w7xCwqk8dWTCvsKcTcOWRsKqwqZ4AsKuwpjCpMKOOkjDtBcSwp3DvMOTP1E=", "wotywrR7V2LCrzhQwpvCscKWBzhTw7zCpQ3CuEbDrcOeIF3Dp8OePMKOw4dTwo/CtsKVwo7DlU9peMOgTD4cwrR4w4zDrWg=", "WsOdwr4Xw5o=", "w55pwoPDo0Y=", "w4bCmsOow7Ya", "wrzDn3fChgw=", "w7AcwonCosK7", "w5HDmMO2MMKbLAvCvA==", "AcOrwrvDrFo=", 
"T8OcNh3CqEjCg1E=", "vCiVLHwQpVYjX.vJ6tTleKey=="];
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
          if (value && str["replace"](/[CVLHwQVYjXJtTleKey=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662049;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4b73, 408, 104448);
var _0x2cd4 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4b73[a];
  if (_0x2cd4["UwnxDA"] === undefined) {
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
    _0x2cd4["BKpHbA"] = testcase;
    _0x2cd4["eNoIOn"] = {};
    _0x2cd4["UwnxDA"] = !![];
  }
  var A = _0x2cd4["eNoIOn"][a];
  if (A === undefined) {
    if (_0x2cd4["AyxXHi"] === undefined) {
      _0x2cd4["AyxXHi"] = !![];
    }
    value = _0x2cd4["BKpHbA"](value, opt_max);
    _0x2cd4["eNoIOn"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
var util = require(_0x2cd4("0", "*]Jd"));
var Action = require("../action");
var c = require("../const");
var ActionAppend = module[_0x2cd4("1", "5uf)")] = function AudioFeeder(action) {
  var data = {
    "RLDzj" : function(beforeZero, afterZero) {
      return beforeZero || afterZero;
    },
    "fNSkD" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "TWSRb" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "yeKrO" : "nargs for append actions must be > 0; if arg ",
    "lgrUq" : _0x2cd4("2", "5uf)"),
    "ZlmVy" : _0x2cd4("3", "wG3k"),
    "CboAb" : "nargs must be OPTIONAL to supply const"
  };
  action = data["RLDzj"](action, {});
  if (this[_0x2cd4("4", "Sw5P")] <= 0) {
    throw new Error(data[_0x2cd4("5", "JUMW")](data["TWSRb"](data[_0x2cd4("6", "lx%^")], data[_0x2cd4("7", "HqPg")]), data[_0x2cd4("8", "GW*^")]));
  }
  if (!!this[_0x2cd4("9", "#a&o")] && this[_0x2cd4("a", "&Z2s")] !== c[_0x2cd4("b", "p^]H")]) {
    throw new Error(data[_0x2cd4("c", "M7(8")]);
  }
  Action[_0x2cd4("d", "4Um6")](this, action);
};
util[_0x2cd4("e", "KcRu")](ActionAppend, Action);
ActionAppend[_0x2cd4("f", "Sw5P")][_0x2cd4("10", "gu#q")] = function(isSlidingUp, testCache, a) {
  var d = (testCache[this["dest"]] || [])[_0x2cd4("11", "lx%^")]();
  d[_0x2cd4("12", "fs6w")](a);
  testCache[_0x2cd4("13", "w*JK")](this["dest"], d);
};

