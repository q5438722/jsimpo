'use strict';
var alt = "vip.v6";
var attrs = [alt, "eUPChcKOE08=", "wqZyJ8KDwpg=", "FhwrKg==", "wqPDtnQmSnQ1", "AMO0EXZQdcOu", "RmHDl2LCrmhD", "d8KkLFNu", "wppXw7DCoirDlMKuX0dj", "w61xw5TDv8KC", "wpUoDljCsg==", "wqgVKWjCvw==", "w5rDs8KowpXDuQ==", "w4nCmMOAw5Avw50=", "R03Cm8KxNA==", "wrfCpU8TBQ==", "wqxvw6TCuBE=", "w6PDmsKuw6nCp8OIHCpQw7pn", "w5AOw4nDm8OR", "dyDCvMKzwpDDjcKvwqQ=", "wrPCrMOmTcOW", "K8OKfMO9", "GkPDmcK5wpM=", "S8K/wrIawoI=", "woY1HnzDmA==", "wpQ6wrHCn8O1", "wrtFw6jCvkY=", "RcKaOT7Cpg==", "XcK+w7LDq8ON", "w53CvgrCicOz", 
"csKrIiXCoQ==", "HDofw5Rl", "wqHDom/Dkw==", "wrDCp1IgMg==", "UQMew68=", "w7M2FFoM", "Qvitop.v6bTQlZCBRDLZAmm=="];
(function(key, count, long) {
  var fn = function(target, value, str, i, y) {
    value = value >> 8;
    y = "po";
    var SHIFT = "shift";
    var method = "push";
    if (value < target) {
      for (; --target;) {
        i = key[SHIFT]();
        if (value === target) {
          value = i;
          str = key[y + "p"]();
        } else {
          if (value && str["replace"](/[QtobTQlZCBRDLZAmm=]/g, "") === value) {
            key[method](i);
          }
        }
      }
      key[method](key[SHIFT]());
    }
    return 661686;
  };
  return fn(++count, long) >> count ^ long;
})(attrs, 416, 106496);
var fn = function(i, args) {
  i = ~~"0x"["concat"](i);
  var value = attrs[i];
  if (fn["VYcFVf"] === undefined) {
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
    fn["ZGzVUt"] = testcase;
    fn["qpkUxE"] = {};
    fn["VYcFVf"] = !![];
  }
  var newVal = fn["qpkUxE"][i];
  if (newVal === undefined) {
    if (fn["WNVvPX"] === undefined) {
      fn["WNVvPX"] = !![];
    }
    value = fn["ZGzVUt"](value, args);
    fn["qpkUxE"][i] = value;
  } else {
    value = newVal;
  }
  return value;
};
import{
  toLower as toLower
}from "lodash";
const init = (c = "") => {
  var a = {
    "AWRGR" : "bool",
    "yzwKP" : fn("0", "JZeK"),
    "IZjQU" : "decimal",
    "tgMaX" : fn("1", "zR!3"),
    "BZUuX" : "integer",
    "MzlVI" : "date",
    "anrRC" : "datetime",
    "TQssU" : fn("2", "0CvF"),
    "UnKYy" : fn("3", "G#1S"),
    "SVRVd" : "select",
    "PdZjg" : "password",
    "VfNEC" : fn("4", "AwLf"),
    "Qjynd" : "textarea",
    "PVesV" : fn("5", "t4AY"),
    "wQeAG" : "file",
    "Vvcib" : fn("6", "zgeg"),
    "SEEAm" : fn("7", "QIWZ"),
    "ufEjo" : fn("8", "dP5H"),
    "aGxre" : "uid",
    "EcmAt" : function(beforeZero, afterZero) {
      return beforeZero || afterZero;
    }
  };
  switch(toLower(c)) {
    case fn("9", "*hfi"):
      return a[fn("a", "6!J2")];
    case fn("b", "DXOR"):
      return a[fn("c", "@1iK")];
    case a[fn("d", "5zN6")]:
    case a[fn("e", "5zN6")]:
    case a[fn("f", "MaMO")]:
      return fn("10", "Uour");
    case a[fn("11", "AwLf")]:
    case a[fn("12", "zR!3")]:
    case a[fn("13", "DXOR")]:
      return c;
    case a["UnKYy"]:
      return "email";
    case fn("14", "ewxF"):
      return a[fn("15", "RWUF")];
    case a["PdZjg"]:
      return fn("16", "Ny8r");
    case a["VfNEC"]:
      return a[fn("17", "U@EK")];
    case fn("18", "t04J"):
      return a["Qjynd"];
    case a[fn("19", "hpBD")]:
    case a[fn("1a", "oomR")]:
    case fn("1b", "L&zX"):
      return a[fn("1c", "CfOF")];
    case a[fn("1d", "jP$U")]:
      return a[fn("1e", "b(^f")];
    case a["SEEAm"]:
    case a[fn("1f", "(D)C")]:
    case "richtext":
      return "wysiwyg";
    case a[fn("20", "eiil")]:
      return a[fn("21", "b(^f")];
    default:
      return a[fn("22", "u8v1")](c, fn("0", "JZeK"));
  }
};
export default init;

