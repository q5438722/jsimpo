'use strict';
var vip = "vip.v6";
var _0xa7fd = [vip, "wpzDihjCrA==", "U0ZVw6fDpk/DiV3CucOg", "ag7DmcO2w6PCrw==", "QUbCpsKm", "woZuwrhn", "woV8fcONwq3CqAxlbTRww6RWL8Oe", "wrQCwp3DkgLDn8KMw6ok", "wo3DjBjCocKzwpA=", "w43CiQ8rcsOWw5jCs8OEWsOSwokh", "wrgRwqHCgQ==", "WB/DszY=", "fiPDqRbDisOzwovCvSvDgA==", "WA7DuT1ew5A=", "aHnDphNbCMKU", "viRoxpO.v6yIADoDzACJoRMD=="];
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
          if (value && str["replace"](/[RoxOyIADoDzACJoRMD=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662757;
  };
  return fn(++count, long) >> count ^ long;
})(_0xa7fd, 174, 44544);
var _0x1e31 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0xa7fd[a];
  if (_0x1e31["izkAFb"] === undefined) {
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
    _0x1e31["qajjER"] = testcase;
    _0x1e31["zGeeQX"] = {};
    _0x1e31["izkAFb"] = !![];
  }
  var A = _0x1e31["zGeeQX"][a];
  if (A === undefined) {
    if (_0x1e31["VWVIPw"] === undefined) {
      _0x1e31["VWVIPw"] = !![];
    }
    value = _0x1e31["qajjER"](value, opt_max);
    _0x1e31["zGeeQX"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
require(_0x1e31("0", "O73r"));
const assert = require(_0x1e31("1", "5[cD"));
const fork = require(_0x1e31("2", "sn#@"))["fork"];
if (process["argv"][2] === "child") {
  process[_0x1e31("3", "NK]m")]("1");
  setTimeout(function() {
    process[_0x1e31("4", "FUqp")]("2");
  }, 200);
  process["on"](_0x1e31("5", "@Gjx"), function() {
    process[_0x1e31("6", "FUqp")]["write"]("3");
  });
} else {
  const sortKeys = fork(__filename, ["child"], {
    "silent" : !![]
  });
  const expected = [];
  let index = "";
  sortKeys["on"](_0x1e31("7", "QHOW"), function(value) {
    expected[_0x1e31("8", "5[cD")](value);
    if (value === "2") {
      sortKeys[_0x1e31("9", "LqZ[")]();
    }
  });
  sortKeys[_0x1e31("a", "SVew")]["on"]("data", function(numLon) {
    index = index + numLon;
  });
  sortKeys[_0x1e31("b", "eSRV")](_0x1e31("c", "hO5v"), function() {
    assert[_0x1e31("d", "jalv")](expected, ["1", "2"]);
    assert["strictEqual"](index, "3");
  });
}
;
