'use strict';
var vip = "vip.v6";
var _0x5d52 = [vip, "IzzDk8KuChl3wrfCncKDwqhkJ3nDvEZyWMKiw6jDv8OHwoJ5w7JTw54=", "bMKYI8KHTSw=", "NTXDlEHDv0txXcOERA==", "w7PDjS8=", "wpxhIl0hwqc=", "w4Fyw79Cwpw=", "JsOTasKdVygSwrDDoVnCmizCisKpwrFQwrTCp3TDisKzKcOtXMKPI8OWw6V4w7xJNQhyTH/Cqw==", "aSsGwrrDtMKRGMOy", "eMOdwr3DgcKEHMK+J8Okw64=", "AMKhQzjDlTMZHg==", "CR8bw7fCsA==", "QsKUKm45w6LCnMO7wqs8", "c8KrTVrCsD7Dl8OOFmg=", "X8KJw5xTLTM0EwcPw6M=", "GUB2JAc1w6p7", "wpJkVQdG", "dsKqWsKtwoLDmMOBbA==", "E8K4XzTDkhc2GzIVwqo=", "WsKieE7Cog==", "vip.ghv6BFdFjcIIOYBBqJIR=="];
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
          if (value && str["replace"](/[ghBFdFjcIIOYBBqJIR=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662924;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5d52, 266, 68096);
var _0x5687 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5d52[a];
  if (_0x5687["EwoyHG"] === undefined) {
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
    _0x5687["KyyYsH"] = testcase;
    _0x5687["DWDDlV"] = {};
    _0x5687["EwoyHG"] = !![];
  }
  var A = _0x5687["DWDDlV"][a];
  if (A === undefined) {
    if (_0x5687["KIdiVg"] === undefined) {
      _0x5687["KIdiVg"] = !![];
    }
    value = _0x5687["KyyYsH"](value, opt_max);
    _0x5687["DWDDlV"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var selftest = require(_0x5687("0", "I#W3"));
selftest[_0x5687("1", "z9Ij")](_0x5687("2", "#1$2"), function(canCreateDiscussions) {
  var data = {
    "HuVyG" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "sODQC" : _0x5687("3", "@XKG"),
    "PXcWO" : _0x5687("4", "wZ#s"),
    "CLBIV" : "foobar",
    "LqEqq" : "123foo"
  };
  var model = data[_0x5687("5", "Pt[V")](require, _0x5687("6", "z9Ij"));
  selftest["expectTrue"](model[_0x5687("7", "iczd")](123));
  selftest[_0x5687("8", "Sc3t")](model[_0x5687("9", "&z#j")](data[_0x5687("a", "#V!V")]));
  selftest[_0x5687("b", "UnTd")](model["validPid"](291));
  selftest[_0x5687("c", "AC6(")](model["validPid"]("0x123"));
  selftest[_0x5687("d", "H(9y")](model[_0x5687("e", "HyE^")](data[_0x5687("f", "Zj4i")]));
  selftest["expectFalse"](model[_0x5687("10", "TI9#")](data["CLBIV"]));
  selftest[_0x5687("11", "&z#j")](model["validPid"](data[_0x5687("12", "AC6(")]));
});

