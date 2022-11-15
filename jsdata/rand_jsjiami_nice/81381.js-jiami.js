'use strict';
var vip = "vip.v6";
var _0x2271 = [vip, "e2UDV8K5w6sswr5JwocgJkTCkBXDuQ==", "P1jCgcK0wp11U8KTE2hzRQELd8OFw7Iwdy7ChMOiPxzCqyXCtMK4wprDmj7CjQ==", "AXc5w6LDlxPDvMKPNXU=", "GWHDg8K4Ug==", "TVRoC2UE", "woFXXcOxESM=", "KUEt", "w7jCsDvCm8Ofw5vDmQ==", "w6kWWVQ7wp8Qwq0lacOzEcKsGMONw4/CjnxGEQXDj8KFw7NRwok=", "dsOCasO3TcOmwqEFBwHClVhm", "w6xXJjF/", "dMK+wrbDllPDlA==", "bUsQQMKQ", "IA4cIsO4SBo=", "w6IjwopYw6DDlTcYw4A1woXCqhEmPl3Cgmo0", "woZwfcK8wrRIwoZNwoBycRQ5FsOgwpx6wrJqWlTDtXPDiWvCksKSHsKNw6jCvizCiWzCqllh", "PGHDqMOVIHlyBAIyPsODw6s=", 
"XnASRg==", "Bk/DtmjDosOlV8OPw7lTwp4Z", "eMOswqDDsAvCr8KPwppx", "PD5+aSDCog==", "w4MxwpzDjQDDhA==", "w53CvDnCjcOKw4fDhcOmEhZ+K8K4cMO1", "FBwbIcKYw6DCkcKGwrgOwpNcLhkQwoo1wr7DkMKUPzMfwqDDgl8sG8Ojw7JFw74=", "QTvDosKdasOddFU=", "w4BNTMOODGNpwoY9wqDDgMO8w5M4w4w5Pg==", "NveipeQ.qvZ6EefDsAFOZrN=="];
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
          if (value && str["replace"](/[NeeQqZEefDsAFOZrN=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662277;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2271, 280, 71680);
var _0x3de5 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x2271[c];
  if (_0x3de5["wSlEXk"] === undefined) {
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
    _0x3de5["PhLVGK"] = testcase;
    _0x3de5["kmtlcR"] = {};
    _0x3de5["wSlEXk"] = !![];
  }
  var e = _0x3de5["kmtlcR"][c];
  if (e === undefined) {
    if (_0x3de5["RxyZUP"] === undefined) {
      _0x3de5["RxyZUP"] = !![];
    }
    x = _0x3de5["PhLVGK"](x, alpha);
    _0x3de5["kmtlcR"][c] = x;
  } else {
    x = e;
  }
  return x;
};
const _ = require(_0x3de5("0", "42uQ"));
const crypto = require(_0x3de5("1", "U#%j"));
const debug = require(_0x3de5("2", "FNu0"))(_0x3de5("3", "#tw4"));
const SettingsLoader = require(_0x3de5("4", "UHd5"));
const ensureSettingsFiles = require(_0x3de5("5", "LoaH"));
const errors = require(_0x3de5("6", "EldU"));
const defaultHashes = {
  "routes" : _0x3de5("7", "F0*R")
};
const calculateHash = (callback) => {
  var _0x44b46f = {
    "vuMJY" : "md5",
    "xoMBi" : "binary"
  };
  return crypto[_0x3de5("8", "09kP")](_0x44b46f[_0x3de5("9", "UHd5")])[_0x3de5("a", "aWwu")](callback, _0x44b46f["xoMBi"])[_0x3de5("b", "ZOt%")](_0x3de5("c", "X79]"));
};
module[_0x3de5("d", "FNu0")] = {
  "init" : function() {
    var opfilter = {
      "fhEbZ" : _0x3de5("e", "itO4"),
      "FDlAu" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    const range = this[_0x3de5("f", "XP]2")]();
    debug(opfilter["fhEbZ"], range);
    return opfilter[_0x3de5("10", "SmcF")](ensureSettingsFiles, range);
  },
  "knownSettings" : function knownSettings() {
    var _0x911a78 = {
      "RJrpo" : _0x3de5("11", "rT$6")
    };
    return [_0x911a78["RJrpo"]];
  },
  "get" : function getNewOptionsList(value) {
    var harderTypes = {
      "VZanN" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      }
    };
    const item = this["knownSettings"]();
    if (!value || harderTypes[_0x3de5("12", "EldU")](_[_0x3de5("13", "&jf]")](item, value), 0)) {
      throw new (errors[_0x3de5("14", "%fYJ")])({
        "message" : _0x3de5("15", "hS&l") + value + "'.",
        "help" : "Please use only the supported settings: " + item + "."
      });
    }
    return SettingsLoader(value);
  },
  "getAll" : function MainSectionController() {
    const growingCollection = this[_0x3de5("16", "a*B[")]();
    const boilerplateByArch = {};
    _[_0x3de5("17", "EldU")](growingCollection, function(archName) {
      boilerplateByArch[archName] = SettingsLoader(archName);
    });
    return boilerplateByArch;
  },
  "getDefaulHash" : (ballNumber) => {
    return defaultHashes[ballNumber];
  },
  "getCurrentHash" : async(mmCoreSplitViewBlock) => {
    var Message = {
      "xcCMZ" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    const data = await SettingsLoader[_0x3de5("18", "Ny5j")](mmCoreSplitViewBlock);
    return Message["xcCMZ"](calculateHash, JSON[_0x3de5("19", "WI(t")](data));
  }
};

