'use strict';
var path = "vip.v6";
var a = [path, "XcKiQ1Ib", "wpzDoATCuV4=", "wrPDkD44wpRAw7DChBzCusKMH8KNw77DhcOkwrQ/w7wrwqdTw43DtkTDi8Kjw7DCsGs6RsO/wokxXsKm", "w7TDum56w5Q=", "wp3Cl8Ohw5p0V8OiPTXDi8OYw7lgw5rDosOyAVkcwpdZZ2I8w517eMOWw6ZqfhHCtcKm", "wqNSHsK0wpbDlD93w4luwrfDiHNYwq3CkFLDrmFyScKSCsObUsKRwqTCmT1aw5jDmi/CrcOTw7vCv0BEw7g6WcKOw60E", "D8K3w7cLw7A=", "M8KTw7sIw5dXwrkKCTDDnA==", "wpBbwoFAwro=", "w73Cu8KPw6nCig==", "wr/CqMKHHS8=", "acKUPTRP", "fHDDv8OyeQ==", "wqtvwrc8fw==", "XMKlHAVoTsO5eQnDvMKd", "b20zN8KmwqMRFXpMBw==", "OsKww7LDswA=", 
"w7HClDBmwosNw4nDhhXDrsKc", "wprCt8KaFBE=", "XlHDgcO0fG0bwoUKw6XDjg==", "NEwIGMOq", "BF1PGsOCB0I6wqLCqmY=", "RcKHZEPDvm/CqsOtw755aA==", "w6vCpQ95wo0=", "G0fCsQ==", "w613UcOGw4Y=", "Il/Co8Kuw5Y=", "HsKVNMOqw7NNwqrCn8KLPCXCgMKzw7UQ", "w67Du35Ww4HCjmpSwoHChzg=", "w6rCnMK2w5LCvA==", "F8KCw4Yww4cOVnBOLiQ=", "JMKbREzDhw==", "N8KKTsOqwrVcDg7CtcO5w60=", "wonCuMKaNBQ=", "wp3CmsOAfF4=", "CcKXw4Q=", "wpDDlcO1", "HMKpflLDnA==", "NGs1bsOyQsKoWA3CkcOdw4AgO8KX", "wqNDKMKMwo8=", "aj3DuhLDtA==", "XsKFSmEC", "wrFMwrsjSw==", 
"LQnDosO5Fg==", "EMOVZQ==", "CMOLwrPCrsOR", "vJip.WcDLnfqv6KzYqOTxMSF=="];
(function(obj, count, version) {
  var update = function(target, value, str, ctx, a) {
    value = value >> 8;
    a = "po";
    var str = "shift";
    var method = "push";
    if (value < target) {
      for (; --target;) {
        ctx = obj[str]();
        if (value === target) {
          value = ctx;
          str = obj[a + "p"]();
        } else {
          if (value && str["replace"](/[JWcDLnfqKzYqOTxMSF=]/g, "") === value) {
            obj[method](ctx);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662860;
  };
  return update(++count, version) >> count ^ version;
})(a, 367, 93952);
var format = function(c, x) {
  c = ~~"0x"["concat"](c);
  var i = a[c];
  if (format["EXuMbf"] === undefined) {
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
    format["imHBAz"] = testcase;
    format["HQdKSX"] = {};
    format["EXuMbf"] = !![];
  }
  var v = format["HQdKSX"][c];
  if (v === undefined) {
    if (format["kNToqT"] === undefined) {
      format["kNToqT"] = !![];
    }
    i = format["imHBAz"](i, x);
    format["HQdKSX"][c] = i;
  } else {
    i = v;
  }
  return i;
};
import _0x370acb from "assert";
import _0xa1b58f from "lodash";
import{
  set as set,
  falsey as falsey,
  stubFalse as stubFalse,
  args as args,
  slice as slice,
  symbol as symbol,
  weakSet as weakSet,
  realm as realm
}from "./utils.js";
import _0x539a56 from "../isSet.js";
describe(format("0", "523U"), function() {
  var c = {
    "TOKjq" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "FESXD" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Xsadd" : function(saveNotifs) {
      return saveNotifs();
    },
    "Xicso" : function(type, name) {
      return type === name;
    },
    "QULof" : format("1", "xp#0"),
    "iMJxx" : format("2", "Vl0u"),
    "JuyjK" : format("3", "cZOH"),
    "jjSqL" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "jjGAT" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "wAmWc" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "TybEI" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "otpLt" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "bjjHn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "yeGaQ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "drNmT" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "snFgL" : format("4", "z07t"),
    "RfjHR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "xSIwB" : function(require, load, callback) {
      return require(load, callback);
    },
    "kACRT" : "should return `true` for sets",
    "OuZHj" : format("5", "*oUQ"),
    "kVasG" : "should work for objects with a non-function `constructor` (test in IE 11)",
    "syYMu" : format("6", "hsyG")
  };
  c["xSIwB"](it, c[format("7", "*s^E")], function() {
    if (Set) {
      _0x370acb[format("8", "e[$i")](c[format("9", "5]PV")](_0x539a56, set), !![]);
    }
  });
  c[format("a", "Xx49")](it, c[format("b", "X4Uc")], function() {
    var rng = {
      "PEgbf" : function(row, val) {
        return c["FESXD"](row, val);
      },
      "FlgqE" : function(row, val) {
        return c[format("c", "Azn!")](row, val);
      },
      "VwbdY" : function(aBody) {
        return c["Xsadd"](aBody);
      }
    };
    if (c["Xicso"](c[format("d", "Z5Yx")], c[format("e", "9mz5")])) {
      _0x370acb[format("f", "Azn!")](rng["PEgbf"](_0x539a56, set), !![]);
    } else {
      var callbackVals = c["JuyjK"]["split"]("|");
      var callbackCount = 0;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            _0x370acb[format("10", "Ydln")](c[format("11", "3Y[w")](_0x539a56, "a"), ![]);
            continue;
          case "1":
            _0x370acb["strictEqual"](_0x539a56(weakSet), ![]);
            continue;
          case "2":
            _0x370acb[format("12", "cZOH")](c["jjSqL"](_0x539a56, _), ![]);
            continue;
          case "3":
            _0x370acb["strictEqual"](c[format("13", "X4Uc")](_0x539a56, args), ![]);
            continue;
          case "4":
            _0x370acb[format("14", "Z5Yx")](c[format("15", "dFQk")](_0x539a56, !![]), ![]);
            continue;
          case "5":
            _0x370acb[format("16", "TNJ#")](_0x539a56([1, 2, 3]), ![]);
            continue;
          case "6":
            _0x370acb[format("17", "ESyG")](c[format("18", "#xri")](_0x539a56, slice), ![]);
            continue;
          case "7":
            var actual = _0xa1b58f[format("19", "I2&P")](falsey, function(offset, is_big_endian) {
              return is_big_endian ? rng["FlgqE"](_0x539a56, offset) : rng[format("1a", "pl3z")](_0x539a56);
            });
            continue;
          case "8":
            _0x370acb["strictEqual"](c[format("1b", "I2&P")](_0x539a56, 1), ![]);
            continue;
          case "9":
            _0x370acb[format("1c", "lNpH")](actual, expected);
            continue;
          case "10":
            var expected = _0xa1b58f[format("19", "I2&P")](falsey, stubFalse);
            continue;
          case "11":
            _0x370acb[format("1d", "z07t")](c[format("1e", "Xx49")](_0x539a56, {
              "a" : 1
            }), ![]);
            continue;
          case "12":
            _0x370acb[format("1f", "*s^E")](c[format("20", "58(0")](_0x539a56, symbol), ![]);
            continue;
          case "13":
            _0x370acb["strictEqual"](c["bjjHn"](_0x539a56, /x/), ![]);
            continue;
          case "14":
            _0x370acb["strictEqual"](_0x539a56(new Date), ![]);
            continue;
          case "15":
            _0x370acb[format("21", "gf3W")](c[format("22", "X4Uc")](_0x539a56, new Error), ![]);
            continue;
        }
        break;
      }
    }
  });
  it(c[format("23", "CEOM")], function() {
    var _upServersSorted = {
      "WFJRo" : function(row, val) {
        return c["yeGaQ"](row, val);
      }
    };
    var values = [![], !![]];
    var startTotals = _0xa1b58f[format("24", "*s^E")](values, stubFalse);
    var startAlerts = _0xa1b58f[format("25", "[FFD")](values, function(ColorTheme) {
      return _upServersSorted[format("26", "58(0")](_0x539a56, {
        "constructor" : ColorTheme
      });
    });
    _0x370acb[format("27", "nL%Y")](startAlerts, startTotals);
  });
  it(c[format("28", "hsyG")], function() {
    var wzcnBH = {
      "SZvrS" : function(row, val) {
        return c[format("29", "wmpR")](row, val);
      }
    };
    if (format("2a", "dVs&") !== c[format("2b", "9mz5")]) {
      if (realm["set"]) {
        _0x370acb[format("21", "gf3W")](c[format("2c", "xRfz")](_0x539a56, realm[format("2d", "RvlQ")]), !![]);
      }
    } else {
      return wzcnBH["SZvrS"](_0x539a56, {
        "constructor" : value
      });
    }
  });
});

