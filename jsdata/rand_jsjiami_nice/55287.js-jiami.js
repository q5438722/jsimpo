'use strict';
var vip = "vip.v6";
var _0x5742 = [vip, "wojCqMOxw6lSRmBPwpPDlcK7w4BpWnpAw7w=", "wrg7w6sH", "CMKtwqDCjMOXJjfDrhDCkD4wacOQDBsH", "SB4tVsO2RijCksKpwrXDtBwqwqrDmFfDmMOk", "JcOPB2M=", "esOLeHHCkMO6", "wr3CucKSdFU=", "wqnCv8Oiw61iU3pUwqQ=", "wo3DlGPCtcOnRMOsw4nCrMOfw7p/HMKKw5xdw40/wpvDnsK9NsKowotwwpjDlAEfw6Y2w6zCh2LCtgHDjy8=", "f8KEW3TDnEVqwprDhw==", "GcKQw7dI", "wrMmw7oHDcKLRkE=", "bznDgsOENX3DgD0=", "vtiVGQp.vrP6qszqWbteGC=="];
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
          if (value && str["replace"](/[tVGQrPqszqWbteGC=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662065;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5742, 204, 52224);
var _0x56fd = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5742[a];
  if (_0x56fd["WCtqQz"] === undefined) {
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
    _0x56fd["MUrMor"] = testcase;
    _0x56fd["gxQiTC"] = {};
    _0x56fd["WCtqQz"] = !![];
  }
  var A = _0x56fd["gxQiTC"][a];
  if (A === undefined) {
    if (_0x56fd["opHZdd"] === undefined) {
      _0x56fd["opHZdd"] = !![];
    }
    value = _0x56fd["MUrMor"](value, opt_max);
    _0x56fd["gxQiTC"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const common = require(_0x56fd("0", "PT&X"));
const assert = require("assert");
const {
  inspect : inspect
} = require(_0x56fd("1", "Ufq8"));
const N = 2;
function cb() {
  throw new Error;
}
for (let i = 0; i < N; ++i) {
  process[_0x56fd("2", "XrKL")](common[_0x56fd("3", "NLBU")](cb));
}
process["on"](_0x56fd("4", "cuL$"), common["mustCall"](N));
process["on"](_0x56fd("5", "XrKL"), function() {
  var args = {
    "bAoFQ" : _0x56fd("6", "f]K(")
  };
  process[_0x56fd("7", "$vsz")](args["bAoFQ"]);
});
[null, 1, _0x56fd("8", "PT&X"), {}, [], Infinity, !![]]["forEach"]((callback) => {
  var element = {
    "wwqmX" : "ERR_INVALID_CALLBACK",
    "NYjoH" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  assert[_0x56fd("9", "YMt2")](() => {
    return process["nextTick"](callback);
  }, {
    "code" : element[_0x56fd("a", "CA1$")],
    "name" : _0x56fd("b", "cuL$"),
    "message" : _0x56fd("c", "Wd2I") + element["NYjoH"](inspect, callback)
  });
});

