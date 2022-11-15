'use strict';
var vip = "vip.v6";
var _0x550c = [vip, "H8Kiw55tw6BpM23CgCfDtcKoU8OY", "woARw5wBw6U=", "UcOxw5vCpsOGbVJJw5U=", "NEPCjMK/wqR5Kw==", "vDhibp.v6dZKtxLcTtYaSl=="];
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
          if (value && str["replace"](/[DhbdZKtxLcTtYaSl=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662302;
  };
  return fn(++count, long) >> count ^ long;
})(_0x550c, 486, 124416);
var _0x56ae = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x550c[a];
  if (_0x56ae["lJnedc"] === undefined) {
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
    _0x56ae["zqTKYt"] = testcase;
    _0x56ae["jCbSdM"] = {};
    _0x56ae["lJnedc"] = !![];
  }
  var A = _0x56ae["jCbSdM"][a];
  if (A === undefined) {
    if (_0x56ae["yxJBFU"] === undefined) {
      _0x56ae["yxJBFU"] = !![];
    }
    value = _0x56ae["zqTKYt"](value, opt_max);
    _0x56ae["jCbSdM"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var isArray = Array["isArray"];
var str = Object[_0x56ae("0", "hh&A")]["toString"];
module[_0x56ae("1", "QcW)")] = isArray || function(PL$23) {
  var PL$22 = {
    "btRXO" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "YyPPx" : _0x56ae("2", ")XWX")
  };
  return !!PL$23 && PL$22[_0x56ae("3", ")ZR1")](PL$22["YyPPx"], str["call"](PL$23));
};

