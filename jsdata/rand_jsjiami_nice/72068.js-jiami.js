'use strict';
var vip = "vip.v6";
var _0xbab3 = [vip, "e8OwLw==", "AcKmwrg=", "w5FJw4HClnw=", "wr1Yw7E=", "woHDgMKsS8OWMw==", "vziKpC.v6aAqVRVfbClzMbQ=="];
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
          if (value && str["replace"](/[zKCaAqVRVfbClzMbQ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662851;
  };
  return fn(++count, long) >> count ^ long;
})(_0xbab3, 118, 30208);
var _0x1632 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0xbab3[a];
  if (_0x1632["hhePuu"] === undefined) {
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
    _0x1632["MyGlUk"] = testcase;
    _0x1632["OpZxUT"] = {};
    _0x1632["hhePuu"] = !![];
  }
  var A = _0x1632["OpZxUT"][a];
  if (A === undefined) {
    if (_0x1632["tYoRYT"] === undefined) {
      _0x1632["tYoRYT"] = !![];
    }
    value = _0x1632["MyGlUk"](value, opt_max);
    _0x1632["OpZxUT"][a] = value;
  } else {
    value = A;
  }
  return value;
};
require(["./a", "./b", _0x1632("0", "Zsq3")]);
require[_0x1632("1", "0)6T")]([_0x1632("2", "bhh@")], function(addDocObjectToDocMap) {
  var curTagData = {
    "xGCiB" : _0x1632("3", "9U8&")
  };
  addDocObjectToDocMap("./b");
  addDocObjectToDocMap(curTagData[_0x1632("4", "xY*X")]);
});

