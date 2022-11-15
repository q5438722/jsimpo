'use strict';
var vip = "vip.v6";
var _0x29a8 = [vip, "KTnCq3DDjcOTwpw2ZykdwpnCrcOOPBUVJT0kE0VGA1jDow==", "VBjCrF8pY8Oe", "wowow4RbdcOkwpLDmV4M", "UE9Swq0=", "w7jCkcKbexM=", "wrNBw4vDgA==", "vsDip.v6ILuPYCLRKtglzA=="];
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
          if (value && str["replace"](/[sDILuPYCLRKtglzA=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662155;
  };
  return fn(++count, long) >> count ^ long;
})(_0x29a8, 235, 60160);
var _0x2845 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x29a8[a];
  if (_0x2845["dchCAM"] === undefined) {
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
    _0x2845["JMmovs"] = testcase;
    _0x2845["MmAIhc"] = {};
    _0x2845["dchCAM"] = !![];
  }
  var A = _0x2845["MmAIhc"][a];
  if (A === undefined) {
    if (_0x2845["dZLxBx"] === undefined) {
      _0x2845["dZLxBx"] = !![];
    }
    value = _0x2845["JMmovs"](value, opt_max);
    _0x2845["MmAIhc"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module[_0x2845("0", "8pM*")] = function() {
  const captureShapes = this[_0x2845("1", "zVRJ")]();
  return 'import thing from "./module";\nexport default [' + Array[_0x2845("2", "vG6v")]({
    "length" : +captureShapes["count"]
  }, () => {
    return _0x2845("3", "%SIz");
  })[_0x2845("4", "(M^Q")](", ") + _0x2845("5", "3Af%");
};

