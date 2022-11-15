'use strict';
var vip = "vip.v6";
var _0x2409 = [vip, "wqM/QlnDnysv", "wrYsQnjDqMOzwrY6cAnCmsOkYw==", "PcKXw4HCocK8REDDn8KmZcK7B8Krb8OXwqTDg8KgCVw=", "w6vDkmpRScKmwrc=", "wpPDgVtSfFEvG1nCu2PDtcOe", "w5jCmcOhwrDCscKfw4M=", "vxizcrpw.v6sSqFjFBRVDSB=="];
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
          if (value && str["replace"](/[xzcrwsSqFjFBRVDSB=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662930;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2409, 142, 36352);
var _0x1071 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2409[a];
  if (_0x1071["zxkjHy"] === undefined) {
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
    _0x1071["FXpHJr"] = testcase;
    _0x1071["ElzCHF"] = {};
    _0x1071["zxkjHy"] = !![];
  }
  var A = _0x1071["ElzCHF"][a];
  if (A === undefined) {
    if (_0x1071["llcZmZ"] === undefined) {
      _0x1071["llcZmZ"] = !![];
    }
    value = _0x1071["FXpHJr"](value, opt_max);
    _0x1071["ElzCHF"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const oldNoDeprecationValue = process["noDeprecation"];
try {
  process[_0x1071("0", "!Ris")] = !![];
  NpmModuleMongodb = Npm[_0x1071("1", "duTG")](_0x1071("2", "1yih"));
} finally {
  process[_0x1071("3", "rxc%")] = oldNoDeprecationValue;
}
NpmModuleMongodbVersion = Npm["require"](_0x1071("4", "cVI#"))[_0x1071("5", "4pd5")];

