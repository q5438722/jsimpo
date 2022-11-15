'use strict';
var vip = "vip.v6";
var _0x5076 = [vip, "w6HCt8O3cw==", "wr0AVcKDFCBMIcOJ", "wqVawpbCnA==", "akDCqzkEwr3CsMKPGw==", "K8ORfsOgw6g=", "Q8O7JRs=", "w6rCqsO3NQ==", "KVp7w4h2T8OtwrnCg8OEDw==", "cWvDtcKNw4QcVUpY", "visncpK.QuvK6zREhgRCkNE=="];
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
          if (value && str["replace"](/[sncKQuKzREhgRCkNE=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662108;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5076, 150, 38400);
var _0x3438 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5076[a];
  if (_0x3438["trvjUH"] === undefined) {
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
    _0x3438["rnAUhT"] = testcase;
    _0x3438["nUndbW"] = {};
    _0x3438["trvjUH"] = !![];
  }
  var A = _0x3438["nUndbW"][a];
  if (A === undefined) {
    if (_0x3438["xnKgXj"] === undefined) {
      _0x3438["xnKgXj"] = !![];
    }
    value = _0x3438["rnAUhT"](value, opt_max);
    _0x3438["nUndbW"][a] = value;
  } else {
    value = A;
  }
  return value;
};
function newFastRegExp() {
  return new RegExp(".");
}
function toSlowRegExp(src) {
  src[_0x3438("0", "U^7y")] = 42;
}
let re = newFastRegExp();
const evil_nonstring = {
  [Symbol[_0x3438("1", "5*3s")]]:() => {
    return toSlowRegExp(re);
  }
};
const empty_string = "";
String["prototype"]["replace"]["call"](evil_nonstring, re, empty_string);
re = newFastRegExp();
String[_0x3438("2", "aGbb")]["match"][_0x3438("3", "0r*$")](evil_nonstring, re, empty_string);
re = newFastRegExp();
String[_0x3438("4", "N1FK")]["search"][_0x3438("5", "xJ$d")](evil_nonstring, re, empty_string);
re = newFastRegExp();
String[_0x3438("6", "d0dS")][_0x3438("7", "pSgG")][_0x3438("8", "Z!J]")](evil_nonstring, re, empty_string);

