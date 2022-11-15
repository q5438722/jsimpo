'use strict';
var vip = "vip.v6";
var _0x4405 = [vip, "wpc4OcOSw5pWQw==", "2b3ZuNiZ", "2q7ZqtuW2KI=", "2pfYodqP2YfbmtuF2bE=", "2YPYlNun2anYiw==", "vipwJ.vVOCyGkUVx6JMHkuZl=="];
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
          if (value && str["replace"](/[wJVOCyGkUVxJMHkuZl=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661946;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4405, 390, 99840);
var _0xc245 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4405[a];
  if (_0xc245["zhzFgQ"] === undefined) {
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
    _0xc245["yhULAU"] = testcase;
    _0xc245["glNmtu"] = {};
    _0xc245["zhzFgQ"] = !![];
  }
  var A = _0xc245["glNmtu"][a];
  if (A === undefined) {
    if (_0xc245["JnGuOg"] === undefined) {
      _0xc245["JnGuOg"] = !![];
    }
    value = _0xc245["yhULAU"](value, opt_max);
    _0xc245["glNmtu"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module[_0xc245("0", "Y*QV")] = ["\u0631\u0648\u0633\u062a\u0627", _0xc245("1", "mXEH"), "\u062f\u0647\u06a9\u062f\u0647", _0xc245("2", "F$rV"), "\u062f\u0698", _0xc245("3", "pwtX"), _0xc245("4", "!d*W")];

