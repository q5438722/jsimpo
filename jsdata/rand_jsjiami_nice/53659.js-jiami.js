'use strict';
var vip = "vip.v6";
var _0x3e43 = [vip, "w5fCiD/Cvg==", "SSPCjcOtw4tiwrLDt8Kj", "NB03EcKZRxx1YVTDu8OdHsKCw5s=", "Si9Uwo16Cwo=", "w4bCmMKEVsOuwpIJwqNC", "wrnCoMOVN8ONLcKvw49XJ3BUecOReBpBAw==", "wpUdPwUFKMO5w67ChMOMKRrDoA==", "SSPCi8Ogw5pQw6/Cs8KzwqXDsH7DsQvDs8OOwpwkSMOXwrcNw6fDu8OQwpwkw43Ct2/Dq0k/wrNTwrvDiMOwMEvDqw==", "Uyhlwpc=", "w7jDiMKncwUNIMOGwoJrQGXDgjLCiA==", "NviRTpE.vE6CAtbJYoEtuMB=="];
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
          if (value && str["replace"](/[NRTEECAtbJYoEtuMB=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662057;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3e43, 344, 88064);
var _0x5f4b = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x3e43[a];
  if (_0x5f4b["lkhySD"] === undefined) {
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
    _0x5f4b["bczRIw"] = testcase;
    _0x5f4b["mxcsNu"] = {};
    _0x5f4b["lkhySD"] = !![];
  }
  var A = _0x5f4b["mxcsNu"][a];
  if (A === undefined) {
    if (_0x5f4b["fnFHQY"] === undefined) {
      _0x5f4b["fnFHQY"] = !![];
    }
    value = _0x5f4b["bczRIw"](value, opt_max);
    _0x5f4b["mxcsNu"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const common = require(_0x5f4b("0", "1#k%"));
const fixtures = require(_0x5f4b("1", "pjTM"));
const assert = require("assert");
const {
  exec : exec
} = require(_0x5f4b("2", "jNE#"));
const nodeBinary = process["argv"][0];
if (!common["isMainThread"]) {
  common["skip"](_0x5f4b("3", "%]$!"));
}
const selfRefModule = fixtures[_0x5f4b("4", "0[M5")](_0x5f4b("5", "#@SB"));
const fixtureA = fixtures[_0x5f4b("6", "zjKG")](_0x5f4b("7", "%]$!"));
exec('"' + nodeBinary + _0x5f4b("8", "BO79") + fixtureA + '"', {
  "cwd" : selfRefModule
}, (expected, a, canCreateDiscussions) => {
  assert[_0x5f4b("9", "0[M5")](expected);
  assert["strictEqual"](a, "A\n");
});

