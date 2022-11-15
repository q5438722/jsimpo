'use strict';
var vip = "vip.v6";
var _0x421d = [vip, "HsORMEc1", "vuip.NJvD6MZGCYcMbKndNF=="];
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
          if (value && str["replace"](/[uNJDMZGCYcMbKndNF=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662814;
  };
  return fn(++count, long) >> count ^ long;
})(_0x421d, 268, 68608);
var _0x5f55 = function(c, f) {
  c = ~~"0x"["concat"](c);
  var s = _0x421d[c];
  if (_0x5f55["AdZOap"] === undefined) {
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
    _0x5f55["ZPmECn"] = testcase;
    _0x5f55["eIJcrx"] = {};
    _0x5f55["AdZOap"] = !![];
  }
  var h = _0x5f55["eIJcrx"][c];
  if (h === undefined) {
    if (_0x5f55["pTCizb"] === undefined) {
      _0x5f55["pTCizb"] = !![];
    }
    s = _0x5f55["ZPmECn"](s, f);
    _0x5f55["eIJcrx"][c] = s;
  } else {
    s = h;
  }
  return s;
};
function TestNestedLoops() {
  var getComputeFrom = {
    "dRXQU" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "fXVNU" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    }
  };
  var _0x64f23f = 0;
  var el = 0;
  for (; getComputeFrom["dRXQU"](el, 200); el = el + 1) {
    var el = 0;
    for (; getComputeFrom[_0x5f55("0", "cSmt")](el, 200); el = el + 1) {
      _0x64f23f = _0x64f23f + 1;
    }
  }
  return _0x64f23f;
}
assertEquals(200 * 200, TestNestedLoops());

