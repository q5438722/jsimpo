'use strict';
var vip = "vip.v6";
var _0x5b68 = [vip, "w4DCiSjDssKiwqXCkcO3wpQgJsOB", "woB4bE0RIA==", "wrTDmcK0YU0TLSbCmw==", "wr7Dk8KlVW0HKALChmfChMOV", "w6TCrMK3", "ZwRDwqfDqCRlwqR0", "wr7Dk8Kl", "cARDwpjDvTVp", "b8Kww6vDmXQ=", "TU10wogF", "wrtSGsKRwrBww5Fu", "CcKVNjRJ", "UsKleQ3DuA==", "vip.LHXvo6FZmFgwdIHeLwNq=="];
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
          if (value && str["replace"](/[LHXoFZmFgwdIHeLwNq=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662742;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5b68, 286, 73216);
var _0x4d78 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5b68[a];
  if (_0x4d78["rILNWG"] === undefined) {
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
    _0x4d78["uwYElQ"] = testcase;
    _0x4d78["zKMYyt"] = {};
    _0x4d78["rILNWG"] = !![];
  }
  var A = _0x4d78["zKMYyt"][a];
  if (A === undefined) {
    if (_0x4d78["DMxUGw"] === undefined) {
      _0x4d78["DMxUGw"] = !![];
    }
    value = _0x4d78["uwYElQ"](value, opt_max);
    _0x4d78["zKMYyt"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const common = require(_0x4d78("0", "va]t"));
const assert = require(_0x4d78("1", "UOl!"));
const primValues = {
  "string" : "a",
  "number" : 1,
  "object" : {
    0 : "a"
  },
  "array" : [1, 2, 3]
};
const bench = common["createBenchmark"](main, {
  "primitive" : Object["keys"](primValues),
  "n" : [2E4],
  "strict" : [0, 1],
  "method" : [_0x4d78("2", "1Med"), _0x4d78("3", "1Med")]
});
function main({
  n : url,
  primitive : primitive,
  method : method,
  strict : options
}) {
  var shortcuts = {
    "ktRgp" : _0x4d78("4", "attS"),
    "rSPan" : _0x4d78("5", "o[Ll"),
    "PCFrk" : _0x4d78("6", "1Med"),
    "ndyeo" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    }
  };
  const _0x3022c0 = primValues[primitive];
  const indexedDB = _0x3022c0;
  const _0x3f27d9 = _0x3022c0;
  const _0xa028a5 = "b";
  if (options) {
    method = method[_0x4d78("7", "o[Ll")](shortcuts[_0x4d78("8", "c7s*")], shortcuts[_0x4d78("9", "^fio")]);
  }
  const provideHostSide = assert[method];
  const processProfile = method[_0x4d78("a", "rgB*")](shortcuts["PCFrk"]) ? _0xa028a5 : _0x3f27d9;
  bench[_0x4d78("b", "]mIY")]();
  for (let s_instr = 0; shortcuts[_0x4d78("c", "4Io3")](s_instr, url); ++s_instr) {
    provideHostSide([indexedDB], [processProfile]);
  }
  bench["end"](url);
}
;
