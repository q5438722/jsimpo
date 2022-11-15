'use strict';
var vip = "vip.v6";
var _0x2a8b = [vip, "w4DCtMObWT0=", "wqllwqrDpsKpwrcXw4NrdsOBwqEO", "w6bDrcKuYsOg", "wqt7JlwCw7gLw7nDmsK6cTA=", "wq1URn4T", "M1XDn0o=", "LMKiwos3w5bDsg==", "PcKHaUob", "w4k2w4UwwpU=", "wrApw5F1wqg=", "JcOZDsKrwr/DhcOIwrbCjw==", "R8O8dDPCmg==", "VsKMR8O/w4ptwpTDgMKyR8K2w5zCt8O3S8Kh", "Z8Ojwp0vw5TDoxVNwq0=", "wp7ClwR9Rw==", "w5kvMygr", "w5s2UsKPYA==", "QMKKVsO0w4cpwo3DjMKi", "OMKwblkVwrEawr3DmV/DusKDTg==", "wr5Kwr9Teg==", "wpdjw6zDtQQWwpDClMKDw7nCukw=", "QmAIwpMv", "ccKvw54a", "worDuVvCszI=", "w652wobCvTBf", 
"V8KswoB8w5U=", "w7Y2ecK2SA==", "BkLDl2N5", "w5LDmsKbQ8Oj", "WsO7dSXCk8K0TsKPesOYG0rDh8O3wpBVw6ESRMKyLhhSDSfDt3Rfw4FSAQA=", "wp3Dq8OSXTlkwoMZw7U=", "fcK5Oldcwp5Mwq3Cjg==", "vip.uv6oQDaPZCxeLaNuSAsy=="];
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
          if (value && str["replace"](/[uoQDaPZCxeLaNuSAsy=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662157;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2a8b, 362, 92672);
var _0x3a6d = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x2a8b[c];
  if (_0x3a6d["mnTzUj"] === undefined) {
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
    _0x3a6d["bvpjVV"] = testcase;
    _0x3a6d["bRHEaq"] = {};
    _0x3a6d["mnTzUj"] = !![];
  }
  var e = _0x3a6d["bRHEaq"][c];
  if (e === undefined) {
    if (_0x3a6d["XwePTZ"] === undefined) {
      _0x3a6d["XwePTZ"] = !![];
    }
    x = _0x3a6d["bvpjVV"](x, alpha);
    _0x3a6d["bRHEaq"][c] = x;
  } else {
    x = e;
  }
  return x;
};
it("should load script with nonce 'nonce1234'", function(b) {
  var a = {
    "eJVPg" : "6|1|5|3|2|4|0",
    "ijxWr" : function(saveNotifs) {
      return saveNotifs();
    },
    "JCGYR" : _0x3a6d("0", "uHuW"),
    "aEGmH" : 'script[src="js/chunk-with-nonce.web.js"]',
    "ewboo" : _0x3a6d("1", ")IRh"),
    "AxJLl" : _0x3a6d("2", "vrUH"),
    "RQOXm" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "hwAgR" : _0x3a6d("3", "5p(M")
  };
  var callbackVals = a[_0x3a6d("4", "QgSO")][_0x3a6d("5", "9*hu")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        a[_0x3a6d("6", "SWik")](b);
        continue;
      case "1":
        __webpack_nonce__ = a["JCGYR"];
        continue;
      case "2":
        if (typeof document !== _0x3a6d("7", "vrUH")) {
          var c = document[_0x3a6d("8", "15ug")](a[_0x3a6d("9", "x(PJ")]);
          var button2Component = c["nonce"] || c[_0x3a6d("a", "Iem[")](a[_0x3a6d("b", "W])x")]);
          expect(button2Component)[_0x3a6d("c", "52e*")](a[_0x3a6d("d", "o4!8")]);
        }
        continue;
      case "3":
        __webpack_nonce__ = undefined;
        continue;
      case "4":
        __webpack_nonce__ = undefined;
        continue;
      case "5":
        require[_0x3a6d("e", "*Cyn")]([], function(data) {
          container[_0x3a6d("f", "bWcI")](data, container[_0x3a6d("10", "SWik")]);
        }, a[_0x3a6d("11", "o)GK")]);
        continue;
      case "6":
        var container = {
          "OvUue" : function(b, pt) {
            return a[_0x3a6d("12", "4*WZ")](b, pt);
          },
          "DjSnZ" : a["hwAgR"]
        };
        continue;
    }
    break;
  }
});
it(_0x3a6d("13", ")IRh"), function(b) {
  var a = {
    "pTFHR" : function(value, joiner) {
      return value !== joiner;
    },
    "awxru" : "undefined",
    "ffzyn" : 'script[src="js/chunk-without-nonce.web.js"]',
    "mbBIb" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "qLiYd" : function(saveNotifs) {
      return saveNotifs();
    },
    "bMBwn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "SHHFz" : _0x3a6d("14", "bQ!F")
  };
  var callbackVals = _0x3a6d("15", "15ug")[_0x3a6d("16", "bQ!F")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        if (a["pTFHR"](typeof document, a["awxru"])) {
          var _0x4a4def = document[_0x3a6d("17", "$!v5")](a[_0x3a6d("18", "4*WZ")]);
          a["mbBIb"](expect, _0x4a4def[_0x3a6d("19", "O&bx")](_0x3a6d("1a", "VmE4")))[_0x3a6d("1b", "o)GK")](![]);
        }
        continue;
      case "1":
        require[_0x3a6d("1c", "5p(M")]([], function(data) {
          command_codes[_0x3a6d("1d", "15ug")](data, command_codes[_0x3a6d("1e", "POv7")]);
        }, "chunk-without-nonce");
        continue;
      case "2":
        a[_0x3a6d("1f", "pSlR")](b);
        continue;
      case "3":
        __webpack_nonce__ = undefined;
        continue;
      case "4":
        var command_codes = {
          "tBbaw" : function(b, pt) {
            return a["bMBwn"](b, pt);
          },
          "zaDiF" : a["SHHFz"]
        };
        continue;
    }
    break;
  }
});

