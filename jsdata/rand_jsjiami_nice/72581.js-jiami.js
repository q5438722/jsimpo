'use strict';
var vip = "vip.v6";
var _0x26d0 = [vip, "dMKpwprCrRM=", "w4wOc8OPwpLCrA==", "wppkEMKm", "DFBWwrQL", "w7PDl2tDwp3CiG4=", "wrTDolHCkjQ=", "w65qwpnCkA==", "TsOPLAPDpnR4", "O8Kfw4TCkk7DmnReKsO8BMOSFMKKwohFw4VGB1M9HBc=", "bjvDo3/Ckg4+LcK/ScOWR8OsHg==", "QyfDpnECA0pYLsKtHMKQwrg4LMOlIMKNBsKVwqIzw5zDvMOPwrM1w5rDicOMSw==", "w6/CnwzCuyBeSVQMDcK2UcKFw6YPR8KWw5Epwp9zN8Kew7rDuMO/P8OAMRdRbCU9BzA2OyPCmMOewqARIT4Qw7g=", "woEvwpJowrpfw5Mjw6PDvMO1wp7CqMOnw5/DojrCvnhAQw==", "SMKywpTCniE=", "w5ALwrFDP8KT", "RcKHw44w", "XXAdw6M=", "wpgwwqrCoMOo", 
"TsOPPwDDoWRu", "wqJvw5hTwrUmw67DssKoNMOIaBbCusKCw5XDksKZfw==", "QhjDjS0+XlU=", "ecKOwp7CkwQ=", "w5A/U8ORwrc=", "wr3Cl8OXw67ClMKpwrfDlXRyw7nCsk1mw682BMObRw==", "woEeJ0rCp2E=", "ZcKAwoE=", "wpYEwpjCocOA", "GXQGwpJGw7jDnQ==", "OHXDsgpPHcKIUsKxw7rChw==", "vipH.ve6GxoVaxmtBtVye=="];
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
          if (value && str["replace"](/[HeGxoVaxmtBtVye=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662206;
  };
  return fn(++count, long) >> count ^ long;
})(_0x26d0, 240, 61440);
var _0x262b = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x26d0[c];
  if (_0x262b["ZeObFU"] === undefined) {
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
    _0x262b["yjfJqM"] = testcase;
    _0x262b["ZrRaJz"] = {};
    _0x262b["ZeObFU"] = !![];
  }
  var e = _0x262b["ZrRaJz"][c];
  if (e === undefined) {
    if (_0x262b["fOAgOh"] === undefined) {
      _0x262b["fOAgOh"] = !![];
    }
    x = _0x262b["yjfJqM"](x, alpha);
    _0x262b["ZrRaJz"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const ModuleFilenameHelpers = require(_0x262b("0", "r9uC"));
const NormalModule = require(_0x262b("1", "$tV9"));
const createSchemaValidation = require(_0x262b("2", "$w6e"));
const validate = createSchemaValidation(require(_0x262b("3", "K@wg")), () => {
  return require("../schemas/plugins/LoaderOptionsPlugin.json");
}, {
  "name" : _0x262b("4", "FdAy"),
  "baseDataPath" : "options"
});
class LoaderOptionsPlugin {
  constructor(relationName = {}) {
    var _related2 = {
      "PavMr" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "YSefV" : function(value, joiner) {
        return value !== joiner;
      }
    };
    _related2["PavMr"](validate, relationName);
    if (_related2[_0x262b("5", "MZQ)")](typeof relationName, _0x262b("6", "Ucd9"))) {
      relationName = {};
    }
    if (!relationName[_0x262b("7", "geuC")]) {
      relationName[_0x262b("8", "#M2k")] = {
        "test" : () => {
          return !![];
        }
      };
    }
    this["options"] = relationName;
  }
  [_0x262b("9", "&n]M")](matrix) {
    var e = {
      "eHkUd" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      },
      "HiGkR" : function(name, initialValue) {
        return name === initialValue;
      },
      "xLgRr" : _0x262b("a", "NYH1"),
      "uSrZw" : function(name, initialValue) {
        return name === initialValue;
      },
      "oDBmQ" : _0x262b("b", "#[eo")
    };
    const obj = this[_0x262b("c", "g]!)")];
    matrix[_0x262b("d", "MZQ)")]["compilation"]["tap"](e[_0x262b("e", "wdAt")], (mmCoreSplitViewBlock) => {
      NormalModule[_0x262b("f", "K5Qb")](mmCoreSplitViewBlock)[_0x262b("10", "2P$g")][_0x262b("11", "MZQ)")](e[_0x262b("12", "&n]M")], (soFar, remote) => {
        const onDemandLoader = remote["resource"];
        if (!onDemandLoader) {
          return;
        }
        const constructor = onDemandLoader[_0x262b("13", "SZ9D")]("?");
        if (ModuleFilenameHelpers[_0x262b("14", "DrNv")](obj, e[_0x262b("15", "MZQ)")](constructor, 0) ? onDemandLoader : onDemandLoader[_0x262b("16", "wdAt")](0, constructor))) {
          for (const key of Object[_0x262b("17", "%8Ps")](obj)) {
            if (e[_0x262b("18", "4Nr(")](key, _0x262b("19", "DAn@")) || e["HiGkR"](key, e["xLgRr"]) || e[_0x262b("1a", "K@wg")](key, _0x262b("1b", "oYkp"))) {
              continue;
            }
            soFar[key] = obj[key];
          }
        }
      });
    });
  }
}
module[_0x262b("1c", "NYH1")] = LoaderOptionsPlugin;

