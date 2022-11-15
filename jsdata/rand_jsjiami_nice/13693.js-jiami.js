'use strict';
var vip = "vip.v6";
var _0x521b = [vip, "w6LDh8Kh", "vidSEp.v6LucXnObcPdAglzD=="];
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
          if (value && str["replace"](/[dSELucXnObcPdAglzD=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661704;
  };
  return fn(++count, long) >> count ^ long;
})(_0x521b, 300, 76800);
var _0x106f = function(c, f) {
  c = ~~"0x"["concat"](c);
  var s = _0x521b[c];
  if (_0x106f["SbPJlJ"] === undefined) {
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
    _0x106f["bOinBb"] = testcase;
    _0x106f["WAaFOZ"] = {};
    _0x106f["SbPJlJ"] = !![];
  }
  var h = _0x106f["WAaFOZ"][c];
  if (h === undefined) {
    if (_0x106f["ruKGzA"] === undefined) {
      _0x106f["ruKGzA"] = !![];
    }
    s = _0x106f["bOinBb"](s, f);
    _0x106f["WAaFOZ"][c] = s;
  } else {
    s = h;
  }
  return s;
};
var Utils = {
  "get" : function get() {
  }
};
var {
  get : _get
} = Utils;
var bar = {
  "get" : function grantScripting(player) {
    var _cmdInterceptors = {
      "LAnCO" : function(require, load, callback) {
        return require(load, callback);
      }
    };
    _cmdInterceptors["LAnCO"](_get, player, _0x106f("0", "jAzn"));
  }
};
var f = function f({
  foo : num3 = "bar"
}) {
  var genericMock = {
    "foo" : function setCheckedUsers() {
      num3;
    }
  };
};

