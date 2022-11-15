'use strict';
var vip = "vip.v6";
var _0x11fb = [vip, "Ll0Iw73CpmQ=", "wrbDg8O+wqo=", "wq9NZ8O2w7Q=", "wpgawoQCw4kRNA==", "wrpIb8KKw5xJMA==", "esOgPsOuw6E=", "w5nDk2VDScKxS13CosKaWT8C", "wpXDjBjCukQXI8KUCQzCh8Ofwp3CpsO8WMKTQMORw7MrY8KZw4sYasOywrLCunFKCMK1wrjDokk=", "OsOQfX/DrsOebQ==", "D8KEQwHCjhHDmF42LsKEwqHDmQ==", "wpB4Bn0=", "wq/Dmg7CkUXDnx9b", "eis4HMOcbsKPIcK1w7llwo4=", "XXHCq8KRwrw=", "wo1BSMO0w4zCscKXOQ==", "vMbipmE.rSrvyqFsfV6dbWx=="];
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
          if (value && str["replace"](/[MbmErSryqFsfVdbWx=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662945;
  };
  return fn(++count, long) >> count ^ long;
})(_0x11fb, 486, 124416);
var _0x683d = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x11fb[a];
  if (_0x683d["vMXbZl"] === undefined) {
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
    _0x683d["xETrik"] = testcase;
    _0x683d["hMPEpy"] = {};
    _0x683d["vMXbZl"] = !![];
  }
  var A = _0x683d["hMPEpy"][a];
  if (A === undefined) {
    if (_0x683d["IbSmeQ"] === undefined) {
      _0x683d["IbSmeQ"] = !![];
    }
    value = _0x683d["xETrik"](value, opt_max);
    _0x683d["hMPEpy"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const path = require("path");
const child = require(_0x683d("0", "kPgw"));
it(_0x683d("1", "gFw6"), (result) => {
  var zlib = {
    "GtJah" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "niHEb" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  const childOldValue = [require[_0x683d("2", "JFeI")]("@babel/cli/bin/babel.js"), path["join"](__dirname, ".."), _0x683d("3", "xTNP"), path[_0x683d("4", "BmB0")](__dirname, _0x683d("5", "8kN%")), "--ignore", _0x683d("6", "a!E^")];
  const PL$12 = child[_0x683d("7", "*gGI")](process[_0x683d("8", "Mxqp")], childOldValue);
  let done = "";
  let nextLeftGripPositionPx = "";
  PL$12[_0x683d("9", "7lUV")]["on"](_0x683d("a", "#vFC"), function(r) {
    done = done + r;
  });
  PL$12["stdout"]["on"]("data", function(delta) {
    nextLeftGripPositionPx = nextLeftGripPositionPx + delta;
  });
  PL$12["on"]("close", function() {
    zlib[_0x683d("b", "Mxqp")](expect, done)[_0x683d("c", "xtf]")]("");
    zlib["GtJah"](expect, nextLeftGripPositionPx)["not"][_0x683d("d", "0gfP")]("");
    zlib[_0x683d("e", "mIaX")](result);
  });
}, 3E4);

