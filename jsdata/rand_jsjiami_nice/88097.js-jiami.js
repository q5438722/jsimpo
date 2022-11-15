'use strict';
var __decorate = "vip.v6";
var visits = [__decorate, "e8K6w4/DjyM=", "Q0fCqxt1", "w5vCucOEwrzCgQ==", "Qk7DucO0Tw==", "LsKaeVrClMKrG8OkDg==", "OmPCmcONHMOyCQ==", "PEXCm1low5nDsybDlhjDvFcFSBXCimxDRMOwwoLDm8O3wrxnVcOAOFfCtDEEDcObfMK1w5UsBsO5FzowPT/DmV8=", "NHPDo1p6w6w=", "w4rClzrCuBkPw5PDqcOuFx7DmzUdwqnCvcKew6nDscKhHFXCs8OGwq9ZFjbCj8K0w6xYwpQ=", "O3TCm8OHAA==", "e8O3bm5C", "IkfChjpK", "OTTDmTXDjw==", "wq7DuMKHw43Ck1FjAMKxwrTCihYlW8O7Qk0nw6HDgcKPw4TCmjnCgcKKYgcQwqPDl1TCnsODFsK8TsOdw6rDq0Y=", "wrbDgsK7wpvCpw==", "woYmIsOuQg==", 
"w5sIw6bDrMOQ", "wrfDtcKRwp7Ck0Rh", "XC4jGAM6wpZ/XygxL3E=", "DcKawpnDkcOx", "XsO8XmhtG8KTwowI", "wrQKwrEvw4I=", "AFDChwJlw47Dpg==", "EsKffg7Cg8OqD8OpEzY3w6bDjn/Ds0gxKsKoZnPDunA=", "vip.fv6rrRVLPsJleFPJWLxI=="];
(function(data, count, size) {
  var fn = function(script, type, href, node, css) {
    type = type >> 8;
    css = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        node = data[str]();
        if (type === script) {
          type = node;
          href = data[css + "p"]();
        } else {
          if (type && href["replace"](/[frrRVLPsJleFPJWLxI=]/g, "") === type) {
            data[method](node);
          }
        }
      }
      data[method](data[str]());
    }
    return 662334;
  };
  return fn(++count, size) >> count ^ size;
})(visits, 292, 74752);
var g = function(key, n) {
  key = ~~"0x"["concat"](key);
  var v = visits[key];
  if (g["HwqKGp"] === undefined) {
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
    g["iDsMeF"] = testcase;
    g["vroTmt"] = {};
    g["HwqKGp"] = !![];
  }
  var newVal = g["vroTmt"][key];
  if (newVal === undefined) {
    if (g["WCtPmr"] === undefined) {
      g["WCtPmr"] = !![];
    }
    v = g["iDsMeF"](v, n);
    g["vroTmt"][key] = v;
  } else {
    v = newVal;
  }
  return v;
};
import{
  ensureOnlyValidVersions as ensureOnlyValidVersions
}from "../utils/utils.js";
import _0x483305 from "../utils/buildmessage.js";
import _0x4f7086 from "./npm-discards";
const bBody = require;
class _MockPopStateEvent {
  constructor() {
    this[g("0", "VrH*")] = new _0x4f7086;
    this["_dependencies"] = null;
  }
  [g("1", "5qHL")](val) {
    var c = {
      "zoYuL" : g("2", "iLM$"),
      "PrpMF" : function(state, undefinedAttr) {
        return state !== undefinedAttr;
      },
      "kptiM" : g("3", "$or0"),
      "qsTAl" : function(index, numberRemoved) {
        return index + numberRemoved;
      },
      "lRYvU" : g("4", "n)UX"),
      "jukIM" : function(require, load, callback) {
        return require(load, callback);
      }
    };
    if (this["_dependencies"]) {
      _0x483305[g("5", "5qHL")](c[g("6", "tZKM")], {
        "useMyCaller" : !![]
      });
      return;
    }
    if (c[g("7", "iLM$")](typeof val, c["kptiM"])) {
      _0x483305[g("8", "EvsV")](c["qsTAl"](g("9", "lss["), c[g("a", "lss[")]), {
        "useMyCaller" : !![]
      });
      return;
    }
    try {
      c[g("b", "ia]n")](ensureOnlyValidVersions, val, {
        "forCordova" : ![]
      });
    } catch (byDate) {
      _0x483305[g("c", "hdp%")](byDate[g("d", "lss[")], {
        "useMyCaller" : !![],
        "downcase" : !![]
      });
      return;
    }
    this[g("e", "(YCE")] = val;
  }
  [g("f", "wBtu")](mmCoreSplitViewBlock) {
    this[g("10", "tZKM")][g("11", "(!uZ")](mmCoreSplitViewBlock);
  }
  [g("12", "iLM$")](val) {
    var c = {
      "RooYO" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "NdHcW" : function(index, numberRemoved) {
        return index + numberRemoved;
      },
      "oYgwD" : g("13", "VrH*"),
      "gsqXI" : "'. In package.js, Npm.require can only find built-in modules."
    };
    try {
      return c[g("14", "HRKW")](bBody, val);
    } catch (_0x475b81) {
      _0x483305["error"](c[g("15", "4CY1")](c["NdHcW"](c[g("16", "[Vx5")], val), c[g("17", "RL^D")]), {
        "useMyCaller" : !![]
      });
    }
  }
}
export{
  _MockPopStateEvent as PackageNpm
};

