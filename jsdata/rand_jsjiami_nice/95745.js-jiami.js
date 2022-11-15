'use strict';
var vip = "vip.v6";
var _0xbe9e = [vip, "w5geVw==", "wq4tw4XDm8O5w7vCqg==", "woPCkBDChAPCrA==", "wrAIU8Orwp/DkQ==", "wohcXDTDnX7CszU=", "wpEMw7rCrcOVwpLCisK4w6Ud", "w7TChzkOecKpJCs=", "YcKTwow5CA==", "wo/CgxvClQPCuQ==", "wpfCq0d/wpA=", "wo7DuSTDrcOY", "ZAos", "JXbCjEo=", "T8OKZhfCrw==", "ellIG2s=", "e8OnZgLChsOpbEA=", "ZyTCmWHDjw==", "w77Cl1M=", "wqTCowDCugU=", "I2VOwolZ", "w5zCjcOIwqpt", "AMO7wr0=", "G8KawrxkwoE=", "OcOJwpAnwrg=", "w40VWSok", "YwEUThg=", "w4zChy4LYA==", "ZgU2", "dE7DksK1PQ==", "wrAIUw==", "OMK4AMK2WyA=", 
"XyA3MMK+", "XnLDscK1EA==", "SMKCw6DDrUI=", "dsKtK0sYw7DCqg==", "VsOOWMOSw4Y=", "woVRCCvDgw==", "wpLChGzCi38=", "wr4lw4PDjcOtw7PCrsOVwo3DkA==", "wpbChwHCpAfCrUZ7wobCsnM=", "w6bDk8OYw6rDj8OUY8O/aSw=", "w6LDnnTDogUkwqvCvg==", "FMKlTsOAw5ZUIiLDrCXCn8O/Rg==", "TMKnKkwZwrfDrsOvw4/DssKS", "w6jCsgYU", "wrs0w4XDgcOx", "TXfDlsKw", "w7XCjT7DkTbDnMKdHsKd", "wr9dw6c=", "wo9kZQ==", "ZiDDsw==", "w7rDjn8=", "OCUe", "Vjkk", "XsKxwpM=", "VMO6w5Q=", "ylvip.zvXTG6deJRMjfafKL=="];
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
          if (value && str["replace"](/[ylzXTGdeJRMjfafKL=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662416;
  };
  return fn(++count, long) >> count ^ long;
})(_0xbe9e, 210, 53760);
var _0x3309 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0xbe9e[c];
  if (_0x3309["SDZJuj"] === undefined) {
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
    _0x3309["txYBlu"] = testcase;
    _0x3309["bTPveU"] = {};
    _0x3309["SDZJuj"] = !![];
  }
  var e = _0x3309["bTPveU"][c];
  if (e === undefined) {
    if (_0x3309["zChgii"] === undefined) {
      _0x3309["zChgii"] = !![];
    }
    x = _0x3309["txYBlu"](x, alpha);
    _0x3309["bTPveU"][c] = x;
  } else {
    x = e;
  }
  return x;
};
jQuery(function(canCreateDiscussions) {
  var _0x39a501 = {
    "QMiCJ" : "Lukk",
    "Rvpyo" : _0x3309("0", "9LME"),
    "gelwp" : _0x3309("1", "c*oU"),
    "Ehepd" : _0x3309("2", "Koj("),
    "HRZQN" : _0x3309("3", "jsTz"),
    "PHspD" : _0x3309("4", "Ag8T"),
    "PKkWp" : _0x3309("5", "E!nA"),
    "oTQuo" : "oktober",
    "CoxuG" : "jan",
    "AAuZg" : _0x3309("6", "@EqQ"),
    "OKuqR" : _0x3309("7", "e&%#"),
    "cmeyR" : _0x3309("8", "SyOD"),
    "WjRzz" : _0x3309("9", "LT5b"),
    "HNJNC" : _0x3309("a", "qKSR"),
    "XGJKH" : _0x3309("b", "pGf["),
    "BWNKi" : _0x3309("c", "Q#Sc"),
    "ZSDzj" : _0x3309("d", "Ag8T"),
    "Jeplv" : _0x3309("e", "^44A"),
    "SLhlI" : "tor",
    "VKrBL" : "mandag",
    "ypKld" : _0x3309("f", "jsTz"),
    "nDJtG" : "onsdag",
    "dHnSR" : _0x3309("10", "t6mO"),
    "iizrs" : _0x3309("11", "iO8B"),
    "tqChe" : "Uke",
    "FbMyf" : _0x3309("12", "k1na")
  };
  canCreateDiscussions[_0x3309("13", "dT8U")][_0x3309("14", "p]9v")]["no"] = {
    "closeText" : _0x39a501[_0x3309("15", "Q#Sc")],
    "prevText" : _0x39a501["Rvpyo"],
    "nextText" : _0x39a501["gelwp"],
    "currentText" : "I dag",
    "monthNames" : [_0x3309("16", "t6mO"), "februar", _0x39a501[_0x3309("17", "@XR7")], _0x39a501[_0x3309("18", "cR3S")], _0x3309("19", "*!G["), _0x3309("1a", "Dln3"), _0x39a501[_0x3309("1b", "5Wy)")], "august", _0x39a501["PKkWp"], _0x39a501[_0x3309("1c", "GCHF")], "november", _0x3309("1d", "5Wy)")],
    "monthNamesShort" : [_0x39a501[_0x3309("1e", "IU*#")], _0x3309("1f", "Y35j"), _0x39a501[_0x3309("20", "t6mO")], "apr", _0x39a501[_0x3309("21", "VjDb")], _0x39a501[_0x3309("22", "PcQ7")], _0x39a501["WjRzz"], _0x3309("23", "e%&B"), _0x39a501[_0x3309("24", "oFkw")], _0x39a501[_0x3309("25", "e%&B")], _0x39a501[_0x3309("26", "QEEp")], "des"],
    "dayNamesShort" : [_0x39a501[_0x3309("27", "pGf[")], "man", _0x39a501[_0x3309("28", "p]9v")], _0x3309("29", "*!G["), _0x39a501[_0x3309("2a", "Ag8T")], "fre", _0x3309("2b", "iO8B")],
    "dayNames" : [_0x3309("2c", "qKSR"), _0x39a501[_0x3309("2d", "*!G[")], _0x39a501[_0x3309("2e", "Ag8T")], _0x39a501[_0x3309("2f", "mRUI")], _0x3309("30", "c*oU"), _0x39a501[_0x3309("31", "9LME")], _0x39a501[_0x3309("32", "k1na")]],
    "dayNamesMin" : ["s\u00f8", "ma", "ti", "on", "to", "fr", "l\u00f8"],
    "weekHeader" : _0x39a501["tqChe"],
    "dateFormat" : _0x39a501[_0x3309("33", "Kei2")],
    "firstDay" : 1,
    "isRTL" : ![],
    "showMonthAfterYear" : ![],
    "yearSuffix" : ""
  };
  canCreateDiscussions[_0x3309("34", "jsTz")][_0x3309("35", "t6mO")](canCreateDiscussions[_0x3309("36", "8dBR")][_0x3309("37", "LT5b")]["no"]);
});

