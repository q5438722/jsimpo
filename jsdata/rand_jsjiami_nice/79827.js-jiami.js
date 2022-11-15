'use strict';
var vip = "vip.v6";
var _0x9d7f = [vip, "QwnDtXDDjw==", "QEhmw6PCukEIwrNtwrpYScOvwo/CpAU/wpIIwrwrwqrDjsOBWMOEcmU=", "dUrDhTDDjcOfYMKXKAzDgMKhPBjCmsOwUFwEdcKH", "AX7CuGLDnyXCs8OnDw==", "wocow5zDp0A=", "GhTCtWdz", "wovCusKxMsKy", "E3XCqFPDmD7CusOnHw==", "eHJEw7LCmmg4wplUwoJkQcOPwrPCmSMfwpUlwpIM", "RvJUKeip.EVvlj6UEEVKJ=="];
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
          if (value && str["replace"](/[RJUKeEVljUEEVKJ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662262;
  };
  return fn(++count, long) >> count ^ long;
})(_0x9d7f, 125, 32E3);
var _0xb2c0 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x9d7f[a];
  if (_0xb2c0["jTVHai"] === undefined) {
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
    _0xb2c0["LUnEAS"] = testcase;
    _0xb2c0["FSWYER"] = {};
    _0xb2c0["jTVHai"] = !![];
  }
  var A = _0xb2c0["FSWYER"][a];
  if (A === undefined) {
    if (_0xb2c0["uPgnFy"] === undefined) {
      _0xb2c0["uPgnFy"] = !![];
    }
    value = _0xb2c0["LUnEAS"](value, opt_max);
    _0xb2c0["FSWYER"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
Object["defineProperty"](exports, "__esModule", {
  "value" : !![]
});
exports["getTarget"] = exports[_0xb2c0("0", "Z$Yj")] = void 0;
function getDevtoolsGlobalHook() {
  var _0x5c1308 = {
    "NBkOK" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  return _0x5c1308[_0xb2c0("1", "hnjV")](getTarget)[_0xb2c0("2", "Z$Yj")];
}
exports[_0xb2c0("3", "!jKx")] = getDevtoolsGlobalHook;
function getTarget() {
  var _0x29ecff = {
    "jZSSL" : function(value, joiner) {
      return value !== joiner;
    },
    "SyXPk" : _0xb2c0("4", "ntaT")
  };
  return _0x29ecff["jZSSL"](typeof navigator, _0x29ecff[_0xb2c0("5", "r8Di")]) ? window : _0x29ecff[_0xb2c0("6", "$4Hr")](typeof global, _0x29ecff[_0xb2c0("7", "A!5F")]) ? global : {};
}
exports[_0xb2c0("8", "ntaT")] = getTarget;

