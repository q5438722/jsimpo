'use strict';
var vip = "vip.v6";
var _0x4434 = [vip, "N8Osw5fCssOQ", "K8OaMsOWCw==", "fcKzwpRcw5s=", "wr9BJ8KMCg==", "CMKKWMKlwqTCvVLDhsO7SiUs", "wr1FNsKQHWHCrcKTSsOhw5wH", "HMO6HcKcWA==", "OcKoEHV9Yw==", "NMOsGcOCKlA=", "BG50w6vCr8OwAcKtK8OS", "w7XCnj4VwqXCug/CqX7DnsO8w5w=", "wowzEsOewo4=", "O8O9OsOZOg==", "wqjDnj8RwrrDsw/DrCnDkMOjw5wYwrjDuUfChE3CtMKIw7AxelBfwpQTw4ZXw73Dtw7DkwgTwoI2wozDoQA=", "IcOPw5XDucKt", "rvuOip.gIvbh6JsHMlJfkSk=="];
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
          if (value && str["replace"](/[ruOgIbhJsHMlJfkSk=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662179;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4434, 308, 78848);
var _0x5621 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4434[a];
  if (_0x5621["KCIcfw"] === undefined) {
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
    _0x5621["EZCnWd"] = testcase;
    _0x5621["vLyCnk"] = {};
    _0x5621["KCIcfw"] = !![];
  }
  var A = _0x5621["vLyCnk"][a];
  if (A === undefined) {
    if (_0x5621["SliRDk"] === undefined) {
      _0x5621["SliRDk"] = !![];
    }
    value = _0x5621["EZCnWd"](value, opt_max);
    _0x5621["vLyCnk"][a] = value;
  } else {
    value = A;
  }
  return value;
};
require[_0x5621("0", "O4)5")]([], function(data) {
  var command_codes = {
    "KPngn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  command_codes["KPngn"](data, _0x5621("1", "qihl"));
});
require["ensure"]([], function(addDocObjectToDocMap) {
  var curTagData = {
    "Xqgxh" : _0x5621("2", "*9wE")
  };
  addDocObjectToDocMap(curTagData[_0x5621("3", "c[fJ")]);
}, _0x5621("4", "fSbp"));
it(_0x5621("5", "*9wE"), function() {
  var data = {
    "cWdfE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "KqDdb" : "path",
    "HxEKo" : _0x5621("6", "%Jsu")
  };
  var b = data[_0x5621("7", "%Jsu")](require, "fs");
  var wrappedRequire = data[_0x5621("8", "fSbp")](require, data[_0x5621("9", "JUG[")]);
  var keyNames = JSON[_0x5621("a", "x$lR")](b[_0x5621("b", "q4oC")](wrappedRequire["join"](__dirname, _0x5621("c", "x$lR")), data[_0x5621("d", "H[%1")]));
  expect(keyNames[_0x5621("e", "!Xan")]["usedIds"])["toEqual"]([0, 1, 2]);
});

