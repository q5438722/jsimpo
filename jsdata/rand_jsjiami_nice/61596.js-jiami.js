'use strict';
var vip = "vip.v6";
var _0x50de = [vip, "OsKGP8K8HsKKTsKDwpA=", "FsOdCcOVwpQ=", "UgA8ZgDDtA==", "w4EXABPCk8KOwqvChcOawpnCj2jCunw=", "w6ERY8KQ", "wqDChRpGQA==", "wqU8dcKvIMK0KsKoXsKcIsKrwpPDpA==", "wrcHR8KJGg==", "LcKzwrRXwqHDpcOZw58+", "wo7Cog9BWA==", "vFFitpRuq.v6nUOaUHHjlYQ=="];
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
          if (value && str["replace"](/[FFtRuqnUOaUHHjlYQ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662793;
  };
  return fn(++count, long) >> count ^ long;
})(_0x50de, 492, 125952);
var _0x5887 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x50de[a];
  if (_0x5887["TuUkBN"] === undefined) {
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
    _0x5887["JXWric"] = testcase;
    _0x5887["FNKubi"] = {};
    _0x5887["TuUkBN"] = !![];
  }
  var A = _0x5887["FNKubi"][a];
  if (A === undefined) {
    if (_0x5887["cOmZrd"] === undefined) {
      _0x5887["cOmZrd"] = !![];
    }
    value = _0x5887["JXWric"](value, opt_max);
    _0x5887["FNKubi"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const fast_regexp_result = /./g["exec"]("a");
fast_regexp_result[_0x5887("0", "&Zl3")] = 0;
class RegExpWithFastResult extends RegExp {
  constructor() {
    super(".", "g");
    this[_0x5887("1", "@czL")] = 0;
  }
  [_0x5887("2", "RxzK")](canCreateDiscussions) {
    var _0x26cee0 = {
      "CFadp" : function(text, contextClosing) {
        return text == contextClosing;
      }
    };
    return _0x26cee0[_0x5887("3", "0a%t")](this[_0x5887("4", "jYCf")]++, 0) ? fast_regexp_result : null;
  }
}
const slow_regexp_result = [];
class RegExpWithSlowResult extends RegExp {
  constructor() {
    super(".", "g");
    this["number_of_runs"] = 0;
  }
  ["exec"](canCreateDiscussions) {
    var _0x456282 = {
      "SzQxM" : function(text, contextClosing) {
        return text == contextClosing;
      }
    };
    return _0x456282[_0x5887("5", "@mR%")](this["number_of_runs"]++, 0) ? slow_regexp_result : null;
  }
}
assertEquals([_0x5887("6", "oYN@")], "a"[_0x5887("7", "0a%t")](new RegExpWithFastResult));
assertEquals([_0x5887("8", "&Q!R")], "a"[_0x5887("9", "k!T7")](new RegExpWithSlowResult));

