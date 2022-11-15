'use strict';
var get = "vip.v6";
var list = [get, "w4/DqUnCh8KXMWXDojJsw7Zy", "wo5AakNzUg==", "Hx5vGAEQRMKnUA==", "xqPCqMOOwoLDnUsR", "wosvwrvHlcOkwpfCkV9+", "w5jDhcOMZMKr", "VlfCj2LDlnR2", "W8K8wrslwo3CqA==", "YcKZwpnDjcK5ZQ==", "A8OcFcOwaQ==", "dkHDrkduXRrCmCITPGbCg0bDkcKyw4DClQsJwrVEwqPDizbCjBPDhhLCp8aUC8KEccOGSFh0acKGwpTCp8ODYsOXVT7Dr8Kkw5vDt8KTw4/Dt0zCmRA0FjLDhxUBwprDpgt4wr3CssKfDcORwqrDu8O0O3jDnl/FuTfClD7CgB4=", "xb1zwqPCo8OQw6o9E8OEDsOHw6DDqcOsw5RYxZHDuWTCtceIDMKuBWtAaA==", "SQojHBw=", "w5scUcOhfA==", "w7UnIsKGw48=", "MsKuVsO2w6nCgE/DrQ==", 
"Y8Ofw7nCpVJKwpQqcsO5", "OsO4w5Ybwq7CjMKbF8KSw7fDrA==", "OsO4w5Ybwq7CjMKbF8KSw7fDrGt7w7NIKDI=", "W8ONw5UEERA4LgJnwqVYwrbDlgkww5XCuy1tw6zDucOh", "w47igLTCssO7wo8=", "w6wCwr08RyA=", "vPip.v6FKjdwrbYGclayJN=="];
(function(map, count, long) {
  var fn = function(to, value, str, e, url) {
    value = value >> 8;
    url = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        e = map[str]();
        if (value === to) {
          value = e;
          str = map[url + "p"]();
        } else {
          if (value && str["replace"](/[PFKjdwrbYGclayJN=]/g, "") === value) {
            map[method](e);
          }
        }
      }
      map[method](map[str]());
    }
    return 661996;
  };
  return fn(++count, long) >> count ^ long;
})(list, 207, 52992);
var pluralize = function(x, s) {
  x = ~~"0x"["concat"](x);
  var value = list[x];
  if (pluralize["CcRHcn"] === undefined) {
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
    pluralize["TeNNFR"] = testcase;
    pluralize["nLrjRl"] = {};
    pluralize["CcRHcn"] = !![];
  }
  var left = pluralize["nLrjRl"][x];
  if (left === undefined) {
    if (pluralize["sulzjF"] === undefined) {
      pluralize["sulzjF"] = !![];
    }
    value = pluralize["TeNNFR"](value, s);
    pluralize["nLrjRl"][x] = value;
  } else {
    value = left;
  }
  return value;
};
import _0x332396 from "dayjs";
const ModelSet = {
  "name" : "mt",
  "weekdays" : "Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt"[pluralize("0", "w30w")]("_"),
  "months" : pluralize("1", "MjJd")["split"]("_"),
  "weekStart" : 1,
  "weekdaysShort" : pluralize("2", "qMfM")[pluralize("3", "EnD@")]("_"),
  "monthsShort" : "Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b"["split"]("_"),
  "weekdaysMin" : "\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si"[pluralize("4", "s*[H")]("_"),
  "ordinal" : (number) => {
    return number;
  },
  "formats" : {
    "LT" : pluralize("5", "FoVR"),
    "LTS" : pluralize("6", "bx(t"),
    "L" : pluralize("7", "i1YC"),
    "LL" : pluralize("8", "lwDY"),
    "LLL" : pluralize("9", "lwDY"),
    "LLLL" : pluralize("a", "Fzz1")
  },
  "relativeTime" : {
    "future" : pluralize("b", "1Yuh"),
    "past" : pluralize("c", "QQWp"),
    "s" : pluralize("d", "ht2K"),
    "m" : pluralize("e", "[oL!"),
    "mm" : pluralize("f", "EnD@"),
    "h" : "sieg\u0127a",
    "hh" : "%d sieg\u0127at",
    "d" : pluralize("10", "gLm%"),
    "dd" : pluralize("11", ")Mc5"),
    "M" : pluralize("12", "U8jc"),
    "MM" : pluralize("13", "]@zi"),
    "y" : "sena",
    "yy" : pluralize("14", "lwDY")
  }
};
_0x332396[pluralize("15", "]RsZ")](ModelSet, null, !![]);
export default ModelSet;

