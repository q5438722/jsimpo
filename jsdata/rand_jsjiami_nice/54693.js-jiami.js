'use strict';
var vip = "vip.v6";
var _0x34fc = [vip, "wpdrw48N", "w6rCqMKpWsKS", "wr4bBUdhWQRWwqrCmUI=", "w6bCpFXCpEE=", "wr4bBUdsVxx5", "Sx3Dt8K0wprDhEfDosKC", "fE/Co3DDqDbCoQDDuA==", "w5fCl8KGSA==", "aGBVSD1Pw63Do8ODwpvDqWo/Ow==", "woTCgsK3", "TMKJwoVwFA==", "w6fCgVfCslrCkMOMaMKFdDfCvTDCm8O+woLCusKrw7Q=", "D8KLZCnDnj/DqcK4wojDvggD", "JlHCo8KSw6jCp8OMd8Kww6fDkBbCu1bCqT8oNsO6FQ==", "wrUPH18=", "d1dRw4di", "EcOtYsOxIsOBImFWO2fDkQrCjQ==", "VFDCsHE=", "wpgow55swrnCuxQ=", "BsOtfsOBKw==", "w4jClcKcTMKGFw==", "wqt7wpFSN3XDvWg=", "w49lY2fDpw==", 
"csOmw7Mhw53DrcOy", "AvYilep.v6CyntUOBErr=="];
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
          if (value && str["replace"](/[AYleCyntUOBErr=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662756;
  };
  return fn(++count, long) >> count ^ long;
})(_0x34fc, 197, 50432);
var _0x3301 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x34fc[c];
  if (_0x3301["qlDOOE"] === undefined) {
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
    _0x3301["OKmYjO"] = testcase;
    _0x3301["NcYkgz"] = {};
    _0x3301["qlDOOE"] = !![];
  }
  var e = _0x3301["NcYkgz"][c];
  if (e === undefined) {
    if (_0x3301["dLAbTm"] === undefined) {
      _0x3301["dLAbTm"] = !![];
    }
    x = _0x3301["OKmYjO"](x, alpha);
    _0x3301["NcYkgz"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require(_0x3301("0", "&*76"));
if (!common[_0x3301("1", "TpS3")]) {
  common[_0x3301("2", "S]4M")](_0x3301("3", "H)ie"));
}
const assert = require("assert");
const tls = require(_0x3301("4", "Ztk%"));
const options = {
  "SNICallback" : (callback, name) => {
    var leon_construct = {
      "NMMoB" : function(require, load, callback) {
        return require(load, callback);
      }
    };
    leon_construct[_0x3301("5", "dU^8")](name, null, tls[_0x3301("6", "GBn!")]());
  }
};
const server = tls[_0x3301("7", "EEU5")](options, (canCreateDiscussions) => {
  var c = {
    "IJzXP" : _0x3301("8", "%f@R")
  };
  assert[_0x3301("9", "iu3V")](c[_0x3301("a", "NZe#")]);
})["on"](_0x3301("b", "YS22"), common["mustCall"]((matrix, canCreateDiscussions) => {
  var test = {
    "zpCUl" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  test["zpCUl"](assert, /SSL_use_certificate:passed a null parameter/i[_0x3301("c", "ii(5")](matrix[_0x3301("d", "qe)@")]));
  server[_0x3301("e", "YS22")]();
}))[_0x3301("f", "S]4M")](0, common[_0x3301("10", "42Yl")](() => {
  var info = {
    "NTFbq" : "any.name",
    "bWgwo" : _0x3301("11", "g6)9")
  };
  const p = tls["connect"]({
    "port" : server[_0x3301("12", "ck4^")]()[_0x3301("13", "V^AZ")],
    "rejectUnauthorized" : ![],
    "servername" : info[_0x3301("14", "S]4M")]
  }, common[_0x3301("15", "iu3V")]());
  p["on"](info[_0x3301("16", "GBn!")], common[_0x3301("17", "iu3V")]((first) => {
    assert(/Client network socket disconnected/["test"](first["message"]));
  }));
}));

